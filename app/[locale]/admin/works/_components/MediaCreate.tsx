"use client";
import React, { ChangeEvent, useEffect } from 'react';
import { useState } from 'react';
import { Category} from '@prisma/client';
import { LuAlertOctagon } from "react-icons/lu";
import { addMed, getWorkImagesById} from '../_actions/Actions';
import Image from 'next/image';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { MdOutlinePermMedia } from "react-icons/md";
import { toast } from 'react-toastify';
interface Props {
    workId : number,
  }
const MediaCreate = ({workId}:Props) => {
  const [categoryName , setCategoryName ] = useState<string>('');
  const [images , setImages ] = useState<string[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [baseUrl, setBaseUrl] = useState<string>('');
    const [imageSrc, setImageSrc] = useState<string[] | null>([]);

    const [error, setError] = useState<string | null>(null);
    // <img className='w-9 h-9  border border-gray-300 justify-center rounded-md '  src={`${baseUrl}/${location?.image}`} alt="" />

  useEffect(() => {
    const { protocol, host } = window.location;
    setBaseUrl(`${protocol}//${host}`);
    getWorkImages();
}, []);
  const getWorkImages = async ()=> {
    try {
        setLoading(true);
        const urls = await getWorkImagesById(workId);
        setLoading(false);
        setImages(urls);
        setError(null); 
        
    } catch (error:any) {
        setError(error.message || 'An unexpected error occurred');
        setLoading(false);
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const previewUrls: string[] = [];
      fileArray.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          previewUrls.push(reader.result as string);
          if (previewUrls.length === fileArray.length) {
            setImageSrc(previewUrls);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  }
  const addMed1 = async (e:FormData)=>{
    try {
      setLoading(true);
   const success = await addMed(e,workId);
    setLoading(false);
    // if(success){setImages(success);}
    toast.success("successfily added "+success);
    setImages([]);
    setError('');
      
    } catch (error:any) {
      setError(error.message);
    }
    
  }
  
  return (
    <div className="w-full sm:w-full max-sm:border relative max-sm:border-gray-300 mx-auto p-6 pb-1 bg-white  rounded-md">
    {loading && <div className=' w-full h-full z-50 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
    <div className="text-start z-40  ">
       <div className=" mb-6 border border-gray-200 rounded-md">
            <div className="px-2 flex gap-2 items-center py-1.5 ">
                <span className="">
                <MdOutlinePermMedia  className='text-xl text-green-600 size-6  rounded-xl'  />
                </span>
                <span className="text-gray-600 font-medium text-base">Work Media Center </span>
            </div>
            <div className="flex relative justify-center">
              <span className="absolute -bottom-6 ">
                <MdKeyboardDoubleArrowDown className='text-base text-gray-500' />
              </span>
            </div>
          
        </div>
      {error && <div className="py-3 my-1 flex items-center">
        <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
        <span className="text-red-400 text-md">{error}</span>
        </div>
      }
       
      
      
     
 
       <div className="grid grid-cols-1">
       <form  action={addMed1}  className="text-start z-40  ">

            <div className=" mb-4 justify-center bofrder border-gray-200 w-full">
               <div className="p-2">
                        <label htmlFor="image" className="flex flex-col items-center justify-center w-full  border border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50  hover:bg-gray-100">
                            <div className="flex flex-col items-center justify-center pt-2 pb-3">
                              <div className="flex flex-col  items-center">
                                  <svg width="70px" height="70px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M768 810.7c-23.6 0-42.7-19.1-42.7-42.7s19.1-42.7 42.7-42.7c94.1 0 170.7-76.6 170.7-170.7 0-89.6-70.1-164.3-159.5-170.1L754 383l-10.7-22.7c-42.2-89.3-133-147-231.3-147s-189.1 57.7-231.3 147L270 383l-25.1 1.6c-89.5 5.8-159.5 80.5-159.5 170.1 0 94.1 76.6 170.7 170.7 170.7 23.6 0 42.7 19.1 42.7 42.7s-19.1 42.7-42.7 42.7c-141.2 0-256-114.8-256-256 0-126.1 92.5-232.5 214.7-252.4C274.8 195.7 388.9 128 512 128s237.2 67.7 297.3 174.2C931.5 322.1 1024 428.6 1024 554.7c0 141.1-114.8 256-256 256z" fill="#3688FF" /><path d="M640 789.3c-10.9 0-21.8-4.2-30.2-12.5L512 679l-97.8 97.8c-16.6 16.7-43.7 16.7-60.3 0-16.7-16.7-16.7-43.7 0-60.3l128-128c16.6-16.7 43.7-16.7 60.3 0l128 128c16.7 16.7 16.7 43.7 0 60.3-8.4 8.4-19.3 12.5-30.2 12.5z" fill="#5F6379" /><path d="M512 960c-23.6 0-42.7-19.1-42.7-42.7V618.7c0-23.6 19.1-42.7 42.7-42.7s42.7 19.1 42.7 42.7v298.7c0 23.5-19.1 42.6-42.7 42.6z" fill="#5F6379" /></svg>
                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Upload Image</span> From System</p>
                              </div>
                              <input id="image"   multiple  type="file" name="imageUrls" className="opacity-0" onChange={handleFileChange} />
                            </div>
                        </label>
                            {imageSrc && imageSrc?.length>0 &&(
                              <div  className="flex flex-col w-full mx-auto p-2 rounded-md border border-gray-200 bg-wghite mt-2 border- border-t-gray-200 ">
                               
                                <div className="flex flex-wrap p-2 gap-3 justify-center mb-2 ">
                                 {imageSrc.map( (img ) => (
                                 <Image className='rounded-md border border-gray-300 p-1'
                                  src={img}
                                  height={90}
                                  width={90}
                                  alt="Product Image"
                                    />
                                  ))}
                                </div>
                                 <div className="p-2 w-8/12 mx-auto flex justify-center border-t border-t-gray-200 ">
                                  <span className="text-gray-600 text-sm">Uploaded Images </span> <span className="text-sm mx-2 text-gray-500">|</span> <span className="text-orange-500 text-sm">Added to Work</span>
                                  </div>
                            </div>
                         )} 
                          {images && images?.length>0 &&(
                              <div  className="flex flex-col w-full mx-auto p-2 rounded-md border border-gray-200 bg-wghite mt-2 border- border-t-gray-200 ">
                               
                                <div className="flex flex-wrap p-2 gap-3 justify-center mb-2 ">
                                 {images.map( (img ) => (
                                 <Image className='rounded-md border border-gray-300 p-1'
                                  src={`${baseUrl}/${img}`}
                                  height={90}
                                  width={90}
                                  alt="Product Image"
                                    />
                                  ))}
                                </div>
                                <div className="p-2 w-8/12 mx-auto flex justify-center border-t border-t-gray-200 ">
                                  <span className="text-gray-600 text-sm">Uploaded Images </span> <span className="text-sm mx-2 text-gray-500">|</span> <span className="text-orange-500 text-sm">Added to Work</span>
                                  </div>
                            </div>
                         )} 
              </div>
            </div> 
               <div className="mb-4">
                <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Add Image-(s) To Work" />
            </div>
         </form>     

       </div>
      
       
   </div>
   
  </div>
  );
};

export default MediaCreate;



