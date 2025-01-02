
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
 const pageWorks = await fetch(`${process.env.NEXTAUTH_URL}/api/front/works/home`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Revalidate for ISR if needed
 });


 

 const market:Market = await marketData.json();
 const services:ServiceForFront[] = await serviceData.json();
 const works:WorksFrontData[] = await pageWorks.json();
 const industry:IndustryForFront = await industryData.json();

 const sectionMeta:PageSection[] = await sections.json();
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
            {industry && industry.services.length> 0 && serviceMeta && 
              <div className="grid grid-cols-2 sm:grid-cols-5 sm:w-11/12 mx-auto sm:gap-y-8 gap-5 sm:gap-x-8 max-sm:p-3">
              { industry.services.map((service) => (
              <IndustryService service={service} locale={locale} messages={messages} />
            )) }
            </div>
            }
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