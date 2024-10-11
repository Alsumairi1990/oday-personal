'use client'
import React, { useEffect, useState } from 'react'
import { GoPlus } from 'react-icons/go';
import { getProductWithModels } from '../_actions/Actions';
import ProductTable from '../_utils/ProductTable';
import { ProductWithModels } from '../_utils/ProductWithModels';
import PaginationArea from '../_utils/PaginationArea';

interface Props{
    products:ProductWithModels[],
    getSelected :(value: string) => void
    unSelected :(value: string) => void

}

function productsDisplay({products,getSelected,unSelected}:Props) {
    const [loading, setLoading] = useState<boolean>(false); 
    const [error, setError] = useState<string>(); 
    // const [products, setProductss] = useState<ProductWithModels[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('');

  const unSelected1 = (id:string) => {
    }
    const getSelected2 = (id:string) => {
    }
   const [currentPage, setCurrentPage] = useState(1);
   const [postsPerPage, setPostsPerPage] = useState(5);
   const lastPostIndex = currentPage * postsPerPage;
   const firstPostIndex = lastPostIndex - postsPerPage;
   const currentPosts = products.slice(firstPostIndex, lastPostIndex);
  return (
    <>
     <div className="mb-10  bg-white rounded-md">
       <div className="border-b flex items-center px-3 p-4 border-b-gray-200 my-2 w-full ">
          <div className="bg-gra-100 flex-40 border border-gray-200 rounded-3xl py-1.5 w-full h-10 ">
                <input
                type="text"
                placeholder="Search categories"
                value={searchTerm}
                className='w-full h-full bg-transparent px-3 placeholder:text-sm outline-none'
                onChange={(e) => setSearchTerm(e.target.value)}
                  />   
            </div>
            <div className="flex-60">
                <div 
                    style={{boxShadow:'0 .125rem .375rem 0 rgba(115, 103, 240, .3)'}}
                    className="px-2 ml-auto w-fit flex items-center py-1.5 text-white bg-indigo-500 rounded">
                    <span className="text-md capitalize">Create products</span>
                    <span><GoPlus className='text-base text-white ml-1'/></span>
                </div>
            </div>
        </div>
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                    <thead className="text-xs text-gray-700  uppercase bg-gray-100 ">
                        <tr className="w-full flex">
                            <th scope="col" className="text-center  flex-5 py-3">
                                 
                            </th>
                              <th scope="col" className="text-center  flex-5 py-3">
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
                            <th scope="col" className="text-center  flex-10 py-3">
                                 icon
                            </th>
                            <th scope="col" className="text-center flex-15 py-3">
                                name
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                progress
                            </th>
                            <th scope="col" className="text-center flex-15 py-3">
                                Created
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                Phases
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                Tasks
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                            priority
                            </th>
                            <th scope="col" className="text-center flex-10 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                    <ProductTable productss={currentPosts} searchParam={searchTerm} unSelected={unSelected1} getSelected={getSelected2} />
                    </tbody>
                </table>
               
                <PaginationArea
                    totalPosts={products.length}
                    postsPerPage={postsPerPage}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    />
                {/* <div className="my-3">
                    <DropDown1  />
                   </div> */}
      </div>

    </>
  )
}

export default productsDisplay