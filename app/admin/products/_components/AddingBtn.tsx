import React from 'react';
import { MdAddChart } from 'react-icons/md';
import { ReactSVG } from 'react-svg';
// const AddingBtn =(title:any,svgUrl:any)=> {


interface Props {
    title: any;
    svgUrl:any,
    title_name:any,
    last?:string,
    isOpen: (value: string) => boolean,
    changeMenu: (value: string) => void
  }

const AddingBtn =({title,svgUrl,title_name,changeMenu,last,isOpen}:Props)=> {
    const toggleBtn =  () => {
         changeMenu(title_name); 
      }
      const isActive = isOpen(title_name);
    return(
        <div className=" px-2 bg-white rounded-md  relative pt-1 cursor-pointer  " >
            <div  onClick={toggleBtn} className="add-btn flex  items-center pl-2 w-full gap-x-2  py-2 relative  ">
               <div className="border border-dashed border-[#7a70ba]  bg-white h-11 p-0.5 w-11 flex items-center justify-center rounded-full">
               <span
                        className={`text-2xl text-orange-600 bg-${isActive ? '[#7a70ba]' : 'gray-300'} relative after:content-[''] after:absolute after:border after:border-dashed after:z-50 after:border-gray-300 after-w-0.5 after:top-[115%] after:left-1/2 h-9 w-9 p-2 flex rounded-full items-center justify-center ${
                            last === 'last' ? 'after:h-0' : 'after:h-14'
                        }`}
                    >
               {/* <span   className={`text-2xl text-orange-600  bg-[#7a70ba] relative  after:content-[''] after:absolute after:border after:border-dashed after:z-50 after:border-gray-300 after-w-0.5 after:top-[115%] after:left-1/2   h-9 w-9 p-2 flex rounded-full  items-center justify-center ${last === 'last' ? 'after:h-0' : 'after:h-14' }`}> */}
                <img src={svgUrl} alt="" />
                </span>
               </div>
               <div className="p-2 flex flex-col">
               <span className="text-md font-medium text-gray-700 capitalize add-btn-ctn mb-0.5"> {title} </span>
               <span className="text-sm font-medium text-gray-500 capitalize add-btn-ctn mb-1"> Add Product Name & details </span>
               </div>
            </div>
        </div>
    )
};
export default AddingBtn;
