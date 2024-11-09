
import { getLocale, getMessages } from "next-intl/server";

import SidQuery from "@/app/_components/SidQuery";
import { PlanCategoryForFront } from "@/app/[locale]/admin/plans/category/_utils/PlanCategoryForFront";
import MainHeroSection from "@/app/_components/MainHeroSection";
import CategoryPanel from "@/app/_components/package/category/CategoryPanel";
import { PackageCatForFront } from "@/app/[locale]/admin/packages/_utils/PackageCatForFront";
import PackageCard from "@/app/_components/package/PackageCard";
import { truncateByWords } from "@/utils/TextUtils";

const Categories = async () => {
   const locale = await getLocale();
  const messages = await getMessages({ locale });
  const feature1 = (messages as any).Common.featureTitle1;
  const feature2 = (messages as any).Common.featureTitle1;

  const categoryData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/packages`, {
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
           <div className="w-11.6/12 mx-auto rtl:font-arabic  grid my-10 sm:grid-cols-75/25">
           <div>
           {categories.length > 0 &&
                categories.map((category) => (
                    <div key={category.id} className="mb-14">
                        <div className="mb-7 flex flex-col items-center">
                            <div className="flex flex-col items-center gap-x-2 mb-3 ">
                            <div className="w-16">{category.icon && <img src={category.icon} alt={category.name} className="w-full h-full" />}</div>
                            <h2 className="text-xl  font-bold ">{category.nameAr}</h2>
                            </div>
                          <p className="text-sm text-gray-600 line-clamp-3 text-center leading-7  font-semibold">{category.descriptionAr && truncateByWords(category.descriptionAr,35)}</p>
                        </div>
                    <div className="grid sm:grid-cols-3 gap-6">
                    {category.packages.map((pkg) => (
                        <PackageCard packageData={pkg} locale={locale} messages={messages} />
                    ))}
                    </div>
                    </div>
                ))
                }
                </div>
              {/* <div >
                <CategoryPanel categories={categories} locale={locale} messages={messages}  />

              </div> */}
              <div className="p-2 hidden h-fit">
                  <div className="" >
                  <SidQuery  />
                  </div>
                  
              </div>
           </div>
     </>
  )
};
export default Categories;