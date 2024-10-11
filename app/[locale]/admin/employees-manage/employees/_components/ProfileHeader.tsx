'use client'
import React, { ChangeEvent, useEffect, useState } from 'react';
import { EmployeeWithModels } from '../_utils/EmployeeWithModels';
import { getUsersWithModels } from '../_actions/Actions';
import Image from 'next/image';
import { AiFillEdit } from 'react-icons/ai';
import { editWorkImage } from '@/app/[locale]/admin/works/_actions/Actions';

interface FormEditProps {
    id: string;
  }
const ProfileHeader = ({ id}: FormEditProps) => {
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
           const data = await editWorkImage(Number(id),formData);
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
        const workId = Number(id);
        const data = await getUsersWithModels(id);
        setEmployeeData(data);

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
    <div className="bg-white flex flex-col shadow" >
     <img src={imgBg} alt="Cover image" className="h-52 object-cover sm:max-h-[16rem]" />
        {!imageEdit ? (<div className="absolute flex space-x-2 top-3 right-3">         
            <button
               className="ml-auto flex items-center px-1.5 gap-x-1 py-0.5 rounded-md border border-gray-500 text-white bg-slate-800"
               onClick={() =>  setImageEdit(true)}
            >
               <span className="text-gray-100 text-md">Edit</span>
               <span className=""><AiFillEdit className='text-gray-200 text-base'/> </span>
            </button>
         </div>):(
         <div className="absolute bg-[#0000005c] items-center justify-center h-full w-full flex top-0 left-0">         
            <form className='w-full ' action={editImage}>
            <div className="flex items-center justify-center w-full">
               <label htmlFor="image" className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed  cursor-pointer bg-gray-50  hover:bg-gray-100">
                  <div className="flex flex-col items-center justify-center pt-2 pb-3">
                  {imageSrc ? (
                  <Image className='rounded-md'
                        src={imageSrc}
                        height={200}
                        width={200}
                        alt="Product Image"
                  />
               ):(
                     <div className="flex flex-col items-center">
                     <svg width="70px" height="70px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                     <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Image</span> From System</p>
                     <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                     </div>
               )} 
                  </div>
                  {imageSrc  && <span className='text-gray-600 text-md'>Change Image</span>}
                  <input id="image"  type="file" name="image" className="opacity-0" onChange={handleImageChange} />
               </label>
               <div className="absolute bottom-2 right-2 flex gap-x-2">
               <button
                  onClick={ () => {setImageEdit(false)}}
               className='  text-gray-600 text-md border border-gray-300 font-medium bg-300 rounded px-2 py-1 capitalize'>cancel</button>
               <button className='  text-gray-100 text-md font-medium bg-gray-800 rounded px-2 py-1 capitalize'>save image</button>
               </div>
         </div>
      </form>
      </div>
                          )}
     <div className=" mx-auto flex w-full flex-col pb-3 items-center px-8 sm:w-full">
        <div className="rounded-full flex max-sm:flex-col w-full items-center ">
            <img src={imagePath2} alt="User avatar" className="-mt-16  ring-bg-card h-32 w-32 rounded-full border-4 border-white" />
              <div className="sm:mt-4  flex flex-col items-center mt-6 sm:pl-5">
                 <div className="text-base font-bold text-gray-800 leading-none">Brian Hughes</div>
                 <div className="text-md text-gray-600 mt-0.5 ">London, UK</div>
              </div>
              <div className="mx-8 hidden h-8 border-l-2 lg:flex"></div>
              <div className="sm:mt-2 mt-6 text-gray-700 flex items-center space-x-6">
                 <div className="flex flex-col text-base  items-center"><span className="font-bold">200k</span><span className="text-gray-600 text-sm ">FOLLOWERS</span></div>
                 <div className="flex flex-col  text-base  items-center"><span className="font-bold">1.2k</span><span className="text-gray-600 text-sm ">FOLLOWING</span></div>
              </div>
              <div className="mb-4 ml-auto mt-8 flex text-md text-gray-600 items-center space-x-6 ">
                <a className="font-medium" href="/pages/profile"> Home </a>
                <a className="text-secondary" href="/pages/profile"> About </a>
                <a className="text-secondary" href="/pages/profile"> Followers </a>
                <a className="text-secondary" href="/pages/profile"> Gallery </a>
              </div>
              
          </div>
      </div>
          
  </div>


</div>  
  )
};


export default ProfileHeader;
