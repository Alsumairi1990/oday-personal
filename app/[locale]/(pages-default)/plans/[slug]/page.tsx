
import { getLocale, getMessages } from "next-intl/server";
import { PlanCategoryForFront } from "@/app/[locale]/admin/plans/category/_utils/PlanCategoryForFront";
import GeneralHeroSect from "@/app/_components/GeneralHeroSect";
import PlanCard from "@/app/_components/plans/PlanCard";
import { PlanForFront } from "@/app/[locale]/admin/plans/_utils/PlanForFront";
import PlanHeroSect from "@/app/_components/plans/PlanHeroSect";
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
  const page = `${plans}`;
  const planData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/plans/${params.slug}`, {
   method: 'GET',
   next: { revalidate: 3600 }, 
 });
  const plan:PlanForFront = await planData.json();
 

  return (
   <>
          
            {plan && 
                 <PlanHeroSect plan = {plan}
                    locale = {locale}
                    messages = {messages}
                    page = {page}  
                      />
            }
           
           <div className="my-14">
            <div className="flex justify-center">

            </div>
           </div>
          
           {/* <div className="w-11/12 my-10 mx-auto">
              <div className="grid sm:grid-cols-3 sm:gap-x-12 max-sm:gap-y-6  w-full">
                {category && category.plans && 
                   category.plans.map((plan) => (
                    <PlanCard  plan = {plan} locale = {locale} messages = {messages}  />
                   ))
                }
              </div>

           </div> */}
     </>
  )
};
export default planSinglePage;