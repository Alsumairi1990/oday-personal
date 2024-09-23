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
import { getHeroData, getServiceCategory, getServiceMeta } from './admin/common/_actions/FrontActions';
import { getServiceCatMeta } from './admin/common/_actions/FrontActions'




export default async function Home() {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  let services ;
  let servicesMeta ;
  let serviceCatMeta;
  let categories;
  let heroData;
  try {
    services = await getServices();
    serviceCatMeta = await getServiceCatMeta();
    categories = await getServiceCategory();
    heroData = await getHeroData();
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
        <NavBar textColor="gray-100"/>
        
          </div>
          
      <div className="hed">
      
       {heroData && <Hero heroData={heroData} /> }
       
      </div>
      
     {/* <div className="p-6 text-gray-900 text-2xl font-bold">{locale}</div> */}
     <div className="clear"></div>
     <div className='gray:bg-[#111]"'>
     <Services categories={categories} meta={serviceCatMeta}  />
     </div>

     <div className='gray:bg-[#111]"'>
     {services && servicesMeta && <ServicesFull services={services} meta={servicesMeta} />}
     </div>

     <div className="gray:bg-[#111]">
     <About />
     </div>
     <div className="dark:bg-[#111]">
     <Blogs />
     </div>
     <div className="dark:bg-black-100">
     <div className="w-full my-16 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">How it works</h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
            </div>
            <div className="flex flex-wrap gap-8 max-sm:p-4 sm:justify-between">
            {phases.map((phase, index:number) => (
               <ProcessPhase key={phase.id} phase={phase} index={index} />
            ))}
            </div>
           </div>
      </div>

     </div>

     <div className="">
      <div className="dark:w-11/12 mx-auto  dark:bg-[#111]">
      <Works />
      </div>
      </div>
      <div className="w-full my-24 ]">
      <Testimonials />
      </div>
      <div className="w-full bg-gray-800 my-10 sm:my-24 dark:bg-black-100">
      <Subscribe />
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
