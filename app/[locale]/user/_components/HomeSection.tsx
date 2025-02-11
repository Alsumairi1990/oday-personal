'use client'
import React from 'react';
import Link from 'next/link'
import { AbstractIntlMessages } from 'next-intl';
import ProjectOverview from './ProjectOverview';
import ServiceOverview from './ServiceOverview';

interface Props {
    slug : String,
    locale : string,
    messages : AbstractIntlMessages
}

const HomeSection = ({locale,messages}:Props) => {
   const imagePath = '/images/navbg.webp';
   const imagePath2 = '/images/buttonsBg.svg';
   const subscribedPackages = (messages as any).Common.subscribedPackages;
   const offers = (messages as any).Common.offers;
   const packages = (messages as any).Common.packages;
   const plans = (messages as any).Common.plans;
   const view = (messages as any).Common.view;
   const details = (messages as any).HomePage.details;
   const subscribedPlans = (messages as any).Common.subscribedPlans;
   const finishedProject = (messages as any).Common.finishedProject;


  return (
    <div className='sm:w-11.8/12 w-full mx-auto p-2 mb-8 mt-2'>
       <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
         <div className="bg-pink-800 px-2 py-2 rounded-2xl shadow-xl bg-right bg-no-repeat bg-blend-overlay" style={{ backgroundImage: `url(${imagePath2})`}}>
            <div className="flex border-b mb-2 pt-2 pb-3 border-b-gray-400 ">
                <div className="icon flex-30 pt-1 pl-1">
                        <span className="h-12 inline-block w-12">
                        <svg className="w-full h-full icon line-color fill-black icon flat-color" width="50px" height="50px" viewBox="0 0 24 24" id="add-file-6" data-name="Line Color" xmlns="http://www.w3.org/2000/svg" >
                        <path id="secondary" className="fill-none stroke-white stroke-1" d="M16,19h4m-2-2v4M8,13h6m0-4H8" ></path>
                        <path id="primary" className="fill-none stroke-white stroke-1" d="M12,21H5a1,1,0,0,1-1-1V4A1,1,0,0,1,5,3h9l4,4v6" ></path></svg>
                    </span>
                </div>
                <div className="flex-70 flex flex-col gap-y-1.5 justify-center items-center">
                    <p className="text-white  font-semibold text-base capitalize">{subscribedPackages}</p>
                    <p className="text-white font-bold text-base">76</p>
                </div>
            </div>
              <Link href="/admin/service/create" className="flex-70 border bg-pink-900 !border-[#9d3861] w-6/12 mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer">
                <div className="flex items-center  rounded-2xl py-[2px] px-[5px] " >
                    <span className=" text-gray-50 font-semibold text-md capitalize pr-2.5 pl-1" >{view} {details}</span>
                </div>
            </Link>
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
                        <div className="flex-70 flex flex-col gap-y-1.5 justify-center items-center">
                            <p className="text-white  font-semibold text-base capitalize"> {subscribedPlans}</p>
                            <p className="text-white font-bold text-base">6</p>
                        </div>
                    </div>
                    <a  className="w-9/12 border !border-[#9386d5] mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer" style={{background: 'linear-gradient(to top, rgb(100 76 218), rgb(98 74 213) )'}}>
                        <div  className="flex items-center rounded-2xl py-[2px] px-[5px] " >
                            <span className=" text-gray-50 font-semibold text-md capitalize pr-2.5 pl-1 text-base" data-v-a1c57ce8="">{view} {details}</span>
                            <div className="px-1 py-0.5 flex" >
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
                        <div className="flex-70 flex flex-col gap-y-1.5 justify-center items-center">
                            <p className="text-white font-semibold text-base capitalize">{finishedProject}</p>
                            <p className="text-white font-bold text-base">11</p>
                        </div>
                    </div>
                    <div   className="flex-70 w-6/12  bg-sky-700 border !border-[#439ecd] mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer">
                        <div className="flex items-center rounded-2xl py-[2px] px-[5px] " >
                            <span className=" text-gray-50 font-semibold capitalize text-md pr-2.5 pl-1" >{view}  {details} </span>
                            
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
                        <div className="flex-70 flex flex-col gap-y-1.5 justify-center items-center">
                            <p className="text-white font-semibold text-base capitalize"> {offers} </p>
                            <p className="text-white font-bold text-base">34</p>
                        </div>
                    </div>
                    <div  className="w-6/12 bg-green-800 border !border-[#41a165] mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer">
                        <div   className="flex items-center rounded-2xl py-[2px]  " >
                            <span className=" text-gray-50 text-md font-semibold capitalize pr-2.5 pl-1" >{view}  {details} </span>
                        </div>
                    </div>
                </div>





    </div>


    <div className=" my-8 ">
        <div className="col-span-2 bg-white p-4 shadow-md border border-gray-200 rounded-md">
            <ProjectOverview slug="d" locale={locale} messages={messages}  />
        </div>
       
    </div>


    <div className="my-8">
        <div className="bg-white p-4 shadow-md border border-gray-200 rounded-md">
          <ServiceOverview slug="d" locale={locale} messages={messages} />
        </div>
        {/* <div className=" bg-white py-4 px-3 shadow-md border border-gray-200 rounded-md">
           <CardCompare1 />
        </div> 
        <div className=" bg-white py-4 px-3 shadow-md border border-gray-200 rounded-md">
           <CardResult3 />
        </div>    */}
        
    </div>



</div>
  )
};


export default HomeSection;
