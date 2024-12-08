import React, { useEffect, useState } from 'react'
import { AbstractIntlMessages } from 'next-intl';
import { Tool } from '@prisma/client';
interface Props {
    locale : string,
    messages : AbstractIntlMessages
    selectData: (newValue: Tool[]) => void


}
function SelectTechCategory({locale,messages,selectData}:Props) {
  
  const preview = (messages as any).HomePage.workPreview;
  const request = (messages as any).HomePage.request;
  const changeCategory = (value:string)=> {

  }
  return (
    <>
    <div className="px-2.5 py-2.5 flex gap-4 items-center justify-center rounded-2xl bg-white border border-gray-300">
        <button type='button'
         className="px-2 rounded-md py-1 bg-blue-600 text-white "
         onClick={()=> {changeCategory('front-end')}}
         >
          Front End
         </button>
         <button type='button'
         className="px-2 rounded-md py-1"
         onClick={()=> {changeCategory('front-end')}}
         >
          Back End
         </button>
        
         <button type='button'
         className="px-2 rounded-md py-1"
         onClick={()=> {changeCategory('front-end')}}
         >
          Graphic Design
         </button>
         <button type='button'
         className="px-2 rounded-md py-1"
         onClick={()=> {changeCategory('front-end')}}
         >
          Ecommerce 
         </button>
         <button type='button'
         className="px-2 rounded-md py-1"
         onClick={()=> {changeCategory('front-end')}}
         >
          Digital Marketing
         </button>
        </div>

     </>
  )
}

export default SelectTechCategory