'use client'
import React, { useState } from 'react';
import { EmployeeWithModels } from '../_utils/EmployeeWithModels';
import EditContactInfo from './EditContactInfo';
import EditBasicInfo from './EditBasicInfo';
import EditEmploymentInfo from './EditEmploymentInfo';
interface FormEditProps {
    employee: EmployeeWithModels;
  }
const ProfileDetails = ({ employee}: FormEditProps) => {
   const [loading, setLoading] = useState<boolean>(false); 
   const [error, setError] = useState<string>(); 
  return (
    <div className="py-2">
        <div  className="pt-1 grid  grid-cols max-sm:gap-y-3 sm:gap-x-5 sm:grid-cols-3">
        <div className="">
          {employee && <EditContactInfo employee={employee} /> }
          </div>
          <div className="sm:col-span-2   sm:cols-start-2 space-y-6">
          {employee && <EditBasicInfo employee={employee} /> }
          </div>
        </div>
        <div className="">
        <div className="my-6">
          {employee && <EditEmploymentInfo employee={employee} /> }
          </div>
        </div>
        {/* <div className="">
          <div className="my-6">
          {employee && <EditEducationInfo employee={employee} /> }
          </div>
        </div>

        <div className="">
          <div className="my-6">
          {employee && <EditSocialsInfo employee={employee} /> }
          </div>
        </div> */}
          
  </div>


  )
};


export default ProfileDetails;
