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
    const tags = JSON.parse(formData.get("tags") as string || "[]");
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
      imagePath = await saveImage(image, existingPost.image);
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

    if (post.image) {
      await deleteImage(post.image);
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

async function saveImage(image: File, oldImagePath: string | null): Promise<string> {
  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const uploadDir = path.join(process.cwd(), "public", "uploads");

  await fs.mkdir(uploadDir, { recursive: true });

  const filename = `${Date.now()}-${image.name}`;
  const imagePath = `/uploads/${filename}`;
  await writeFile(path.join(uploadDir, filename), buffer);

  if (oldImagePath) {
    await deleteImage(oldImagePath);
  }

  return imagePath;
}

async function deleteImage(imagePath: string) {
  const fullPath = path.join(process.cwd(), "public", imagePath);
  await unlink(fullPath).catch(console.error);
}