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
import { IoAddSharp } from 'react-icons/io5';


interface FormEditProps {
    employee: EmployeeWithModels;
  
}

const EditEmploymentInfo = ({ employee}: FormEditProps) => {
  const [employeeData, setEmployeeData] = useState<EmployeeWithModels>(); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string>(''); 
  const [dateOfBirth, setDateOfBirth] = useState('');


const rows = 5;
const cols = 5;
  type inputType = z.infer<typeof BasicInfoSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(BasicInfoSchema),
  });

  const saveUser: SubmitHandler<inputType> = async (data) => {
    alert("called");
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key as keyof inputType].toString());
    }
    console.log("name at form"+data.first_name);
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
   <div className="flex items-center relative justify-center w-full ">
            {loading && <div className=' w-full h-full mt-6 z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
           {employeeData && <form onSubmit={handleSubmit(saveUser)} className=' bg-white border border-gray-300 rounded-md shadow-xl w-full' >
                <div className="flex w-full pb-2 pt-2  pl-2 border-b border-b-gray-200">
                 <span className="text-lg  font-semibold text-gray-600">Employment Information </span> 
               </div>
               <div className="p-5 w-full flex flex-wrap justify-between gap-x-5">
               {error && <div className="py-3 my-1 w-full flex items-center">
                <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
                <span className="text-red-400 text-md">{error}</span>
                </div>
                }
                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="category_name" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">First Name</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('first_name')} 
                            defaultValue={employeeData?.employeeProfile?.firstName}
                            type="text" name="first_name" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Given Name ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.first_name?.message} </span>
                </div>
                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="category_name" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Last Name</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('last_name')} 
                            defaultValue={employeeData?.employeeProfile?.lastName ?? ''}
                            type="text" name="last_name" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Last Name ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.last_name?.message} </span>
                </div>

             

                <div className="sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                  <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-white">Employee Sex</h3>
                  <ul className="grid w-full gap-6 md:grid-cols-2">
                      <li>
                          <input type="radio" {...register('sex')}  id="sex-1" 
                          defaultChecked={employeeData.employeeProfile?.sex === 'm'}  
                          name="sex" value="m" className="hidden peer" required />
                          <label htmlFor="sex-1" className="inline-flex items-center justify-between w-full p-2 py-[7px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-cheucked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700" >                           
                              <div className="block">
                                  <div className="w-full text-md font-medium">Male</div>
                              </div>
                              <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                          </label>
                      </li>
                      <li>
                          <input type="radio" {...register('sex')} id="sex-2" 
                          defaultChecked={employeeData.employeeProfile?.sex === 'f'} 
                          name="sex" value="f" className="hidden peer" />
                          <label htmlFor="sex-2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checkevd:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700" >
                              <div className="block">
                                  <div className="w-full text-md font-medium">Femele</div>
                              </div>
                              <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                          </label>
                      </li>
                  </ul>
                  <span className="text-red-400 text-xs mt-2">{errors.sex?.message} </span>
              </div>


              <div className="sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                  <h3 className="mb-2 text-sm font-medium text-gray-500 dark:text-white">Marital Status</h3>
                  <ul className="grid w-full gap-6 md:grid-cols-2">
                      <li>
                          <input type="radio" {...register('maritalStatus')}  id="maritalStatus1" 
                          // defaultChecked name="maritalStatus" 
                          defaultChecked={employeeData.employeeProfile?.maritalStatus === 'married'} 
                          value="married" className="hidden peer" required />
                          <label htmlFor="maritalStatus1" className="inline-flex items-center justify-between w-full p-2 py-[7px] text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300  peer-cheucked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700" >                           
                              <div className="block">
                                  <div className="w-full text-md font-medium">Married</div>
                              </div>
                              <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                          </label>
                      </li>
                      <li>
                          <input type="radio" {...register('maritalStatus')} id="maritalStatus2" 
                          defaultChecked={employeeData.employeeProfile?.maritalStatus === 'single'} 
                          name="maritalStatus" value="single" className="hidden peer" />
                          <label htmlFor="maritalStatus2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checkevd:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700" >
                              <div className="block">
                                  <div className="w-full text-md font-medium">Single</div>
                              </div>
                              <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                          </label>
                      </li>
                  </ul>
                  <span className="text-red-400 text-xs mt-2">{errors.maritalStatus?.message} </span>
              </div>

              <div className="sm:flex-100 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="dateOfBirth" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Date Of Birth</label>
                        {employeeData.employeeProfile ? ( <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('dateOfBirth')} 
                            defaultValue={dateOfBirth}
                            type="date" name="dateOfBirth" id="dateOfBirth" className="block px-2 h-10 z-0 w-full text-sm text-gray-500 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Last Name ...." required />
                            </div>
                        </div> ):
                        (
                          <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
    
                     {employeeData.employeeProfile && <input {...register('dateOfBirth')} 
                            type="date" name="dateOfBirth"
                            
                             id="dateOfBirth" className="block h-10 px-2 z-0 w-full text-sm text-gray-500 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Last Name ...." required />
                        }
                             </div>
                        </div>
                        )
                        }
                        <span className="text-red-400 text-xs mt-2">{errors.dateOfBirth?.message} </span>
                </div>

              <div className=" sm:flex-100 flex flex-col z-0 w-full mb-5 ">
                    <label htmlFor="category_name" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Bio</label>
                    <div className="flex items-center w-full ">
                        <div className="relative flex w-full ">
                        <textarea {...register('bio')}  rows={rows} cols={cols} 
                         name="bio" id="bio" className="block  pl-2 pt-3 px-0 z-0 w-full text-sm text-gray-900 bg-gray-50 border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Employee Bio..." required >
                          {employeeData.employeeProfile?.bio}
                          </textarea>
                       </div> 
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.bio?.message} </span>

              </div> 

                 
                
                  <div className="mb-4 flex flex-100 ">
                    <div className="flex ml-auto gap-x-2">
                    <button type='submit' 
                    className='py-1.5 px-2.5 shadow-sm font-medium text-md  bg-gray-100 hover:bg-slate-500 hover:text-gray-50 border border-gray-200 text-gray-700 rounded-lg '>
                        Cancel
                    </button>
                    <button type='submit' 
                    style={{boxShadow:'0 .125rem .375rem 0 rgba(115,103,240,.3)'}}
                    className='py-1.5 px-2.5 text-md  flex items-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md '>

                        Save Changes
                        <span className="">
                            <IoAddSharp className="text-white text-base ml-1"  />
                        </span>
                    </button>
                    </div>
                  
                    </div>
                  </div>
            </form> 
              }
   </div>
  );
};

export default EditEmploymentInfo;