import Image from 'next/image'
import Hero from './_components/HeroSect'
import Services from './_components/Services'
import NavBar from './NavBar'
import About from './_components/About'
import Blogs from './_components/Blogs'
import Footerk from './_components/Footer'
import Works from './_components/Works'

import Testimonials from './_components/Testimonials'
import Subscribe from './_components/Subscribe'
import ServiceApp from './_components/ServiceApp'


export default function Home() {
  return (
    <main className="flex flex-col dark:bg-[#111]">
       <div className="flex flex-col">
        <NavBar textColor="gray-100"/>
        
          </div>
      <div className="hed">
      {/* <NavBar /> */}
       <Hero />
       
      </div>
     
     <div className="clear"></div>
     <div className='gray:bg-[#111]"'>
     <Services  />
     </div>
     <div className="gray:bg-[#111]">
     <About />
     </div>
     <div className="dark:bg-[#111]">
     <Blogs />
     </div>
     <div className="daek:bg-[#111]">
      <div className="w-11/12 mx-auto ">
      <Works />
      </div>
      </div>
      <div className="w-full my-24 dark:bg-black-100">
      <Testimonials />
      </div>
      <div className="w-full my-24 dark:bg-black-100">
      <Subscribe />
      </div>

      <div className="w-full my-24 dark:bg-black-100">
      <ServiceApp />
      </div>
      
      
   
     {/* <div>
      <Footerk />
     </div> */}

          <div className='w-full pt-8 bg-[#111]'>
          <Footerk />
          </div>
    </main>
  )
}
