'use client'
import React, { useEffect, useState } from 'react'
import { AbstractIntlMessages } from 'next-intl';
import PackageCard from '../OurPlans/PackageCard';
import { PackageForFront } from '@/app/[locale]/admin/packages/_utils/PackageForFront';
import { PlanCatPackForFront } from '@/app/[locale]/admin/plans/category/_utils/PlanCatPackForFront';
import { IoIosArrowDropleft } from 'react-icons/io';
interface Props {
    packagesData : PackageForFront[],
    locale : string,
    messages : AbstractIntlMessages
}
function PlansPanel({packagesData,locale,messages}:Props) {
  const [activeButton, setActiveButton] = useState<string>('web-development-plans'); // Default to the first button
  const preview = (messages as any).HomePage.workPreview;
  const webDevelopement = (messages as any).Common.webDevelopment;
  const grahicDesign = (messages as any).Common.graphicDesign;
  const plans = (messages as any).Common.packages;
  const display = (messages as any).Common.display;
  const packages = (messages as any).Common.packages;
  const more = (messages as any).Common.more; 
  const [packageCategory, setPackageCategory] = useState<PackageForFront[]>();

  const logo = "/plans-media/images/plan-logo1.webp"
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const img = isMobile
  ? "/plans-media/images/plan-mob1.webp"
  : "/plans-media/images/packages.jpg";
  const handleButtonClick = (category: string) => {
    setActiveButton(category);
    fetchCategoryData(category);
  };

  // const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>(testimonials);
    const [visibleTestimonial, setVisibleTestimonial] = useState(0); 
    const handleClick = (index: number) => {
      setVisibleTestimonial(index); 
    };
  const fetchCategoryData = async (slug:string) => {
        setLoading(true);
        try {
          const response = await fetch(`/api/front/packages/categories/${slug}/3`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (!response.ok) {
            throw new Error('Failed to fetch category data');
          }
          const data = await response.json(); 
          const categoryD:PlanCatPackForFront= data; 
          const packages: PackageForFront[] = categoryD.packages;
          setPackageCategory(packages);
          setLoading(false);
        } catch (err) {
        }
      };


  useEffect(() => {
    setPackageCategory(packagesData);
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial screen size
    handleResize();

    // Add event listener for screen resize
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
       <div className="relative w-full sm:w-11.3/12 mx-auto flex flex-col sm:mb-4">
         <span className="w-full absolute top-1/2 inline-flex z-0 h-[1px] bg-gray-300 dark:bg-[#424957]
           after:content-[''] after:absolute after:-top-1.5 after:h-3.5 after:w-0.5 after:rounded-sm after:bg-gray-300 dark:after:bg-[#434a58] after:z-10 
           before:content-[''] before:absolute before:left-0 before:-top-1.5 before:h-3.5 before:w-0.5 before:rounded-sm dark:before:bg-[#293347] before:bg-gray-300 before:z-0">
         </span>
         <div className="flex w-fit px-4 gap-x-4 max-sm:flex-wrap rounded-xl items-center z-20 bg-gray-50 dark:bg-card py-1.5 border border-gray-300 my-3  mx-auto justify-center">
             <span className="text-md max-sm:flex-100 text-gray-600 font-semibold inline-block ltr:pr-2 rtl:pl-2 py-1 max-sm:border-b max-sm:mb-3 max-sm:py-1.5 sm:ltr:pr-border-r sm:rtl:border-l border-gray-300 ">{plans}</span>
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
               {activeButton === 'web-development-plans'}
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
               {activeButton === 'graphic-design-plans'}
             </button>
             <span className="text-md max-sm:hidden text-orange-600 font-medium  inline-flex items-center ltr:pl-2 rtl:pr-2 py-1 ltr:pr-border-l rtl:border-r border-gray-300 hover:text-gray-800 cursor-pointer ">{display} {more} <IoIosArrowDropleft className=' text-xl ltr:ml-2 rtl:mr-2' />
             </span>
          </div>
   
       </div>
    <div className="w-11.3/12 grid sm:grid-cols-3 max-sm:hidden gap-y-7 sm:gap-x-11 mx-auto rtl:font-arabic relative  px-4 ">
    {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
         {packageCategory &&
            packageCategory.map((packageData)=> (
                <PackageCard packageData={packageData}   locale={locale} messages={messages} />
            ))
         }
     </div>

     <div className="flex sm:hidden bg-cardOnyx  pt-2 px-2 pb-5 rounded-md justify-between max-sm:flex-wrap">
      {packageCategory && packageCategory.length > 0 && (
        <>
          <PackageCard packageData={packageCategory[visibleTestimonial]}   locale={locale} messages={messages} />
          <div className="mt-4 flex  justify-center gap-x-3  w-full ">
            {packageCategory.map((_, index) => (
              <button
                key={index}
                onClick={() => handleClick(index)}
                className={`p-2  h-[3px] w-8 rounded ${visibleTestimonial === index ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}
              >
                {/* {index + 1} */}
              </button>
            ))}
          </div>
          <div className="p-2">
              <span className="text-sm text-orange-200 border border-orange-300">{more} {packages}</span>
            </div>
        </>
      )}
    </div>
     </>
  )
}

export default PlansPanel