import Image from 'next/image'
import Hero from './_components/HeroSect'
import Services from './_components/Services'
import NavBar from './NavBar'
import About from './_components/About'
import Blogs from './_components/Blogs'
import Footerk from './_components/Footer'
import Works from './_components/Works'


export default function Home() {
  return (
    <main className="flex flex-col bg-[#111]">
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
     {/* <div>
      <Footerk />
     </div> */}

     
    </main>
  )
}
