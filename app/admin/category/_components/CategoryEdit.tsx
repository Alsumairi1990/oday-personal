"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaUserTie } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import validator from 'validator';
import { GrCheckmark } from "react-icons/gr";

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { error } from 'console';
import { passwordStrength } from 'check-password-strength';

import { registerUser } from '@/utils/authActions';
import { toast } from 'react-toastify';
import { Category, Service } from '@prisma/client';
import { addCategory, getCategoriesNames } from '../_actions/Actions';
import SuccessMessage from './SuccessMessage';
import { useFormStatus } from 'react-dom';
import FormEdit from './FormEdit';
import FormEdit1 from './FromEdit1';



type CategoryInput = Omit<Category, 'id' | 'slug' | 'userId' | 'image' | 'icon' | 'createdAt' | 'updatedAt'>;



const CategoryEdit = () => {
    
    
    const [categories, setCategories] = useState<string[]>([])
    const [selectedCategory, setSelectedCategory] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showEdit, setShowEdit] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);

   
 

  const handleRadioChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const closeModel = (edit:boolean) => {
    setShowEdit(edit);
  }
  const editCat = (categoryM:any)=>{
    setShowEdit(true);
    setSelectedCategory(categoryM);
    // EditFrom(categoryM);
    // console.log(categoryM)
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoading(true);
        const fetchedCategories = await getCategoriesNames();
        setCategories(fetchedCategories);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);
    
  if (loading) {
    return (<div className=" relative h-16  w-11.8/12 mx-auto items-center bg-white border border-gray-300 rounded-md flex justify-center">
    <div className="w-12 h-12 rounded-full animate-spin absolute border-4 border-dashed border-green-500 border-t-transparent">

  </div>
  </div>)
  }

    
    
  return (
   <div className="w-full sm:w-11.8/12 max-sm:border max-sm:border-gray-300  m-auto p-6 bg-white border border-gray-300 rounded-md">
     <div className="text-start z-40  ">
        <div className="grid grid-cols-1">
            <div className="border-b border-b-gray-200 w-full mb-2">
                <div className="bg-gray-100 border border-gray-200 rounded-3xl py-1.5 mb-2 w-full h-11 ">
                <input
                type="text"
                placeholder="Search categories"
                value={searchTerm}
                className='w-full h-full bg-transparent px-3 placeholder:text-md outline-none'
                onChange={(e) => setSearchTerm(e.target.value)}
                  />   
                </div>
            </div>
            
            <div className="flex flex-col max-h-72 overflow-y-auto">
                
               {categories.length > 0 ? (
                categories.filter((category) =>
                    category.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((categoryName, index) => (
                    <div key={index} className="inline-flex items-center mb-2 px-2 border-b border-b-gray-200 py-2">
                            <div className="relative flex items-start w-full">
                        <div className="flex items-center h-5">
                            <input 
                            id={`category-${index}`}
                            type="radio"
                            name="category"
                            value={categoryName}
                            checked={categoryName === selectedCategory}
                            onChange={() => handleRadioChange(categoryName)}
                            className="border-gray-200 rounded-full checked:bg-green-600 disabled:opacity-50  " />
                        
                        </div>
                        <label htmlFor={`category-${index}`} className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500">
                            {categoryName}
                        </label>
                        </div>
                        <button className='px-2 mr-1.5 text-md text-gray-700 py-0.5 border border-gray-300 bg-gray-200 rounded-lg' type='button'
                                onClick={()=> editCat(categoryName) } >
                            Edit 
                        </button>
                        
                       
                        </div>
                        
                ))
                ) : (
                  <div className=" relative h-16  w-11.8/12 mx-auto items-center bg-white border border-gray-300 rounded-md flex justify-center">
                    <p className="text-gray-700 text-md">No Data</p>
                  </div>
               
                )}
            </div>
            {showEdit &&  <FormEdit name={selectedCategory} closeModel={closeModel} /> }
        
           
        </div>
        
    </div>
    
   </div>
  );
};


function EditFrom(categoryName:any) {
    // const { pending } = useFormStatus()
    const [category, setCategory] = useState<CategoryInput | null>(null); 
type inputType = z.infer<typeof formSchema>;
    const formSchema = z.object({
        category_name : z.string().min(4, "Service Name Must be at least 4 chars")
                              .max(45, "Service Name Must less than 45 chars"),
    description : z.string().max(1000, "Service Title Must less than 1000 chars"),
    
    })
    const transformToCategoryInput = (data: inputType): CategoryInput => {
        return {
          name: data.category_name,
          description: data.description,
    
          // Include other fields here if needed, or set default values
        };
      };
    const {
        register,
        handleSubmit,
        reset,
        control,
        watch,
        formState: { errors },
      } = useForm<inputType>({
        resolver: zodResolver(formSchema),
      });
      const saveUser: SubmitHandler<inputType> = async (data)=>{
        const serviceData = data;
       
        const categoryData = transformToCategoryInput(data);
     
        try{
            // console.log(data);
           const categoryDa = await addCategory(categoryData);
           
           setCategory(categoryDa);
            
        }catch(error){
            toast.error("sothing went wrong");
        }
    }

    
    
    return (
        <div className="fixed bg-[#0000003b] h-full flex items-center justify-center w-full left-0 top-0 m-auto z-50 p-6">
            {/* <form onSubmit={handleSubmit(saveUser)} className='w-6/12 bg-white' >
                <div className=" flex flex-col z-0 w-full mb-5 group">
                            <label htmlFor="category_name" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Category Name</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('category_name')}  type="text" name="category_name" id="category_name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.category_name?.message} </span>
                    </div>

                    <div className=" flex flex-col z-0 w-full mb-5 group">
                            <label htmlFor="description" className="font-medium mb-3 text-sm  text-gray-500 dark:text-gray-400 duration-300 ">Categoty Description</label>
                            <div className="flex items-center w-full">
                                <div className="relative flex w-full">
                                <input {...register('description')}  type="text" name="description" id="description" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-xl border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder="Web Designing ..." required />
                                </div>
                            </div> 
                            <span className="text-red-400 text-xs mt-2">{errors.description?.message} </span>
                    </div>

                    <div className="mb-4">
                        <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
                    </div>

            </form> */}
     </div>
    )
  }
export default CategoryEdit;