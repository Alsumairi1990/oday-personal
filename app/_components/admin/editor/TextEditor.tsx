"use client";
import React, { useEffect, useState, useCallback } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
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
import TextAlign from "@tiptap/extension-text-align";
import Superscript from "@tiptap/extension-superscript";
import Subscript from "@tiptap/extension-subscript";
import Blockquote from "@tiptap/extension-blockquote";
import HardBreak from "@tiptap/extension-hard-break";
import CodeBlock from "@tiptap/extension-code-block";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { FaBold } from "react-icons/fa6";
import { FaItalic } from "react-icons/fa";
import { FaStrikethrough } from "react-icons/fa6";
import { FaUnderline } from "react-icons/fa6";
import { IoMdColorFill } from "react-icons/io";
import Link from "@tiptap/extension-link";
import Indent from "./IndentNode.js";
import TaskItem from "@tiptap/extension-task-item";
import BulletList from "@tiptap/extension-bullet-list";
import ListItem from "@tiptap/extension-list-item";
import { FaListUl } from "react-icons/fa6";
import { MdFormatListBulletedAdd } from "react-icons/md";
import OrderedList from "@tiptap/extension-ordered-list";
import { GoListOrdered } from "react-icons/go";
import { FaTasks } from "react-icons/fa";
import TaskList from "@tiptap/extension-task-list";
import Image from "@tiptap/extension-image";
import { BsFillImageFill } from "react-icons/bs";
import ImageUploadModal from "./ImageUploadModal";
import { RiImageAddFill } from "react-icons/ri";
import { RiImageEditFill } from "react-icons/ri";
import { IoImageOutline } from "react-icons/io5";
import { MdBrokenImage } from "react-icons/md";

import { useStore } from "./Store";
// import { CustomHeading } from "./CustomHeading";
import CustomHeading from "./CustomHeading";

// import "../../../globals.css";
import hljs from "highlight.js";
import { FaCaretDown } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import ImageAlign from "./ImageAlign";
import { LuImagePlus } from "react-icons/lu";
import { PiImagesSquareDuotone } from "react-icons/pi";
import { Node, mergeAttributes } from "@tiptap/core";

// import { createLowlight } from "lowlight";
// import lowlight from "lowlight";
import { common, createLowlight } from "lowlight";

import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";

import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
const lowlight = createLowlight();

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("css", css);
hljs.registerLanguage("ts", ts);
hljs.registerLanguage("html", html);
lowlight.register({ javascript });
lowlight.register({ css });
lowlight.register({ ts });
lowlight.register({ html });
// lowlight?.register("js", javascript);
// lowlight?.registerLanguage("ts", ts);

const TextEditor = () => {
  const [isFileMenuVisible, setIsFileMenuVisible] = useState(false);
  const [isViewMenuVisible, setIsViewMenuVisible] = useState(false);
  const [isEditorMenuVisible, setIsEditorMenuVisible] = useState(false);
  const [isEditMenuVisible, setIsEditMenuVisible] = useState(false);
  const [isFontMenuVisible, setIsFontMenuVisible] = useState(false);
  const [isFontSizeVisible, setIsFontSizeVisible] = useState(false);

  const [showMenu, setShowMenu] = useState(false);
  // const [headings, setHeadings] = useState([]);
  const headings: any = [];
  const [imageWidth, setImageWidth] = useState<number | null>(null);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  const toggleEditMenu = () => {
    setIsEditMenuVisible(!isEditMenuVisible);
  };

  const [bulletListVisible, setBulletListVisible] = useState(false);
  const toggleMBulletList = () => {
    setBulletListVisible(!bulletListVisible);
  };

  const [orderedListVisible, setOrderedListVisible] = useState(false);
  const toggleOrderedList = () => {
    setOrderedListVisible(!orderedListVisible);
  };

  const [imageOptionsVisible, setImageOptionsVisible] = useState(false);
  const toggleImageOptions = () => {
    setImageOptionsVisible(!imageOptionsVisible);
  };
  const [imageRadiusVisible, setImageRadiusVisible] = useState(false);
  const toggleImageRadius = () => {
    setImageRadiusVisible(!imageRadiusVisible);
  };

  const [imageWidthVisible, setImageWidthVisible] = useState(false);
  const toggleImageWidth = () => {
    setImageWidthVisible(!imageWidthVisible);
  };

  const [imageModelVisible, setImageModelVisible] = useState(false);
  const toggleImageModelVisible = () => {
    setImageModelVisible(!imageModelVisible);
  };

  const [taskListVisible, setTaskListVisible] = useState(false);
  const toggleTaskdList = () => {
    setTaskListVisible(!taskListVisible);
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

  const handleCloseModal = () => {
    setImageModelVisible(false);
    console.log("close Image:");
  };

  const TOCNode = Node.create({
    name: "toc",
    content: "inline*", // Allow inline content within TOC node
    group: "block", // Group the TOC node as a block node
    defining: true, // Set the TOC node as a defining node to prevent nested TOC nodes
    draggable: false, // Disable dragging the TOC node

    addAttributes() {
      return {
        title: {
          default: "Table of Contents",
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: "div",
        },
      ];
    },

    renderHTML({ HTMLAttributes }) {
      const tocContent = generateTOCContent();
      const tocElement = createDOMElementFromHTMLString(tocContent);
      return ["div", mergeAttributes(HTMLAttributes), ...tocElement.childNodes];
    },
  });

  const generateTOCContent = () => {
    alert("mmm" + headings.length);
    headings.map((heading: any) => {
      console.log("headings---&&&&&&--->>" + heading.text);
    });
    if (headings.length > 0) {
      const tocList = headings
        .map(
          (entry: any) =>
            `<li class="list-none my-1.5 cursor-pointer"><span >${entry.text}</span></li>`,
        )
        .join("");

      return `
      <div class="toc">
        <div class="border bg-gray-200 rounded-md p-3">
          <p class="text-base font-bold">Table of Contents</p>
          <ul class="list-none mt-2">${tocList}</ul>
        </div>
      </div>`;
    } else {
      return `
      <div class="toc">
        <p>Table of Contents</p>
        <p>No headings found in the article.</p>
      </div>`;
    }
  };

  const createDOMElementFromHTMLString = (htmlString: any) => {
    const template = document.createElement("template");
    template.innerHTML = htmlString.trim();
    return template.content.firstChild;
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      CustomHeading,
      Document,
      Bold,
      Image,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Subscript,
      Text,
      Blockquote,
      HorizontalRule,
      CodeBlock,
      // Heading.configure({
      //   levels: [1, 2, 3],
      // }),
      TextStyle,
      BulletList,
      ListItem,
      Underline,
      Superscript,
      HardBreak,
      TOCNode,
      Indent,
      Color,
      ImageAlign,
      OrderedList,
      CodeBlockLowlight.configure({
        lowlight,
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: "https",
      }),
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
  // const { headings, setHeadings } = useStore();
  useEffect(() => {
    if (editor) {
      editor.on("selectionUpdate", ({ transaction }) => {
        const { state } = editor;
        const { from, to } = state.selection;
        let tr = state.tr;

        state.doc.descendants((node, pos) => {
          if (node.type.name === "image") {
            const isSelected = from <= pos && to >= pos + node.nodeSize;
            tr = tr.setNodeMarkup(pos, undefined, {
              ...node.attrs,
              selected: isSelected,
            });
          }
        });

        editor.view.dispatch(tr);
      });
    }
    if (editor) {
      editor.on("update", ({ editor }) => {
        editor?.state.doc.descendants((node) => {
          if (node.type.name === "heading") {
            headings.push({
              level: node.attrs.level,
              id: node.attrs.id,
              text: node.textContent,
            });
          }
        });

        headings.map((heading: any) => {
          console.log("headings------>>" + heading.text);
        });
      });
    }
  }, [editor]);

  const handleInsertTOC = () => {
    editor?.commands.insertContent({ type: "toc" });
  };

  const setLink = useCallback(() => {
    const previousUrl = editor!.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "" && editor != null) {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    if (editor) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: url })
        .run();
    }
  }, [editor]);
  if (!editor) {
    return null;
  }
  const handleInsertImage = (imageNm: any) => {
    const { schema } = editor.state;
    uploadImage(imageNm).then((response) => {
      console.log(response.data);
      const node = schema.nodes.image.create({ src: response.data });
      const transaction = editor.state.tr.insert(
        editor.view.state.selection.from,
        node,
      );
      editor.view.dispatch(transaction);
    });
  };
  const uploadImage = async (imageName: any) => {
    alert("File comes from " + imageName);
    const data = new FormData();
    data.append("file", imageName);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const handleAlign = (align: string) => {
    const { state, view, schema } = editor!;
    const { from, to } = state.selection;

    // Find the image node in the current selection
    const imageNode = state.doc.nodeAt(from);

    if (imageNode && imageNode.type === schema.nodes.image) {
      const transaction = state.tr.setNodeMarkup(from, null, {
        ...imageNode.attrs,
        align,
      });
      view.dispatch(transaction);
    }
  };

  const handleSetWidth = (width: number) => {
    setImageWidth(width); // Update state with new width
    resizeImage(width); // Call function to resize image
  };

  const resizeImage = (width: number) => {
    const { state, view, schema } = editor!;
    const { from } = state.selection;

    // Find the image node in the current selection
    const imageNode = state.doc.nodeAt(from);

    if (imageNode && imageNode.type === schema.nodes.image) {
      const transaction = state.tr.setNodeMarkup(from, null, {
        ...imageNode.attrs,
        width: `${width}%`, // Set new width percentage
      });
      view.dispatch(transaction);
    }
  };

  const handleSetBorderRadius = (borderRadius: string) => {
    const { state, view, schema } = editor!;
    const { from } = state.selection;

    const imageNode = state.doc.nodeAt(from);
    if (imageNode && imageNode.type === schema.nodes.image) {
      const transaction = state.tr.setNodeMarkup(from, null, {
        ...imageNode.attrs,
        borderRadius,
      });
      view.dispatch(transaction);
    }
  };

  const toggleTOC = () => {
    var flag = true;
    editor?.state.doc.descendants((node) => {
      if (node.type.name === "toc") {
        flag = false;
      }
      return true;
    });
    if (flag) {
      editor?.chain().focus().insertContent({ type: "toc" }).run();
    } else {
      editor?.commands.deleteNode("toc");
    }
  };

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

          {/* --------------------------------------------------------------------------------------------- */}
          {/* Start Align Area */}
          <div className="py-2 px-1 flex flex-10 gap-y-3 flex-wrap items-center border-r border-r-gray-200">
            <button
              type="button"
              onClick={() => editor.chain().focus().setTextAlign("left").run()}
              // className="flex-25 p-[2px] flex justify-center"
              className={
                editor.isActive({ textAlign: "left" }) ? "is-active" : ""
              }
            >
              <svg
                width="28px"
                height="28px"
                viewBox="-2 -2 20 20"
                fill="#111"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0px",
                  border: "0px",
                  alignSelf: "self-start",
                }}
              >
                <path
                  d="M2 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              // className="flex-25 p-[2px] flex justify-center"
              onClick={() =>
                editor.chain().focus().setTextAlign("center").run()
              }
              className={
                editor.isActive({ textAlign: "center" }) ? "is-active" : ""
              }
            >
              <svg
                width="28px"
                height="28px"
                viewBox="-2 -2 20 20"
                fill="#111"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0px",
                  border: "0px",
                  alignSelf: "self-start",
                }}
              >
                <path
                  d="M4 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm2-3a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-2-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              // className="flex-25 p-[2px] flex justify-center"
              onClick={() => editor.chain().focus().setTextAlign("right").run()}
              className={
                editor.isActive({ textAlign: "right" }) ? "is-active" : ""
              }
            >
              <svg
                width="28px"
                height="28px"
                viewBox="-2 -2 20 20"
                fill="#111"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0px",
                  border: "0px",
                  alignSelf: "self-start",
                }}
              >
                <path
                  d="M6 12.5a.5.5 0 01.5-.5h7a.5.5 0 010 1h-7a.5.5 0 01-.5-.5zm-4-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              // className="flex-25 p-[2px] flex justify-center"
              onClick={() => editor.chain().focus().toggleSubscript().run()}
              className={editor.isActive("subscript") ? "is-active" : ""}
            >
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="#222"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 18H5L13 4H15M3 4H5L13 18H15M17 15L19 14V20M19 20H17M19 20H21"
                  stroke="#555"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              // className="flex-25 p-[2px] flex justify-center is-active"
              onClick={() =>
                editor.chain().focus().setTextAlign("justify").run()
              }
              className={
                editor.isActive({ textAlign: "justify" }) ? "is-active" : ""
              }
            >
              <svg
                width="28px"
                height="28px"
                viewBox="-2 -2 20 20"
                fill="#111"
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0px",
                  border: "0px",
                  alignSelf: "self-start",
                }}
              >
                <path
                  d="M2 12.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5zm0-3a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              // className="flex-25 p-[2px] flex justify-center"
              onClick={() => editor.chain().focus().toggleSuperscript().run()}
              className={editor.isActive("superscript") ? "is-active" : ""}
            >
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 13L5 6H3M9 13L13 20H15M9 13L13 6H15M9 13L5 20H3M17 4L19 3V9M19 9H17M19 9H21"
                  stroke="#444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              className="flex-25 p-[2px] flex justify-center"
              onClick={() => editor.chain().focus().unsetTextAlign().run()}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="0 0 24 24"
                id="align-left-slash"
                data-name="Flat Line"
                xmlns="http://www.w3.org/2000/svg"
                className="icon flat-line"
              >
                <path
                  id="primary"
                  d="M21,6H18M12,6H3m14,6H12M6,12H3m18,6H6M21,3,3,21"
                  style={{
                    fill: "none",
                    stroke: "rgb(85, 85, 85)",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                  }}
                ></path>
              </svg>
            </button>
          </div>
          {/* End Align Area */}
          {/* --------------------------------------------------------------------------------------------- */}

          {/* Start third - 3   Area */}
          <div className="py-2 px-1 flex flex-15 gap-y-3 flex-wrap items-center border-r border-r-gray-200">
            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBlockquote().run()}
              className={`flex-20 px-1 ${editor.isActive("blockquote") ? "is-active" : ""}`}
            >
              <svg
                width="20px"
                height="20px"
                viewBox="-3 -3 40 40"
                fill="#5F6368"
                className=" m-0 border-0"
              >
                <path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"></path>
                <path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"></path>
              </svg>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setHorizontalRule().run()}
              className="flex-20 px-1"
            >
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 12L20 12"
                  stroke="#444"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
            <button
              type="button"
              onClick={() => editor.chain().focus().setHardBreak().run()}
              className="flex-20 px-1"
            >
              <svg
                className="icon text-gray-200"
                width="18px"
                height="18px"
                xmlns="http://www.w3.org/2000/svg"
                fill="#444"
                viewBox="0 0 24 24"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M15 18h1.5a2.5 2.5 0 1 0 0-5H3v-2h13.5a4.5 4.5 0 1 1 0 9H15v2l-4-3 4-3v2zM3 4h18v2H3V4zm6 14v2H3v-2h6z"></path>
                </g>
              </svg>
            </button>

            <button
              type="button"
              onClick={setLink}
              // className={editor.isActive("link") ? "is-active" : ""}
              className={`flex-20 px-1 ${editor.isActive("link") ? "is-active" : ""}`}
              // className="flex-20 px-1"
            >
              <svg
                className="icon text-gray-200"
                width="19"
                height="19"
                xmlns="http://www.w3.org/2000/svg"
                fill="#444"
                viewBox="0 0 24 24"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M18.364 15.536L16.95 14.12l1.414-1.414a5 5 0 1 0-7.071-7.071L9.879 7.05 8.464 5.636 9.88 4.222a7 7 0 0 1 9.9 9.9l-1.415 1.414zm-2.828 2.828l-1.415 1.414a7 7 0 0 1-9.9-9.9l1.415-1.414L7.05 9.88l-1.414 1.414a5 5 0 1 0 7.071 7.071l1.414-1.414 1.415 1.414zm-.708-10.607l1.415 1.415-7.071 7.07-1.415-1.414 7.071-7.07z"></path>
                </g>
              </svg>
            </button>

            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`flex-20 px-1 ${editor.isActive("codeBlock") ? "is-active" : ""}`}
              // className="flex-20 px-1"
            >
              <svg
                className="icon"
                width="21"
                height="21"
                xmlns="http://www.w3.org/2000/svg"
                fill="#666"
                viewBox="0 0 24 24"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243-1.415-1.415L8.667 12z"></path>
                </g>
              </svg>
            </button>

            <button
              type="button"
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`flex-20 px-1 ${editor.isActive("codeBlock") ? "is-active" : ""}`}
              // className="flex-20 px-1"
            >
              <svg
                className="icon"
                width="21"
                height="21"
                xmlns="http://www.w3.org/2000/svg"
                fill="#666"
                viewBox="0 0 24 24"
              >
                <g>
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm9 12v2h6v-2h-6zm-3.586-3l-2.828 2.828L7 16.243 11.243 12 7 7.757 5.586 9.172 8.414 12z"></path>
                </g>
              </svg>
            </button>

            <button
              type="button"
              onClick={() => editor.chain().focus().indent().run()}
              className={`flex-20 px-1 ${editor.isActive("codeBlock") ? "is-active" : ""}`}
              // className="flex-20 px-1"
            >
              <svg
                fill="#333"
                width="22px"
                height="22px"
                viewBox="0 0 36 36"
                version="1.1"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>indent-line</title>
                <path
                  d="M31.06,9h-26a1,1,0,1,1,0-2h26a1,1,0,1,1,0,2Z"
                  className="clr-i-outline clr-i-outline-path-1"
                ></path>
                <path
                  d="M31.06,14h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"
                  className="clr-i-outline clr-i-outline-path-2"
                ></path>
                <path
                  d="M31.06,19h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"
                  className="clr-i-outline clr-i-outline-path-3"
                ></path>
                <path
                  d="M31.06,24h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"
                  className="clr-i-outline clr-i-outline-path-4"
                ></path>
                <path
                  d="M31.06,29h-26a1,1,0,0,1,0-2h26a1,1,0,1,1,0,2Z"
                  className="clr-i-outline clr-i-outline-path-5"
                ></path>
                <path
                  d="M5.56,22.54a1,1,0,0,1-.7-1.71L7.68,18,4.86,15.17a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L10.51,18,6.27,22.24A1,1,0,0,1,5.56,22.54Z"
                  className="clr-i-outline clr-i-outline-path-6"
                ></path>
                <rect
                  x="0"
                  y="0"
                  width="36"
                  height="36"
                  fill-opacity="0"
                ></rect>
              </svg>
            </button>

            <button
              type="button"
              onClick={() => editor.chain().focus().outdent().run()}
              className={`flex-20 px-1 ${editor.isActive("codeBlock") ? "is-active" : ""}`}
              // className="flex-20 px-1"
            >
              <svg
                fill="#333"
                width="22px"
                height="22px"
                viewBox="0 0 36 36"
                version="1.1"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>outdent-line</title>
                <path
                  d="M31.06,9h-26a1,1,0,1,1,0-2h26a1,1,0,1,1,0,2Z"
                  className="clr-i-outline clr-i-outline-path-1"
                ></path>
                <path
                  d="M31.06,14h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"
                  className="clr-i-outline clr-i-outline-path-2"
                ></path>
                <path
                  d="M31.06,19h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"
                  className="clr-i-outline clr-i-outline-path-3"
                ></path>
                <path
                  d="M31.06,24h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"
                  className="clr-i-outline clr-i-outline-path-4"
                ></path>
                <path
                  d="M31.06,29h-26a1,1,0,0,1,0-2h26a1,1,0,1,1,0,2Z"
                  className="clr-i-outline clr-i-outline-path-5"
                ></path>
                <path
                  d="M9.56,22.54a1,1,0,0,1-.7-.3L4.61,18l4.25-4.24a1,1,0,0,1,1.41,1.41L7.44,18l2.83,2.83a1,1,0,0,1-.71,1.71Z"
                  className="clr-i-outline clr-i-outline-path-6"
                ></path>
                <rect x="0" y="0" width="36" height="36" fill-opacity="0" />
              </svg>
            </button>
          </div>
          {/* End of  third - 3   Area */}
          {/* --------------------------------------------------------------------------------------------- */}

          {/* Start of  forth - 4   Area */}
          <div className="py-2 px-1 flex flex-15 gap-y-3 gap-x-1 flex-wrap items-center  border-r border-r-gray-200">
            {/* Start of BulletList */}
            <div className="relative flex edit-btn flex-col flex-20 items-center">
              <button
                type="button"
                className="text-md text-gray-600  items-center flex  rounded"
                onClick={toggleMBulletList}
              >
                <span className=" flex">
                  <svg
                    width="24px"
                    height="24px"
                    viewBox="-2 -2 18 18"
                    fill="#444"
                    style={{
                      margin: "0px",
                      border: "0px",
                      alignSelf: "self-start",
                    }}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm-3 1a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2zm0 4a1 1 0 100-2 1 1 0 000 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <FaCaretDown className="text-base pt-1 text-gray-500" />
              </button>
              {bulletListVisible && (
                <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                  <div
                    className="pl-1 py-2 flex flex-col w-32 gap-y-1 items-start rounded"
                    style={{
                      boxShadow:
                        "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                    }}
                  >
                    <button
                      onClick={() =>
                        editor.chain().focus().splitListItem("listItem").run()
                      }
                      disabled={!editor.can().splitListItem("listItem")}
                      className="text-sm py-1 text-gray-600 hover:bg-gray-200 px-2 rounded"
                    >
                      Split List Item
                    </button>
                    <button
                      onClick={() =>
                        editor.chain().focus().sinkListItem("listItem").run()
                      }
                      disabled={!editor.can().sinkListItem("listItem")}
                      className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                    >
                      Sink List Item
                    </button>
                    <button
                      onClick={() =>
                        editor.chain().focus().liftListItem("listItem").run()
                      }
                      disabled={!editor.can().liftListItem("listItem")}
                      className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                    >
                      Lift List Item
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* End of BulletList */}

            {/* Start of OrderList */}
            <div className="relative flex edit-btn flex-col flex-20 items-center">
              <button
                type="button"
                className="text-md text-gray-600  items-center flex  rounded"
                onClick={toggleOrderedList}
              >
                <span className=" flex">
                  <svg
                    width="23"
                    height="23"
                    viewBox="-2 -2 18 18"
                    fill="#444"
                    className="m-0 border-0 "
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5 11.5a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5zm0-4a.5.5 0 01.5-.5h9a.5.5 0 010 1h-9a.5.5 0 01-.5-.5z"
                      clip-rule="evenodd"
                    ></path>
                    <path d="M1.713 11.865v-.474H2c.217 0 .363-.137.363-.317 0-.185-.158-.31-.361-.31-.223 0-.367.152-.373.31h-.59c.016-.467.373-.787.986-.787.588-.002.954.291.957.703a.595.595 0 01-.492.594v.033a.615.615 0 01.569.631c.003.533-.502.8-1.051.8-.656 0-1-.37-1.008-.794h.582c.008.178.186.306.422.309.254 0 .424-.145.422-.35-.002-.195-.155-.348-.414-.348h-.3zm-.004-4.699h-.604v-.035c0-.408.295-.844.958-.844.583 0 .96.326.96.756 0 .389-.257.617-.476.848l-.537.572v.03h1.054V9H1.143v-.395l.957-.99c.138-.142.293-.304.293-.508 0-.18-.147-.32-.342-.32a.33.33 0 00-.342.338v.041zM2.564 5h-.635V2.924h-.031l-.598.42v-.567l.629-.443h.635V5z"></path>
                  </svg>
                </span>
                <FaCaretDown className="text-base pt-1 text-gray-500" />
              </button>
              {orderedListVisible && (
                <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                  <div
                    className="pl-1 py-2 flex flex-col w-32 gap-y-1 items-start rounded"
                    style={{
                      boxShadow:
                        "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                    }}
                  >
                    <button
                      onClick={() =>
                        editor.chain().focus().splitListItem("listItem").run()
                      }
                      disabled={!editor.can().splitListItem("listItem")}
                      className="text-sm py-1 text-gray-600 hover:bg-gray-200 px-2 rounded"
                    >
                      Split List Item
                    </button>
                    <button
                      onClick={() =>
                        editor.chain().focus().sinkListItem("listItem").run()
                      }
                      disabled={!editor.can().sinkListItem("listItem")}
                      className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                    >
                      Sink List Item
                    </button>
                    <button
                      onClick={() =>
                        editor.chain().focus().liftListItem("listItem").run()
                      }
                      disabled={!editor.can().liftListItem("listItem")}
                      className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                    >
                      Lift List Item
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* End of OrderList */}

            {/* Start of TaskList */}
            <div className="relative flex edit-btn flex-col flex-20 items-center">
              <button
                type="button"
                className="text-md text-gray-600  items-center flex  rounded"
                onClick={toggleTaskdList}
              >
                <span className=" flex">
                  <FaTasks className="text-base text-gray-500" />
                </span>
                <FaCaretDown className="text-base pt-1 text-gray-500" />
              </button>
              {taskListVisible && (
                <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                  <div
                    className="pl-1 py-2 flex flex-col w-32 gap-y-1 items-start rounded"
                    style={{
                      boxShadow:
                        "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                    }}
                  >
                    <button
                      onClick={() =>
                        editor.chain().focus().splitListItem("taskItem").run()
                      }
                      disabled={!editor.can().splitListItem("taskItem")}
                      className="text-sm py-1 text-gray-600 hover:bg-gray-200 px-2 rounded"
                    >
                      Split TaskList
                    </button>
                    <button
                      onClick={() =>
                        editor.chain().focus().sinkListItem("taskItem").run()
                      }
                      disabled={!editor.can().sinkListItem("taskItem")}
                      className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                    >
                      Sink TaskList
                    </button>
                    <button
                      onClick={() =>
                        editor.chain().focus().liftListItem("taskItem").run()
                      }
                      disabled={!editor.can().liftListItem("taskItem")}
                      className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                    >
                      Lift TaskList
                    </button>
                  </div>
                </div>
              )}
            </div>
            {/* End of TaskList */}

            <button
              type="button"
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`flex-15 px-1 items-center flex   ${editor.isActive("bulletList") ? "is-active" : ""}`}
            >
              <span className="flex pt-0.5">
                <MdFormatListBulletedAdd className="text-xl text-gray-900" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`flex-15 px-1 items-center flex   ${editor.isActive("orderedList") ? "is-active" : ""}`}
            >
              <span className="flex pt-0.5">
                <GoListOrdered className="text-[1.40rem] text-gray-600" />
              </span>
            </button>

            <button
              type="button"
              onClick={() => editor.chain().focus().toggleTaskList().run()}
              className={`flex-15 px-1 items-center flex   ${editor.isActive("taskList") ? "is-active" : ""}`}
            >
              <span className="flex pt-0.5">
                <GoTasklist className="text-[1.40rem] text-gray-600" />
              </span>
            </button>
          </div>

          {/* End of of  forth - 4   Area */}
          {/* --------------------------------------------------------------------------------------------- */}

          {/* Start of  fifth - 5   Area */}
          <div className="py-2 px-1 flex flex-15 gap-y-3 gap-x-1 flex-wrap items-center  border-r border-r-gray-200">
            <button
              type="button"
              onClick={toggleImageModelVisible}
              className="flex-15 px-1 items-center flex"
            >
              <span className="flex pt-0.5">
                {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                <LuImagePlus className="text-xl text-gray-600" />
              </span>
            </button>

            <div className="relative flex edit-btn flex-col flex-20 items-center">
              <button
                type="button"
                className="text-md text-gray-600  items-center flex  rounded"
                onClick={toggleImageOptions}
              >
                <span className=" flex pt-0.5">
                  <RiImageEditFill className="text-xl text-gray-600" />
                </span>
                <FaCaretDown className="text-base pt-1 text-gray-500" />
              </button>
              {imageOptionsVisible && (
                <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                  <div
                    className="pl-1 py-2 flex flex-col w-32 gap-y-1 items-start rounded"
                    style={{
                      boxShadow:
                        "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                    }}
                  >
                    <button
                      className="text-sm py-1 text-gray-600 hover:bg-gray-200 px-2 rounded"
                      onClick={() => handleAlign("left")}
                    >
                      Align Left
                    </button>
                    <button
                      onClick={() => handleAlign("center")}
                      className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                    >
                      Align center
                    </button>
                    <button
                      onClick={() => handleAlign("right")}
                      className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                    >
                      Aign Right
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="relative flex edit-btn flex-col flex-20 items-center">
              <button
                type="button"
                className="text-md text-gray-600  items-center flex  rounded"
                onClick={toggleImageWidth}
              >
                <span className=" flex pt-0.5">
                  <PiImagesSquareDuotone className="text-xl text-gray-600" />
                </span>
                <FaCaretDown className="text-base pt-1 text-gray-500" />
              </button>
              {imageWidthVisible && (
                <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                  <div
                    className="pl-1 py-2 flex flex-col w-36 gap-y-1 items-start rounded"
                    style={{
                      boxShadow:
                        "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                    }}
                  >
                    <label className="">
                      Width:
                      <input
                        type="range"
                        min="10"
                        max="100"
                        onChange={(e) =>
                          handleSetWidth(parseInt(e.target.value))
                        }
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>

            <div className="relative flex edit-btn flex-col flex-20 items-center">
              <button
                type="button"
                className="text-md text-gray-600  items-center flex  rounded"
                onClick={toggleImageRadius}
              >
                <span className=" flex pt-0.5">
                  <MdBrokenImage className="text-xl text-gray-600" />
                </span>
                <FaCaretDown className="text-base pt-1 text-gray-500" />
              </button>
              {imageRadiusVisible && (
                <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                  <div
                    className="pl-1 py-2 flex flex-col w-36 gap-y-1 items-start rounded"
                    style={{
                      boxShadow:
                        "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                    }}
                  >
                    <label>
                      Border Radius:
                      <input
                        type="text"
                        placeholder="e.g., 10px"
                        className="w-[90%]"
                        onBlur={(e) => handleSetBorderRadius(e.target.value)}
                      />
                    </label>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={toggleTOC}
              // onClick={() => setHeadings([...headings, "New Heading"])}
              className="flex-15 px-1 items-center flex"
            >
              <span className="flex pt-0.5">
                <svg
                  className="ck ck-icon ck-reset_all-excluded w-5 h-5 fill-gray-600 ck-icon_inherit-color ck-button__icon"
                  viewBox="0 0 20 20"
                >
                  <path d="M3 19a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8.022a6.47 6.47 0 0 0-1.5-.709V2a.5.5 0 0 0-.5-.5H3a.5.5 0 0 0-.5.5v15a.5.5 0 0 0 .5.5h6.313c.173.534.412 1.037.709 1.5H3Z"></path>
                  <path d="M9.174 14a6.489 6.489 0 0 0-.155 1H6v-1h3.174Z"></path>
                  <path d="M10.022 12c-.202.316-.378.65-.524 1H4v-1h6.022Z"></path>
                  <path d="M12.034 10c-.448.283-.86.62-1.224 1H6v-1h6.034Z"></path>
                  <path d="M12 4v1H4V4h8Z"></path>
                  <path d="M14 7V6H6v1h8Z"></path>
                  <path d="M15 9V8H7v1h8Z"></path>
                  <path
                    clip-rule="evenodd"
                    d="M20 15.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM15.5 13a.5.5 0 0 0-.5.5V15h-1.5a.5.5 0 0 0 0 1H15v1.5a.5.5 0 0 0 1 0V16h1.5a.5.5 0 0 0 0-1H16v-1.5a.5.5 0 0 0-.5-.5Z"
                  ></path>
                </svg>
              </span>
            </button>
          </div>

          {/* End of of  fifth - 5   Area */}
          {/* --------------------------------------------------------------------------------------------- */}
        </div>
        {imageModelVisible && (
          <div className="w-full">
            <ImageUploadModal
              onClose={handleCloseModal}
              onInsertImage={handleInsertImage}
            />
          </div>
        )}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
