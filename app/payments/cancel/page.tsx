import { MdDownloadDone, MdSmsFailed } from "react-icons/md";

const cancel = () => {
  
  return (
     <div className="w-full" >
          <div className="w-5/12 flex flex-col items-center">
          <span className="my-3">
                <MdSmsFailed  className='text-3xl bg-red-400  text-white size-5 border border-red-500 rounded-md'  />
                </span>
          <p className="text-base font-medium text-red-500">
            failed Payments
          </p>
          </div>
     </div>
  )
};
export default cancel;