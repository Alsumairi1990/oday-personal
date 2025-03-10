'use client'
import CustomHeading from "@/app/_components/admin/editor/CustomHeading";
import Bold from "@tiptap/extension-bold";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import {  useEffect, useState } from "react";
import Document from "@tiptap/extension-document";
import Underline from "@tiptap/extension-underline";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import TextStyle from "@tiptap/extension-text-style";
import AlignArea from "./editor-buttons/AlignArea";
import TextAlign from "@tiptap/extension-text-align";
import Subscript from "@tiptap/extension-subscript";
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import ThirdArea from "./editor-buttons/ThirdArea";
// import TableArea from "./editor-buttons/TableArea";
// import FifthArea from "./editor-buttons/FifthArea";
import Image from "@tiptap/extension-image";

import ImageBtn from "./editor-buttons/ImageBtn";
import ImageAlign from "@/app/_components/admin/editor/ImageAlign";
import LineHeight from "@/app/_components/admin/editor/LineHeight";
import FontArea from "./editor-buttons/FontArea";
import TwitterNode from "@/app/_components/admin/editor/TwitterNode";
import InstagramNode from "@/app/_components/admin/editor/InstagramNode";
import SocialBtn from "./editor-buttons/SocialBtn";

interface Props {
  initialContent : string,
  closeEdit: (value: boolean) => void;
  slug : string

}
const EditBody = ({ initialContent, closeEdit,slug }: Props) => {
  const [content, setContent] = useState(initialContent);
 


  const editor = useEditor({
    extensions: [StarterKit, 
      CustomHeading,Underline,Color,TextStyle,Highlight.configure({ multicolor: true }),Bold,
      
      TextAlign.configure({
            types: ["heading", "paragraph"],
          }),
      Subscript,
    
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      // Image,
      ImageAlign,
      LineHeight,
      TwitterNode,
      InstagramNode,


      Document,
      
    ],
    content: initialContent, // Load saved content
    editable: true,
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none border-x-0 p-4 border-y-0",
      },
    },
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML()); // Capture edited content
    },
  });


  
  // When content is fetched, update the editor
  useEffect(() => {
    if (editor && initialContent) {
      editor.commands.setContent(initialContent);
    }
    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }
  }, [editor, initialContent]);

  const saveContent = async () => {
    //  const title = slug;
  if (!editor) return;
     const updatedContent = editor.getHTML(); 

  const response = await fetch("/api/front/blogs/body", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ slug, content: updatedContent }),
  });

  const data = await response.json();
  console.log(data); // Logs success message or error
  };
  const closeModel = ()=>{
    closeEdit(false);
    if (typeof document !== "undefined") {
      document.body.style.overflow = "auto";
    }
    
  }
  

  return (
    <div className="fixed w-full bg-white h-full left-0 z-40 top-0">
      {editor &&  <div className="px-6 py-4 border-b flex border-gray-300">
                {/* Start of Font Area  */}
                <div className="flex-20 flex gap-x-2 gap-y-3 flex-wrap">
                  <FontArea editor={editor}  />
                  </div>
                {/* End of font Area */}
               {/* Strat Align  area  */}
               <div className="border-x border-x-gray-200 flex-15 px-3 flex gap-x-2 gap-y-3 flex-wrap">
                   <AlignArea editor={editor}   />
               </div>    
               {/* End Align Area */}

               {/* Strat Third  area  */}
               <div className="border-x border-x-gray-200 flex-15 px-3 flex gap-x-2 gap-y-3 flex-wrap">
                   <ThirdArea editor={editor}   />
               </div>    
               {/* End Third Area */}

              {/* Strat Table  area  */}
              <div className="border-x border-x-gray-200 flex-15 px-3 flex gap-x-2 gap-y-3 flex-wrap">
                {/* <TableArea editor={editor}   /> */}
               </div>    
               {/* End Table Area */}

                 {/* Strat Table  area  */}
              <div className="border-x border-x-gray-200 flex-15 px-3 flex gap-x-2 gap-y-3 flex-wrap">
                {/* <FifthArea editor={editor}   /> */}
                {/* <ImageBtn editor ={editor}   /> */}
                <SocialBtn   editor = {editor}  />

               </div>    
               {/* End Table Area */}

      </div>}
      <div className="px-4 pt-5 pb-4">
         <EditorContent editor={editor}
              style={{ height: "70vh", scrollBehavior: "smooth", overflowY: "auto", outline: "none" }}
       />
      </div>
      <div className="absolute bottom-2 ltr:left-2 rtl:right-2 z-80">

      </div>
      <button onClick={saveContent} className="mt-4 rounded-md p-2 bg-green-500 text-white">
        Update 
        {/*{initialContent}*/}
      </button>
      <button onClick={() => {closeModel()}} className="mt-4 rounded-md mx-6 p-2 bg-blue-500 text-white">
        close Edit 
        {/*{initialContent}*/}
      </button>
    </div>
  );
};

export default EditBody;
