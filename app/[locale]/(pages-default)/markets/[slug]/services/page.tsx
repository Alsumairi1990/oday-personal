import { getLocale, getMessages } from "next-intl/server";
import { ServiceForFront } from "@/app/[locale]/admin/service/utils/ServiceForFront";
import { Market, PageSection } from "@prisma/client";
import HeroSection from "@/app/_components/market/HeroSection";
import ServiceSingleCards from "@/app/_components/_services/ServiceSinglCards";
import { WorksFrontData } from "@/app/[locale]/admin/works/utils/WorksFrontData";
import Works from "@/app/_components/Works";
import MarketHero from "@/app/_components/market/MarketHero";

interface Props {
  params: {
      slug: string;
  };
}

const SeriviceMarketPage = async ({params}:Props) => {
   const locale= await getLocale();
   const messages = await getMessages({ locale });
 
 const marketData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/markets/${params.slug}`, {
      method: 'GET',
      next: { revalidate: 1800 }, 
    });
    const page = "market-services"
    const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
      method: 'GET',
      next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
    });
 const serviceData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service/location/${params.slug}`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Optional revalidation for ISR (30 minutes)
 });
 const sections = await fetch(`${process.env.NEXTAUTH_URL}/api/front/meta/sections`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Revalidate for ISR if needed
 });



 

 const market:Market = await marketData.json();
//  const service:ServiceForFront = await serviceData.json();
 const services:ServiceForFront[] = await serviceData.json();
 const heroData = await hero.json();

 const sectionMeta:PageSection[] = await sections.json();
 const serviceMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'services'); 
 const phaseMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'workPhase');
 const workMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'works');  
 
 const pageName = (messages as any).Common.servicesPage;

 


  return (
     <div className="w-full">
      <div className="w-full pb-16">  
        
            {heroData && <MarketHero  heroData={heroData} locale={locale} messages={messages} page={pageName} market={market}/> }
       </div>
        <div className='gray:bg-[#111]"'>{services.length}---------------------------
            {services.length> 0 && serviceMeta && <ServiceSingleCards services={services} meta={serviceMeta} />}
        </div>

        {/* <div className="dark:w-11/12 mx-auto  dark:bg-[#111]">
            {works && workMeta &&  <Works  works = {works} meta={workMeta} /> }
         </div> */}

     </div>
  )
};
export default SeriviceMarketPage;