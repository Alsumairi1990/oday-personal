'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import CardElement1 from '../../common/utils/CardElement1';
import LineCh from '../../common/utils/LineCh';
import { CiLogout } from "react-icons/ci";
import LatestOrders from '../../common/utils/LatestOrders';
import { FiPlus } from 'react-icons/fi';
import SalesOverview from '../../common/utils/SalesOverview';
import CardResult1 from '../../common/utils/CardResult1';
import CardResult2 from '../../common/utils/CardResult2';
import SelseCard from '../../common/utils/SalseCard';
import CardCompare1 from '../../common/utils/CardCompare1';
import CardResult3 from '../../common/utils/CardResult3';
import BarCgart1 from '../../common/utils/BarChart1';
import BarChart1 from '../../common/utils/BarChart1';
import BarChart2 from '../../common/utils/BarChart2';
import CardPie from '../../common/utils/CardPie';
import CardElement2 from '../../common/utils/CardElement2';
import ComposedChart1 from '../../common/utils/ComposedChart1';
import DataTable1 from '../../common/utils/DataTable1';
import ProjectsTable from '../_utils/ProjectsTable';
import { Category } from '@prisma/client';
import { getCategories } from '../../service/_serviceActions/ServiceActions';
import { GoPlus } from 'react-icons/go';
import PaginationTable from '../_utils/PaginationTable';
import DropDown1 from '../_utils/DropDown1';


// import ServicesPanel from './ServicePanel';

const ProjectManage = () => {
   const imagePath2 = '/images/basic11.svg';
   const imagePath3 = '/images/basic12.svg';
   const imagePath4 = '/images/basic13.svg';
   const imagePath5 = '/images/basic14.svg';
   const imagePath6 = '/images/basic10.svg';
   const imagePath7 = '/images/CardResult.png';
   const [options, setOptions] = useState<Category[]>([]);
   const [searchTerm, setSearchTerm] = useState<string>('');

   const getAllCatgs = async () => {
    const catgs = await getCategories();
    setOptions(catgs);
   }
   const unSelected1 = (id:string) => {
}

const getSelected2 = (id:string) => {
}

   useEffect(() =>{
    getAllCatgs();
   },[])

   
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(3);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = options.slice(firstPostIndex, lastPostIndex);

  return (
    <>
    
    <div className="mb-3">
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 ">
        <CardElement2 title="Success" subTitle='8987' icon={imagePath2} btnBgColor='bg-green-200' />
        <CardElement2 title="Appending" subTitle='998' icon={imagePath3} btnBgColor='bg-indigo-200'/>
        <CardElement2 title="Unsucceded" subTitle='23' icon={imagePath4} btnBgColor='bg-gray-200'/>
        <CardElement2 title="Approved" subTitle='198' icon={imagePath5}  btnBgColor='bg-sky-200' />
    </div>
    </div>

    <div className="py-1 my-10 border border-gray-200 bg-white rounded-md">
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
                            <th scope="col" className="text-center  flex-20 py-3">
                                 name
                            </th>
                            <th scope="col" className="text-center flex-20 py-3">
                                Color
                            </th>
                            <th scope="col" className="text-center flex-20 py-3">
                                Category
                            </th>
                            <th scope="col" className="text-center flex-20 py-3">
                                Price
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <ProjectsTable categories={currentPosts} searchParam={searchTerm} unSelected={unSelected1} getSelected={getSelected2} />
                    </tbody>
                </table>
                {/* <PaginationTable  /> */}
                <PaginationTable
                    totalPosts={options.length}
                    postsPerPage={postsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    />
                {/* <div className="my-3">
                    <DropDown1  />
                   </div> */}
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
    <div className="grid my-8 sm:grid-cols-4 gap-6">
        <div  className="col-span-2 rounded-md">
         <SelseCard  />
        </div>
        <div className=" bg-white py-4 px-3 shadow-md border border-gray-200 rounded-md">
           <CardCompare1 />
        </div> 
        <div className=" bg-white py-4 px-3 shadow-md border border-gray-200 rounded-md">
           <CardResult3 />
        </div>   
        
    </div>
    <div className="grid my-8 sm:grid-cols-3 gap-6">
        <div className="p-2 pb-0 sm:col-span-2 bg-white py-4 px-3 shadow-md border border-gray-200 rounded-md">
             <div className="p-2 mb-4 border-b flex  border-b-gray-100">
                <h1 className="text-lg text-gray-700 capitalize">
                    Profile Details
                </h1>
                <span className="text-gray-800 text-sm rounded bg-gray-100 px-2 py-1.5 ml-auto">
                    Monthly
                </span>
            </div>
            <div className="h-60">
            <BarChart2  />
            </div>
            <div className="grid grid-cols-4 border-t border-t-gray-300">
                <div className="p-1 pb-3 pt-3 flex flex-col items-center border-r border-r-gray-300">
                    <span className="text-gray-800 font-medium mb-1">123</span>
                    <span className="text-gray-600 text-sm ">Project fininshed</span>
                </div>
                <div className="p-1 pb-3 pt-3 flex flex-col items-center border-r border-r-gray-300">
                    <span className="text-gray-800 font-medium mb-1">76</span>
                    <span className="text-gray-600 text-sm ">Revenue</span>
                </div>
                <div className="p-1 pb-3 pt-3 flex flex-col items-center border-r border-r-gray-300">
                    <span className="text-gray-800 font-medium mb-1">456</span>
                    <span className="text-gray-600 text-sm ">Active Projects</span>
                </div>
                <div className="p-1 pb-3 pt-3 flex flex-col items-center ">
                    <span className="text-gray-800 font-medium mb-1">$9,876</span>
                    <span className="text-gray-600 text-sm ">Totla profit</span>
                </div>
            </div>
           
        </div>
        <div className=" bg-white py-4 px-3 shadow-md border border-gray-200 rounded-md">
           <CardPie />
        </div> 
       
      </div>
      

    
    </>
    
  )
};


export default ProjectManage;
