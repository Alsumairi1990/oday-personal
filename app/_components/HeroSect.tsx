
import React from 'react';
import hero from '@/public/images/hero.jpg';
import PanelSearch from './SearchPanel';

const Hero = () => {
    const imagePath = '/images/hero.jpg';
  return (
  <div className="w-full " >  
    <div className="h-[25rem] mobile-clip relative sm:h-[35rem] px-4 w-full bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${imagePath})`}}>
       {/* <div className="absolute top-0 h-full w-full left-0" style={{backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.3), rgb(50, 60, 79))'}}></div> */}
       <div className="absolute top-0 h-full w-full left-0" style={{backgroundImage: 'linear-gradient(to top, rgb(8 8 8),rgb(0 0 0 / 55%), rgb(8 8 8))'}}></div>
        <div className="relative flex sm:pt-8 flex-col h-full items-center justify-center z-40">
          <h1 className="text-xl sm:text-3xl sm:max-w-[70%] text-center max-sm:mb-4 sm:leading-10 uppercase pt-4 px-4 font-bold text-white" style={{textShadow:'0 0 10px #000'}}>
            Design Shine Gate for Template and Web devlopment
          </h1>
          <div className="w-11/12 mt-2  mx-auto">
              <PanelSearch />
          </div>
          
          <p className="text-gray-300 max-sm:hidden sm:max-w-[70%] text-center text-sm sm:text-base mb-4">He formatting rules are not configurable but are already optimized for the best possible output. Note that the formatter will keep spaces and tabs between content tags such as div and span </p>
          <a href="/" className="inline-block text-base sm:text-lg text-white bg-green-600 py-1.5 sm:py-1 px-3 border hover:!bg-green-700 border-green-500  ">Discover Work</a>
        </div>
    </div>
  </div>
  );
};

export default Hero;