'use client'
import React from 'react';
import Link from 'next/link'
import { ServiceInt1 } from '../models/ServiceInt';
import NavElement from './_navbar/NavElement';

const ServicesPanel = () => {
    const imagePath = '/images/10.png';

    const services:ServiceInt1[] = [
      {
         id : "1",
         name : 'Printing Services',
         desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
         icon : 's1.svg'
      },
      {
         id : "2",
         name : 'Mobile Dign',
         desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
         icon : 's2.svg'
     },
     {
       id : "3",
       name : 'Packaging Services',
       desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
       icon : 's3.svg'
     },
     {
      id : "1",
        name : 'Logo Design',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        icon : 's1.svg'
     },
     {
      id : "1",
        name : 'Label Design',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        icon : 's4.svg'
     },
     {
      id : "1",
        name : 'Resume Prepartion',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        icon : 's5.svg'
     },
     {
      id : "1",
        name : 'Eboox Cover',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        icon : 's6.svg'
     },
     {
      id : "1",
        name : 'Bag Design',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        icon : 's7.svg'
     }

   ]
  return (
    <div className="fixed top-[4.5rem] z-10 right-4 bg-white w-7/12 px-2 py-3 flex flex-col rounded-md" style={{filter: 'drop-shadow(rgba(0, 0, 0, 0.08) 0px 0px 18px)'}}>
    <span className="absolute inline-block w-4 h-4 bg-white top-[-.5rem] sm:right-28 sm:mr-4 sm:rotate-45"></span>
    <div className="p-2"><span className="text-md text-gray-500 font-semibold">Explore More</span></div>
    <div className="px-3 py-2 grid grid-cols-3">
       <div className="col-start-1 col-span-2">
          <ul className="flex flex-wrap pb-2">
            {services.map((service) => (

            
                <li className="flex-48 line-height-20 pr-6">
                  <Link  href={`/services/${service.name}`}  className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                     <NavElement service={service}  />
                </Link>
             </li>
            ))
            }
            
            
             {/* <li className="flex-48 line-height-20 pr-6">
                <a href="/edu/universities" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="">
                      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <g stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round">
                            <path d="M20.851 22.302V7.982a.537.537 0 0 0-.237-.44L11.81 1.698a.063.063 0 0 0-.084 0l-8.79 5.837a.538.538 0 0 0-.238.447v14.32" stroke="#48639E"></path>
                            <path d="m6.182 18.042 3.86-4.45H14l2.966-3.423" stroke="#13A2E4"></path>
                            <path d="m14.808 9.99 2.393-.36a.146.146 0 0 1 .152.151v2.405" stroke="#13A2E4"></path>
                         </g>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">Resume design</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/edu/courses" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="">
                      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <g stroke-width="1.5" stroke-miterlimit="10">
                            <path d="m7.21 14.717 3.18-3.664h3.26l2.44-2.819" stroke="#13A2E4" stroke-linecap="round"></path>
                            <path d="m14.314 8.091 1.968-.298a.118.118 0 0 1 .13.13v1.981" stroke="#13A2E4" stroke-linecap="round"></path>
                            <path d="M20.293 18.35H5.64a2.018 2.018 0 0 0-1.427 3.442 2.011 2.011 0 0 0 1.427.587h14.574a.08.08 0 0 0 .08-.08v-3.95Z" stroke="#48639E"></path>
                            <path d="M3.621 20.212V1.826a.205.205 0 0 1 .205-.205h16.269a.199.199 0 0 1 .198.205v16.523" stroke="#48639E"></path>
                         </g>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">bag and toat design</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/study-abroad" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="">
                      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M4 2.065v19.87a.065.065 0 0 0 .065.065h15.6a.065.065 0 0 0 .064-.039.064.064 0 0 0 .005-.026V5.228l-3.136-3.131L4.065 2A.065.065 0 0 0 4 2.065Z" stroke="#48639E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                         <path d="M19.325 5.227H16.35a.194.194 0 0 1-.194-.193V2.097" stroke="#48639E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                         <path d="M11.958 10.916a.958.958 0 1 0 0-1.916.958.958 0 0 0 0 1.916ZM11.507 13h.978c.667 0 1.307.188 1.778.524.472.335.737.79.737 1.265V15.8a.15.15 0 0 1-.021.076.21.21 0 0 1-.06.065.306.306 0 0 1-.091.043.38.38 0 0 1-.107.015H9.278a.345.345 0 0 1-.197-.058c-.053-.037-.082-.088-.082-.14v-1.007a1.352 1.352 0 0 1 .188-.685c.125-.217.31-.415.543-.582.232-.166.509-.299.814-.39.304-.09.631-.137.962-.138Z" stroke="#13A2E4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                         <circle cx="12" cy="10" r="1" fill="#13A2E4"></circle>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">Mobile Designing</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/study-abroad" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="">
                      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M2 5.238v9.402a.97.97 0 0 0 .97.97h5.602a1.813 1.813 0 0 1 1.813 1.813V5.238A1.238 1.238 0 0 0 9.152 4H3.238A1.238 1.238 0 0 0 2 5.238ZM14.395 15.61h-2.197a1.86 1.86 0 0 0-1.281.527 1.829 1.829 0 0 0-.527 1.286V5.238A1.238 1.238 0 0 1 11.623 4h5.913a1.239 1.239 0 0 1 1.233 1.238v6.03" stroke="#48639E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                         <path d="M17.441 17.354a3.04 3.04 0 1 0 0-6.081 3.04 3.04 0 0 0 0 6.081ZM22 19.652l-2.756-2.756" stroke="#13A2E4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                         <path d="M4.535 8.227h3.067M4.535 11.389h3.067M12.967 8.227h3.067" stroke="#48639E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">Finde Course Tool</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/edu/news" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <g stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round">
                            <path d="M4.789 7.07H1.738a.113.113 0 0 0-.113.113v13.998a1.194 1.194 0 0 0 1.194 1.194h16.467a2.862 2.862 0 0 0 2.87-2.87V1.663a.038.038 0 0 0-.038-.038H5.238a.075.075 0 0 0-.074.075l-.075 19.687a1 1 0 0 1-.963.988h-1.25" stroke="#48639E"></path>
                            <path d="M18.578 7H8.421C8.19 7 8 7.086 8 7.192v4.616c0 .106.189.192.421.192h10.157c.233 0 .422-.086.422-.192V7.192c0-.106-.189-.192-.422-.192ZM8 16.26h11" stroke="#13A2E4"></path>
                         </g>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">News / Articles</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/study-abroad" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="">
                      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <g stroke-width="1.5" stroke-miterlimit="10">
                            <path d="M9.21 11.832v5.23a.45.45 0 0 0 .273.41.443.443 0 0 0 .17.034h7.463l2.905 2.005a.252.252 0 0 0 .4-.21v-1.85h1.549a.45.45 0 0 0 .444-.45V9.649a.45.45 0 0 0-.444-.45h-7.18" stroke="#13A2E4"></path>
                            <path d="M2.06 3.617h12.287a.444.444 0 0 1 .444.444v7.401a.45.45 0 0 1-.444.45H6.884L3.979 13.93a.252.252 0 0 1-.395-.21v-1.85H2.061a.45.45 0 0 1-.444-.438v-7.37a.444.444 0 0 1 .444-.444Z" stroke="#48639E"></path>
                         </g>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">Brochure design</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/study-abroad" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M17.987 20.03h3.859a.15.15 0 0 0 .144-.094.148.148 0 0 0 .01-.06V7.337a1.713 1.713 0 0 0-1.753-1.715h-2.26M6.493 20.03H2.154A.154.154 0 0 1 2 19.877V6.84a1.218 1.218 0 0 1 1.218-1.218h3.275" stroke="#48639E" stroke-width="1.5" stroke-miterlimit="10"></path>
                         <path d="M6.493 5.593v14.438h11.494V5.593A1.588 1.588 0 0 0 16.383 4h-8.32a1.588 1.588 0 0 0-1.57 1.593Z" stroke="#13A2E4" stroke-width="1.5" stroke-miterlimit="10"></path>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">Magazine design</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/edu/exams" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="">
                      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <g stroke-width="1.5" stroke-miterlimit="10">
                            <path d="m5.487 5.689.646-1.724a1.387 1.387 0 0 1 1.308-.91h7.014a1.398 1.398 0 0 1 1.286.837l.774 1.78a.293.293 0 0 1-.269.41H5.763a.292.292 0 0 1-.276-.393Z" stroke="#48639E" stroke-linecap="round"></path>
                            <path d="M18.616 13.797V4.93a.717.717 0 0 0-.214-.517.736.736 0 0 0-.516-.213H15.87M6.049 4.184H4.291a.73.73 0 0 0-.73.747v16.778a.73.73 0 0 0 .73.73h13.595a.73.73 0 0 0 .73-.73v-4.425M9.817 3.055v-.168a1.32 1.32 0 0 1 2.256-.937 1.325 1.325 0 0 1 .388.937v.168M6.975 10.798h8.277M6.975 14.566h8.277" stroke="#48639E" stroke-linecap="round"></path>
                            <path d="m19.671 13.078-4.15 4.077a.994.994 0 0 0-.269.5l-.219 1.055a.36.36 0 0 0 .421.427l1.061-.169a.983.983 0 0 0 .5-.264l4.15-4.076a.516.516 0 0 0 0-.736l-.758-.808a.522.522 0 0 0-.736-.006Z" stroke="#13A2E4"></path>
                         </g>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">banner ads design</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/study-abroad" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M9.905 12.502h1.175a1.923 1.923 0 0 1 1.917 1.916 1.921 1.921 0 0 1-1.917 1.954h-.723a.19.19 0 0 0-.171.117.188.188 0 0 0 .04.204l2.808 2.809M15 12.502H9M14.5 14.502H10" stroke="#24A7D0" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                         <path d="m18.891 15.04-4.185-8.416a1.16 1.16 0 0 1 .18-1.327l1.101-1.247a1.774 1.774 0 0 0 .18-2.202 2.093 2.093 0 0 0-2.898-.458l-.082.058a2.376 2.376 0 0 1-2.776 0 2.168 2.168 0 0 0-2.406-.128 1.739 1.739 0 0 0-.428 2.684l1.159 1.298a1.16 1.16 0 0 1 .18 1.328l-4.203 8.41a6.376 6.376 0 0 0-.388 4.94 4.231 4.231 0 0 0 2.927 2.868c.416.109.845.16 1.275.151h6.556c.43.008.859-.042 1.275-.15a4.254 4.254 0 0 0 2.927-2.87 6.375 6.375 0 0 0-.394-4.938ZM6.45 7.349H17.61" stroke="#48639E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">flyer design</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/edu/ranks" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="h-[20px] w-[20px]">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <g stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round">
                            <path d="M3.647 2.068v19.87a.42.42 0 0 0 .421.415h15.765a.421.421 0 0 0 .421-.415V5.713l-3.703-4.066H4.068a.42.42 0 0 0-.42.421Z" stroke="#48639E"></path>
                            <path d="M20.228 5.713h-3.515a.292.292 0 0 1-.292-.291V1.647" stroke="#48639E"></path>
                            <path d="M12.556 8.795h5.16M6.34 8.905l1.063 1.062a.039.039 0 0 0 .058 0l2.357-2.363M12.556 15.917h5.16M6.34 16.027l1.063 1.062a.038.038 0 0 0 .058 0l2.357-2.363" stroke="#13A2E4"></path>
                         </g>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">Design Finder Tool</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/study-abroad" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="">
                      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <g stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round">
                            <path d="M7.61 8h7.764M7.61 18h7.764M14.259 8v1.951a1.01 1.01 0 0 1-.39.784l-4.918 3.827a1 1 0 0 0-.389.819v2.114" stroke="#13A2E4"></path>
                            <path d="M8.562 8v1.951a1.01 1.01 0 0 0 .39.784l4.918 3.816a1 1 0 0 1 .389.83v2.114" stroke="#13A2E4"></path>
                            <path d="M3.647 2.068v19.87a.42.42 0 0 0 .421.415h15.765a.421.421 0 0 0 .421-.415V5.713l-3.703-4.066H4.068a.42.42 0 0 0-.42.421Z" stroke="#48639E"></path>
                            <path d="M20.228 5.713h-3.515a.292.292 0 0 1-.292-.291V1.647" stroke="#48639E"></path>
                         </g>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md  text-gray-600">Consultation</span></div>
                </a>
             </li>
             <li className="flex-48 line-height-20 pr-6">
                <a href="/study-abroad" className="flex items-center w-full border-b border-b-gray-200 py-2.5">
                   <span className="h-[20px] w-[20px]">
                      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="m11.703 5.343-3.118-2.07h-.07L1.282 8.068a.426.426 0 0 0-.191.362v11.78M16.01 20.21v-6.389" stroke="#48639E" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                         <path d="M15.273 13.623a4.364 4.364 0 1 0 0-8.727 4.364 4.364 0 0 0 0 8.727ZM22.91 16.896l-4.364-4.364" stroke="#13A2E4" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path>
                      </svg>
                   </span>
                   <div className=""><span className="ml-2 text-md text-gray-600">Test Series</span></div>
                </a>
             </li> */}
          </ul>
       </div>
       <div className="p-2 rounded-md" style={{background: 'rgba(226, 235, 247, 0.41)'}}>
          <h2 className="text-xl text-gray-800 font-semibold px-3 pt-4">Find Out Best Course and Top Collages </h2>
          <img src={imagePath} alt="My Image" />
       </div>
    </div>
 </div>
  );
};

export default ServicesPanel;