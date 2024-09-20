import { Category, ServiceCode, Tag, Tool } from '@prisma/client';
import React, { useEffect } from 'react';
import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import FormEdit from '../_components/FormEdit';
import DeleteTag from '../_components/DeleteTag';
interface Props{
    codes:ServiceCode[],
    getSelected :(value: string) => void
    unSelected :(value: string) => void

}


const TableTag = ({codes,getSelected,unSelected}:Props) => {
    const [baseUrl, setBaseUrl] = useState<string>('');
    let [selectedValues, setSelectedValues] = useState<string[]>([]);
    const [catName, setCatName] = useState<string>('');
    const [editShow, setEditShow] = useState<boolean>(false);
    const [trigger, setTrigger] = useState(0);
    const [showDelete ,setShowDelete] =useState<boolean>(false);
    const closeModel = (showModel:boolean)=>{
    setEditShow(showModel);
    }
  const closeDelet = (flag:boolean) => {
    setShowDelete(flag);
    setSelectedValues([]);
  }

const addSelected= (selected:string)=>{
        setSelectedValues(prevValues => {
            const newValues = [...prevValues, selected];
            setTrigger(trigger + 1);
            setShowDelete(true);
            return newValues;
                }
            );         
       }
    useEffect(() => {
        const { protocol, host } = window.location;
        setBaseUrl(`${protocol}//${host}`);
    }, []);
  
  return (
    <div>
    {codes.map((option:any) => (
    <tr className="bg-white font-medium capitalize flex items-center border-b dark:bg-gray-800 dark:border-gray-700">


    <td className="text-center flex-5  font-semibold py-4">
        <div className="inline-flex items-center">
            <label className="relative flex items-center  rounded-full cursor-pointer" htmlFor="checkbox">
                <input type="checkbox"
                    className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none rounded-md border !border-[#ccc] transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-indigo-600 checked:bg-indigo-600 checked:before:bg-indigo-600 hover:before:opacity-10"
                    id="checkbox"  
                    onChange={(e) => {
                        const isChecked = e.target.checked;
                        if (isChecked) {
                        //   sendSelected(option?.id);
                        getSelected(option.id);
                        } else {
                            setSelectedValues(selectedValues.filter(rowId => rowId !== option.id));
                            // getSelected(selectedValues);
                        unSelected(option?.id);
                        }
                    }}
                    />
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
    </td>
    <td className="flex-10 text-center flex justify-center py-4">
        {option?.image &&
    //   <Image className=''
    //                 src={`${baseUrl}/${option?.image}`}
    //                 height={80}
    //         width={80}
    //         alt="Product Image"
    //     />
        <img className='w-20 rounded-md' src={`${baseUrl}/${option?.image}`} alt="" />
        
}

    </td>
    <td className="flex-20 flex justify-center  text-gray-600 font-semibold py-4">
        {option.name}
    </td>
    <td className="flex-20  flex justify-center py-4">
        {option.id}
    </td>
    
    <td className="flex-30 flex justify-center  py-4">
            {option.description}
    </td>
    <td className="flex-15 flex  text-center py-4 justify-around">
    <button onClick={()=>{setEditShow(true); setCatName(option?.code)  }} className="inline-flex items-center justify-center bg-sky-100 border !border-sky-200 hover:!bg-sky-200 rounded-md py-1.5 flex-23">
        <svg className="w-4 h-4"  viewBox="0 0 24 24" fill="none">
        <path className="fill-sky-500" fill-rule="evenodd" clip-rule="evenodd" d="M19.2071 2.79312C17.9882 1.57417 16.0119 1.57417 14.7929 2.79312L5.68463 11.9014C5.30015 12.2859 5.0274 12.7676 4.89552 13.2951L4.02988 16.7577C3.94468 17.0985 4.04453 17.459 4.29291 17.7073C4.54129 17.9557 4.90178 18.0556 5.24256 17.9704L8.70513 17.1047C9.23263 16.9729 9.71437 16.7001 10.0988 16.3156L19.2071 7.20733C20.4261 5.98838 20.4261 4.01207 19.2071 2.79312ZM16.2071 4.20733C16.645 3.76943 17.355 3.76943 17.7929 4.20733C18.2308 4.64524 18.2308 5.35522 17.7929 5.79312L8.68463 14.9014C8.55647 15.0296 8.39589 15.1205 8.22006 15.1644L6.37439 15.6259L6.83581 13.7802C6.87976 13.6044 6.97068 13.4438 7.09884 13.3156L16.2071 4.20733Z"/>
        <path className="fill-sky-500"   d="M5 20C4.44772 20 4 20.4477 4 21C4 21.5523 4.44772 22 5 22H19C19.5523 22 20 21.5523 20 21C20 20.4477 19.5523 20 19 20H5Z" fill="#777"/>
        </svg>
    </button>
    <Link href={`/admin/tag/show/${option.id}`} className="inline-flex items-center justify-center bg-blue-100 border !border-blue-200 hover:!bg-blue-200 rounded-md flex-23">
        <svg className="w-4 h-4 fill-blue-500"  viewBox="0 0 48 48" >
        <path d="M0 0h48v48H0z" fill="none"/>
        <g id="Shopicon">
            <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,14c7.072,0,12.741,6.584,15.201,9.992
                C36.728,27.396,31.024,34,24,34c-7.072,0-12.741-6.584-15.201-9.992C11.272,20.604,16.976,14,24,14z"/>
            <path d="M24,32c4.418,0,8-3.582,8-8s-3.582-8-8-8s-8,3.582-8,8S19.582,32,24,32z M24,20c2.206,0,4,1.794,4,4c0,2.206-1.794,4-4,4
                s-4-1.794-4-4C20,21.794,21.794,20,24,20z"/>
        </g>
        </svg>
    </Link>
    <button 
            type='button'
            onClick={()=>{addSelected(option.id)}}
            className="inline-flex items-center justify-center bg-red-100 border !border-red-200 hover:!bg-red-200 rounded-md flex-23">
            
            <svg className="w-4 h-4 p-0.5 fill-red-500"  viewBox="0 0 32 32" >
                <g fill="none" fill-rule="evenodd">
                <path d="m0 0h32v32h-32z"/>
                <path className="fill-red-500" d="m31 6c.5522847 0 1 .44771525 1 1s-.4477153 1-1 1l-3-.001v18.001c0 3.3137085-2.6862915 6-6 6h-12c-3.3137085 0-6-2.6862915-6-6v-18h-3c-.55228475 0-1-.44771525-1-1s.44771525-1 1-1zm-18 8c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm6 0c-.5522847 0-1 .4477153-1 1v7c0 .5522847.4477153 1 1 1s1-.4477153 1-1v-7c0-.5522847-.4477153-1-1-1zm4.5-13c.8284271 0 1.5.67157288 1.5 1.5s-.6715729 1.5-1.5 1.5h-15c-.82842712 0-1.5-.67157288-1.5-1.5s.67157288-1.5 1.5-1.5z" />
                </g>
                </svg>
    </button>
    </td>
</tr>
))
}
{editShow && <FormEdit name={catName} closeModel={closeModel}  /> }
{showDelete && <DeleteTag ids={selectedValues} closeModel={closeDelet}  /> }


</div>  
  )
};


export default TableTag; 