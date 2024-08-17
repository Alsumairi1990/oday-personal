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
import { EducationSchema } from '../_utils/EducationSchema';
import MenuPanel from '@/app/admin/common/utils/MenuPanel';
import { MdOutlineAddCircle } from 'react-icons/md';


interface FormEditProps {
    employee: EmployeeWithModels;
  
}

const EditEducationInfo = ({ employee}: FormEditProps) => {
  const [employeeData, setEmployeeData] = useState<EmployeeWithModels>(); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [menuShow, setMenuShow] = useState<boolean>(false); 
  const [error, setError] = useState<string>(''); 
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedMenuElements, setSelectedMenuElements] = useState<string[]>([]);
  const [menuElements, setMenuElements] = useState<string[]>(['menu1', 'menu2']); 




const rows = 5;
const cols = 5;
  type inputType = z.infer<typeof EducationSchema>;

//   const addSelectedService = (name: string) => {
//     setSelectedMenuElements(prevValues => {
//       const newValues = [...prevValues, name];
//       // setTrigger(trigger + 1);
//       return newValues;
//   });
// }
 
//   const unSelectedService = (name: string) => {
//     setSelectedMenuElements(prevValues => {
//       const newValues = prevValues.filter(item => item !== name);
//       // setTrigger(trigger + 1); 
//       return newValues;
//   });
// }
const setSelect = (value:string) => {
  setSelectedMenuElements(prevValues => {
    const newValues = [...prevValues, value];
    return newValues;
});
  
}
const unSelect = (value:string) => {
  setSelectedMenuElements(prevValues => {
    const newValues = prevValues.filter(item => item !== value);
    return newValues;
});
}

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(EducationSchema),
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
            {loading && <div className=' w-full h-full mt-3 z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
           {employeeData && <form onSubmit={handleSubmit(saveUser)} className=' bg-white border border-gray-300 rounded-md shadow-xl w-full' >
                <div className="flex w-full pb-2 pt-2  pl-2 border-b border-b-gray-200">
                 <span className="text-lg  font-semibold text-gray-600">Education Information </span> 
               </div>
               <div className="p-5 w-full flex flex-wrap justify-between gap-x-5">
               {error && <div className="py-3 my-1 w-full flex items-center">
                <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
                <span className="text-red-400 text-md">{error}</span>
                </div>
                }
                <div className=" sm:flex-48  flex  flex-col z-10 w-full mb-5 ">
                        <label htmlFor="degree" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Degree</label>
                        <div className="flex flex-col  w-full ">
                        <button
                      type="button"
                      onClick={() => {
                        setMenuShow((prevState) => {
                          if (prevState == false) {
                            setSelectedMenuElements([]);
                          }
                          return !prevState;
                        });
                      }}
                      className="flex w-full bg-gray-100   items-center border gap-x-3 py-2 border-gray-300  px-2 rounded-2xl"
                    >
                      {/* <GrSelect className="text-base text-gray-600" /> */}
                      {selectedMenuElements.length>0 ? (
                        <span className="text-md inline-flex text-gray-600 font-medium">
                         {selectedMenuElements.map(element => (
                              <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{element}</span>
                          ))}
                        </span>
                      ) : (
                        <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                          <span className="px-1 capitalize text-sm">last Degree</span>
                        </div>
                      )}
                      <span className="ml-auto">
                        <MdOutlineAddCircle className="text-2xl border-2 border-violet-800 rounded-full text-violet-800" />
                      </span>
                    </button> 
                      {menuShow &&
                      <div className="relative z-50">
                        <MenuPanel menuElements={menuElements} setSelect={setSelect} unSelect={unSelect} />
                      </div>
                          }
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.degree?.message} </span>
                </div>



                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="institution" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Institution</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('institution')} 
                            defaultValue={employeeData?.employeeProfile?.institution ?? ''}
                            type="text" name="institution" id="institution" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Name ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.institution?.message} </span>
                </div>

                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="yearOfPassing" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Year Of Passing</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('yearOfPassing')} 
                            defaultValue={employeeData?.employeeProfile?.yearOfPassing ?? 0}
                            type="text" name="yearOfPassing" id="yearOfPassing" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Last Name ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.yearOfPassing?.message} </span>
                </div>

                <div className=" sm:flex-48 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="specialization" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">specialization</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('specialization')} 
                            defaultValue={employeeData?.employeeProfile?.specialization?.toString() }
                            type="text" name="specialization" id="specialization" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-200 bg-gray-100 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Engineering ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.specialization?.message} </span>
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

export default EditEducationInfo;