'use client'
import React, { useState } from 'react'
import { MdOutlineAddCircle, MdOutlineArrowDropDown } from 'react-icons/md';
import MenuPanel from '../[locale]/admin/common/utils/MenuPanel';
import { useTranslations } from 'next-intl';
interface Props {
    elements : string[],
    title : string
}
function GetMenuPanel({elements,title}:Props) {
    const [paymentMenu, setPaymentMenu] = useState<boolean>(false); 
    const [selectedElement, setSelectedElement] = useState<string>('');
    const t = useTranslations('HomePage'); // Specify the namespace or root key
    const paymentSelect = (value:string) => {
        setSelectedElement(value)
      }
      const unPaymentSelect = (value:string) => {
        setSelectedElement('')
      }

  return (
    <div className=" sm:flex-100  flex  flex-col z-10 w-full ">
    {/* <label htmlFor="degree" className="font-medium mb-1.5 pl-0.5 text-sm text-gray-700 duration-300 capitalize">Payment Method</label> */}
    <div className="flex flex-col  w-full ">
<button
  type="button"
  onClick={() => {
    setPaymentMenu((prevState) => {
      if (prevState == false) {
        setSelectedElement('');
      }
      return !prevState;
    });
  }}
  className="flex w-full bg-white   items-center border gap-x-3 h-8 border-gray-200  px-2 rounded-xl"
>
  {selectedElement != '' ? (
    <span className="text-md inline-flex text-gray-600 font-medium">
          <span className="px-2 first:pl-0 border-r border-r-gray-300 last:border-none">{selectedElement}</span>
    </span>
  ) : (
    <div className="text-md inline-flex text-gray-800 font-medium capitalize">
      <span className="px-1 capitalize rtl:font-arabic rtl:font-bold  text-sm">{title}</span>
    </div>
  )}
  <span className="ml-auto">
  
    <MdOutlineArrowDropDown className="text-2xl bordder-2 border-violet-800 rounded-full text-violet-800" />
  </span>
</button> 
  {paymentMenu &&
  <div className="relative z-50">
    <MenuPanel menuElements={elements} setSelect={paymentSelect} unSelect={unPaymentSelect} />
  </div>
      }
</div> 
</div>
  )
}

export default GetMenuPanel