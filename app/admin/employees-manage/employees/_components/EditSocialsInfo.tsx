"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { EmployeeWithModels } from '../_utils/EmployeeWithModels';
import { LuAlertOctagon } from 'react-icons/lu';
import { IoAddSharp, IoLogoSnapchat, IoLogoYoutube } from 'react-icons/io5';
import { SocialsSchema } from '../_utils/SocialsSchema';
import { FaGithub, FaInstagramSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquarePinterest } from 'react-icons/fa6';
import { SiTiktok } from "react-icons/si";
import { EditProfilBasicInfo, getUsersWithModels } from '../_actions/Actions';
import { BsFacebook, BsReddit } from 'react-icons/bs';



interface FormEditProps {
    employee: EmployeeWithModels;
}

const EditSocialsInfo = ({ employee}: FormEditProps) => {
  const [employeeData, setEmployeeData] = useState<EmployeeWithModels>(); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string>(''); 
  const [dateOfBirth, setDateOfBirth] = useState('');


const rows = 5;
const cols = 5;
  type inputType = z.infer<typeof SocialsSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(SocialsSchema),
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
    <div className="flex h-fit relative flex-col gap-y-6 w-full ">
    {loading && <div className=' w-full h-full mt-3 z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
    <div className="bg-white flex flex-col  p-6 border border-gray-300 shadow-md rounded-lg "> 
        <span className="text-xl  font-semibold text-gray-600">Social Networls Info</span>
         <div className="mt-3 text-md text-gray-700">
            <p className="text-md leading-6 line-clamp-4">
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
           <form className='flex flex-wrap gap-x-3 justify-between' onSubmit={handleSubmit(saveUser)} >
               <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 ">
                        <label htmlFor="facebook" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">facebook</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-7 px-1 flex justify-center">
                           <BsFacebook className="text-xl text-gray-600"  />
                            </span>
                             <div className="relative flex-93 flex w-full ">
                             <input {...register('facebook')} 
                             defaultValue={employeeData?.employeeProfile?.socialNetwork?.facebook?.toString()}
                             type="text" name="facebook" id="facebook" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="www.facebook.com/user ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.facebook?.message} </span>
                </div>
                <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 ">
                        <label htmlFor="linkedin" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Linkedin</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-7 px-1 flex justify-center">
                            <FaLinkedin className = "text-xl text-gray-600" />
                            </span>
                             <div className="relative flex-93 flex w-full ">
                             <input {...register('linkedin')} 
                             defaultValue={employeeData?.employeeProfile?.socialNetwork?.linkedin?.toString()}
                             type="text" name="linkedin" id="linkedin" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="https://www.linkedin.com/user ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.linkedin?.message} </span>
                </div>
                <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 ">
                        <label htmlFor="github" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">github</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-7 px-1 flex justify-center">
                            <FaGithub className = "text-xl text-gray-600" />
                            </span>
                             <div className="relative flex-93 flex w-full ">
                             <input {...register('github')} 
                             defaultValue={employeeData?.employeeProfile?.socialNetwork?.github?.toString()}
                             type="text" name="github" id="github" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="https://www.github.com/user ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.github?.message} </span>
                </div>

                <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 ">
                        <label htmlFor="youtube" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">youtube</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-7 px-1 flex justify-center">
                            <IoLogoYoutube className = "text-xl text-gray-600" />
                            </span>
                             <div className="relative flex-93 flex w-full ">
                             <input {...register('youtube')} 
                             defaultValue={employeeData?.employeeProfile?.socialNetwork?.youtube?.toString()}
                             type="text" name="youtube" id="youtube" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="https://www.youtube.com/user ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.youtube?.message} </span>
                </div>

                <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 ">
                        <label htmlFor="website" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Website</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-7 px-1 flex justify-center">
                           <svg width="25px" height="25px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#444" fill="none"><path d="M39.93,55.72A24.86,24.86,0,1,1,56.86,32.15a37.24,37.24,0,0,1-.73,6"/><path d="M37.86,51.1A47,47,0,0,1,32,56.7"/><path d="M32,7A34.14,34.14,0,0,1,43.57,30a34.07,34.07,0,0,1,.09,4.85"/><path d="M32,7A34.09,34.09,0,0,0,20.31,32.46c0,16.2,7.28,21,11.66,24.24"/><line x1="10.37" y1="19.9" x2="53.75" y2="19.9"/><line x1="32" y1="6.99" x2="32" y2="56.7"/><line x1="11.05" y1="45.48" x2="37.04" y2="45.48"/><line x1="7.14" y1="32.46" x2="56.86" y2="31.85"/><path d="M53.57,57,58,52.56l-8-8,4.55-2.91a.38.38,0,0,0-.12-.7L39.14,37.37a.39.39,0,0,0-.46.46L42,53.41a.39.39,0,0,0,.71.13L45.57,49Z"/></svg>                       
                            </span>     
                          <div className="relative flex-93 flex w-full ">
                             <input {...register('website')} 
                             defaultValue={employeeData?.employeeProfile?.socialNetwork?.website?.toString()}
                             type="text" name="website" id="website" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="https://www.webiste.com/user ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.website?.message} </span>
                </div>
                <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 ">
                        <label htmlFor="pinterest" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">pinterest</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-7 px-1 flex justify-center">
                            <FaSquarePinterest className = "text-xl text-gray-600" />
                            </span>
                             <div className="relative flex-93 flex w-full ">
                             <input {...register('pinterest')} 
                             defaultValue={employeeData?.employeeProfile?.socialNetwork?.pinterest?.toString()}
                             type="text" name="pinterest" id="pinterest" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="https://www.pinterest.com/user ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.pinterest?.message} </span>
                </div>

                <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 ">
                        <label htmlFor="instagram" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">instagram</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-7 px-1 flex justify-center">
                            <FaInstagramSquare className = "text-xl text-gray-600" />
                            </span>
                             <div className="relative flex-93 flex w-full ">
                             <input {...register('instagram')} 
                             defaultValue={employeeData?.employeeProfile?.socialNetwork?.instgram?.toString()}
                             type="text" name="instagram" id="instagram" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="https://www.pinterest.com/user ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.instagram?.message} </span>
                </div>


                <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 ">
                        <label htmlFor="reddit" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">reddit</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-7 px-1 flex justify-center">
                            <BsReddit className = "text-xl text-gray-600" />
                            </span>
                             <div className="relative flex-93 flex w-full ">
                             <input {...register('reddit')} 
                             defaultValue={employeeData?.employeeProfile?.socialNetwork?.reddit?.toString()}
                             type="text" name="reddit" id="reddit" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="https://www.pinterest.com/user ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.reddit?.message} </span>
                </div>
                
                <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 ">
                        <label htmlFor="tikTok" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">TikTok</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-7 px-1 flex justify-center">
                            <SiTiktok className = "text-xl text-gray-600" />
                            </span>
                             <div className="relative flex-93 flex w-full ">
                             <input {...register('tikTok')} 
                             defaultValue={employeeData?.employeeProfile?.socialNetwork?.tikTok?.toString()}
                             type="text" name="tikTok" id="tikTok" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="https://www.pinterest.com/user ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.tikTok?.message} </span>
                </div>

                <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 ">
                        <label htmlFor="snapchat" className="font-medium mb-1 pl-0.5 text-sm text-gray-500 duration-300 capitalize">snapchat</label>
                        <div className="flex items-center w-full bg-gray-100 border  border-gray-200 rounded-md">
                           <span className="flex-7 px-1 flex justify-center">
                            <IoLogoSnapchat className = "text-xl text-gray-600" />
                            </span>
                             <div className="relative flex-93 flex w-full ">
                             <input {...register('snapchat')} 
                             defaultValue={employeeData?.employeeProfile?.socialNetwork?.snapchat?.toString()}
                             type="text" name="snapchat" id="snapchat" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border-l border-l-gray-200 bg-transparent rounded-r-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="https://www.pinterest.com/user ...." required />
                           </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.snapchat?.message} </span>
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
            </form>
         </div>
        
      </div>
  </div>
  );
};

export default EditSocialsInfo;