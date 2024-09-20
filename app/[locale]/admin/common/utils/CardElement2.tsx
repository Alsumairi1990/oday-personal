import Link from 'next/link'
import React from 'react'
import Image from "next/image"

interface Props {
    title:string,
    icon?:string,
    subTitle? : string
    btnBgColor? : string
    
}

function CardElement2({title,icon,subTitle,btnBgColor}:Props) {
  return (
    
    <div className="bg-white px-2 py-2 rounded-2xl shadow-md mt-3 bg-right border border-gray-200 bg-no-repeat bg-blend-overlay" >
    <div className="flex border-b mb-2 pt-2 pb-3 border-b-gray-300 ">
        <div className="icon flex-30 pt-1 pl-1">
            <div className="h-8 w-10 flex bg-gray-100 border border-gray-200 p-1.5 rounded  ">
                {icon &&  <Image
                        src={icon}
                        height={50}
                        width={50}
                        alt={title}
                        className="w-full  max-w-full rounded"
                    /> }
            </div>
        </div>
        <div className="flex-70 flex flex-col justify-center items-center">
            <p className="text-gray-700 font-semibold text-base capitalize"> {title} </p>
            <p className="text-orange-500 font-bold text-base">{subTitle}</p>
        </div>
    </div>
    <div  
            // className={`w-6/12 border bg-red-50 !border-gray-100 mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1 rounded-md cursor-pointer`}
            // className={`px-2 w-fit ${btnBgColor || 'bg-green-800'} borrder !bgorder-gray-300 mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1 rounded-md cursor-pointer`}

    className="w-6/12 mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1 rounded-md cursor-pointer"
    >
        <Link href="/admin/setting/left-nav/delete" className="flex items-center rounded-2xl py-[2px]  " >
            <span className=" text-gray-600 font-medium capitalize pr-2.5 pl-1 text-base" >Delete </span>
            <div className="px-1 py-0.5 flex" >
                <span className=" rounded-full flex items-center justify-center" data-v-a1c57ce8="">
                  Data
                </span>
            </div>
        </Link>
    </div>
</div>
  )
}

export default CardElement2