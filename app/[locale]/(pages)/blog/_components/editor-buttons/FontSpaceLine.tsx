'use client'

import { Editor } from "@tiptap/react";
import { useEffect, useState } from "react";


interface Props {
    editor : Editor
}
const FontSpaceLine = ({editor}:Props) => {
    useEffect(() =>{
        
       },[])
    
    return (
      <>
       <button className="py-2 text-gray-600 text-base border-b border-gray-200" onClick={() => editor?.commands.setLineHeight('1.5')}>1.5</button>
       <button className="py-2 text-gray-600 text-base border-b border-gray-200" onClick={() => editor?.commands.setLineHeight('2')}>2</button>
       <button className="py-2 text-gray-600 text-base border-b border-gray-200" onClick={() => editor?.commands.setLineHeight('2.5')}>2.5</button>
       <button className="py-2 text-gray-600 text-base border-b border-gray-200" onClick={() => editor?.commands.setLineHeight('3')}>3</button>
       <button className="py-2 text-gray-600 text-base border-b border-gray-200" onClick={() => editor?.commands.setLineHeight('3.5')}>3.5</button>
      </>
      )
}
export default FontSpaceLine