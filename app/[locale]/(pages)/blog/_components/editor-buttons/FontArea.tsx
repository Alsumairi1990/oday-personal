'use client'

import { Editor } from "@tiptap/react";
import { useEffect, useState } from "react";
import { FaBold, FaCaretDown, FaItalic, FaStrikethrough, FaUnderline } from "react-icons/fa";
import FontBgColors from "./FontBgColors";
import FontColors from "./FontColors";
import { CiLineHeight } from "react-icons/ci";
import FontSpaceLine from "./FontSpaceLine";


interface Props {
    editor : Editor
}
const FontArea = ({editor}:Props) => {
  const [isFontMenuVisible, setIsFontMenuVisible] = useState(false);
  const [isFontColorsVisible, setIsFontColorsVisible] = useState(false);
  const [isEditMenuVisible, setIsEditMenuVisible] = useState(false);
  const [isFontHightVisible, setIsFontHightVisible] = useState(false);


  const toggleEditMenu = () => {
    setIsEditMenuVisible(!isEditMenuVisible);
  };


    useEffect(() =>{
        
       },[])
    
    return (
      <>
      
                <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={`text-sm text-gray-600 w-[25px] rounded ${!editor.can().chain().focus().toggleBold().run() ? "disabled" : ""} ${editor.isActive("bold") ? "is-active text-blue-400 font-semibold" : ""}`}
                    disabled={!editor.can().chain().focus().toggleBold().run()}
                  >
                    <FaBold />
                  </button>
                  <button
                      onClick={() => editor.chain().focus().toggleItalic().run()}
                      className={`text-sm text-gray-600 w-[25px] rounded ${!editor.can().chain().focus().toggleItalic().run() ? "disabled" : ""} ${editor.isActive("italic") ? "is-active text-blue-400" : ""}`}
                      disabled={!editor.can().chain().focus().toggleItalic().run()}
                    >
                      <FaItalic />
                    </button>
                    <button
                      onClick={() => editor.chain().focus().toggleStrike().run()}
                      className={`text-sm text-gray-600 w-[25px] rounded mx-1 ${!editor.can().chain().focus().toggleStrike().run() ? "disabled" : ""} ${editor.isActive("strike") ? "is-active text-blue-400 " : ""}`}
                      disabled={!editor.can().chain().focus().toggleStrike().run()}
                    >
                      <FaStrikethrough />
                    </button>
                    

                    <div
                        className="relative edit-btn flex flex-col items-center w-[85px] mx-2"
                        onClick={toggleEditMenu}
                      >
                        <button className="text-sm w-[85px] font-semibold px-1 py-0.5 bg-gradioent-to-t from-[#e1e4e5] to-[#fbfbfb] text-gray-600 border-x border-y border-x-gray-300 border-y-gray-300 rounded">
                          Headings
                          <i className="fas fa-caret-down text-sm text-gray-500"></i>
                        </button>
                        {isEditMenuVisible && (
                          <div className="absolute edit-menu top-[35px] left-0 flex flex-col bg-white w-full overflow-y-auto max-h-40 z-[40] border-x border-y border-x-gray-300 border-y-gray-300">
                            {/* <p className="mb-0 p2 bg-gray-300 text-sm px-2">Payragrapg</p> */}
                            <div className="p-2 flex flex-col">
                              <button
                                onClick={() =>
                                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                                }
                                className={
                                  editor.isActive("heading", { level: 1 })
                                    ? "is-active"
                                    : ""
                                }
                              >
                                H1
                              </button>
                              <button
                                onClick={() =>
                                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                                }
                                className={
                                  editor.isActive("heading", { level: 2 })
                                    ? "is-active"
                                    : ""
                                }
                              >
                                H2
                              </button>
                              <button
                                onClick={() =>
                                  editor.chain().focus().toggleHeading({ level: 3 }).run()
                                }
                                className={
                                  editor.isActive("heading", { level: 3 })
                                    ? "is-active"
                                    : ""
                                }
                              >
                                H3
                              </button>
                            </div>
                          </div>
                        )}
                      </div>

                      <button
                        onClick={() => editor.chain().focus().toggleUnderline().run()}
                        className={`text-gray-600 ${editor.isActive("underline") ? "is-active" : ""}`}
                      >
                        <FaUnderline />
                      </button>


                      {/* font background color section */}

                      <div className="relative edit-btn flex flex-col items-center  w-[40px] mx-1">
                        <button
                          type="button"
                          onClick={() => setIsFontMenuVisible(!isFontMenuVisible)}
                          className=" text-[14px] text-gray-600 border w-[55px] flex justify-between px-1 rounded "
                        >
                          <span className="leading-[21px] font-semibold ms-0.5">
                            Font
                          </span>
                          <FaCaretDown className="text-md pt-1 text-gray-500 ms-1" />
                        </button>
          
                        {isFontMenuVisible && (
                          <FontBgColors editor={editor}   />
                        )}
                      </div>
                      {/* End Font background color setion */}




                      {/* Font color section  */}
                        <div className="relative flex edit-btn flex-col items-center w-[30px] mr-1 ml-2">
                          <button
                            onClick={()=> {setIsFontColorsVisible(!isFontColorsVisible)}}
                            className="text-md text-gray-600 w-[35px] px-1 flex  rounded"
                          >
                            <span className="font-bold px-0.5 border-b-2 border-b-gray-500 mr-0.5">
                              A
                            </span>
                            <FaCaretDown className="text-md pt-1 text-gray-500 ml-0.5" />
                          </button>
                            {isFontColorsVisible && 
                            <FontColors editor ={editor}   />
                            }
                        </div>
                        {/* End Font Color Section */}

                         {/* Start Font height line section  */}
                         <div className="relative flex edit-btn flex-col items-center w-[30px] mr-1 ml-2">
                          <button
                            onClick={()=> {setIsFontHightVisible(!isFontHightVisible)}}
                            className="text-md text-gray-600 w-[35px] px-1 flex  rounded"
                          >
                            <span className="font-bold px-0.5 border-b-2 border-b-gray-500 mr-0.5">
                              A
                            </span>
                            <CiLineHeight className="text-md pt-1 text-gray-500 ml-0.5" />
                          </button>
                            {isFontHightVisible && 
                            <div className="absolute edit-menu top-[35px] left-0 flex flex-col bg-white w-full overflow-y-auto max-h-40 z-[40] border-x border-y border-x-gray-300 border-y-gray-300">
                              <FontSpaceLine     editor ={editor}   />
                            </div>
                            }
                        </div>
                        {/* End Font height line   Section */}

      </>
      )
}
export default FontArea