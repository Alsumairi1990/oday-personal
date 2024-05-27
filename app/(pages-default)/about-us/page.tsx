import { sendMail } from "@/utils/mail";


export default async function AboutUs() {
   try {
     await sendMail({ to: "samnaddeen2000@gmail.com", subject: "mailtest", body: "bodymessage" });
     console.log("Email sent successfully!");
   } catch (error) {
     console.error("Error sending email:", error);
     // Handle the error appropriately
   }
 
  
 }

// export default async function AboutUs(){
//     await sendMail({to:"samnaddeen2000@gmail.com",subject:"mailtest",body:"bodymessage"});
//     const imagePath = 'https://dcstatic.com/images/background/background-about-us-c188d84f24.svg';
//     const imagePath1 = 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/main/about.webp';
//     const imagePath2 = '/images/service2.png';
   
//    return (
//       <div className="w-full" >
//          <div className=" m-h-lvh sm:min-h-[28rem] sm:h-[28rem] pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath1})`}}>
//          <div className="w-full h-full absolute left-0 top-0 bg-black z-10 opacity-70"></div>
//           <div className="flex flex-wrap w-11/12 mx-auto z-20">
            
//              <div className="flex-100 sm:flex-60">
//              <span className="text-md text-white mb-6 inline-block">Home / mobile development </span>
//                  <h2 className="text-4xl text-white font-extrabold mb-4">API Integration Services</h2>
//                  <h2 className="text-4xl text-white font-bold mb-4">Best API Integration Company</h2>
//                  <p className="text-mdnav text-gray-100 leading-7">Let our team of Experts take care of your business app with application maintenance and support services that can help you ensure that your application is secure, up-to-date, and running at peak performance.</p>
//                  <div className="flex  mt-6 items-center  ">
//                     <div className="pl-2 pr-4 flex items-center py-2 rounded-md bg-[#f85508] ">
//                        <span className="w-6  mr-1 bainline-block">
//                        <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//                           <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#fff"/>
//                           </svg>                     </span>
//                        <span className=" inline-block text-white text-base font-semibold ">Talk to  Consultant </span>
//                     </div>
//                     <div className=" pl-2 pr-4 flex items-center py-2 rounded-md ml-4 bg-white" style={{boxShadow:'rgb(87 156 217) 0px 0px 10px 1px'}}>
//                     <span className=" inline-block text-blue-500 text-base font-semibold  ">Contact  </span>
//                     </div>
                    
  
//                  </div>
//              </div>
             
//              <div className=" hidden sm:flex flex-100 sm:flex-40">
//              <img className="w-full z-20" src={imagePath2} alt="" />
//              </div>
//           </div>
//          </div>
         

//          <div className="w-full bg-[#f4f2ff]">
//           <div className="w-11/12 mx-auto">
//           <div className="p-2 grid grid-cols-1  sm:grid-cols-2">
//              <div className="p-2">
//                 <img className="w-full " src="https://www.controlf5.in/wp-content/uploads/2024/01/Herosectionrightimage.webp" alt="" />
//              </div>
//              <div className="p-4 pl-8">
//                 <h2 className="text-xl font-bold text-orange-500 mb-3 uppercase ">Who We are</h2>
//                 <p className="text-2xl font-bold text-gray-700 mb-3 ">Building The Best Mobile Application For The World From Our Team Of Creative Minds. </p>
//                <p className="text-base text-gray-500 font-semibold leading-7">We are a professional website and mobile app company with considerable experience in a variety of high-tech verticals such as eCommerce, finance, banking, healthcare, hospitality, and food and beverage. At its core, we assist our clients in innovating and implementing technological transformations.</p>
//                <p className="text-base text-gray-500 font-semibold leading-7">We are a professional website and mobile app company with considerable experience in a variety of high-tech verticals such as eCommerce, finance, banking, </p>
//              </div>
 
//           </div>
//           </div>
//          </div>

       
//          <div className="pb-4 w-full mx-auto text-center mb-4 bg-gray-100" >
              
            
//             <div className="grid grid-cols-1 border-t border-t-gray-300 sm:grid-cols-3 gap-x-8 pt-6 mb-8 w-11/12 mx-auto text-[#5d6d81]">
//                     <div className="column  small-12 medium-4 large-2 bg-white p-4 rounded-md shadow-lg">
//                         <div className="p-1 flex items-center justify-center mb-2">
//                            <img src="https://richestsoft.com/wp-content/themes/richnew/images/about-us/about-point1.svg" alt="" />
//                         </div>
//                         <span className="font-bold mb-2 inline-block text-2xl capitalize">Our Vision</span>
//                         <p className="capitalize text-sm">Our mission as an app development company is to offer encouraging business solutions to entrepreneur across the world.</p>
//                      </div>
//                      <div className="column  small-12 medium-4 large-2 bg-white p-4 rounded-md shadow-lg">
//                         <div className="p-1 flex items-center justify-center mb-2">
//                            <img src="https://richestsoft.com/wp-content/themes/richnew/images/about-us/about-point2.svg" alt="" />
//                         </div>
//                         <span className="font-bold mb-2 inline-block text-2xl capitalize">Our Mission</span>
//                         <p className="capitalize text-sm">Our mission as an app development company is to offer encouraging business solutions to entrepreneur across the world.</p>
//                      </div>
//                      <div className="column  small-12 medium-4 large-2 bg-white p-4 rounded-md shadow-lg">
//                         <div className="p-1 flex items-center justify-center mb-2">
//                            <img src="https://richestsoft.com/wp-content/themes/richnew/images/about-us/about-point3.svg" alt="" />
//                         </div>
//                         <span className="font-bold mb-2 inline-block text-2xl capitalize">Cerified team</span>
//                         <p className="capitalize text-sm">Our mission as an app development company is to offer encouraging business solutions to entrepreneur across the world.</p>
//                      </div>
//                </div>
//             </div>




 
 
//          <div className="w-11/12 mx-auto my-10 " >
//             <div className="p-4 text-center mb-4" >
//                <h2 className="text-gray-800 font-bold text-3xl mb-2">Our Core <span className="text-orange-500">Values</span> </h2>
//                <p className="text-gray-600 w-11/12 text-md">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
//                <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 gap-x-8 my-8  text-[#5d6d81]">
//                     <div className="column  small-12 medium-4 large-2">
//                         <div className="p-1 flex mx-auto w-24 items-center justify-center mb-2">
//                            <img className="w-full"  src="https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg" alt="" />
//                         </div>
//                         <span className="font-bold mb-2 inline-block text-xl uppercase">Integrity</span>
//                         <p className="capitalize text-sm">Our mission as an app development company is to offer encouraging business solutions to entrepreneur across the world.</p>
//                      </div>
//                      <div className="column  small-12 medium-4 large-2">
//                         <div className="p-1 flex mx-auto w-24 items-center justify-center mb-2">
//                            <img className="w-full" src="https://dcstatic.com/images/icons/design-categories/design-categories-magazine-design-f15d13134d.svg" alt="" />
//                         </div>
//                         <span className="font-bold mb-2 inline-block text-xl uppercase">Teamwork</span>
//                         <p className="capitalize text-sm">Our mission as an app development company is to offer encouraging business solutions to entrepreneur across the world.</p>
//                      </div>
//                      <div className="column  small-12 medium-4 large-2">
//                         <div className="p-1 flex mx-auto w-24 items-center justify-center mb-2">
//                            <img className="w-full"  src="https://dcstatic.com/images/icons/design-categories/design-categories-resume-design-b1aa5b01e6.svg" alt="" />
//                         </div>
//                         <span className="font-bold mb-2 inline-block text-xl uppercase">Constant Improvement</span>
//                         <p className="capitalize text-sm">Our mission as an app development company is to offer encouraging business solutions to entrepreneur across the world.</p>
//                      </div>

//                      <div className="column  small-12 medium-4 large-2">
//                         <div className="p-1 flex mx-auto w-24 items-center justify-center mb-2">
//                            <img className="w-full"  src="https://dcstatic.com/images/icons/design-categories/design-categories-vector-design-f83cdf5668.svg" alt="" />
//                         </div>
//                         <span className="font-bold mb-2 inline-block text-xl uppercase">Innovation</span>
//                         <p className="capitalize text-sm">Our mission as an app development company is to offer encouraging business solutions to entrepreneur across the world.</p>
//                      </div>
//                      <div className="column  small-12 medium-4 large-2">
//                         <div className="p-1 flex w-24 mx-auto items-center justify-center mb-2">
//                            <img className="w-full"  src="https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg" alt="" />
//                         </div>
//                         <span className="font-bold mb-2 inline-block text-xl uppercase">Customer Experience</span>
//                         <p className="capitalize text-sm">Our mission as an app development company is to offer encouraging business solutions to entrepreneur across the world.</p>
//                      </div>
//                      <div className="  small-12 medium-4 large-2">
//                         <div className="p-1 mx-auto flex w-24 items-center justify-center mb-2">
//                            <img className="w-full" src="https://dcstatic.com/images/icons/design-categories/design-categories-logo-design-386041ef44.svg" alt="" />
//                         </div>
//                         <span className="font-bold mb-2 inline-block text-xl uppercase">Accountability</span>
//                         <p className="capitalize text-sm">Our mission as an app development company is to offer encouraging business solutions to entrepreneur across the world.</p>
//                      </div>
//                </div>
            
//             </div>
//          </div>

//       </div>
//    )
//  };
 
