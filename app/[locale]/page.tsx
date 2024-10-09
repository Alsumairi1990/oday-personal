// import Image from 'next/image';
// import NavBar from '../NavBar';
// import Hero from '../_components/HeroSect';
// import Services from '../_components/Services';
// import ServicesFull from '../_components/ServicesFull';
// import About from '../_components/About';
// import Blogs from '../_components/Blogs';
// import PhaseCompany from '../_components/PhaseCompany';
// import Works from '../_components/Works';
// import Testimonials from '../_components/Testimonials';
// import ServiceApp from '../_components/ServiceApp';
// import Footerk from '../_components/Footer';
// import { getLocale, getMessages } from 'next-intl/server';
// import {
//   getServiceCatMeta,
//   getAboutUsData,
//   getBlogMeta,
//   getForntBlogs,
//   getPhaseElements,
//   getHeroData,
//   getWorkMeta,
//   getWorksMainPage,
//   getTesimonialsFront,
//   getTesimonialsMeta,
//   getServiceCategory,
//   gethaseMeta,
  
// } from './admin/common/_actions/FrontActions';
// import { getServices } from './_actions/Actions';
// import { getMenusElementse2 } from './admin/setting/left-nav/_actions/Action';

// export const revalidate = 6000; // Set the ISG revalidation time at the page level

// export default async function Home() {
//   const locale = await getLocale();
//   const messages = await getMessages({ locale });

//   // Fetch data using server actions
//   const services = await getServices(); 
//   const serviceCatMeta = await getServiceCatMeta();
//   const categories = await getServiceCategory();
//   const heroData = await getHeroData();
//   const menusData = await getMenusElementse2();
//   const blogsMeta = await getBlogMeta();
//   const blogs = await getForntBlogs();
//   const phases = await getPhaseElements();
//   const phaseMeta = await gethaseMeta();
//   const workMeta = await getWorkMeta();
//   const works = await getWorksMainPage();
//   const aboutUS = await getAboutUsData();
//   const testimonials = await getTesimonialsFront();
//   const testimonialMeta = await getTesimonialsMeta();

//   return (
//     <main className="flex flex-col dark:bg-[#111]">
//       <div className="flex flex-col">
//         {menusData && <NavBar menusData={menusData} />}
//       </div>
      
//       <div className="hed">
//         {heroData && <Hero heroData={heroData} services={services} categories={categories} />}
//       </div>

//       <div className="clear"></div>
//       <div className='gray:bg-[#111]'>
//         <Services categories={categories} meta={serviceCatMeta} />
//       </div>

//       <div className='gray:bg-[#111]'>
//        <Services categories={categories} meta={serviceCatMeta}  />
//       </div>

//       <div className="gray:bg-[#111]">
//         {aboutUS && <About aboutUS={aboutUS} />}
//       </div>
//       <div className="dark:bg-[#111]">
//         {blogs && <Blogs meta={blogsMeta} posts={blogs} />}
//       </div>

//       <div className="dark:bg-black-100">
//          {phases && <PhaseCompany phases={phases} meta={phaseMeta} />}

//       </div>

//       <div className="dark:w-11/12 mx-auto dark:bg-[#111]">
//         {works && <Works works={works} meta={workMeta} />}
//       </div>

//       <div className="w-full my-24">
//         {testimonials && <Testimonials testimonials={testimonials} meta={testimonialMeta} />}
//       </div>

//       <div className="w-full my-10 sm:my-24 dark:bg-black-100">
//         <ServiceApp />
//       </div>
      
//       <div className='w-full pt-8 bg-[#111]'>
//         <Footerk />
//       </div>
//     </main>
//   );
// }

import Image from 'next/image'
import NavBar from '../NavBar'
import Hero from '../_components/HeroSect'
import Services from '../_components/Services'
import ServicesFull from '../_components/ServicesFull'
import About from '../_components/About'
import Blogs from '../_components/Blogs'
import { phases } from '../utils/Phases'
import ProcessPhase from '../_components/_services/ProcessPhase'
import Works from '../_components/Works'
import Testimonials from '../_components/Testimonials'
import Subscribe from '../_components/Subscribe'
import ServiceApp from '../_components/ServiceApp'
import Footerk from '../_components/Footer'
import { getLocale, getMessages } from 'next-intl/server';
import { getServices } from './_actions/Actions'
import { getAboutUsData, getBlogMeta, getForntBlogs, gethaseMeta, getHeroData, getIndustries, getPhaseElements, getServiceCategory, getServiceMeta, getTesimonialsFront, getTesimonialsMeta, getWorkMeta, getWorksMainPage } from './admin/common/_actions/FrontActions';
import { getServiceCatMeta } from './admin/common/_actions/FrontActions'
import { MenuWithAllModels } from './admin/setting/left-nav/_utils/MenuWithAllModels'
import { getMenusElementse2 } from './admin/setting/left-nav/_actions/Action'
import PhaseCompany from '../_components/PhaseCompany'
import IndustryCard from '../_components/IndustryCard'
import { Category, Industry, Post, Service, Testimonial } from '@prisma/client'
import { PhaseWithModels } from './admin/service/phases/utils/PhaseWithModels'
import { WorksFrontData } from './admin/works/utils/WorksFrontData'
export default async function Home() {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const res = await fetch(`http://localhost:3000/api/front/service`, {
    method: 'GET',
    next: { revalidate: 60 }, // Revalidate for ISR if needed
  });
  const Categories = await fetch(`${process.env.NEXTAUTH_URL}/api/front/categories`, {
    method: 'GET',
    next: { revalidate: 60 }, // Revalidate for ISR if needed
  });

  const elements = await fetch(`${process.env.NEXTAUTH_URL}/api/front/menu`, {
    method: 'GET',
    next: { revalidate: 60 }, // Revalidate for ISR if needed
  });
  const latestPosts = await fetch(`${process.env.NEXTAUTH_URL}/api/front/posts/latest`, {
    method: 'GET',
    next: { revalidate: 60 }, // Revalidate for ISR if needed
  });

  const pagePhases = await fetch(`${process.env.NEXTAUTH_URL}/api/front/phases`, {
    method: 'GET',
    next: { revalidate: 60 }, // Revalidate for ISR if needed
  });
  const pageWorks = await fetch(`${process.env.NEXTAUTH_URL}/api/front/works/home`, {
    method: 'GET',
    next: { revalidate: 60 }, // Revalidate for ISR if needed
  });

  const pageTestimonials = await fetch(`${process.env.NEXTAUTH_URL}/api/front/testimonials/home`, {
    method: 'GET',
    next: { revalidate: 60 }, // Revalidate for ISR if needed
  });

  const pageIdustries = await fetch(`${process.env.NEXTAUTH_URL}/api/front/industries/home`, {
    method: 'GET',
    next: { revalidate: 60 }, // Revalidate for ISR if needed
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

  // Variable declarations
// let services;
let servicesMeta;
let serviceCatMeta;
// let categories;
let heroData;
let menusData: Record<number, MenuWithAllModels[]>;
let blogsMeta;
let blogs;
// let phases;
let phaseMeta;
let workMeta;
// let works;
let aboutUS;
// let testimonials;
let testimonialMeta;
// let industries:Industry[];

try {
  [
    // services,
    serviceCatMeta,
    // categories,
    heroData,
    menusData,
    blogsMeta,
    // blogs,
    // phases,
    phaseMeta,
    workMeta,
    // works,
    aboutUS,
    // testimonials,
    testimonialMeta,
    servicesMeta,
    // industries,
  ] = await Promise.all([
    // getServices(),
    getServiceCatMeta(),
    // getServiceCategory(),
    getHeroData('mainPage'),
    getMenusElementse2(),
    getBlogMeta(),
    // getForntBlogs(),
    // getPhaseElements(),
    gethaseMeta(),
    getWorkMeta(),
    // getWorksMainPage(),
    getAboutUsData(),
    // getTesimonialsFront(),
    getTesimonialsMeta(),
    getServiceMeta(),
    // getIndustries()
  ]);
} catch (error) {
  console.error("Failed to fetch service meta:", error);
  return (
    <div className="error-message">
      <h2>Failed to load services</h2>
      <p>There was an issue loading the services. Please try again later.</p>
    </div>
  );
}

  // let services ;
  // let servicesMeta ;
  // let serviceCatMeta;
  // let categories;
  // let heroData;
  // let menusData:Record<number, MenuWithAllModels[]> ;
  // let blogsMeta;
  // let blogs;
  // let phases;
  // let phaseMeta;
  // let workMeta;
  // let works;
  // let aboutUS;
  // let testimonials;
  // let testimonialMeta;

  // try {
  //   services = await getServices();
  //   serviceCatMeta = await getServiceCatMeta();
  //   categories = await getServiceCategory();
  //   heroData = await getHeroData();
  //   menusData = await getMenusElementse2();
  //   blogsMeta = await getBlogMeta();
  //   blogs = await getForntBlogs();
  //   phases = await getPhaseElements();
  //   phaseMeta = await gethaseMeta();
  //   workMeta = await getWorkMeta();
  //   works = await getWorksMainPage();
  //   aboutUS =  await getAboutUsData();
  //   testimonials = await getTesimonialsFront();
  //   testimonialMeta = await getTesimonialsMeta();
  //   servicesMeta = await getServiceMeta();

  // } catch (error) {
  //   console.error("Failed to fetch service meta:", error);
  //   return (
  //     <div className="error-message">
  //       <h2>Failed to load services</h2>
  //       <p>There was an issue loading the services. Please try again later.</p>
  //     </div>
  //   );
  // }
 
  return (
    <main className="flex flex-col dark:bg-[#111]">
       <div className="flex flex-col">
        {menusData && <NavBar menusData={menuElements} />}
          </div>   
      <div className="hed">
       {heroData && <Hero heroData={heroData} services={servicesR} categories={categoriesResult} /> }
      </div>

     {servicesR.length}
     <div className="clear"></div>
     <div className='gray:bg-[#111]"'>
     {categoriesResult && <Services categories={categoriesResult} meta={serviceCatMeta}  />}
     </div>
     <div className='gray:bg-[#111]"'>
     {servicesR && servicesMeta && <ServicesFull services={servicesR} meta={servicesMeta} />}
     </div>
     <div className="w-full my-8 pb-8  bg-gray-100 dark:bg-[#111] ">
          <div className="w-full mx-auto">
            {/* <div className="flex flex-col items-center sm:mb-8">
               {locale == 'en' ? <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Our Industries </h2>
               :  <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide font-arabic dark:text-orange-400">industry<span className="text-orange-600">{category.nameAr}</span></h2>
            }
            </div> */}
            <div className="grid grid-cols-2 sm:grid-cols-4  max-sm:p-4">
            {industries && industries.map((industry, index:number) => (
               <IndustryCard key={industry.id} industry={industry} locale={locale} messages={messages} />
            ))}
            </div>
           </div>
      </div>
     <div className="gray:bg-[#111]">
     {aboutUS && <About aboutUS={aboutUS} /> }
     </div>
     <div className="dark:bg-[#111]">
     {blogs &&  <Blogs meta={blogsMeta} posts={posts}  /> }
     </div>
     <div className="">
     </div>
     <div className="dark:bg-black-100">
      {phases && <PhaseCompany phases={phases} meta={phaseMeta} />}
     </div>
     <div className="">
      <div className="dark:w-11/12 mx-auto  dark:bg-[#111]">
      {works && <Works  works = {works} meta={workMeta} /> }
      </div>
      </div>
      <div className="w-full my-24 ]">
      {testimonials &&  <Testimonials testimonials={testimonials} meta={testimonialMeta} /> }
      </div>
      <div className="w-full my-10 sm:my-24 dark:bg-black-100">
      <ServiceApp />
      </div>
      <div className='w-full pt-8 bg-[#111]'>
          <Footerk />
          </div>
    </main>
  )
}
