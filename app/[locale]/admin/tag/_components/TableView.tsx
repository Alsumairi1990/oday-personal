import { Tag } from '@prisma/client';
import React, { useEffect } from 'react';
import TableTag from '../utils/TableTag';
interface Props{
    tags:Tag[],
    getSelected :(value: string) => void
    unSelected :(value: string) => void

}
const TableView = ({tags,getSelected,unSelected}:Props) => {
    
const unSelected1 = (id:string) => {
    unSelected(id);
}

const getSelected2 = (id:string) => {
    getSelected(id);
}

    useEffect(() => {
        const { protocol, host } = window.location;
       
    }, []);
  
  return (
    <div>
      <table className="w-full text-sm text-left border !border-gray-100 rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700  uppercase bg-gray-50 ">
                        <tr className="w-full flex">
                              <th scope="col" className="text-center flex justify-center  flex-5 py-3">
                                      <div className="inline-flex items-center">
                                    <label className="relative flex items-center  rounded-full cursor-pointer" htmlFor="checkbox">
                                        <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                                        id="checkbox"  />
                                        <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                        </svg>
                                        </span>
                                    </label>
                                </div>
                            </th>
                            <th scope="col" className="flex justify-center flex-10 py-3">
                                 image
                            </th>
                            <th scope="col" className="flex justify-center  flex-20 py-3">
                                name
                            </th>
                            <th scope="col" className="flex justify-center  flex-20 py-3">
                                Slug
                            </th>
                            <th scope="col" className="flex justify-center  flex-30 py-3">
                                Description
                            </th>
  
                            <th scope="col" className="flex justify-center  flex-10 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className=''>
                     {tags && tags?.length > 0 && 
                       
                        <TableTag tags={tags} unSelected={unSelected1} getSelected={getSelected2} />
                        }
                    </tbody>
                </table>

</div>  
  )
};


export default TableView; 