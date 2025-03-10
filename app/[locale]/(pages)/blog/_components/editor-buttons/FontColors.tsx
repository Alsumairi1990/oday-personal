'use client'

import { Editor } from "@tiptap/react";
import { useEffect, useState } from "react";


interface Props {
    editor : Editor
}
const FontColors = ({editor}:Props) => {
    useEffect(() =>{
        
       },[])
    
    return (
        <>
         <div
            className={`absolute edit-menu top-[35px] ltr:left-0 rtl:right-0 flex flex-col bg-white z-[40] border-x border-y border-x-gray-300 border-y-gray-300`}
          >
            <div className="border-b pb-1 border-b-gray-200">
            <p className="mb-0 py-1 bg-gray-100 text-mm px-2">
                Color options
            </p>
            <input
                className="my-1"
                type="color"
                onInput={(event) => {
                const target = event.target as HTMLInputElement;
                editor.chain().focus().setColor(target.value).run();
                }}
                value={editor.getAttributes("textStyle").color}
                data-testid="setColor"
            />
            </div>

            <div className="p-2 flex w-48 flex-wrap gap-y-1 justify-between">
            <button
                onClick={() =>
                editor.chain().focus().setColor("#958DF1").run()
                }
                className={`flex-15 bg-[#958DF1] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#958DF1" }) ? "is-active" : ""}`}
                data-testid="setPurple"
            ></button>

            <button
                onClick={() =>
                editor.chain().focus().setColor("#377a24").run()
                }
                className={`flex-15 bg-[#377a24] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#377a24" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>

            <button
                onClick={() =>
                editor.chain().focus().setColor("#300a24").run()
                }
                className={`flex-15 bg-[#300a24] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#300a24" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>

            <button
                onClick={() =>
                editor.chain().focus().setColor("#b7b700").run()
                }
                className={`flex-15 bg-[#b7b700] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#b7b700" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>
            <button
                onClick={() =>
                editor.chain().focus().setColor("#007497").run()
                }
                className={`flex-15 bg-[#007497] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#007497" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>
            <button
                onClick={() =>
                editor.chain().focus().setColor("#0c56df").run()
                }
                className={`flex-15 bg-[#0c56df] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#0c56df" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>
            <button
                onClick={() =>
                editor.chain().focus().setColor("#980cdf").run()
                }
                className={`flex-15 bg-[#980cdf] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#980cdf" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>
            <button
                onClick={() =>
                editor.chain().focus().setColor("#0c4ddf").run()
                }
                className={`flex-15 bg-[#0c4ddf] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#0c4ddf" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>
            <button
                onClick={() =>
                editor.chain().focus().setColor("#b10039").run()
                }
                className={`flex-15 bg-[#b10039] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#b10039" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>
            <button
                onClick={() =>
                editor.chain().focus().setColor("#00a982").run()
                }
                className={`flex-15 bg-[#00a982] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#00a982" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>
            <button
                onClick={() =>
                editor.chain().focus().setColor("#2e2e2e").run()
                }
                className={`flex-15 bg-[#2e2e2e] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#2e2e2e" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>
            <button
                onClick={() =>
                editor.chain().focus().setColor("#0aa6bf").run()
                }
                className={`flex-15 bg-[#0aa6bf] text-sm w-[25px] h-6 font-semibold text-gray-600 ${editor.isActive("textStyle", { color: "#0aa6bf" }) ? "is-active" : ""}`}
                data-testid="setGreen"
            ></button>
            </div>
            <div className="flex items-center border w-auto rounded bg-gray-100 text-md font-semibold px-1 self-center my-2">
            <span className="text-gray-500 mr-2">More Colors</span>
            <input
                className="w-[25px]"
                type="color"
                onInput={(e) => {
                const target = e.target as HTMLInputElement;
                editor.chain().focus().setColor(target.value).run();
                }}
            />
            </div>
        </div>
   
      </>
      )
}
export default FontColors