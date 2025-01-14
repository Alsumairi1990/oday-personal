import ServiceHero from "@/app/_components/_services/ServiceHero";
import { ServiceInt1 } from "@/app/models/ServiceInt";
import ProcessPhase from "@/app/_components/_services/ProcessPhase";

import { PhaseInt } from "@/app/models/PhaseInt";
import ServiceOffer from "@/app/_components/_services/ServiceOffer";
import { fservices } from '@/app/utils/ServicesData';
import ServiceWork from "@/app/_components/_services/ServiceWork";
import { getLocale, getMessages } from "next-intl/server";
import { gethaseMeta, getServiceBySlug, getServiceCatMeta, getWorkMeta } from "@/app/[locale]/admin/common/_actions/FrontActions";
import IndustryCard from "@/app/_components/IndustryCard";
import ClientCard from "@/app/_components/clinets/ClientCard";
import ProductCard from "@/app/_components/products/ProductCard";
import { ServiceForFront } from "@/app/[locale]/admin/service/utils/ServiceForFront";
import { PageSection, ServiceFeature } from "@prisma/client";
import GeneralHeroSect from "@/app/_components/GeneralHeroSect";
import TechCard1 from "@/app/_components/technologies/TechCard1";
import ServiceTechCard from "@/app/_components/_services/ServiceTechCard";
import { default as CustomServiceFeature } from "@/app/_components/_services/ServicesFeature1";


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
   const discussProject = (messages as any).Common.discussProject;

 
 
 const serviceData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service/${params.slug}`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Optional revalidation for ISR (30 minutes)
 });
 const sections = await fetch(`${process.env.NEXTAUTH_URL}/api/front/meta/sections`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Revalidate for ISR if needed
 });
 const service:ServiceForFront = await serviceData.json();
 const sectionMeta:PageSection[] = await sections.json();
 const phaseMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'workPhase');
 const workMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'works');  
 const techMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'technologies');  





 


  return (
     <div className="w-full rtl:font-arabic">
       <div className="w-full ">    
               {/* {service &&  <ServiceHero service={service} /> } */}
               {service &&  <GeneralHeroSect  title={service.name!}
                                              titleAr={service.nameAr!} 
                                              subTitle={service.description!} 
                                              subTitleAr={service.descriptionAr!}  
                                              locale={locale} messages={messages} 
                                              page={service.name} pageAr={service.nameAr!}  
                                              image={service.image!}/> }
         </div>

        {/* <div className="py-4 px-8 pt-0 w-full">
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
        </div> */}

<div className="w-full mb-16 py-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-11.4/12 sm:w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">{feature1}<span className="text-orange-600">{service.name}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic dark:text-orange-400">{feature1}<span className="text-orange-600">{service.nameAr}</span></h2>
            }
            </div>
            <div className="grid sm:grid-cols-4 gap-6  mt-2">
            {service.features && service.features.length > 0 && service.features.map((feature, index:number) => (
               <CustomServiceFeature key={service.id} servicefeature={feature} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>


        {service &&
          <div className="w-full  mx-auto my-10 py-6 sm:py-12 bg-[#202529]  dark:bg-[#111] ">
            <div className="w-11/12 sm:flex sm:flex-wrap  mx-auto ">
              <div className="p-1 sm:flex-40 w-full mb-3 flex mt-4 justify-center">
               {locale === 'en' ? <div className='flex flex-col items-center'>
                     <h2 className="text-gray-800  dark:text-gray-50 text-2xl font-semibold ">
                     {techMeta?.title}
                     </h2>
                     <p className="text-base mt-2 text-gray-700 text-center">
                     {techMeta?.desc}
                     </p>
               </div>
               :
               <div className='flex flex-col '>
                     <div className="flex items-center mb-3 ">
                        <span className="h-[3px] w-20 ml-2 bg-[#EE9143] inline-block"></span>
                        <p className="text-md sm:text-lg font-semibold text-gray-100 ">{service.nameAr} </p>
                     </div>
                     <h2 className="text-gray-50 sm:leading-9  dark:text-gray-50 text-xl sm:text-2xl font-semibold ">
                     {techMeta?.titleAr}
                     </h2>
                     <p className="text-sm mt-2 text-gray-100 leading-7 ">
                     {techMeta?.descAr}
                     </p>
                     <p className="text-sm  w-fit border my-3 sm:mt-5 text-orange-400 border-[#EE9143] rounded-2xl sm:rounded-3xl sm:px-4 px-3 py-1.5 sm:py-3 text-center">{discussProject}</p>
               </div>
                  }
               </div>
               <div className=" grid sm:flex-60 grid-cols-3 sm:grid-cols-4 gap-x-4 gap-y-6 sm:gap-x-6 max-sm:p-4 mt-2 sm:rtl:pr-8">
               {service.tools && service.tools.slice(0, 8).map((tool, index) => (
                  <ServiceTechCard 
                     
                     tool={tool.tool} 
                     locale={locale} 
                     messages={messages} 
                  />
                  ))}
               </div>
            </div>
         </div>
         }


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
            <div className=" sm:flex grid grid-cols-2 sm:flex-wrap gap-x-4 gap-y-6 justify-center  max-sm:p-4 mt-2">
            {service && service.clients && service.clients.map((client, index:number) => (
               <ClientCard key={client.id} client={client} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>
         {service &&
          <div className="w-full sm:w-11/12 mx-auto my-16 py-8   dark:bg-[#111] ">
          <div className="w-full mx-auto ">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:text-3xl rtl:font-arabic">{ourProducts}<span className="text-orange-600">{service.name}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic rtl:text-3xl dark:text-orange-400">{ourProducts}<span className="text-orange-600">{service.nameAr}</span></h2>
            }
            </div>
            <div className=" grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-6  max-sm:p-4 mt-2">
            {service.products && service.products.slice(0, 8).map((product, index) => (
               <ProductCard 
                  key={product.id} 
                  product={product} 
                  locale={locale} 
                  messages={messages} 
               />
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



         {/* {service && <div className="w-full my-16 py-8  bg-gray-100 dark:bg-[#111] ">
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
         </div>} */}

         {service && <div className="w-full my-16 py-8 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8 border-b border-b-gray-300 pb-1.5">
               <h2 className="sm:text-2xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:font-arabic rtl:text-xl">{categoryWorkTitle}</h2>
               {locale === 'en' ? <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">{service.name}</p>
                :  <p className="text-2xl  text-center mt-3 mb-2 font-bold text-orange-600 font-arabic dark:text-gray-200">( {service.nameAr} )</p>
                }
           </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4 ">
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