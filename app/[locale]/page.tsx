import NavBar from '../NavBar'
import React, { Suspense } from 'react';
import { getLocale, getMessages } from 'next-intl/server';
import { MenuWithAllModels } from './admin/setting/left-nav/_utils/MenuWithAllModels'
import { Category, CompanyMenu, Explore, Industry, PageSection, Post, Service, Testimonial } from '@prisma/client';
import Hero from '../_components/HeroSect';
import PlansPanel from '../_components/OurPlans/PlansPanel';
import { PlanCategoryForFront } from './admin/plans/category/_utils/PlanCategoryForFront';
import { PlanCatPackForFront } from './admin/plans/category/_utils/PlanCatPackForFront';
import PackageSect from '../_components/package/PackageSect';
import Testimonials from '../_components/Testimonials';
import ContactForm from '../_components/ContactForm';
import Services from '../_components/Services';
import ServicesFull from '../_components/ServicesFull';
import IndustryCard from '../_components/industries/IndustryCard';
import { WorksFrontData } from './admin/works/utils/WorksFrontData';
import Works from '../_components/Works';
import TechPanel from '../_components/technologies/TechPanel';
import { CategoryWithTools } from './admin/category/util/CategoryWithTools';
import BlogList from '../_components/BlogList';
import Markets from '../_components/market/Markets';
import { MarketWithModels } from './admin/market/_utils/MarketWithModels';
import { PhaseWithModels } from './admin/service/phases/utils/PhaseWithModels';
import PhaseCompany from '../_components/PhaseCompany';
import { PostCategoryFront } from './admin/blogs/_utils/PostCategoryFront';
import PostsArea3 from '../_components/blog/PostsArea3';
import Image from 'next/image'

export default async function Home() {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const page = 'mainPage'


  const elements = await fetch(`${process.env.NEXTAUTH_URL}/api/front/menu`, {
    method: 'GET',
    next: { revalidate: 3600 }, // 
  });

  const exploresData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/explores`, {
    method: 'GET',
    next: { revalidate: 3600 }, 
  })

  const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
  });


  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });
  
  const Categories = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service/categories/home`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });

  const planCategoryData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/plans/categories/web-development-plans`, {
    method: 'GET',
    next: { revalidate: 3600 }, 
  });

  const packageCategoryData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/packages/categories/web-development-plans/3`, {
    method: 'GET',
    next: { revalidate: 3600 }, 
  });

  const pageTestimonials = await fetch(`${process.env.NEXTAUTH_URL}/api/front/testimonials/home`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });

  const sections = await fetch(`${process.env.NEXTAUTH_URL}/api/front/meta/sections`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });

  const companyMenuData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/company-menu`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR 
  });
  const pageIdustries = await fetch(`${process.env.NEXTAUTH_URL}/api/front/industries/home`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });
  const pageWorks = await fetch(`${process.env.NEXTAUTH_URL}/api/front/works/home`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });
  const toolsCategories = await fetch(`${process.env.NEXTAUTH_URL}/api/front/technologies/categories`, {
    method: 'GET',
    next: { revalidate: 3600 }, 
  });

  const latestPosts = await fetch(`${process.env.NEXTAUTH_URL}/api/front/posts/latest`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });

  const pageMarkets = await fetch(`${process.env.NEXTAUTH_URL}/api/front/markets`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });
  const pagePhases = await fetch(`${process.env.NEXTAUTH_URL}/api/front/phases`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });

  const postsDesign = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/category/design`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });
  

  
 

  // const toolsCategory = await fetch(`${process.env.NEXTAUTH_URL}/api/front/technologies/categories/front-end/16`, {
  //   method: 'GET',
  //   next: { revalidate: 3600 }, 
  // });

  
  // if (!Categories.ok || !elements || !Categories) {
  //   throw new Error('Failed to fetch categories');
  // }
 

  const menuElements:Record<number, MenuWithAllModels[]> = await elements.json();
  const explores:Explore[] = await exploresData.json();
  const heroData = await hero.json();
  const servicesR:Service[] = await res.json();
  const categoriesResult:Category[] = await Categories.json();
  const planCategory:PlanCategoryForFront = await planCategoryData.json();
  const packageCategory:PlanCatPackForFront = await packageCategoryData.json(); 
  const testimonials:Testimonial[] = await pageTestimonials.json();
  const sectionMeta:PageSection[] = await sections.json();
  const companyMenu:CompanyMenu[] = await companyMenuData.json();
  const industries:Industry[] = await pageIdustries.json();
  const works:WorksFrontData[] = await pageWorks.json();
  const toolsCategorires:CategoryWithTools[] = await toolsCategories.json();
  const posts:Post[] = await latestPosts.json();
  const markets:MarketWithModels[] = await pageMarkets.json();
  const phases:PhaseWithModels[] = await pagePhases.json();
  const designPosts:PostCategoryFront = await postsDesign.json();
  



  




  



  const testimonialMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'testimonials');
  const serviceCatMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'servicesCategory'); 
  const serviceMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'services');
  const industryMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'industries');   
  const workMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'works');  
  const techMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'technologies');
  const blogsMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'blog');
  const phaseMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'workPhase');

  //   const aboutUS:AboutUsSection = await about.json();
 
  return (
    <main className="flex flex-col h-ful dark:bg-[#111] rtl:font-arabic" >
       <div className="rounded-md w-10/12 mx-auto my-4">
                  
                    <Image
                      src="/images/under.avif"
                      height={1000}
                      width={1000}
                      alt=""
                      className="w-full max-w-full rounded"
                    />
                  
                </div>
   
      {/* <div className="flex flex-col">
          </div>   
          <Suspense fallback={<div></div>}>
        <NavBar menusData={menuElements} explores={explores} companyMenu={companyMenu} locale={locale} messages={messages} />
      </Suspense>
    <div className="hed">
      {heroData && <Hero heroData={heroData} services={servicesR} categories={categoriesResult} /> }
    </div>

    <div className='bg-gray-50 gray:bg-[#111]"'>
        {categoriesResult  && serviceCatMeta && <Services categories={categoriesResult} meta={serviceCatMeta}  />}
     </div> 

     <div className='bg-gray-50 gray:bg-[#111]"'>
     {servicesR && serviceMeta && <ServicesFull services={servicesR} meta={serviceMeta} />}
     </div>
    
    <div className="my-6">
      <PlansPanel category={planCategory} locale={locale} messages={messages} />
     </div>

      <div className="">
      <Markets markets={markets} locale={locale} messages={messages}/>
     </div>
     
     
      <div className="my-8 sm:w-11.6/12 mx-auto max-sm:bg-gray-100 dark:bg-[#111]">
        <PostsArea3 posts={designPosts.pots} locale={locale} messages={messages} />
      </div>

     <div className="my-14 w-11.4/12 mx-auto">
      {packageCategory && <PackageSect packagesData={packageCategory.packages}  locale={locale} messages={messages} />}
     </div> 
     <div className="w-full my-8 pb-8  bg-gray-100 dark:bg-[#111] ">
          <div className="sm:w-11/12 mx-auto p-4">
              <div className="p-1 w-full flex my-8 justify-center">
                {locale === 'en' ? <h2 className="text-gray-800">
                  {industryMeta?.title}
                </h2>
                :
                <div className='flex flex-col items-center'>
                    <h2 className="text-gray-800  dark:text-gray-50 text-2xl font-semibold font-arabic">
                      {industryMeta?.titleAr}
                    </h2>
                    <p className="text-base mt-2 text-gray-700 leading-7 text-center">
                      {industryMeta?.descAr}
                    </p>
                </div>
                  }
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 sm:gap-y-8 gap-5 sm:gap-x-8 max-sm:p-1">
            {industries && industries.map((industry, index:number) => (
               <IndustryCard key={industry.id} industry={industry} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
      </div>
      <div className="w-full dark:w-11/12 mx-auto  dark:bg-[#111]">
         {works && workMeta &&  <Works  works = {works} meta={workMeta} /> }
      </div>
     <div className="w-full my-24 ]">
       {testimonials && testimonialMeta && <Testimonials testimonials={testimonials} meta={testimonialMeta} locale={locale} messages={messages} /> }
      </div>

      <div className="w-full mx-auto bg-gray-100 my-10 pb-5 max-sm:bg-[#11212f] dark:bg-[#111]">
       <div className="p-1 w-full flex mt-8 justify-center">
        {locale === 'en' ? <h2 className="text-gray-800">
          {techMeta?.title}
        </h2>
        :
        <div className='flex flex-col items-center'>
            <h2 className="text-gray-800 max-sm:text-center max-sm:text-white dark:text-gray-50 text-lg leading-7 max-sm:mb-2 sm:text-2xl font-semibold font-arabic">
              {techMeta?.titleAr}
            </h2>
            <span className="sm:hidden h-0.5 w-14 bg-orange-200 mb-2" ></span>
            <p className="text-base max-sm:hidden mt-2 text-gray-700 leading-7 text-center">
              {techMeta?.descAr}
            </p>
        </div>
          }
       </div>
       {toolsCategorires && <TechPanel categories={toolsCategorires} locale = {locale} messages={messages} /> }
      </div>
     <div className="dark:bg-black-100">
      {phases && phaseMeta && <PhaseCompany phases={phases} meta={phaseMeta} locale={locale} messages={messages} />}
     </div>
     
      
      <ContactForm  locale={locale} messages={messages} />
       
     <div className="clear"></div>  */}
     
 {/* <div className="dark:bg-[#111]">
          {posts && posts.length > 0 && blogsMeta && <BlogList meta={blogsMeta} posts={posts}  /> }
     </div> */}

     
    </main>
  )
}
