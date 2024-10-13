import { WorkSingleData } from "@/app/[locale]/admin/works/utils/WorkSingleData";
import WorkHero from "@/app/_components/_services/work/heroSection";
import ServicesFull from "@/app/_components/ServicesFull";
import { getLocale, getMessages } from "next-intl/server";

interface Props {
   params: {
       slug: string;
   };
 }
const Work = async ({params}:Props) => {
    const imagePath = '/images/workbg.webp';
    const imagePath1 = '/images/curve.png';
    const imagePath2 = '/images/service2.png';
    const locale = await getLocale();
    const messages = await getMessages({ locale });
    const category = (messages as any).Common.category;
    const tools = (messages as any).Common.buildingTools;

    const location = (messages as any).Common.location;

    const workData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/works/${params.slug}`, {
      method: 'GET',
      next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
    });
    const work:WorkSingleData = await workData.json();

    
   return (
      <div className="w-full">
         <div className="">
            <WorkHero work ={work} locale={locale}  messages={messages} />
         </div>
 
         <div className="py-4 my-8 px-8 w-11.8/12 mx-autopt-0 ">
            <div className="flex flex-wrap ">
               <div className="sm:flex-40">
                     {locale === 'en' ? <div className="flex-35 p-2 pt-0 ">
                        <h2 className="text-3xl font-bold text-gray- dark:text-white">{work.title}</h2>
                        <div className="flex mt-4">
                           <p className="text-sm leading-7 line-clamp-4 text-gray-900 dark:text-gray-100">{work.description}</p>
                        </div>
                     </div>:
                     <div className="flex-35 p-2 pt-0 ">
                        <h2 className="text-2xl font-bold text-gray-600 font-arabic dark:text-white">{work.titleAr}</h2>
                        <div className="flex mt-4">
                           <p className="text-sm leading-7 text-gray-900 line-clamp-5 font-arabic dark:text-gray-100"> {work.descriptionAr}</p>
                        </div>
                     </div>
                     }
                     </div>
            
            <div className="grid flex-100 sm:flex-60 sm:grid-cols-3 gap-3">

            
                <div className="bg-[#f9f9f9] dark:bg-[#161616] px-2 py-3 text-center rounded-md border border-gray-300 dark:border-gray-600">
                   <div className="flex justify-center">
                      <img src="https://www.webvolty.com/img/about/Years_Experience.png" alt="" />
                   </div>
                   <div className="p2 mt-3">
                      <p className="text-gray-800 text-lg rtl:font-arabic font-bold pb-2 border-b border-b-gray-200 dark:border-gray-700 mb-2 dark:text-orange-400">{category}</p>
                      <div className="text-gray-700 flex flex-wrap gap-2  text-base">
                        {work.categories.map((category) => (
                          locale === 'en' ? <span className="border-r text-sm px-3 border-r-gray-300 last:border-r-0">{category.category.name}</span>
                          : <span className="border text-sm py-0.5 px-3 border-gray-300 font-arabic bg-white rounded-md">{category.category.nameAr}</span>
                         
                        )
                         )
                        }
                      </div>
                   </div>
                </div>

                <div className="bg-[#f9f9f9] dark:bg-[#161616] px-2 py-3 text-center rounded-md border border-gray-300 dark:border-gray-600">
                   <div className="flex justify-center">
                      <img src="https://www.webvolty.com/img/about/Years_Experience.png" alt="" />
                   </div>
                   <div className="p2 mt-3">
                      <p className="text-gray-800 text-lg rtl:font-arabic font-bold pb-2 border-b border-b-gray-200 dark:border-gray-700 mb-2 dark:text-orange-400">{tools}</p>
                      <div className="text-gray-700 flex flex-wrap gap-2  text-base">
                        {work.tools.map((tool) => (
                          locale === 'en' ? <span className="border-r text-sm px-3 border-r-gray-300 last:border-r-0">{tool.tool.name}</span>
                          : <span className="border text-sm py-0.5 px-3 border-gray-300 font-arabic bg-white rounded-md">{tool.tool.nameAr}</span>
                         
                        )
                         )
                        }
                      </div>
                   </div>
                </div>

                <div className="bg-[#f9f9f9] dark:bg-[#161616] px-2 py-3 text-center rounded-md border border-gray-300 dark:border-gray-600">
                   <div className="flex justify-center">
                      <img src="https://www.webvolty.com/img/about/Years_Experience.png" alt="" />
                   </div>
                   <div className="p2 mt-3">
                      <p className="text-gray-800 text-lg rtl:font-arabic font-bold pb-2 border-b border-b-gray-200 dark:border-gray-700 mb-2 dark:text-orange-400">{location}</p>
                      <div className="text-gray-700 flex flex-wrap gap-2  text-base">
                        {work.location && locale === 'en' ? <span className="border-r text-sm px-3 border-r-gray-300 last:border-r-0">{work.location && work.location.country}</span>
                          : <span className="border text-sm py-0.5 px-3 border-gray-300 font-arabic bg-white rounded-md">{work.location && work.location.countryAr}</span>
                        }
                      </div>
                   </div>
                </div>
 
               
             </div>
            
            </div>
         </div>
 
        
 
      </div>
   )
 };
 export default Work;