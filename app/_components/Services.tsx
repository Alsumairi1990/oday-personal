
import React from 'react';

const Services = () => {
  const imagePath = '/images/77.png';
  const imagePath2 = '/images/11.png';
  const imagePath3 = '/images/66.png';
  const imagePath4 = '/images/55.png';
  return (

      <div className="flex flex-col sm:py-8  bg-[#111]">
        <div className="p2 w-11/12 mx-auto">
        <h2 className="text-3xl text-center px-8 mb-6 text-white font-semibold">Our Services</h2>
        <p className="text-base text-gray-300 text-center leading-7 px-8">Search the world's information, information information including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-8 gap-8">
          <div className="p-2 flex flex-col justify-center bg-[#1f2020] border rounded-lg border-[#3a3737]">
            <div className="pb-5 border-b w-44 h-40 flex items-center mx-auto border-b-[#3c3c3c]">
              <img className='w-full mx-auto' src={`${imagePath}`} alt="" />
            </div>
            <div className="sm:p2 mt-4 text-center">
              <h2 className="text-base sm:text-xl font-semibold text-orange-500">Web Deveopment</h2>
              <p className="text-md text-gray-300 text-center leading-7 mt-3 sm:px-3">Search  including webpages, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking </p>
            </div>
          </div>

          <div className="p-2 flex flex-col justify-center bg-[#1f2020] border rounded-lg border-[#3a3737]">
            <div className="pb-5 border-b w-48 h-40 flex items-center mx-auto border-b-[#3c3c3c]">
              <img className='w-full ' src={`${imagePath2}`} alt="" />
            </div>
            <div className="sm:p2 mt-4 text-center">
              <h2 className="text-base sm:text-xl font-semibold text-orange-500">Design For Painting</h2>
              <p className="text-md text-gray-300 text-center leading-7 mt-3 sm:px-3">Search  including webpages, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking </p>
            </div>
          </div>

          <div className="p-2 flex flex-col justify-center bg-[#1f2020] border rounded-lg border-[#3a3737]">
            <div className="pb-5 border-b w-48 h-40 flex items-center mx-auto border-b-[#3c3c3c]">
              <img className='w-full h-full ' src={`${imagePath3}`} alt="" />
            </div>
            <div className="sm:p2 mt-4 text-center">
              <h2 className="text-base sm:text-xl font-semibold text-orange-500">Design For Painting</h2>
              <p className="text-md text-gray-300 text-center leading-7 mt-3 sm:px-3">Search  including webpages, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking </p>
            </div>
          </div>

          <div className="p-2 flex flex-col justify-center bg-[#1f2020] border rounded-lg border-[#3a3737]">
            <div className="pb-5 border-b w-48 h-40 flex items-center mx-auto border-b-[#3c3c3c]">
              <img className='w-full ' src={`${imagePath4}`} alt="" />
            </div>
            <div className="sm:p2 mt-4 text-center">
              <h2 className="text-base sm:text-xl font-semibold text-orange-500">Design For Painting</h2>
              <p className="text-md text-gray-300 text-center leading-7 mt-3 sm:px-3">Search  including webpages, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking </p>
            </div>
          </div>
        </div>
        </div>
       
      </div>
      
  );
};

export default Services;