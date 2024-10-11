'use client'
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Link from "next/link";
import EditEmployee from "../../_components/EditEmployee";

interface Props {
    params: {
        id: string;
    };
}
const ShowTagPage = ({params}:Props) => {
    return (
      <div className="p-2">
         <div className="text-gray-600 py-2 flex items-center mx-auto text-md w-11.8/12 bg-white border rounded-md border-gray-200 px-2 mb-4">
           <Link href="/admin/employees-manage">
           Employee
           </Link>
           <span className="text-gtay-700 mx-2 inline-flex h-3 bg-gray-600 w-[1px]"></span>
           show
        </div>
        <EditEmployee id={params.id} /> 
        </div>
)
};
export default ShowTagPage;