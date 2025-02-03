
import { getLocale, getMessages } from "next-intl/server";
import { ServiceForFront } from "@/app/[locale]/admin/service/utils/ServiceForFront";
import { Market, PageSection } from "@prisma/client";
import HeroSection from "@/app/_components/market/HeroSection";
import ServiceSingleCards from "@/app/_components/_services/ServiceSinglCards";
import { WorksFrontData } from "@/app/[locale]/admin/works/utils/WorksFrontData";
import Works from "@/app/_components/Works";
import GeneralHeroSect from "@/app/_components/GeneralHeroSect";
import { IndustryForFront } from "@/app/[locale]/admin/industries/_utils/IndustryForFront";
import IndustryService from "@/app/_components/industries/IndustryService";
import WorkElement from "@/app/_components/WorkElement";
import WorkCard2 from "@/app/_components/work/WorkCard2";
import { ToolSingle } from "@/app/[locale]/admin/tools/utils/ToolSingle";
import FeatureCard from "@/app/_components/features/FeatureCard";
import FeatureStoryCard from "@/app/_components/features/FeatureStoryCard";
import TechnologyServiceCard from "@/app/_components/technologies/TechnologyServiceCard";

interface Props {
  params: {
      slug: string;
      tech : string
  };
}

const Technology = async ({params}:Props) => {
  

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
   const primaryFeatures = (messages as any).Common.primaryFeatures;
   const projectDescripyion = (messages as any).Common.projectDescripyion;

 
 
    
const techData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/technologies/category/${params.slug}/${params.tech}`, {
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
 const pageWorks = await fetch(`${process.env.NEXTAUTH_URL}/api/front/works/industry/${params.slug}`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Revalidate for ISR if needed
 });


 

 const services:ServiceForFront[] = await serviceData.json();
 const works:WorksFrontData[] = await pageWorks.json();
 const tech:ToolSingle = await techData.json();

 const sectionMeta:PageSection[] = await sections.json();
 const serviceMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'services'); 
 const phaseMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'workPhase');
 const workMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'works');  
 
  return (
     <div className="w-full">
       <div className="w-full">    
               {tech &&  <GeneralHeroSect  title={tech.name!} titleAr={tech.nameAr!} subTitle={tech.description!} subTitleAr={tech.descriptionAr!}  locale={locale} messages={messages} page="industry"  image={tech.image!}/> }
        </div>
        <div className=' dark:bg-[#111] bg-gray-50  pb-6'>
           <div className="p-1 w-full sm:w-11/12 mx-auto  flex sm:py-10 py-4 justify-center rtl:font-arabic">
                {locale === 'en' ?   <div className='flex flex-col items-center'>
                    <h2 className="text-gray-800  dark:text-gray-50 text-2xl font-semibold">
                      {serviceMeta?.title}
                    </h2>
                    <p className="text-base mt-2 text-gray-700 leading-7 text-center">
                      {serviceMeta?.desc}
                    </p>
                </div>
                :
                <div className='flex flex-col items-center'>
                    <h2 className="text-gray-800  dark:text-gray-50 text-2xl font-semibold font-arabic">
                      {serviceMeta?.titleAr}
                    </h2>
                    {tech && <span className="text-xl mt-2 font-semibold text-orange-600">[ {tech.nameAr} ]</span>}
                    <p className="text-base mt-2 text-gray-700 leading-7 text-center">
                      {serviceMeta?.descAr}
                    </p>
                </div>
                  }
            </div>
            {tech && tech.services && tech.services.length> 0 && serviceMeta && 
              <div className="grid grid-cols-2 sm:grid-cols-3 sm:w-11/12 mx-auto sm:gap-y-8 gap-5  sm:gap-x-8 max-sm:p-3">
              { tech.services.map((service) => (
              <TechnologyServiceCard service={service.service} locale={locale} messages={messages} />
            )) }
            </div>
            }
        </div>

        <div className="dark:w-11/12 mx-auto mt-8 dark:bg-[#111]">
            {/* {works && workMeta &&  <Works  works = {works} meta={workMeta} /> } */}
            <div className="">
                <div className="flex items-center justify-center">
                    <span className="w-8">
                    <svg  width="100%" height="100%" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color fill-orange-500"><path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" className='fill-fuchsia-500'></path></svg>
                    </span>
                    <span className="text-fuchsia-500 font-semibold text-sm rtl:font-arabic rtl:text-sm  uppercase mx-2">{latestWork}</span>
                    <span className="w-8 rotate-180">
                    <svg  width="100%" height="100%" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color fill-orange-500"><path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" className='fill-fuchsia-500'></path></svg>
                    </span>
                </div>
                <div className="mt-2 flex justify-center">
                    {locale == 'en' ?<h2 className="text-2xl capitalize text-gray-700 dark:text-gray-200 font-semibold">
                    {workMeta && workMeta.title}
                    </h2>
                    :<h2 className="text-2xl font-arabic capitalize text-gray-700 dark:text-gray-200 font-semibold">
                        {workMeta && workMeta.titleAr}
                      </h2>
                    }
                  
                </div>
            </div>
            
            <div className='grid grid-cols w-11/12 mx-auto sm:grid-cols-4 px-0 mt-6 py-4 gap-6'>
              {works && tech.works && tech.works.map((work)=>(
                <WorkCard2 work={work.work} />
              ))
            }
             </div>
         </div>
   
         <div className="w-full my-16 py-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-11/12 mx-auto ">
            <div className="flex flex-col items-center sm:mb-8 ">
               {locale == 'en' ? <h2 className="sm:text-4xl  pb-2  text-gray-900 capitalize font-bold tracking-wide rtl:text-3xl  dark:text-orange-400">{primaryFeatures} <span className="text-orange-500">{tech.name}</span></h2>
               : <>
                 <h2 className="sm:text-4xl text-gray-900  pb-2 capitalize font-bold tracking-wide rtl:text-2xl font-arabic dark:text-orange-400">{primaryFeatures } <span className="text-orange-500">{tech.nameAr}</span></h2>
                 <p className="text-base text-gray-700 line-clamp-2 font-arabic leading-7">{tech.descriptionAr}</p>
               </> 
            }
            </div>
            <div className=" sm:flex flex-col gap-x-4 gap-y-6 justify-center  max-sm:p-4 mt-2">
              {/* <div className="w-full flex justify-center">
                <div className="w-32 h-32  bg-white p-4 rounded-full border border-dashed border-orange-500">
                    {tech.icon && tech.icon && <img className='h-full' src={tech.icon} alt={tech.name} />}
                </div>
              </div> */}
              
              <div className='grid grid-cols w-11/12 mx-auto sm:grid-cols-2 px-0 mt-1 py-4 gap-6'>
                {tech && tech.Feature.length > 0 && tech.Feature && tech.Feature.map((feature)=>(
                  <FeatureCard  feature={feature} locale={locale} messages={messages} />
                ))
              }
                </div>
            </div>
           </div>
         </div>
         {services &&
          <div className="w-full my-16 py-8 dark:bg-[#111] ">
          <div className="w-full mx-auto ">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:text-3xl rtl:font-arabic">{ourProducts}<span className="text-orange-600">{}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic rtl:text-3xl dark:text-orange-400">{ourProducts}<span className="text-orange-600">{params.slug}</span></h2>
            }
            </div>
            <div className=" sm:flex sm:flex-wrap gap-x-4 gap-y-6 justify-center  max-sm:p-4 mt-2">
                <div className='grid grid-cols w-11/12 mx-auto sm:grid-cols-3 px-0 mt-1 py-4 gap-6'>
                {tech && tech.posts.length > 0 && tech.posts && tech.posts.map((post)=>(
                  <FeatureStoryCard  post={post} locale={locale} messages={messages} />
                ))
              }
                </div>
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
export default Technology;