import React from 'react';

const Subscribe = () => {
   const imagePath = '/images/lot.svg';
   
   const imagePath2 = 'https://clutch.co/static/images/homepage_profile--desktop.webp';

//   return (style={{backgroundImage: `url(${imagePath})`}}
return(


     <div className="sm:h-[25rem] w-[93%] mx-auto bg-black-200   rounded overflow-hidden" style={{backgroundImage: `url(${imagePath})`}}>
      
      <div className="grid sm:grid-cols-3 pl-4 py-4 ">
         <div className="h-[22.5rem] w-[21rem]" style={{clipPath: 'polygon(50% 0,100% 25%,100% 75%,50% 100%,0 75%,0 25%)'}}>
            <img className='w-full' src={imagePath2} alt="" />
            
         </div>
         <div className="sm:col-span-2 relative flex flex-col justify-center" >
         <div className="absolute  top-0 h-14 w-14 right-0" style={{backgroundImage: `url(${imagePath})`}} ></div>
            <div className=" pr-4">
               <p className="text-base text-green-500 font-semibold mb-2">Contact US</p>
               <h4 className=" text-white text-xl sm:text-3xl font-semibold mb-6">Ready to start your next web project now?</h4>
               <p className="text-gray-300 max-sm:px-4  mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
               <div className="mt-4 pt-2">
                  <a href="" className="bg-violet-600 rounded-md px-3 py-1.5 text-white inline-block">Get Started !</a>
               </div>
            </div>
         </div>
      </div>
      </div>  
  
 

  )
};
  export default Subscribe;