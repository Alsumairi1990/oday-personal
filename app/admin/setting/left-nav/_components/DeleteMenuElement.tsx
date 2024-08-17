"use client";
import React from 'react';
import { GrCheckmark } from "react-icons/gr";
import { useState } from 'react';
import Link from 'next/link';
import { LuAlertOctagon } from "react-icons/lu";
import { IoCloseCircleSharp } from "react-icons/io5";
import { deleteMenuElement } from '../_actions/Action';
import { MenuWithModels } from '../_utils/MenuWithModels';



interface Props {
    ids: string[];
    closeModel:(value : boolean) => void
  }
const DeleteMenuElement = ({ids,closeModel}:Props) => {
    const [result, setResult] = useState<MenuWithModels[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

  const deleteRows = async () => {
    try {
        setLoading(true);
        const results = await deleteMenuElement(ids);
         setResult(results);
         setLoading(false);
    } catch (error:any) {
        setLoading(false);
        setError(error.message);
    }
       
  }
  return (
   <div className="fixed bg-[#0000003f] h-full flex items-center justify-center w-full left-0 top-0 m-auto z-50 p-6">
     
      {ids && result.length == 0 &&

           <div className=" w-full sm:mx-auto relative bg-white sm:w-5/12 shadow-2xl mb-4 rounded-md">
                {loading && <div className=' w-full h-full z-40 bg-[#00000012] absolute top-0 left-0  flex items-center justify-center' style={{backdropFilter: 'blur(2px)'}}><div className='loader-2 w-4'></div></div>}
               
            <div className="flex items-center bg-indigo-500 py-2.5 px-2 rounded-t-md">
                <span className=''><GrCheckmark className='text-xl mr-2 text-white'  /></span>
                <span className="text-base text-white">
                Menu Delete
                </span>
            </div>
            {error && <div className="py-3 my-1 flex items-center">
                <LuAlertOctagon className='text-gray-500 mr-2 text-xl' />
                <span className="text-red-400 text-md">{error}</span>
                </div>
            }
             <div className="p-2 flex justify-center py-4">
                <span className="text-gray-700 text-md font-semibold capitalize">
                    you are going to delete {ids.length} rows
                </span>
             </div>

           
             <div className="flex justify-center  border-t pt-3 border-t-gray-200 my-4">
                <button onClick={deleteRows} className='flex-30 flex justify-center'>
                    <span className="text-white px-4 text-center flex bg-red-600 rounded-md py-1.5 font-semibold text-sm">Delete Rows</span>
                </button>
                <button 
                onClick={()=> closeModel(false)}
                className="flex-15 flex justify-center">
                    <span className="text-white px-4 text-center flex bg-slate-500 rounded-md py-1.5 font-semibold text-sm">Cancel</span>
                </button>

             </div>
            
           </div> 
           
        }
        {result.length != 0 && 
                <div className=" w-full sm:mx-auto bg-white sm:w-5/12 shadow-2xl mb-4 rounded-md">
                <div className="flex items-center bg-green-500 py-2.5 px-2 rounded-t-md">
                    <span className=''><GrCheckmark className='text-xl mr-2 text-white'  /></span>
                    <span className="text-base text-white">
                    Services Deleted 
                    </span>
                    <button 
                    onClick={()=> closeModel(false)}
                    className="flex ml-auto  mr-2">
                        <span className="text-white flex rounded-md">
                            <IoCloseCircleSharp  className='text-white text-xl' />
                            </span>
                    </button>
                </div>
               
                 <div className="p-2 flex justify-center py-4">
                    <span className="text-gray-700 text-md font-semibold capitalize">
                       {ids.length} rows - hase been deleted
                    </span>
                 </div>
                 <div className="py-3 border-t border-t-gray-200 flex justify-center">
                  <Link href="/admin/setting/left-nav/delete" className='text-sm bg-gray-300 px-1.5 py-.05 rounded-md'>
                    back 
                  </Link>
                 </div>
                 </div>     
                
        }
         
   </div>
  );
};

export default DeleteMenuElement;