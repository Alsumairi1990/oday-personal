import { Editor } from "@tiptap/react"
import { useCallback } from "react";

interface Props {
    editor : Editor
}
const ThirdArea = ({editor}: Props) => {

  const setLink = useCallback(() => {
    const previousUrl = editor!.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);
    // cancelled
    if (url === null) {
      return;
    }
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
    return (
        <>
          {/* Start third - 3   Area */}
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
        </>
    )
}
export default ThirdArea 