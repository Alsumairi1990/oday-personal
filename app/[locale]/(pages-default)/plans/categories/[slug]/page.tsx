
import { getLocale, getMessages } from "next-intl/server";

import SidQuery from "@/app/_components/SidQuery";
import { PlanCategoryForFront } from "@/app/[locale]/admin/plans/category/_utils/PlanCategoryForFront";
import CategoryPanel from "@/app/_components/plans/category/CategoryPanel";
import MainHeroSection from "@/app/_components/MainHeroSection";
import GeneralHeroSect from "@/app/_components/GeneralHeroSect";
import PlanCard from "@/app/_components/plans/PlanCard";
interface Props {
    params: {
        slug: string;
    };
  }
const planSinglePage = async ({params}:Props) => {
   const locale = await getLocale();
  const messages = await getMessages({ locale });
  const plans = (messages as any).Common.plans;
  const categories = (messages as any).Common.categories;
  const page = `${plans} / ${categories}`;

  const categoryData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/plans/categories/${params.slug}`, {
   method: 'GET',
   next: { revalidate: 3600 }, 
 });
 
const category:PlanCategoryForFront = await categoryData.json();
 

  return (
   <>
           <div className="">
            {category && 
            <GeneralHeroSect title = {category.title!}
                             titleAr = {category.titleAr!} 
                             subTitle = {category.subTitle!} 
                             subTitleAr = {category.subTitleAr!} 
                             locale = {locale}
                             messages = {messages}
                             page = {page}  
                             image = {category.image!}
                               />
            }
           </div>
            
           <div className="w-11.6/12 my-10 mx-auto grid sm:grid-cols-75/25">
              <div className="grid sm:grid-cols-3 gap-x-6">
                {category && category.plans && 
                   category.plans.map((plan) => (
                    <PlanCard  plan = {plan} locale = {locale} messages = {messages}  />
                   ))
                }
                {/* <CategoryPanel categories={categories} locale={locale} messages={messages}  /> */}
              </div>
              {/* <div className="p-2 h-fit">
                  <div className="" >
                  <SidQuery  />
                  </div>
                  
              </div> */}
           </div>
     </>
  )
};
export default planSinglePage;