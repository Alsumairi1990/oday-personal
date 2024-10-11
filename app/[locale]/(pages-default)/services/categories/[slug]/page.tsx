import ServiceHero from "@/app/_components/_services/ServiceHero";
import { ServiceInt1 } from "@/app/models/ServiceInt";
import ProcessPhase from "@/app/_components/_services/ProcessPhase";

import { PhaseInt } from "@/app/models/PhaseInt";
import ServiceOffer from "@/app/_components/_services/ServiceOffer";
import { fservices } from '@/app/utils/ServicesData';
import { clients } from '@/app/utils/Cleints';
import { default as CustomServiceFeature } from "@/app/_components/_services/ServicesFeature1";
import ServiceClient from "@/app/_components/_services/ServiceClient";
import { serviceWorks } from '@/app/utils/ServiceWorks';
import ServiceWork from "@/app/_components/_services/ServiceWork";
import { getCategoryForFront, getIndustries } from "@/app/[locale]/admin/common/_actions/FrontActions";
import CategoryHero from "@/app/_components/_services/category/CategoryHero";
import { getLocale, getMessages } from "next-intl/server";
import { getServices } from "@/app/[locale]/_actions/Actions";
import CategoryDisplay from "@/app/_components/_services/category/CategoryDisplay";
import { getServicefeatures } from "@/app/[locale]/admin/front-settings/common/_actions/Actions";
import ClientCard from "@/app/_components/clinets/ClientCard";
import ProductCard from "@/app/_components/products/ProductCard";
import IndustryCard from "@/app/_components/IndustryCard";
import { CategoryForFront } from "@/app/[locale]/admin/category/util/CategoryForFront";
import { Industry, Service, ServiceFeature } from "@prisma/client";
import ServicesFeature from "@/app/_components/_services/ServicesFeature1";


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
  const ourProducts = (messages as any).Common.ourProducts;
  const latestWork = (messages as any).HomePage.latestWork;
  const ourClients = (messages as any).Common.ourClients;
  const workProcess = (messages as any).Common.workProcess;
  const startProject = (messages as any).Common.startProject;
  const projectContact = (messages as any).Common.projectContact;
  const projectStory = (messages as any).Common.projectStory;
  const projectDescripyion = (messages as any).Common.projectDescripyion;

  
  const categoryData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/categories/${params.slug}`, {
   method: 'GET',
   next: { revalidate: 3600 }, 
 });
 const pageIdustries = await fetch(`${process.env.NEXTAUTH_URL}/api/front/industries/home`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Revalidate for ISR if needed
 });
 const ServiceFeatures = await fetch(`${process.env.NEXTAUTH_URL}/api/front/features`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Revalidate for ISR if needed
 });
 const servicesData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Revalidate for ISR if needed
 });
 
 const category:CategoryForFront = await categoryData.json();
 const industries:Industry[] = await pageIdustries.json();
 const features:ServiceFeature[] = await ServiceFeatures.json();
 const services:Service[] = await servicesData.json();




    
   
   
   

  return (
     <div className="w-full">
        <CategoryHero category={category} locale={locale} messages={messages} />
        
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
            <div className="p-4 pl-8 rtl:font-arabic">
               <h2 className="text-3xl font-bold text-gray-900 mb-3">{startProject}</h2>
               <p className="text-xl font-bold text-gray-700 mb-6 ">{projectStory}</p>
              <p className="text-base text-gray-500 font-semibold leading-7">{projectDescripyion}</p>
              <span className="inline-block text-white text-base font-semibold px-3 py-1.5 bg-violet-600 rounded mt-6">{projectContact}</span>
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
            {features && features.map((service, index:number) => (
               <CustomServiceFeature key={service.id} servicefeature={service} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>


         <div className="w-full my-16 py-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-full mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">industry of <span className="text-orange-600">{category.name}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic dark:text-orange-400">industry<span className="text-orange-600">{category.nameAr}</span></h2>
            }
            </div>
            <div className="grid sm:grid-cols-4  max-sm:p-4 mt-2">
            {industries && industries.map((industry, index:number) => (
               <IndustryCard key={industry.id} industry={industry} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>


        

      
         <div className="w-full my-16 py-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col items-center sm:mb-8 ">
               {locale == 'en' ? <h2 className="sm:text-4xl  border-b-[0.3rem] pb-2 border-b-blue-400 text-gray-900 capitalize font-bold tracking-wide rtl:text-3xl  dark:text-orange-400">{ourClients}</h2>
               :  <h2 className="sm:text-4xl text-gray-900  border-b-[0.3rem] pb-2 border-b-blue-400 capitalize font-bold tracking-wide rtl:text-3xl font-arabic dark:text-orange-400">{ourClients }</h2>
            }
            </div>
            <div className=" sm:flex sm:flex-wrap gap-x-4 gap-y-6 justify-center  max-sm:p-4 mt-2">
            {category.clients && category.clients.map((client, index:number) => (
               <ClientCard key={client.id} client={client} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>


         <div className="w-full my-16 py-8   dark:bg-[#111] ">
          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:text-3xl rtl:font-arabic">{ourProducts}<span className="text-orange-600">{category.name}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic rtl:text-3xl dark:text-orange-400">{ourProducts}<span className="text-orange-600">{category.nameAr}</span></h2>
            }
            </div>
            <div className=" sm:flex sm:flex-wrap gap-x-4 gap-y-6 justify-center  max-sm:p-4 mt-2">
            {category.products && category.products.map((product, index:number) => (
               <ProductCard key={product.id} product={product} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>



         <div className="w-full my-16 py-8  dark:bg-[#111] ">
          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl rtl:text-3xl text-gray-900 capitalize font-bold rtl:font-arabic rtl:mb-4  tracking-wide dark:text-orange-400">{workProcess}</h2>
               <span className="w-14 h-1 bg-blue-500 mb-2"></span>
            </div>
            <div className=" sm:flex sm:flex-wrap gap-x-6 gap-y-6 justify-center  max-sm:p-4 mt-2">
            {category.phases.map((phase) => (
               <ProcessPhase index={phase.id} phase={phase} locale={locale} messages={messages} phaseSize={category.phases.length} />
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