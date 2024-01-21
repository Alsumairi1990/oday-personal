import Image from 'next/image'
import Hero from './_components/HeroSect'
import Services from './_components/Services'
import NavBar from './NavBar'
import About from './_components/About'
import Blogs from './_components/Blogs'
import Footerk from './_components/Footer'
import Works from './_components/Works'
import Testimonials from './_components/Testimonials'


export default function Home() {
  return (
    <main className="flex flex-col bg-[#111]">
       <div className="flex flex-col">
        <NavBar />
        
          </div>
      <div className="hed">
      {/* <NavBar /> */}
       <Hero />
       
      </div>
     
     <div className="clear"></div>
     <div>
     <Services />
     </div>
     <div className="bg-[#111]">
     <About />
     </div>
     <div className="bg-[#111]">
     <Blogs />
     </div>
     <div className="bg-[#111]">
      <div className="w-11/12 mx-auto ">
      <Works />
      </div>
      </div>
      <div className="w-full my-24 dark:bg-black-100">
      <Testimonials />
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
