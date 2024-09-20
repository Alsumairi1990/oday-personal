"use client";
import React, { useEffect } from "react";
import { GrCheckmark } from "react-icons/gr";
import { useState } from "react";
import Link from "next/link";
import { deleteTestimonial } from "../_actions/Actions";

interface Props {
  ids: string[];
  closeModel: (value: boolean) => void;
}
const DeleteTestimonial = ({ ids, closeModel }: Props) => {
  const [result, setResult] = useState<number>(0);
  const deleteRows = async () => {
    const results = await deleteTestimonial(ids);
    setResult(results);
  };
  return (
    <div className="fixed bg-[#0000003f] h-full flex items-center justify-center w-full left-0 top-0 m-auto z-50 p-6">
      {ids && result === 0 && (
        <div className=" w-full sm:mx-auto bg-white sm:w-5/12 shadow-2xl mb-4 rounded-md">
          <div className="flex items-center bg-indigo-500 py-2.5 px-2 rounded-t-md">
            <span className="">
              <GrCheckmark className="text-xl mr-2 text-white" />
            </span>
            <span className="text-base text-white">Selete Testimonial</span>
          </div>

          <div className="p-2 flex justify-center py-4">
            <span className="text-gray-700 text-md font-semibold capitalize">
              you are going to delete {ids.length} rows
            </span>
          </div>

          <div className="flex justify-center  border-t pt-3 border-t-gray-200 my-4">
            <button
              onClick={deleteRows}
              className="flex-30 flex justify-center"
            >
              <span className="text-white px-4 text-center flex bg-red-600 rounded-md py-1.5 font-semibold text-sm">
                Delete Rows
              </span>
            </button>
            <button
              onClick={() => closeModel(false)}
              className="flex-15 flex justify-center"
            >
              <span className="text-white px-4 text-center flex bg-slate-500 rounded-md py-1.5 font-semibold text-sm">
                Cancel
              </span>
            </button>
          </div>
        </div>
      )}
      {result > 0 && (
        <div className=" w-full sm:mx-auto bg-white sm:w-5/12 shadow-2xl mb-4 rounded-md">
          <div className="flex items-center bg-green-500 py-2.5 px-2 rounded-t-md">
            <span className="">
              <GrCheckmark className="text-xl mr-2 text-white" />
            </span>
            <span className="text-base text-white">Delete Testimonial</span>
          </div>

          <div className="p-2 flex justify-center py-4">
            <span className="text-gray-700 text-md font-semibold capitalize">
              {ids.length} rows - hase been deleted
            </span>
          </div>
          <div className="py-3 border-t border-t-gray-200 flex justify-center">
            <Link
              href="/admin/category"
              className="text-sm bg-gray-300 px-1.5 py-.05 rounded-md"
            >
              back
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
export default DeleteTestimonial;
