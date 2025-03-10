"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { useEditor, EditorContent, ChainedCommands } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import HorizontalRule from "@tiptap/extension-horizontal-rule";
import { Color } from "@tiptap/extension-color";
import Placeholder from "@tiptap/extension-placeholder";
// import Heading from "@tiptap/extension-heading";
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
import { GrTableAdd } from "react-icons/gr";
import { TbTableOptions } from "react-icons/tb";

import { FaTasks } from "react-icons/fa";
import TaskList from "@tiptap/extension-task-list";
import Image from "@tiptap/extension-image";

import ImageUploadModal from "./ImageUploadModal";
import { RiImageEditFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";

import { MdBrokenImage } from "react-icons/md";
import { SiYoutubestudio } from "react-icons/si";

import { useStore } from "./Store";
// import { CustomHeading } from "./CustomHeading";
import CustomHeading from "./CustomHeading";
import { IoLogoYoutube } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

// import "../../../globals.css";
import hljs from "highlight.js";
import { FaCaretDown } from "react-icons/fa";
import { GoTasklist } from "react-icons/go";
import ImageAlign from "./ImageAlign";
import { LuImagePlus } from "react-icons/lu";
import { PiInstagramLogoFill } from "react-icons/pi";

import { PiImagesSquareDuotone } from "react-icons/pi";
import { Node, mergeAttributes } from "@tiptap/core";
import Youtube from "@tiptap/extension-youtube";
// import YouTubeExtension from "./YouTubeExtension";
import TwitterNode from "./TwitterNode";
import FacebookNode from "./FacebookNode";
import InstagramNode from "./InstagramNode";
import TikTokNode from "./TikTokNode";
// import Gapcursor from "@tiptap/extension-gapcursor";
import Table from "@tiptap/extension-table";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
// import { createLowlight } from "lowlight";
// import lowlight from "lowlight";
import { common, createLowlight } from "lowlight";
import { PiFacebookLogoBold } from "react-icons/pi";

import { IoLogoTiktok } from "react-icons/io5";

import javascript from "highlight.js/lib/languages/javascript";
import css from "highlight.js/lib/languages/css";

import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";
import { MdOutlineArrowRight } from "react-icons/md";

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
  const [headings, setHeadings] = useState([]);
  const headingsRef = useRef(headings);
  useEffect(() => {
    headingsRef.current = headings;
  }, [headings]);
  // let headings: any = [];
  const [imageWidth, setImageWidth] = useState<number | null>(null);
  const [height, setHeight] = useState<string>("400");
  const [width, setWidth] = useState<string>("640");

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
  const [youtubeVisible, setYoutubeVisible] = useState(false);
  const toggleYoutube = () => {
    setYoutubeVisible(!youtubeVisible);
  };
  const [xMenu, setXMenu] = useState(false);
  const toggleXMenu = () => {
    setXMenu(!xMenu);
  };
  const [rowsMenu, setRowsMenu] = useState(false);
  const toggleRows = () => {
    setRowsMenu(!rowsMenu);
  };
  const [columnsMenu, setColumnsMenu] = useState(false);
  const toggleColumns = () => {
    setColumnsMenu(!columnsMenu);
  };
  const [cellsMenu, setCellsMenu] = useState(false);
  const toggleCells = () => {
    setCellsMenu(!cellsMenu);
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
  const [tableOptions, setTableOptions] = useState(false);
  const toggleTableOptions = () => {
    setTableOptions(!tableOptions);
  };
  const [tableMenu, setTableMenu] = useState(false);
  const toggleTable = () => {
    setTableMenu(!tableMenu);
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
      // return ["div", mergeAttributes(HTMLAttributes), ...tocElement.childNodes];
      // return ["div", mergeAttributes(HTMLAttributes), ...Array.from(tocElement.childNodes)];
      if (tocElement) {
        return ["div", mergeAttributes(HTMLAttributes), ...Array.from(tocElement.childNodes)];
      } else {
        // Handle the case when tocElement is null (if necessary)
        return ["div", mergeAttributes(HTMLAttributes)];
      }
      
    },
  });

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
      InstagramNode,
      Text,
      FacebookNode,
      Youtube.configure({
        controls: false,
        nocookie: true,
      }),
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
      TikTokNode,
      TwitterNode,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
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

  const generateTOCContent = () => {
    alert("before adding heading in generte toc");
    const latestHeadings = headingsRef.current;
    let localHeadings: any = [];
    console.log(editor === null);
    // editor?.state.doc.descendants((node) => {
    //   if (node.type.name === "heading") {
    //     localHeadings.push({
    //       level: node.attrs.level,
    //       id: node.attrs.id,
    //       text: node.textContent,
    //     });
    //   }
    // });
    // setHeadings(localHeadings);
    alert("mmm" + latestHeadings.length);
    headings.map((heading: any) => {
      console.log("headings---&&&&&&--->>" + heading.text);
    });
    if (latestHeadings.length > 0) {
      const tocList = latestHeadings
        .map(
          (entry: any) =>
            `<li class="list-none my-1.5 cursor-pointer"><a href="#${entry.id}">${entry.text}</a></li>`,
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
        let localHeadings: any = [];
        editor?.state.doc.descendants((node) => {
          if (node.type.name === "heading") {
            localHeadings.push({
              level: node.attrs.level,
              id: node.attrs.id,
              text: node.textContent,
            });
          }
        });
        setHeadings(localHeadings);

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

  const addYoutubeVideo = () => {
    const url: any = prompt("Enter YouTube URL");

    if (url) {
      editor.commands.setYoutubeVideo({
        src: url,
        width: Math.max(320, parseInt(width, 10)) || 640,
        height: Math.max(180, parseInt(height, 10)) || 480,
      });
    }
  };

  const insertTweeterEmbed = () => {
    const embedCode = `<blockquote class="twitter-tweet"><p lang="en" dir="ltr">BREAKING:<br><br>Morocco granted permission for an Israeli warship to dock after Spain refused. <a href="https://t.co/m8dCldb6A5">pic.twitter.com/m8dCldb6A5</a></p>&mdash; Globe Eye News (@GlobeEyeNews) <a href="https://twitter.com/GlobeEyeNews/status/1806928208509464915?ref_src=twsrc%5Etfw">June 29, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>`;
    editor.chain().focus().setTweeterEmbed(embedCode).run();
  };

  const insertFacebookEmbed = () => {
    const embedCode = `
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02cYcYzohPUoGzt3putU7rWhPEDcjjTJYhG6a7dvtb8crRNcCL72FYw2xJsRCGhfGel%26id%3D100012157083018&show_text=true&width=500" width="500" height="155" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
    `;
    editor.chain().focus().setFacebookEmbed(embedCode).run();
  };
  const insertInstagramEmbed = () => {
    const embedCode = `
     <blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/C8zs9EdxmVP/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/C8zs9EdxmVP/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/C8zs9EdxmVP/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by قناة الجزيرة مباشر (@aljazeeramubasher)</a></p></div></blockquote> <script async src="//www.instagram.com/embed.js"></script>
    `;
    editor.chain().focus().setInstagramEmbed(embedCode).run();
  };
  const insertTikTokEmbed = () => {
    const embedCode = `
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@vantoan___/video/7369984110682508576" data-video-id="7369984110682508576" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@vantoan___" href="https://www.tiktok.com/@vantoan___?refer=embed">@vantoan___</a> I didn’t expect all these people 🤯😍 I met @zoeclauzure the winner of Junior Eurovision again but this time she decided to surprise me with a choir!!  <a title="piano" target="_blank" href="https://www.tiktok.com/tag/piano?refer=embed">#piano</a> <a title="pianocover" target="_blank" href="https://www.tiktok.com/tag/pianocover?refer=embed">#pianocover</a> <a title="sing" target="_blank" href="https://www.tiktok.com/tag/sing?refer=embed">#sing</a> <a title="taylorswift" target="_blank" href="https://www.tiktok.com/tag/taylorswift?refer=embed">#taylorswift</a> <a title="choir" target="_blank" href="https://www.tiktok.com/tag/choir?refer=embed">#choir</a> <a title="prank" target="_blank" href="https://www.tiktok.com/tag/prank?refer=embed">#prank</a> <a target="_blank" title="♬ original sound - Van" href="https://www.tiktok.com/music/original-sound-7369984160565447457?refer=embed">♬ original sound - Van</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
    `;
    editor.chain().focus().setTikTokEmbed(embedCode).run();
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

            <button
              type="button"
              onClick={() =>
                editor
                  .chain()
                  .focus()
                  .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                  .run()
              }
              className={`flex-15 px-1 items-center flex   ${editor.isActive("taskList") ? "is-active" : ""}`}
            >
              <span className="flex pt-0.5">
                <GrTableAdd className="text-base text-gray-600" />
              </span>
            </button>
            {/* Start Tables Options */}
            <div className="relative flex edit-btn flex-col flex-20 items-center">
              <button
                type="button"
                className="text-md text-gray-600  items-center flex  rounded"
                onClick={toggleTableOptions}
              >
                <span className=" flex pt-0.5">
                  <TbTableOptions className="text-xl text-gray-600" />
                </span>
                <FaCaretDown className="text-base pt-1 text-gray-500" />
              </button>
              {tableOptions && (
                <div className="absolute edit-menu top-[24px] left-[4px] flex flex-col bg-white tounded z-[40]">
                  <div
                    className="pl-2.5  py-2 flex flex-col w-40 gap-y-1 items-start rounded"
                    style={{
                      boxShadow:
                        "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                    }}
                  >
                    <button
                      type="button"
                      className="text-md text-gray-600 py-1 items-center flex w-full rounded"
                      onClick={toggleTable}
                    >
                      <span className="mr-2">
                        <svg
                          fill="#777"
                          width="15px"
                          height="15px"
                          viewBox="0 0 1920 1920"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1740 0c99.24 0 180 80.76 180 180v1560c0 99.24-80.76 180-180 180H180c-99.24 0-180-80.76-180-180V180C0 80.76 80.76 0 180 0h1560Zm-420 1200h480V720h-480v480Zm480 540v-420h-480v480h420c33 0 60-27 60-60ZM720 1200h480V720H720v480Zm0 600h480v-480H720v480Zm-600-600h480V720H120v480Zm480 600v-480H120v420c0 33 27 60 60 60h420Z"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                      Table
                      <span className="ml-auto">
                        <MdOutlineArrowRight className="text-2xl pt-1 text-gray-500" />
                      </span>
                    </button>
                    {tableMenu && (
                      <div className="absolute edit-menu top-[24px] w-36  right-[-102%] flex flex-col bg-white tounded z-[40]">
                        <div
                          className="px-1.5 py-2 flex flex-col w-40  gap-y-1 items-start rounded"
                          style={{
                            boxShadow:
                              "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                          }}
                        >
                          <div className="text-sm text-gray-600 w-full rounded ">
                            <label className="inline-block pb-1.5">
                              Table Size
                            </label>

                            <div className="flex gap-x-2 border rounded-md border-gray-200 px-1.5 py-1 w-full">
                              <input
                                id="width"
                                type="number"
                                className="flex-48 border-r border-r-gray-200"
                                min="1"
                                max="1024"
                                placeholder="Rows"
                                value={width}
                                onChange={(event) =>
                                  setWidth(event.target.value)
                                }
                              />
                              <input
                                id="height"
                                className="flex-48"
                                type="number"
                                min="1"
                                max="720"
                                placeholder="Columns"
                                value={height}
                                onChange={(event) =>
                                  setHeight(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => editor.chain().focus().deleteTable().run()}
                      className="text-md text-gray-600 py-1  items-center flex w-full rounded"
                    >
                      <span className="mr-2 ">
                        <svg
                          fill="#777"
                          width="15px"
                          height="15px"
                          viewBox="0 0 1920 1920"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1740 0c99.24 0 180 80.76 180 180v1560c0 99.24-80.76 180-180 180H180c-99.24 0-180-80.76-180-180V180C0 80.76 80.76 0 180 0Zm60 720H720v1080h945c74.25 0 135-60.75 135-135V720ZM600 1320H120v420c0 33 27 60 60 60h420v-480Zm0-600H120v480h480V720Zm1140-600h-420v480h480V180c0-33-27-60-60-60Zm-540 0H720v480h480V120Zm-600 0H180c-33 0-60 27-60 60v420h480V120Zm1134 841.559L1564.441 792 1259.5 1096.941 954.559 792 785 961.559l304.941 304.941L785 1571.441 954.559 1741l304.941-304.941L1564.441 1741 1734 1571.441 1429.059 1266.5 1734 961.559Z"
                            fill-rule="evenodd"
                          />
                        </svg>
                      </span>
                      Delete Table
                    </button>

                    {/* Start Rows panel  */}
                    <div className="relative py-1 w-full">
                      <button
                        type="button"
                        className="text-md text-gray-600  items-center flex w-full rounded"
                        onClick={toggleRows}
                      >
                        <span className="mr-2">
                          <svg
                            height="16px"
                            width="16px"
                            version="1.1"
                            id="Capa_1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 200.147 200.147"
                            xmlSpace="preserve"
                          >
                            <g>
                              <g>
                                <path
                                  d="M0,0v200.147h200.147V0H0z M193.322,38.38H46.79V6.821h146.529V38.38H193.322z M39.976,83.928
                                    v33.237H6.821V83.928C6.821,83.928,39.976,83.928,39.976,83.928z M6.821,77.113V45.201h33.151v31.913H6.821z M39.976,123.986
                                    v30.048H6.821v-30.048H39.976z M46.79,123.986h146.529v30.048H46.79V123.986z M46.79,117.161V83.924h146.529v33.237H46.79z
                                    M46.79,77.113V45.201h146.529v31.913H46.79z M39.976,6.821V38.38H6.821V6.821H39.976z M6.821,160.855h33.151v32.464H6.821
                                    V160.855z M46.79,193.322v-32.464h146.529v32.464H46.79z"
                                  style={{ fill: "rgb(119, 119, 119)" }}
                                />
                              </g>
                            </g>
                          </svg>
                        </span>
                        Rows
                        <span className="ml-auto">
                          <MdOutlineArrowRight className="text-2xl pt-1 text-gray-500" />
                        </span>
                      </button>
                      {rowsMenu && (
                        <div className="absolute edit-menu top-[24px] w-36  right-[-100%] flex flex-col bg-white tounded z-[40]">
                          <div
                            className="px-1.5 py-2 flex flex-col w-40  gap-y-1 items-start rounded"
                            style={{
                              boxShadow:
                                "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                            }}
                          >
                            <div className="text-sm text-gray-600 w-full rounded ">
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor.chain().focus().addRowBefore().run()
                                }
                              >
                                Add row before
                              </button>
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor.chain().focus().addRowAfter().run()
                                }
                              >
                                Add row after
                              </button>
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor.chain().focus().deleteRow().run()
                                }
                              >
                                Delete row
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Start Columns panel  */}
                    <div className="relative py-1 w-full">
                      <button
                        type="button"
                        className="text-md text-gray-600  items-center flex w-full rounded"
                        onClick={toggleColumns}
                      >
                        <span className="mr-2">
                          <svg
                            fill="#777"
                            height="18px"
                            width="18px"
                            version="1.1"
                            id="Layer_1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                          >
                            <path
                              id="Layer_2_00000034068811408167942790000003951247543995121288_"
                              d="M42,22h-4v-4c0-0.5-0.2-1.1-0.6-1.4
                        C37,16.2,36.5,16,36,16c-1.1,0-2,0.9-2,2v4h-4c-0.5,0-1,0.2-1.4,0.6C28.2,22.9,28,23.5,28,24c0,1.1,0.9,2,2,2h4v4
                        c0,0.5,0.2,1.1,0.6,1.4C35,31.8,35.5,32,36,32c1.1,0,2-0.9,2-2v-4h4c0.5,0,1-0.2,1.4-0.6c0.4-0.3,0.6-0.9,0.6-1.4
                        C44,22.9,43.1,22,42,22z M36,36h-3c-2.2,0-4-1.8-4-4v-2h-1c-1.2,0-2.4-0.5-3.1-1.5c-0.2-0.2-0.5-0.3-0.7-0.1
                        c-0.1,0.1-0.2,0.2-0.2,0.4V44h11c1.6,0.1,2.9-1.2,3-2.8c0-0.1,0-0.1,0-0.2v-3C38,36.9,37.1,36,36,36z M35,4H24v15.2
                        c0,0.3,0.2,0.5,0.5,0.5c0.2,0,0.3-0.1,0.4-0.2c0.7-1,1.9-1.5,3.1-1.5h2v-2c0-2.2,1.8-4,4-4h2c1.1,0,2-0.9,2-2V7
                        c0.1-1.6-1.2-2.9-2.8-3C35.1,4,35.1,4,35,4z M6,7v34c-0.1,1.6,1.2,2.9,2.8,3c0.1,0,0.1,0,0.2,0h11V4H9C7.4,3.9,6.1,5.2,6,6.8
                        C6,6.9,6,6.9,6,7z"
                            ></path>
                          </svg>
                        </span>
                        Columns
                        <span className="ml-auto">
                          <MdOutlineArrowRight className="text-2xl pt-1 text-gray-500" />
                        </span>
                      </button>
                      {columnsMenu && (
                        <div className="absolute edit-menu top-[24px] w-36  right-[-100%] flex flex-col bg-white tounded z-[40]">
                          <div
                            className="px-1.5 py-2 flex flex-col w-40  gap-y-1 items-start rounded"
                            style={{
                              boxShadow:
                                "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                            }}
                          >
                            <div className="text-sm text-gray-600 w-full rounded ">
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor.chain().focus().addColumnBefore().run()
                                }
                              >
                                Add column before
                              </button>
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor.chain().focus().addColumnAfter().run()
                                }
                              >
                                Add column after
                              </button>
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor.chain().focus().deleteColumn().run()
                                }
                              >
                                Delete column
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Start Cells panel  */}
                    <div className="relative py-1 w-full">
                      <button
                        type="button"
                        className="text-md text-gray-600  items-center flex w-full rounded"
                        onClick={toggleCells}
                      >
                        <span className="mr-2">
                          <svg
                            fill="#777"
                            width="16px"
                            height="16px"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M22,12.5835114 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L12.5835114,22 C12.5563546,22.0045662 12.5284549,22.0069431 12.5,22.0069431 C12.4715451,22.0069431 12.4436454,22.0045662 12.4164886,22 L5.5,22 C4.11928813,22 3,20.8807119 3,19.5 L3,5.5 C3,4.11928813 4.11928813,3 5.5,3 L19.5,3 C20.8807119,3 22,4.11928813 22,5.5 L22,12.4164886 C22.0045662,12.4436454 22.0069431,12.4715451 22.0069431,12.5 C22.0069431,12.5284549 22.0045662,12.5563546 22,12.5835114 L22,12.5835114 Z M4,12 L12,12 L12,4 L5.5,4 C4.67157288,4 4,4.67157288 4,5.5 L4,12 Z M4,13 L4,19.5 C4,20.3284271 4.67157288,21 5.5,21 L12,21 L12,13 L4,13 Z M21,12 L21,5.5 C21,4.67157288 20.3284271,4 19.5,4 L13,4 L13,12 L21,12 Z M21,13 L13,13 L13,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,13 Z"></path>
                          </svg>
                        </span>
                        Cells
                        <span className="ml-auto">
                          <MdOutlineArrowRight className="text-2xl pt-1 text-gray-500" />
                        </span>
                      </button>
                      {cellsMenu && (
                        <div className="absolute edit-menu top-[24px] w-36  right-[-100%] flex flex-col bg-white tounded z-[40]">
                          <div
                            className="px-1.5 py-2 flex flex-col w-40  gap-y-1 items-start rounded"
                            style={{
                              boxShadow:
                                "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                            }}
                          >
                            <div className="text-sm text-gray-600 w-full rounded ">
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor.chain().focus().mergeCells().run()
                                }
                              >
                                Merge cells
                              </button>
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor.chain().focus().splitCell().run()
                                }
                              >
                                Spilt cells
                              </button>
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor
                                    .chain()
                                    .focus()
                                    .toggleHeaderCell()
                                    .run()
                                }
                              >
                                Toggle header cell
                              </button>
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor.chain().focus().mergeOrSplit().run()
                                }
                              >
                                Merge or split
                              </button>
                              <button
                                className="inline-block py-1.5 hover:bg-gray-200 w-full rounded-md"
                                onClick={() =>
                                  editor
                                    .chain()
                                    .focus()
                                    .toggleHeaderCell()
                                    .run()
                                }
                              >
                                Set cell attribute
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => editor.chain().focus().goToNextCell().run()}
                      className="text-md text-gray-600 flex items-center w-full py-1 rounded"
                    >
                      <span className="mr-2">
                        <svg
                          width="17px"
                          height="17px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 6V18M5 18L5 6L15 12L5 18Z"
                            stroke="#777"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-gray-500 font-emibold text-md">
                        Next Cell
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() => editor.chain().focus().goToPreviousCell().run()}
                      className="text-md text-gray-600 flex items-center w-full py-1 rounded"
                    >
                      <span className="mr-2 ">
                        <svg
                          width="17px"
                          height="17px"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 18L5 6M19 6V18L9 12L19 6Z"
                            stroke="#777"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </span>
                      <span className="text-gray-500 font-emibold text-md">
                        Previous Cell
                      </span>
                    </button>
                  </div>
                </div>
              )}
            </div>
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

            <button
              type="button"
              onClick={addYoutubeVideo}
              className="flex-15 px-1 items-center flex"
            >
              <span className="flex pt-0.5">
                {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                <IoLogoYoutube className="text-xl text-gray-600" />
              </span>
            </button>

            <div className="relative flex edit-btn flex-col flex-20 items-center">
              <button
                type="button"
                className="text-md text-gray-600  items-center flex  rounded"
                onClick={toggleYoutube}
              >
                <span className=" flex pt-0.5">
                  <SiYoutubestudio className="text-lg text-gray-600" />
                </span>
                <FaCaretDown className="text-base pt-1 text-gray-500" />
              </button>
              {youtubeVisible && (
                <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                  <div
                    className="pl-1 py-2 flex flex-col w-40 gap-y-1 items-start rounded"
                    style={{
                      boxShadow:
                        "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                    }}
                  >
                    <div className="p-2 w-full">
                      <label className="inline-block ">Video Size</label>

                      <div className="flex gap-x-2 border rounded-md border-gray-200 p-1 w-full">
                        <input
                          id="width"
                          type="number"
                          className="flex-48 border-r border-r-gray-200"
                          min="320"
                          max="1024"
                          placeholder="width"
                          value={width}
                          onChange={(event) => setWidth(event.target.value)}
                        />
                        <input
                          id="height"
                          className="flex-48"
                          type="number"
                          min="180"
                          max="720"
                          placeholder="height"
                          value={height}
                          onChange={(event) => setHeight(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={insertTweeterEmbed}
              className="flex-15 px-1 items-center flex"
            >
              <span className="flex pt-0.5">
                {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                <FaXTwitter className="text-lg text-gray-600" />
              </span>
            </button>

            <div className="relative flex edit-btn flex-col flex-20 items-center">
              <button
                type="button"
                className="text-md text-gray-600  items-center flex  rounded"
                onClick={toggleXMenu}
              >
                <span className=" flex pt-0.5">
                  <FaSquareXTwitter className="text-lg text-gray-600" />
                </span>
                <FaCaretDown className="text-base pt-1 text-gray-500" />
              </button>
              {xMenu && (
                <div className="absolute edit-menu top-[24px] left-[10px] flex flex-col bg-white tounded z-[40]">
                  <div
                    className="pl-1 py-2 flex flex-col w-40 gap-y-1 items-start rounded"
                    style={{
                      boxShadow:
                        "0 1px 1px -4px rgb(0 0 0 / 20%), 0 2px 2px 0 rgb(0 0 0 / 4%), 0 1px 5px 0 rgb(0 0 0 / 13%)",
                    }}
                  >
                    <div className="p-2 w-full">
                      <button
                        onClick={() =>
                          editor
                            .chain()
                            .focus()
                            .setTweetAlignment("center")
                            .run()
                        }
                        className="text-sm text-gray-600 py-1 hover:bg-gray-200 px-2 rounded "
                      >
                        Aign Center
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={insertFacebookEmbed}
              className="flex-15 px-1 items-center flex"
            >
              <span className="flex pt-0.5">
                {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                <PiFacebookLogoBold className="text-lg text-gray-600" />
              </span>
            </button>

            <button
              type="button"
              onClick={insertInstagramEmbed}
              className="flex-15 px-1 items-center flex"
            >
              <span className="flex pt-0.5">
                {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                <PiInstagramLogoFill className="text-xl text-gray-600" />
              </span>
            </button>
            <button
              type="button"
              onClick={insertTikTokEmbed}
              className="flex-15 px-1 items-center flex"
            >
              <span className="flex pt-0.5">
                {/* <RiImageAddFill className="text-xl text-gray-600" /> */}
                <IoLogoTiktok className="text-xl text-gray-600" />
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
      <EditorContent
        className=""
        style={{ height: "80vh", scrollBehavior: "smooth", overflowY: "auto" }}
        editor={editor}
      >

      </EditorContent>
    </div>
  );
};

export default TextEditor;
