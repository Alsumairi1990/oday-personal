import { getLocale, getMessages } from "next-intl/server";
import { ServiceForFront } from "@/app/[locale]/admin/service/utils/ServiceForFront";
import { Market, PageSection } from "@prisma/client";
import HeroSection from "@/app/_components/market/HeroSection";
import ServiceSingleCards from "@/app/_components/_services/ServiceSinglCards";
import { WorksFrontData } from "@/app/[locale]/admin/works/utils/WorksFrontData";
import Works from "@/app/_components/Works";
import { ProductForFront } from "@/app/[locale]/admin/products/_utils/ProductForFront";
import ProductMarket from "@/app/_components/products/ProductMarket";
import MarketHero from "@/app/_components/market/MarketHero";

interface Props {
  params: {
      slug: string;
  };
}

const ServiceMarketPage = async ({params}:Props) => {
   const locale= await getLocale();
   const messages = await getMessages({ locale });
 
   const marketData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/markets/${params.slug}`, {
    method: 'GET',
    next: { revalidate: 1800 }, // Optional revalidation for ISR (30 minutes)
  });
  

 const productData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/products/location/${params.slug}`, {
    method: 'GET',
    next: { revalidate: 1800 }, // Optional revalidation for ISR (30 minutes)
  });


 const sections = await fetch(`${process.env.NEXTAUTH_URL}/api/front/meta/sections`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Revalidate for ISR if needed
 });


 const page = "market-products"
    const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
      method: 'GET',
      next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
    });
 

 const market:Market = await marketData.json();

 const products:ProductForFront[] = await productData.json();
 const heroData = await hero.json();

 
 const pageName = (messages as any).Common.productsPage;





 


  return (
     <div className="w-full ">
         <div className="w-full pb-16">  
            {heroData && market && <MarketHero  heroData={heroData} locale={locale} messages={messages} page={pageName} market={market}/> }
       </div>

        <div className="dark:w-11/12 mx-auto  dark:bg-[#111]">
            {products &&  <ProductMarket  products = {products} locale={locale} messages={messages} /> }
         </div>
    

     </div>
  )
};
export default ServiceMarketPage;