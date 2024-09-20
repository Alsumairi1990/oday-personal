'use client'
import { useEffect, useState } from "react";
import { getUsersWithModels } from "../../../_actions/Actions";
import { EmployeeWithModels } from "../../../_utils/EmployeeWithModels";
import Details from "../../../_components/Details";
import TeamProfile from "../../../_components/TeamEdit";

interface Props {
    params: {
        id: string;
    };
}
const TeamPage = ({params}:Props) => {
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
        <div className="">       
         {employee && <TeamProfile employee={employee} />}
        </div>
        </div>
)
};
export default TeamPage;