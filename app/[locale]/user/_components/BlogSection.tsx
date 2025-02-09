'use client'
import React from 'react';
import Link from 'next/link'
import { AbstractIntlMessages } from 'next-intl';

interface Props {
    slug : String,
    locale : string,
    messages : AbstractIntlMessages
}

const HomeSection = ({locale,messages}:Props) => {
   const imagePath = '/images/navbg.webp';
   const imagePath2 = '/images/buttonsBg.svg';
   const postImag = 'https://tixia.dexignzone.com/xhtml/images/profile/8.jpg';
   const postImag1 = 'https://tixia.dexignzone.com/xhtml/images/profile/9.jpg';
  
  return (
      <div className="sm:col-span-2   sm:cols-start-2 space-y-6">
          <div className="p-5 bg-white rounded-xl border border-gray-300 shadow-md">
             <img src={postImag} alt="" className="img-fluid w-100 rounded" />
             <a className="" href="post-details.html">
                <h3 className="font-bold text-gray-900 text-lg my-3">Swiftly Respond to and Resolve Issues</h3>
             </a>
             <p className="text-md text-gray-600">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning
                of spare which enjoy whole heart.
             </p>
             <div className="mt-4 mb-2 space-x-6">
               <button className="px-3 py-1.5 bg-blue-600 rounded-md text-white text-md"><span className=""><i className="fa fa-heart"></i></span>Like</button>
               <button className="px-3 py-1.5 bg-red-600 rounded-md text-white text-md" data-bs-toggle="modal" data-bs-target="#replyModal"><span className=""><i className="fa fa-reply"></i></span>Reply</button>
             </div>
          </div>

            <div className="p-5 bg-white rounded-xl border border-gray-300 shadow-md">
             <img src={postImag1} alt="" className="img-fluid w-100 rounded" />
             <a className="" href="post-details.html">
                <h3 className="font-bold text-gray-900 text-lg my-3">Swiftly Respond to and Resolve Issues</h3>
             </a>
             <p className="text-md text-gray-600">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning
                of spare which enjoy whole heart.
             </p>
             <div className="mt-4 mb-2 space-x-6">
               <button className="px-3 py-1.5 bg-blue-600 rounded-md text-white text-md"><span className=""><i className="fa fa-heart"></i></span>Like</button>
               <button className="px-3 py-1.5 bg-red-600 rounded-md text-white text-md" data-bs-toggle="modal" data-bs-target="#replyModal"><span className=""><i className="fa fa-reply"></i></span>Reply</button>
             </div>
          </div>
        </div> 
  )
};


export default HomeSection;
