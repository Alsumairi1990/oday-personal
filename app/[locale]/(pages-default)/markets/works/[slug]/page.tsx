import { getLocale, getMessages } from "next-intl/server";
import { ServiceForFront } from "@/app/[locale]/admin/service/utils/ServiceForFront";
import { Market, PageSection } from "@prisma/client";
import HeroSection from "@/app/_components/market/HeroSection";
import ServiceSingleCards from "@/app/_components/_services/ServiceSinglCards";
import { WorksFrontData } from "@/app/[locale]/admin/works/utils/WorksFrontData";
import { ProductForFront } from "@/app/[locale]/admin/products/_utils/ProductForFront";
import ProductMarket from "@/app/_components/products/ProductMarket";
import { WorkSingleData } from "@/app/[locale]/admin/works/utils/WorkSingleData";
import MarketWorkCard from "@/app/_components/work/MarketWorkCard";
import Works from "@/app/_components/work/Works";

interface Props {
  params: {
      slug: string;
  };
}

const ServiceMarketPage = async ({params}:Props) => {
   const locale= await getLocale();
   const messages = await getMessages({ locale });
 const sections = await fetch(`${process.env.NEXTAUTH_URL}/api/front/meta/sections`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Revalidate for ISR if needed
 });
 const worksPage = await fetch(`${process.env.NEXTAUTH_URL}/api/front/works/location/${params.slug}`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
  });
  const worksData:WorksFrontData[] = await worksPage.json();


 


 const sectionMeta:PageSection[] = await sections.json();
 const serviceMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'services'); 
 const phaseMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'workPhase');
 const workMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'works');  
 





 


  return (
     <div className="w-full mt-10 sm:mt-16">

         <div className="dark:w-11/12 mx-auto  dark:bg-[rgb(17,17,17)]">
            {worksData && workMeta &&  <Works works = {worksData} meta={workMeta} /> }
         </div> 

     </div>
  )
};
export default ServiceMarketPage;