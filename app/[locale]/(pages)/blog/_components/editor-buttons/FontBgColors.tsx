'use client'

import { Editor } from "@tiptap/react";
import { useEffect, useState } from "react";


interface Props {
    editor : Editor
}
const FontBgColors = ({editor}:Props) => {
     const [searchTerm, setSearchTerm] = useState<string>('');
     
  
    useEffect(() =>{
        
       },[])
    
    return (
        <>
   <div className="absolute edit-menu top-[35px] ltr:left-0 rtl:right-0 flex flex-col bg-white z-[40] border-x border-y border-x-gray-300 border-y-gray-300">
                            <p className="mb-0 py-1 bg-gray-100 text-mm px-2">
                              Color options
                            </p>
                            <div className="p-2 flex w-48 flex-wrap gap-y-1 justify-between">
                              <button
                                onClick={() =>
                                  editor
                                    .chain()
                                    .focus()
                                    .toggleHighlight({ color: "#ffc078" })
                                    .run()
                                }
                                className="flex-15 h-[25px] bg-[#ffc078] text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor
                                    .chain()
                                    .focus()
                                    .toggleHighlight({ color: "#ef4444" })
                                    .run()
                                }
                                className="flex-15 bg-red-500 text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor
                                    .chain()
                                    .focus()
                                    .toggleHighlight({ color: "#2563eb" })
                                    .run()
                                }
                                className="flex-15 bg-blue-600 text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor
                                    .chain()
                                    .focus()
                                    .toggleHighlight({ color: "#000" })
                                    .run()
                                }
                                className="flex-15 bg-black text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor
                                    .chain()
                                    .focus()
                                    .toggleHighlight({ color: "#4b5563" })
                                    .run()
                                }
                                className="flex-15 bg-gray-600 text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor
                                    .chain()
                                    .focus()
                                    .toggleHighlight({ color: "#eab308" })
                                    .run()
                                }
                                className="flex-15 bg-yellow-500 text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                                }
                                className="flex-15 h-[25px] bg-red-300 text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                                }
                                className="flex-15 bg-blue-800 text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                                }
                                className="flex-15 bg-sky-600 text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor.chain().focus().toggleHeading({ level: 4 }).run()
                                }
                                className="flex-15 bg-[#800080] text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor.chain().focus().toggleHeading({ level: 5 }).run()
                                }
                                className="flex-15 bg-[#dd0] text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                              <button
                                onClick={() =>
                                  editor.chain().focus().toggleHeading({ level: 6 }).run()
                                }
                                className="flex-15 bg-[#003300] text-sm w-[25px] font-semibold text-gray-600"
                              ></button>
                            </div>
                          </div>
      </>
      )
}
export default FontBgColors