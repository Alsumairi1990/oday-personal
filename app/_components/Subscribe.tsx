import React from 'react';

const Subscribe = () => {
   const imagePath = '/images/200.jpg';

  return (

<section className="relative px-4 w-full bg-no-repeat bg-fixed h-64 flex items-center bg-center bg-cover" style={{backgroundImage: `url(${imagePath})`}}>

   <div className="absolute top-0 left-0  w-full z-0 h-full" style={{background:'rgba(22,28,45,0.75)'}}></div>
   <div className="container z-10  relative">
      <div className="row justify-content-center">
         <div className="col">
            <div className="section-title text-center">
               <h4 className=" text-white text-xl sm:text-3xl font-semibold mb-6">Ready to start your next web project now?</h4>
               <p className="text-gray-300 max-sm:px-4 sm:w-7/12 mx-auto mb-0">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.</p>
               <div className="mt-4 pt-2">
                  <a href="" className="bg-violet-600 rounded-md px-3 py-1.5 text-white inline-block">Get Started !</a>
               </div>
            </div>
         </div>
      </div>
   </div>
   {/* <div id="jarallax-container-1" class="jarallax-container" style="position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden; z-index: -100; clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 0px 100%);">
      <div style="background-position: 50% 50%; background-size: cover; background-repeat: no-repeat; background-image: url(&quot;https://shreethemes.in/upstart/layouts/images/bg/cta.png&quot;); position: absolute; top: 0px; left: 0px; width: 1273px; height: 324px; overflow: hidden; pointer-events: none; transform-style: preserve-3d; backface-visibility: hidden; margin-top: -28px; transform: translate3d(0px, -69.6875px, 0px);"></div>
   </div> */}
</section>
  )
};
  export default Subscribe;