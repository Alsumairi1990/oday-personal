"use client";
import React, { useEffect, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import { Color } from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import Paragraph from "@tiptap/extension-paragraph";
import Bold from "@tiptap/extension-bold";
import Highlight from "@tiptap/extension-highlight";
import Text from "@tiptap/extension-text";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";

import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa";
import { FaStrikethrough } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa6";
import { IoMdColorFill } from "react-icons/io";

import { FaCaretDown } from "react-icons/fa";

const TextEditor = () => {
  const [isFileMenuVisible, setIsFileMenuVisible] = useState(false);
  const [isViewMenuVisible, setIsViewMenuVisible] = useState(false);
  const [isEditorMenuVisible, setIsEditorMenuVisible] = useState(false);
  const [isEditMenuVisible, setIsEditMenuVisible] = useState(false);
  const [isFontMenuVisible, setIsFontMenuVisible] = useState(false);
  const [isFontSizeVisible, setIsFontSizeVisible] = useState(false);

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleEditMenu = () => {
    setIsEditMenuVisible(!isEditMenuVisible);
  };

  // const handleHeadingClick = (level) => {
  //   editor.chain().focus().toggleHeading({ level }).run();
  // };

  const toggleFileMenu = () => {
    setIsFileMenuVisible(!isFileMenuVisible);
  };

  const toggleViewMenu = () => {
    setIsViewMenuVisible(!isViewMenuVisible);
  };

  const toggleEditorMenu = () => {
    setIsEditorMenuVisible(!isEditorMenuVisible);
  };

  // const [editor, setEditor] = useState(null);

  // useEffect(() => {
  //   const newEditor = new Editor({
  //     content: '',
  //     editable: true,
  //     extensions: [
  //       StarterKit,
  //       Placeholder.configure({
  //         emptyEditorClass: 'is-editor-empty',
  //         placeholder: 'My Custom Placeholder',
  //       }),

  //       Paragraph,

  //     ],
  //     editorProps: {
  //       attributes: {
  //         class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none border-x-0 p-4 border-y-0',
  //       },
  //     },
  //   });

  //   setEditor(newEditor);

  //   return () => {
  //     newEditor.destroy();
  //   };
  // }, []);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Bold,
      Text,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      TextStyle,
      Underline,
      Color,
      Highlight.configure({ multicolor: true }),
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
        placeholder: "My Custom Placeholder",
      }),
      Paragraph,
    ],
    content: "",
    editable: true,
    editorProps: {
      attributes: {
        class:
          "prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none border-x-0 p-4 border-y-0",
      },
    },
  });
  if (!editor) {
    return null;
  }

  return (
    <div className="">
      <div
        className="p "
        style={{
          backgroundImage: "linear-gradient(360deg, #f7f7f7, #ffffff, #f9f9f9)",
          boxShadow: "0 2px 5px -2px #9d9898",
        }}
      >
        <div className="flex hidden px-4 border-b bg-[#dbdbdb14] border-b-gray-200 bg-gradioent-to-t from-[#e1e4e5] to-[#fbfbfb]">
          <div className="relative edit-btn flex flex-col items-center">
            <button
              onClick={toggleFileMenu}
              className="text-sm font-semibold pl-3 pr-1 py-1 text-gray-600 rounded"
            >
              File
            </button>
            {isFileMenuVisible && (
              <div className="absolute edit-menu top-[35px] left-0 flex flex-col bg-white overflow-y-auto max-h-40 z-[40] border-x border-y border-x-gray-300 border-y-gray-300">
                <p className="mb-0 p2 bg-gray-300 text-sm px-2">Paragrapg</p>
                <div className="p-2 flex flex-col">
                  <button
                    onClick={() => console.log("File H1 clicked")}
                    className="text-sm py-1 w-[25px] font-semibold text-gray-600"
                  >
                    H1
                  </button>
                  <button
                    onClick={() => console.log("File H2 clicked")}
                    className="text-sm py-1 w-[25px] font-semibold text-gray-600"
                  >
                    H2
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative edit-btn flex flex-col items-center">
            <button
              onClick={toggleViewMenu}
              className="text-sm font-semibold pl-3 pr-1 py-1 text-gray-600 rounded"
            >
              View
            </button>
            {isViewMenuVisible && (
              <div className="absolute edit-menu top-[35px] left-0 flex flex-col bg-white overflow-y-auto max-h-40 z-[40] border-x border-y border-x-gray-300 border-y-gray-300">
                <p className="mb-0 p2 bg-gray-300 text-sm px-2">Paragrapg</p>
                <div className="p-2 flex flex-col">
                  <button
                    onClick={() => console.log("View H1 clicked")}
                    className="text-sm py-1 w-[25px] font-semibold text-gray-600"
                  >
                    H1
                  </button>
                  <button
                    onClick={() => console.log("View H2 clicked")}
                    className="text-sm py-1 w-[25px] font-semibold text-gray-600"
                  >
                    H2
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="relative edit-btn flex flex-col items-center">
            <button
              onClick={toggleEditorMenu}
              className="text-sm font-semibold pl-3 pr-1 py-1 text-gray-600 rounded"
            >
              Editor
            </button>
            {isEditorMenuVisible && (
              <div className="absolute edit-menu top-[35px] left-0 flex flex-col bg-white overflow-y-auto max-h-40 z-[40] border-x border-y border-x-gray-300 border-y-gray-300">
                <p className="mb-0 p2 bg-gray-300 text-sm px-2">Paragrapg</p>
                <div className="p-2 flex flex-col">
                  <button
                    onClick={() => console.log("Editor H1 clicked")}
                    className="text-sm py-1 w-[25px] font-semibold text-gray-600"
                  >
                    H1
                  </button>
                  <button
                    onClick={() => console.log("Editor H2 clicked")}
                    className="text-sm py-1 w-[25px] font-semibold text-gray-600"
                  >
                    H2
                  </button>
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={toggleFileMenu}
            className="text-sm ml-auto font-semibold pl-3 pr-2 py-1 text-gray-600 rounded"
          >
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.16998 14.83L14.83 9.17004"
                stroke="#555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.83 14.83L9.16998 9.17004"
                stroke="#555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        <div
          className="flex  px-4 flex-wrap relative"
          style={{ boxShadow: "0 2px 5px -2px #9d9898" }}
        >
          <div className="p-2 flex flex-20 gap-y-5 flex-wrap items-center border-r border-r-gray-200">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`text-sm text-gray-600 w-[25px] rounded ${!editor.can().chain().focus().toggleBold().run() ? "disabled" : ""} ${editor.isActive("bold") ? "is-active bg-blue-400 text-white" : ""}`}
              disabled={!editor.can().chain().focus().toggleBold().run()}
            >
              <FaBold />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`text-sm text-gray-600 w-[25px] rounded ${!editor.can().chain().focus().toggleItalic().run() ? "disabled" : ""} ${editor.isActive("italic") ? "is-active bg-blue-400 text-white" : ""}`}
              disabled={!editor.can().chain().focus().toggleItalic().run()}
            >
              <FaItalic />
            </button>
            <button
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={`text-sm text-gray-600 w-[25px] rounded mx-1 ${!editor.can().chain().focus().toggleStrike().run() ? "disabled" : ""} ${editor.isActive("strike") ? "is-active bg-blue-400 text-white" : ""}`}
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
                <div className="absolute edit-menu top-[35px] left-0 flex flex-col bg-white overflow-y-auto max-h-40 z-[40] border-x border-y border-x-gray-300 border-y-gray-300">
                  <p className="mb-0 p2 bg-gray-300 text-sm px-2">Payragrapg</p>
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
              className={editor.isActive("underline") ? "is-active" : ""}
            >
              {/* <button
                                  onClick={() => editor.chain().focus().toggleUnderline().run()}
                                  className={`w-4 ${editor.isActive('underline') ? 'is-active' : ''}`}
                                >*/}
              <FaUnderline />
            </button>

            <div className="relative edit-btn flex flex-col items-center  w-[40px] mx-1">
              <button
                type="button"
                className=" text-[14px] text-gray-600 border w-[55px] flex justify-between px-1 rounded "
              >
                <span className="leading-[21px] font-semibold mr-0.5">
                  Font
                </span>
                <FaCaretDown className="text-md pt-1 text-gray-500 ml-1" />
              </button>

              {isFontMenuVisible && (
                <div className="absolute edit-menu top-[35px] left-0 flex flex-col bg-white z-[40] border-x border-y border-x-gray-300 border-y-gray-300">
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
              )}
            </div>

            <div className="relative edit-btn flex flex-col items-center  w-[30px] mx-1 ml-2">
              <button
                type="button"
                className="text-[14px] text-gray-600   w-[35px] flex justify-center px-1 rounded"
                onClick={() => setIsFontMenuVisible(!isFontMenuVisible)}
              >
                <span className="w-4 flex justify-center border-b-2 border-b-gray-500 items-center ml-2 ">
                  <IoMdColorFill className="text-2xl" />
                </span>
                <span>
                  <FaCaretDown className="text-md pt-1 text-gray-500 ml-0" />
                </span>
              </button>
              {isFontMenuVisible && (
                <div className="absolute edit-menu top-[35px] left-0 flex flex-col bg-white z-[40] border-x border-y border-x-gray-300 border-y-gray-300">
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
              )}
            </div>

            <div className="relative flex edit-btn flex-col items-center w-[30px] mr-1 ml-2">
              <button
                onClick={toggleMenu}
                className="text-md text-gray-600 w-[35px] px-1 flex  rounded"
              >
                <span className="font-bold px-0.5 border-b-2 border-b-gray-500 mr-0.5">
                  A
                </span>
                <FaCaretDown className="text-md pt-1 text-gray-500 ml-0.5" />
              </button>
              <div
                className={`absolute edit-menu ${showMenu ? "block" : "hidden"} top-[35px] left-0 flex flex-col bg-white z-[40] border-x border-y border-x-gray-300 border-y-gray-300`}
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
            </div>

            <div className="relative edit-btn flex flex-col items-center  w-[35px] mx-1 ml-4">
              <button
                type="button"
                className=" text-[14px] text-gray-600 border w-[55px] flex justify-between px-1 rounded "
                onClick={() => setIsFontSizeVisible(!isFontSizeVisible)}
              >
                <span className=" text-md font-semibold mr-0.5">size</span>
                <FaCaretDown className="text-md pt-1 text-gray-500 ml-1" />
              </button>
              {isFontSizeVisible && (
                <div className="absolute edit-menu top-[35px] left-0 flex flex-col bg-white z-[40] border-x border-y border-x-gray-300 border-y-gray-300">
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
              )}
            </div>
          </div>
        </div>

        {/* <div className="flex border-b bg-[#dbdbdb14] border-b-gray-200 bg-gradioent-to-t from-[#e1e4e5] to-[#fbfbfb]"  >
           <div className="relative edit-btn flex flex-col items-center ">
                   <button
                    onClick={() => editor.chain().focus().toggleBold().run()}
                    className={editor.isActive('bold') ? 'is-active' : ''}
                     >
                    toggleBold
                  </button>
       </div>
       </div>*/}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
