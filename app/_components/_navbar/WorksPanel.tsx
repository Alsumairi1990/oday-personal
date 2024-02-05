'use client'
import React from 'react';
import {serviceCategories} from '@/app/utils/ServiceCategories'
import CategoryElements from './CategoryElements';

const WorksPanel = () => {
   const imagePath = '/images/10.png';
  return (
   // <div className="grid-cols-4">
   //    <div className=""></div>
   //    <div className="p-4 pl-5 grid-cols-1 sm:columns-3 gap-10">
   //             <div className="mb-3.5">
   //             <h3 className="pb-1 mb-0 text-base "><i className="fab fa-creative-commons-nd pr-1.5 text-zinc-300 "></i><span className="font-bold text-white">Region Ranking</span></h3>
   //             <ul className="pl-3.5 text-gray-300 text-sm ">
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities"><span></span>Global List</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/edu/regions/middel-east"><span></span> Middel East</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/edu/regions/asia"><span></span> Universities in Asia</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/africa"><span></span> Universities in Africa</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> North America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> South America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Gulf Countries</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Arab World </a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Australia </a> </li>
   //             </ul>
   //             </div>
   //             <div className="mb-3.5">
   //             <h3 className="pb-1 mb-0 text-base "><i className="fab fa-critical-role pr-1.5 text-zinc-300 "></i><span className="font-bold text-white">Region Ranking</span></h3>
   //             <ul className="pl-3.5 text-gray-300 text-sm ">
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities"><span></span>Global List</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/edu/regions/middel-east"><span></span> Middel East</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/asia"><span></span> Universities in Asia</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/africa"><span></span> Universities in Africa</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> North America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> South America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Gulf Countries</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Arab World </a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Australia </a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> North America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> South America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Gulf Countries</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Arab World </a> </li>
   //             </ul>
   //             </div>
   //             <div className="mb-3.5">
   //             <h3 className="pb-1 mb-0 text-base "><i className="fab fa-dribbble pr-1.5 text-zinc-300 "></i><span className="font-bold text-white">University Gate</span></h3>
   //             <ul className="pl-3.5 text-gray-300 text-sm ">
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities"><span></span>Global List</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/edu/universities/middle-east"><span></span> Middel East</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/asia"><span></span> Universities in Asia</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/africa"><span></span> Universities in Africa</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> North America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> South America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Gulf Countries</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Arab World </a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Australia </a> </li>
   //             </ul>
   //             </div>
   //             <div className="mb-3.5">
   //             <h3 className="pb-1 mb-0 text-base "><i className="fab fa-dribbble pr-1.5 text-zinc-300 "></i><span className="font-bold text-white">University Gate</span></h3>
   //             <ul className="pl-3.5 text-gray-300 text-sm ">
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities"><span></span>Global List</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/edu/universities/middle-east"><span></span> Middel East</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/asia"><span></span> Universities in Asia</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/africa"><span></span> Universities in Africa</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> North America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> South America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Gulf Countries</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Arab World </a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Australia </a> </li>
   //             </ul>
   //             </div>
   //             <div className="mb-3.5">
   //             <h3 className="pb-1 mb-0 text-base "><i className="fas fa-globe pr-1.5 text-zinc-300 "></i><span className="font-bold text-white">Region Ranking</span></h3>
   //             <ul className="pl-3.5 text-gray-300 text-sm ">
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities"><span></span>Global List</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/edu/universities/middle-east"><span></span> Middel East</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/asia"><span></span> Universities in Asia</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/africa"><span></span> Universities in Africa</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> North America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> South America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Gulf Countries</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Arab World </a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Australia </a> </li>
   //             </ul>
   //             </div>
   //             <div className="mb-3.5">
   //             <h3 className="pb-1 mb-0 text-base "><i className="fab fa-creative-commons-nd pr-1.5 text-zinc-300 "></i><span className="font-bold text-white">Region Ranking</span></h3>
   //             <ul className="pl-3.5 text-gray-300 text-sm ">
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities"><span></span>Global List</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/edu/universities/middle-east"><span></span> Middel East</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/asia"><span></span> Universities in Asia</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/africa"><span></span> Universities in Africa</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> North America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> South America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Gulf Countries</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Arab World </a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Australia </a> </li>
   //             </ul>
   //             </div>
   //             <div className="mb-3.5">
   //             <h3 className="pb-1 mb-0 text-base "><i className="fab fa-creative-commons-nd pr-1.5 text-zinc-300 "></i><span className="font-bold text-white">Region Ranking</span></h3>
   //             <ul className="pl-3.5 text-gray-300 text-sm ">
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities"><span></span>Global List</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/edu/universities/middle-east"><span></span> Middel East</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/asia"><span></span> Universities in Asia</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/africa"><span></span> Universities in Africa</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> North America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> South America</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Gulf Countries</a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Arab World </a> </li>
   //             <li><a className="py-0.3 inline-block" href="http://127.0.0.1/universities/north-america"><span></span> Australia </a> </li>
   //             </ul>
   //             </div>
   //             </div>

   // </div>
    <div className="absolute top-[4.5rem] z-10 bg-white right-0 w-full  px-2 py-3 flex flex-col " >
    <span className="absolute inline-block w-4 h-4 bg-white top-[-.5rem] sm:right-28 sm:mr-4 sm:rotate-45"></span>
    <div className="px-6 py-0.5 grid grid-cols-5">
       <div className="col-start-1 col-span-4">
       <div className="pl-5 grid-cols-1 sm:columns-3 gap-10" >
       {serviceCategories.map((categoryService) => (
                  <CategoryElements key={categoryService.id} serviceCategory={categoryService} />
               ))}
       </div>
       </div>
       <div className="p-2 rounded-md" style={{background: 'rgba(226, 235, 247, 0.41)'}}>
          <h2 className="text-xl text-gray-800 font-semibold px-3 pt-4">Find Out Best Course and Top Collages </h2>
          <img src={imagePath} alt="My Image" />
       </div>
    </div>
 </div>
  );
};

export default WorksPanel;