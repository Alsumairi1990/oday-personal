'use client'
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Link from "next/link";
import EmployeeProfile from "../../../_components/EmployeeProfile";
import ProfileHeader from "../../../_components/ProfileHeader";
import { getUsersWithModels } from "../../../_actions/Actions";
import { EmployeeWithModels } from "../../../_utils/EmployeeWithModels";
import Details from "../../../_components/Details";
import ProfileNav from "../../../_utils/ProfileNav";

interface Props {
    params: {
        id: string;
    };
}
const DetailsPage = ({params}:Props) => {
    const [employee, setEmployee] = useState<EmployeeWithModels>(); 
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>(); 
 
    const getEmployee = async () => {
        try {
            setLoading(true)
            const data = await getUsersWithModels(params.id);
            setEmployee(data);
    
            setLoading(false)
        } catch (error:any) {
          setLoading(false);
          setError(error.message)
        }
      };
    
      useEffect(() => {
    getEmployee()
      }, []);
    return (
      <div className="py-2">
         {/* <div className="text-gray-600 py-2 flex items-center mx-auto text-md w-11.8/12 bg-white border rounded-md border-gray-200 px-2 mb-4">
           <Link href="/admin/employees-manage">
           Employee
           </Link>
           <span className="text-gtay-700 mx-2 inline-flex h-3 bg-gray-600 w-[1px]"></span>
           <Link href="/admin/employees-manage/emplyees">
           Employee
           </Link>
           <span className="text-gtay-700 mx-2 inline-flex h-3 bg-gray-600 w-[1px]"></span>
           <span className="text-gray-600 text-md capitalize">Details</span>
        </div> */}
        <div className="w-11.7/12 mx-auto">       
         {employee && <Details employee={employee} />}
        </div>
        </div>
)
};
export default DetailsPage;