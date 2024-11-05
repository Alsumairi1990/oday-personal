
import React from 'react';
import { AbstractIntlMessages } from 'next-intl';
import { PlanForFront } from '@/app/[locale]/admin/plans/_utils/PlanForFront';
import { FaArtstation } from 'react-icons/fa';
import { GoCalendar } from 'react-icons/go';
import { IoCalendarClear } from 'react-icons/io5';
import { BiSolidOffer } from 'react-icons/bi';
interface ServiceProps {
    plan : PlanForFront
    locale : string,
    messages : AbstractIntlMessages,
    page : string,
  }
const PlanHeroSect = ({ plan, locale,messages,page }: ServiceProps) => {
    const talkToConsultant = (messages as any).CategoryPage.talkToConsultant;
    const home = (messages as any).Common.home;
    const request = (messages as any).HomePage.requestService;
    const details = (messages as any).HomePage.details;
    const features = (messages as any).Common.features;
    const limits = (messages as any).Common.limits;
    const support = (messages as any).Common.support;
    const purpose = (messages as any).Common.purpose;
    const duration = (messages as any).Common.duration; 
    const paymentInterval = (messages as any).Common.paymentInterval; 
    const cycleOfpayment = (messages as any).Common.cycleOfpayment; 
    const month = (messages as any).Common.month; 
    const semiAnnual = (messages as any).Common.semAnnual; 
    const annual = (messages as any).Common.year; 
    const totalServices = (messages as any).Common.totalServices; 
  return (
        <div className="w-full " >  
        <div className=" sm:h-[calc(100%-350px)] hero-section pt-[100px] sm:pb-8 flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${plan.image})`}}>
           <div className="absolute sm:top-[75px] h-[calc(100%-50px)] sm:h-[calc(100%-75px)] top-16 bottom-0 border-t border-t-gray-800  w-full left-0" style={{backgroundImage: 'linear-gradient(to top, rgb(8 8 8),rgb(0 0 0 / 55%), rgb(8 8 8))'}}></div>

          <div className="flex w-full sm:w-11/12 mx-auto  relative">
             <div className="flex-100 ">
               {locale == 'en' ? 
               <>
                <span className="text-sm text-white mb-6 inline-block">{home} | {page} </span>
                <h2 className="sm:text-3xl text-xl text-center text-white font-extrabold mb-4">{plan.name}</h2>
                <h2 className="sm:text-base text-base text-center text-white line-clamp-2 font-sembold mb-4">{plan.descriptionAr}</h2>
                </>
                :
                <>
                <span className="text-[13px] font-arabic flex  items-center text-white mb-6">{home} <span className='text-[12px] px-2'>|</span> {page} </span>
                <h2 className="sm:text-3xl text-xl text-center text-white font-extrabold font-arabic mb-4">{plan.nameAr}</h2>
                <h2 className="sm:text-base text-base text-center text-white font-arabic line-clamp-2 font-sembold mb-4">{plan.descriptionAr}</h2>
                </>
                }
                <div className="flex sm:gap-x-4 rtl:font-arabic mt-2 gap-2 sm:gap-6 sm:my-6 justify-center sm:w-8/12 mx-auto ">
                   <div className="sm:flex-25 bg-[rgba(31,41,55,0.5)] sm:bg-subscriptionBg rounded relative border py-3  items-center gap-y-4 mt-4 font-semibold flex flex-col border-gray-400">
                     <span className="absolute -top-5 items-center justify-center  rounded-full border inline-flex h-9 w-9 bg-[rgba(31,41,55,0.5)] border-gray-300"><FaArtstation className='text-white text-xl' /></span>
                     <span className="text-gray-100 max-sm:text-base max-sm:text-center border-b mt-3 border-b-gray-400 pb-2">{ duration}</span>
                     <span className="text-gray-100 ">{plan.duration}</span>
                   </div>
                   <div className="sm:flex-25 bg-[rgba(31,41,55,0.5)] sm:bg-subscriptionBg rounded relative border py-3  items-center gap-y-4 mt-4 font-semibold flex flex-col border-gray-400">
                     <span className="absolute -top-5 items-center justify-center  rounded-full border inline-flex h-9 w-9 bg-[rgba(31,41,55,0.5)] border-gray-300"><IoCalendarClear className='text-white text-xl' /></span>
                     <span className="text-gray-100 max-sm:text-base max-sm:text-center border-b mt-3 border-b-gray-400 pb-2">{ cycleOfpayment}</span>
                     <span className="text-gray-100 ">{plan.interval == 'MONTHLY'? month : plan.interval === 'YEARLY'? annual : semiAnnual  }</span>
                   </div>
                   <div className="sm:flex-25 bg-[rgba(31,41,55,0.5)] sm:bg-subscriptionBg rounded relative border py-3  items-center gap-y-4 mt-4 font-semibold flex flex-col border-gray-400" >
                     <span className="absolute -top-5 items-center justify-center  rounded-full border inline-flex h-9 w-9 bg-[rgba(31,41,55,0.5)] border-gray-300"><BiSolidOffer className='text-white text-xl' /></span>
                     <span className="text-gray-100 max-sm:text-base max-sm:text-center border-b mt-3 border-b-gray-400 pb-2">{ totalServices}</span>
                     <span className="text-gray-100 ">{plan.services.length}</span>
                     </div>
                 
                 
                  
                </div>
             </div>
          </div>
         </div>
    </div>
  );
};

export default PlanHeroSect;