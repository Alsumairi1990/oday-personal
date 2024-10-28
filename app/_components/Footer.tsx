'use client'
import { Category, Service } from '@prisma/client';
import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
interface Props{
   services? : Service[],
   categories? : Category[],
   locale : string,
   messages : AbstractIntlMessages


}
const Footerk = ({services,categories,locale,messages}:Props) => {
   const bg = '/images/fotter-bg.webp';
   const map = '/footer/footer-map.png'
   const servicesNavHeader = (messages as any).Common.servicesNavHeader;
   const categoriesNavHeader = (messages as any).Common.categoriesNavHeader;
   const name = (messages as any).HomePage.ContactUs.name;
   const email = (messages as any).HomePage.ContactUs.email;
   const phonNo = (messages as any).HomePage.ContactUs.phonNo;
   const subscribe = (messages as any).Common.subscribe;



   


  return (
    <div className="">
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
       <div className="grid grid-cols-2 sm:grid-cols-4 w-11.4/12 mx-auto mb-3">
          <div className="">
             <div className="mb-4">
                <p><a href="" className="font-bold text-orange-400 rtl:font-arabic border-b border-b-gray-400 text-sm pb-2 uppercase">{servicesNavHeader}</a></p>
             </div>
             <div className="text-gray-200 text-sm leading-7">
                <ul>
                  {
                     services?.slice(0, 8).map((service)=> (
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
          <div className="">
             <div className="mb-4">
                <p><a href="" className="font-bold text-orange-400 border-b rtl:font-arabic text-sm border-b-gray-400 pb-2 uppercase">{categoriesNavHeader}</a></p>
             </div>
             <div className="text-gray-200 text-sm leading-7">
                <ul>
                {    
                     categories?.slice(0, 8).map((category)=> (
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
          <div className="">
             <div className="mb-4">
                <p><a href="" className="font-bold text-orange-400 rtl:font-arabic border-b border-b-gray-400 text-sm pb-2 uppercase">{servicesNavHeader}</a></p>
             </div>
             <div className="text-gray-200 text-sm leading-7">
                <ul>
                  {
                     services?.slice(0, 8).map((service)=> (
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
        
        
       </div>
       <div className="border-t border-t-gray-700 flex h-14 items-center justify-center gap-2">
          <a href="https://www.facebook.com/groups/media.publishers"  aria-label="facebook page" className="">
             <svg width="35px" height="35px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" fill="#3B5998"></circle>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.315 16.9578C28.6917 16.8331 27.8498 16.74 27.3204 16.74C25.8867 16.74 25.7936 17.3633 25.7936 18.3607V20.1361H29.3774L29.065 23.8137H25.7936V35H21.3063V23.8137H19V20.1361H21.3063V17.8613C21.3063 14.7453 22.7708 13 26.4477 13C27.7252 13 28.6602 13.187 29.8753 13.4363L29.315 16.9578Z" fill="white"></path>
             </svg>
          </a>
          <a href="https://www.linkedin.com/pulse/topics/home/?trk=guest_homepage-basic_guest_nav_menu_articles"  aria-label="linedin page">
             <svg width="35px" height="35px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" fill="#1DA1F2"></circle>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M36 16.3086C35.1177 16.7006 34.1681 16.9646 33.1722 17.0838C34.1889 16.4742 34.9697 15.5095 35.3368 14.36C34.3865 14.9247 33.3314 15.3335 32.2107 15.5551C31.3123 14.5984 30.0316 14 28.6165 14C25.8975 14 23.6928 16.2047 23.6928 18.9237C23.6928 19.3092 23.7368 19.6852 23.8208 20.046C19.7283 19.8412 16.1005 17.8805 13.6719 14.9015C13.2479 15.6287 13.0055 16.4742 13.0055 17.3766C13.0055 19.0845 13.8735 20.5916 15.1958 21.4747C14.3878 21.4491 13.6295 21.2275 12.9647 20.8587V20.9203C12.9647 23.3066 14.663 25.296 16.9141 25.7496C16.5013 25.8616 16.0661 25.9224 15.6174 25.9224C15.2998 25.9224 14.991 25.8912 14.6902 25.8336C15.3166 27.7895 17.1357 29.2134 19.2899 29.2534C17.6052 30.5733 15.4822 31.3612 13.1751 31.3612C12.7767 31.3612 12.3848 31.338 12 31.2916C14.1791 32.6884 16.7669 33.5043 19.5475 33.5043C28.6037 33.5043 33.5562 26.0016 33.5562 19.4956C33.5562 19.282 33.5522 19.0693 33.5418 18.8589C34.5049 18.1629 35.34 17.2958 36 16.3086Z" fill="white"></path>
             </svg>
          </a>
          <a href="https://www.linkedin.com/pulse/topics/home/?trk=guest_homepage-basic_guest_nav_menu_articles"  aria-label="x page">
             <svg width="35px" height="35px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="20" fill="#FF0000"></circle>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M35.3005 16.3781C35.6996 16.7772 35.9872 17.2739 36.1346 17.8187C36.9835 21.2357 36.7873 26.6324 36.1511 30.1813C36.0037 30.7261 35.7161 31.2228 35.317 31.6219C34.9179 32.021 34.4212 32.3086 33.8764 32.456C31.8819 33 23.8544 33 23.8544 33C23.8544 33 15.8269 33 13.8324 32.456C13.2876 32.3086 12.7909 32.021 12.3918 31.6219C11.9927 31.2228 11.7051 30.7261 11.5577 30.1813C10.7038 26.7791 10.9379 21.3791 11.5412 17.8352C11.6886 17.2903 11.9762 16.7936 12.3753 16.3945C12.7744 15.9954 13.2711 15.7079 13.8159 15.5604C15.8104 15.0165 23.8379 15 23.8379 15C23.8379 15 31.8654 15 33.8599 15.544C34.4047 15.6914 34.9014 15.979 35.3005 16.3781ZM27.9423 24L21.283 27.8571V20.1428L27.9423 24Z" fill="white"></path>
             </svg>
          </a>
          <a href="https://www.facebook.com/groups/media.publishers/"   aria-label="youtube channle">
             <svg width="35px" height="35px" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2" y="2" width="28" height="28" rx="14" fill="#1275B1"></rect>
                <path d="M12.6186 9.69215C12.6186 10.6267 11.8085 11.3843 10.8093 11.3843C9.81004 11.3843 9 10.6267 9 9.69215C9 8.7576 9.81004 8 10.8093 8C11.8085 8 12.6186 8.7576 12.6186 9.69215Z" fill="white"></path>
                <path d="M9.24742 12.6281H12.3402V22H9.24742V12.6281Z" fill="white"></path>
                <path d="M17.3196 12.6281H14.2268V22H17.3196C17.3196 22 17.3196 19.0496 17.3196 17.2049C17.3196 16.0976 17.6977 14.9855 19.2062 14.9855C20.911 14.9855 20.9008 16.4345 20.8928 17.5571C20.8824 19.0244 20.9072 20.5219 20.9072 22H24V17.0537C23.9738 13.8954 23.1508 12.4401 20.4433 12.4401C18.8354 12.4401 17.8387 13.1701 17.3196 13.8305V12.6281Z" fill="white"></path>
             </svg>
          </a>
       </div>
       <div className="border-t border-t-gray-700">
          <p className="text-gray-400 text-center text-sm py-4">Copywrite@2024 Same Technolgies</p>
       </div>
    </div>
 </div>
  );
};

export default Footerk;