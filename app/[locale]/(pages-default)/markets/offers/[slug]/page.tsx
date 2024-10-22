import { getLocale, getMessages } from "next-intl/server";
import { ServiceForFront } from "@/app/[locale]/admin/service/utils/ServiceForFront";
import { Market, Offer, PageSection } from "@prisma/client";
import HeroSection from "@/app/_components/market/HeroSection";
import ServiceSingleCards from "@/app/_components/_services/ServiceSinglCards";
import { WorksFrontData } from "@/app/[locale]/admin/works/utils/WorksFrontData";
import { ProductForFront } from "@/app/[locale]/admin/products/_utils/ProductForFront";
import ProductMarket from "@/app/_components/products/ProductMarket";
import { WorkSingleData } from "@/app/[locale]/admin/works/utils/WorkSingleData";
import MarketWorkCard from "@/app/_components/work/MarketWorkCard";
import Works from "@/app/_components/work/Works";
import MarketOfferCard from "@/app/_components/offer/MarketOfferCard";
import Hero from "@/app/_components/HeroSect";
import GeneralHero from "@/app/_components/GeneralHero";
import MarketHero from "@/app/_components/market/MarketHero";

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

 const marketData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/markets/${params.slug}`, {
  method: 'GET',
  next: { revalidate: 1800 }, // Optional revalidation for ISR (30 minutes)
});

 const page = 'MarketOffers'
 const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
 });

 const offersPage = await fetch(`${process.env.NEXTAUTH_URL}/api/front/offers/location/${params.slug}`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
  });
 const offersData:Offer[] = await offersPage.json();

 const market:Market = await marketData.json();
 const heroData = await hero.json();
 const sectionMeta:PageSection[] = await sections.json();
 const serviceMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'services'); 
 const phaseMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'workPhase');
 const workMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'works');  
 
//  const pageName = params.slug.replace(/-/g, ' ');
 const pageName = (messages as any).Common.markets;

  return (
     <div className="w-full">
       <div className="w-full ">  
            {heroData && <MarketHero    heroData={heroData} locale={locale} messages={messages} page={pageName} market={market}/> }
       </div>
         <div className="dark:w-11/12 mx-auto  mt-10 dark:bg-[rgb(17,17,17)]">
            <div className="grid sm:grid-cols-4">
            {offersData.length > 0  && 
             offersData.map((offer) => (
                <MarketOfferCard offer = {offer} locale={locale} messages={messages} />
             ))  }
             </div>
         </div> 

     </div>
  )
};
export default ServiceMarketPage;