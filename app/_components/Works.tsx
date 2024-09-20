
import React from 'react';

const Works = () => {
    const imagePath1 = '/images/w05.jpg';
  const imagePath2 = '/images/w02.jpg';
  const imagePath3 = '/images/w03.jpg';
  const imagePath4 = '/images/w-4.jpg';
  const imagePath5 = '/images/w05.jpg';
  const imagePath6 = '/images/w06.jpg';
  return (
   <div className="my-8 w-full bg-gray-100 dark:bg-[#161616] dark:border darke:border-gray-800">
    <div className="flex items-center justify-center">
        <span className="w-8">
        <svg  width="100%" height="100%" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color fill-orange-500"><path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" className='fill-fuchsia-500'></path></svg>
        </span>
        <span className="text-fuchsia-500 font-semibold text-sm  uppercase mx-2">Latest Work</span>
        <span className="w-8 rotate-180">
        <svg  width="100%" height="100%" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color fill-orange-500"><path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" className='fill-fuchsia-500'></path></svg>
        </span>
    </div>
    <div className="mt-2 flex justify-center">
        <h2 className="text-2xl capitalize text-gray-700 dark:text-gray-200 font-semibold">
            Display Our Latest Work
        </h2>
       
    </div>
    <div className='grid grid-cols w-11/12 mx-auto sm:grid-cols-3 px-0 mt-6 py-4 gap-6'>
        <div className="rounded-md bg-white  dark:bg-[#181818] p-1.5 border border-gray-200 dark:border-gray-700 relative">
            <div className="">
              <img className='w-full rounded-md border border-gray-400 h-full' src={`${imagePath1}`} alt="" />
            </div>
           
            
            <div className="px-2 pb-2 pt-3 flex w-full justify-between">
                <div className="flex flex-col">
                    <h2 className="text-gray-800 dark:text-gray-100 font-semibold text-base">Finco - Business & Finance Theme</h2>
                    <span className="inline-block text-gray-700 dark:text-gray-100 uppercase mt-1.5 text-sm">Projects</span>
                </div>
            </div>
            
            <div className="px-3 flex justify-between items-center py-1.5 bg-gray-100  dark:bg-[#242424] rounded-md">
                <div className=''>
                    <span className="text-md font-semibold text-red-800 dark:text-green-500">10$</span>
                </div>
                <div className="">
                    <span className="text-sm bg-orange-500 dark:bg-violet-600 rounded text-white inline-block px-2 py-1">Preview</span>
                </div>
            </div>
        </div>

        <div className="rounded-md bg-white  dark:bg-[#181818] p-1.5 border border-gray-200 dark:border-gray-700 relative">
            <div className="">
              <img className='w-full rounded-md border border-gray-400 h-full' src={`${imagePath4}`} alt="" />
            </div>
            <div className="px-2 pb-2 pt-3 flex w-full justify-between">
                <div className="flex flex-col">
                    <h2 className="text-gray-800 dark:text-gray-100 font-semibold text-base">Finco - Business & Finance Theme</h2>
                    <span className="inline-block text-gray-700 dark:text-gray-100 uppercase mt-1.5 text-sm">Projects</span>
                </div>
            </div>
            <div className="px-3 flex justify-between items-center py-1.5 bg-gray-100  dark:bg-[#242424] rounded-md">
                <div className=''>
                    <span className="text-md font-semibold text-red-800 dark:text-green-500">10$</span>
                </div>
                <div className="">
                    <span className="text-sm bg-orange-500 dark:bg-violet-600 rounded text-white inline-block px-2 py-1">Preview</span>
                </div>
            </div>
         </div>

         <div className="rounded-md bg-white  dark:bg-[#181818] p-1.5 border border-gray-200 dark:border-gray-700 relative">
            <div className="">
              <img className='w-full rounded-md border border-gray-400 h-full' src={`${imagePath2}`} alt="" />
            </div>
            <div className="px-2 pb-2 pt-3 flex w-full justify-between">
                <div className="flex flex-col">
                    <h2 className="text-gray-800 dark:text-gray-100 font-semibold text-base">Finco - Business & Finance Theme</h2>
                    <span className="inline-block text-gray-700 dark:text-gray-100 uppercase mt-1.5 text-sm">Projects</span>
                </div>
            </div>
            <div className="px-3 flex justify-between items-center py-1.5 bg-gray-100  dark:bg-[#242424] rounded-md">
                <div className=''>
                    <span className="text-md font-semibold text-red-800 dark:text-green-500">10$</span>
                </div>
                <div className="">
                    <span className="text-sm bg-orange-500 dark:bg-violet-600 rounded text-white inline-block px-2 py-1">Preview</span>
                </div>
            </div>
         </div>

       

         <div className="rounded-md bg-white  dark:bg-[#181818] p-1.5 border border-gray-200 dark:border-gray-700 relative">
            <div className="">
              <img className='w-full rounded-md border border-gray-400 h-full' src={`${imagePath5}`} alt="" />
            </div>
            <div className="px-2 pb-2 pt-3 flex w-full justify-between">
                <div className="flex flex-col">
                    <h2 className="text-gray-800 dark:text-gray-100 font-semibold text-base">Finco - Business & Finance Theme</h2>
                    <span className="inline-block text-gray-700 dark:text-gray-100 uppercase mt-1.5 text-sm">Projects</span>
                </div>
            </div>
            <div className="px-3 flex justify-between items-center py-1.5 bg-gray-100  dark:bg-[#242424] rounded-md">
                <div className=''>
                    <span className="text-md font-semibold text-red-800 dark:text-green-500">10$</span>
                </div>
                <div className="">
                    <span className="text-sm bg-orange-500 dark:bg-violet-600 rounded text-white inline-block px-2 py-1">Preview</span>
                </div>
            </div>
         </div>


         <div className="rounded-md bg-white  dark:bg-[#181818] p-1.5 border border-gray-200 dark:border-gray-700 relative">
            <div className="">
              <img className='w-full rounded-md border border-gray-400 h-full' src={`${imagePath3}`} alt="" />
            </div>
            <div className="px-2 pb-2 pt-3 flex w-full justify-between">
                <div className="flex flex-col">
                    <h2 className="text-gray-800 dark:text-gray-100 font-semibold text-base">Finco - Business & Finance Theme</h2>
                    <span className="inline-block text-gray-700 dark:text-gray-100 uppercase mt-1.5 text-sm">Projects</span>
                </div>
            </div>
            <div className="px-3 flex justify-between items-center py-1.5 bg-gray-100  dark:bg-[#242424] rounded-md">
                <div className=''>
                    <span className="text-md font-semibold text-red-800 dark:text-green-500">10$</span>
                </div>
                <div className="">
                    <span className="text-sm bg-orange-500 dark:bg-violet-600 rounded text-white inline-block px-2 py-1">Preview</span>
                </div>
            </div>
         </div>
       

         <div className="rounded-md bg-white  dark:bg-[#181818] p-1.5 border border-gray-200 dark:border-gray-700 relative">
            <div className="">
              <img className='w-full rounded-md border border-gray-400 h-full' src={`${imagePath6}`} alt="" />
            </div>
            <div className="px-2 pb-2 pt-3 flex w-full justify-between">
                <div className="flex flex-col">
                    <h2 className="text-gray-800 dark:text-gray-100 font-semibold text-base">Finco - Business & Finance Theme</h2>
                    <span className="inline-block text-gray-700 dark:text-gray-100 uppercase mt-1.5 text-sm">Projects</span>
                </div>
            </div>
            <div className="px-3 flex justify-between items-center py-1.5 bg-gray-100  dark:bg-[#242424] rounded-md">
                <div className=''>
                    <span className="text-md font-semibold text-red-800 dark:text-green-500">10$</span>
                </div>
                <div className="">
                    <span className="text-sm bg-orange-500 dark:bg-violet-600 rounded text-white inline-block px-2 py-1">Preview</span>
                </div>
            </div>
         </div>

       
       
       
    </div>
   </div>
  );
};

export default Works;