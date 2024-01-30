

const Reviews = () => {
   const imagePath = 'https://dcstatic.com/images/background/background-about-us-c188d84f24.svg';
  //  const imagePath1 = 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/main/estimate.webp';
  const imagePath1 = 'https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/d3mds3ychln71.cloudfront.net/img/banners/testimonial_banner.jpg';

   const imagePath2 = '/images/service2.png';
   const reviews = [
      {
         name : 'Samee Sufian ',
         job : "Busneess Manager",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1704443071_itdp-logo.jpg'
      },
       {
         name : 'Ali Hameed ',
         job : "Project Analyzer",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1684836367_mijo-logo.png'
      },
      {
         name : 'Saleem Alnajeed Mohammed',
         job : "Project Manager",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1526467595_ask-in-world_app_icon.png'
      },
      {
         name : 'Nadeer Jameel ',
         job : "Busneess Manager",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1652170491_telemed-logo.png'
      },
       {
         name : 'Ali Hameed ',
         job : "Project Analyzer",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1481721237_fog_app_icon.png'
      },
      {
         name : 'Alnajeed fadel',
         job : "Project Manager",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1532614408_clipkard.jpg'
      }
      
    ]
   
  return (
     <div className="w-full" >
        <div className=" m-h-lvh sm:min-h-[28rem] sm:h-[28rem] pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath1})`}}>
        {/* <div className="w-full h-full absolute left-0 top-0 bg-black z-10 opacity-70"></div> */}
        <div className="flex flex-wrap w-11/12 mx-auto z-20">
           
           <div className="flex w-full flex-col items-center justify-center ">
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
              <h2 className="text-gray-800 font-bold tracking-wider text-3xl mb-2">If you need us, we’re really the right people to help.</h2>
              <p className="text-gray-600 leading-7 tracking-wide  font-medium text-md">READ THE REAL SUCCESS STORIES IN OUR CLIENT’S WORDS.</p>
           </div>
           <div className="grid sm:grid-cols-3 gap-8">

               {reviews.map((review : any) =>(
                     <div className="flex flex-col items-center justify-center border border-gray-200 shadow-xl rounded-md px-4 pt-5">
                     <div className="px-2 w-24 py-2 my-2 rounded-md  flex justify-center" style={{boxShadow:'0 0 5px #ccc'}}>
                        <img src={review.image} alt='' />
                     </div>
                     <div className="p-2 flex flex-col items-center mt-1">
                        <h2 className="text-2xl font-bold text-center text-gray-700">{review.name}</h2>
                        <h2 className="text-sm font-semibold uppercase text-gray-500">{review.job}</h2>
                        <div className="flex justify-center pt-2 items-center">
                           <span className="w-5 h-5">
                              <svg className="w-full h-full fill-[#ff711c]" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
                              </svg>
                           </span>
                           <span className="w-5 h-5">
                              <svg className="w-full h-full fill-[#ff711c]" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
                              </svg>
                           </span>
                           <span className="w-5 h-5">
                              <svg className="w-full h-full fill-[#ff711c]" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
                              </svg>
                           </span>
                           <span className="w-5 h-5">
                              <svg className="w-full h-full fill-[#ff711c]" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
                              </svg>
                           </span>
                           <span className="w-5 h-5">
                              <svg className="w-full h-full fill-[#ff711c]" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                                 <path d="M3.488 13.184l6.272 6.112-1.472 8.608 7.712-4.064 7.712 4.064-1.472-8.608 6.272-6.112-8.64-1.248-3.872-7.808-3.872 7.808z"></path>
                              </svg>
                           </span>
                          


                        </div>
                        
                     </div>
                     <div className=" flex h-36 overflow-y-auto justify-center">
                        <p className="text-center leading-7">{review.body}</p>
                     </div>
                     <div className="p-2 my-5  flex items-center border border-gray-200 rounded-lg">
                        <a href="" className="text-md text-orange-500 font-medium uppercase">Read full review</a>
                        <span className="ml-2">
                           <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                                 viewBox="0 0 512 512" >
                              <path fill="#FFFFFF" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
                              <path fill="#8AD5DD" d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                                 M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"/>
                              <polygon fill="#2D2D2D" points="214.656,95.936 378.016,256 214.656,416.064 165.856,366.096 278.208,256 165.856,145.904 
                                 "/>
                              </svg>
                        </span>
                     </div>
                  </div>
               ))}
            
           </div>
      
        </div>
     </div>
  )
};
export default Reviews;