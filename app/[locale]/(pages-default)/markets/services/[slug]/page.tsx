import { getLocale, getMessages } from "next-intl/server";
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

const ServiceMarketPage = async ({params}:Props) => {
   const locale= await getLocale();
   const messages = await getMessages({ locale });
 
 const marketData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service/location/${params.slug}`, {
      method: 'GET',
      next: { revalidate: 1800 }, 
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
       {/* <div className="w-full mb-16">    
               {market &&  <HeroSection  market={market} locale={locale} messages={messages} /> }
         </div> */}




        <div className='gray:bg-[#111]"'>{services.length}---------------------------
            {services.length> 0 && serviceMeta && <ServiceSingleCards services={services} meta={serviceMeta} />}
        </div>

        {/* <div className="dark:w-11/12 mx-auto  dark:bg-[#111]">
            {works && workMeta &&  <Works  works = {works} meta={workMeta} /> }
         </div> */}

     </div>
  )
};
export default ServiceMarketPage;