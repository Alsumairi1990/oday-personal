
import { ServiceFeature } from '@prisma/client';
import { AbstractIntlMessages } from 'next-intl';
import React from 'react';


interface ServiceProps {
    servicefeature: ServiceFeature;
    locale : string,
    messages : AbstractIntlMessages,

  }
const ServicesFeature = ({ servicefeature,locale, messages} : ServiceProps) => {
  const feature1 = (messages as any).Common.featureTitle1;
  const feature2 = (messages as any).Common.featureTitle1;
  return (
    <div className="flex-100 sm:flex-20 rounded-md p-2 bg-white dark:bg-[#151515]">
    <div className=" py-3 text-center rounded-md shadow-xl border h-full border-gray-200">
     <div className="flex px-2 mb-4  justify-center">
        {servicefeature.image && <img src={servicefeature.image} alt={servicefeature.name!} /> }
     </div>
       {locale == 'en' ?  <div className="mt-1.5 ">
            <p className="text-gray-800 dark:text-orange-500 text-xl mb-2 font-semibold mt-2 ">{servicefeature.title}</p>
            <p className="text-gray-500 text-sm dark:text-gray-200 tracking-8  leading-6 px-1.5 font-medium line-clamp-5 mb-4">{servicefeature.desc}</p>
        </div>:
                <div className="mt-1.5 font-arabic ">
                <p className="text-gray-800 dark:text-orange-500 text-xl mb-2 font-semibold ">{servicefeature.titleAr}</p>
                <p className="text-gray-500 text-sm dark:text-gray-200 tracking-8  leading-6 px-1.5 font-medium line-clamp-5 mb-4">{servicefeature.descAr}</p>
            </div>
          }
    </div>
    </div>
  );
};

export default ServicesFeature;