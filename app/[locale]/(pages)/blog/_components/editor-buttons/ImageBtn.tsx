import ImageUploadModal from "@/app/_components/admin/editor/ImageUploadModal";
import { Editor } from "@tiptap/react"
import { useEffect, useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuImagePlus } from "react-icons/lu";
import { MdBrokenImage } from "react-icons/md";
import { PiImagesSquareDuotone } from "react-icons/pi";
import { RiImageEditFill } from "react-icons/ri";

interface Props {
    editor : Editor
}
const ImageBtn = ({editor}: Props ) => {
    const [imageModelVisible, setImageModelVisible] = useState(false);
      const toggleImageModelVisible = () => {
        setImageModelVisible(!imageModelVisible);
      };
      const [imageOptionsVisible, setImageOptionsVisible] = useState(false);
      const [imageWidthVisible, setImageWidthVisible] = useState(false);
      const [imageWidth, setImageWidth] = useState<number | null>(null);
      const [height, setHeight] = useState<string>("400");
      const [width, setWidth] = useState<string>("640");
      
      
        const toggleImageWidth = () => {
          setImageWidthVisible(!imageWidthVisible);
        };
        const toggleImageOptions = () => {
          setImageOptionsVisible(!imageOptionsVisible);
        };
       
        const [imageRadiusVisible, setImageRadiusVisible] = useState(false);
          const toggleImageRadius = () => {
            setImageRadiusVisible(!imageRadiusVisible);
          };
      const handleCloseModal = () => {
        setImageModelVisible(false);
        console.log("close Image:");
      };

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
         
        }, [editor]);

       
      
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

      const handleSetWidth = (width: number) => {
        setImageWidth(width); // Update state with new width
        resizeImage(width); // Call function to resize image
      };
      const resizeImage = (width: number) => {
          if (!editor) return;

          const { state, view, schema } = editor;
          const { from } = state.selection;

          // Find the image node in the current selection
          const imageNode = state.doc.nodeAt(from);

          if (imageNode && imageNode.type === schema.nodes.image) {
            console.log("Current image attributes:", imageNode.attrs); // Debugging

            const transaction = state.tr.setNodeMarkup(from, null, {
              ...imageNode.attrs, // Preserve existing attributes
              width: `${width}%`, // Set new width percentage
            });

            view.dispatch(transaction);
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
      const handleSetBorderRadius = (borderRadius: string) => {
        if (!editor) return;
      
        const { state, view, schema } = editor;
        const { from } = state.selection;
      
        const imageNode = state.doc.nodeAt(from);
        if (imageNode && imageNode.type === schema.nodes.image) {
          console.log("Current image attributes:", imageNode.attrs); // Debugging
      
          const transaction = state.tr.setNodeMarkup(from, schema.nodes.image, {
            ...imageNode.attrs, // Preserve existing attributes
            borderRadius, // Set new borderRadius
          });
      
          view.dispatch(transaction);
        }
      };
      
    return (
        <>
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
     
        {imageModelVisible && (
          <div className="w-full">
            <ImageUploadModal
              onClose={handleCloseModal}
              onInsertImage={handleInsertImage}
            />
          </div>
        )}
        </>
    )
}
export default  ImageBtn 