"use client";
import React, { ChangeEvent, useEffect, useRef } from 'react';
import { useState } from 'react';
import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LuAlertOctagon } from "react-icons/lu";
import { MdAssignmentAdd, MdDone, MdOutlineAddCircle} from "react-icons/md";
import { Package, PackageFeature } from '@prisma/client';
import { getMenuParent } from '../../setting/left-nav/_actions/Action';
import { PackageFeatureSchema } from '../_utils/PackageFeatureSchema';
import MenuPanel from '../../common/utils/MenuPanel';
import { addPackageFeature, getPackages } from '../_actions/Actions';

interface Props {
    id? : number
    closeModel : (value:boolean) => void
}
type inputType = z.infer<typeof PackageFeatureSchema>;
const CreateFeature = ({id,closeModel}:Props) => {
    const [results, setResults ]= useState<PackageFeature[]>([]); 
    const [result, setResult ]= useState<number>(0); 

    const [elements, setElements ]= useState<string[]>([]); 
    const [iconSrc, setIconSrc] = useState<string | null>(null);
   const [loading, setLoading] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   const [selectedLocation, setSelectedLocation] = useState<string[]>([]);
   const [locationShow, setLocationShow] = useState<boolean>(false); 
   const [packages,setPackages] = useState<Package[]>([])
   const [baseUrl,setBaseUrl] = useState<string>('');
   const [packageName,setPackageName] = useState<string>('');

   const [removedTool, setRemovedTool] = useState<string>('');
   const messageRef = useRef<HTMLDivElement>(null);
   

   const [showRemoveTool, setShowRemoveTool] = useState<boolean>(false);
   const rows = 5;
   const cols = 30;
     const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<inputType>({
    resolver: zodResolver(PackageFeatureSchema),
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setIconSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const closePanel = (flag:boolean) => {
    closeModel(false);
  }



    const saveMenu3: SubmitHandler<inputType> = async (data)=>{
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
        setLoading(true);
        
        const result =  await addPackageFeature(formData,packageName);
        setResult(result);
        setLoading(false);
        setError('');
        reset();
        messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (error:any) {
        setLoading(false);
        setError(error.message)
        setResult(0);
        messageRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

      }
    }
    const setMeueElements = async ()=>{
      try {
        setLoading(true);
        const elementsData = await getPackages();
        const elements = elementsData.map(element => element.name);
        setElements(elements);
        // const countriesArr = elements.map(element => element.nameAr ?? '');
        {elementsData && setPackages(elementsData)};
        setLoading(false);
        setError('')
      } catch (error:any) {
        setLoading(false);
        setError(error.messages);
      }
    }
    const getMenuInner = async ()=>{
      try {
        if(id) {
          setLoading(true)
           const element =  await getMenuParent();
          //  setElements(element)
           setError('')
        }
      } catch (error:any) {
        setLoading(false);
        setError(error.message);
      } finally{
        setLoading(false)
      }
    }
      useEffect(() => {
        getMenuInner();
        setMeueElements();
      }, []);
     const selectPackage =(value:string)=>{
      setPackageName(value)
     }
     const deSelectPackage =(value:string)=>{
      setPackageName('')
     }
  return (
   <div className="w-full h-full bg-[#0003]  m-auto fixed left-0 top-0 flex items-center justify-center sm:p-4 pb-0 z-50 ">
         <div   className="flex flex-col w-full  sm:w-5/12 animate-modalEnter relative max-sm:h-full add-menu  bg-white items-center rounded-md  border border-gray-300 " style={{boxShadow: 'rgb(82 63 104 / 12%) 0px 0px 10px 0px'}}>
        {loading && <div className=' w-full h-full z-50 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
          <div className="px-2 py-2.5 w-full flex items-center rounded-t-md bg-gray-100  border-b border-b-gray-300">
            <div className="flex items-center">
            <span className=""><MdAssignmentAdd className='text-cyan-600 text-2xl mr-2' /> </span>
            <span className="text-base text-gray-700">
              Adding Parent </span> |   {id}
            </div>
            <div className="ml-auto">
                <button type="button" onClick={() => closeModel(false)}  className="text-gray-800 close-icon bg-gray-200 hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-6 h-6 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" >
                    <svg className="w-2.5 h-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span className="sr-only">Close modal</span>
                </button>
            </div>
          </div>
          <div className=" flex flex-wrap justify-between px-5 max-h-[100vh] sm:max-h-[80vh] relative overflow-y-auto scr-container pt-6 ">
       
          <div className='px-4' ref={messageRef}>
            {error && 
            <div className="border-red-600 mt-4 flex w-full rounded-lg border-l-[6px] bg-red-200/30 px-7 py-4  sm:py-6">
                <div className="bg-red-700 mr-5 flex h-8 w-9 items-center justify-center rounded-md">
                      <LuAlertOctagon  className='text-xl rounded-full border border-gray-50 p-0.5 text-white'  />
                </div>
                <div className="w-full">
                    <h5 className="mb-2 text-base font-semibold text-[#004434]">
                      Error While Creating 
                    </h5>
                    <p className="text-gray-600 text-sm font-medium leading-relaxed">
                      Error Alert : {error}
                    </p>
                </div>
            </div>
            }
             {result !== 0 &&
              <div className="border-green-600 mt-4 flex w-full rounded-lg border-l-[6px] bg-green-200/30 px-7 py-4  sm:py-6">
                  <div className="bg-green-700 mr-5 flex h-8 w-9 items-center justify-center rounded-md">
                        <MdDone  className='text-xl rounded-full border border-gray-50 p-0.5 text-white'  />
                  </div>
                  <div className="w-full">
                      <h5 className="mb-2 text-base font-semibold text-[#004434]">
                        Recorde Created Successfully
                      </h5>
                      <p className="text-gray-600 text-sm font-medium leading-relaxed">
                        Data has been added with  id : ( {result} )
                      </p>
                  </div>
              </div>
              }
          </div>

      

    frfr{result}
       
     <form onSubmit={handleSubmit(saveMenu3)} className="text-start  z-40 rounded-md">
        <div className="flex flex-wrap justify-between ">
        <div className=" flex-100  flex  flex-col z-20 w-full mb-5 ">
                    <label htmlFor="degree" className="font-medium mb-1.5 pl-0.5 text-sm text-gray-700 duration-300 capitalize">Location </label>
                    <div className="flex flex-col  w-full ">
                <button
                  type="button"
                  onClick={() => {
                    setLocationShow((prevState) => {
                      if (prevState == false) {
                        setSelectedLocation([]);
                      }
                      return !prevState;
                    });
                  }}
                  className="flex w-full bg-gray-50   items-center border gap-x-3 h-10 border-gray-200  px-2 rounded-2xl"
                >
                  {selectedLocation.length > 0 ? (
                    selectedLocation.map((element)=>(
                      <span className="text-md inline-flex text-gray-600 font-medium">
                          <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{element}</span>
                    </span>
                    ))
                  ) : (
                    <div className="text-md inline-flex text-gray-500 font-medium capitalize">
                      <span className="px-1 capitalize text-sm">Category</span>
                    </div>
                  )}
                  <span className="ml-auto">
                    <MdOutlineAddCircle className="text-2xl border-2 border-violet-800 rounded-full text-violet-800" />
                  </span>
                </button> 
                  {locationShow &&
                  <div className="relative z-50 font-arabic">
                    <MenuPanel menuElements={elements} setSelect={selectPackage} unSelect={deSelectPackage} />
                  </div>
                      }
                </div> 
        </div>
        <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="name" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> name </label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('name')}  type="text" name="name" id="name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="name ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.name?.message} </span>
            </div>
            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="nameAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> name arabic</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('nameAr')}  type="text" name="nameAr" id="nameAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="name Arabic...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.nameAr?.message} </span>
            </div>
            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="value" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> value </label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('value')}  type="text" name="value" id="value" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="value ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.value?.message} </span>
            </div>
            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="valueAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 capitalize"> value arabic</label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <input {...register('valueAr')}  type="text" name="valueAr" id="valueAr" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 border rounded-xl border-gray-300 appearance-none  bg-gray-50 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="value Arabic...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.valueAr?.message} </span>
            </div>

            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="description" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">description </label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <textarea {...register('description')} cols={cols} rows={rows}   name="description" id="description" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="description  ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
            </div>

            <div className=" flex sm:flex-48 flex-col z-0 w-full mb-5 group">
                    <label htmlFor="descriptionAr" className="font-medium mb-1.5 text-sm  text-gray-700 duration-300 ">Description Arabic </label>
                    <div className="flex items-center w-full">
                        <div className="relative flex w-full">
                        <textarea {...register('descriptionAr')} cols={cols} rows={rows}   name="descriptionAr" id="descriptionAr" className="block bg-gray-50 pl-2 pt-2 px-0 z-0 w-full text-sm text-gray-900  border rounded-xl border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="description arabic ...." required />
                        </div>
                    </div> 
                    <span className="text-red-400 text-xs mt-2">{errors.descriptionAr?.message} </span>
            </div>

            <div className="flex sm:flex-100 mb-6 justify-between">
                <div className=" flex-100 ">
                    <h3 className="mb-0.5 text-md font-medium text-gray-600 ">Show Status ? </h3>
                    <ul className="grid w-full gap-6 md:grid-cols-2 bord ">
                        <li>
                            <input type="radio" 
                            {...register('included')} 
                            id="heroActive-1" defaultChecked name="isActive" value="yes" className="hidden peer" required />
                            <label htmlFor="heroActive-1" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-orange-400 peer-checked:bg-gray-50 peer-checked:text-orange-600 hover:text-gray-600 hover:bg-gray-100 " >                           
                                <div className="block">
                                    <div className="w-full text-sm font-medium">Included</div>
                                </div>
                                <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </label>
                        </li>
                        <li>
                            <input type="radio" 
                            {...register('included')}
                            id="heroActive-2" name="isActive" value="no" className="hidden peer" />
                            <label htmlFor="heroActive-2" className="inline-flex items-center justify-between w-full p-2 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer   peer-checked:border-orange-600 peer-checked:text-orange-400 peer-checked:bg-gray-50 hover:text-gray-600 hover:bg-gray-100 " >
                                <div className="block">
                                    <div className="w-full text-sm font-medium">Not included</div>
                                </div>
                                <svg className="w-4 h-4 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                </svg>
                            </label>
                        </li>
                    </ul>
                    <span className="text-red-400 text-xs mt-2">{errors.included?.message} </span>
                    </div>
                </div>

        </div>
          <div className="mt-4 flex w-full sticky bottom-0 pr-3 z-40 left-0 bg-white border-t border-t-gray-300 py-1.5 ">
                <input type="submit" className="btn px-3 ml-auto py-0.5  bg-indigo-600  hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded " value="Register" />
            </div>
    </form>
    </div>
    </div>
   </div>
  );
};
export default CreateFeature;