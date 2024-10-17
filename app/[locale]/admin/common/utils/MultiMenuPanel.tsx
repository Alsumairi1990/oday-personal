"use client";
import React from 'react';
import { useState } from 'react';

interface FormEditProps {
    menuElements: string[],
    setSelect : (value:string) => void,
    unSelect : (value:string) => void
  
}

const MultiMenuPanel = ({ menuElements,setSelect,unSelect}: FormEditProps) => {
  const [loading, setLoading] = useState<boolean>(false); 
  const [error, setError] = useState<string>(''); 
  const [selectedMenuElements, setSelectedMenuElements] = useState<string[]>([]);
  const addSelectedService = (name: string) => {
    setSelect(name);
}
  const unSelectedService = (name: string) => {
    unSelect(name);
}
  return (
    <div className="py-1 px-2 absolute top-2 w-full z-50 border mb-5 shadow-md bg-white border-gray-200 animate-modalEnter rounded-md">

        <div className="grid sm:grid-cols max-sm:gap-4  max-sm:gap-y-8 sm:gap-x-2 sm:max-h-72 mt-2 overflow-y-auto">
        {menuElements && menuElements.length > 0 ? (
            menuElements
            .map((element, index) => (
                <div className=" relative border flex  flex-wrap my-2 py-2 w-11.8/12 mx-auto items-center bg-gray-100/70 border-gray-200 rounded-md max-sm:pb-3 ">
                
                <div className=" flex-100 sm:flex-70  sm:flex sm:mx-auto items-center  border-r border-r-gray-300 rounded-l-md">
                    <div className="pl-4  w-full">
                    <div className="w-full flex items-center">
                        <span className="text-md  text-gray-800  font-medium capitalize">
                        {element}
                        </span>
                    </div>
                    </div>
                </div>
                <div className="flex flex-100 gap-x-2 sm:flex-20  justify-center items-center  ">
                    <div className="inline-flex  z-20 bg-white  justify-center rounded-md">
                    <label
                        className="relative bg-whit justify-center flex items-center  rounded-full cursor-pointer"
                        htmlFor="checkbox"
                    >
                        <input
                        type="checkbox"
                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                        id={String(element)}
                        name="degree"
                        onChange={(e) => {
                            const isChecked = e.target.checked;
                            if (isChecked) {
                            addSelectedService(
                                String(element)
                            );
                            } else {
                            unSelectedService(
                                String(element)
                            );
                            }
                        }}
                        />
                        <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-3.5 w-3.5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="1"
                        >
                            <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                            ></path>
                        </svg>
                        </span>
                    </label>
                    </div>
                </div>
                </div>
            ))
        ) : (
            <div className=" relative h-16  w-11.8/12 mx-auto items-center bg-white border border-gray-300 rounded-md flex justify-center">
            <p className="text-gray-700 text-md">No Data</p>
            </div>
        )}
        </div>
</div>
  );
};

export default MultiMenuPanel;
