import React from 'react';
import { MdAddChart } from 'react-icons/md';
import { ReactSVG } from 'react-svg';
// const AddingBtn =(title:any,svgUrl:any)=> {


interface Props {
    title: any;
    svgUrl:any,
    title_name:any,
    last?:string,
    changeMenu: (value: string) => void
  }

const AddingBtn =({title,svgUrl,title_name,changeMenu,last}:Props)=> {
    const toggleBtn =  () => {
        

         changeMenu(title_name); 
      }
    return(
        <div className=" px-2 bg-white rounded-md  relative pt-1 cursor-pointer  " >
            <div  onClick={toggleBtn} className="add-btn flex  items-center pl-2 w-full gap-x-2  py-2 relative  ">
               <div className="border border-dashed border-[#7a70ba]  bg-white h-11 p-0.5 w-11 flex items-center justify-center rounded-full">
               <span   className={`text-2xl text-orange-600  bg-[#7a70ba] relative  after:content-[''] after:absolute after:border after:border-dashed after:z-50 after:border-gray-300 after-w-0.5 after:top-[115%] after:left-1/2   h-9 w-9 p-2 flex rounded-full  items-center justify-center ${last === 'last' ? 'after:h-0' : 'after:h-14' }`}>
                {/* <MdAddChart className='text-gray-100 text-3xl' /> */}
                <img src={svgUrl} alt="" />
                </span>
               </div>
               
               
               <div className="p-2 flex flex-col">
               <span className="text-md font-medium text-gray-700 capitalize add-btn-ctn mb-0.5"> {title} </span>
               <span className="text-sm font-medium text-gray-500 capitalize add-btn-ctn mb-1"> Add Product Name & details </span>
               </div>

                {/* <span className="inline-flex  justify-center items-center border border-white bg-indigo-600 rounded-full h-8 w-8 ">
                    <svg width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <g stroke="#ffffff" stroke-linecap="round" stroke-width="2">
                        <path d="M12 19V5"/>
                        <path d="M19 12H5"/>
                    </g>
                    </svg>
                </span> */}
            </div>
        </div>
    )
};
export default AddingBtn;
