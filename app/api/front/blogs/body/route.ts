import { NextResponse } from "next/server";
import prisma from '@/utils/prisma'; // Ensure the path is correct

export async function POST(req: Request) {
  try {
    const { slug, content } = await req.json(); // Get title and content from the request body
   console.log("999999999"+content);
    if (!slug || !content) {
      return NextResponse.json({ message: "Title and content are required!" }, { status: 400 });
    }

    // Find the existing post by title
    const existingPost = await prisma.post.findUnique({
      where: { slug : slug },
    });

    if (!existingPost) {
      return NextResponse.json({ message: "Post not found!" }, { status: 404 });
    }

    // Update the post's content
    const updatedPost = await prisma.post.update({
      where: { slug : slug },
      data: { contentAr : content  },
    });

    return NextResponse.json({ message: "Post updated successfully!", updatedPost }, { status: 200 });
  } catch (error) {
    console.error("Error updating post:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
