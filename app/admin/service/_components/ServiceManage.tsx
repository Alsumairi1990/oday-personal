'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { MdEditSquare, MdOutlineDisplaySettings } from "react-icons/md";
import CardMainElement1 from '../../common/utils/CardMainElement1';
import { Service } from '@prisma/client';
import { getAllServices, getCategoriesWServices, getServices, getServicesWithAnalytics, getServicesWWorks } from '../_serviceActions/ServiceActions';
import { ServiceWCategory } from '../utils/ServiceWCategory';
import { GoPlus } from 'react-icons/go';
import ProjectsTable from '../../projects/_utils/ProjectsTable';
import ServiceTable from '../utils/ServiceTable';
import PaginationTable from '../../projects/_utils/PaginationTable';
import { FiPlus } from 'react-icons/fi';
import LatestOrders from '../../common/utils/LatestOrders';
import ComposedChart1 from '../../common/utils/ComposedChart1';
import SalesOverview from '../../common/utils/SalesOverview';
import CardResult1 from '../../common/utils/CardResult1';
import CardResult2 from '../../common/utils/CardResult2';
import { LuAlertOctagon } from "react-icons/lu";

import CardMainElement2 from '../../common/utils/CardMainElement2';
import { CategoryWithService } from '../utils/CategoryWithService';
import ServiceCategoryPanel1 from '@/app/utils/ServiceCategoryPanel';
import NavMngElement1 from '../utils/NavMngElement1';
import { ServiceWithWorks } from '../utils/ServiceWithWorks';
import ServiceWorksArea from '../utils/ServicesWorksArea';
import { ServicesWWorks } from '../utils/ServicesWWorks';
import { ServiceWithModels } from '../utils/ServiceWithModels';
import { ServiceAnalticsModel } from '../utils/ServiceAanlyticsModel';


// import ServicesPanel from './ServicePanel';

const LocationManage = () => {
   const imagePath2 = '/images/buttonsBg.svg';
   const imagePath1 = '/images/basic11.svg';
   const imagePath3 = '/images/basic12.svg';
   const imagePath4 = '/images/basic13.svg';
   const imagePath5 = '/images/basic14.svg';
   const imagePath6 = '/images/basic10.svg';
   const MainCard1 = '/images/svg/25.svg';
   const MainCard2 = '/images/svg/26.svg';
   const MainCard3 = '/images/svg/27.svg';
   const MainCard4 = '/images/svg/28.svg';
   const [loading, setLoading] = useState<boolean>(false); 
   const [error, setError] = useState<string>(); 
   const [categoryWservices, setCategoryWservices] = useState<CategoryWithService[]>()
   const [servicesWWorks, setServicesWWorks] = useState<ServicesWWorks[]>()
   const [services, setServices] = useState<ServiceAnalticsModel[]>([])

   const [options, setOptions] = useState<ServiceWCategory[]>([]);
   const [searchTerm, setSearchTerm] = useState<string>('');



  const getServiceAnlytics = async () => {
    try {
      setLoading(true);
      const catg = await getServicesWithAnalytics();
      if(catg) setServices(catg);
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      setError(error.message);
    }
  };
   const getAllCatgs = async () => {
    const catgs = await getAllServices();
    setOptions(catgs);
   }
   const unSelected1 = (id:string) => {
}

const getSelected2 = (id:string) => {
}

const getAllCategoriesWServices = async () =>{
    try {
        setLoading(true);
        const catg = await getCategoriesWServices();
       if(catg) setCategoryWservices(catg);
       setLoading(false)
    } catch (error:any) {
        setLoading(false);
        setError(error);
    }
}

const getAllServicesWWorks = async () =>{
    try {
        setLoading(true);
        const catg = await getServicesWWorks();
       if(catg) setServicesWWorks(catg);
       setLoading(false)
    } catch (error:any) {
        setLoading(false);
        setError(error);
    }
}
   useEffect(() =>{
    getAllCatgs();
    getAllServicesWWorks();
    getAllCategoriesWServices();
    getServiceAnlytics();
   },[])
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage, setPostsPerPage] = useState(5);
   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const currentPosts = services.slice(firstPostIndex, lastPostIndex);
  return (
    <div className='w-11.8/12 mx-auto p-2 relative'>
    {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
        {error && <div className="py-3 my-1 flex items-center">
            <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
            <span className="text-red-400 text-md">{error}</span>
            </div>
        } 
   
    <div className="grid grid-cols-2 mb-6 sm:grid-cols-4 gap-8 ">
        <CardMainElement1 title="777" subTitle='Total Services' icon={imagePath1} btnBgColor='bg-green-200' />
        <CardMainElement1 title="1,807" subTitle='Service Orders' icon={imagePath3} btnBgColor='bg-indigo-200'/>
        <CardMainElement1 title="900" subTitle='Deleiverd ' icon={imagePath4} btnBgColor='bg-gray-200'/>
        <CardMainElement1 title="394" subTitle='Canceld service' icon={imagePath5}  btnBgColor='bg-sky-200' />
    </div>
    <div className="grid grid-cols-2 mb-6 sm:grid-cols-4 gap-4 ">
        {categoryWservices && 
          categoryWservices.map(element => 
            <ServiceCategoryPanel1 category={element} />
          )
        }
    </div>
    <div className="py-1 my-10 border border-gray-300 bg-white rounded-md">
       <div className="border-b flex items-center px-3 p-4 border-b-gray-200 my-2 w-full ">
          <div className="bg-gra-100 flex-40 border border-gray-200 rounded-3xl py-1.5 w-full h-10 ">
                <input
                type="text"
                placeholder="Search categories"
                value={searchTerm}
                className='w-full h-full bg-transparent px-3 placeholder:text-sm outline-none'
                onChange={(e) => setSearchTerm(e.target.value)}
                  />   
            </div>
            <div className="flex-60">
                <div 
                    style={{boxShadow:'0 .125rem .375rem 0 rgba(115, 103, 240, .3)'}}
                    className="px-2 ml-auto w-fit flex items-center py-1.5 text-white bg-indigo-500 rounded">
                    <span className="text-md capitalize">Create Order</span>
                    <span><GoPlus className='text-base text-white ml-1'/></span>
                </div>
            </div>
        </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700  uppercase bg-gray-100 ">
                        <tr className="w-full flex">
                            <th scope="col" className="text-center  flex-5 py-3">
                                 
                            </th>
                              <th scope="col" className="text-center  flex-5 py-3">
                                      <div className="inline-flex items-center">
                                    <label className="relative flex items-center  rounded-full cursor-pointer" htmlFor="checkbox">
                                        <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                        id="checkbox"  />
                                        <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                        </svg>
                                        </span>
                                    </label>
                                </div>
                            </th>
                            <th scope="col" className="text-center  flex-10 py-3">
                                 icon
                            </th>
                            <th scope="col" className="text-center flex-15 py-3">
                                name
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                ID
                            </th>
                            <th scope="col" className="text-center flex-15 py-3">
                                Created
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                Works
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                Prices
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                Testimonials
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <ServiceTable categories={currentPosts} searchParam={searchTerm} unSelected={unSelected1} getSelected={getSelected2} />
                    </tbody>
                </table>
               
                <PaginationTable
                    totalPosts={services.length}
                    postsPerPage={postsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    />
                {/* <div className="my-3">
                    <DropDown1  />
                   </div> */}
      </div>

      <div className="grid grid-cols-2 mb-6 sm:grid-cols-4 gap-4 ">
        {servicesWWorks && 
          servicesWWorks.map(element => 
            <ServiceWorksArea service={element} />
          )
        }
    </div>

      <div className="py-8 grid sm:grid-cols-3 gap-4">
        <div className="p-1 rounded-md shadow-md border border-gray-200 sm:col-span-2 bg-white pt-3  ">
            <div className="py-2 mb-10 border-b ">
                <h1 className="text-xl px-3 text-gray-600 font-medium">Order Last week data</h1>
            </div>
            <div className="h-80">
            <ComposedChart1   />
            </div>
        </div>
        <div className="bg-white rounded-md shadow-md border border-gray-200">
           <div className="px-3 py-2 my-2 border-b flex">
            <span className="text-gray-600 text-base  font-semibold capitalize">
                Latest Orders |
            </span>
            <span className="text-green-500 text-sm ml-2">This week</span>
            <span className="ml-auto flex items-center justify-center rounded-full h-6 w-6 border-2 border-white bg-[#666cff]"  style={{boxShadow: '0 0 3px rgba(38, 43, 67, .8)'}}>
            <FiPlus  className="text-white text-md rotate-2"  />
            </span>
           </div>
            <LatestOrders order={{name:'order-1',icon:imagePath2,email:'email-2@gmail.com',status:'success'}} />
            <LatestOrders order={{name:'order-1',icon:imagePath3,email:'email-2@gmail.com',status:'pending'}} />
            <LatestOrders order={{name:'order-1',icon:imagePath4,email:'email-2@gmail.com',status:'canceled'}} />
            <LatestOrders order={{name:'order-1',icon:imagePath5,email:'email-2@gmail.com',status:'paid'}} />
            <LatestOrders order={{name:'order-1',icon:imagePath6,email:'email-2@gmail.com',status:'success'}} />
        </div>
    </div>


    <div className="grid my-8 sm:grid-cols-4 gap-6">
        <div className="col-span-2 bg-white p-4 shadow-md border border-gray-200 rounded-md">
            <SalesOverview   />
        </div>
        <div className=" bg-white p-4 shadow-md border border-gray-200 rounded-md">
            <CardResult1   />
        </div>
        <div className=" bg-white p-4 shadow-md border border-gray-200 rounded-md">
            <CardResult2   />
        </div>

    </div>
    <div className="py-2 px-3 bg-white border border-gray-300/50 my-4 rounded-md">
       <div className="px-2 border-b flex items-center border-b-gray-200 mb-2 py-2.5">
        <span className=""><MdOutlineDisplaySettings className='text-xl mr-2 text-violet-600' /></span>
        <span className="text-base text-gray-600">Easy Access </span>
       </div>
        <div className="grid grid-cols-2 mb-6 sm:grid-cols-4 gap-8 ">
            <NavMngElement1 title="777" subTitle='Total Services' icon={MainCard1} btnBgColor='bg-green-200' />
            <NavMngElement1 title="1,807" subTitle='Service Orders' icon={MainCard2} btnBgColor='bg-indigo-200'/>
            <NavMngElement1 title="900" subTitle='Categories ' icon={MainCard3} btnBgColor='bg-gray-200' link="service/pages/categories" />
            <NavMngElement1 title="394" subTitle='Canceld service' icon={MainCard4}  btnBgColor='bg-sky-200' />
            <NavMngElement1 title="56" subTitle='Total Works' icon={MainCard1} btnBgColor='bg-green-200' link='service/pages/works' />
            <NavMngElement1 title="345" subTitle='Total Projets' icon={MainCard2} btnBgColor='bg-indigo-200'/>
            <NavMngElement1 title="667" subTitle='Service Codes' icon={MainCard3} btnBgColor='bg-gray-200'/>
            <NavMngElement1 title="1234" subTitle='Categories' icon={MainCard4}  btnBgColor='bg-sky-200' />
        </div>
    </div>
    



    
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
                <div className="flex-70 flex flex-col justify-center items-center">
                    <p className="text-white  font-semibold text-base capitalize">Total Services </p>
                    <p className="text-white font-bold text-base">765</p>
                </div>
            </div>
              <Link href="/admin/service/create" className="flex-70 border bg-pink-900 !border-[#9d3861] w-6/12 mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer">
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
                        <div className="flex-70 flex flex-col justify-center items-center">
                            <p className="text-white  font-semibold text-base capitalize"> Displaied</p>
                            <p className="text-white font-bold text-base">456</p>
                        </div>
                    </div>
                    <Link href="/admin/service/display" className="flex-70 w-6/12 border !border-[#9386d5] mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer" style={{background: 'linear-gradient(to top, rgb(100 76 218), rgb(98 74 213) )'}}>
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
                    </Link>

                </div>

                <div className="bg-sky-600 px-2 py-2 rounded-2xl shadow-xl bg-right bg-no-repeat bg-blend-overlay" style={{ backgroundImage: `url(${imagePath2})`}}>
                    <div className="flex border-b mb-2 pt-2 pb-3 border-b-gray-400 ">
                        <div  className="icon flex-30 pt-1 pl-1">
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
                    <Link href="/admin/service/codes/edit"  className="flex-70 w-6/12  bg-sky-700 border !border-[#439ecd] mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1.5 rounded-[20px] cursor-pointer">
                        <div className="flex items-center rounded-2xl py-[2px] px-[5px] " >
                            <span className=" text-gray-50 font-semibold capitalize text-md pr-2.5 pl-1" > Edite </span>
                            <div className="px-1 py-0.5 flex" >
                                <span className=" bg-white h-7 w-7 p-1 rounded-full flex items-center justify-center" data-v-a1c57ce8="">
                                    <MdEditSquare className='text-md text-gray-600'  />
                                </span>
                            </div>
                        </div>
                    </Link>
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
                        <Link href="/admin/service/delete" className="flex items-center rounded-2xl py-[2px]  " >
                            <span className=" text-gray-50 font-semibold capitalize pr-2.5 pl-1" >Delete </span>
                            <div className="px-1 py-0.5 flex" >
                                <span className=" bg-white h-6 w-6 p-1 rounded-full flex items-center justify-center" data-v-a1c57ce8="">
                                    {/* <!-- <svg className="h-full w-full fill-slate-700 " viewBox="0 0 1024 1024"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M512 897.6c-108 0-209.6-42.4-285.6-118.4-76-76-118.4-177.6-118.4-285.6 0-108 42.4-209.6 118.4-285.6 76-76 177.6-118.4 285.6-118.4 108 0 209.6 42.4 285.6 118.4 157.6 157.6 157.6 413.6 0 571.2-76 76-177.6 118.4-285.6 118.4z m0-760c-95.2 0-184.8 36.8-252 104-67.2 67.2-104 156.8-104 252s36.8 184.8 104 252c67.2 67.2 156.8 104 252 104 95.2 0 184.8-36.8 252-104 139.2-139.2 139.2-364.8 0-504-67.2-67.2-156.8-104-252-104z" fill="" /><path d="M707.872 329.392L348.096 689.16l-31.68-31.68 359.776-359.768z" fill="" /><path d="M328 340.8l32-31.2 348 348-32 32z" fill="" /></svg> --> */}
                                  <svg className="h-full w-full fill-slate-700 " viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>
                                  {/* <!-- <svg className="h-full w-full fill-slate-700 "  viewBox="-1.7 0 20.4 20.4" xmlns="http://www.w3.org/2000/svg" ><path d="M16.417 10.283A7.917 7.917 0 1 1 8.5 2.366a7.916 7.916 0 0 1 7.917 7.917zm-6.804.01 3.032-3.033a.792.792 0 0 0-1.12-1.12L8.494 9.173 5.46 6.14a.792.792 0 0 0-1.12 1.12l3.034 3.033-3.033 3.033a.792.792 0 0 0 1.12 1.119l3.032-3.033 3.033 3.033a.792.792 0 0 0 1.12-1.12z"/></svg> --> */}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
    </div>
</div>
  )
};


export default LocationManage;
