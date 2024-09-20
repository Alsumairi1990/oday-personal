import React from 'react'
import { CiMedicalMask } from 'react-icons/ci'
import { LuRefreshCw, LuUsers } from 'react-icons/lu'
import PieChart1 from './PieChart1'

function CardPie() {
  return (
    <div className="card ">
      <div className="border-b pb-2  border-b-gray-100">
        <div className="flex items-center">
          <h5 className="mb-1 text-lg font-medium text-gray-600 ">
            Total Invoice
          </h5>
          <div className="dropdown ml-auto">
            <div className="bg-gray-200/30 p-1.5 border border-gray-200/80  rounded-full ml-auto ">
              <LuRefreshCw className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex items-center card-subtitle">
          <div className="me-2 bg-[#fcead9] font-medium  rounded-xl  px-2 py-0.5 text-sm text-orange-600">
            23 in last week
          </div>
          <div className="d-flex align-items-center text-success">
            <i className="ri-arrow-up-s-line ri-20px"></i>
          </div>
        </div>
      </div>
      <div className="py-2 flex pt-4 h-56 ">
       <PieChart1  />
      </div>
      <div className="p-1 mt-2">
        <div className="flex flex-col gap-y-2 rounded">
          <span className="text-gray-700 text-md font-medium">Total Projects </span>
          <span className="text-gray-500 text-sm">design full applications</span>
        </div>
      </div>
    </div>
  )
}

export default CardPie