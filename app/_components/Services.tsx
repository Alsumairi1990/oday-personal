
import React from 'react';
import Link from 'next/link'
import { Category, PageSection, Service } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
interface Props {
  categories : Category[],
  meta : PageSection
}
const Services = async ({categories,meta}:Props) => {
  const locale = await getLocale();
  const messages = await getMessages({ locale });

  const categoryDetails = (messages as any).HomePage.categoryDetails;
  const categoryEnq = (messages as any).HomePage.categoryEnq;
 
  return (

      <div className="flex flex-col sm:py-8  dark:bg-[#080808]">
        <div className="p-1 w-11/12 mx-auto">
        {locale == 'en' ? <h2 className="text-3xl text-center px-8 mb-6 text-blue-700 dark:text-white font-semibold">{meta.title}</h2>
          : <h2 className="text-3xl font-arabic rtl:font-bold rtl:mb-3 text-center px-8 mb-6 text-blue-700 dark:text-white font-normal">{meta.titleAr}</h2>
          }

          {locale == 'en' ? <p className="text-base text-gray-600 dark:text-gray-300 text-center leading-7 px-8">{meta.desc}</p>
          :<p className="text-base font-arabic rtl:text-gray-700 text-gray-600 dark:text-gray-300 text-center leading-7 px-8">{meta.descAr}</p>
          }
       
        <div className="grid grid-cols sm:grid-cols-4 gap-8 mt-8">

         {categories && categories.map((service) => (
               <div className="p-2 flex flex-col justify-center pt-4 sm:pt-6 border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#474747]">
               <div className="dark:pb-2 pb-1 pt-1 dark:pt-0 h-20 dark:sm:pb-5 w-24 bg-gray-300 dark:bg-[#080808]  sm:w-[6.5rem] dark:sm:w-[6.5rem] rounded-xl  px-1 dark:px-0 flex items-center mx-auto ">
                {service.image && <img className='w-full h-full mx-auto rounded-md' src={service.image} alt="" /> }
               </div>
               <div className="sm:p2 mt-4 text-center">
                 {/* <h2 className="text-base sm:text-xl capitalize sm:uppercase font-semibold text-orange-500 dark:text-[#ca82ef]">{service.name}</h2> */}
    
                 {locale == 'en' ? <h2 className="text-base sm:text-xl capitalize sm:uppercase font-semibold text-orange-500 dark:text-[#ca82ef]">{service.name} </h2>
                 :  <h2 className="text-xl font-arabic rtl:font-bold rtl:mb-3 text-center px-3 mb-6 text-blue-700 dark:text-white font-normal">{service.nameAr}</h2>
                  }
                   {locale == 'en' ? <p className="text-sm leading-[22px] text-gray-500 dark:text-gray-300 text-center sm:leading-6 line-clamp-4 mt-1.5 sm:mt-3 sm:px-3">{service.description}</p>
                    :<p className="text-md font-arabic rtl:text-gray-700 text-gray-600 dark:text-gray-300 text-center leading-7 line-clamp-5 px-3">{service.descriptionAr}</p>
                    }
                 {/* <p className="text-sm leading-[22px] text-gray-500 dark:text-gray-300 text-center sm:leading-6 mt-1.5 sm:mt-3 sm:px-3">Search including videos and more. Google has many special features to help you find exactly what you're looking </p> */}
                 <div className="p-1 flex flex-col sm:flex-row justify-around mt-6 mb-4">
                   <Link href={'/services/category/kj'} className='px-4 py-1.5 rtl:font-arabic border dark:border-[0.13rem] max-sm:mb-4 border-gray-300 dark:border-[#4a235e] rounded text-gray-700 dark:text-gray-100 text-sm' style={{borderRadius:'36px 67px'}} >{categoryEnq} 
                  
                   </Link>
                   <Link href={`/services/categories/${service.slug}`} className='px-4 py-1.5 rtl:font-arabic flex items-center justify-center border-[0.13rem] bg-orange-500 border-orange-500 dark:bg-[#00ba35] dark:border-[#00ba35] rounded text-white dark:text-black font-semibold text-sm' style={{borderRadius:'36px 67px'}} >{categoryDetails} 
                   <span className="ml-2 rtl:mr-2">
                   <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                           viewBox="0 0 512 512" >
                         <path fill="#FFFFFF" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
                         <path fill="#8AD5DD" d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                           M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"/>
                         <polygon fill="#2D2D2D" points="214.656,95.936 378.016,256 214.656,416.064 165.856,366.096 278.208,256 165.856,145.904 
                           "/>
                         </svg>
                       </span>
                   </Link>
                 </div>
               </div>
             </div>

         ))}

        </div>
        <div className="mt-8 flex justify-center">
        
        {locale == 'en' ? <Link href={'/services/categories'} className="capitalize text-gray-700  px-2.5 rounded py-1.5 font-semibold bg-gray-100 ">{meta.more} </Link>
                  : <Link href={'/services/categories'} className="capitalize font-arabic text-gray-700  px-2.5 rounded py-1.5 font-semibold bg-gray-100 "> {meta.moreAr} </Link> 
                  // <h2 className="text-xl  rtl:font-bold rtl:mb-3 text-center px-3 mb-6 text-blue-700 dark:text-white font-normal">{service.nameAr}</h2>
                  }
        </div>
        
        </div>
       
      </div>
      
  );
};

export default Services;