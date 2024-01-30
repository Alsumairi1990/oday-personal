

const Reviews = () => {
   const imagePath = 'https://dcstatic.com/images/background/background-about-us-c188d84f24.svg';
  //  const imagePath1 = 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/main/estimate.webp';
  const imagePath1 = 'https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/d3mds3ychln71.cloudfront.net/img/banners/testimonial_banner.jpg';

   const imagePath2 = '/images/service2.png';
   const reviews = [
      {
         name : 'Health Tracker Application ',
         job : "Busness admin",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1704443071_itdp-logo.jpg'
      },
      
    ]
   
  return (
     <div className="w-full" >
        <div className=" m-h-lvh sm:min-h-[28rem] sm:h-[28rem] pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath1})`}}>
        {/* <div className="w-full h-full absolute left-0 top-0 bg-black z-10 opacity-70"></div> */}
        <div className="flex flex-wrap w-11/12 mx-auto z-20">
           
           <div className="flex w-full flex-col items-center justify-center">
                <img className="w-14 mb-2" src="https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/d3mds3ychln71.cloudfront.net/img/white-heart-img.png" alt="" />
               <h2 className="text-4xl text-white tracking-wider font-bold mb-2">The Highest Standards. The Happiest Clients.</h2>
               <p className="text-md  text-gray-100 uppercase tracking-wide leading-7">WE LOVE OUR CLIENTS AND THEY LOVE US BACK. HEAR WHAT THEY’RE SAYING…</p>
               <div className="flex items-center gap-x-8 mt-8 mb-4 justify-center text-[#5d6d81]">
                   <div className="text-center text-gray-100 border-r pr-4 border-r-gray-400">
                      <span className="font-semibold mb-2 inline-block text-2xl">187</span>
                      <p className="uppercase text-sm">Quality reviwes</p>
                   </div>
                   <div className="text-center text-gray-100 border-r pr-4 border-r-gray-400">
                      <span className="font-semibold mb-2 inline-block text-2xl">547</span>
                      <p className="uppercase text-sm">Cost reviews</p>
                   </div>
                   <div className="text-center text-gray-100 border-r pr-4 border-r-gray-400">
                      <span className="font-semibold mb-2 inline-block text-2xl">158</span>
                      <p className="uppercase text-sm">Schedule</p>
                   </div>
                   <div className="text-center text-gray-100 ">
                      <span className="font-semibold mb-2 inline-block text-2xl">400</span>
                      <p className="uppercase text-sm">Willing to Refe</p>
                   </div>
                   
                  
               </div>
               <div className="flex flex-col items-center  ">
                <p className="text-md  text-orange-500">*Ratings base a claim on observations by various global IT research firms.*</p>
                <div className="pl-1.5 mt-2 absolute right-2 bottom-3 pr-3 flex items-center py-1.5 rounded-md bg-[#f85508] ">
                   <span className="w-5  mr-1 bainline-block">
                   <svg className="w-full h-full fill-white" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"  style={{fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:'2'}}><path d="M18.257,6.671l-9.679,9.679c-0.137,0.138 -0.232,0.312 -0.271,0.502l-1.487,7.085c-0.069,0.329 0.032,0.671 0.269,0.909c0.236,0.239 0.577,0.343 0.906,0.277l7.143,-1.428c0.194,-0.039 0.372,-0.134 0.511,-0.274l9.679,-9.679l-7.071,-7.071Zm1.414,-1.414l7.071,7.071l1.793,-1.792c1.953,-1.953 1.953,-5.119 0,-7.072c0,0 0,0 0,0c-0.938,-0.937 -2.209,-1.464 -3.535,-1.464c-1.327,0 -2.598,0.527 -3.536,1.464l-1.793,1.793Z"/><path d="M3.5,30l24,0c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5l-24,0c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"/>
                   </svg>
                   {/* <svg fill="#000000" width="800px" height="800px" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"  style={fillRule:'evenodd',clipRule:'evenodd',strokeLinejoin:'round',strokeMiterlimit:'2'}><path d="M18.257,6.671l-9.679,9.679c-0.137,0.138 -0.232,0.312 -0.271,0.502l-1.487,7.085c-0.069,0.329 0.032,0.671 0.269,0.909c0.236,0.239 0.577,0.343 0.906,0.277l7.143,-1.428c0.194,-0.039 0.372,-0.134 0.511,-0.274l9.679,-9.679l-7.071,-7.071Zm1.414,-1.414l7.071,7.071l1.793,-1.792c1.953,-1.953 1.953,-5.119 0,-7.072c0,0 0,0 0,0c-0.938,-0.937 -2.209,-1.464 -3.535,-1.464c-1.327,0 -2.598,0.527 -3.536,1.464l-1.793,1.793Z"/><path d="M3.5,30l24,0c0.828,0 1.5,-0.672 1.5,-1.5c0,-0.828 -0.672,-1.5 -1.5,-1.5l-24,0c-0.828,0 -1.5,0.672 -1.5,1.5c0,0.828 0.672,1.5 1.5,1.5Z"/>
                   </svg>              */}
                   </span>
                   <span className=" inline-block text-white text-md font-semibold ">Write Review</span>
                </div>
                 
                  

               </div>
           </div>
        </div>
        </div>
        

        <div className="w-10/12 mx-auto mt-4 mb-10 " >
           <div className="p-4 text-center mb-4" >
              <h2 className="text-gray-800 font-bold text-2xl mb-2">If you need us, we’re really the right people to help.</h2>
              <p className="text-gray-600 leading-7 font-medium text-sm">READ THE REAL SUCCESS STORIES IN OUR CLIENT’S WORDS.</p>
           </div>
           <div className="grid sm:grid-cols-3 gap-6">

               {reviews.map((review : any) =>(
                     <div className="flex flex-col justify-center">
                     <div className="p-2 flex justify-center">
                        <img src="rev" alt="" />
                     </div>
                     <div className="p-2">
                        <h2 className="text-base font-semibold text-gray-700"></h2>
                        <span className="w-12">
                        <svg className="w-full " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect width="24" height="24" fill="white"/>
                              <path d="M11.5245 4.46353C11.6741 4.00287 12.3259 4.00287 12.4755 4.46353L13.9084 8.87336C13.9753 9.07937 14.1673 9.21885 14.3839 9.21885H19.0207C19.505 9.21885 19.7064 9.83866 19.3146 10.1234L15.5633 12.8488C15.3881 12.9761 15.3148 13.2018 15.3817 13.4078L16.8145 17.8176C16.9642 18.2783 16.437 18.6613 16.0451 18.3766L12.2939 15.6512C12.1186 15.5239 11.8814 15.5239 11.7061 15.6512L7.95488 18.3766C7.56303 18.6613 7.03578 18.2783 7.18546 17.8176L8.6183 13.4078C8.68524 13.2018 8.61191 12.9761 8.43667 12.8488L4.68544 10.1234C4.29358 9.83866 4.49497 9.21885 4.97933 9.21885H9.6161C9.83272 9.21885 10.0247 9.07937 10.0916 8.87336L11.5245 4.46353Z" className="stroke-[#ff711c]" stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>
                        </span>
                     </div>
                     <div className=""></div>
                  </div>
               ))}
            
           </div>
      
        </div>
     </div>
  )
};
export default Reviews;