'use client'
import { PostForFront } from "@/app/[locale]/admin/blogs/_utils/PostForfront";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ChangeEvent, useEffect, useState } from "react";
import Image from 'next/image'
import { CiImageOn } from "react-icons/ci";
import { AiFillEdit } from "react-icons/ai";
import { editWorkImage } from "@/app/[locale]/admin/works/_actions/Actions";
import { FcAnswers, FcEditImage, FcShop } from "react-icons/fc";
import EditBody from "./EditBody";

interface Props {
    post : PostForFront
}
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

const EditPost = ({post}:Props) => {
    const [imageEdit,setImageEdit] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false); 
    const [error, setError] = useState<string>(''); 
    const [imageSrc, setImageSrc] = useState<string>('');
    const [touched, setTouched] = useState<boolean>(false);
    const [contentEdit, setContentEdit] = useState<boolean>(false);
    const [postData, setPostData] = useState<PostForFront>(post); 
    
    
    
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault(); 
      const formData = new FormData(event.currentTarget);
    //   addBasic(formData);
    };
    
     useEffect(() => {
    if (window.twttr && window.twttr.widgets) {
      window.twttr.widgets.load();
    }
  }, [postData.contentAr]); 
    
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
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
               const data = await editWorkImage(Number(post.id),formData);
               // if(data) setWork(data);
               setError('');
               setImageEdit(false);
               setLoading(false);
           } catch (error:any) {
             setLoading(false);
               setError(error.message)
           }
       }

   const closeEdit = (flag:boolean)=> {
      setContentEdit(flag);
   }
  
  return (
    <>
    {postData ? 
    <div className="p-1">
              <div className='bg-white p-2 rounded-md border border-gray-300 w-full'>
                              <div className="w-full relative grid grid-cols-1 sm:grid-cols-3 ">
          
                                <div className="p2  relative rounded-md border border-gray-300">
                                     {postData.image ? (
                                                  <Image
                                                    src={postData.image}
                                                    height={1000}
                                                    width={1000}
                                                    alt={postData.title}
                                                    className="w-full max-w-full rounded"
                                                  />
                                                )
                                      :(
                                        <div className="h-full w-full flex items-center justify-center border border-gray-300">
                                          <CiImageOn className="text-[3rem] text-gray-500"  />
                                        </div>
                                       )
                                       }

                                      {!imageEdit ? (<div className="absolute flex space-x-2 top-3 ltr:right-3 rtl:left-3">         
                                        <button
                                          className="ml-auto flex items-center px-1.5 gap-x-1 py-0.5 rounded-md border border-gray-500 text-white bg-slate-800"
                                          onClick={() =>  setImageEdit(true)}
                                        >
                                          <span className="text-gray-100 text-sm">Edit</span>
                                          <span className=""><AiFillEdit className='text-gray-200 text-base'/> </span>
                                        </button>
                                    </div>):(
                                    <div className="absolute bg-[#0000005c] items-center justify-center h-full w-full flex top-0 ltr:left-0 rtl:right-0">         
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
                                              <input id="image"  type="file" name="image" className="opacity-0" onChange={handleFileChange} />
                                          </label>
                                          <div className="absolute bottom-2 ltr:right-2 rtl:left-2 flex gap-x-2">
                                          <button
                                            onClick={ () => {setImageEdit(false)}}
                                           className='  text-gray-600 text-md border border-gray-300 font-medium bg-300 rounded px-2 py-1 capitalize'>cancel</button>
                                          <button className='  text-gray-100 text-md font-medium bg-gray-800 rounded px-2 py-1 capitalize'>save image</button>
                                          </div>
                                    </div>
                                  </form>
                                  </div>
                                    )}
                                </div>
                                
                                <div className="col-span-2 relative sm:col-start-2 ltr:pl-5 rtl:pr-5  ">
                                   <div className="p-2 border-b flex items-center border-b-gray-200 pb-2">
                                     <span className="text-gray-800 font-medium">
                                       Edit Basic Data
                                     </span>
                                     <div className="ml-auto flex gap-x-2">
                                     </div>
                                    
                                   </div>
                                   <div className="flex flex-wrap">
                                     <form onSubmit={handleSubmit} className="sm:flex-100 px-2 pt-1.5  rounded-md justify-center">
                                          <div className="p-1.5 capitalize text-md flex items-center rounded-md">
                                           <div className="flex-20 flex items-center border py-2.5 rounded-md ltr:pl-1 rtl:pr-1">
                                             <span className='w-6 h-6 ltr:mr-2 rtl:ml-2 items-center  justify-center rounded-md  inline-flex' ><FcEditImage className='text-3xl '/></span>
                                             <span className='text-gray-700 text-sm font-medium ltr:mr-1 rtl:ml-1'>Title </span> 
                                             <span className='text-gray-500 text-bxs mx-1 ltr:ml-auto rtl:mr-auto'>|</span> 
                                           </div>
                                           <div className="flex flex-80 ltr:pl-4 rtl:pr-4 items-center">
                                            <input type="text" 
                                            name='title'
                                            onFocus={() => setTouched(true)}
                                            className='border border-gray-100 w-full py-2.5 px-2 rounded-md outline-none bg-gray-50'
                                            value={postData.title  ?? ''}
                                            onChange={(e) => { setPostData({ ...postData, title: e.target.value }); setTouched(true)}}
                                            />
                                           </div>
                                         </div>

                                         <div className="p-1.5 capitalize text-md flex items-center rounded-md">
                                           <div className="flex-20 flex items-center border py-2.5 rounded-md ltr:pl-1 rtl:pr-1">
                                             <span className='w-6 h-6 ltr:mr-2 rtl:ml-2 items-center  justify-center rounded-md  inline-flex' ><FcEditImage className='text-3xl '/></span>
                                             <span className='text-gray-700 text-sm font-medium ltr:mr-1 rtl:ml-1'>TitleAr </span> 
                                             <span className='text-gray-500 text-bxs mx-1 ltr:ml-auto rtl:mr-auto'>|</span> 
                                           </div>
                                           <div className="flex flex-80 ltr:pl-4 rtl:pr-4 items-center">
                                            <input type="text" 
                                            name='title'
                                            onFocus={() => setTouched(true)}
                                            className='border border-gray-100 w-full py-2.5 px-2 rounded-md outline-none bg-gray-50'
                                            value={postData.titleAr  ?? ''}
                                            onChange={(e) => { setPostData({ ...postData, titleAr: e.target.value }); setTouched(true)}}
                                            />
                                           </div>
                                         </div>

                                        <div className="p-1.5 capitalize text-md flex items-center rounded-md">
                                            <div className="flex-20 flex items-center border py-2.5 rounded-md ltr:pl-1 rtl:pr-1">
                                            <span className='w-6 h-6 ltr:mr-2 rtl:ml-2 items-center  justify-center rounded-md  inline-flex' ><FcAnswers className='text-3xl '/></span>
                                            <span className='text-gray-800 font-medium ltr:mr-1 rtl:ml-1'>Published </span> 
                                            <span className='text-gray-600 text-bxs mx-1 ltr:ml-auto rtl:mr-auto'>|</span> 
                                            </div>
                                            <div className="flex flex-80 gap-x-3 ltr:pl-4 rtl:pr-4 items-center">
                                            
                                                <div className="flex items-center bg-gray-50 px-2 border border-gray-200 rounded-md dark:border-gray-700">
                                                    <input id="published-1"
                                                    onChange={()=> setTouched(true)}
                                                    type="radio" value="yes" name="published" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="published-1" className="w-full py-1.5 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Yes</label>
                                                </div>
                                                <div className="flex items-center bg-gray-50 px-2 border border-gray-200 rounded-md dark:border-gray-700">
                                                    <input 
                                                    onChange={()=> setTouched(true)}
                                                    id="published-2" type="radio" value="no" name="published" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="published-2" className="w-full py-1.5 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">No</label>
                                                </div>
                                                <div className="p-1"><span className="text-gray-400 ltr:pl-3 rtl:pr-3">{postData.published ? 'Yes' : 'No'}</span></div>
            
                                            </div>
                                        </div>
                                         
                                         <button
                                         type='submit'
                                          className={`ltr:ml-auto rtl:mr-auto flex items-center absolute ltr:right-2 rtl:left-2 bottom-0 px-1.5 py-0.5 rounded-md ${touched === true ? 'bg-gray-800' : 'bg-gray-500'}`}
                                          disabled={touched === false}
                                        >
                                          <span className="text-gray-100 text-sm">Save</span>
                                        </button>
          
                                       </form>
                                     
                                    </div>
                                 </div>
                                 
          
                                
                              </div>
                              
                              </div>
                              <div className="bg-white border border-gray-300 rounded-md w-full px-3 pt-2 mt-3">
                                  <div className="py-3 px-2 border-b border-blue-200">
                                    <p className="text-base font-semibold">
                                      Post Title 
                                    </p>
                                  </div>
                                  <div className="p-2 mt-3 ">
                                   {post.contentAr && <div dangerouslySetInnerHTML={{ __html: post.contentAr }} /> }
                                  </div>
                                  <button
                                  onClick={()=> {setContentEdit(true)}}
                                  className="rounded-md my-6 bg-green-600 py-1.5 px-2 border border-white text-white font-medium"
                                  >
                                    Edit Content

                                  </button>
                                  {contentEdit && postData.contentAr && <EditBody initialContent={postData.contentAr} slug={postData.slug} closeEdit={closeEdit} />}
                              </div>
    </div> 
    :
      <span className="p-2">no data</span>
    }
    </>
   
  );
};

export default EditPost;
