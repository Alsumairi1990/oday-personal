
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
  const features = (messages as any).Common.features;
    const limits = (messages as any).Common.limits;
    const support = (messages as any).Common.support;
    const purpose = (messages as any).Common.purpose;
    const duration = (messages as any).Common.duration; 
    const paymentInterval = (messages as any).Common.paymentInterval; 
    const cycleOfpayment = (messages as any).Common.cycleOfpayment; 
    const month = (messages as any).Common.month; 
    const semiAnnual = (messages as any).Common.semAnnual; 
    const annual = (messages as any).Common.year; 
    const totalServices = (messages as any).Common.totalServices; 
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
           
           <div className="my-14 rtl:font-arabic w-11/12 mx-auto">
            {locale === 'en' ? <div className="flex w-full justify-center">
              <div className="p-2 text-center">
                <h2 className="text-base sm:text-2xl text-gray-800 dark:text-gray-50 font-semibold mb-2 sm:mb-3">{plan.name}</h2>
                <p className="text-gray-700 text-md dark:text-gray-100 line-clamp-4">{plan.description}</p>
              </div>
            </div>:
            <div className="flex w-full justify-center">
              <div className="p-2 text-center">
                <h2 className="text-base sm:text-2xl text-gray-800 dark:text-gray-50 font-semibold mb-2 sm:mb-3">{plan.nameAr}</h2>
                <p className="text-gray-700 text-md dark:text-gray-100 line-clamp-4">{plan.descriptionAr}</p>
              </div>
            </div>
            }
            <div className="flex mt-3 border  border-gray-300 flex-wrap rounded-md">
              <div className="flex-48 sm:h-16 rtl:pr-1 sm:flex-100 flex border-b border-b-gray-300 items-center rounded-md ">
                <span className="text-base h-[90%] flex justify-center items-center flex-15 px-2 font-semibold w-full text-center py-1.5 rounded-md text-gray-800 dark:text-gray-50 bg-gray-200 dark:bg-gray-800">{features}</span>
                <span className="text-base flex-80 rtl:pr-7 font-semibold mt-1 text-gray-700 py-2">{plan.featuresAr}</span>
              </div>
              <div className="flex-48 sm:h-16 rtl:pr-1 sm:flex-100 border-b border-b-gray-300 flex items-center rounded-md ">
                <span className="text-base h-[90%] flex justify-center items-center flex-15 px-2 font-semibold w-full text-center py-1.5 rounded-md text-gray-800 dark:text-gray-50 bg-gray-200 dark:bg-gray-800">{limits}</span>
                <span className="text-base flex-80 rtl:pr-7 font-semibold mt-1 text-gray-700 py-2">{plan.limitsAr}</span>
              </div>
              <div className="flex-48 sm:h-16 rtl:pr-1 sm:flex-100 border-b border-b-gray-300 flex items-center rounded-md ">
                <span className="text-base h-[90%] flex justify-center items-center flex-15 px-2 font-semibold w-full text-center py-1.5 rounded-md text-gray-800 dark:text-gray-50 bg-gray-200 dark:bg-gray-800">{support}</span>
                <span className="text-base flex-80 rtl:pr-7 font-semibold mt-1 text-gray-700 py-2">{plan.supportAr}</span>
              </div>
              <div className="flex-48 sm:h-16 rtl:pr-1 sm:flex-100 border-b border-b-gray-300 flex items-center rounded-md ">
                <span className="text-base h-[90%] flex justify-center items-center flex-15 px-2 font-semibold w-full text-center py-1.5 rounded-md text-gray-800 dark:text-gray-50 bg-gray-200 dark:bg-gray-800">{purpose}</span>
                <span className="text-base flex-80 rtl:pr-7 font-semibold mt-1 text-gray-700 py-2">{plan.purposeAr}</span>
              </div>
              <div className="flex-48 sm:h-16 rtl:pr-1 sm:flex-100 border-b border-b-gray-300 flex items-center rounded-md ">
                <span className="text-base h-[90%] flex justify-center items-center flex-15 px-2 font-semibold w-full text-center py-1.5 rounded-md text-gray-800 dark:text-gray-50 bg-gray-200 dark:bg-gray-800">{totalServices}</span>
                <span className="text-base flex-80 rtl:pr-7 font-semibold mt-1 text-gray-700 py-2">
                {plan && plan.services.map((service) =>(
                  <span className="text-sm border border-gray-300 mx-1 my-1 inline-flex rounded px-1 font-semibold text-gray-700 leading-6">{ service.nameAr }  </span>
                ))}
                </span>
              </div>
              <div className="flex-48 sm:h-16 rtl:pr-1 sm:flex-100 border-b border-b-gray-300 flex items-center rounded-md ">
                <span className="text-base h-[90%] flex justify-center items-center flex-15 px-2 font-semibold w-full text-center py-1.5 rounded-md text-gray-800 dark:text-gray-50 bg-gray-200 dark:bg-gray-800">{paymentInterval}</span>
                <span className="text-base flex-80  rtl:pr-7 px-1 text-gray-700 leading-6">{plan.interval == 'MONTHLY'? month : plan.interval === 'YEARLY'? annual : semiAnnual  } </span>
              </div>
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