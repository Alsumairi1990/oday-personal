'use client'
import React from 'react';



import ServicesPanel from './ServicePanel';

const Service = () => {
   const imagePath = '/images/navbg.webp';
   const imagePath2 = '/images/buttonsBg.svg';
   const openDisplay =()=>{
    alert("vrvtrv")
   }
   const openEdit = ()=>{

   }
   const openDelete = ()=>{

   }
  return (
    <div className='w-11.8/12 mx-auto p-2'>
       <div className="grid grid-cols-4 gap-x-8">
         <div className="bg-pink-800 px-2 py-2 rounded-2xl shadow-xl bg-right bg-no-repeat bg-blend-overlay" style={{ backgroundImage: `url(${imagePath2})`}}>
            <div className="flex border-b mb-2 pt-2 pb-3 border-b-gray-400 ">
                
                <div className="icon flex-30 pt-1 pl-1">
                        <span className="h-12 inline-block w-12">
                        
                        <svg className="w-full h-full icon line-color fill-black icon flat-color" width="50px" height="50px" viewBox="0 0 24 24" id="add-file-6" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" >
                        <path id="secondary" className="fill-none stroke-white stroke-1" d="M16,19h4m-2-2v4M8,13h6m0-4H8" ></path>
                        <path id="primary" className="fill-none stroke-white stroke-1" d="M12,21H5a1,1,0,0,1-1-1V4A1,1,0,0,1,5,3h9l4,4v6" ></path></svg>                
                    </span>
                </div>
                <div className="flex-70 flex flex-col justify-center items-center">
                    <p className="text-white  font-semibold text-base capitalize">Total university </p>
                    <p className="text-white font-bold text-base">765</p>
                </div>
            </div>
            <a href="/admin/university-create" className="flex-70 border bg-pink-900 !border-[#9d3861] w-6/12 mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer" >
                <div className="flex items-center  rounded-2xl py-[2px] px-[5px] " >
                    <span className=" text-gray-50 font-semibold text-md capitalize pr-2.5 pl-1" >New</span>
                    <div className="px-1 flex py-0.5 " >
                        <span className="inline-block bg-white rounded-full p-1" >
                            <svg width="18px" height="18px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-a1c57ce8="">
                            <path className="fill-[#340324]" d="M12.75 11.25V5C12.75 4.80109 12.671 4.61032 12.5303 4.46967C12.3897 4.32902 12.1989 4.25 12 4.25C11.8011 4.25 11.6103 4.32902 11.4697 4.46967C11.329 4.61032 11.25 4.80109 11.25 5V11.25H5C4.80109 11.25 4.61032 11.329 4.46967 11.4697C4.32902 11.6103 4.25 11.8011 4.25 12C4.25 12.1989 4.32902 12.3897 4.46967 12.5303C4.61032 12.671 4.80109 12.75 5 12.75H11.25V19C11.2526 19.1981 11.3324 19.3874 11.4725 19.5275C11.6126 19.6676 11.8019 19.7474 12 19.75C12.1989 19.75 12.3897 19.671 12.5303 19.5303C12.671 19.3897 12.75 19.1989 12.75 19V12.75H19C19.1989 12.75 19.3897 12.671 19.5303 12.5303C19.671 12.3897 19.75 12.1989 19.75 12C19.7474 11.8019 19.6676 11.6126 19.5275 11.4725C19.3874 11.3324 19.1981 11.2526 19 11.25H12.75Z" fill="#000000" data-v-a1c57ce8=""></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </a>
        </div>
        <div className="bg-[#7157f1] px-2 py-2 rounded-2xl shadow-xl bg-right bg-no-repeat bg-blend-overlay" style={{ backgroundImage: `url(${imagePath2})`}}>
                    <div className="flex border-b mb-2 pt-2 pb-3 border-b-gray-400 ">
                        <div className="icon flex-30 pt-1 pl-1">
                             <span className="h-12 inline-block w-12">
                               <svg width="35" height="35px" viewBox="0 0 32 32" fill="none" >
                                <g clip-path="url(#clip0_901_1141)">
                                <path d="M12 13H15M12 16H20M12 20H20M12 24H20M21 7V2C21 1.447 20.553 1 20 1H2C1.447 1 1 1.447 1 2V24C1 24 1 25 2 25H3M26 27H30C30.553 27 31 26.553 31 26V4C31 3.447 30.553 3 30 3H24M26 30C26 30.553 25.553 31 25 31H7C6.447 31 6 30.553 6 30V8C6 7.447 6.447 7 7 7H25C25.553 7 26 7.447 26 8V30Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_901_1141">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                           </span>
                        </div>
                        <div className="flex-70 flex flex-col justify-center items-center">
                            <p className="text-white  font-semibold text-base capitalize">Total Displaied</p>
                            <p className="text-white font-bold text-base">456</p>
                        </div>
                    </div>
                    <a onClick={openDisplay} className="flex-70 w-6/12 border !border-[#9386d5] mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer" style={{background: 'linear-gradient(to top, rgb(100 76 218), rgb(98 74 213) )'}}>
                        <div  className="flex items-center rounded-2xl py-[2px] px-[5px] " >
                            <span className=" text-gray-50 font-semibold text-md capitalize pr-2.5 pl-1 text-base" data-v-a1c57ce8=""> Display</span>
                            <div className="px-1 py-0.5 flex" >
                                <span className="inline-block bg-white rounded-full p-1">
                                    <svg width="18px" className="fill-slate-700" height="18px" viewBox="0 0 48 48"  >
                                    <path d="M0 0h48v48H0z" fill="none"/>
                                    <g id="Shopicon">
                                        <circle cx="24" cy="24" r="4"/>
                                        <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8
                                            S19.582,16,24,16z"/>
                                    </g>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </a>

                </div>

                <div className="bg-sky-600 px-2 py-2 rounded-2xl shadow-xl bg-right bg-no-repeat bg-blend-overlay" style={{ backgroundImage: `url(${imagePath2})`}}>
                    <div className="flex border-b mb-2 pt-2 pb-3 border-b-gray-400 ">
                        <div className="icon flex-30 pt-1 pl-1">
                            <span className="h-10 inline-block w-10">
                                <svg width="35px" height="35px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_901_2475)">
                                <path d="M27 16V11C27 11 27 10 26 9L19 2C18 1 17 1 17 1M17 1H2C2 1 1 1 1 2V30C1 30 1 31 2 31H18M17 1V10C17 10 17 11 18 11H23M31 25C31 21.687 28.313 19 25 19C21.687 19 19 21.687 19 25C19 28.313 21.687 31 25 31C28.313 31 31 28.313 31 25ZM27.5 24.5L25.492 22.508L23 25V27H25L27.5 24.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_901_2475">
                                <rect width="32" height="32" fill="white"/>
                                </clipPath>
                                </defs>
                                </svg>
                            </span>
                        </div>
                        <div className="flex-70 flex flex-col justify-center items-center">
                            <p className="text-white font-semibold text-base capitalize">total Edited </p>
                            <p className="text-white font-bold text-base">161</p>
                        </div>
                    </div>
                    <div onClick={openEdit}  className="flex-70 w-6/12  bg-sky-700 border !border-[#439ecd] mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer">
                        <div className="flex items-center rounded-2xl py-[2px] px-[5px] " >
                            <span className=" text-gray-50 font-semibold capitalize text-md pr-2.5 pl-1" > Edite </span>
                            <div className="px-1 py-0.5 flex" >
                                <span className=" bg-white h-7 w-7 p-1 rounded-full flex items-center justify-center" data-v-a1c57ce8="">
                                    <i className="fas fa-pencil-alt text-gray-700"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div> 


                <div className="bg-green-700 px-2 py-2 rounded-2xl shadow-xl bg-right bg-no-repeat bg-blend-overlay" style={{ backgroundImage: `url(${imagePath2})`}}>
                    <div className="flex border-b mb-2 pt-2 pb-3 border-b-gray-400 ">
                        <div className="icon flex-30 pt-1 pl-1">
                            <span className="h-10 inline-block w-10">
                             <svg  className="h-full w-full fill-white" viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M32 241.6c-11.2 0-20-8.8-20-20s8.8-20 20-20l940 1.6c11.2 0 20 8.8 20 20s-8.8 20-20 20L32 241.6zM186.4 282.4c0-11.2 8.8-20 20-20s20 8.8 20 20v688.8l585.6-6.4V289.6c0-11.2 8.8-20 20-20s20 8.8 20 20v716.8l-666.4 7.2V282.4z" fill="" /><path d="M682.4 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM367.2 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM524.8 867.2c-11.2 0-20-8.8-20-20V372c0-11.2 8.8-20 20-20s20 8.8 20 20v475.2c0.8 11.2-8.8 20-20 20zM655.2 213.6v-48.8c0-17.6-14.4-32-32-32H418.4c-18.4 0-32 14.4-32 32.8V208h-40v-42.4c0-40 32.8-72.8 72.8-72.8H624c40 0 72.8 32.8 72.8 72.8v48.8h-41.6z" fill="" /></svg>
                            </span>
                        </div>
                        <div className="flex-70 flex flex-col justify-center items-center">
                            <p className="text-white font-semibold text-base capitalize"> Deleted </p>
                            <p className="text-white font-bold text-base">88</p>
                        </div>
                    </div>
                    <div  className="w-6/12 bg-green-800 border !border-[#41a165] mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer">
                        <div  onClick={openDelete} className="flex items-center rounded-2xl py-[2px]  " >
                            <span className=" text-gray-50 font-semibold capitalize pr-2.5 pl-1" >Delete </span>
                            <div className="px-1 py-0.5 flex" >
                                <span className=" bg-white h-6 w-6 p-1 rounded-full flex items-center justify-center" data-v-a1c57ce8="">
                                    {/* <!-- <svg className="h-full w-full fill-slate-700 " viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z" fill="" /><path d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z" fill="" /><path d="M328 340.8l32-31.2 348 348-32 32z" fill="" /></svg> --> */}
                                  <svg className="h-full w-full fill-slate-700 " viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>
                                  {/* <!-- <svg className="h-full w-full fill-slate-700 "  viewBox="-1.7 0 20.4 20.4" xmlns="http://www.w3.org/2000/svg" ><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"/></svg> --> */}
                                </span>
                            </div>
                        </div>
                    </div>
                </div> 
                


    
    
    </div>

    <div className="my-6 p-4">
        <ServicesPanel />
    </div>
        
        
</div>     
  )
};


export default Service; 


