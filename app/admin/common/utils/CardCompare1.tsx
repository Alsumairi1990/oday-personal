import React from "react";
import { LuRefreshCw, LuUsers } from "react-icons/lu";
import { CiMedicalMask } from "react-icons/ci";
function CardCompare1() {
  return (
    <div className="card h-100 ">
      <div className="border-b pb-2  border-b-gray-100">
        <div className="flex items-center">
          <h5 className="mb-1 text-lg font-medium text-gray-600 ">
            Salse Overview
          </h5>
          <div className="dropdown ml-auto">
            <div className="bg-gray-200/30 p-1.5 border border-gray-200/80  rounded-full ml-auto ">
              <LuRefreshCw className="text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex items-center card-subtitle">
          <div className="me-2 bg-[#fcead9] font-medium  rounded-xl  px-2 py-0.5 text-sm text-orange-600">
            Total 42.5k Sales
          </div>
          <div className="d-flex align-items-center text-success">
            <i className="ri-arrow-up-s-line ri-20px"></i>
          </div>
        </div>
      </div>
      <div className="py-2 flex pt-4 ">
        <div className="p-1 flex-45 flex flex-wrap items-center">
          <div className="bg-[#fee9d5] px-1.5 py-1 rounded">
            <div className=" flex items-center  justify-center rounded">
              <CiMedicalMask className="text-orange-500 text-xl" />
            </div>
          </div>
          <span className="text-gray-500 text-sm font-medium pl-2">Sold</span>
          <div className="py-1 flex flex-100 flex-col mt-3">
            <span className="text-xl font-medium text-gray-700">23.7 %</span>
          </div>
          <div className="pt-2">
            <span className="text-gray-500 text-md">2,456</span>
          </div>
        </div>
        <div className="flex-10 flex items-center after:content-[''] relative after:w-1 after:h-full after:absolute  after:z-20 after:left-2.5 after:top-0 after:border-r after:border-r-gray-300/60">
          <span className="w-7 h-7 flex items-center justify-center text-bx font-normal pb-0.5 text-gray-500 z-30 text-center bg-gray-200 rounded-full ">
            vs
          </span>
        </div>
        <div className="p-1 flex-45 justify-center flex-wrap flex items-center  ">
          <div className="bg-[#e7e7ff] px-1.5 py-1 rounded">
            <div className=" flex items-center  justify-center rounded">
              <LuUsers className="text-indigo-500 text-xl" />
            </div>
          </div>
          <span className="text-green-500 text-sm font-medium pl-2">Order</span>
          <div className="py-1 flex flex-100 pl-1.5 flex-col mt-3">
            <span className="text-xl font-medium text-gray-700">23.7 %</span>
          </div>
          <div className="pt-2">
            <span className="text-gray-500 text-md">7,456</span>
          </div>
        </div>
      </div>
      <div className="p-1">
        <div className="flex rounded">
          <span className="flex-20 h-2 bg-orange-500 rounded-l-md"></span>
          <span className="flex-80 h-2 bg-violet-600 rounded-r-md"></span>
        </div>
      </div>
    </div>
  );
}

export default CardCompare1;
