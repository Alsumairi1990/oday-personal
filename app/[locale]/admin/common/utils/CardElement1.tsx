import Link from 'next/link'
import React from 'react'
import Image from "next/image"

interface Props {
    title:string,
    icon?:string,
    subTitle? : string
    btnBgColor? : string
    
}

function CardElement1({title,icon,subTitle,btnBgColor}:Props) {
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
            className={`px-2 w-fit ${btnBgColor || 'bg-green-800'} borrder !bgorder-gray-300 mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1 rounded-md cursor-pointer`}

    // className="w-6/12 bg-green-800 border !border-[#41a165] mt-1 mx-auto max-sm:flex-100 flex items-center justify-center sm:py-1 rounded-md cursor-pointer"
    >
        <Link href="/admin/setting/left-nav/delete" className="flex items-center rounded-2xl py-[2px]  " >
            <span className=" text-gray-600 font-medium capitalize pr-2.5 pl-1 text-base" >Delete </span>
            <div className="px-1 py-0.5 flex" >
                <span className=" bg-white h-5 w-5 p-1 rounded-full flex items-center justify-center" data-v-a1c57ce8="">
                  <svg className="h-full w-full fill-slate-700 " viewBox="-3.5 0 19 19" xmlns="http://www.w3.org/2000/svg"><path d="M11.383 13.644A1.03 1.03 0 0 1 9.928 15.1L6 11.172 2.072 15.1a1.03 1.03 0 1 1-1.455-1.456l3.928-3.928L.617 5.79a1.03 1.03 0 1 1 1.455-1.456L6 8.261l3.928-3.928a1.03 1.03 0 0 1 1.455 1.456L7.455 9.716z"/></svg>
                </span>
            </div>
        </Link>
    </div>
</div>
  )
}

export default CardElement1