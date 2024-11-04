
import React from 'react';
import { AbstractIntlMessages } from 'next-intl';
interface ServiceProps {
    title: string,
    titleAr : string,
    subTitle : string,
    subTitleAr : string,
    locale : string,
    messages : AbstractIntlMessages,
    page : string,
    image : string
  }
const GeneralHeroSect = ({ title,titleAr,subTitle,subTitleAr, locale,messages,page, image }: ServiceProps) => {
    const talkToConsultant = (messages as any).CategoryPage.talkToConsultant;
    const home = (messages as any).Common.home;
  return (
        <div className="w-full " >  
        <div className=" sm:h-[calc(100%-350px)] hero-section pt-[100px] sm:pb-8 flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${image})`}}>
           <div className="absolute sm:top-[75px]  sm:h-[calc(100%-75px)] top-16  bottom-0 border-t border-t-gray-800  w-full left-0" style={{backgroundImage: 'linear-gradient(to top, rgb(8 8 8),rgb(0 0 0 / 55%), rgb(8 8 8))'}}></div>

          <div className="flex w-11/12 mx-auto relative">
             <div className="flex-100 sm:flex-60">
               {locale == 'en' ? 
               <>
                <span className="text-sm text-white mb-6 inline-block">{home} / {page} </span>
                <h2 className="sm:text-4xl text-xl text-white font-extrabold mb-2 sm:mb-4">{title}</h2>
                <h2 className="text-md sm:text-xl sm:leading-10 text-white font-bold line-clamp-2 sm:line-clamp-3 font-arabic mb-4">{subTitle}</h2>
                </>
                :
                <>
                <span className="text-sm text-white font-arabic mb-6 inline-block">{home} / {page} </span>
                <h2 className="sm:text-4xl text-xl text-white font-extrabold font-arabic mb-2 sm:mb-4">{titleAr}</h2>
                <h2 className="text-md sm:text-xl sm:leading-10 text-white font-bold line-clamp-2 sm:line-clamp-3 font-arabic mb-4">{subTitleAr}</h2>
                </>
                }
                {/* <p className="text-sm text-gray-100 font-medium leading-8">{category.description}</p> */}
                <div className="flex mt-2 sm:mt-6 max-sm:mb-3 items-center  ">
                   <div className="pl-2 pr-4 flex items-center py-1 sm:py-2 rounded-md bg-[#f85508] ">
                      <span className="w-4  mr-1 bainline-block">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#fff"/>
                         </svg>                 
                      </span>
                      <span className=" inline-block text-white text-sm sm:text-base font-semibold rtl:font-arabic ">{talkToConsultant}</span>
                   </div>
                  
                </div>
             </div>
             <div className="flex-40 max-sm:hidden">
                <img className="w-full z-20" src="https://149808042.v2.pressablecdn.com/wp-content/uploads/2023/06/Content-Research-Process-Steps.png" alt="" />
             </div>
          </div>
         </div>
    </div>
  );
};

export default GeneralHeroSect;