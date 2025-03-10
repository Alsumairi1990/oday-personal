'use client'
import { Editor } from "@tiptap/react"
import { useState } from "react"
import { FaCaretDown, FaTasks } from "react-icons/fa"
import { GoListOrdered, GoTasklist } from "react-icons/go"
import { GrTableAdd } from "react-icons/gr"
import { MdFormatListBulletedAdd, MdOutlineArrowRight } from "react-icons/md"
import { TbTableOptions } from "react-icons/tb"


interface Props {
    editor :Editor
}
const TableArea = ({editor}: Props) => {
    const [bulletListVisible, setBulletListVisible] = useState(false);
    const [orderedListVisible, setOrderedListVisible] = useState(false);
    const [taskListVisible, setTaskListVisible] = useState(false);
    const [tableOptions, setTableOptions] = useState(false);
    const [tableMenu, setTableMenu] = useState(false);
    const [height, setHeight] = useState<string>("400");
    const [width, setWidth] = useState<string>("640");
    const [rowsMenu, setRowsMenu] = useState(false);
    const [columnsMenu, setColumnsMenu] = useState(false);
    const toggleColumns = () => {
         setColumnsMenu(!columnsMenu);
       };
       const [cellsMenu, setCellsMenu] = useState(false);
       const toggleCells = () => {
         setCellsMenu(!cellsMenu);
       };
      const toggleRows = () => {
        setRowsMenu(!rowsMenu);
      };
      const toggleTable = () => {
        setTableMenu(!tableMenu);
      };
    const toggleTableOptions = () => {
        setTableOptions(!tableOptions);
      };
      const toggleTaskdList = () => {
        setTaskListVisible(!taskListVisible);
      };
    const toggleOrderedList = () => {
        setOrderedListVisible(!orderedListVisible);
    };
    const toggleMBulletList = () => {
        setBulletListVisible(!bulletListVisible);
      };
    return (
        <>
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
                          <FaTasks className="text-xl text-gray-500" />
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
        
        
        </>
    )
}
export default TableArea