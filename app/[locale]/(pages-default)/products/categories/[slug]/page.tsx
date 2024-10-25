
import { getLocale, getMessages } from "next-intl/server";
import ProductCardModels from "@/app/_components/products/ProductCardModels";
import ProductHero from "@/app/_components/products/ProductHero";
import { HeroSection } from "@prisma/client";
import { ProductForFront } from "@/app/[locale]/admin/products/_utils/ProductForFront";

interface Props {
   params: {
       slug: string;
   };
 }
const ServiceCategory = async ({params}:Props) => {
   
   const locale = await getLocale();
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
  const productPage = (messages as any).Common.productsPage; 

  
 
 const productsPage = await fetch(`${process.env.NEXTAUTH_URL}/api/front/products/categories/${params.slug}`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Revalidate for ISR if needed
 });
 const page = 'products'
  const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
  });
  const heroData:HeroSection = await hero.json();

 
 const products:ProductForFront[] = await productsPage.json();


  return (
     <div className="w-full">
        {/* <CategoryHero category={category} locale={locale} messages={messages} /> */}
        
        <div className="hed">
           {heroData && <ProductHero heroData={heroData} locale={locale} messages={messages} page={productPage} /> }
        </div>

         <div className="w-full my-16 py-8   dark:bg-[#111] ">
          <div className="w-11.7/12 mx-auto ">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:text-3xl rtl:font-arabic">{ourProducts}<span className="text-orange-600">{}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic rtl:text-3xl dark:text-orange-400">{ourProducts}<span className="text-orange-600">{}</span></h2>
            }
            </div>
            <div className=" sm:flex sm:flex-wrap gap-x-4 gap-y-6 justify-center  max-sm:p-4 mt-2">
            {products && products.map((product, index:number) => (
               <ProductCardModels key={product.id} product={product} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
         </div>
    
     </div>
  )
};
export default ServiceCategory;