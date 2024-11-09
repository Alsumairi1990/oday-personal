
import { getLocale, getMessages } from "next-intl/server";

import SidQuery from "@/app/_components/SidQuery";
import { PlanCategoryForFront } from "@/app/[locale]/admin/plans/category/_utils/PlanCategoryForFront";
import MainHeroSection from "@/app/_components/MainHeroSection";
import CategoryPanel from "@/app/_components/package/category/CategoryPanel";
import { PackageCatForFront } from "@/app/[locale]/admin/packages/_utils/PackageCatForFront";

const Categories = async () => {
   const locale = await getLocale();
  const messages = await getMessages({ locale });
  const feature1 = (messages as any).Common.featureTitle1;
  const feature2 = (messages as any).Common.featureTitle1;

  const categoryData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/packages/categories`, {
   method: 'GET',
   next: { revalidate: 3600 }, 
 });
 const page = 'planCategories';
 const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
   method: 'GET',
   next: { revalidate: 3600 }, 
 });
 
const categories:PackageCatForFront[] = await categoryData.json();
 const heroData = await hero.json();
 

  return (
   <>
           <div className="">
            <MainHeroSection heroData={heroData} locale="locale" messages={messages}  />
           </div>
           <div className="w-11.6/12 mx-auto grid sm:grid-cols-75/25">
              <div >
                <CategoryPanel categories={categories} locale={locale} messages={messages}  />
              </div>
              <div className="p-2 h-fit">
                  <div className="" >
                  <SidQuery  />
                  </div>
                  
              </div>
           </div>
     </>
  )
};
export default Categories;