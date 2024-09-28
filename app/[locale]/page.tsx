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
import { getAboutUsData, getBlogMeta, getForntBlogs, gethaseMeta, getHeroData, getPhaseElements, getServiceCategory, getServiceMeta, getTesimonialsFront, getTesimonialsMeta, getWorkMeta, getWorksMainPage } from './admin/common/_actions/FrontActions';
import { getServiceCatMeta } from './admin/common/_actions/FrontActions'
import { MenuWithAllModels } from './admin/setting/left-nav/_utils/MenuWithAllModels'
import { getMenusElementse2 } from './admin/setting/left-nav/_actions/Action'
import PhaseCompany from '../_components/PhaseCompany'




export default async function Home() {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  let services ;
  let servicesMeta ;
  let serviceCatMeta;
  let categories;
  let heroData;
  let menusData:Record<number, MenuWithAllModels[]> ;
  let blogsMeta;
  let blogs;
  let phases;
  let phaseMeta;
  let workMeta;
  let works;
  let aboutUS;
  let testimonials;
  let testimonialMeta;

  try {
    services = await getServices();
    serviceCatMeta = await getServiceCatMeta();
    categories = await getServiceCategory();
    heroData = await getHeroData();
    menusData = await getMenusElementse2();
    blogsMeta = await getBlogMeta();
    blogs = await getForntBlogs();
    phases = await getPhaseElements();
    phaseMeta = await gethaseMeta();
    workMeta = await getWorkMeta();
    works = await getWorksMainPage();
    aboutUS =  await getAboutUsData();
    testimonials = await getTesimonialsFront();
    testimonialMeta = await getTesimonialsMeta();
  } catch (error) {
    console.error("Failed to fetch service meta:", error);
    // Return or render an error message when an error occurs
    return (
      <div className="error-message">
        <h2>Failed to load services</h2>
        <p>There was an issue loading the services. Please try again later.</p>
      </div>
    );
  }


  try {
    servicesMeta = await getServiceMeta();
  } catch (error) {
    console.error("Failed to fetch service meta:", error);
    // Return or render an error message when an error occurs
    return (
      <div className="error-message">
        <h2>Failed to load services</h2>
        <p>There was an issue loading the services. Please try again later.</p>
      </div>
    );
  }

  return (
    <main className="flex flex-col dark:bg-[#111]">
       <div className="flex flex-col">
        {menusData && <NavBar menusData={menusData} />}
        
          </div>
          
      <div className="hed">
      
       {heroData && <Hero heroData={heroData} services={services} categories={categories} /> }
       
      </div>
      
     {/* <div className="p-6 text-gray-900 text-2xl font-bold">{locale}</div> */}
     <div className="clear"></div>
     <div className='gray:bg-[#111]"'>
     <Services categories={categories} meta={serviceCatMeta}  />
     </div>

     <div className='gray:bg-[#111]"'>
     {/* {services && servicesMeta && <ServicesFull services={services} meta={servicesMeta} />} */}
     </div>

     <div className="gray:bg-[#111]">
     {/* {aboutUS && <About aboutUS={aboutUS} /> } */}
     </div>
     <div className="dark:bg-[#111]">
     {/* {blogs &&  <Blogs meta={blogsMeta} posts={blogs}  /> } */}
     </div>
     <div className="">

     </div>
     <div className="dark:bg-black-100">
      {/* {phases && <PhaseCompany phases={phases} meta={phaseMeta} />} */}

     </div>

     <div className="">
      <div className="dark:w-11/12 mx-auto  dark:bg-[#111]">
      {/* {works && <Works  works = {works} meta={workMeta} /> } */}
      </div>
      </div>
      <div className="w-full my-24 ]">
      {/* {testimonials &&  <Testimonials testimonials={testimonials} meta={testimonialMeta} /> } */}
      </div>
      {/* <div className="w-full bg-gray-800 my-10 sm:my-24 dark:bg-black-100">
      <Subscribe />
      </div> */}

      <div className="w-full my-10 sm:my-24 dark:bg-black-100">
      <ServiceApp />
      </div>
      <div className='w-full pt-8 bg-[#111]'>
          <Footerk />
          </div>
    </main>
  )
}
