'use client'
import React, { useState } from 'react';
import { EmployeeWithModels } from '../_utils/EmployeeWithModels';
import EditBasicInfo from './EditBasicInfo';

interface FormEditProps {
    employee?: EmployeeWithModels;
  }
const TeamProfile = ({ employee}: FormEditProps) => {
   const [loading, setLoading] = useState<boolean>(false); 
   const [error, setError] = useState<string>(); 
  return (
    <div className="py-2">
        <div  className="pt-1"> 
            {employee && <EditBasicInfo employee={employee} /> }
        </div>         
  </div>
  )
};
export default TeamProfile;
