import React from 'react'
import Image from "next/image"

interface Props {
    order : {
        name : string,
        email : string,
        icon : string,
        status : string
    }
}
function LatestOrders({order}:Props) {
    const statusStyles = () => {
        switch (order.status) {
          case 'success':
            return 'bg-[#e4fadd] text-green-600';
          case 'canceled':
            return 'bg-[#fadde4] text-red-600';
          case 'pending':
            return 'bg-[#fdf4e4] text-orange-600';
          default:
            return 'bg-gray-200 text-gray-500';
        }
      };
  return (
    <div className="px-2 border-b">
        
        <div className="p-2">
            <div className="flex items-center justify-between  py-1.5">
                  <div className="flex items-center ">
                        <div className="me-3 pt-1">
                            <div className="avatar avatar-sm">
                                <span className="bg-gray-200 p-2 flex items-center justify-center w-9 h-9 rounded-full  ">
                                {order.icon &&  <Image
                                    src={order.icon}
                                    height={20}
                                    width={20}
                                    alt={order.name}
                                    className="w-full  max-w-full rounded"
                                /> }
                                </span>
                                </div>
                        </div>
                        <div className="flex flex-col">
                            <a href="pages-profile-user.html" className="">
                                <span className="text-gray-600 font-medium text-sm"> {order.name}</span></a>
                              <small className="text-gray-500">{order.email}</small>
                        </div>
                </div>
                <div className="px-3">
                    <span className={` text-sm  rounded px-1.5 py-0.5 ${statusStyles()}`}>{order.status}</span>
                </div>
            </div>
        </div>
    </div>
  )
}
export default LatestOrders