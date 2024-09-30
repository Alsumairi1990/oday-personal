import ServiceHero from "@/app/_components/_services/ServiceHero";
import { ServiceInt1 } from "@/app/models/ServiceInt";
import ProcessPhase from "@/app/_components/_services/ProcessPhase";

import { PhaseInt } from "@/app/models/PhaseInt";
import ServiceOffer from "@/app/_components/_services/ServiceOffer";
import { fservices } from '@/app/utils/ServicesData';
import { clients } from '@/app/utils/Cleints';
import ServiceFeature from "@/app/_components/_services/ServicesFeature";
import ServiceClient from "@/app/_components/_services/ServiceClient";
import { serviceWorks } from '@/app/utils/ServiceWorks';
import ServiceWork from "@/app/_components/_services/ServiceWork";
import { getCategoryForFront } from "@/app/[locale]/admin/common/_actions/FrontActions";
import CategoryHero from "@/app/_components/_services/category/CategoryHero";
import { getLocale, getMessages } from "next-intl/server";
import { getServices } from "@/app/[locale]/_actions/Actions";
import CategoryDisplay from "@/app/_components/_services/category/CategoryDisplay";
import { getServicefeatures } from "@/app/[locale]/admin/front-settings/common/_actions/Actions";


interface Props {
  params: {
      slug: string;
  };
}

const ServiceCategory = async ({params}:Props) => {
   const imagePath = '/images/777.png';
   const imagePath1 = '/images/curve.png';
   const imagePath2 = '/images/service2.png';
   const locale = await getLocale();
  const messages = await getMessages({ locale });
  const feature1 = (messages as any).Common.featureTitle1;
  const feature2 = (messages as any).Common.featureTitle1;
  const serviceSecTitle = (messages as any).Common.serviceSecTitle;
  const categoryWorkTitle = (messages as any).Common.categoryWorkTitle;

   let category;
   let services;
   let features; 
   try {
    category = await getCategoryForFront(params.slug);
    services = await getServices();
    features = await getServicefeatures(); 
   } catch (error:any) {
    console.log(error.message)
    return (
      <h2 className="text-gray-700">Error at Server</h2>
    )
    
   }
   
   

  return (
     <div className="w-full">
        <CategoryHero category={category} locale={locale} messages={messages} />
        {/* <div className="py-4 px-8 pt-0 w-full">
           <div className="flex ">
            <div className="flex-35 p-2 pt-0 ">
               <div className="flex flex-wrap  justify-between">
                 <span className="text-black-100 uppercase text-sm mb-2">KNOW US BETTER</span>
               </div>
               <h2 className="text-3xl font-bold text-gray-">What1 Company Do? {category && category.name}</h2>
               <div className="flex mt-4">
                  <p className="text-sm leading-7 text-gray-900">Webvolty is an Indian  IT Company for Website Development, Web Designing, Mobile App Development, Software Development, Web Hosting, Search Engine Optimization, Mobile Solutions and lot many IT and IT Enabled Services.</p>
               </div>
            </div>
            <div className="flex-20 p-2">
               <div className="bg-[#f9f9f9] px-2 py-3 text-center rounded-md">
                  <div className="flex justify-center">
                     <img src="https://www.webvolty.com/img/about/Years_Experience.png" alt="" />
                  </div>
                  <div className="p2 mt-3">
                     <p className="text-gray-800 text-2xl mb-2 font-bold pb-2">154+</p>
                     <p className="text-gray-700 text-base">Yers of Experience in Design</p>
                  </div>
               </div>
            </div>

            <div className="flex-20 p-2">
               <div className="bg-[#f9f9f9] px-2 py-3 text-center rounded-md">
                  <div className="flex justify-center">
                     <img src="https://www.webvolty.com/img/about/Years_Experience.png" alt="" />
                  </div>
                  <div className="p2 mt-3">
                     <p className="text-gray-800 text-2xl mb-2 font-bold pb-2">154+</p>
                     <p className="text-gray-700 text-base">Yers of Experience in Design</p>
                  </div>
               </div>
            </div>

            <div className="flex-20 p-2">
               <div className="bg-[#f9f9f9] px-2 py-3 text-center rounded-md">
                  <div className="flex justify-center">
                     <img src="https://www.webvolty.com/img/about/Years_Experience.png" alt="" />
                  </div>
                  <div className="p2 mt-3">
                     <p className="text-gray-800 text-2xl mb-2 font-bold pb-2">154+</p>
                     <p className="text-gray-700 text-base">Yers of Experience in Design</p>
                  </div>
               </div>
            </div>
           
           </div>
        </div> */}


        {/* <div className="w-full my-16 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">How it works</h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
            </div>
            <div className="flex flex-wrap gap-6 max-sm:p-4">
             {phases.map((phase, index:number) => (
               <ProcessPhase key={phase.id} phase={phase} index={index} />
            ))} 
            </div>
           </div>
         </div> */}


         <div className="w-full my-16 ">
          <div className="w-11/12 mx-auto">
            { locale === 'en' ? <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">{serviceSecTitle} <span className="text-orange-600">{category.name} </span> </h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">
               {category.description && category.description.split(' ').slice(0, 35).join(' ') + (category.description.split(' ').length > 35 ? '...' : '')}
               </p>
            </div>
            :  <div className="flex flex-col items-center sm:mb-8 font-arabic">
                  <h2 className="sm:text-3xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">{serviceSecTitle} <span className="text-orange-600">{category.nameAr} </span>  </h2>
                  <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">
                     {/* {category.descriptionAr} */}
                     {category.descriptionAr && category.descriptionAr.split(' ').slice(0, 35).join(' ') + (category.descriptionAr.split(' ').length > 35 ? '...' : '')}

                     </p>
               </div>
            }
            {/* <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {services.map((service, index:number) => (
               <ServiceOffer key={service.id} serviceOffer={service}  />
            ))}

            </div> */}
            <CategoryDisplay services={services} locale={locale} messages={messages} category={category} />
           </div>
         </div>



        <div className="w-full mt-8 bg-[#f4f2ff] dark:bg-[#111]">
         <div className="w-11/12 mx-auto">
         <div className="p-2 grid grid-cols-2">
            <div className="p-2">
               <img className="w-full " src="https://www.controlf5.in/wp-content/uploads/2024/01/Herosectionrightimage.webp" alt="" />
            </div>
            <div className="p-4 pl-8">
               <h2 className="text-3xl font-bold text-gray-900 mb-3">We Are ControlF5</h2>
               <p className="text-xl font-bold text-gray-700 mb-6 ">Creating advanced and competitive digital solutions for both SMEs and Fortune companies.</p>
              <p className="text-base text-gray-500 font-semibold leading-7">We are a professional website and mobile app company with considerable experience in a variety of high-tech verticals such as eCommerce, finance, banking, healthcare, hospitality, and food and beverage. At its core, we assist our clients in innovating and implementing technological transformations.</p>
              <span className="inline-block text-white text-base font-semibold px-3 py-1.5 bg-violet-600 rounded mt-6">Get More </span>
            </div>

         </div>
         </div>
        
        </div>


        <div className="w-full my-16 py-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">{feature1}<span className="text-orange-600">{category.name}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic dark:text-orange-400">{feature1}<span className="text-orange-600">{category.nameAr}</span></h2>
            }
            </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4 mt-2">
            {features.map((service, index:number) => (
               <ServiceFeature key={service.id} servicefeature={service} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>


        

         <div className="w-full my-16 py-8 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8 border-b border-b-gray-300 pb-1.5">
               <h2 className="sm:text-2xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:font-arabic rtl:text-xl">{categoryWorkTitle}</h2>
               {locale === 'en' ? <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">{category.name}</p>
                :  <p className="text-2xl  text-center mt-3 mb-2 font-bold text-orange-600 font-arabic dark:text-gray-200">( {category.nameAr} )</p>
                }
           </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {category.works.map((work) => (
               <ServiceWork key={work.workId} serviceWork={work.service} locale={locale} messages={messages} category={category.name} />
            ))}
            </div>
           </div>
         </div>
     </div>
  )
};
export default ServiceCategory;