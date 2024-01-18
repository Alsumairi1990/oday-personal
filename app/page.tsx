import Image from 'next/image'
import Hero from './_components/HeroSect'
import Services from './_components/Services'
import NavBar from './NavBar'
import About from './_components/About'


export default function Home() {
  return (
    <main className="flex flex-col h-[80rem] bg-[#111]">
      <div className="hed">
      <NavBar />
       <Hero />
       
      </div>
     
     <div className="clear"></div>
     <div>
     <Services />
     </div>
     <div className="">
     <About />
     </div>
     
    </main>
  )
}
