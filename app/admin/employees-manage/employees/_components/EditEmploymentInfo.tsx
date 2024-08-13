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
import { EmploymentSchema } from '../_utils/EmploymentSchema';


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
  type inputType = z.infer<typeof EmploymentSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(EmploymentSchema),
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
    if(employee.employeeProfile && employee.employeeProfile.dateOfBirth){
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
                        <label htmlFor="category_name" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Job Title</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('jobTitle')} 
                            defaultValue={employeeData?.employeeProfile?.jobTitle?.toString()}
                            type="text" name="jobTitle" id="jobTitle" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Engineer, Designer ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.jobTitle?.message} </span>
                </div>
                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="category_name" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Employment Type</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('employmentType')} 
                            defaultValue={employeeData?.employeeProfile?.employmentType ?? ''}
                            type="text" name="employmentType" id="employmentType" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Permanent , Contract ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.employmentType?.message} </span>
                </div>

                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="category_name" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Years of Experience</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('yearsOfExperience')} 
                            defaultValue={employeeData?.employeeProfile?.yearsOfExperience ?? 0}
                            type="number" name="yearsOfExperience" id="yearsOfExperience" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="1,2,3,4 ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.yearsOfExperience?.message} </span>
                </div>

                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="category_name" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Reports To</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('reportsTo')} 
                            defaultValue={employeeData?.employeeProfile?.reportsTo ?? ''}
                            type="text" name="reportsTo" id="reportsTo" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Manager, Team Lader ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.employmentType?.message} </span>
                </div>

                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="category_name" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Salary</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('salary')} 
                            defaultValue={employeeData?.employeeProfile?.salary?.toString() ?? 0}
                            type="number" name="salary" id="employmentType" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="1,2,3,4 ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.salary?.message} </span>
                </div>

            

              <div className="sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="dateOfJoining" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Date Of Joining</label>
                        {employeeData.employeeProfile ? ( <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('dateOfJoining')} 
                            defaultValue={dateOfBirth}
                            type="date" name="dateOfJoining" id="dateOfJoining" className="block px-2 h-10 z-0 w-full text-sm text-gray-500 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer"  required />
                            </div>
                        </div> ):
                        (
                          <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
    
                     {employeeData.employeeProfile && <input {...register('dateOfJoining')} 
                            type="date" name="dateOfJoining"
                            
                             id="dateOfJoining" className="block h-10 px-2 z-0 w-full text-sm text-gray-500 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" required />
                        }
                             </div>
                        </div>
                        )
                        }
                        <span className="text-red-400 text-xs mt-2">{errors.dateOfJoining?.message} </span>
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