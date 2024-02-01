
import React from 'react';
import { ServiceInt } from '@/app/models/Service'

const ServiceSingle = ({ service } : ServiceInt) => {
  return (
    <div className="flex-100 sm:flex-20 p-2">
    <div className="bg-[#f9f9f9] py-3 text-center rounded-md  border border-gray-200">
     <div className="flex px-2  justify-center">
        <img src={service.image} alt="" />
     </div>
        <div className="mt-1.5 ">
            <p className="text-gray-800 text-xl mb-1 font-semibold ">{service.name}</p>
            <p className="text-gray-500 text-sm tracking-8 px-1.5 font-medium mb-4">{service.desc}</p>
            <div className="flex items-center bg-orange-500 px-2 py-1 mx-auto justify-center border  border-orange-500 w-fit rounded-md shadow-md">
              <a href="" className="text-gray-50   text-sm font-medium   ">Details</a>
              <span className="ml-2 flex items-center h-full w-4 ">
                <svg height="100%" width="100%" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512" >
                      <path fill="#f7f7f7" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
                      <path fill="#8AD5DD" d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                        M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"/>
                      <polygon fill="#2D2D2D" points="214.656,95.936 378.016,256 214.656,416.064 165.856,366.096 278.208,256 165.856,145.904 
                        "/>
                      </svg>
                </span>

            </div>
        </div>
    </div>
    </div>
  );
};

export default ServiceSingle;