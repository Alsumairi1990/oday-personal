'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link'
import { EmployeeWithModels } from '../_utils/EmployeeWithModels';
import { getUsersWithModels } from '../_actions/Actions';
import { Span } from 'next/dist/trace';
import Image from 'next/image';
import { AiFillEdit } from 'react-icons/ai';
import { editWorkImage } from '@/app/admin/works/_actions/Actions';
import { LuUsers } from 'react-icons/lu';
import { IoMdSettings } from 'react-icons/io';
import { GiTeamIdea } from 'react-icons/gi';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

interface FormEditProps {
    id : string;
  }
const ProfileHeader = ({ id}: FormEditProps) => {
   const imagePath2 = 'https://angular-material.fusetheme.com/images/avatars/male-04.jpg';
   const imgBg = 'https://angular-material.fusetheme.com/images/pages/profile/cover.jpg';
   const [employeeData, setEmployeeData] = useState<EmployeeWithModels>(); 
   const [loading, setLoading] = useState<boolean>(false); 
   const [error, setError] = useState<string>(); 
   const [imageEdit,setImageEdit] = useState<boolean>(false);
   const [imageSrc, setImageSrc] = useState<string>('');
  return (
    <div className="">
    <div className="py-2 px-2 flex border border-gray-300 bg-white mx-auto rounded  gap-x-2 items-center">
        <Link href={`/admin/employees-manage/employees/show/${id}/details`}  className="px-2 py-1 flex items-center gap-x-1">
            <span className="">
            <LuUsers className="text-xl text-gray-600 capitalize" />
            </span>
            <span className="text-md text-gray-600 capitalize">
                Details
            </span>
        </Link>
        <Link href={`/admin/employees-manage/employees/show/${id}/account`} className="px-2 py-1 flex items-center gap-x-1">
            <span className="">
            <MdOutlineAccountBalanceWallet className="text-2xl text-gray-600 capitalize" />
            </span>
            <span className="text-md text-gray-600 capitalize">
                Account
            </span>
        </Link>
        <button className="px-2 py-1 flex items-center gap-x-1">
            <span className="">
            <GiTeamIdea className="text-xl text-gray-600 capitalize" />
            </span>
            <span className="text-md text-gray-600 capitalize">
                Team
            </span>
        </button>
    </div>
</div>
  )
};


export default ProfileHeader;
