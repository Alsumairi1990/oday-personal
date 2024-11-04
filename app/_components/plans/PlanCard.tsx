
import React from 'react';

import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
import { PlanCategoryForFront } from '@/app/[locale]/admin/plans/category/_utils/PlanCategoryForFront';
import { PlanForFront } from '@/app/[locale]/admin/plans/_utils/PlanForFront';
import { Plan } from '@prisma/client';
interface ServiceProps {
    plan: PlanForFront | Plan,
    locale : string,
    messages : AbstractIntlMessages,
  }
const PlanCard = ({ plan,locale,messages } : ServiceProps) => {
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
  


  return (
    <div className="bg-gray-100 border border-gray-300 rounded-xl shadow-xl dark:bg-[#151515] pb-5">
        <div className="bg-black-150 rounded-2xl flex flex-col justify-center items-center">
            <div className=" py-4 bg-[#151318] w-full rounded-t-xl border border-gray-500" >
                {locale === 'en' ? <div>
                  <p className="text-white text-xl text-center font-semibold px-4">{plan.name}<span className="text-[#ff7900] text-md block">: 30,000 </span><span className="text-[#ff7900] block text-sm">Sam Company LDT </span></p>
                  <p className="relative text-center before:content-[''] before:absolute before:top-[50%] before:left-0 before:w-[104px] before:h-px before:bg-gradient-to-r before:from-transparent before:via-white before:to-white after:content-[''] after:absolute after:top-[50%] after:right-0 after:w-[104px] after:h-px after:bg-gradient-to-l after:from-transparent after:via-white after:to-white"><span className="text-white text-md px-4 pt-4">Finder Tool</span></p>
                  <p className="text-gray-300 text-bxs text-center">University Rank finder tool</p>
                </div>:
                <div className='font-arabic'>
                <p className="text-white text-2xl text-center font-semibold px-4">{plan.nameAr}<span className="text-[#ff7900] text-2xl block">{plan.yearlyPrice.toString()}$</span></p>
                <p className="relative text-center before:content-[''] before:absolute before:top-[50%] before:left-0 before:w-[104px] before:h-px before:bg-gradient-to-r before:from-transparent before:via-white before:to-white after:content-[''] after:absolute after:top-[50%] after:right-0 after:w-[104px] after:h-px after:bg-gradient-to-l after:from-transparent after:via-white after:to-white"><span className="text-white text-md px-4 pt-4">{paymentInterval}</span></p>
                <p className="text-gray-300 text-bxs text-center mt-1">{cycleOfpayment}
                  {plan.interval == 'MONTHLY'? month : plan.interval === 'YEARLY'? annual : semiAnnual  } </p>
              </div>
                }
            </div>
         </div>
    <div className=" rounded-b-md  px-3 ">
     <div className="flex px-2  justify-center">
        {plan.icon && <img src={plan.icon} alt={plan.name} />}
     </div>
        {locale == 'en' ? <div className="mt-1.5 ">
            <p className="text-gray-800 text-xl mb-1 font-semibold dark:text-orange-500 ">{plan.name}</p>
            <p className="text-gray-700  text-sm tracking-8  leading-6 px-1.5 dark:text-gray-100 line-clamp-5 font-medium mb-4">{plan.description}</p>
            <div className="">
                <span className="text-gray-900 text-md font-semibold">Features : </span>
                <p className="text-sm text-gray-700 leading-6">{plan.features}</p>
             </div>
            <div className="flex items-center bg-orange-500 px-2 py-1 mx-auto justify-center border  border-orange-500 w-fit rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{request}</a>
            </div>
            <div className="flex items-center bg-gray-200 px-2 py-1 mx-auto justify-center border  border-gray-300 rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">{details}</a>
            </div>
        </div>
        : 
        <div className="mt-1.5 font-arabic ">
            <p className="text-gray-800 text-lg font-bold dark:text-orange-500 mb-2">{plan.nameAr}</p>
            <p className="text-gray-700 text-sm tracking-8  leading-7 px-1.5 dark:text-gray-100 line-clamp-3 font-medium mb-4">{plan.descriptionAr}</p>
            <div className="">
                <span className="text-gray-900 text-md font-semibold mb-1">{features} : </span>
                <p className="text-sm text-gray-700 leading-6">{plan.featuresAr}</p>
            </div>
            <div className="mt-3">
                <span className="text-gray-900 text-md font-semibold mb-1">{limits} : </span>
                <p className="text-sm text-gray-700 leading-6">{plan.limitsAr}</p>
            </div>
            <div className="mt-3">
                <span className="text-gray-900 text-md font-semibold mb-1">{support} : </span>
                <p className="text-sm text-gray-700 leading-6">{plan.supportAr}</p>
            </div>
            <div className="mt-3">
                <span className="text-gray-900 text-md font-semibold mb-1">{purpose} : </span>
                <p className="text-sm text-gray-700 leading-6">{plan.purposeAr}</p>
            </div>
            <div className="mt-3">
                <span className="text-gray-900 text-md font-semibold mb-1">{duration} : </span>
                <span className="text-sm px-1 text-gray-700 leading-6">{plan.duration}</span>
            </div>
           
            <div className="mt-3">
                <span className="text-gray-900 text-md font-semibold mb-1">{paymentInterval} : </span>
                <span className="text-sm px-1 text-gray-700 leading-6">{plan.interval == 'MONTHLY'? month : plan.interval === 'YEARLY'? annual : semiAnnual  } </span>
            </div>
            
            <div className="flex px-3 gap-x-3 justify-center border-t border-t-gray-200 pt-3">
             <div className="py-1 px-2 text-center bg-orange-600 border border-orange-600 rounded-md">
              <Link href="/service" className="text-base rtl:font-arabic rtl:text-sm rtl:font-bold text-white">{request}</Link>
             </div>
             <div className="py-1 px-2 text-center border bg-gray-50 rounded-md">
              <Link href={`/plans/categories/${plan.slug}`} className="text-base rtl:font-arabic rtl:font-semibold rtl:text-sm"> {details}</Link>
             </div>
           </div>
        </div>
          }

    </div>
    </div>
  );
};

export default PlanCard;

