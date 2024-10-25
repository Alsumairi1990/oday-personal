
import { getLocale, getMessages } from "next-intl/server";
import ProductCardModels from "@/app/_components/products/ProductCardModels";
import ProductHero from "@/app/_components/products/ProductHero";
import { HeroSection } from "@prisma/client";
import { ProductForFront } from "@/app/[locale]/admin/products/_utils/ProductForFront";
import ProductSingleHero from "@/app/_components/products/ProductSingleHero";

interface Props {
   params: {
       name: string;
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

  
 
 const productData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/products/${params.name}`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Revalidate for ISR if needed
 });
 

 
 const product:ProductForFront = await productData.json();
 const page = 'products'

  return (
     <div className="w-full">
        {/* <CategoryHero category={category} locale={locale} messages={messages} /> */}
        
        <div className="hed">
           {product.name !== '' && <ProductSingleHero product={product} locale={locale} messages={messages} page={page} /> }
        </div>
  {product.name}----{params.name}
         <div className="w-full my-16 py-8   dark:bg-[#111] ">
          <div className="w-11.7/12 mx-auto ">
            <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400 rtl:text-3xl rtl:font-arabic">{ourProducts}<span className="text-orange-600">{}</span>{feature2}</h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic rtl:text-3xl dark:text-orange-400">{ourProducts}<span className="text-orange-600">{}</span></h2>
            }
            </div>
           
           </div>
         </div>
    
     </div>
  )
};
export default ServiceCategory;