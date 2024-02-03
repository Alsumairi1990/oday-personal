
import React from 'react';

const ServicesFull = () => {
  const imagePath = '/images/01.png';
  const imagePath2 = '/images/02.png';
  const imagePath3 = '/images/03.png';
  const imagePath4 = '/images/04.png';
  const imagePath_1 ="https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg"
  const imagePath_2 = "https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg"
  const imagePath_3 = "https://dcstatic.com/images/icons/design-categories/design-categories-logo-design-386041ef44.svg";
  const imagePath_4 = "https://dcstatic.com/images/icons/design-categories/design-categories-advertisement-design-3bf09fad61.svg"
  const imagePath_5 = "https://dcstatic.com/images/icons/design-categories/design-categories-vector-design-f83cdf5668.svg"
  const imagePath_6 = "https://dcstatic.com/images/icons/design-categories/design-categories-app-design-27fb7b89e6.svg"
  const imagePath_7 = "https://dcstatic.com/images/icons/design-categories/design-categories-label-design-275e614d8d.svg"
  const imagePath_8 = "https://dcstatic.com/images/icons/design-categories/design-categories-t-shirt-design-0337015c20.svg"
  const imagePath_9 = "https://dcstatic.com/images/icons/design-categories/design-categories-bag-and-tote-design-c1bec00d33.svg"
  const imagePath_10 = "https://dcstatic.com/images/icons/design-categories/design-categories-ebook-cover-design-32401d2b4f.svg"
  const imagePath_11 = "https://dcstatic.com/images/icons/design-categories/design-categories-resume-design-b1aa5b01e6.svg"
  const imagePath_12 = "https://dcstatic.com/images/icons/design-categories/design-categories-magazine-design-f15d13134d.svg"
  return (

      <div className="flex flex-col sm:py-8  dark:bg-[#080808]">
        <div className="p-1 w-11/12 mx-auto">
        <h2 className="text-3xl text-center px-8 mb-6 text-blue-700 dark:text-white font-semibold">Our Services</h2>
        <p className="text-base text-gray-600 dark:text-gray-300 text-center leading-7 px-8">Search the world's ,information including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking </p>
       
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-x-5 gap-y-8 mt-8">


        <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_1}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">Web Deveopment</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_2}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">banner ads design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_3}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">Logo design</h2>             
            </div>
          </a>  
          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_4}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">flyer design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_5}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">Brochure design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_6}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">Mobile design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_7}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold  ">label design</h2>             
            </div>
          </a>

         


          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_8}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">T-Shirt Design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_9}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">bag and toat design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_10}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">flyer design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_11}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold ">Resume design</h2>             
            </div>
          </a>

          <a href='/services/servi-1' className="p-2 flex flex-col justify-center py-4 sm:pt-2 hover:bg-orange-500 hover:text-white text-orange-500 dark:text-[#ca82ef] border shadow-lg dark:shadow-0 dark:max-sm:bg-[#171717] rounded-xl border-gray-200 dark:border-gray-600 dark:sm:border-[#8849a9]">
            <div className="dark:pb-2 pb-3 pt-2 dark:pt-0 dark:sm:pb-2 w-16  dark:bg-[#080808]  sm:w-[7rem] dark:sm:w-[7rem] rounded-xl  px-4 dark:px-0 flex items-center mx-auto ">
              <img className='w-full mx-auto' src={`${imagePath_12}`} alt="" />
            </div>
            <div className="sm:p2 mt-1 text-center">
              <h2 className="text-base sm:text-base capitalize sm:capitalize font-semibold  ">Magazine design</h2>             
            </div>
          </a>
          
        </div>
        <div className="flex justify-center mt-8">
          <span className="text-xl inline-block px-3 py-1 text-white bg-orange-500 rounded border border-gray-100 capitalize">Show More</span>
        </div>
        </div>
       
      </div>
      
  );
};

export default ServicesFull;