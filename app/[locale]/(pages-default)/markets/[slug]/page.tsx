import ServiceHero from "@/app/_components/_services/ServiceHero";
import { ServiceInt1 } from "@/app/models/ServiceInt";
import ProcessPhase from "@/app/_components/_services/ProcessPhase";

import { PhaseInt } from "@/app/models/PhaseInt";
import ServiceOffer from "@/app/_components/_services/ServiceOffer";
import { fservices } from '@/app/utils/ServicesData';
import { clients } from '@/app/utils/Cleints';
import ServiceFeature from "@/app/_components/_services/ServicesFeature1";
import ServiceClient from "@/app/_components/_services/ServiceClient";
import { serviceWorks } from '@/app/utils/ServiceWorks';
import ServiceWork from "@/app/_components/_services/ServiceWork";
import { getLocale, getMessages } from "next-intl/server";
import { gethaseMeta, getServiceBySlug, getServiceCatMeta, getWorkMeta } from "@/app/[locale]/admin/common/_actions/FrontActions";
import IndustryCard from "@/app/_components/IndustryCard";
import ClientCard from "@/app/_components/clinets/ClientCard";
import ProductCard from "@/app/_components/products/ProductCard";
import { ServiceForFront } from "@/app/[locale]/admin/service/utils/ServiceForFront";
import { Market, PageSection } from "@prisma/client";
import HeroSection from "@/app/_components/market/HeroSection";
import ServiceSingleCards from "@/app/_components/_services/ServiceSinglCards";
import { WorksFrontData } from "@/app/[locale]/admin/works/utils/WorksFrontData";
import Works from "@/app/_components/Works";

interface Props {
  params: {
      slug: string;
  };
}

const Serivice = async ({params}:Props) => {
  

   const locale= await getLocale();
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

 
 const marketData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/markets/${params.slug}`, {
      method: 'GET',
      next: { revalidate: 1800 }, // Optional revalidation for ISR (30 minutes)
    });
    
 const serviceData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service/location/${params.slug}`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Optional revalidation for ISR (30 minutes)
 });
 const sections = await fetch(`${process.env.NEXTAUTH_URL}/api/front/meta/sections`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Revalidate for ISR if needed
 });
 const pageWorks = await fetch(`${process.env.NEXTAUTH_URL}/api/front/works/home`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Revalidate for ISR if needed
 });


 

 const market:Market = await marketData.json();
//  const service:ServiceForFront = await serviceData.json();
 const services:ServiceForFront[] = await serviceData.json();
 const works:WorksFrontData[] = await pageWorks.json();

 const sectionMeta:PageSection[] = await sections.json();
 const serviceMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'services'); 
 const phaseMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'workPhase');
 const workMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'works');  
 





 


  return (
     <div className="w-full">
       <div className="w-full mb-16">    
               {market &&  <HeroSection  market={market} locale={locale} messages={messages} /> }
         </div>

      



        <div className="w-full mt-8 bg-[#f4f2ff]">
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

        <div className='gray:bg-[#111]"'>{services.length}---------------------------
            {services.length> 0 && serviceMeta && <ServiceSingleCards services={services} meta={serviceMeta} />}
        </div>

        <div className="dark:w-11/12 mx-auto  dark:bg-[#111]">
            {works && workMeta &&  <Works  works = {works} meta={workMeta} /> }
         </div>
   
         <div className="w-full my-16 py-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col items-center sm:mb-8 ">
               {locale == 'en' ? <h2 className="sm:text-4xl  border-b-[0.3rem] pb-2 border-b-blue-400 text-gray-900 capitalize font-bold tracking-wide rtl:text-3xl  dark:text-orange-400">{ourClients}</h2>
               :  <h2 className="sm:text-4xl text-gray-900  border-b-[0.3rem] pb-2 border-b-blue-400 capitalize font-bold tracking-wide rtl:text-3xl font-arabic dark:text-orange-400">{ourClients }</h2>
            }
            </div>
            <div className=" sm:flex sm:flex-wrap gap-x-4 gap-y-6 justify-center  max-sm:p-4 mt-2">
            {/* {service && service.clients && service.clients.map((client, index:number) => (
               <ClientCard key={client.id} client={client} locale={locale} messages={messages} />
            ))} */}
            </div>
           </div>
         </div>
         {services &&
          <div className="w-full my-16 py-8   dark:bg-[#111] ">
          <div className="w-full mx-auto ">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:text-3xl rtl:font-arabic">{ourProducts}<span className="text-orange-600">{}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic rtl:text-3xl dark:text-orange-400">{ourProducts}<span className="text-orange-600">{params.slug}</span></h2>
            }
            </div>
            <div className=" sm:flex sm:flex-wrap gap-x-4 gap-y-6 justify-center  max-sm:p-4 mt-2">
            {/* {service.products && service.products.map((product, index:number) => (
               <ProductCard key={product.id} product={product} locale={locale} messages={messages} />
            ))} */}
            </div>
           </div>
         </div>
         }


       



         {services && <div className="w-full my-16 py-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-full mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">industry of <span className="text-orange-600"></span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic dark:text-orange-400">industry<span className="text-orange-600"></span></h2>
            }
            </div>
            <div className="grid sm:grid-cols-4  max-sm:p-4 mt-2">
            {/* {service.industries && service.industries .map((industry, index:number) => (
               <IndustryCard key={industry.id} industry={industry} locale={locale} messages={messages} />
            ))} */}
            </div>
           </div>
         </div>}

         {services && <div className="w-full my-16 py-8 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8 border-b border-b-gray-300 pb-1.5">
               <h2 className="sm:text-2xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:font-arabic rtl:text-xl">{categoryWorkTitle}</h2>
               {locale === 'en' ? <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200"></p>
                :  <p className="text-2xl  text-center mt-3 mb-2 font-bold text-orange-600 font-arabic dark:text-gray-200"></p>
                }
           </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {/* {service.works && service.works.map((work) => (
               <ServiceWork serviceWork={work} locale={locale} messages={messages} category={service.name} />
            ))} */}
            </div>
           </div>
         </div>}

     </div>
  )
};
export default Serivice;