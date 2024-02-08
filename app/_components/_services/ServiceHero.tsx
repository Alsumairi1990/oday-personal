
import React from 'react';
import { ServiceInt1 } from '@/app/models/ServiceInt'
import PanelSearch from '../SearchPanel';
interface ServiceProps {
    service: ServiceInt1;
  }
const ServiceHero = ({ service }: ServiceProps) => {
  return (
        <div className="w-full " >  
           <div className=" m-h-lvh sm:min-h-[28rem] sm:h-[28rem] pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${service.image})`}}>
            <div className="w-full h-full absolute left-0 top-0 bg-black z-10 opacity-60"></div>
            <div className="flex flex-wrap w-11/12 mx-auto z-20">
            <div className="flex w-full flex-col items-center justify-center ">
                <h2 className="text-4xl text-white tracking-wider font-bold mb-1">The Highest Standards. The Happiest Clients.</h2>
                <div className="py-4 w-full">
                    <PanelSearch />
                </div>
                <p className="text-md  text-gray-100 uppercase tracking-wide leading-7">WE LOVE OUR CLIENTS AND THEY LOVE US BACK. HEAR WHAT THEY’RE SAYING…</p>
                <div className="flex flex-col items-center  ">
                    <p className="text-md  text-orange-500">*Ratings base a claim on observations by various global IT research firms.*</p>
                </div>
            </div>
            </div>
        </div>
        {/* <div className=" max-sm:min-h-lvh pt-[100px] sm:pb-8 flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${service.image})`}}>
          <div className="flex w-11/12 mx-auto">
             <div className="flex-60">
                <span className="text-sm text-white mb-6 inline-block">Home / mobile development </span>
                <h2 className="text-4xl text-white font-extrabold mb-4">{service.name}</h2>
                <h2 className="text-4xl text-white font-bold mb-4">Best API Integration Company</h2>
                <p className="text-sm text-gray-100 font-medium leading-7">{service.desc}</p>
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
             <div className="flex-40">
             <img className="w-full z-20" src="https://149808042.v2.pressablecdn.com/wp-content/uploads/2023/06/Content-Research-Process-Steps.png" alt="" />
             </div>
          </div>
         </div> */}
    </div>
  );
};

export default ServiceHero;