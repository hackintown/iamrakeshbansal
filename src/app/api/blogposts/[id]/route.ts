import { NextRequest, NextResponse } from "next/server";
import { Db, MongoClient, ObjectId } from "mongodb";
import { writeFile, unlink } from "fs/promises";
import path from "path";
import fs from "fs/promises";

const uri = process.env.MONGODB_URI || "";
const client = new MongoClient(uri);

let db: Db;

async function connectToDatabase() {
  if (!db) {
    await client.connect();
    db = client.db("blogdb");
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const collection = db.collection("posts");

    const post = await collection.findOne({ _id: new ObjectId(params.id) });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const formData = await request.formData();
    const title = formData.get("title") as string;
    const content = formData.get("content") as string;

    let tags = [];
    const tagsData = formData.get("tags");
    if (tagsData) {
      try {
        tags = JSON.parse(tagsData as string);
      } catch (e) {
        console.error("Error parsing tags:", e);
        return NextResponse.json(
          { error: "Invalid tags format" },
          { status: 400 }
        );
      }
    }

    const image = formData.get("image") as File | null;

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    await connectToDatabase();
    const collection = db.collection("posts");

    const existingPost = await collection.findOne({ _id: new ObjectId(params.id) });
    if (!existingPost) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    let imagePath = existingPost.image;
    if (image) {
      try {
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const uploadDir = path.join(process.cwd(), "public", "uploads");

        await fs.mkdir(uploadDir, { recursive: true });

        const filename = Date.now() + "-" + image.name;
        imagePath = `/uploads/${filename}`;
        await writeFile(path.join(uploadDir, filename), new Uint8Array(buffer));

        // Delete the old image if it exists
        if (existingPost.image) {
          const oldImagePath = path.join(process.cwd(), "public", existingPost.image);
          await unlink(oldImagePath).catch(console.error);
        }
      } catch (error) {
        console.error("Error saving image:", error);
        return NextResponse.json(
          { error: "Failed to save image", details: (error as Error).message },
          { status: 500 }
        );
      }
    }

    const result = await collection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: {
          title,
          content,
          tags,
          image: imagePath,
          updatedAt: new Date(),
        },
      }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ error: "No changes made" }, { status: 400 });
    }

    return NextResponse.json({ success: true, id: params.id });
  } catch (error) {
    console.error("Error updating blog post:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    await connectToDatabase();
    const collection = db.collection("posts");

    const post = await collection.findOne({ _id: new ObjectId(params.id) });
    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Delete the associated image if it exists
    if (post.image) {
      const imagePath = path.join(process.cwd(), "public", post.image);
      await unlink(imagePath).catch(console.error);
    }

    const result = await collection.deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ error: "Failed to delete post" }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error deleting blog post:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: (error as Error).message },
      { status: 500 }
    );
  }
}