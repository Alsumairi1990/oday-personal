import ServiceIntro from "@/app/_components/ServiceIntro";
import Service from "@/app/_components/_services/Service";


const Serivices = () => {
    const imagePath = 'https://nextbigtechnology.com/wp-content/uploads/2019/08/ecommerce.png';
    const imagePath1 = '/images/curve.png';
    const imagePath2 = 'https://nextbigtechnology.com/wp-content/themes/nbt/imagesmay2022/clients_projectbg.jpg';
    const services = [
                  {
                        id : "1",
                        name : 'Printing Services',
                        desc : 'Awarded as the Best Website Development Company by GESIA category region',
                        image : 'https://cdn.cmarix.com/images/home/mobile-application-development.webp'
                     },
                     {
                        id : "2",
                        name : 'Mobile Dign',
                        desc : 'Awarded as the Best Website Development Company by GESIA category region',
                        image : 'https://nextbigtechnology.com/wp-content/uploads/2022/06/Mobile_Game_Development_img.png'
                    },
                    {
                      id : "3",
                      name : 'Packaging Services',
                      desc : 'Awarded as the Best Website Development Company by GESIA category region',
                      image : 'https://cdn.cmarix.com/images/home/mobile-application-development.webp'
                    },
                    {
                     id : "1",
                       name : 'Logo Design',
                       desc : 'Awarded as the Best Website Development Company by GESIA category region',
                       image : 'https://nextbigtechnology.com/wp-content/uploads/2022/06/Mobile_Game_Development_img.png'
                    }

                  ]
 
   return (
      <div className="w-full">
       <div className=" min-h-lvh pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath})`}}>
          <div className="flex w-11/12 mx-auto">
             <div className="flex-60">
                <span className="text-sm text-white mb-6 inline-block">Home / mobile development </span>
                <h2 className="text-4xl text-white font-extrabold mb-4">API Integration Services</h2>
                <h2 className="text-4xl text-white font-bold mb-4">Best API Integration Company</h2>
                <p className="text-sm text-gray-100 leading-7">Let our team of Experts take care of your business app with application maintenance and support services that can help you ensure that your application is secure, up-to-date, and running at peak performance.</p>
                <div className="flex  mt-6 items-center  ">
                   <div className="pl-2 pr-4 flex items-center py-2 rounded-md bg-[#f85508] ">
                      <span className="w-6  mr-1 bainline-block">
                      <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                         <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#fff"/>
                         </svg>                     </span>
                      <span className=" inline-block text-white text-base font-semibold ">Talk to  Consultant </span>
                   </div>
                   <div className=" pl-2 pr-4 flex items-center py-2 rounded-md ml-4 bg-white" style={{boxShadow:'rgb(87 156 217) 0px 0px 10px 1px'}}>
                   <span className=" inline-block text-blue-500 text-base font-semibold  ">Contact  </span>
                   </div>
                   
 
                </div>
             </div>
             {/* <div className="flex-40">
             <img className="w-full z-20" src={imagePath2} alt="" />
             <span className="absolute top-[25%] w-12 left-[60%] z-10"><img src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/mobile/Header/Mobile-Common-Icon-4.png" alt="" /></span>
 
             <span className="absolute top-[30%] w-10 right-8 z-10"><img src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/mobile/Header/Mobile-Common-Icon-5.png" alt="" /></span>
             <span className="absolute bottom-[30%] w-16 left-[50%] z-10"><img src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/mobile/Header/Mobile-Common-Icon-3.png" alt="" /></span>
 
             </div> */}
          </div>
 
         <div className="absolute left-0 bottom-0">
          <img className="w-full" src={imagePath1} alt="" />
         </div>
         </div>


         <div className="py-4 px-8 pt-0 w-full ">
            <div className="flex w-11/12 mb-6 mx-auto">
                <h2 className="text-3xl text-gray-700 font-semibold leading-10 text-center">We are creating robust, topnotch <span className="text-orange-500">Web Applications</span> With trending Technologies</h2>
            </div>
        </div>  
 
 
         <div className="py-4 px-8 pt-0 w-full">
            <div className="grid sm:grid-cols-4 gap-6">
             {/* <div className="flex-100 sm:flex-35 p-2 pt-0 ">
                <div className="flex flex-wrap  justify-between">
                  <span className="text-black-100 uppercase text-sm mb-2">KNOW US BETTER</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-">What Company Do?</h2>
                <div className="flex mt-4">
                   <p className="text-sm leading-7 text-gray-900">Webvolty is an Indian  IT Company for Website Development, Web Designing, Mobile App Development, Software Development, Web Hosting, Search Engine Optimization, Mobile Solutions and lot many IT and IT Enabled Services.</p>
                </div>
             </div> */}
             <div className="flex-100 sm:flex-20 p-2">
                  <div className="bg-[#f9f9f9] py-3 text-center rounded-md  border border-gray-200">
                   <div className="flex px-2  justify-center">
                      <img src="https://cdn.cmarix.com/images/home/mobile-application-development.webp" alt="" />
                   </div>
                   <div className="mt-1.5">
                      <p className="text-gray-800 text-2xl mb-1 font-bold ">Printing Services</p>
                      <p className="text-gray-500 text-sm tracking-8 font-medium mb-3">Awarded as the Best Website Development Company by GESIA category region</p>
                      <a href="" className="text-gray-50 px-2 py-1 bg-orange-500 text-sm font-medium border border-orange-500 rounded-md shadow-md">Details</a>
                   </div>
                </div>
             </div>
 
             <div className="flex-100 sm:flex-20 p-2">
                <div className="bg-[#f9f9f9] py-3 text-center rounded-md  border border-gray-200">
                   <div className="flex px-2  justify-center">
                      <img src="https://cdn.cmarix.com/images/home/mobile-application-development.webp" alt="" />
                   </div>
                   <div className="mt-1.5">
                      <p className="text-gray-800 text-2xl mb-1 font-bold ">Custom Designs</p>
                      <p className="text-gray-500 text-sm tracking-8 font-medium mb-3">Awarded as the Best Website Development Company by GESIA category region</p>
                      <a href="" className="text-gray-50 px-2 py-1 bg-orange-500 text-sm font-medium border border-orange-500 rounded-md shadow-md">Details</a>
                   </div>
                </div>
             </div>
 
             <div className="flex-100 sm:flex-20 p-2">
                 <div className="bg-[#f9f9f9] py-3 text-center rounded-md  border border-gray-200">
                   <div className="flex px-2  justify-center">
                      <img src="https://cdn.cmarix.com/images/home/mobile-application-development.webp" alt="" />
                   </div>
                   <div className="mt-1.5">
                      <p className="text-gray-800 text-2xl mb-1 font-bold ">Branding Design</p>
                      <p className="text-gray-500 text-sm tracking-8 font-medium mb-3">Awarded as the Best Website Development Company by GESIA category region</p>
                      <a href="" className="text-gray-50 px-2 py-1 bg-orange-500 text-sm font-medium border border-orange-500 rounded-md shadow-md">Details</a>
                   </div>
                </div>
             </div>

             <div className="flex-100 sm:flex-20 p-2">
                 <div className="bg-[#f9f9f9] py-3 text-center rounded-md  border border-gray-200">
                   <div className="flex px-2  justify-center">
                      <img src="https://cdn.cmarix.com/images/home/mobile-application-development.webp" alt="" />
                   </div>
                   <div className="mt-1.5">
                      <p className="text-gray-800 text-2xl mb-1 font-bold ">Ebook cover Design</p>
                      <p className="text-gray-500 text-sm tracking-8 font-medium mb-3">Awarded as the Best Website Development Company by GESIA category region</p>
                      <a href="" className="text-gray-50 px-2 py-1 bg-orange-500 text-sm font-medium border border-orange-500 rounded-md shadow-md">Details</a>
                   </div>
                </div>
             </div>
            
            </div>
         </div>


         <div className="w-full mt-16">
            <div className="w-full py-6 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${imagePath2})`}}>
               <div className="p2 grid  w-10/12 mx-auto sm:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                        <span className="font-bold mb-2 inline-block text-gray-50 dark:text-orange-500 text-3xl">1.2M</span>
                        <p className="uppercase text-sm text-gray-200 dark:text-gray-200 ">Graphic Designers</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="font-bold mb-2 inline-block text-gray-50 dark:text-orange-500 text-3xl">1.2M</span>
                        <p className="uppercase text-sm text-gray-200 dark:text-gray-200 ">Graphic Designers</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="font-bold mb-2 inline-block text-gray-50 dark:text-orange-500 text-3xl">1.2M</span>
                        <p className="uppercase text-sm text-gray-200 dark:text-gray-200 ">Graphic Designers</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="font-bold mb-2 inline-block text-gray-50 dark:text-orange-500 text-3xl">1.2M</span>
                        <p className="uppercase text-sm text-gray-200 dark:text-gray-200 ">Graphic Designers</p>
                     </div>
                   
               </div>

            </div>
            
             <ServiceIntro  />
           
            
         </div>
 
         <div className="w-full mt-16 ">
            <div className="flex justify-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:mt-4 sm:mb-8 capiltalize tracking-wider"><span className=' pb-3 '> Mobile  </span>App Development Solutions</h2>

            </div>

          <div className="w-full mx-auto  bg-[#f8f8f8]">
            <div className="w-11.5/12 mx-auto flex flex-wrap">
                
                <div className="flex-100 sm:flex-40 pl-2 py-3  relative" >
                    <div className="h-full bg-white rounded-md border border-gray-200 ">
                      <img className="w-full sm:absolute top-1.5 -right-16 " src="https://cdn.cmarix.com/images/home/enterprise-software-development.webp" alt="" />

                    </div>
                </div>
                <div className="py-3 px-2 flex-100  sm:flex-60 pl-14">
                  <div className="p-2 pl-4 rounded-md bg-white border border-gray-200">
                  <h2 className="text-2xl font-bold text-[#439bc2] mb-3">Printing Services</h2>
                    <p className="text-xl font-bold text-gray-700 mb-6 ">Creating advanced and competitive digital solutions </p>
                     <p className="text-sm text-gray-700 font-medium leading-8">When you want to bring new records on ground, working with any off-the-shelf software will not make your game go further. With our custom enterprise software development services, we map all the challenges you have and deliver groundbreaking software. We complete your digital ecosystem with power-pack fully functional, featured custom software..</p>
                     <span className="inline-block text-white text-base font-semibold px-3 py-1.5 bg-violet-600 rounded mt-6">Get More </span>
                  </div>
                </div>
            </div>

            <div className="w-11.5/12 mx-auto flex flex-wrap">
                
               
                <div className="py-3 px-2 flex-100  sm:flex-60 pr-14">
                  <div className="p-2 pl-4 rounded-md bg-white border border-gray-200">
                  <h2 className="text-2xl font-bold text-[#439bc2] mb-3">Printing Services</h2>
                    <p className="text-xl font-bold text-gray-700 mb-6 ">Creating advanced and competitive digital solutions </p>
                     <p className="text-sm text-gray-700 font-medium leading-8">When you want to bring new records on ground, working with any off-the-shelf software will not make your game go further. With our custom enterprise software development services, we map all the challenges you have and deliver groundbreaking software. We complete your digital ecosystem with power-pack fully functional, featured custom software..</p>
                     <span className="inline-block text-white text-base font-semibold px-3 py-1.5 bg-violet-600 rounded mt-6">Get More </span>
                  </div>
                </div>

                <div className="flex-100 sm:flex-40 py-3 pr-2  relative" >
                    <div className="h-full bg-white rounded-md border border-gray-200 ">
                      <img className="w-full sm:absolute top-1.5 -left-16 " src="https://cdn.cmarix.com/images/home/enterprise-software-development.webp" alt="" />

                    </div>
                </div>
            </div>
           </div>
         </div>

         <div className="w-full my-16">
          <div className="w-full mx-auto">
            <div className="flex justify-center mb-6">
               <h2 className="sm:text-3xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Our Top Mobile Website Design Services</h2>
            </div>
            <div className=" grid sm:grid-cols-4 gap-8">
            {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
            </div>
            
           </div>
         </div>
 
      </div>
   )
 };
 export default Serivices;