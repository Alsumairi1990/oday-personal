'use client'
import Link from 'next/link'
import React, { useRef } from 'react'
import {useEffect} from 'react';
import ThemeToggle from './_components/theme-toggle'
// import LocaleSwitcher from './_components/LangToggle'
import FrontTopNav from './[locale]/admin/front-settings/nav/FronTopNav';
import { MenuWithAllModels } from './[locale]/admin/setting/left-nav/_utils/MenuWithAllModels';
import SigninButton from './_components/SigninButton';
import { AbstractIntlMessages } from 'next-intl';
import { TbGridDots } from 'react-icons/tb';
import { FaAppStore, FaUserTie } from 'react-icons/fa';
import { CompanyMenu, Explore } from '@prisma/client';
import ExplorePanel from './_components/explore/ExplorePanel';
import Image from 'next/image';
import { IoIosArrowBack } from 'react-icons/io';
// import { BsColumnsGap } from 'react-icons/bs';

interface Props{
  menusData: Record<number, MenuWithAllModels[]>,
  explores? : Explore[],
  companyMenu? : CompanyMenu[],
  locale : string,
  messages : AbstractIntlMessages,
}

const NavBar = ({menusData,explores,companyMenu,locale,messages}:Props) => {
  const imagePath = '/images/logo-01.svg';
  const logo ='/images/logoSamDark.png';
  const eploreImage = '/images/col1min.png';
  const logoSamL = '/images/logoSamL.png';

  const logoRef1 = useRef<HTMLImageElement | null>(null); 
  const logoRef2 = useRef<HTMLImageElement | null>(null); 
  const welcome = (messages as any).Common.welcome;
  const welcomeDesc = (messages as any).Common.welcomeDesc;  
  const findServices = (messages as any).Common.findServices;  
  const findProducts = (messages as any).Common.findProducts;  
  const exploreSame = (messages as any).Common.exploreSame;  
  const packages = (messages as any).Common.packages;  
  const products = (messages as any).Common.products;  
  const discussProject = (messages as any).Common.discussProject;  
  const plans = (messages as any).Common.plans;  
  const sam = (messages as any).Common.sam;  
  const creative = (messages as any).Common.creative;  
  const techs = (messages as any).Common.techs;  
  const explore = (messages as any).Common.explore;  
  const exploreSub = (messages as any).Common.exploreSub;  
  const about = (messages as any).Common.about;  
  const signIn = (messages as any).Common.signIn;
  const register = (messages as any).Common.register;
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const themeSwitcher = document.querySelector('.top-nav');
    const htmlElement = document.documentElement;
    const isDarkTheme = () => htmlElement.classList.contains('dark');
    // const observer = new IntersectionObserver(
    //   ([entry]) => {
    //     if (isDarkTheme()) return;
    //     const isVisible = entry.isIntersecting; 
    //     if (!isVisible) {
    //       themeSwitcher?.classList.add('nav-top-l');
    //       if (logoRef1.current) {
    //         logoRef1.current.src = logoSamL;
    //       }
    //       if (logoRef2.current) {
    //         logoRef2.current.src = logoSamL; 
    //       }
    //     } else {
    //       themeSwitcher?.classList.remove('nav-top-l');
    //       if (logoRef1.current) {
    //         logoRef1.current.src = logo;
    //       }
    //       if (logoRef2.current) {
    //         logoRef2.current.src = logo; 
    //       }
    //     }
    //   },
    //   {
    //     threshold: 0, 
    //   }
    // );
  
    // const heroSection = document.querySelector('.hero-section');
    // if (heroSection) {
    //   observer.observe(heroSection);
    // }
  
    const handleClickOutside = (event: any) => {
      
      const menus = document.getElementsByClassName('log-menu');
      const exploreMenu = document.getElementById('exploreMenu');
      const profileMenu = document.querySelector('.profile-menu')

      if (event.target.closest('.menu-btn ') !== null) {

        const prnt = event.target.closest('.menu-pr');
        const menu = prnt?.querySelector('.log-menu');
        if (menu && menu.classList.contains('hidden')) {
          for (let i = 0; i < menus.length; i++) {
            menus[i].classList.add('hidden');
          }
          menu.classList.remove('hidden');
        } else if (menu && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
        }
      } else if (event.target.closest('.login-menu ') !== null) {
        return;
      } else if (event.target.closest('.explore-menu ') !== null) {
        return;}
        
      else if (event.target.closest('.main-menu-btn') !== null) {

        const mainPrnt = event.target.closest('.main-nav');
        const menu = mainPrnt?.querySelector('.main-drop-menu');
        if (menu?.classList.contains('hidden')) {
          menu.classList.remove('hidden');
          document.body.style.overflow = 'hidden'; // Disable scroll
        } else if (menu && !menu.classList.contains('hidden')) {
          document.body.style.overflow = '';
          menu.classList.add('hidden');
        }
      } 
      else if (event.target.closest('.explore-btn') !== null) {
        const mainPrnt = event.target.closest('.main-nav');
        const menu = mainPrnt?.querySelector('.explore-menu');
         if (menu?.classList.contains('hidden')) {
          menu.classList.remove('hidden');
        } else if (menu && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
        }
      } 
      else if (event.target.closest('.prof-btn') !== null) {
        const mainPrnt = event.target.closest('.main-nav');
        const menu = mainPrnt?.querySelector('.profile-menu');
         if (menu?.classList.contains('hidden')) {
          menu.classList.remove('hidden');
        } else if (menu && !menu.classList.contains('hidden')) {
          menu.classList.add('hidden');
        }
       
      } 

      
       else {
        for (let i = 0; i < menus.length; i++) {
          const menu = menus[i];
          menu.classList.add('hidden');
        }
        {exploreMenu && exploreMenu.classList.add('hidden')}
        {profileMenu && profileMenu.classList.add('hidden')}

        
        
      }
    };
  
    document.addEventListener('click', handleClickOutside);
  
    return () => {
      // if (heroSection) {
      //   observer.unobserve(heroSection);
      // }
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  
  return (
    <nav 
    className={`top-nav flex main-nav fixed max-sm:flex-col rtl:font-arabic sm:h-[75px] h-[64px] top-0 dark:max-sm:border-b dark:max-sm:border-b-gray-700   w-full pt-2 sm:p-2 z-50 items-center justify-between font-bold  `}
    >
        <div className="flex sm:hidden items-center pl-1 w-full">
        <div className='main-menu-btn flex-10 flex items-center pl-1 rtl:pr-1'>
           <span className="w-8 inline-block fill-gray-200 ml-1">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path d="M89.006 490.013h845.978v62.269h-845.978v-62.269zM89.006 226.835h845.978v62.269h-845.978v-62.269zM89.006 753.181h845.978v62.259h-845.978v-62.259z"></path></svg>
            </span>    
        </div>
        <div className="flex-10">
              <div className=" px-1 cursor-pointer">
                <div className="flex items-center border them-switcher  border-gray-600 px-1 py-1 bg-[#00000059] rounded-full text-gray-50 pointer relative">
                  <ThemeToggle />
                </div>
              </div>
            </div>
        <div className=" flex-60 flex justify-center">
            <Link href="/" className={` text-2xl sm:text-xl flex items-center pl-1 sm:pl-4 pr-2  font-bold`} > 
            <span className='w-12 sm:w-[2.7rem] mr-1.5 inline-block'>
            {locale === 'en' ? <img className='w-full max-w-full p-0 light-logo' src={imagePath} ref={logoRef2}  alt="" />
             :<img className='w-full max-w-full  light-logo' src={logo} ref={logoRef2}  alt="" />
               }
            </span>
              </Link>  
        </div>
        <div className="px-2 flex-10">
              <div className=" pr-0.5 cursor-pointer">
                <div className="flex items-center locl-toggle border border-gray-600 px-1 sm:px-1.5 py-1 sm:py-1.5 bg-[#00000059] rounded-full pointer relative">
                  {/* <LocaleSwitcher /> */}
                </div>
              </div>
            </div>
        <div className='sm:hidden flex-10 flex items-center pr-2 ml-auto'>
          <span className="w-9 inline-block mr-1 fill-white">
              <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.023 17.292c.85-.63 1.776-1.129 2.778-1.494A9.264 9.264 0 0 1 12 15.25c1.13 0 2.197.183 3.199.548 1.002.365 1.928.864 2.778 1.494a7.882 7.882 0 0 0 1.478-2.373A7.714 7.714 0 0 0 20 12c0-2.217-.78-4.104-2.337-5.663C16.104 4.78 14.217 4 12 4s-4.104.78-5.663 2.337C4.78 7.896 4 9.783 4 12c0 1.047.182 2.02.545 2.92.364.898.856 1.689 1.478 2.372ZM12 12.75c-.913 0-1.683-.313-2.31-.94s-.94-1.397-.94-2.31.313-1.683.94-2.31 1.397-.94 2.31-.94 1.683.313 2.31.94.94 1.397.94 2.31-.313 1.683-.94 2.31-1.397.94-2.31.94Zm0 8.75a9.31 9.31 0 0 1-3.713-.744 9.54 9.54 0 0 1-3.016-2.027 9.54 9.54 0 0 1-2.027-3.016A9.31 9.31 0 0 1 2.5 12c0-1.32.248-2.557.744-3.713a9.54 9.54 0 0 1 2.027-3.016 9.54 9.54 0 0 1 3.016-2.027A9.31 9.31 0 0 1 12 2.5a9.31 9.31 0 0 1 3.713.744 9.54 9.54 0 0 1 3.016 2.027 9.54 9.54 0 0 1 2.027 3.016A9.31 9.31 0 0 1 21.5 12a9.31 9.31 0 0 1-.744 3.713 9.54 9.54 0 0 1-2.027 3.016 9.54 9.54 0 0 1-3.016 2.027A9.31 9.31 0 0 1 12 21.5Zm0-1.5c.902 0 1.773-.145 2.61-.436a7.405 7.405 0 0 0 2.232-1.218 7.607 7.607 0 0 0-2.203-1.175A8.081 8.081 0 0 0 12 16.75a8.21 8.21 0 0 0-2.644.416 7.251 7.251 0 0 0-2.198 1.18c.65.522 1.394.928 2.231 1.218.838.29 1.708.436 2.611.436Zm0-8.75c.497 0 .913-.167 1.248-.502.335-.335.502-.75.502-1.248 0-.497-.167-.913-.502-1.248-.335-.335-.75-.502-1.248-.502s-.914.167-1.248.502c-.335.335-.502.75-.502 1.248 0 .497.167.913.502 1.248.334.335.75.502 1.248.502Z" fill="#eee"></path></svg> 
          </span>
          
        </div>
        </div>
       
         <div className="p-2 max-sm:hidden text-[#333]">
            <div className='mr-1.5 inline-block'>
            {locale === 'en' ? 
              <div className='flex items-center' >
                <div className="sm:w-12">
                  <img className='w-full max-w-full p-0 light-logo' src={logo} ref={logoRef2}  alt="" />
                </div>
                <div className="flex logText text-gray-300 uppercase text-bxs pt-3.5 leading-4  flex-col">
                  <span className=" ">
                    Creative 
                  </span>
                  <span className="">
                    Technolgies 
                  </span>
                </div>
              </div>
             : 
             <>
             <div className='flex items-center ' >
             <div className="sm:w-12">
               <img className='w-full max-w-full p-0 light-logo' src={logo} ref={logoRef2}  alt="" />
             </div>
             <div className="flex uppercase logText text-[#c8c8c8] leading-4 pt-[12px] font-bold text-[12px] rtl:ml-4 flex-col">
               <span className="pb-1">
                 {sam} 
               </span>
               <span className=" ">
               {techs}  {creative} 
               </span>
             </div>
             <div className="flex cursor-pointer max-sm:hidden explore-btn text-gray-300 items-center">
                <span className="inline-block h-5 rtl:ml-1 w-0.5 pt-4 bg-gray-500"></span>
                <TbGridDots className=' hover:text-orange-400' />
                <span className="text-bxs rtl:mr-1">{explore}</span>
             </div>
            
              </div>
           
            </>
               } 

            <div id="exploreMenu" className="absolute explore-menu hidden  top-[4.78rem] z-10 w-9/12 ltr:right-6 rtl:right-9 bg-white border border-gray-300 dark:border-gray-800 dark:bg-[#111]   pb-4 flex-col  rounded-xl" style={{filter: 'drop-shadow(0px 0px 18px rgba(0,0,0,0.08))'}}>
                 <p className="text-md text-gray-600 dark:text-gray-200 px-3 sm:px-10 py-3 border-b border-gray-200 dark:border-gray-700">{explore} {sam}</p>
                 <div className="flex ">
                  <div className="flex-65 sm:ltr:pl-5 sm:rtl:pr-5 py-4">
                    {explores && 
                    <ExplorePanel explores={explores} locale={locale} messages={messages} />
                   } 
                  </div>
                  <div className="flex-35 p-4 sm:rtl:pr-10">
                     <div className="bg-orange-100 pt-5  flex-col justify-center h-full rounded-md">
                      <div className="w-7/12 mx-auto flex-60 h-52">
                          {eploreImage && <Image className=' w-full h-full rounded-md '
                                        src={eploreImage}
                                        height={400}
                                        width={400}
                                        alt="eplore"
                                    />}
                        </div>
                        <div className="text-lg font-semibold leading-8 flex-40 py-4 px-5 text-gray-800">
                          <p className="text-center">{exploreSub}</p>
                        </div>
                     </div>
                  </div> 
                  </div>
             </div>

             
            </div>
            
              
        </div> 



       
        <div className={`main-drop-menu text-sm max-sm:mt-[1px] max-sm:w-9/12 max-sm:h-lvh sm:flex-80   max-sm:bg-gray-100 max-sm:overflow-y-auto hidden max-sm:text-gray-600 max-sm:absolute max-sm:left-0 max-sm:top-16 font-semibold sm:flex sm:items-center sm:text-base  `} > 
          <div className="w-full h-full sm:hidden fixed left-0 top-16 bg-[#0000005c] z-20"></div>
           <div className=" px-4 py-4 flex flex-col max-sm:bg-[#060606fc] relative z-50 sm:hidden">
            <div className="flex pt-3">
                <div className="flex-15">
                    <span className="flex w-10 ">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="100%" height="100%" viewBox="0 0 800 800" enable-background="new 0 0 800 800" >
                          <circle fill="#f9f9f9" stroke="#ddd" stroke-width="14" stroke-miterlimit="10" cx="401.486" cy="403.474" r="385.666"/>
                          <path fill="#dbd7d7" d="M615.836,603.92c-0.537-6.221-2.008-12.369-4.213-18.314c-12.099-32.615-47.855-60.487-96.58-77.602
                            c-15.717-5.581-32.862-9.936-50.932-13.056l-5.847-34.064h-0.033v-0.065c11.829-11.498,22.926-27.871,35.893-51.798
                            c2.071,0.933,4.344,1.736,6.684,1.071c8.955-2.676,13.032-14.844,15.504-22.126l0.27-0.804c1.804-5.476,3.54-11.56,5.279-19.249
                            c0.4-1.534,0.87-3.204,1.337-5.078c1.671-6.286,3.608-13.505,2.807-19.718c-0.802-6.416-4.076-11.696-8.754-14.366
                            c-2.609-1.411-5.415-2.01-8.289-1.809c2.138-8.29,5.347-23.929,5.079-42.244c-0.133-12.427-1.871-24.059-5.212-34.751
                            c-6.884-22.062-19.786-18.047-19.786-18.047c-1.27-2.879-0.533-19.517-19.448-34.358c-0.065-0.131-0.136-0.197-0.268-0.197
                            c-8.221-6.553-20.185-12.564-37.63-17.048c-0.936-0.26-1.869-0.463-2.871-0.731c-6.886-1.807-15.241-3.61-23.796-4.412
                            c-0.735-0.063-1.47-0.13-2.342-0.063c-4.609-0.537-9.421-1.006-14.57-1.338c-69.375-4.681-80.403-19.452-80.403-19.452
                            s2.672,15.972,11.494,37.694c-28.939-0.869-38.565-10.026-39.634-11.089c1.002,2.337,9.959,21.252,26.133,41.773
                            c-15.306,10.829-20.651,22.257-21.99,25.665c-0.132,0.399-0.198,0.73-0.266,0.869c0.134-0.139,0.4-0.269,1.068-0.536h0.069
                            c1.402-0.666,4.343-1.403,10.627-2.207c-0.669,1.874-1.272,3.813-1.805,5.75c-0.067,0.194-0.134,0.398-0.134,0.666
                            c-2.808,9.824-4.278,20.456-4.412,31.813c-0.2,18.38,3.009,33.954,5.08,42.244c-2.873-0.268-5.612,0.397-8.22,1.809
                            c-4.745,2.669-7.953,7.883-8.755,14.3c-0.803,6.278,1.069,13.497,2.807,19.848c0.469,1.809,0.935,3.545,1.27,5.079
                            c1.805,7.623,3.475,13.707,5.347,19.183l0.267,0.869c2.405,7.218,6.55,19.386,15.438,22.062c2.34,0.665,4.681-0.139,6.751-1.071
                            c12.967,23.927,23.995,40.3,35.825,51.863v0.197l-5.813,33.867c-18.059,3.12-35.15,7.475-50.866,13.056
                            c-48.792,17.114-84.548,44.986-96.579,77.602c-2.541,6.683-4.012,13.635-4.413,20.717v0.065c-0.133,1.206-0.133,2.473-0.2,3.681
                            v42.577h429.299c0-7.825,0.066-15.111,0.066-22.063v-20.514C616.169,608.056,616.103,605.988,615.836,603.92z"/>
                          </svg>
                    </span>
                </div>
                <div className="flex-85 ltr:pl-3 rtl:pr-3">
                    <div className="">
                    <span className="text-sm font-semibold text-gray-100 dark:text-gray-100">{welcome}</span>
                    </div>
                    <div className="pt-1 px-2">
                    <span className="text-[13px] text-gray-100 dark:text-gray-100">{welcomeDesc}</span>
                    </div>
                </div>
            </div>
           

            <div className="px-4 py-3 max-sm:hidden">
              <div className="flex items-center  rounded py-2 px-2 bg-white border border-[#f7b065] dark:border-violet-600">
                <span className="pl-1 text-sm text-gray-500  capitalize">{discussProject}</span>
                <span className="ml-auto">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.295 15.833h1.03l7.717-7.716-1.03-1.03-7.717 7.716v1.03Zm11.42-8.62-2.813-2.787 1.095-1.094c.24-.24.534-.36.884-.36s.646.12.885.36l1.03 1.03c.24.24.364.53.372.872.009.342-.107.633-.346.872l-1.107 1.107Zm-11.917 9.87a.73.73 0 0 1-.538-.215.73.73 0 0 1-.215-.538v-1.745c0-.1.018-.196.054-.287a.755.755 0 0 1 .172-.253l8.727-8.728 2.813 2.813-8.728 8.727a.754.754 0 0 1-.253.172.766.766 0 0 1-.287.054H3.798Z" fill="#1C1B1F"></path>
                  </svg>
                </span>
              </div>
            </div>

            <div className="px-1 pt-2 pb-2 ">
              <div className="flex items-center justify-center rounded py-1.5 px-1 bg-orange-500">
               <div className="flex text-bxs">

                <Link className="text-white ltr:border-r rtl:border-l border-gray-300 rtl:pl-2 ltr:pr-2" href={`/auth/signin`}>  
                  {signIn}
                </Link>
               <Link className="text-white px-2" href={`/auth/signup`}> 
                  {register}
                </Link>

              </div>
              </div>
            </div>
          </div> 

          <div className='max-sm:h-full max-sm:relative max-sm:z-50 w-full mx-auto max-sm:bg-white sm:px-4 max-sm:border max-sm:border-gray-200 sm:flex sm:items-center'>
                <div className="w-full flex ltr:justify-end ">
                  <FrontTopNav  menusData ={menusData} locale={locale} messages={messages} />
                  </div>
              <div className="flex w-24 cursor-pointer max-sm:hidden prof-btn pb-1 text-gray-300 items-center">
                {/* <span className="inline-block h-5 rtl:ml-1 w-0.5 pt-4 bg-gray-500"></span> */}
                <FaAppStore className=' hover:text-orange-400 text-bxs' />


                <span className="text-bxs rtl:mr-1.5 ">{about} {sam}</span>
             </div>
              

            <div className="profile-menu text-white hidden border border-gray-300 absolute top-[4.8rem] w-8/12 bg-white rounded-lg  rtl:left-[10%] ">
              <div className="flex p-4">
                <div className="flex-25 rounded-lg p-5 bg-orange-100">
                    {eploreImage && <Image className=' w-full h-full rounded-md '
                                        src={eploreImage}
                                        height={400}
                                        width={400}
                                        alt="eplore"
                                    />}
                </div>
              
               <div className="flex-75 grid grid-cols-3 gap-x-7 gap-y-6 p-5 ">
               {companyMenu && companyMenu.length > 0 && companyMenu.map((element) => (
               locale === 'en' ? <Link href={element.url} className="p-2 border border-gray-200 rounded-md"><span className="text-gray-700 text-sm">{element.name}</span></Link>
               :  <Link href={`${locale}/${element.url}`} className="p-2 py-2.5 bg-gray-50 border border-gray-200 flex items-center rounded-lg">
                   <span className="text-gray-900 text-sm font-medium">{element.nameAr}</span>
                   <IoIosArrowBack className="text-base rtl:mr-auto text-gray-600 ltr:rotate-180" />               
                  </Link>
                ))}
               </div>
              </div>
            </div>

            <div className="py-1 px-2 flex ">
            <div className="">
              <div className="pl-3 pr-0.5 cursor-pointer">
                <div className="flex them-switcher  items-center border border-gray-600 px-1.5 py-1.5 bg-[#00000059] rounded-full text-gray-50 pointer relative">
                  <ThemeToggle />
                </div>
              </div>
            </div>

            <div className="px-2">
              <div className=" pr-0.5 cursor-pointer">
                <div className="flex locl-toggle  items-center border border-gray-600 px-1.5 py-1.5 bg-[#00000059] rounded-full pointer relative">
                  {/* <LocaleSwitcher /> */}
                </div>
              </div>
            </div>


            

                  



              <div className="menu-pr ">
                  <div className=" rounded-md  text-white" >
                       <div  className="avatar menu-btn flex items-center  border border-gray-600 dark:border-[#71247c] bg-[#00000059] dark:hover:!bg-fuchsia-500 px-1.5 py-1.5 rounded-3xl cursor-pointer relative" >
                          <span className="icon mr-2 icon-profile">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 17.625a.728.728 0 0 1-.75-.75c0-.2.071-.375.213-.525A.706.706 0 0 1 4 16.125h16a.71.71 0 0 1 .538.225c.141.15.212.325.212.525 0 .217-.07.396-.212.538a.731.731 0 0 1-.538.212H4Zm0-4.875a.726.726 0 0 1-.75-.75.728.728 0 0 1 .75-.75h16c.217 0 .396.07.538.212a.731.731 0 0 1 .212.538.728.728 0 0 1-.75.75H4Zm0-4.875a.706.706 0 0 1-.537-.225.74.74 0 0 1-.213-.525.726.726 0 0 1 .75-.75h16a.728.728 0 0 1 .75.75c0 .2-.07.375-.212.525a.71.71 0 0 1-.538.225H4Z" ></path>
                              </svg>
                          </span>
                          <span className=" ">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="12" cy="12" r="11.5" fill="#Fafafa" stroke="#ccc"></circle>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="m12.221 4.5-.084 2.118-.084.105c-.308-.356-1.08-1.087-1.08-1.087l.328 1.067-.132-.088.036.244c-.78-.536-1.879-.296-1.879-.296-.448-.536-.851-.724-.851-.724.203.268.443.864.443.864-.82.424-1.275 1.195-1.275 1.195.116-.064 1.107-.172 1.107-.172-.14.064-.731.76-.731.76a1.81 1.81 0 0 0-.94.272l.68-.04c-.584.332-.728 1.003-.728 1.003-.156 1.056.32 1.444.32 1.444l.116-.636.144.348v1.407c.107 1.195.294 1.693.4 1.888a1.7 1.7 0 0 0-.024.278c-.352-.085-.466.116-.466.116-.212.38-.008.764-.008.764.104.18.763.727.763.727.04.812.944 1.68.944 1.68.096.08.472.355.472.355.066.092.141.178.222.26v.001h.001c.038.038.077.075.117.111h-.002l.004.002.002.001c.022.039.274.453 1.036.657.224.103.379.155.379.155h-.004c.092.028.232.004.232.004v-.009l.002.001.004.004s.851-.04 2.634-1.743c0 0 .712-.64.832-1.375 0 0 .407.052.535-.088 0 0 .508-.208.48-.827l-.1-.612s-.084-.271-.545-.32c.21-.457.36-.942.44-1.439l.002.001.067-.15.005.005.599-1.367.52-1.175-.005-.002.013-.03 2.34-1.207-7.28-4.45Z" className='fill-orange-500 dark:fill-[#d946ef]' fill="#d946ef"></path>
                              </svg>
                          </span>
                        </div>
                  </div>


            <div id="log-menu" className=" log-menu parent-log-menu hidden w-full fixed h-full top-0 z-[18] bg-black left-0 menu-overlay " style={{background:'#00000052'}}>
              <div className="absolute login-menu top-[4.78rem] z-10 ltr:right-6 rtl:left-6 bg-white border border-gray-600 dark:border-gray-800 dark:bg-black-100  w-80  pb-4 flex flex-col  rounded-xl" style={{filter: 'drop-shadow(0px 0px 18px rgba(0,0,0,0.08))'}}>
                  <span className="absolute inline-block w-4 h-4 bg-[#ffebce] dark:bg-violet-600 top-[-.5rem] ltr:sm:right-8 rtl:sm:left-8 sm:mr-4 sm:rotate-45"></span>

                  <div className="pb-2 rounded-tl-xl  h-[31rem] overflow-y-auto">
                      <div className="flex flex-col">
                        <div className="flex flex-col  pt-4 rounded-t-xl bg-[#ffebce] dark:bg-violet-600">
                              <div className=" px-4 flex">
                                <div className="flex-15 flex  justify-center ">
                                    <span className="flex justify-center w-10 h-10  bg-gray-200 rounded-full items-center">
                                    <FaUserTie className='text-gray-400 text-xl'  />
                                    </span>
                                </div>
                                <div className="flex-85 ltr:pl-3 rtl:pr-3">
                                    <div className="">
                                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-100">{welcome}</span>
                                    </div>
                                    <div className="pt-1 px-2">
                                    <span className="text-[13px] text-gray-600 dark:text-gray-100">{welcomeDesc}</span>
                                    </div>
                                </div>
                              </div>
                              <div className="px-4 py-3">
                                <div className="flex items-center  rounded py-2 px-2 bg-white border border-[#f7b065] dark:border-violet-600">
                                  <span className="ltr:pl-1 rtl:pr-1.5 text-sm text-gray-500  capitalize">{discussProject}</span>
                                  <span className="ltr:ml-auto rtl:mr-auto">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M4.295 15.833h1.03l7.717-7.716-1.03-1.03-7.717 7.716v1.03Zm11.42-8.62-2.813-2.787 1.095-1.094c.24-.24.534-.36.884-.36s.646.12.885.36l1.03 1.03c.24.24.364.53.372.872.009.342-.107.633-.346.872l-1.107 1.107Zm-11.917 9.87a.73.73 0 0 1-.538-.215.73.73 0 0 1-.215-.538v-1.745c0-.1.018-.196.054-.287a.755.755 0 0 1 .172-.253l8.727-8.728 2.813 2.813-8.728 8.727a.754.754 0 0 1-.253.172.766.766 0 0 1-.287.054H3.798Z" fill="#1C1B1F"></path>
                                    </svg>
                                  </span>
                                </div>
                              </div>

                              <div className="px-4 pt-2 pb-2">
                                <div className="flex items-center justify-center rounded py-1.5 px-2 bg-orange-500">
                                  <SigninButton locale={locale} messages={messages} />
                                  
                                </div>
                              </div>
                           </div>    

                          <div className="px-4 py-2">
                            <div className="flex items-center justify-center rounded py-3 bg-[#e7f8ff] dark:border dark:border-gray-800 mt-1 dark:bg-black-150 px-2 ">
                              <span className="pl-1 text-md text-gray-700 dark:text-gray-100 font-semibold  capitalize">{findServices} </span>
                              <div className="ml-auto w-20">
                                <img src="https://oday-personal.vercel.app/service/icons/flyer.png" alt="" />
                              </div>
                            </div>
                          </div>

                          <div className="px-4 py-1.5">
                            <div className="flex flex-col" >
                                <div className="flex  items-center justify-center dark:border dark:border-gray-800 rounded py-2 pl-2 bg-[#ffebce] dark:bg-black-150 pr-0.5">
                                  <div className="flex-col flex-75">
                                  <span className="pl-1 text-base text-gray-700 dark:text-gray-100 font-semibold  capitalize">{exploreSame}  </span>
                                  <div className="flex flex-wrap gap-2 mt-2">
                                    <span className="text-sm bg-white px-2 py-1 border border-[#f7b065] dark:border-gray-100 rounded text-gray-600">{packages} </span>
                                    <span className="text-sm bg-white px-2 py-1 border border-[#f7b065] dark:border-gray-100 rounded text-gray-600">{products} </span>
                                    <span className="text-sm bg-white px-2 py-1 border border-[#f7b065] dark:border-gray-100 rounded text-gray-600">{plans}</span>
                                  </div>
                                  </div>
                                  <div className="ml-auto flex-25">
                                    <img src="" alt="" />
                                  </div>
                              </div>
                           
                              <div className="flex  justify-center py-1 bg-[#ffebce] dark:bg-black-150 text-center">
                                <span className="text-gray-600 pt-0.5 text-sm dark:text-gray-100 font-semibold">Explore </span>
                                <span className="w-[18px] h-[18px] inline-block rotate-90 ml-1">
                                <svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                                    viewBox="0 0 512 512" >
                                  <path fill='#25B6D2' d="M485.216,421.564L485.216,421.564l-70.4-70.336l-15.448-15.432c-17.552-17.528-46-17.512-63.528,0.04
                                    c-17.528,17.552-17.512,46,0.04,63.528l0,0l26.664,26.64l0.104,0.128l27.016,26.992l58.832,58.776L512,448.316L485.216,421.564z"/>
                                  <ellipse fill='415E72' cx="216.96" cy="216.98" rx="216.96" ry="216.88"/>
                                  <ellipse fill='#FFFFFF' cx="216.96" cy="216.98" rx="180.632" ry="180.512"/>
                                  <path fill='#E81241' d="M216.992,378.092c-88.976-0.056-161.056-72.232-161-161.2c0.056-88.976,72.232-161.064,161.208-161
                                    c88.936,0.056,161,72.168,161,161.104C378.064,305.956,305.952,378.02,216.992,378.092z M216.992,59.892
                                    c-86.768,0.064-157.056,70.448-157,157.208c0.056,86.768,70.44,157.064,157.208,157c86.728-0.056,157.008-70.384,157-157.112
                                    C374.072,130.236,303.744,59.956,216.992,59.892L216.992,59.892z"/>
                                  </svg>
                              </span>
                            </div>
                            </div>
                           
                          </div>

                          <div className="px-4 py-2">
                            <div className="flex items-center justify-center rounded py-3 bg-[#e7f8ff] dark:bg-black-150 dark:border dark:border-gray-800 px-2 ">
                              <span className=" flex-60 text-md text-gray-700 line-clamp-8 font-semibold dark:text-gray-100 capitalize">{findProducts} </span>
                              <div className="flex justify-end ltr:pl-2 rtl:pl-2 flex-40">
                                <img className='w-20' src="https://oday-personal.vercel.app/service/icons/web-custom.png" alt="" />
                              </div>
                            </div>
                          </div>
                      </div>
                     </div>
                  </div>
               </div>


              </div>

            </div>
          </div>
        </div>
    </nav>
  )
}

export default NavBar