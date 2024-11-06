
import { getLocale, getMessages } from "next-intl/server";
import { PlanCategoryForFront } from "@/app/[locale]/admin/plans/category/_utils/PlanCategoryForFront";
import GeneralHeroSect from "@/app/_components/GeneralHeroSect";
import PlanCard from "@/app/_components/plans/PlanCard";
interface Props {
    params: {
        slug: string;
    };
  }
const planCategorySinglePage = async ({params}:Props) => {
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
           <div className="py-8 flex w-11.4/12 mx-auto flex-col justify-center">
            {locale === 'en' ? <div className="flex flex-col justify-center">
              <h2 className="text-xl font-semibold ">
                {category.title}
              </h2>
              <p className="text-md">{category.description}</p>
            </div>:
            <div className="flex font-arabic justify-center flex-col">
              <h2 className="text-xl mb-1 font-semibold ">
                {category.titleAr}
              </h2>
              <p className="text-md leading-7">{category.descriptionAr}</p>
            </div>
            }
           </div>
            
           <div className="w-11/12 my-10 mx-auto">
              <div className="grid sm:grid-cols-3 sm:gap-x-12 max-sm:gap-y-6  w-full">
                {params.slug}rr
                {category && category.plans && 
                   category.plans.map((plan) => (
                    <PlanCard  plan = {plan} locale = {locale} messages = {messages} categorySlug={params.slug}  />
                   ))
                }
              </div>

           </div>
     </>
  )
};
export default planCategorySinglePage;