"use client";
import React, { useEffect } from 'react';
import { useState } from 'react';
import { getToolsByNames } from '../_actions/Actions';
import HashLoader from "react-spinners/HashLoader";
import FormEdit from './FormEdit';





const EditTool = () => {
    const [tools, setTools] = useState<string[]>([])
    const [selectedTag, setSelectedTag] = useState<string>('');
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [showEdit, setShowEdit] = useState(false);
    const [loading, setLoading] = useState<boolean>(true);
    const handleRadioChange = (tagName: string) => {
    setSelectedTag(tagName);
  };

  const closeModel = (edit:boolean) => {
    setShowEdit(edit);
  }
  const editCat = (tag:any)=>{
    setShowEdit(true);
    setSelectedTag(tag);
  }

  useEffect(() => {
    const getTags = async () => {
      try {
        setLoading(true);
        const toolsData = await getToolsByNames();
        setTools(toolsData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };
    getTags();
  }, []);
    
  if (loading) {
    return (<div className="h-40 w-11.8/12 flex justify-center pt-8 bg-white border border-gray-300 rounded-md">
      <HashLoader />
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
                
               {tools.length > 0 ? (
                tools.filter((element) =>
                    element.toLowerCase().includes(searchTerm.toLowerCase())
                )
                .map((tagName, index) => (
                    <div key={index} className="inline-flex items-center mb-2 px-2 border-b border-b-gray-200 py-2">
                            <div className="relative flex items-start w-full">
                        <div className="flex items-center h-5">
                            <input 
                            id={`tag-${index}`}
                            type="radio"
                            name="category"
                            value={tagName}
                            checked={tagName === selectedTag}
                            onChange={() => handleRadioChange(tagName)}
                            className="border-gray-200 rounded-full checked:bg-green-600 disabled:opacity-50  " />
                        
                        </div>
                        <label htmlFor={`category-${index}`} className="ms-3 block w-full text-sm text-gray-600 dark:text-neutral-500">
                            {tagName}
                        </label>
                        </div>
                        <button className='px-2 mr-1.5 text-md text-gray-700 py-0.5 border border-gray-300 bg-gray-200 rounded-lg' type='button'
                                onClick={()=> editCat(tagName) } >
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
            {showEdit &&  <FormEdit name={selectedTag} closeModel={closeModel} /> }
        </div>
    </div>
   </div>
  );
};

export default EditTool;