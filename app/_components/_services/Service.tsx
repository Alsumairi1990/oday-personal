
import React from 'react';
import { ServiceInt } from '@/app/models/Service'

const ServiceSingle = ({ service } : ServiceInt) => {
  return (
    <div className="flex-100 sm:flex-20 p-2">
    <div className="bg-[#f9f9f9] py-3 text-center rounded-md  border border-gray-200">
     <div className="flex px-2  justify-center">
        <img src={service.image} alt="" />
     </div>
        <div className="mt-1.5">
            <p className="text-gray-800 text-2xl mb-1 font-bold ">{service.name}</p>
            <p className="text-gray-500 text-sm tracking-8 px-1.5 font-medium mb-4">{service.desc}</p>
            <a href="" className="text-gray-50 px-2 py-1 bg-orange-500 text-sm font-medium border border-orange-500 rounded-md shadow-md">Details</a>
        </div>
    </div>
    </div>
  );
};

export default ServiceSingle;