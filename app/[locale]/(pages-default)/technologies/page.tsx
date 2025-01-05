
import { getLocale, getMessages } from "next-intl/server";
import { ServiceForFront } from "@/app/[locale]/admin/service/utils/ServiceForFront";
import { Market, PageSection, Tool } from "@prisma/client";
import HeroSection from "@/app/_components/market/HeroSection";
import ServiceSingleCards from "@/app/_components/_services/ServiceSinglCards";
import { WorksFrontData } from "@/app/[locale]/admin/works/utils/WorksFrontData";
import Works from "@/app/_components/Works";
import GeneralHeroSect from "@/app/_components/GeneralHeroSect";
import { IndustryForFront } from "@/app/[locale]/admin/industries/_utils/IndustryForFront";
import IndustryService from "@/app/_components/industries/IndustryService";
import WorkElement from "@/app/_components/WorkElement";
import WorkCard2 from "@/app/_components/work/WorkCard2";
import TechPanel from "@/app/_components/technologies/TechPanel";
import { CategoryWithTools } from "../../admin/category/util/CategoryWithTools";

interface Props {
  params: {
      slug: string;
      tech : string
  };
}

const Technologies = async ({params}:Props) => {
  

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
    
const industryData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/industries/${params.slug}`, {
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
 const toolsCategory = await fetch(`${process.env.NEXTAUTH_URL}/api/front/technologies`, {
    method: 'GET',
    next: { revalidate: 3600 }, 
  });
  const toolsCategories = await fetch(`${process.env.NEXTAUTH_URL}/api/front/technologies/categories`, {
    method: 'GET',
    next: { revalidate: 3600 }, 
  });

 
 const toolsCategorires:CategoryWithTools[] = await toolsCategories.json();
 const market:Market = await marketData.json();
 const services:ServiceForFront[] = await serviceData.json();
 const works:WorksFrontData[] = await pageWorks.json();
 const industry:IndustryForFront = await industryData.json();
  const tools:Tool[] = await toolsCategory.json(); 
 const sectionMeta:PageSection[] = await sections.json();
     const techMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'technologies');  
 
 const serviceMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'services'); 
 const phaseMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'workPhase');
 const workMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'works');  
 





 


  return (
     <div className="w-full">
       <div className="w-full">    
               {industry &&  <GeneralHeroSect  title={industry.title!} titleAr={industry.titleAr!} subTitle={industry.description!} subTitleAr={industry.descriptionAr!}  locale={locale} messages={messages} page="industry"  image={industry.image!}/> }
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
                    {industry && <span className="text-xl mt-2 font-semibold text-orange-600">[ {industry.nameAr} ]</span>}
                    <p className="text-base mt-2 text-gray-700 leading-7 text-center">
                      {serviceMeta?.descAr}
                    </p>
                </div>
                  }
            </div>
            {industry && industry.services && industry.services.length> 0 && serviceMeta && 
              <div className="grid grid-cols-2 sm:grid-cols-5 sm:w-11/12 mx-auto sm:gap-y-8 gap-5 sm:gap-x-8 max-sm:p-3">
              { industry.services.map((service) => (
              <IndustryService service={service} locale={locale} messages={messages} />
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
              {works && works.map((work)=>(
                <WorkCard2 work={work} />
              ))
            }
    </div>
         </div>
   
         <div className="w-full mx-auto bg-gray-100 my-10 dark:bg-[#111]">
       <div className="p-1 w-full flex mt-8 justify-center">
        {locale === 'en' ? <h2 className="text-gray-800">
          {techMeta?.title}
        </h2>
        :
        <div className='flex flex-col items-center'>
            <h2 className="text-gray-800  dark:text-gray-50 text-2xl font-semibold font-arabic">
              {techMeta?.titleAr}
            </h2>
            <p className="text-base mt-2 text-gray-700 leading-7 text-center">
              {techMeta?.descAr}
            </p>
        </div>
          }
       </div>
       {tools && <TechPanel categories={toolsCategorires} locale = {locale} messages={messages} /> }
      </div>

      
       

       



        


     </div>
  )
};
export default Technologies;