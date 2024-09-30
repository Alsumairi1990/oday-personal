
'use client'
import React, { useState } from 'react';
import { ServiceWorkInt } from '@/app/models/ServiceWorkInt';
import { Work } from '@prisma/client';
interface ServiceProps {
    serviceWork: Work;
  }
 
const ServiceWork = ({ serviceWork } : ServiceProps) => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
      setIsClicked(true);
    };
    const close = () =>{
        alert('gtg')
        setIsClicked(false);
    };
  return (
            // <div className="relative border border-gray-300 h-full hover:bg-black-150  hover:fixed hover:w-11/12 hover:mx-auto hover:left-1/2 hover:z-50 hover:h-[90%] hover:overflow-y-scroll hover:top-8 hover:rounded-md hover:-translate-x-1/2" >
           <div className={`relative border bg-black  border-gray-300 h-full ${isClicked ? 'bg-black-150 !fixed w-11/12 mx-auto left-1/2 z-50 h-[90%] overflow-y-scroll top-8 rounded-md  -translate-x-1/2'  : ''}`} onClick={handleClick} >
               <button className="absolute btn hidden z-50 bg-orange-500 right-2 top-2 text-white" onClick={close}>close</button>
               <div className="pb-0">
                  {serviceWork.image && <img src={serviceWork.image} alt="" /> }
               </div>
               <div className="title px-2 absolute bottom-0 w-full flex items-end h-full " style={{background:'-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%)'}}>
                      <div className="">
                        <div className="mb-0.5 flex items-center text-gray-100 font-semibold text-base">
                            <span className="">
                            <svg fill="#fff" width="28px" height="28px" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M50.455 102.855c0 25.177 39.647 105.629 77.265 105.629h.001c37.619 0 77.397-76.894 77.397-108.531 0-20.003-18.606-52.373-77.62-52.373-59.013 0-77.043 35.758-77.043 55.275zm50.039 5.634C86.402 93.277 77.656 77.857 77.656 77.857s14.41-7.175 23.824-9.091c.802-.163 1.62-.338 2.458-.516 8.997-1.916 20.189-4.298 36.328 1.496 33.579 12.056 47.896 34.606 47.896 34.606s-21.609-17.401-45.404-20.895c-13.707-2.013-39.203 6.152-39.203 6.152s8.862 9.38 16.075 23.114c1.137 2.165 2.245 4.147 3.306 6.045 5.668 10.137 9.974 17.838 9.974 37.93 0 14.659-11.08 36.443-11.08 36.443s6.223-28.383 1.204-50.825c-3.627-16.223-6.425-18.719-13.02-24.603-2.528-2.255-5.615-5.008-9.52-9.224z"/>
                            </svg>
                            </span>
                            <span className="pl-1">
                                {serviceWork.title}
                            </span>
                        </div>
                        <p className="font-semibold text-gray-100 uppercase pt-1 pl-7 text-sm pb-3">
                            Logo Design                       
                        </p>
                      </div>
                    
               </div>
            </div>



    // <div className="flex-100 sm:flex-20 rounded-md p-2 bg-white dark:bg-black-150">
    // <div className=" py-3 text-center rounded-md shadow-xl border h-full border-gray-200">
    //  <div className="flex px-2  justify-center">
    //     <img src={serviceWork.image} alt="" />
    //  </div>
    //     <div className="mt-1.5 ">
    //         <p className="text-gray-800 dark:text-orange-500 text-xl mb-1 font-semibold ">{serviceWork.name}</p>
    //         <p className="text-gray-500 text-sm dark:text-gray-200 tracking-8  leading-6 px-1.5 font-medium mb-4">{serviceWork.desc}</p> 
    //          <div className="flex items-center bg-orange-500 px-2 py-1 mx-auto justify-center border  border-orange-500 w-fit rounded-md shadow-md">
    //           <a href="" className="text-gray-50   text-sm font-medium   ">Details</a>
    //           <span className="ml-2 flex items-center h-full w-4 ">
    //             <svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
    //                     viewBox="0 0 512 512" >
    //                   <path fill="#f7f7f7" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
    //                   <path fill="#8AD5DD" d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
    //                     M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"/>
    //                   <polygon fill="#2D2D2D" points="214.656,95.936 378.016,256 214.656,416.064 165.856,366.096 278.208,256 165.856,145.904 
    //                     "/>
    //                   </svg>
    //             </span>

    //         </div> 
    //     </div>
    // </div>
    // </div>
  );
};

export default ServiceWork;