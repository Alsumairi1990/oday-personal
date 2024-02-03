
import Link from 'next/link';
import React from 'react';

const Blogs = () => {
    const imagePath = '/images/p1.webp'
    const imagePath1 = '/images/p2.webp'
  return (
   <div className="flex w-[90%] mx-auto  items-center flex-col my-8">
      +
      <div className="p-2">
      <h2 className="text-base sm:text-3xl font-bold text-blue-600 dark:text-white mt-3 text-center">Descover More </h2>
      {/* <h2 className="text-base sm:text-2xl font-semibold dark:sm:text-3xl dark:font-bold text-blue-400 dark:text-white mt-1 sm:mt-2.5 text-center">About our provided serices</h2> */}
      <div className="grid sm:grid-cols-2 gap-3 mt-8">

        <div className="grid sm:grid-cols-2">
            <div className="relative">
            <img className='w-full h-full' src={`${imagePath}`} alt="" />
                <div className="absolute flex px-3 py-1.5 flex-col justify-center items-center bg-fuchsia-600 text-white top-0 left-0">
                    <span className='text-lg font-semibold'>05</span>
                    <span className='text-sm'>MAR</span>
                </div>
            </div>
            <div className="p-1 bg-[#1c1c1c] flex flex-col">
                <div className="mt-4 px-4 flex justify-between">
                    <div className="flex items-center">
                       <span className="w-6 inline-block mr-1 ">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.023 17.292c.85-.63 1.776-1.129 2.778-1.494A9.264 9.264 0 0 1 12 15.25c1.13 0 2.197.183 3.199.548 1.002.365 1.928.864 2.778 1.494a7.882 7.882 0 0 0 1.478-2.373A7.714 7.714 0 0 0 20 12c0-2.217-.78-4.104-2.337-5.663C16.104 4.78 14.217 4 12 4s-4.104.78-5.663 2.337C4.78 7.896 4 9.783 4 12c0 1.047.182 2.02.545 2.92.364.898.856 1.689 1.478 2.372ZM12 12.75c-.913 0-1.683-.313-2.31-.94s-.94-1.397-.94-2.31.313-1.683.94-2.31 1.397-.94 2.31-.94 1.683.313 2.31.94.94 1.397.94 2.31-.313 1.683-.94 2.31-1.397.94-2.31.94Zm0 8.75a9.31 9.31 0 0 1-3.713-.744 9.54 9.54 0 0 1-3.016-2.027 9.54 9.54 0 0 1-2.027-3.016A9.31 9.31 0 0 1 2.5 12c0-1.32.248-2.557.744-3.713a9.54 9.54 0 0 1 2.027-3.016 9.54 9.54 0 0 1 3.016-2.027A9.31 9.31 0 0 1 12 2.5a9.31 9.31 0 0 1 3.713.744 9.54 9.54 0 0 1 3.016 2.027 9.54 9.54 0 0 1 2.027 3.016A9.31 9.31 0 0 1 21.5 12a9.31 9.31 0 0 1-.744 3.713 9.54 9.54 0 0 1-2.027 3.016 9.54 9.54 0 0 1-3.016 2.027A9.31 9.31 0 0 1 12 21.5Zm0-1.5c.902 0 1.773-.145 2.61-.436a7.405 7.405 0 0 0 2.232-1.218 7.607 7.607 0 0 0-2.203-1.175A8.081 8.081 0 0 0 12 16.75a8.21 8.21 0 0 0-2.644.416 7.251 7.251 0 0 0-2.198 1.18c.65.522 1.394.928 2.231 1.218.838.29 1.708.436 2.611.436Zm0-8.75c.497 0 .913-.167 1.248-.502.335-.335.502-.75.502-1.248 0-.497-.167-.913-.502-1.248-.335-.335-.75-.502-1.248-.502s-.914.167-1.248.502c-.335.335-.502.75-.502 1.248 0 .497.167.913.502 1.248.334.335.75.502 1.248.502Z" className='fill-fuchsia-500'></path>
                            </svg>
                        </span>
                        <span className="text-gray-100 text-sm">By Admin</span>
                    </div>
                    <div className="flex items-center">
                       <span className="w-6 inline-block mr-1 ">
                       <svg width="20px" height="20px" viewBox="0 0 1024 1024"  className="icon fill-fuchsia-400"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M285.6 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-33.6 77.6-76 77.6zM512.8 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM739.2 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM307.2 925.6c-5.6 0-12-1.6-17.6-4-12.8-5.6-21.6-17.6-24-31.2l-20-123.2 42.4-9.6 20.8 122.4 132.8-77.6 2.4 45.6-115.2 72c-6.4 3.2-14.4 5.6-21.6 5.6z" fill="" /><path d="M512 57.6C240 57.6 18.4 235.2 18.4 454.4c0 156 112.8 292 276.8 356l-7.2-52.8C154.4 696.8 64.8 583.2 64.8 454.4 64.8 260.8 265.6 104 512 104s447.2 156.8 447.2 350.4c0 193.6-200.8 350.4-447.2 350.4-13.6 0-57.6-2.4-70.4-3.2l-40.8 39.2c36 6.4 73.6 10.4 111.2 10.4 272 0 493.6-177.6 493.6-396.8S784 57.6 512 57.6z" fill="" /></svg>
                        </span>
                        <span className="text-gray-100 text-sm capitalize">commnents</span>
                    </div>
                
                </div>

                <div className="p-4">
                    <h2 className="text-gray-100 mb-2 text-base font-semibold">
                    Figma from Right Arrow 251 Vectors svg vector 
                    </h2>
                    <p className="text-[13px] font-normal text-gray-200">
                    Figma from Right Arrow 251 Vectors svg vector for Sketch and Figma from Right Arrow 251
                    </p>
                </div>
                <div className="px-4 py-2">
                    <a href="" className="text-gray-200 text-[13px] px-2 py-2 border uppercase border-gray-400">Read More </a>
                </div>
            </div>
        </div>


        <div className="grid sm:grid-cols-2">
            <div className="relative">
            <img className='w-full h-full' src={`${imagePath1}`} alt="" />
                <div className="absolute flex px-3 py-1.5 flex-col justify-center items-center bg-fuchsia-600 text-white top-0 left-0">
                    <span className='text-lg font-semibold'>05</span>
                    <span className='text-sm'>MAR</span>
                </div>
            </div>
            <div className="p-1 bg-[#1c1c1c] flex flex-col">
                <div className="mt-4 px-4 flex justify-between">
                    <div className="flex items-center">
                       <span className="w-6 inline-block mr-1 ">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.023 17.292c.85-.63 1.776-1.129 2.778-1.494A9.264 9.264 0 0 1 12 15.25c1.13 0 2.197.183 3.199.548 1.002.365 1.928.864 2.778 1.494a7.882 7.882 0 0 0 1.478-2.373A7.714 7.714 0 0 0 20 12c0-2.217-.78-4.104-2.337-5.663C16.104 4.78 14.217 4 12 4s-4.104.78-5.663 2.337C4.78 7.896 4 9.783 4 12c0 1.047.182 2.02.545 2.92.364.898.856 1.689 1.478 2.372ZM12 12.75c-.913 0-1.683-.313-2.31-.94s-.94-1.397-.94-2.31.313-1.683.94-2.31 1.397-.94 2.31-.94 1.683.313 2.31.94.94 1.397.94 2.31-.313 1.683-.94 2.31-1.397.94-2.31.94Zm0 8.75a9.31 9.31 0 0 1-3.713-.744 9.54 9.54 0 0 1-3.016-2.027 9.54 9.54 0 0 1-2.027-3.016A9.31 9.31 0 0 1 2.5 12c0-1.32.248-2.557.744-3.713a9.54 9.54 0 0 1 2.027-3.016 9.54 9.54 0 0 1 3.016-2.027A9.31 9.31 0 0 1 12 2.5a9.31 9.31 0 0 1 3.713.744 9.54 9.54 0 0 1 3.016 2.027 9.54 9.54 0 0 1 2.027 3.016A9.31 9.31 0 0 1 21.5 12a9.31 9.31 0 0 1-.744 3.713 9.54 9.54 0 0 1-2.027 3.016 9.54 9.54 0 0 1-3.016 2.027A9.31 9.31 0 0 1 12 21.5Zm0-1.5c.902 0 1.773-.145 2.61-.436a7.405 7.405 0 0 0 2.232-1.218 7.607 7.607 0 0 0-2.203-1.175A8.081 8.081 0 0 0 12 16.75a8.21 8.21 0 0 0-2.644.416 7.251 7.251 0 0 0-2.198 1.18c.65.522 1.394.928 2.231 1.218.838.29 1.708.436 2.611.436Zm0-8.75c.497 0 .913-.167 1.248-.502.335-.335.502-.75.502-1.248 0-.497-.167-.913-.502-1.248-.335-.335-.75-.502-1.248-.502s-.914.167-1.248.502c-.335.335-.502.75-.502 1.248 0 .497.167.913.502 1.248.334.335.75.502 1.248.502Z" className='fill-fuchsia-500'></path>
                            </svg>
                        </span>
                        <span className="text-gray-100 text-sm">By Admin</span>
                    </div>
                    <div className="flex items-center">
                       <span className="w-6 inline-block mr-1 ">
                       <svg width="20px" height="20px" viewBox="0 0 1024 1024"  className="icon fill-fuchsia-400"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M285.6 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-33.6 77.6-76 77.6zM512.8 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM739.2 555.2c-41.6 0-76-34.4-76-77.6s34.4-77.6 76-77.6 76 34.4 76 77.6-34.4 77.6-76 77.6zM307.2 925.6c-5.6 0-12-1.6-17.6-4-12.8-5.6-21.6-17.6-24-31.2l-20-123.2 42.4-9.6 20.8 122.4 132.8-77.6 2.4 45.6-115.2 72c-6.4 3.2-14.4 5.6-21.6 5.6z" fill="" /><path d="M512 57.6C240 57.6 18.4 235.2 18.4 454.4c0 156 112.8 292 276.8 356l-7.2-52.8C154.4 696.8 64.8 583.2 64.8 454.4 64.8 260.8 265.6 104 512 104s447.2 156.8 447.2 350.4c0 193.6-200.8 350.4-447.2 350.4-13.6 0-57.6-2.4-70.4-3.2l-40.8 39.2c36 6.4 73.6 10.4 111.2 10.4 272 0 493.6-177.6 493.6-396.8S784 57.6 512 57.6z" fill="" /></svg>
                        </span>
                        <span className="text-gray-100 text-sm capitalize">commnents</span>
                    </div>
                
                </div>

                <div className="p-4">
                    <h2 className="text-gray-100 mb-2 text-base font-semibold">
                    Figma from Right Arrow 251 Vectors svg vector for 
                    </h2>
                    <p className="text-[13px] font-normal text-gray-200">
                    Figma from Right Arrow 251 Vectors svg vector for Sketch and Figma from Right Arrow 251
                    </p>
                </div>
                <div className="px-4 py-2">
                    <a href="" className="text-gray-200 text-[13px] px-2 py-2 border uppercase border-gray-400">Read More </a>
                </div>
            </div>
        </div>



        
      </div>
      <div className="py-2 flex justify-center mt-4">
      <Link href={'/blog'} className="capitalize text-white  px-2.5 rounded py-1.5 font-semibold bg-orange-500 ">More Blogs</Link>
      </div>
         
      </div>
   </div>
  );
};

export default Blogs;