'use client'
import { useEffect, useState } from "react";
import ShowSingle from "../../_components/ShowSingle";
import HashLoader from "react-spinners/HashLoader";

interface Props {
    params: {
        id: string;
    };
}
const ShowCategoryPage = ({params}:Props) => {
  const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate data fetching or processing (replace with your actual logic)
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Adjust timeout as needed (replace with actual data fetching logic)
    }, []);
    return (
      <div className="p-2">
            <p className="text-gray-600 py-2  mx-auto w-11.8/12 bg-white border rounded-md border-gray-200 px-2 mb-6">Edit Category</p>
            {isLoading ? <div className="h-72 mx-auto w-11.8/12 flex justify-center pt-8 bg-white border border-gray-300 rounded-md">
      <HashLoader />
      </div>
       : <ShowSingle id={params.id} /> }
           
        </div>
)
};
export default ShowCategoryPage;