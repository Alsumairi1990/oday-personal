'use client'
import React from 'react';
import {useState} from 'react';



import { LuAlertOctagon } from "react-icons/lu";
import { MdAssignmentAdd } from "react-icons/md";
import AddingBtn from './AddingBtn';
import BasicCreate from './BasicCreate';
import AddCategory from './AddCategory';
import AddTag from './AddTag';


const WorkCreate = () => {
   const imagePath = '/images/navbg.webp';
   const imagePath2 = '/images/buttonsBg.svg';
   const [openMenu,setOpenMenu] = useState('basic');
   const [openNav, setOpenNav] = useState(true);
   const [basic,setBasic] = useState('/images/43.svg');
   const [category,setCategoty] = useState('/images/40.svg');
   const [tag,setTool] = useState('/images/41.svg');
   const [phases,setPhases] = useState('/images/42.svg');
   const [pricing,setPricing] = useState('/images/basic5.svg');  
   const [code,setCode] = useState('/images/basic11.svg');  
   const [testimonials,setTestimonials] = useState('/images/basic6.svg');
   const [works,setWorks] = useState('/images/basic12.svg');
   const [tags,setTags] = useState('/images/basic13.svg');   
   const [productId, setProductId] = useState<string>()

   const openDisplay =()=>{
    alert("vrvtrv")
   }
   const  isOpen = (menuName:any) => {
    return openMenu === menuName; 
  }
  
  
   const changeBtnMenu = (value:string)=> {
    setOpenMenu(value);
   }
   const addBasicData = (value:string)=> {
         setProductId(value);
   }
const close = (v:boolean)=> {
    setOpenMenu('');
    // document.body.classList.remove('modal-open');

}
  return (
    <div  className="flex flex-wrap h-auto bg-white border border-gray-300 rounded-lg" >
        <div className="p-1 border-b border-b-gray-300 border-dashed flex py-3 items-center w-full">
           <div className="flex items-center pl-2">
                <span className=""><MdAssignmentAdd className="text-gray-600 text-2xl mr-2" /> </span>
                <span className="text-[.96rem] font-medium text-gray-600">Product Form</span>
            </div>
            {/* <div className="pl-1">
                <span className="text-gray-600 text-md font-medium">Product Form</span>
            </div> */}
        </div>
    <div id="add-main-panel" className="w-full mx-auto add-main-panel bg-white mb-6 grid grid-cols-1 sm:grid-cols-3  flex-col  rounded-md  borrder borrder-gray-200 bg-whitey">
        
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 h-fit rounded bg-white  px-2 py-3 "  >
          <div className="add-main h-fit  ">
                <AddingBtn
                title="Basic Data"
                svgUrl={basic}
                title_name="basic"
                changeMenu={changeBtnMenu}
                isOpen={isOpen}
                />
             </div>



             <div className="add-main">
                <AddingBtn
                title="Categoty Details"
                svgUrl={category}
                title_name="category"
                changeMenu={changeBtnMenu}
                isOpen={isOpen}
                />
             </div>


             <div className="add-main">
                <AddingBtn
                title="Project Tasks"
                svgUrl={tag}
                title_name="tag"
                changeMenu={changeBtnMenu}
                isOpen={isOpen}
                
                />
             </div>

             <div className="add-main">
                <AddingBtn
                title="Advanced Data"
                svgUrl={phases}
                title_name="phases"
                last="last"
                changeMenu={changeBtnMenu}
                isOpen={isOpen}
                />
             </div>
             
         </div>


         <div className="sm:col-span-2 sm:col-start-2 bg-white">
            <div className="">
               {isOpen('basic') && (<div className="flex add-form items-center justify-center w-full ">
                        <div   className="flex flex-col w-full sm:w-11.8/12 animate-modalEnter  add-menu  bg-white items-center border-l border-dashed border-l-gray-300 " >
                         <div  className="w-full ">
                           <BasicCreate  addBasicId={addBasicData} closeModel={close} />
                         </div>
                     </div>
                 </div>
                )}
             </div>

             <div className="">
                     {isOpen('category') && (<div className="flex add-form items-center justify-center w-full ">
                        <div   className="flex flex-col w-full sm:w-11.8/12 animate-modalEnter  add-menu  bg-white items-center border-dashed border-l border-l-gray-300 " >
                         <div  className="w-full ">
                           <AddCategory  productId={productId!} />
                         </div>
                     </div>
                 </div>
                )}
             </div>

             <div className="">
             {isOpen('tag') && (<div className="flex add-form items-center justify-center pt-3  w-full ">
                        <div   className="flex flex-col w-full sm:w-11.8/12 animate-modalEnter  add-menu  bg-white items-center rounded-md  border border-gray-200 " >
                         <div  className="w-full ">
                         {productId && <AddTag  productId={productId} />}
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
