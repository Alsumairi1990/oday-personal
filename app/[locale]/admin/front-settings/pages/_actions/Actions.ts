"use server"
import { z } from "zod"
// import fs from "fs/promises"
import path from 'path';
import fs from 'fs';


// Utility function to recursively read all .ts files in a directory
export const getAllTsPages = (dir: string) => {
  const tsPages: string[] = [];
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively fetch .ts files in subdirectories
      tsPages.push(...getAllTsPages(filePath));
    } else if (file.endsWith('.ts')) {
      // Add only .ts files to the list
      tsPages.push(filePath);
    }
  });

  return tsPages;
};

export const getAllPages= ()=>{
const pagesDir = path.join(process.cwd(), 'app/en/(default-pages)');
const tsPages = getAllTsPages(pagesDir);
console.log(tsPages);
return tsPages;
}
