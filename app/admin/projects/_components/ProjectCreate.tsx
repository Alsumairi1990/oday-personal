'use client'
import React from 'react';
import {useState} from 'react';



import { LuAlertOctagon } from "react-icons/lu";
import { MdAssignmentAdd } from "react-icons/md";
// import CategoryCreate from './CategoryCreate';
// import MediaCreate from './MediaCreate';
// import ToolCreate from './ToolCreate';
import AddingBtn from './AddingBtn';
import BasicCreate from './BasicCreate';
import CategoryCreate from './CategoryCreate';
import ToolCreate from './ToolCreate';
import TaskCreate from './TaskCreate';
import AddTeam from './AddTeam';
import CreatePhase from '../phases/_components/CreatePhase';




const WorkCreate = () => {
   const imagePath = '/images/navbg.webp';
   const imagePath2 = '/images/buttonsBg.svg';
  //  const  basic = 'hgghg';
  //  const [basicUrl,setBasic] = useState(`<svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 503.82 503.82" xml:space="preserve"><path style="fill:#f2edda" d="M460.65 123.09v341.33a34.23 34.23 0 0 1-34.13 34.13H68.12A34.23 34.23 0 0 1 34 464.42V37.75A34.23 34.23 0 0 1 68.12 3.62H341.2v85.33a34.23 34.23 0 0 0 34.13 34.14h85.33z" transform="translate(5 1)"/><path style="fill:#ffd0a1" d="M460.65 123.09h-85.33a34.23 34.23 0 0 1-34.13-34.14V3.62l119.46 119.47z" transform="translate(5 1)"/><path style="fill:#ecf4f7" d="M375.32 191.35v119.47h-256V191.35z" transform="translate(5 1)"/><path style="fill:#50dd8e" d="M375.32 310.82h-204.8l59.74-59.73 25.6 25.6 42.66-42.67z" transform="translate(5 1)"/><path style="fill:#ffe079" d="M161.99 225.49c4.26 0 8.53 4.26 8.53 8.53s-4.27 8.53-8.53 8.53-8.54-4.26-8.54-8.53 4.27-8.53 8.54-8.53" transform="translate(5 1)"/><path style="fill:#51565f" d="M431.52 503.82H73.12a38.24 38.24 0 0 1-38.4-38.4V38.75A38.24 38.24 0 0 1 73.12.35h238.93c2.56 0 4.27 1.71 4.27 4.27s-1.7 4.27-4.27 4.27H73.12c-16.21 0-29.87 13.65-29.87 29.86v426.67c0 16.21 13.66 29.87 29.87 29.87h358.4c16.21 0 29.87-13.66 29.87-29.87V125.79L350.45 14.86v75.1c0 17.06 12.8 29.86 29.87 29.86h34.14c2.56 0 4.26 1.7 4.26 4.27s-1.7 4.26-4.27 4.26h-34.13a38.24 38.24 0 0 1-38.4-38.4V4.62c0-1.7.86-3.41 2.56-4.27s3.42 0 4.27.86l119.47 119.46c.85.86.85 1.71.85 3.42v341.33c.85 21.33-16.21 38.4-37.55 38.4zm-68.26-85.33H243.78c-2.56 0-4.27-1.71-4.27-4.27 0-2.56 1.7-4.27 4.27-4.27h119.47c2.56 0 4.26 1.71 4.26 4.27 0 2.56-1.7 4.27-4.26 4.27zm-153.6 0h-85.34c-2.56 0-4.26-1.71-4.26-4.27 0-2.56 1.7-4.27 4.26-4.27h85.34c2.56 0 4.26 1.71 4.26 4.27 0 2.56-1.7 4.27-4.26 4.27zm170.66-51.2h-51.2c-2.56 0-4.27-1.71-4.27-4.27s1.71-4.27 4.27-4.27h51.2c2.56 0 4.27 1.71 4.27 4.27s-1.7 4.27-4.27 4.27zm-85.33 0h-85.34c-2.56 0-4.26-1.71-4.26-4.27s1.7-4.27 4.27-4.27h85.33c2.56 0 4.26 1.71 4.26 4.27s-1.7 4.27-4.26 4.27zm-119.47 0h-51.2c-2.56 0-4.27-1.71-4.27-4.27s1.71-4.27 4.27-4.27h51.2c2.56 0 4.27 1.71 4.27 4.27s-1.7 4.27-4.27 4.27zm204.8-51.2h-153.6c-2.56 0-4.27-1.71-4.27-4.27 0-2.56 1.71-4.27 4.27-4.27h149.33V196.62H128.6v110.93h45.22l58.88-58.88a4.12 4.12 0 0 1 5.98 0l22.19 22.19 39.25-39.25a4.12 4.12 0 0 1 5.97 0l42.67 42.66a4.12 4.12 0 0 1 0 5.98 4.12 4.12 0 0 1-5.97 0l-39.26-39.26-39.25 39.26a4.12 4.12 0 0 1-5.97 0l-22.2-22.19-56.31 56.32c-.85.85-1.7.85-3.41.85h-51.2c-2.56 0-4.27-1.7-4.27-4.26V191.5c0-2.56 1.7-4.27 4.27-4.27h256c2.56 0 4.26 1.71 4.26 4.27v119.47c-.85 3.41-2.56 5.12-5.12 5.12zM167 247.82c-6.83 0-12.8-5.97-12.8-12.8 0-6.83 5.97-12.8 12.8-12.8s12.8 5.97 12.8 12.8c0 6.83-5.97 12.8-12.8 12.8zm0-17.07c-2.56 0-4.27 1.71-4.27 4.27 0 2.56 1.7 4.27 4.27 4.27s4.26-1.71 4.26-4.27c0-2.56-1.7-4.27-4.26-4.27zm42.66-85.33h-85.33c-2.56 0-4.26-1.7-4.26-4.27 0-2.56 1.7-4.26 4.26-4.26h85.34c2.56 0 4.26 1.7 4.26 4.26 0 2.56-1.7 4.27-4.26 4.27z"/></svg>`);
   const [openMenu,setOpenMenu] = useState('');
   const [openNav, setOpenNav] = useState(true);
   const [basic,setBasic] = useState('/images/basic-2.svg');
   const [category,setCategoty] = useState('/images/basic10.svg');
//    const [extra,setExtra] = useState('/images/basic-3.svg');
   const [tool,setTool] = useState('/images/basic-3.svg');
   const [phases,setPhases] = useState('/images/basic4.svg');
   const [pricing,setPricing] = useState('/images/basic5.svg');  
   const [code,setCode] = useState('/images/basic11.svg');  
   const [testimonials,setTestimonials] = useState('/images/basic6.svg');
   const [works,setWorks] = useState('/images/basic12.svg');
   const [tags,setTags] = useState('/images/basic13.svg');   
   const [projectId, setProjectId] = useState<string>()

   const openDisplay =()=>{
    alert("vrvtrv")
   }
   const  isOpen = (menuName:any) => {
    
    return openMenu === menuName; 
  }
   const openEdit = ()=>{

   }
   const openDelete = ()=>{

   }
   const toggleMenu = (meny:any) => {

   }
   const changeBtnMenu = (value:string)=> {
    
    setOpenMenu(value);
    document.body.classList.add('modal-open');

   }
   const addBasicData = (value:string)=> {
         setProjectId(value);
    // console.log(value);
   }
const close = (v:boolean)=> {
    setOpenMenu('');
    document.body.classList.remove('modal-open');

}
  return (
    <div  className="flex flex-wrap min-h-[100vh] h-auto" >
    <div id="add-main-panel" className="w-full mx-auto add-main-panel  flex h-full flex-col  rounded-md  borrder borrder-gray-200 bg-whitey">
        <div className="flex-100 grid grid-cols-2 sm:grid-cols-5 gap-4 rounded bjg-[#4568e7] px-0.5 "  >
          <div className="add-main">
                <AddingBtn
                title="Basic Data"
                svgUrl={basic}
                title_name="basic"
                changeMenu={changeBtnMenu}
                />
                {isOpen('basic') && (<div className="fixed flex add-form bg-[rgba(0,0,0,0.38)]  items-center justify-center top-0 left-0 h-full w-full z-50">
                        <div   className="flex flex-col w-full sm:w-5/12 animate-modalEnter max-sm:h-full add-menu  bg-white items-center rounded-md  border border-gray-300 " style={{boxShadow: 'rgb(82 63 104 / 12%) 0px 0px 10px 0px'}}>
                        <div className="flex w-full bg-gray-100 rounded-t-md py-2.5 items-center px-3 border-b border-b-gray-300">
                            <div className="flex items-center">
                              <span className=""><MdAssignmentAdd className="text-gray-600 text-2xl mr-2" /> </span>
                                  <span className="text-[.96rem] font-medium text-gray-600">Basic Data {projectId}</span>
                              </div>
                              <div className="ml-auto">
                                  <button type="button" onClick={() => {setOpenMenu(''); document.body.classList.remove('modal-open')}}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                      <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                      <span className="sr-only">Close modal</span>
                                  </button>
                              </div>
                              </div>
                         <div  className="w-full ">
                         <BasicCreate  addBasicId={addBasicData} closeModel={close} />
                      </div>
                     </div>
                 </div>
                )}

             </div>



             <div className="add-main">
                <AddingBtn
                title="Categoty Details"
                svgUrl={category}
                title_name="category"
                changeMenu={changeBtnMenu}
                />
                {isOpen('category') && (<div className="fixed flex add-form bg-[#00000061]  items-center justify-center top-0 left-0 h-full w-full z-50">
                        <div   className="flex flex-col w-full max-sm:h-full sm:w-5/12 add-menu  bg-white items-center rounded-md  border border-gray-300 " style={{boxShadow: 'rgb(82 63 104 / 12%) 0px 0px 10px 0px'}}>
                          <div className="flex w-full bg-[#7c3aed] rounded-t-md py-2.5 items-center px-3 border-b border-b-gray-300">
                              <div className="flex items-center">
                                  <span className=""><MdAssignmentAdd className='text-white text-2xl mr-2' /> </span>
                                  <span className="text-base font-semibold text-white">Categories</span>
                              </div>
                              <div className="ml-auto">
                              <button type="button" onClick={() => {setOpenMenu(''); document.body.classList.remove('modal-open')}}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                      <span className="sr-only">Close modal</span>
                                  </button>
                              </div>
                              </div>
                         <div  className="w-full max-h-[90vh] overflow-y-auto scr-container">
                         {projectId ? <CategoryCreate projectId={projectId}  /> :
                         <div className='flex items-center gap-3 px-4'>
                            <LuAlertOctagon className='text-gray-500  text-xl' />
                            <span className='text-orange-500 text-base inline-flex py-4'>No Work added </span>

                         </div>}

                      </div>
                     </div>
                 </div>
                )}

             </div>


             <div className="add-main">
                <AddingBtn
                title="Tool Details"
                svgUrl={tool}
                title_name="tool"
                changeMenu={changeBtnMenu}
                />
                {isOpen('tool') && (<div className="fixed flex add-form bg-[#00000061]  items-center justify-center top-0 left-0 h-full w-full z-50">
                        <div   className="flex flex-col w-full max-sm:h-full sm:w-5/12 add-menu  bg-white items-center rounded-md  border border-gray-300 " style={{boxShadow: 'rgb(82 63 104 / 12%) 0px 0px 10px 0px'}}>
                           <div className="flex w-full  bg-[hsl(262,83%,58%)] rounded-t-md py-2.5 items-center px-3 border-b border-b-gray-300" style={{boxShadow:'0 6px 19px -13px #9f9494;'}}>
                              <div className="flex items-center">
                                     <span className=""><MdAssignmentAdd className='text-white text-2xl mr-2' /> </span>
                                  <span className="text-base font-semibold text-white">Service Tools</span>
                              </div>
                              <div className="ml-auto">
                              <button type="button" onClick={() => {setOpenMenu(''); document.body.classList.remove('modal-open')}}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                      <span className="sr-only">Close modal</span>
                                  </button>
                              </div>
                            </div>
                         <div  className="w-full max-h-[90vh] overflow-y-auto scr-container">
                         {projectId ? <ToolCreate projectId={projectId}  /> :
                         <div className='flex items-center gap-3 px-4'>
                            <LuAlertOctagon className='text-gray-500  text-xl' />
                            <span className='text-orange-500 text-base inline-flex py-4'>No Work added </span>

                         </div>}                  
                      </div>
                     </div>
                 </div>
                )}
             </div>
             <div className="add-main">
                <AddingBtn
                title="Project Tasks"
                svgUrl={code}
                title_name="code"
                changeMenu={changeBtnMenu}
                />
                {isOpen('code') && (<div className="fixed flex add-form bg-[#00000061]  items-center justify-center top-0 left-0 h-full w-full z-50">
                        <div   className="flex flex-col w-full max-sm:h-full sm:w-5/12 add-menu  bg-white items-center rounded-md  border border-gray-300 " style={{boxShadow: 'rgb(82 63 104 / 12%) 0px 0px 10px 0px'}}>
                          <div className="flex w-full bg-gray-100 rounded-t-md py-2.5 items-center px-3 border-b border-b-gray-300">
                              <div className="flex items-center">
                                  <span className=""><MdAssignmentAdd className='text-gray-600 text-2xl mr-2' /> </span>
                                  <span className="text-[.96rem] font-medium text-gray-600">Project Tasks</span>
                              </div>
                              <div className="ml-auto">
                              <button type="button" onClick={() => {setOpenMenu(''); document.body.classList.remove('modal-open')}}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                      <span className="sr-only">Close modal</span>
                                  </button>
                              </div>
                          </div>
                         <div  className="w-full">
                         <TaskCreate projectId={projectId ?? ''}   />
                      </div>
                     </div>
                 </div>
                )}
             </div>


             <div className="add-main">
                <AddingBtn
                title="Project Team"
                svgUrl={works}
                title_name="team"
                changeMenu={changeBtnMenu}
                />
                {isOpen('team') && (<div className="fixed flex add-form bg-[#00000061]  items-center justify-center top-0 left-0 h-full w-full z-50">
                        <div   className="flex flex-col w-full max-sm:h-full sm:w-[55%] add-menu  bg-white items-center rounded-md  border border-gray-300 " style={{boxShadow: 'rgb(82 63 104 / 12%) 0px 0px 10px 0px'}}>
                          <div className="flex w-full bg-gray-100 rounded-t-md py-2.5 items-center px-3 border-b border-b-gray-300">
                              <div className="flex items-center">
                                  <span className=""><MdAssignmentAdd className='text-gray-600 text-2xl mr-2' /> </span>
                                  <span className="text-[.96rem] font-medium text-gray-600">Project Team</span>
                              </div>
                              <div className="ml-auto">
                              <button type="button" onClick={() => {setOpenMenu(''); document.body.classList.remove('modal-open')}}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                              <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                      <span className="sr-only">Close modal</span>
                                  </button>
                              </div>
                              </div>
                         <div  className="w-full max-h-[90vh] scr-container overflow-y-auto">
                         <AddTeam projectId={projectId ?? ''}   />
                      </div>
                     </div>
                 </div>
                )}
             </div>

             <div className="add-main">
                <AddingBtn
                title="Project phases"
                svgUrl={phases}
                title_name="phases"
                changeMenu={changeBtnMenu}
                />
                {isOpen('phases') && (<div className="fixed flex add-form bg-[#00000061]  items-center justify-center top-0 left-0 h-full w-full z-50">
                        <div   className="flex flex-col w-full max-sm:h-full sm:w-[55%] add-menu  bg-white items-center rounded-md  border border-gray-300 " style={{boxShadow: 'rgb(82 63 104 / 12%) 0px 0px 10px 0px'}}>
                          <div className="flex w-full bg-gray-100 rounded-t-md py-2.5 items-center px-3 border-b border-b-gray-300">
                              <div className="flex items-center">
                                  <span className=""><MdAssignmentAdd className='text-gray-600 text-2xl mr-2' /> </span>
                                  <span className="text-[.96rem] font-medium text-gray-600">Project phases</span>
                              </div>
                              <div className="ml-auto">
                                    <button type="button" onClick={() => {setOpenMenu(''); document.body.classList.remove('modal-open')}}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                      <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                      <span className="sr-only">Close modal</span>
                                  </button>
                              </div>
                         </div>
                         <div  className="w-full max-h-[90vh] scr-container overflow-y-auto">
                         <CreatePhase projectId={projectId ?? ''}   />
                      </div>
                     </div>
                 </div>
                )}
             </div>
          
              <div className="add-main">
                <AddingBtn
                title="Project Client"
                svgUrl={testimonials}
                title_name="client"
                changeMenu={changeBtnMenu}
                />
                {isOpen('client') && (<div className="fixed flex add-form bg-[#00000061]  items-center justify-center top-0 left-0 h-full w-full z-50">
                        <div   className="flex flex-col w-full max-sm:h-full sm:w-6/12 add-menu  bg-white items-center rounded-md  border border-gray-300 " style={{boxShadow: 'rgb(82 63 104 / 12%) 0px 0px 10px 0px'}}>
                          <div className="flex w-full bg-[#7c3aed] rounded-t-md py-2.5 items-center px-3 border-b border-b-gray-300">
                              <div className="flex items-center">
                                  <span className=""><MdAssignmentAdd className='text-white text-2xl mr-2' /> </span>
                                  <span className="text-base font-semibold text-white">Client Data</span>
                              </div>
                              <div className="ml-auto">
                                   <button type="button" onClick={() => {setOpenMenu(''); document.body.classList.remove('modal-open')}}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                                      <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                      </svg>
                                      <span className="sr-only">Close modal</span>
                                  </button>
                              </div>
                              </div>
                         <div  className="w-full max-h-[100vh] overflow-y-auto">
                         {/* <BasicInfo addBasicForm={addBasicData}  /> */}
                      </div>
                     </div>
                 </div>
                )}

             </div>


         </div>
        </div>
    </div>
  
  )
};


export default WorkCreate;
