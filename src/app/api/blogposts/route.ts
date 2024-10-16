import { NextRequest, NextResponse } from "next/server";
import { Db, MongoClient } from "mongodb";
import { writeFile } from "fs/promises";
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

export async function GET() {
  try {
    await connectToDatabase();
    const collection = db.collection("posts");

    const posts = await collection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(posts);
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: (error as Error).message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
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

    let imagePath = "";
    if (image) {
      try {
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const uploadDir = path.join(process.cwd(), "public", "uploads");

        await fs.mkdir(uploadDir, { recursive: true });

        const filename = Date.now() + "-" + image.name;
        imagePath = `/uploads/${filename}`;
        await writeFile(path.join(uploadDir, filename), new Uint8Array(buffer));
      } catch (error) {
        console.error("Error saving image:", error);
        return NextResponse.json(
          { error: "Failed to save image", details: (error as Error).message },
          { status: 500 }
        );
      }
    }

    await connectToDatabase();
    const collection = db.collection("posts");

    const result = await collection.insertOne({
      title,
      content,
      tags,
      image: imagePath,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, id: result.insertedId });
  } catch (error) {
    console.error("Error creating blog post:", error);
    return NextResponse.json(
      { error: "Internal Server Error", details: (error as Error).message },
      { status: 500 }
    );
  }
}