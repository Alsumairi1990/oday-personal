"use client";
import React, { useEffect } from 'react';
import { Category, Market} from '@prisma/client';
import { useState } from 'react';
import Link from 'next/link';
import { AbstractIntlMessages } from 'next-intl';
import { CategoryForFront } from '@/app/[locale]/admin/category/util/CategoryForFront';

interface Props {
    market: Market;
  }


const MarketCard = ({market}:Props) => {

  return (
    <div className="w-full ">
    {market && 
         <div className=" w-full flex flex-wrap border border-gray-300 sm:mx-auto items-center bg-white dark:bg-[#111] rounded-t-md">
           <div className="sm:flex-15 max-h-44 flex justify-center overflow-hidden">
           {market.image && <img src={market.image} alt={market.name} />}
           </div>
           <div className="p-2 ltr:pl-4 rtl:pr-5 sm:flex-70 mt-1 sm:border-x sm:border-x-gray-300">
              <div className="w-full mb-2 flex items-center">
                  <span className="text-base  text-black dark:text-orange-500 font-semibold">{market?.name}</span>
                  
                  <div className="ltr:ml-auto rtl:mr-auto">
                    <span className="text-sm text-gray-700">By : </span>
                  </div>
              </div>
              <div className="">
                  <span className="text-sm text-gray-900 dark:text-gray-50 font-medium">{market?.name}</span>
              </div>
              <div className="mt-2.5">
                  <span className="text-sm font-normal line-clamp-3 leading-6">{market?.description}</span>
                
              </div>
           </div>
           <div className="flex flex-100 sm:flex-15 gap-x-2  justify-center  ">
            <Link href={`/admin/market/edit/${market.id}`} className="inline-flex items-center justify-center bg-blue-100 border !border-blue-200 hover:!bg-blue-200 rounded-md py-1 flex-23">
                <svg className="w-4 h-4"  viewBox="0 0 24 24" fill="none">
                    <path className="fill-sky-500" fill-rule="evenodd" clip-rule="evenodd" d="M19.2071 2.79312C17.9882 1.57417 16.0119 1.57417 14.7929 2.79312L5.68463 11.9014C5.30015 12.2859 5.0274 12.7676 4.89552 13.2951L4.02988 16.7577C3.94468 17.0985 4.04453 17.459 4.29291 17.7073C4.54129 17.9557 4.90178 18.0556 5.24256 17.9704L8.70513 17.1047C9.23263 16.9729 9.71437 16.7001 10.0988 16.3156L19.2071 7.20733C20.4261 5.98838 20.4261 4.01207 19.2071 2.79312ZM16.2071 4.20733C16.645 3.76943 17.355 3.76943 17.7929 4.20733C18.2308 4.64524 18.2308 5.35522 17.7929 5.79312L8.68463 14.9014C8.55647 15.0296 8.39589 15.1205 8.22006 15.1644L6.37439 15.6259L6.83581 13.7802C6.87976 13.6044 6.97068 13.4438 7.09884 13.3156L16.2071 4.20733Z"/>
                    <path className="fill-sky-500"   d="M5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H5Z" fill="#777"/>
                    </svg>
            </Link>
            {/* {editShow && <FormEdit name={category.name} closeModel={closeModel}  /> } */}
                <Link href={`/admin/service/show/${market.id}`} className="inline-flex items-center justify-center bg-blue-100 border !border-blue-200 hover:!bg-blue-200 rounded-md py-1 flex-23">
                    <svg className="w-4 h-4 fill-blue-500"  viewBox="0 0 48 48" >
                    <path d="M0 0h48v48H0z" fill="none"/>
                    <g id="Shopicon">
                        <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,14c7.072,0,12.741,6.584,15.201,9.992
                            C36.728,27.396,31.024,34,24,34c-7.072,0-12.741-6.584-15.201-9.992C11.272,20.604,16.976,14,24,14z"/>
                        <path d="M24,32c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S19.582,32,24,32z M24,20c2.206,0,4,1.794,4,4c0,2.206-1.794,4-4,4
                            s-4-1.794-4-4C20,21.794,21.794,20,24,20z"/>
                    </g>
                    </svg>
                </Link>
                <button 
                      type='button'
                    //   onClick={()=>{addSelected(market.id)}}
                      className="inline-flex items-center justify-center bg-red-100 border !border-red-200 hover:!bg-red-200 rounded-md py-1 flex-23">
                        
                        <svg className="w-4 h-4 p-0.5 fill-red-500"  viewBox="0 0 32 32" >
                            <g fill="none" fill-rule="evenodd">
                            <path d="m0 0h32v32h-32z"/>
                            <path className="fill-red-500" d="m31 6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1l-3-.001v18.001c0 3.3137085-2.6862915 6-6 6h-12c-3.3137085 0-6-2.6862915-6-6v-18h-3c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-18 8c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm6 0c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm4.5-13c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-15c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z" />
                            </g>
                            </svg>
                </button>

            </div>
           
          
         
          
         </div>
      }
       
 </div>
  );
};

export default MarketCard;