'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link'
import { EmployeeWithModels } from '../_utils/EmployeeWithModels';
import { getUsersWithModels } from '../_actions/Actions';
import { Span } from 'next/dist/trace';
import Image from 'next/image';
import { AiFillEdit } from 'react-icons/ai';
import { editWorkImage } from '@/app/admin/works/_actions/Actions';
import ProfileHeader from './ProfileHeader';
import { FaUserGear, FaUserTie } from 'react-icons/fa6';
import { IoMdSettings } from 'react-icons/io';
import { FaUserAlt } from 'react-icons/fa';
import { LuUsers } from 'react-icons/lu';
import { GiTeamIdea } from "react-icons/gi";
import ProfileNav from '../_utils/ProfileNav';


interface FormEditProps {
    id : string;
  }
const EmployeeProfile = ({ id}: FormEditProps) => {
   const [employee, setEmployee] = useState<EmployeeWithModels>(); 
   const [loading, setLoading] = useState<boolean>(false); 
   const [error, setError] = useState<string>(); 
   const getEmployee = async () => {
    try {
        setLoading(true)
        const workId = Number(id);
        const data = await getUsersWithModels(id);
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
    <div className="w-11.75/12 mx-auto">
         {employee && 
         <div className="">
         <div className="sm:col-span-2 sm:cols-start-2 space-y-6 rounded">
        </div>  
         </div>
        }
  </div>


 
  )
};


export default EmployeeProfile;
