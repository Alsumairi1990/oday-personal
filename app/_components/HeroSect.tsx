
import React from 'react';
import hero from '@/public/images/hero.jpg';
import PanelSearch from './SearchPanel';
import { Category, HeroSection, Service, ServiceCategory } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
interface Props {
  heroData : HeroSection,
  services : Service[],
  categories : Category[]
}
const Hero = async ({heroData,services,categories}:Props) => {
    const imagePath = '/images/hero.jpg';
    const locale = await getLocale();
    const messages = await getMessages({ locale });
  return (

    <div className="w-full " >  
    <div className=" m-h-lvh sm:h-[35rem]  pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${heroData.image})`}}>
      <div className="absolute sm:top-[75px] h-[calc(100%-64px)] sm:h-[calc(100%-75px)] top-16 bottom-0 border-t border-t-gray-800  w-full left-0" style={{backgroundImage: 'linear-gradient(to top, rgb(8 8 8),rgb(0 0 0 / 55%), rgb(8 8 8))'}}></div>
     <div className="flex flex-wrap w-11/12 mx-auto z-20">
     <div className="flex w-full flex-col items-center justify-center ">
     {locale == 'en' ? <h1 className="text-2xl w-full px-1 sm:text-3xl sm:max-w-[70%] text-center max-sm:mb-4 sm:leading-10 uppercase pt-4  font-bold text-white" style={{textShadow:'0 0 10px #000'}}>
             {heroData.title}
           </h1>
      :     <h1 className="text-2xl w-full px-1 font-arabic sm:text-[2rem] sm:max-w-[70%] text-center max-sm:mb-4 sm:leading-[3rem] uppercase pt-4  font-bold text-white" style={{textShadow:'0 0 10px #000'}}>
      {heroData.titleAr}
    </h1>
      }
           <div className="py-2 px-2 my-2 rounded-xl max-sm:bg-[#00000021] max-sm:border max-sm:border-[#4c4c4c] w-full">
             <PanelSearch services={services} categories={categories} locale={locale} />
         </div>
         {locale == 'en' ? ( 
          <>
          <p className="text-md  text-gray-100 uppercase tracking-wide leading-7">{heroData.subTitl}</p>
         <div className="flex flex-col items-center  ">
             <p className="text-md  text-orange-500">*{heroData.footerTitle}*</p>
         </div> 
         </>) :
         (
          <>
           <p className="text-sm  text-gray-100 uppercase font-arabic font-semibold  tracking-wide leading-7">{heroData.subTitlAr}</p>
          <div className="flex flex-col items-center  ">
              <p className="text-sm  text-orange-500 font-arabic font-semibold">*{heroData.footerTitleAr}*</p>
          </div> 
          </>
         )
        }
     </div>
     </div>
 </div>
    </div>
  /* // <div className="w-full " >  
  //   <div className="min-h-lvh mobile-clip relative sm:h-[35rem] px-4 w-full bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${imagePath})`}}>
  //      <div className="absolute top-0 h-full w-full left-0" style={{backgroundImage: 'linear-gradient(to top, rgb(8 8 8),rgb(0 0 0 / 55%), rgb(8 8 8))'}}></div>
  //       <div className="relative flex sm:pt-8 flex-col h-full items-center justify-center z-40">
  //         <h1 className="text-xl sm:text-3xl sm:max-w-[70%] text-center max-sm:mb-4 sm:leading-10 uppercase pt-4 px-4 font-bold text-white" style={{textShadow:'0 0 10px #000'}}>
  //           Design Shine Gate for Template and Web devlopment
  //         </h1>
  //         <div className="w-11/12 mt-2  mx-auto">
  //             <PanelSearch />
  //         </div>
          
  //         <p className="text-gray-300 max-sm:hidden sm:max-w-[70%] text-center text-sm sm:text-base mb-4">He formatting rules are not configurable but are already optimized for the best possible output. Note that the formatter will keep spaces and tabs between content tags such as div and span </p>
  //         <a href="/" className="inline-block text-base sm:text-base text-white bg-green-600 py-1.5 sm:py-1 px-3 rounded-md border hover:!bg-green-700 border-green-500 font-medium">Discover Work</a>
  //       </div>
  //   </div>
  // </div> */


  );
};

export default Hero;