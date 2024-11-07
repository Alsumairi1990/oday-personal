import NavBar from '../NavBar'
import Hero from '../_components/HeroSect'
import Services from '../_components/Services'
import ServicesFull from '../_components/ServicesFull'
import About from '../_components/About'
import React, { Suspense } from 'react';
import Works from '../_components/Works'
import Testimonials from '../_components/Testimonials'
import ServiceApp from '../_components/ServiceApp'
import Footerk from '../_components/Footer'
import { getLocale, getMessages } from 'next-intl/server';
import { MenuWithAllModels } from './admin/setting/left-nav/_utils/MenuWithAllModels'
import PhaseCompany from '../_components/PhaseCompany'
import IndustryCard from '../_components/IndustryCard'
import { AboutUsSection, Category, Industry, PageSection, Post, Service, Testimonial } from '@prisma/client'
import { PhaseWithModels } from './admin/service/phases/utils/PhaseWithModels'
import { WorksFrontData } from './admin/works/utils/WorksFrontData'
import { MarketWithModels } from './admin/market/_utils/MarketWithModels'
import Markets from '../_components/market/Markets'
import BlogList from '../_components/BlogList'
import PlansPanel from '../_components/OurPlans/PlansPanel'
export default async function Home() {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });
  
  const Categories = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service/categories/home`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });

  const elements = await fetch(`${process.env.NEXTAUTH_URL}/api/front/menu`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });
  const latestPosts = await fetch(`${process.env.NEXTAUTH_URL}/api/front/posts/latest`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });

  const pagePhases = await fetch(`${process.env.NEXTAUTH_URL}/api/front/phases`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });
  const pageWorks = await fetch(`${process.env.NEXTAUTH_URL}/api/front/works/home`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });

  const pageTestimonials = await fetch(`${process.env.NEXTAUTH_URL}/api/front/testimonials/home`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });

  const pageIdustries = await fetch(`${process.env.NEXTAUTH_URL}/api/front/industries/home`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });

  const pageMarkets = await fetch(`${process.env.NEXTAUTH_URL}/api/front/markets`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });
  const page = 'mainPage'
  const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
  });

  const sections = await fetch(`${process.env.NEXTAUTH_URL}/api/front/meta/sections`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });


  const about = await fetch(`${process.env.NEXTAUTH_URL}/api/front/about-section`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Revalidate for ISR if needed
  });


  if (!Categories.ok || !elements || !Categories) {
    throw new Error('Failed to fetch categories');
  }
 
    const servicesR:Service[] = await res.json();
    const categoriesResult:Category[] = await Categories.json();
    const menuElements:Record<number, MenuWithAllModels[]> = await elements.json();
    const posts:Post[] = await latestPosts.json();
    const phases:PhaseWithModels[] = await pagePhases.json();
    const works:WorksFrontData[] = await pageWorks.json();
    const testimonials:Testimonial[] = await pageTestimonials.json();
    const industries:Industry[] = await pageIdustries.json();
    const heroData = await hero.json();
    const sectionMeta:PageSection[] = await sections.json();
    const aboutUS:AboutUsSection = await about.json();
    const markets:MarketWithModels[] = await pageMarkets.json();
    
    const serviceMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'services'); 
    const serviceCatMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'servicesCategory');  
    const phaseMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'workPhase');
    const testimonialMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'testimonials');
    const workMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'works');  
    const blogsMeta: PageSection | undefined = sectionMeta.find((section) => section.name === 'blog');  
 
  return (
    <main className="flex flex-col dark:bg-[#111]">
       <div className="flex flex-col">
        {/* {menuElements && <NavBar menusData={menuElements} />} */}
          </div>   
          <Suspense fallback={<div>Loading navigation...</div>}>
        <NavBar menusData={menuElements} />
      </Suspense>

    <div className="hed">
      {heroData && <Hero heroData={heroData} services={servicesR} categories={categoriesResult} /> }
    </div>

     {servicesR.length} {heroData.length}
     <div className="clear"></div>
     <div className='gray:bg-[#111]"'>
     {categoriesResult  && serviceCatMeta && <Services categories={categoriesResult} meta={serviceCatMeta}  />}
     </div>
     <div className='gray:bg-[#111]"'>
     {servicesR && serviceMeta && <ServicesFull services={servicesR} meta={serviceMeta} />}
     </div>
     <div className="w-full my-8 pb-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-full mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-4  max-sm:p-4">
            {industries && industries.map((industry, index:number) => (
               <IndustryCard key={industry.id} industry={industry} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
      </div>
     {/* <div className="gray:bg-[#111]">
     {aboutUS && <About aboutUS={aboutUS} /> }
     </div> */}
     <div className="dark:bg-[#111]">
     {posts && blogsMeta && <BlogList meta={blogsMeta} posts={posts}  /> }
     </div>

     <div className="my-6">
      <PlansPanel locale={locale} messages={messages} />
     </div>
     <div className="dark:bg-black-100">
      {phases && phaseMeta && <PhaseCompany phases={phases} meta={phaseMeta} />}
     </div>
     <div className="">
      <Markets markets={markets} locale={locale} messages={messages}/>
     </div>
     <div className="">
      <div className="dark:w-11/12 mx-auto  dark:bg-[#111]">
      {works && workMeta &&  <Works  works = {works} meta={workMeta} /> }
      </div>
      </div>
      <div className="w-full my-24 ]">
      {testimonials && testimonialMeta && <Testimonials testimonials={testimonials} meta={testimonialMeta} /> }
      </div>
      <div className="w-full my-10 sm:my-24 dark:bg-black-100">
      {/* <ServiceApp /> */}
      </div>
     
    </main>
  )
}
