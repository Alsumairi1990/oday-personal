import React from 'react';
import Link from 'next/link';
import TeamManage from './_components/TeamManage';
const Testimonials= () => {

    const imagePath1 = '/images/navbg.webp';

    return (
      <div className="">
         <div className="text-gray-600 py-2 flex items-center mx-auto text-md w-11.8/12 bg-white border rounded-md border-gray-200 px-2 mb-4">
           <Link href="/admin/setting/left-menu">
           Team
           </Link>
           <span className="text-gtay-700 mx-2 inline-flex h-3 bg-gray-600 w-[1px]"></span>
           Manage
        </div>
        <TeamManage  />
      </div>
)
};
export default Testimonials;