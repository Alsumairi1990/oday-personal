'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';
import Link from 'next/link'
import { EmployeeWithModels } from '../_utils/EmployeeWithModels';
import { getUsersWithModels } from '../_actions/Actions';
import { Span } from 'next/dist/trace';
import Image from 'next/image';
import { AiFillEdit } from 'react-icons/ai';
import { editWorkImage } from '@/app/admin/works/_actions/Actions';
import EditContactInfo from './EditContactInfo';
import EditBasicInfo from './EditBasicInfo';
import EditEmploymentInfo from './EditEmploymentInfo';
import EditEducationInfo from './EditEducationInfo';
import EditSocialsInfo from './EditSocialsInfo';
import ProfileNav from '../_utils/ProfileNav';

interface FormEditProps {
    employee?: EmployeeWithModels;
  }
const ProfileAccount = ({ employee}: FormEditProps) => {
   const imagePath2 = 'https://angular-material.fusetheme.com/images/avatars/male-04.jpg';
   const imgBg = 'https://angular-material.fusetheme.com/images/pages/profile/cover.jpg';
   const [employeeData, setEmployeeData] = useState<EmployeeWithModels>(); 
   const [loading, setLoading] = useState<boolean>(false); 
   const [error, setError] = useState<string>(); 
   const [imageEdit,setImageEdit] = useState<boolean>(false);
   const [imageSrc, setImageSrc] = useState<string>('');
   const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImageSrc(reader.result as string);
        };
        reader.readAsDataURL(file);
      }
    };
    const editImage = async (data:FormData) => {
      console.log(data);
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data.toString());
      }   
      const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
      fileInputs.forEach((fileInput) => {
        if (fileInput.files?.length) {
          formData.append(fileInput.name, fileInput.files[0]);
        } 
      });
      try {
           setLoading(true);
           const data = await editWorkImage(Number(employee?.id),formData);
         //   if(data) setEmployee(data);
           setError('');
           setImageEdit(false);
           setLoading(false);
       } catch (error:any) {
         setLoading(false);
           setError(error.message)
       }
   }


   const getEmployee = async () => {
    try {
        setLoading(true)
        const workId = Number(employee?.id);
        if (employee){const data = await getUsersWithModels(employee.id);
        setEmployeeData(data);}

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
  
 
  <div  className="pt-4"> 
     {employee && <EditBasicInfo employee={employee} /> }
  </div>
 
  <div className="">
    <div className="my-6">
     {employee && <EditEducationInfo employee={employee} /> }
    </div>
  </div>
          
  </div>


  )
};


export default ProfileAccount;
