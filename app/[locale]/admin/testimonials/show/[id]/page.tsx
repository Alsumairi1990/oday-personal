'use client'
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Link from "next/link";

interface Props {
    params: {
        id: string;
    };
}
const ShowTagPage = ({params}:Props) => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching or processing (replace with your actual logic)
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust timeout as needed (replace with actual data fetching logic)
    }, []);
    return (
      <div className="p-2">
         <div className="text-gray-600 py-2 flex items-center mx-auto text-md w-11.8/12 bg-white border rounded-md border-gray-200 px-2 mb-4">
           <Link href="/admin/testimonials">
           Yestimonials
           </Link>
           <span className="text-gtay-700 mx-2 inline-flex h-3 bg-gray-600 w-[1px]"></span>
           show
        </div>

        {/* <ShowSingle id={params.id} />  */}
           
        </div>
)
};
export default ShowTagPage;