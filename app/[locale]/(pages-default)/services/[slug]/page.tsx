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
import { getLocale, getMessages } from "next-intl/server";
import { gethaseMeta, getServiceBySlug, getServiceCatMeta, getWorkMeta } from "@/app/[locale]/admin/common/_actions/FrontActions";
import IndustryCard from "@/app/_components/IndustryCard";
import ClientCard from "@/app/_components/clinets/ClientCard";
import ProductCard from "@/app/_components/products/ProductCard";
import { ServiceForFront } from "@/app/[locale]/admin/service/utils/ServiceForFront";
import { PageSection } from "@prisma/client";

interface Props {
  params: {
      slug: string;
  };
}



const Serivice = async ({params}:Props) => {
   const imagePath = '/images/777.png';
   const imagePath1 = '/images/curve.png';
   const imagePath2 = '/images/service2.png';

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
   // Variable declarations
 let service:ServiceForFront;

 let phaseMeta:PageSection;
 let workMeta:PageSection;
 
 
 try {
   // Execute queries in parallel using Promise.all
   [
     service,
     phaseMeta,
     workMeta,
   ] = await Promise.all([
     getServiceBySlug(params.slug),
     gethaseMeta(),
     getWorkMeta(),
   ]);
 } catch (error) {
   console.error("Failed to fetch service meta:", error);
   return (
     <div className="error-message">
       <h2>Failed to load services</h2>
       <p>There was an issue loading the services. Please try again later.</p>
     </div>
   );
 }

 


  return (
     <div className="w-full">
       <div className="w-full mb-16">    
               {service &&  <ServiceHero service={service} /> }
         </div>

        <div className="py-4 px-8 pt-0 w-full">
           <div className="flex ">
            <div className="flex-35 p-2 pt-0 ">
               <div className="flex flex-wrap  justify-between">
                 <span className="text-black-100 uppercase text-sm mb-2">KNOW US BETTER</span>
               </div>
               <h2 className="text-3xl font-bold text-gray-">What Company Do?</h2>
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
        </div>


        <div className="w-full my-16 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">How it works</h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
            </div>
            <div className="flex flex-wrap gap-6 max-sm:p-4">
            {/* {phases.map((phase, index:number) => (
               <ProcessPhase key={phase.id} phase={phase} index={index} />
            ))} */}
            </div>
           </div>
         </div>


         {/* <div className="w-full my-16 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Our Comprehensive Range of Logo Design Services </h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {service.phases.map((phase, index:number) => (
               <ServiceOffer key={phase.id} serviceOffer={phase}  />
            ))}
            </div>
           </div>
         </div> */}



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

{/* 
        <div className="w-full my-16 py-8  bg-gray-100 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Why Choose our Logo Design company Services? </h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">We have an incredibly talented and skilled team of logo designers who ensure quality Logo design services. Let's know some more reasons that make us the top Logo design service company to hire -</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {fservices.map((service, index:number) => (
               <ServiceFeature key={service.id} servicefeature={service}  />
            ))}
            </div>
           </div>
         </div> */}

 
         <div className="w-full my-16 py-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col items-center sm:mb-8 ">
               {locale == 'en' ? <h2 className="sm:text-4xl  border-b-[0.3rem] pb-2 border-b-blue-400 text-gray-900 capitalize font-bold tracking-wide rtl:text-3xl  dark:text-orange-400">{ourClients}</h2>
               :  <h2 className="sm:text-4xl text-gray-900  border-b-[0.3rem] pb-2 border-b-blue-400 capitalize font-bold tracking-wide rtl:text-3xl font-arabic dark:text-orange-400">{ourClients }</h2>
            }
            </div>
            <div className=" sm:flex sm:flex-wrap gap-x-4 gap-y-6 justify-center  max-sm:p-4 mt-2">
            {service && service.clients && service.clients.map((client, index:number) => (
               <ClientCard key={client.id} client={client} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>
         {service &&
          <div className="w-full my-16 py-8   dark:bg-[#111] ">
          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:text-3xl rtl:font-arabic">{ourProducts}<span className="text-orange-600">{service.name}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic rtl:text-3xl dark:text-orange-400">{ourProducts}<span className="text-orange-600">{service.nameAr}</span></h2>
            }
            </div>
            <div className=" sm:flex sm:flex-wrap gap-x-4 gap-y-6 justify-center  max-sm:p-4 mt-2">
            {service.products && service.products.map((product, index:number) => (
               <ProductCard key={product.id} product={product} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>
         }


         {service && <div className="w-full my-16 py-8  dark:bg-[#111] ">
          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl rtl:text-3xl text-gray-900 capitalize font-bold rtl:font-arabic rtl:mb-4  tracking-wide dark:text-orange-400">{workProcess}</h2>
               <span className="w-14 h-1 bg-blue-500 mb-2"></span>
            </div>
            <div className=" sm:flex sm:flex-wrap gap-x-6 gap-y-6 justify-center  max-sm:p-4 mt-2">
            {service.phases.map((phase) => (
               <ProcessPhase index={phase.id} phase={phase} locale={locale} messages={messages} phaseSize={service.phases.length} />
               ))}
            </div>
           </div>
         </div>
          }



         {service && <div className="w-full my-16 py-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-full mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">industry of <span className="text-orange-600">{service.name}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic dark:text-orange-400">industry<span className="text-orange-600">{service.nameAr}</span></h2>
            }
            </div>
            <div className="grid sm:grid-cols-4  max-sm:p-4 mt-2">
            {service.industries && service.industries .map((industry, index:number) => (
               <IndustryCard key={industry.id} industry={industry} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>}

         {service && <div className="w-full my-16 py-8 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8 border-b border-b-gray-300 pb-1.5">
               <h2 className="sm:text-2xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:font-arabic rtl:text-xl">{categoryWorkTitle}</h2>
               {locale === 'en' ? <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">{service.name}</p>
                :  <p className="text-2xl  text-center mt-3 mb-2 font-bold text-orange-600 font-arabic dark:text-gray-200">( {service.nameAr} )</p>
                }
           </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {service.works && service.works.map((work) => (
               <ServiceWork serviceWork={work} locale={locale} messages={messages} category={service.name} />
            ))}
            </div>
           </div>
         </div>}

     </div>
  )
};
export default Serivice;