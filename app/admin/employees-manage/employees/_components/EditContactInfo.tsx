"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { Tool } from '@prisma/client';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';
import { IoMdCloseCircle } from "react-icons/io";
import { BiSolidCommentEdit } from "react-icons/bi";
import Image from 'next/image';
import { EmployeeWithModels } from '../_utils/EmployeeWithModels';
import { BasicInfoSchema } from '../_utils/BasicInfoScheam';
import { EditProfilBasicInfo, getUsersWithModels } from '../_actions/Actions';
import { LuAlertOctagon } from 'react-icons/lu';
import { ContactInfoSchema } from '../_utils/ContactInfoSchema';


interface FormEditProps {
    employee: EmployeeWithModels;
  
}

const EditContactInfo = ({ employee}: FormEditProps) => {
  const [employeeData, setEmployeeData] = useState<EmployeeWithModels>(); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string>(''); 
  const [dateOfBirth, setDateOfBirth] = useState('');


const rows = 5;
const cols = 5;
  type inputType = z.infer<typeof ContactInfoSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(ContactInfoSchema),
  });

  const saveUser: SubmitHandler<inputType> = async (data) => {
    alert("called");
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key as keyof inputType].toString());
    }
   
    const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
    fileInputs.forEach((fileInput) => {
      if (fileInput.files?.length) {
        formData.append(fileInput.name, fileInput.files[0]);
      } 
    });

    try {
      if (employee?.id !== undefined) {
        setLoading(true);
        const result = await EditProfilBasicInfo(employee.id,formData);
        setEmployeeData(result);
        setError('');
        // await editBasicInfo(formData, employee?.id);
      }              
    } catch (error:any) {
      setLoading(false);
      setError(error.messagge);
    } finally{
      setLoading(false);
    }
  };

  const getEmployee = async () => {
    try {
      setLoading(true);
      const tagName = await getUsersWithModels(employee.id);
      setEmployeeData(tagName);
      setError('');
    } catch (error:any) {
      setLoading(false);
      setError(error.message);
    }finally{
      setLoading(false);
    }
    
  };

  useEffect(() => {
    getEmployee();
    if(employee.employeeProfile.dateOfBirth){
      const formattedDate = new Date(employee.employeeProfile.dateOfBirth).toISOString().split('T')[0];
      setDateOfBirth(formattedDate);
    }
  }, []);

  return (
    <div className="flex h-fit relative flex-col gap-y-6 w-full ">
    {loading && <div className=' w-full h-full mt-6 z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
    <div className="bg-white flex flex-col  p-6 border border-gray-300 shadow-md rounded-lg "> 
        <span className="text-xl  font-semibold text-gray-600">Contact Info </span>
         <div className="mt-3 text-md text-gray-700">
            <p className="text-md leading-6">
                {employeeData?.employeeProfile?.bio}
            </p>
         </div>
         <hr className="my-6 w-full border-t ng-tns-c2638821912-6 ng-star-inserted" />
         <div className="flex flex-col text-gray-800 text-md">
               {error && <div className="py-3 my-1 w-full flex items-center">
                 <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
                 <span className="text-red-400 text-md">{error}</span>
                </div>
                }
         <form onSubmit={handleSubmit(saveUser)} >
               <div className=" sm:flex-48 flex flex-col z-0 w-full mb-2 ">
                        <label htmlFor="category_name" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Country</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-10 p-1 flex justify-center">
                            <svg className="fill-gray-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                            </svg>
                            </span>
                             <div className="relative flex-90 flex w-full ">
                             <input {...register('country')} 
                             defaultValue={employeeData?.employeeProfile?.country?.toString()}
                             type="text" name="country" id="country" className="block pl-2 h-9 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Select Country ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.country?.message} </span>
                </div>

                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-2 ">
                        <label htmlFor="category_name" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">City</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-10 p-1 flex justify-center">
                              <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                                    <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
                                    <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
                                </svg>
                            </span>
                             <div className="relative flex-90 flex w-full ">
                             <input {...register('city')} 
                             defaultValue={employeeData?.employeeProfile?.country?.toString()}
                             type="text" name="city" id="city" className="block pl-2 h-9 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Select City ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.city?.message} </span>
                </div>


                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-2 ">
                        <label htmlFor="category_name" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Address</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                          
                             <div className="relative flex w-full ">
                             <textarea {...register('address')}  rows={rows} cols={cols} 
                             name="address" id="address" className="block  pl-2 pt-3 px-0 z-0 w-full text-sm text-gray-900 bg-transparent  rounded-x appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Employee Bio..." required >
                          {employeeData && employeeData.employeeProfile?.address}
                          </textarea>
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.city?.message} </span>
                </div>

            </form>
         </div>
         <a className="mt-2.5 px-6 text-center py-2 rounded-3xl bg-[#4f46e5] text-white mat-primary " href="/pages/profile">
         
         <span className="text-md"> Save Changes </span>
         </a>
      </div>
  </div>
  );
};

export default EditContactInfo;