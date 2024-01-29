
import ContactForm from "@/app/_components/ContactForm";
const ContactUS = () => {
    const imagePath = 'https://dcstatic.com/images/background/background-about-us-c188d84f24.svg';
    const imagePath1 = 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/main/contact.jpg';
    const imagePath2 = '/images/service2.png';
    const imagePath3 = "https://nextbigtechnology.com/wp-content/uploads/2021/07/contact-bottom.png"
    
   return (
      <div className="w-full p-0" >
         <div className=" m-h-lvh sm:hfull pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath1})`}}>
         {/* <div className="w-full h-full absolute left-0 top-0 bg-black z-10 opacity-70"></div> */}
          <div className="flex flex-wrap w-11/12 mx-auto z-20">
            
             <div className="flex-100 sm:flex-60">
             <span className="text-md text-white mb-6 inline-block">Home / mobile development </span>
                 <h2 className="text-4xl text-white font-extrabold mb-4">API Integration Services</h2>
                 <h2 className="text-4xl text-white font-bold mb-4">Best API Integration Company</h2>
                 <p className="text-mdnav text-gray-100 leading-7">Let our team of Experts take care of your business app with application maintenance and support services that can help you ensure that your application is secure, up-to-date, and running at peak performance.</p>
                 <div className="flex  mt-6 items-center  ">
                    {/* <div className="pl-2 pr-4 flex items-center py-2 rounded-md bg-[#f85508] ">
                       <span className="w-6  mr-1 bainline-block">
                       <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#fff"/>
                          </svg>                     </span>
                       <span className=" inline-block text-white text-base font-semibold ">Talk to  Consultant </span>
                    </div>
                    <div className=" pl-2 pr-4 flex items-center py-2 rounded-md ml-4 bg-white" style={{boxShadow:'rgb(87 156 217) 0px 0px 10px 1px'}}>
                    <span className=" inline-block text-blue-500 text-base font-semibold  ">Contact  </span>
                    </div> */}
                    
  
                 </div>
             </div>
             
             <div className=" hidden sm:flex flex-100 sm:flex-40">
             <img className="w-full z-20" src={imagePath2} alt="" />
             </div>
          </div>
         </div>
         
         <div className="w-11/12 mx-auto z-20 relative -mt-10">
            <ContactForm />
         </div>
         
 
         <div className="w-full px-14 mx-auto mt-10 sm:pb-16 bg-gray-100" style={{backgroundImage: `url(${imagePath})`}}>
            <div className="p-4 text-center " >
               <h2 className="text-gray-800 font-bold text-2xl mb-2">Company overview</h2>
               <p className="text-gray-600 text-md">Perfect for custom graphic, logo, web and print design. DesignCrowd is an online creative marketplace that helps start-ups, businesses and entrepreneurs connect with a global network of designers. Perfect for custom graphic, logo, web and print design. DesignCrowd also owns and manages BrandCrowd, an online logo maker.</p>
            
            <div className="grid sm:grid-cols-3 gap-8 my-8 justify-center text-[#5d6d81]">
               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-500 fill-orange-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        </span>
                     </div>
                     <div className="flex-80medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">Email</span>
                        <p className="uppercase text-sm">sam_designs@gmail.com</p>
                     </div>
               </div>

               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-500 fill-orange-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        </span>
                     </div>
                     <div className="flex-80medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">Email</span>
                        <p className="uppercase text-sm">sam_designs@gmail.com</p>
                     </div>
               </div>

               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-500 fill-orange-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        </span>
                     </div>
                     <div className="flex-80medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">Email</span>
                        <p className="uppercase text-sm">sam_designs@gmail.com</p>
                     </div>
               </div>

               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-500 fill-orange-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        </span>
                     </div>
                     <div className="flex-80medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">Email</span>
                        <p className="uppercase text-sm">sam_designs@gmail.com</p>
                     </div>
               </div>

               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-500 fill-orange-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        </span>
                     </div>
                     <div className="flex-80medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">Email</span>
                        <p className="uppercase text-sm">sam_designs@gmail.com</p>
                     </div>
               </div>

               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-500 fill-orange-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        </span>
                     </div>
                     <div className="flex-80medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">Email</span>
                        <p className="uppercase text-sm">sam_designs@gmail.com</p>
                     </div>
               </div>
                     
 
            </div>
            </div>
         </div>


         <div className="p-4 w-8/12 mx-auto sm:-mt-16 sm:mb-10 bg-[#ecf1fd] border border-gray-200 rounded-md">
            <div className="grid grid-cols-2">
               <div className="p-4">
                  <h2 className="text-2xl text-gray-700 capitalize font-bold mb-6">Have you question ?</h2>
                  <div className="flex mb-4">
                     <span className="text-md flex-45 flex font-semibold pr-4 text-gray-500">Get Free Consultation </span>
                     <span className="text-md flex-55 flex pr-4 text-orange-500 font-semibold" >: samedu-inq@gmail.com</span>
                  </div>
                  <div className="flex mb-4">
                     <span className="text-md flex flex-45 font-semibold pr-4 text-gray-500">For job enquey    </span>
                     <span className="text-md flex flex-55 pr-4 text-orange-500 font-semibold" >: samedu-job@gmail.com</span>
                  </div>

                  <div className="flex mt-4">
                     <a href="#" className="text-md text-white rounded-md flex flex-55 px-4 py-2.5 mt-4 bg-orange-500 font-semibold" >Let Us talk on wastsapp</a>
                  </div>
                  
               </div>
               <div className="p-4">
                  <img src={imagePath3} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
 };
 export default ContactUS;