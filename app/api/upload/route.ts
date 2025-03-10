// import { NextResponse } from "next/server";
// import { NextRequest } from "next/server";
// import fs from "fs";
// import { pipeline } from "stream";
// import { promisify } from "util";
// const pump = promisify(pipeline);

// export async function POST(req: NextRequest, res: NextResponse) {
//   try {
//     console.log("start upload endpoint");
//     const formData = await req.formData();
//     const file = formData.get("file") as File;
//     if (!file) {
//       return NextResponse.json(
//         { status: "fail", error: "No file provided" },
//         { status: 400 },
//       );
//     }
//     const filePath = `./public/blog-images/${file.name}`;
//     await pump(
//       file.stream() as unknown as NodeJS.ReadableStream,
//       fs.createWriteStream(filePath),
//     );
//     console.log("end upload endpoint");
//     const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}`;
//     const fileUrl = ``;

//     return NextResponse.json({ data: fileUrl });
//   } catch (e) {
//     return NextResponse.json({ status: "fail", data: e });
//   }
// }


import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import fs from "fs";
import { pipeline } from "stream";
import { promisify } from "util";

const pump = promisify(pipeline);

export async function POST(req: NextRequest) {
  try {
    console.log("start upload endpoint");
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { status: "fail", error: "No file provided" },
        { status: 400 }
      );
    }

    const filePath = `./public/blog-images/${file.name}`;
    await pump(
      file.stream() as unknown as NodeJS.ReadableStream,
      fs.createWriteStream(filePath)
    );

    console.log("end upload endpoint");

    // Construct the full URL for the uploaded image
    const baseUrl = `${req.nextUrl.protocol}//${req.nextUrl.host}`;
    const fileUrl = `${baseUrl}/blog-images/${file.name}`;
    return NextResponse.json({ data: fileUrl });
  } catch (e) {
    console.error(e); // Log the error for debugging
    return NextResponse.json({ status: "fail", error: "An error occurred" }, { status: 500 });
  }
}
