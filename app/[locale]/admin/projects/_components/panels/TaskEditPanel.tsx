"use client";
import React, { useEffect } from "react";
import { Task} from "@prisma/client";
import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { TbSubtask } from "react-icons/tb";
import Image from 'next/image'
import {
  MdAssignmentAdd,
  MdOutlineAddCircle,
} from "react-icons/md";
import { LuAlertOctagon } from "react-icons/lu";
import { ProjectWithModels } from "../../_utils/ProjectWithModels";
import { removeProjectTask} from "../../_actions/panels/Actions";
import { getProjectWModelsById} from "../../_actions/Actions";
import { RiEdit2Fill } from "react-icons/ri";
import { PiImageThin } from "react-icons/pi";
import TaskCreatePanel from "./TaskCreatePanel";

interface FormEditProps {
  project: ProjectWithModels;
  colseModel: (value: boolean) => void;
}
const TaskEditPanel = ({ project , colseModel }: FormEditProps) => {
  const [baseUrl, setBaseUrl] = useState<string>("");
  const [projectData, setProjectData] = useState<ProjectWithModels>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [menuElements, setMenuElements] = useState<Task[] | null>([]);
  const [showRemoveTool, setShowRemoveTool] = useState<boolean>(false);
  const [elementMenuShow, setElementMenuShow] = useState<boolean>(false);
  const [selectedMenuElements, setSelectedMenuElements] = useState<string[]>([]);
  const [selectedMenuElementsId, setSelectedMenuElementsId] = useState<string[]>([]);
  const [removedTool, setRemovedTool] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [trigger, setTrigger] = useState(0);


  const addSelectedService = (id: string, name: string) => {
    setSelectedMenuElements(prevValues => {
      const newValues = [...prevValues, name];
      setTrigger(trigger + 1);
      return newValues;
  });
  setSelectedMenuElementsId(prevValues => {
    const newValues = [...prevValues, id];
    setTrigger(trigger + 1);
    return newValues;
});
  
   
  };
  const unSelectedService = (id: string, name: string) => {
    setSelectedMenuElements(prevValues => {
      const newValues = prevValues.filter(item => item !== name);
      setTrigger(trigger + 1); 
      return newValues;
  });

  setSelectedMenuElementsId(prevValues => {
        const newValues = prevValues.filter(item => item !== id);
        setTrigger(trigger + 1); 
        return newValues;
    });
  
  };
 

  const closePanel = (flag:boolean) => {
    setElementMenuShow(flag);
    getAllMenuElements();
  }
  const removeElem = async ()=> {
    try {
        setLoading(true);
        const result = await removeProjectTask(project.id,removedTool);
        setProjectData(result);
        setLoading(false);
       setSelectedMenuElements([]);
       setShowRemoveTool(false)
      } catch (error: any) {
        setLoading(false);
        setError(error.message);
      }
  }
  const getAllMenuElements = async () => {
    try {
      setLoading(true);
      const elements = await getProjectWModelsById(project.id);
      setMenuElements(elements.tasks);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };
  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
    setProjectData(project);
  }, []);
  useEffect(() => {
    getAllMenuElements();
  }, []);
  return (
    <div className="h-auto flex flex-col items-center relative justify-center w-full m-auto ">
      {loading && (
        <div
          className=" w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center"
          style={{ backdropFilter: "blur(2px)" }}
        >
          <div className="loader-2 w-4"></div>
        </div>
      )}
      
      <div className="p-2 w-full rounded-md my-6 bg-white border border-gray-300">
        
          <div className="px-2 w-full animate-modalSlide ">
            <div className="flex  pt-1.5 pb-1.5 bg-white rounded px-2 border border-gray-300 mb-1.5">
              <div className="flex gap-x-2 items-center">
                <span className="">
                  <TbSubtask className="text-gray-700 text-xl" />{" "}
                </span>
                <span className="text-gray-700 text-base font-medium">
                  Edit Task
                </span>
              </div>
             
              <div className="ml-auto flex gap-x-2">
               
                <button
                  className={`ml-auto flex items-center px-1.5 py-0.5 rounded-md ${selectedMenuElements.length>0 ? 'bg-gray-800' : 'bg-gray-500'}`}
                //   onClick={() =>  {addWork()}}
                  disabled={selectedMenuElements.length<1}
                >
                  <span className="text-gray-100 text-md">Save {selectedMenuElements.length}</span>
                </button>
              </div>
            </div>
             {error && (
                  <div className="py-3 my-1 border-t border-t-gray-300 flex items-center">
                    <LuAlertOctagon className="text-gray-500 mr-2 text-xl" />
                    <span className="text-red-400 text-md">{error}</span>
                  </div>
                )}
            <div className="p-2 w-full bg-slate-50 border border-gray-200">
              {projectData &&
              <div>
                <div className="py-2 flex items-center border rounded-md px-2 border-gray-300 bg-white flex-wrap overflow-y-auto">
                <span className="text-gray-600 text-md">List of added categories : </span>
                  <div className="flex items-center rounded-md w-full gap-2 max-h-32 sm:max-h-44 flex-wrap overflow-y-auto">
                  
                   {projectData.tasks && projectData.tasks.length>0 ?  (
                          <div className="py-2 grid sm:grid-cols-3 gap-x-2 gap-y-4 items-center w-full ">
                          {projectData.tasks.map(element => (
                            <div className="flex flex-col">
                            <div className="flex items-center  rounded-md pl-2 pr-1 bg-white border border-gray-200">
                                {element.image ? (
                                  <div className="p1 h-16 py-2 flex-25 pr-1 ">
                                    <Image
                                    height="100"
                                    width="100"
                                    alt="iame"
                                    src={element.image}
                                    className=" w-full h-full rounded border border-gray-300"
                                    />
                                  </div>
                                )
                                :(
                                    <div className="flex h-16 py-2 pr-1 flex-25 items-center justify-center "><PiImageThin className="text-xl text-gray-500 rounded border border-gray-300 items-center justify-center bg-gray-50 inline-flex w-full h-full " /></div>
                                )}
                                {element.name && <div className="flex-60 flex h-14 items-center border-x border-gray-300 pl-2"><span className='text-sm  pl-2 text-gray-600  mr-2 font-medium'>{element.name}</span></div>}
                                <div className="flex-15 gap-y-1 flex flex-col items-center justify-center ">
                                    <button
                                    onClick={() => {
                                        if(projectData.categories.length>0) setRemovedTool(element.name);
                                        setShowRemoveTool(true);
                                    }}
                                    className="flex  items-center border size-[22px] justify-center   border-sky-500 bg-sky-500 rounded-md"
                                    >
                                    <IoMdCloseCircle className="text-base text-white" />
                                    </button>
                                    <button
                                    onClick={() => {
                                        if(projectData.categories.length>0) setRemovedTool(element.name);
                                        setShowRemoveTool(true);
                                    }}
                                    className="flex items-center border size-[22px] justify-center   border-gray-300 bg-gray-200 rounded-md"
                                    >
                                    <RiEdit2Fill className="text-sm text-gray-600" />
                                    </button>
                                </div>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <div className="h-2.5 flex-90 flex bg-gray-200 mt-1 rounded">
                                  <span className="bg-green-600 inline-flex h-2.5 rounded " style={{ width: `${element.progress}%` }}></span>
                                </div>
                                <span className="text-gray-500 text-sm flex-10 flex justify-end">{element.progress}%</span>
                            </div>
                            </div>
                          ))}
                          </div> 
                      ):(
                        <div className="pb-1">
                        <span className="text-sm text-orange-600 px-4 inline-flex capitalize">No Services  </span>
                    </div>                                   
                      )
                      }
                  </div>
                </div>
                    
                <div className="p2">
                  <div className="py-2 ">
                    <button
                      type="button"
                      onClick={() => {
                        setElementMenuShow((prevState) => {
                          if (prevState == false) {
                            setSelectedMenuElements([]);
                            setSelectedMenuElementsId([]);
                          }
                          return !prevState;
                        });
                      }}
                      className="flex w-full bg-white  items-center border gap-x-3 py-2 border-gray-300  px-2 rounded-2xl"
                    >
                      {/* <GrSelect className="text-base text-gray-600" /> */}
                      {selectedMenuElements.length>0 ? (
                        <span className="text-md inline-flex text-gray-600 font-medium">
                         {selectedMenuElements.map(element => (
                              <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{element}</span>
                          ))}
                        </span>
                      ) : (
                        <div className="text-md inline-flex text-gray-800 font-medium capitalize">
                          <span className="px-1 capitalize">Adding tools to project</span>
                        </div>
                      )}
                      <span className="ml-auto">
                        <MdOutlineAddCircle className="text-3xl border-2 border-violet-800 rounded-full text-violet-800" />
                      </span>
                    </button>
                  </div>
                
                </div>
              
                {showRemoveTool && <div className='fixed top-0 left-0 z-30 bg-[#00000018]  flex items-center justify-center h-full w-full '>
                        <div className="w-5/12 bg-white animate-modalEnter rounded-md shadow-lg p-4">
                              <div className="flex w-full border border-gray-300 bg-gray-200 rounded-md py-2.5 items-center px-3 border-b border-b-gray-300" style={{boxShadow:'0 6px 19px -13px #9f9494;'}}>
                                    <div className="flex items-center">
                                            <span className=""><MdAssignmentAdd className='text-gray-600 text-2xl mr-2' /> </span>
                                        <span className="text-base font-semibold text-gray-600">Remove Service Tool</span>
                                    </div>
                                    <div className="ml-auto">
                                        <button type="button" onClick={() => setShowRemoveTool(false)}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                            <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                            </svg>
                                            <span className="sr-only">Close modal</span>
                                        </button>
                                    </div>
                                </div>
                                <div className=" flex flex-col z-0 w-full mt-2 mb-5 group pt-2">
                                    <span className='text-red-500'>You are going to remove tool from service</span>
                                </div>
                                <div className="mt-2 p-2 flex justify-center">
                                <button 
                                onClick={ removeElem }
                                className='inline-flex py-1.5  items-center px-2 rounded-md bg-violet-600 ml-4 text-white text-[14px] capitalize'>
                                  Remove Service Tool
                                  </button>
                                  </div>
                        </div> 
                    </div>
                    }
                </div>
              }
            </div>
          </div>
          {elementMenuShow && (
                    <div className="fixed top-0 left-0 z-50 bg-[#00000044]  flex items-center justify-center h-full w-full">
                      <TaskCreatePanel  projectId={project.id} closeModel={closePanel}   />
                    </div>
                  )}
      </div>
    </div>
  );
};

export default TaskEditPanel;