import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";
const pump = promisify(pipeline);

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    console.log("start upload endpoint");
    const formData = await req.formData();
    // const file = formData.getAll("files")[0] as file;
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json(
        { status: "fail", error: "No file provided" },
        { status: 400 },
      );
    }
    const filePath = `./public/blog-images/${file.name}`;
    // await pump(file.stream(), fs.createWriteStream(filePath));
    await pump(
      file.stream() as unknown as NodeJS.ReadableStream,
      fs.createWriteStream(filePath),
    );
    console.log("end upload endpoint");
    const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}`;
    const fileUrl = `https://tmqmwg-3001.csb.app/images/1204.jpg`;

    return NextResponse.json({ data: fileUrl });
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e });
  }
}
