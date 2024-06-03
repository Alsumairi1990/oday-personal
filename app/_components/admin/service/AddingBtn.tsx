import React from 'react';
import { ReactSVG } from 'react-svg';
// const AddingBtn =(title:any,svgUrl:any)=> {


interface Props {
    title: any;
    svgUrl:any,
    title_name:any,
    changeMenu: (value: string) => void
  }

const AddingBtn =({title,svgUrl,title_name,changeMenu}:Props)=> {
    console.log("----------------------->"+title)
    const toggleBtn =  () => {
         changeMenu(title_name); 
      }
    return(
        <div className=" px-2 bg-white rounded-md border mb-4 relative pt-1 border-gray-300 hover:bg-gray-100 cursor-pointer  border-b-2 border-b-red-700" style={{boxShadow: 'rgb(82 63 104 / 12%) 0px 0px 10px 0px'}}>
            <div  onClick={toggleBtn} className="add-btn flex flex-col items-center w-full  py-2 ">
                <span   className="text-2xl text-orange-600 mb-2.5 bg-[#eee] h-11 w-11 p-1 flex rounded-lg border border-[#ccc] items-center justify-center">
                  <img src={svgUrl} alt="" />
                </span>

                <span className="text-base font-semibold !tex-red-500 capitalize add-btn-ctn mb-2"> {title} </span>
                <span className="inline-flex  justify-center items-center border border-white bg-indigo-600 rounded-full h-8 w-8 ">
                    <svg width="22px" height="22px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                    <g stroke="#ffffff" stroke-linecap="round" stroke-width="2">
                        <path d="M12 19V5"/>
                        <path d="M19 12H5"/>
                    </g>
                    </svg>
                </span>
            </div>
        </div>
    )
};
export default AddingBtn;
