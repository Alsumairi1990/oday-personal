import React, { useEffect, useState } from 'react'
import { editProjectDetails, getProjectById,  } from '../_actions/Actions';
import { Project } from '@prisma/client';
import { DetailsSchema } from '../_utils/Details.Schema';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Decimal from 'decimal.js';
import { MdOutlineAddCircle } from 'react-icons/md';
import MenuPanel from '../../common/utils/MenuPanel';

interface Props {
    id : string,
}
function EditProjectDetails({id}:Props) {
  const [project, setProject] = useState<Project>(); 
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string>(''); 
  const [touched, setTouched] = useState<boolean>(false);
  const [menuElements, setMenuElements] = useState<string[]>([ 'PLANNED',
    'IN_PROGRESS',
    'COMPLETED',
    'ON_HOLD',
    'CANCELLED']); 
  const [menuShow, setMenuShow] = useState<boolean>(false); 
  const [selectedMenuElement, setSelectedMenuElement] = useState<string>();



  const [startData, setStartData] = useState('');

  type inputType = z.infer<typeof DetailsSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(DetailsSchema),
  });


  const setSelect = (value:string) => {
    setSelectedMenuElement(value);
    
  }
  const unSelect = (value:string) => {
    setSelectedMenuElement('')
 
}

  const saveDetails: SubmitHandler<inputType> = async (data) => {
    alert("called");
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key as keyof inputType]!.toString());
    }
    const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
    fileInputs.forEach((fileInput) => {
      if (fileInput.files?.length) {
        formData.append(fileInput.name, fileInput.files[0]);
      } 
    });

    try {
      if (project?.id !== undefined) {
        setLoading(true);
        const result = await editProjectDetails(formData,id);
        if (result) setProject(result);
        setError('');
      }              
    } catch (error:any) {
      setLoading(false);
      setError(error.messagge);
    } finally{
      setLoading(false);
    }
  };
  

  const getProjectData = async () => {
        try {
          setLoading(true)
          const data = await getProjectById(id);
          setProject(data);
          setLoading(false)
      } catch (error:any) {
        setLoading(false);
        setError(error.message)
      }
    }
  useEffect(() =>{
    getProjectData();
    if(project?.startDate && project.startDate){
      const formattedDate = new Date(project.startDate).toISOString().split('T')[0];
      setStartData(formattedDate);
    }
  },[])
  return (
    <>
     <div className="flex border-t border-t-gray-200 pt-4">
         {project && 
            <form onSubmit={handleSubmit(saveDetails)} className="w-full flex flex-wrap justify-between px-2 pt-1.5  rounded-md ">

                <div className="sm:flex-30 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="startDate" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">Date Of Birth</label>
                        {project ? ( <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('startDate')} 
                            defaultValue={startData}
                            type="date" name="startDate" id="startDate" className="block px-2 h-10 z-0 w-full text-sm text-gray-500 border border-gray-300 bg-gray-50 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Last Name ...." required />
                            </div>
                        </div> ):
                        (
                          <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('startDate')} 
                                  type="date" name="startDate"   
                             id="startDate" className="block h-10 px-2 z-0 w-full text-sm text-gray-500 border border-gray-300 bg-gray-50 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Last Name ...." required />
                             </div>
                        </div>
                        )
                        }
                        <span className="text-red-400 text-xs mt-2">{errors.startDate?.message} </span>
                       </div>
                       <div className=" sm:flex-30  flex  flex-col z-10 w-full mb-5 ">
                        <label htmlFor="degree" className="font-medium mb-1.5 pl-0.5 text-sm text-gray-700 duration-300 capitalize">Project Status</label>
                        <div className="flex flex-col  w-full ">
                          <button
                            type="button"
                            onClick={() => {
                              setMenuShow((prevState) => {
                                if (prevState == false) {
                                  setSelectedMenuElement('');
                                }
                                return !prevState;
                              });
                            }}
                            className="flex w-full bg-gray-50   items-center border gap-x-3 h-10 border-gray-200  px-2 rounded-2xl"
                          >
                            {/* <GrSelect className="text-base text-gray-600" /> */}
                            {selectedMenuElement != '' ? (
                              <span className="text-md inline-flex text-gray-600 font-medium">
                              
                                    <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{selectedMenuElement}</span>
                                
                              </span>
                            ) : (
                                <>
                              <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                                {project.status && project.status?.length >0 ?  <span className="px-1 capitalize text-sm">{project.status}</span>
                                : project.status &&  <span className="px-1 capitalize text-sm">-</span>
                              }
                              </div>
                              </>
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
                          <span className="text-red-400 text-xs mt-2">{errors.status?.message} </span>
                    </div>
                       
                    <div className=" sm:flex-30 flex flex-col z-0 w-full mb-5 ">
                        <label htmlFor="budget" className="font-medium mb-2 pl-0.5 text-sm text-gray-500 duration-300 capitalize">budget</label>
                        <div className="flex items-center w-full ">
                            <div className="relative flex w-full ">
                            <input {...register('budget')} 
                            defaultValue={project.budget?.toString()}
                            type="number" name="budget" id="budget" 
                            className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border border-gray-300 bg-gray-50 rounded-xl  appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" 
                            onChange={(e) => { setProject({ ...project, budget: new Decimal(e.target.value) }); setTouched(true)}} placeholder="Given Name ...." required />
                            </div>
                        </div> 
                        <span className="text-red-400 text-xs mt-2">{errors.budget?.message} </span>
                     </div>
                     <div className="flex-100 ">
                        <button
                          type='submit'
                          className={`ml-auto px-2 flex  items-center py-1 rounded-md ${touched === true ? 'bg-gray-800' : 'bg-gray-500'}`}
                          disabled={touched === false}
                        >
                          <span className="text-gray-100 text-sm">Save</span>
                        </button>
                      </div>                    
                    </form>
                  }
              
              </div>
    </>
  )
}

export default EditProjectDetails