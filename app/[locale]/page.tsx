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




export default async function Home() {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const services = await getServices();

  return (
    <main className="flex flex-col dark:bg-[#111]">
       <div className="flex flex-col">
        <NavBar textColor="gray-100"/>
        
          </div>
          
      <div className="hed">
      {/* <NavBar /> */}
       <Hero />
       
      </div>
      
     <div className="p-6 text-gray-900 text-2xl font-bold">{locale}</div>
     <div className="clear"></div>
     <div className='gray:bg-[#111]"'>
     <Services services={services} />
     </div>

     <div className='gray:bg-[#111]"'>
     <ServicesFull services={services} />
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
   
    </main>
  )
}