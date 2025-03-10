import { Editor } from "@tiptap/react"

interface Props {
    editor : Editor
}
const AlignArea = ({editor}: Props ) => {
    return (
        <>
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
        </>
    )
}
export default  AlignArea 