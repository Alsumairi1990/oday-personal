import React from 'react';
import Link from "next/link";
import ToolDisplay from '../_components/ToolDisplay';

const DisplayPage = () => {
    return (
      <div className="p-2">
        <div className="text-gray-600 py-2 flex items-center mx-auto text-md w-11.8/12 bg-white border rounded-md border-gray-200 px-2 mb-4">
           <Link href="/admin/tag">
           Tag
           </Link>
           <span className="text-gtay-700 mx-2 inline-flex h-3 bg-gray-600 w-[1px]"></span>
           Show
        </div>
        <ToolDisplay  />
      </div>
)
};
export default DisplayPage;