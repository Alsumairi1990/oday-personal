import ServicesFull from "@/app/_components/ServicesFull";


const CompanyTeam = () => {
    const imagePath = 'https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/d3mds3ychln71.cloudfront.net/img/banners/38609a28efe1da66fb338fe868fc4428.our-team-banner.jpg';
    const imagePath1 = '/images/curve.png';
    const imagePath2 = '/images/service2.png';
 
   return (
      <div className="w-full">
       <div className=" m-h-lvh sm:min-h-[28rem] sm:h-[28rem] pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath})`}}>
          <div className="flex flex-wrap w-11/12 mx-auto">
             <div className="flex-100 sm:flex-60">
             <span className="text-md text-white mb-6 inline-block">Home / mobile development </span>
                 <h2 className="text-4xl text-white font-extrabold mb-4">API Integration Services</h2>
                 <h2 className="text-4xl text-white font-bold mb-4">Best API Integration Company</h2>
                 <p className="text-mdnav text-gray-100 leading-7">Let our team of Experts take care of your business app with application maintenance and support services that can help you ensure that your application is secure, up-to-date, and running at peak performance.</p>
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
             
             <div className=" hidden sm:flex flex-100 sm:flex-40">
             <img className="w-full z-20" src={imagePath2} alt="" />
             </div>
          </div>
         </div>
         
         <div className="w-full">
            <div className="flex my-8 flex-col w-11/12 mx-auto items-center">
               <h2 className="text-3xl text-gray-700 font-bold">Our <span className="text-orange-500">Team</span></h2>
               <p className="text-md text-center text-gray-600 pt-2 leading-7">Our AGILE approach provides not only effective solutions, but we also provide creative answers and unparalleled services to any technological challenges faced by our clients. Our Team is rich with industry and technology experts.</p>
            </div>
         </div>

         <div className="w-full mb-8">
            <div className="flex my-8 flex-col w-9/12 mx-auto items-center">
               <h2 className="text-3xl text-gray-700 font-bold">Meet Our <span className="text-orange-500">Team</span></h2>
            </div>
            <div className="bg-black-150">
               <div className="grid grid-cols-2 gap-y-8 w-11/12 mx-auto">
                  <div className="flex items-center p-4">
                     <div className="flex-25 p-2">
                        <img className="rounded-full" src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/Leaders-1.png" alt="" />
                     </div>
                     <div className="flex-75 pl-6">
                        <h2 className="text-base text-gray-100 font-semibold">Fahed Hassan</h2>
                        <h2 className="text-base text-orange-500 font-semibold">Founder | CEO | Techinfo </h2>
                        <b className="text-sm font-medium text-gray-100">Anil Sharma manages the entire Team at Mobulous and is responsible for Sales, Growth, Strategy and Ensures Customer Success. Anil has versatile 13 years + Experience in IT Industry.</b>
                     </div>
                  </div>

                  <div className="flex items-center p-4">
                     <div className="flex-25 p-2">
                        <img className="rounded-full" src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/Leaders-2.png" alt="" />
                     </div>
                     <div className="flex-75 pl-6 pt-2.5">
                        <h2 className="text-base text-gray-100 font-semibold">Mohammed Saleem</h2>
                        <h2 className="text-base text-orange-500 font-semibold">Head Of Operations & Technology </h2>
                        <b className="text-sm font-medium text-gray-100">Anil Sharma manages the entire Team at Mobulous and is responsible for Sales, Growth, Strategy and Ensures Customer Success. Anil has versatile 13 years + Experience in IT Industry the entire Team at Mobulous and is responsible for Sales,.</b>
                     </div>
                  </div>

                  <div className="flex items-center p-4">
                     <div className="flex-25 p-2">
                        <img className="rounded-full" src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/Leaders-3.webp" alt="" />
                     </div>
                     <div className="flex-75 pl-6">
                        <h2 className="text-base text-gray-100 font-semibold">Mohammed Saleem</h2>
                        <h2 className="text-base text-orange-500 font-semibold">Head Of Operations & Technology </h2>
                        <b className="text-sm font-medium text-gray-100">Anil Sharma manages the entire Team at Mobulous and is responsible for Sales, Growth, Strategy and Ensures Customer Success. Anil has versatile 13 years + Experience in IT Industry.</b>
                     </div>
                  </div>

                  <div className="flex items-center p-4">
                     <div className="flex-25 p-2">
                        <img className="rounded-full" src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/Leaders-4.png" alt="" />
                     </div>
                     <div className="flex-75 pl-6">
                        <h2 className="text-base text-gray-100 font-semibold">Mohammed Saleem</h2>
                        <h2 className="text-base text-orange-500 font-semibold">Head Of Operations & Technology </h2>
                        <b className="text-sm font-medium text-gray-100">Anil Sharma manages the entire Team at Mobulous and is responsible for Sales, Growth, Strategy and Ensures Customer Success. Anil has versatile 13 years + Experience in IT Industry.</b>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="w-full">
            <div className="flex my-8 flex-col w-10/12 mx-auto items-center">
               <h2 className="text-3xl text-gray-700 font-bold">Our <span className="text-orange-500">Managers</span></h2>
               <p className="text-md text-center text-gray-600 pt-2 leading-7">Our AGILE approach provides not only effective solutions, but we also provide creative answers and unparalleled services to any technological challenges faced by our clients. Our Team is rich with industry and technology experts.</p>
            </div>
            <div className="grid sm:grid-cols-4 w-11/12 mx-auto gap-x-5">
               <div className="p-2">
                  <div className="mb-4">
                     <img className="rounded-xl " src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/Team-4.png" alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                     <h2 className="text-base text-gray-800 capitalize font-semibold">Ali Mohammed</h2>
                     <p className="text-md text-gray500 capitalize">Business Development Manager</p>
                  </div>
               </div>
               <div className="p-2">
                  <div className="mb-4">
                     <img className="rounded-xl " src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/Team-5.png" alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                     <h2 className="text-base text-gray-800 capitalize font-semibold">Ali Mohammed</h2>
                     <p className="text-md text-gray500 capitalize">Business Development Manager</p>
                  </div>
               </div>
               <div className="p-2">
                  <div className="mb-4">
                     <img className="rounded-xl " src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/Team-6.png" alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                     <h2 className="text-base text-gray-800 capitalize font-semibold">Ali Mohammed</h2>
                     <p className="text-md text-gray500 capitalize">Business Development Manager</p>
                  </div>
               </div>
               <div className="p-2">
                  <div className="mb-4">
                     <img className="rounded-xl " src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/Team-7.png" alt="" />
                  </div>
                  <div className="flex flex-col justify-center items-center">
                     <h2 className="text-base text-gray-800 capitalize font-semibold">Ali Mohammed</h2>
                     <p className="text-md text-gray500 capitalize">Business Development Manager</p>
                  </div>
               </div>
            </div>
         </div>


           <div className="w-full bg-gray-100 py-1 mt-8">
               <div className="flex my-8 flex-col w-10/12 mx-auto items-center">
                  <h2 className="text-3xl text-gray-700 font-bold">Our <span className="text-orange-500">Managers</span></h2>
                  <p className="text-md text-center text-gray-600 pt-2 leading-7">Our AGILE approach provides not only effective solutions, but we also provide creative answers and unparalleled services to any technological challenges faced by our clients. Our Team is rich with industry and technology experts.</p>
               </div>
               <div className="grid sm:flex  w-11/12 mx-auto gap-x-5">
                  <div className="p-2 flex-25">
                     <div className="p-4">
                        <div className="mb-4">
                           <img className="rounded-xl " src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/UX-Team-1.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                           <h2 className="text-base text-gray-800 capitalize font-semibold">Ali Mohammed</h2>
                           <p className="text-md text-gray500 capitalize">Business Development Manager</p>
                        </div>
                     </div>
                     <div className="p-4">
                        <div className="mb-4">
                           <img className="rounded-xl " src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/UX-Team-2.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                           <h2 className="text-base text-gray-800 capitalize font-semibold">Ali Mohammed</h2>
                           <p className="text-md text-gray500 capitalize">Business Development Manager</p>
                        </div>
                     </div>
                    
                  </div>
                  <div className="flex flex-col p-6 flex-50">
                     <div className="mb-4 bg-black-150 rounded-2xl flex flex-col justify-center items-center  h-2/3 p-4 flex-45">
                        <h2 className="text-2xl text-gray-100 capitalize font-bold">Ali Mohammed</h2>
                        <p className="text-2xl  text-gray-100 font-bold capitalize">Business Development Manager</p>
                     </div>
                     <div className="flex flex-45 flex-col p-8  bg-white rounded-xl items-center">
                        <h2 className="text-base text-gray-800 capitalize font-semibold">Ali Mohammed</h2>
                        <p className="text-sm text-gray-500 leading-7 mt-2 text-center capitalize">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
                     </div>
                  </div>
                   <div className="p-2 flex-25">
                     <div className="p-4">
                        <div className="mb-4">
                           <img className="rounded-xl " src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/UX-Team-1.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                           <h2 className="text-base text-gray-800 capitalize font-semibold">Ali Mohammed</h2>
                           <p className="text-md text-gray500 capitalize">Business Development Manager</p>
                        </div>
                     </div>
                     <div className="p-4">
                        <div className="mb-4">
                           <img className="rounded-xl " src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/UX-Team-2.png" alt="" />
                        </div>
                        <div className="flex flex-col justify-center items-center">
                           <h2 className="text-base text-gray-800 capitalize font-semibold">Ali Mohammed</h2>
                           <p className="text-md text-gray500 capitalize">Business Development Manager</p>
                        </div>
                     </div>
                    
                  </div>
               

                 
               </div>
         </div>


      </div>
   )
 };
 export default CompanyTeam;