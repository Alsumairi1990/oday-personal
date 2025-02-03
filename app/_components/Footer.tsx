'use client'
import { Category, Service } from '@prisma/client';
import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import { FaFacebookSquare } from "react-icons/fa";

import Image from 'next/image';
import { FaLinkedin } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";

import { FaSquareXTwitter } from "react-icons/fa6";

interface Props{
   services? : Service[],
   categories? : Category[],
   locale : string,
   messages : AbstractIntlMessages


}
const Footerk = ({services,categories,locale,messages}:Props) => {
   const bg = '/images/fotter-bg.webp';
   const map = '/footer/footer-map.png';

   const servicesNavHeader = (messages as any).Common.servicesNavHeader;
   const categoriesNavHeader = (messages as any).Common.categoriesNavHeader;
   const name = (messages as any).HomePage.ContactUs.name;
   const email = (messages as any).HomePage.ContactUs.email;
   const phonNo = (messages as any).HomePage.ContactUs.phonNo;
   const subscribe = (messages as any).Common.subscribe;    
   const companyOffices = (messages as any).Common.companyOffices;
   const companyOfficeDesc = (messages as any).Common.companyOfficeDesc;





   


  return (
    <div className="rtl:font-arabic">
    {/* <div className="bg-[#1e1e1e] pt-3 " style={{backgroundImage : }}>  */}
    <div className=" sm:pt-8 sm:pb-2 px-3 w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${bg})`}}>
       <div className="w-11.4/12 mx-auto mb-6">
          <div className="p-2 text-center">
             <h2 className="text-md font-bold text-gray-300 uppercase">SUBSCRIBE TO OUR NEWS LETTER </h2>
          </div>
          <div className="border border-gray-700 my-4 sm:px-8 rounded bg-[#2a2a2a]">
             <div className="p-1.5">
                <form action="" className="m-0">
                   <div className="grid grid-cols-2 sm:grid-cols-25/25/40/10">
                      <div className="p-1 ltr:border-r rtl:border-l  border-gray-700">
                        <input type="text" className="border-0 bg-transparent text-sm rtl:font-arabic text-gray-300 py-2" placeholder={name}/>
                        </div>
                      <div className="p-1 ltr:border-r rtl:border-l rtl:pr-2  border-gray-700">
                        <input type="text" className="border-0 bg-transparent text-sm rtl:font-arabic text-gray-300 py-2 pl-2" placeholder={email} />
                      </div>
                      <div className="p-1 ltr:border-r rtl:border-l rtl:pr-2  border-gray-700">
                        <input type="text" className="border-0 bg-transparent text-sm rtl:font-arabic text-gray-300 py-2 pl-2" placeholder={phonNo} />
                      </div>
                      {/* <div className="p-1 border-r border-gray-700">
                         <div className="flex-100 relative max-w-full p-1 search-top">
                            <div className="typ-opt ran-c flex py-[3px] rounded-lg search-otp-rnk items-center">
                               <div className="rnk-btn20 rnk-opt-btn pl-[5px] flex flex-col w-full">
                                  <div id="" className="btn-rk78 flex items-end flex-70">
                                     <div className="actv-slc flex flex-nowrap items-center overflow-x-auto cursor-pointer">
                                        <span className="text-sm font-nav text-gray-400">All Ranks,....</span>
                                     </div>
                                     <span className="ml-auto mr-[15px] text-xs text-gray-500"><i className="fas fa-chevron-down"></i></span>
                                  </div>
                               </div>
                               <div className="cat-opt-menu hidden sm:py-2 sm:pr-0 sm:pl-[0px] w-full max-sm:fixed max-sm:top-0 max-sm:h-screen z-20 absolute top-[4.05rem] text-left left-0 rounded-b-md sm:bg-white bg-[#f5f5f5] h-[20.4rem] border border-gray-400"  id="">
                                  <div className="sm:px-[1rem] sm:py-2 sm:border-y sm:border-y-gray-300">
                                     <div className="flex max-sm:flex-col justify-evenly max-sm:bg-primary-btn max-sm:h-[9.8rem] sm:w-full sm:border sm:border-gray-300 sm:rounded-md bg-cover bg-center bg-blend-color-dodge bg-[#2f607a]" style={{backgroundImage:' url(&quot;http://127.0.0.1/uploads/logos/header.png&quot'}}>
                                        <div className="max-sm:bg-[#000000a1] w-full sm:bg-white flex max-sm:flex-col max-sm:px-[1rem] max-sm:h-full justify-evenly">
                                           <div className="p-2 sm:hidden flex justify-center items-center">
                                              <div className="mr-auto border rounded p-px">
                                                 <svg className="icone w-[20px] h-[20px] fill-white" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M768 903.232l-50.432 56.768L256 512l461.568-448 50.432 56.768L364.928 512z" fill="#fff"></path>
                                                 </svg>
                                              </div>
                                              <div className="flex-100 text-center"><span className="text-base text-white p-2">Ranking System</span></div>
                                           </div>
                                        </div>
                                     </div>
                                     <div className="hidden">
                                        <div className="custom-shape-divider-bottom-1676678415">
                                           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                                              <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" className="shape-fill fill-primary-btn"></path>
                                           </svg>
                                        </div>
                                     </div>
                                     <div className="hidden pl-[1rem]"><span className="text-gray-700 text-base font-bold">Avalibale Ranks </span></div>
                                  </div>
                                  <div className="sm:px-2 px-[1rem] max-sm:mt-[-0.8rem]">
                                     <ul className="max-sm:px-4 grid grid-cols-2 sm:grid-cols-2 py-[1.3rem] max-h-5rem overflow-y-auto max-sm:auto-rows-max max-sm:min-h-[100svh] max-h-[100svh] sm:h-56 gap-y-4 mb-0 bg-white rounded-lg max-sm:border relative z-10">
                                        <li className="px-[.5rem]"><label className="defult-slc pl-0 py-[10px] sm:py-[4px] flex  flex-col items-center rounded-md justify-center border w-full mb-0 cursor-pointer"><input type="radio" name="radio8" className="cursor-pointer" id="rank_default3" value="" /><span className="ch-default absolute h-full w-full sm:h-11.2/12 sm:w-11.75/12 pl-[1rem]"></span><span className="z-30 text-slc">All</span></label></li>
                                        <li className="px-[.5rem]"><label className="container-l py-[10px] sm:py-[4px] flex flex-col items-center rounded-md justify-center border w-full mb-0 relative cursor-pointer"><input type="radio" name="radio8" className="absolute h-0 w-0 opacity-0 cursor-pointer rank-list" id="[object Object]" value="qs" /><span className="ch-mark absolute h-full w-full sm:h-11.2/12 sm:w-11.75/12 bg-[#fff] sm:bg-[#ebebeb] rounded-md"></span><span className="z-30 text-slc font-bold">QS</span></label></li>
                                        <li className="px-[.5rem]"><label className="container-l py-[10px] sm:py-[4px] flex flex-col items-center rounded-md justify-center border w-full mb-0 relative cursor-pointer"><input type="radio" name="radio8" className="absolute h-0 w-0 opacity-0 cursor-pointer rank-list" id="[object Object]" value="us-news" /><span className="ch-mark absolute h-full w-full sm:h-11.2/12 sm:w-11.75/12 bg-[#fff] sm:bg-[#ebebeb] rounded-md"></span><span className="z-30 text-slc font-bold">Us News</span></label></li>
                                        <li className="px-[.5rem]"><label className="container-l py-[10px] sm:py-[4px] flex flex-col items-center rounded-md justify-center border w-full mb-0 relative cursor-pointer"><input type="radio" name="radio8" className="absolute h-0 w-0 opacity-0 cursor-pointer rank-list" id="[object Object]" value="times" /><span className="ch-mark absolute h-full w-full sm:h-11.2/12 sm:w-11.75/12 bg-[#fff] sm:bg-[#ebebeb] rounded-md"></span><span className="z-30 text-slc font-bold">Times Higher</span></label></li>
                                        <li className="px-[.5rem]"><label className="container-l py-[10px] sm:py-[4px] flex flex-col items-center rounded-md justify-center border w-full mb-0 relative cursor-pointer"><input type="radio" name="radio8" className="absolute h-0 w-0 opacity-0 cursor-pointer rank-list" id="[object Object]" value="Shanghai" /><span className="ch-mark absolute h-full w-full sm:h-11.2/12 sm:w-11.75/12 bg-[#fff] sm:bg-[#ebebeb] rounded-md"></span><span className="z-30 text-slc font-bold">Shanghai</span></label></li>
                                     </ul>
                                  </div>
                                  <div className="px-2 max-sm:hidden flex items-center justify-center border-t border-t-gray-300 pt-[5px]"><span className="inline-block px-[12px] py-1 text-white font-bold rounded-lg border bg-primary-btn cursor-pointer">Close</span></div>
                               </div>
                            </div>
                         </div>
                      </div> */}
                      <div className="p-1"><a href="/subscribe" aria-label='subscribe' className="flex items-center bg-fuchsia-600 justify-center h-full rounded text-white rtl:font-arabic text-sm">{subscribe}</a></div>
                   </div>
                </form>
             </div>
          </div>
       </div>
       <div className="flex flex-wrap max-sm:gap-y-6 justify-between w-11.7/12 mx-auto mb-3">
          <div className="flex-48 sm:flex-20">
             <div className="mb-4">
                <p><a href="" className="font-bold text-orange-400 rtl:font-arabic border-b border-b-gray-400 text-sm pb-2 uppercase">{servicesNavHeader}</a></p>
             </div>
             <div className="text-gray-200 text-sm leading-7">
                <ul>
                  {
                     services?.slice(0, 9).map((service)=> (
                        <li>
                           {locale === 'en' ? <Link className='capitalize' href={`/services/${service.name_slug}`}> {service.name} </Link>
                           :<Link className='capitalize font-arabic' href={`/services/${service.name_slug}`}> {service.nameAr} </Link>
                           }
                        </li>

                     ))
                  }
                  
                </ul>
             </div>
          </div>
          <div className="flex-48 sm:flex-20">
             <div className="mb-4">
                <p><a href="" className="font-bold text-orange-400 border-b rtl:font-arabic text-sm border-b-gray-400 pb-2 uppercase">{categoriesNavHeader}</a></p>
             </div>
             <div className="text-gray-200 text-sm leading-7">
                <ul>
                {    
                     categories?.slice(0, 9).map((category)=> (
                        <li>
                           {locale === 'en' ? <Link className='capitalize' href={`/services/${category.slug}`}> {category.name} </Link>
                           :<Link className='capitalize font-arabic' href={`/services/${category.slug}`}> {category.nameAr} </Link>
                           }
                        </li>

                     ))
                  }
                </ul>
             </div>
          </div>
          <div className="max-sm:hidden sm:flex-20">
             <div className="mb-4">
                <p><a href="" className="font-bold text-orange-400 rtl:font-arabic border-b border-b-gray-400 text-sm pb-2 uppercase">{servicesNavHeader}</a></p>
             </div>
             <div className="text-gray-200 text-sm leading-7">
                <ul>
                  {
                     services?.slice(0, 9).map((service)=> (
                        <li>
                           {locale === 'en' ? <Link className='capitalize' href={`/services/${service.name_slug}`}> {service.name} </Link>
                           :<Link className='capitalize font-arabic' href={`/services/${service.name_slug}`}> {service.nameAr} </Link>
                           }
                        </li>

                     ))
                  }
                  
                </ul>
             </div>
          </div>
          <div className="flex-100 relative max-sm:border-t max-sm:border-gray-300 max-sm:pt-5 sm:flex-40">
            <div className="px-2 pt-0 flex flex-col gap-y-1 max-sm:mb-2">
               <span className="text-sm pb-2 boredr-b w-fit rtl:font-bold border-b border-gray-300 mb-1 text-orange-300">{companyOffices}</span>
               {/*<p className="text-gray-300 text-sm mb-1.5 line-clamp-1 ">{companyOfficeDesc}</p>*/}
            </div>
            <div className="absolute top-[70%] right-[20%] sm:top-[65%] sm:right-[22.4%] w-8 h-8">
               <div className="absolute w-2 h-2 bg-gray-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-10"></div>
               <div className="absolute w-5 h-5 border-2 border-gray-50 rounded-full opacity-0 animate-pulsate  transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
            </div>
            <div className="absolute top-[62.5%] right-[32%] sm:top-[56%] sm:right-[34.3%] w-8 h-8">
               <div className="absolute w-2 h-2 bg-gray-50 rounded-full transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 z-10"></div>
               <div className="absolute w-5 h-5 border-2 border-gray-50 rounded-full opacity-0 animate-pulsate  transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2"></div>
            </div>
              {map && <Image className='rounded-md w-full'
                                      src={map}
                                      height={400}
                                      width={600}
                                      alt="map"
                                  />}
          </div>
        
        
       </div>
       <div className="border-t border-t-gray-700 flex h-14 items-center justify-center gap-2">
          <a href="https://www.facebook.com/groups/media.publishers"  aria-label="facebook page" className="">
            <FaFacebookSquare className="text-3xl text-white rounded-3xl" />

          </a>
          <a href="https://www.linkedin.com/pulse/topics/home/?trk=guest_homepage-basic_guest_nav_menu_articles"  aria-label="linedin page">
             <FaSquareXTwitter className="text-3xl text-white rounded-full" />
            </a>
          <a href="https://www.linkedin.com/pulse/topics/home/?trk=guest_homepage-basic_guest_nav_menu_articles"  aria-label="x page">
               
                         <FaYoutubeSquare className="text-3xl text-white rounded-full" />

                   </a>
          <a href="https://www.facebook.com/groups/media.publishers/"   aria-label="youtube channle">
                       <FaLinkedin className="text-3xl text-white rounded-3xl" />

          </a>
       </div>
       <div className="border-t border-t-gray-700">
          <p className="text-gray-400 text-center text-sm py-4">Copywrite@2025 Same Technolgies</p>
       </div>
    </div>
 </div>
  );
};

export default Footerk;