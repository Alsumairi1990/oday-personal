import Link from 'next/link'
import React from 'react'
import Image from "next/image"

interface Props {
    title:string,
    icon?:string,
    subTitle? : string
    btnBgColor? : string
    
}

function CardMainElement2({title,icon,subTitle,btnBgColor}:Props) {
  return (
    
    <div className="bg-white firsdt:bg-[#0d172a] px-2 py-2 rounded-xl mt-3 bg-right border border-gray-300 bg-no-repeat bg-blend-overlay" >
        <div className="flex flex-wrap borde9r-b  pt-2 pb-1 bo9rder-b-gray-300 ">
            <div className="flex-70 flex flex-col pl-1.5">
                <p className="text-gray-800  font-semibold text-xl capitalize mb-1"> {title} </p>
                <p className="text-gray-500  font-medium text-md">{subTitle}</p>
            </div>
            <div className="icon flex-30 pt-1 pl-1">
                <div className="h-11 w-12 flex bg-[#e1e8f0] border border-gray-200 p-2.5 rounded  ">
                    {icon &&  <Image
                            src={icon}
                            height={50}
                            width={50}
                            alt={title}
                            className="w-full  max-w-full rounded"
                        /> }
                </div>
            </div>
            <div className="flex-100 flex mt-3 pl-1.5">
                <span className="text-md capitalize mb-1 mr-2 text-green-500"> +10.2% </span>
                <span className="text-gray-500 first:text-white text-md">+1.01% this week</span>
            </div>
        
        </div>
   </div>
  )
}
export default CardMainElement2