'use client'
import React, { useEffect, useState } from 'react'
import { AbstractIntlMessages } from 'next-intl';
import Link from 'next/link';
import { FaArtstation } from 'react-icons/fa';
import { PlanCategoryForFront } from '@/app/[locale]/admin/plans/category/_utils/PlanCategoryForFront';
import { IoIosArrowDropleft } from 'react-icons/io';
interface Props {
    category : PlanCategoryForFront,
    locale : string,
    messages : AbstractIntlMessages

}
function PlansPanel({category,locale,messages}:Props) {
  const request = (messages as any).HomePage.request;
  const webDevelopement = (messages as any).Common.webDevelopment;
  const grahicDesign = (messages as any).Common.graphicDesign;
  const plans = (messages as any).Common.plans;
  const display = (messages as any).Common.display;
  const more = (messages as any).Common.more; 
  const logo = "/plans-media/images/plan-logo1.webp"
  const [isMobile, setIsMobile] = useState(false);
  const [plansCategory, setPlansCategory] = useState<PlanCategoryForFront>();
  const [loading, setLoading] = useState<boolean>(false);
  const [activeButton, setActiveButton] = useState<string>('web-development-plans'); // Default to the first button
  const img = isMobile

  ? "/plans-media/images/plan-mob1.webp"
  : "/plans-media/images/packages.jpg";


  const handleButtonClick = (category: string) => {
    setActiveButton(category);
    fetchCategoryData(category);
  };
  
const fetchCategoryData = async (slug:string) => {
      setLoading(true);
      try {
        const response = await fetch(`/api/front/plans/categories/${slug}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Failed to fetch category data');
        }
        const data = await response.json(); 
        const categoryD:PlanCategoryForFront= data; 
        setPlansCategory(categoryD);
        setLoading(false);
      } catch (err) {
      }
    };

  useEffect(() => {
    setPlansCategory(category);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
    <div className="relative w-11.3/12 mx-auto flex flex-col">
      <span className="w-full absolute top-1/2 inline-flex z-0 h-[1px] bg-gray-300 dark:bg-[#424957]
        after:content-[''] after:absolute after:-top-1.5 after:h-3.5 after:w-0.5 after:rounded-sm after:bg-gray-300 dark:after:bg-[#434a58] after:z-10 
        before:content-[''] before:absolute before:left-0 before:-top-1.5 before:h-3.5 before:w-0.5 before:rounded-sm dark:before:bg-[#293347] before:bg-gray-300 before:z-0">
      </span>
      <div className="flex w-fit px-4 gap-x-4 max-sm:flex-wrap rounded-xl items-center z-20 bg-gradient-to-t from-[#e5e9f0] to-white dark:bg-card pt-0 pb-1.5 max-sm:px-0 sm:py-1.5 border border-gray-300 my-3  mx-auto justify-center">
          <div className="text-md max-sm:flex-100 text-center text-gray-600 font-semibold inline-block ltr:pr-2 rtl:pl-2 py-1 max-sm:border-b max-sm:mb-3 max-sm:py-4 sm:ltr:pr-border-r sm:rtl:border-l border-gray-300 ">
            <span className="sm:p-1.5 px-2.5 py-[5px] text-[#994700] max-sm:rounded-md max-sm:border max-sm:border-gray-300 max-sm:bg-white max-sm: border-x border-gray-300 ">{plans}</span>
          </div>
          <button
            type="button"
            onClick={() => handleButtonClick('web-development-plans')}
            className={`px-2 py-1.5 max-sm:flex-45 rounded-xl text-md font-medium text-center border relative ${
              activeButton === 'web-development-plans'
                ? 'bg-red-500 text-white border-red-500'
                : 'bg-white text-gray-800 border-gray-300'
            }`}
          >
            {webDevelopement}
            {activeButton === 'web-development-plans' && (
              <span className="z-10 absolute left-[40%] top-1/2 -bottom-6 border-l-[20px] border-r-[20px] border-b-[13px] border-l-transparent border-r-transparent border-b-red-600"></span>
            )}
          </button>

          <button
            type="button"
            onClick={() => handleButtonClick('graphic-design-plans')}
            className={`px-2 py-1.5 max-sm:flex-40 rounded-xl text-md font-medium text-center border relative ${
              activeButton === 'graphic-design-plans'
                ? 'bg-red-500 text-white border-red-500'
                : 'bg-white text-gray-800 border-gray-300'
            }`}
          >
            {grahicDesign}
            {activeButton === 'graphic-design-plans' && (
              <span className="z-10 absolute left-[40%] top-1/2 -bottom-6 border-l-[20px] border-r-[20px] border-b-[13px] border-l-transparent border-r-transparent border-b-red-600"></span>
            )}
          </button>
          <span className="text-md max-sm:hidden text-orange-600 font-medium  inline-flex items-center ltr:pl-2 rtl:pr-2 py-1 ltr:pr-border-l rtl:border-r border-gray-300 hover:text-gray-800 cursor-pointer ">{display} {more} <IoIosArrowDropleft className=' text-xl ltr:ml-2 rtl:mr-2' />
          </span>
       </div>

    </div>

    
    <div className="w-11.3/12 pt-9 pb-6 rounded  mx-auto rtl:font-arabic flex flex-wrap dark:border-x dark:border-b dark:border-b-gray-400 dark:border-x-gray-400  px-4 relative  bg-no-repeat bg-center bg-cover -z-0"  style={{backgroundImage: `url(${img})`}}>
    {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
       <div className="sm:flex-30 flex max-sm:mb-3">
        <div className="p-1 flex items-center">
          <img src={logo} className='w-20' alt="subscription" />
          <div className="bg-gray-50 flex items-center mt-7 px-2 rounded-l-md relative -mr-2">
            <span className="text-gray-900 font-bold font-arabic inline-flex py-2">{plans}
            </span>
          </div>
        </div>
        
       </div>
       <div className="sm:flex-40 grid max-sm:w-full grid-cols-3 gap-y-6 gap-x-2">
         {plansCategory && plansCategory.plans && plansCategory.plans.length > 0 && plansCategory.plans.map((plan)=> (
           <div className=" bg-[#293347] flex flex-col relative items-center rounded border border-[#6a707e] ">
           <span className="absolute -top-6 items-center justify-center  rounded-full border bg-[#293347] inline-flex h-10 w-10 bcg-[rgba(31,41,55,0.5)] border-[#6a707e]">
            <FaArtstation className='text-white text-xl' />
            </span>
            
           <div className="px-2 pt-5 pb-4">
             {locale === 'en' ? <span className="text-white  text-lg font-bold pb-2">{plan.name}</span>
             :<span className="text-white font-arabic text-lg font-bold pb-2">{plan.nameAr}</span>
             }
           </div>
           <div className="p-1 bg-[#4a5162] w-full text-center">
             <span className="text-white font-bold">  {plan.monthlyPrice.toString()}$  </span>
           </div>
          <Link href={`/plans/${category.slug}/${plan.slug}`} className="p-2  w-full text-center border-t  border-t-[#6a707e]">
             <span className="text-whie inline-flex py-0.5 text-sm border border-orange-400 rounded-md text-orange-400 justify-center w-full font-bold"> {request}   </span>
           </Link>
         </div>
         ))
         }
       </div>
       <div className="flex-100 sm:flex-30 flex items-center justify-center">
            <Link href={`/plans/categories`} className="py-1.5 text-center px-5 max-sm:mt-4 max-sm:w-full rounded-md  h-fit" style={{background:'linear-gradient(0deg, #981c45, #e91818)'}}>
               <span className="text-white font-arabic text-base font-bold pb-2" >  {more}  </span>
             </Link>
       </div>
     </div>
     </>
  )
}

export default PlansPanel