"use server"

import { getServerSession } from "next-auth";
import authOptions from "@/utils/AuthOptions";
import fs from "fs/promises"

// Edit HEro Section main image 
export async function editHeroImag():Promise<string>{
    try {
        return ''
        
    } catch (error) {
        console.log("[editHeroImag]"+error);
        throw error;
        
    }
}