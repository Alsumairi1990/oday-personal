
import { getLocale, getMessages } from "next-intl/server";

import CategoryPanel from "@/app/_components/_services/category/CategoryPanel";
import SidQuery from "@/app/_components/SidQuery";
import {  Service } from "@prisma/client";
import { CategoryFrontSingle } from "@/app/[locale]/admin/category/util/CategoryFrontSingle";
import GeneralHeroSect from "@/app/_components/GeneralHeroSect";


interface Props {
  params: {
      slug: string;
  };
}

const Categories = async ({params}:Props) => {
  
   const locale = await getLocale();
  const messages = await getMessages({ locale });
  

  
  const categoryData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/categories`, {
   method: 'GET',
   next: { revalidate: 3600 }, 
 });
 const page = 'categoriesPage';
 const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
   method: 'GET',
   next: { revalidate: 1800 }, // Optional revalidation for ISR (30 minutes)
 });
 const servicesData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Revalidate for ISR if needed
 });
 const categories:CategoryFrontSingle[] = await categoryData.json();
 const heroData = await hero.json();
 const services:Service[] = await servicesData.json();



  
   
   

  return (
   <>
   <div className="w-full">
      {/* {heroData && categories && services  && <Hero heroData={heroData} services={services} categories={categories} /> } */}

      <div className="w-full ">    
               {heroData &&  <GeneralHeroSect  title={heroData.name!}
                                              titleAr={heroData.nameAr!} 
                                              subTitle={heroData.description!} 
                                              subTitleAr={heroData.descriptionAr!}  
                                              locale={locale} messages={messages} 
                                              page={heroData.name} pageAr={heroData.nameAr!}  
                                              image={heroData.image!}/> }
         </div>
   </div>
     <div className="w-11.8/12 mx-auto grid sm:grid-cols-75/25">
        {/* <CategoryHero category={category} locale={locale} messages={messages} /> */}
               
          <div className="">
            { locale === 'en' ? <div className="flex flex-col items-center sm:mb-8">
               {/* <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">{serviceSecTitle} <span className="text-orange-600"> </span> </h2> */}
               {/* <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">
               {category.description && category.description.split(' ').slice(0, 35).join(' ') + (category.description.split(' ').length > 35 ? '...' : '')}
               </p> */}
            </div>
            :  <div className="flex flex-col items-center sm:mb-8 font-arabic">
                  {/* <h2 className="sm:text-3xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">{serviceSecTitle} <span className="text-orange-600"> </span>  </h2> */}
                  {/* <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">
                     {category.descriptionAr && category.descriptionAr.split(' ').slice(0, 35).join(' ') + (category.descriptionAr.split(' ').length > 35 ? '...' : '')}

                     </p> */}
               </div>
            }
            {/* <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {services.map((service, index:number) => (
               <ServiceOffer key={service.id} serviceOffer={service}  />
            ))}

            </div> */}
            <CategoryPanel categories={categories} locale={locale} messages={messages}  />
           </div>
         

         <div className="p-2 h-fit">
            <div className="sm:pt-4">
            <SidQuery  />
            </div>
            
         </div>

     </div>
     </>
  )
};
export default Categories;