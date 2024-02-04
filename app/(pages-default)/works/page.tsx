import ServiceWork from "@/app/_components/_services/ServiceWork";
import { serviceWorks } from '@/app/utils/ServiceWorks';


const Works = () => {
    const imagePath = 'https://dcstatic.com/images/background/background-about-us-c188d84f24.svg';
    const bkImage = '/images/workbg.webp';
    const imagePath2 = '/images/service2.png';
    
   return (
      <div className="w-full" >
         <div className="w-full bg-white max-sm:h-lvh bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${bkImage})`}}>
          <div className="w-11/12 mx-auto pt-8 ">
          <div className="p-2 grid grid-cols-2">
             
             <div className="p-4 pl-8  pt-8 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-white mb-3">We Are ControlF5</h2>
                <p className="text-xl font-bold text-gray-100 mb-6 ">Creating advanced and competitive digital solutions for both SMEs and Fortune companies.</p>
               <p className="text-base text-gray-200 font-semibold leading-7">We are a professional website and mobile app company with considerable experience in a variety of high-tech verticals such as eCommerce, finance, banking, healthcare, hospitality, and food and beverage. At its core, we assist our clients in innovating and implementing technological transformations.</p>
               <span className="inline-block text-white text-base font-semibold px-3 py-1.5 bg-violet-600 rounded mt-6">Get More </span>
             </div>
             <div className="p-2 pt-16 pl-8 ">
                <img className="w-full " src="https://dcstatic.com/images/hero/graphic-design-a36b2dbe7a.png" alt="" />
             </div>
          </div>
          </div>
         </div>



         <div className="w-full my-16 py-8 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Why Choose our Logo Design company Services? </h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">We have an incredibly talented and skilled team of logo designers who ensure quality Logo design services. Let's know some more reasons that make us the top Logo design service company to hire -</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {serviceWorks.map((work) => (
               <ServiceWork key={work.id} serviceWork={work}  />
            ))}
            </div>
           </div>
         </div>


 
         <div className="w-11/12 mx-auto my-10 " style={{backgroundImage: `url(${imagePath})`}}>
            <div className="p-4 text-center mb-4" >
               <h2 className="text-gray-800 font-bold text-2xl mb-2">Company overview</h2>
               <p className="text-gray-600 text-md">Perfect for custom graphic, logo, web and print design. DesignCrowd is an online creative marketplace that helps start-ups, businesses and entrepreneurs connect with a global network of designers. Perfect for custom graphic, logo, web and print design. DesignCrowd also owns and manages BrandCrowd, an online logo maker.</p>
            
            <div className="flex items-center gap-x-8 my-8 justify-center text-[#5d6d81]">
                     <div className="column  small-12 medium-4 large-2">
                        <span className="font-bold mb-2 inline-block text-3xl">1.2M</span>
                        <p className="uppercase text-sm">Graphic Designers</p>
                     </div>
                     <div className="column  small-12 medium-4 large-2">
                        <span className="font-bold mb-2 inline-block text-3xl">$71.7M+</span>
                        <p className="uppercase text-sm">Designs &amp; Contests</p>
                     </div>
                     <div className="column  small-12 medium-4 large-2">
                        <span className="font-bold mb-2 inline-block text-3xl">11.3M</span>
                        <p className="uppercase text-sm">Designs Uploaded</p>
                     </div>
                    
                     
                  </div>
            
            </div>
            <div className="flex flex-wrap sm:max-h-[23rem] overflow-hidden">
               <div className="sm:flex-30 pr-1">
                  <img className="w-full h-full" src="https://dcstatic.com/images/example-projects/en/example-project-a-a688e63735.jpg" alt="" />
               </div>
               <div className="sm:flex-50  ">
                  <div className="flex h-full gap-y-1 flex-col">
                  <div className="flex gap-1 ">
                     <div className="flex-70">
                       <img className="w-full h-full" src="https://dcstatic.com/images/example-projects/en/example-project-b-80fbea7b4d.jpg" alt="" />
                     </div>
                     <div className="flex-30">
                        <img  className="w-full h-full" src="https://dcstatic.com/images/example-projects/en/example-project-c-026dc02946.jpg" alt="" />
                     </div>
                  </div>
                  <div className="flex gap-1">
                     <div className="flex-30">
                        <img className="w-full h-full" src="https://dcstatic.com/images/example-projects/en/example-project-d-e748c82180.jpg" alt="" />
                     </div>
                     <div className="flex flex-70">
                        <img className="w-full h-full" src="https://dcstatic.com/images/example-projects/en/example-project-e-010e22fb98.jpg" alt="" />
                     </div>
                  </div>
                  </div>
                 
               </div>
               <div className="sm:flex-20 pl-2">
                  <div className="h-full">
                     <img className="w-full h-full" src="https://dcstatic.com/images/example-projects/en/example-project-f-a013c71eaa.jpg" alt="" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
 };
 export default Works;