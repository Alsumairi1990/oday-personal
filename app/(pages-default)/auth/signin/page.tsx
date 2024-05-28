import SignInForm from "@/app/_components/SigninFrom";

import Link from 'next/link'

interface Props{
  searchParams:{
    callbackUrl? : String
  }
}
export default function SigninPage({searchParams}: Props) {
  console.log("serach param"+searchParams)
   const imageBg = 'https://www.yudaah.com/demo/login-form-design/assets/images/bg.jpg';
   const image2 = 'https://www.yudaah.com/demo/login-form-design/assets/images/help.png';

    return (

      <div className="flex relative items-center h-full  justify-center bg-no-repeat bg-center bg-cover -z-0"  style={{backgroundImage:`url(${imageBg})`}}>
        <div className="absolute top-0 z-10  left-0 w-full  h-full bg-[#0000001f]  " ></div>
        <div className="flex-40  border-r border-b-gray-200">
           <div className="img-loginOuter"  >
                <div className="font-semibold capitalize flex items-center text-2xl pl-2 pt-3">
                   <h1 className="font-semibold text-blue-700 mr-1" >Arab </h1><h1 className="text-pink-700">Gate</h1>
                </div>
                <div className="flex justify-center mt-2">
                    <img className="w-full max-full" src={image2} alt="" />
                </div>
                <div className="px-4 flex flex-col items-center mb-4 ">
                    <h1 className="text-2xl font-semibold mb-2 text-pink-700">Why Sign Up? </h1>
                    {/* <!-- <p class="py-2 mb-2">Descove and Contribute to our platform database  in all areas of knowledge , to get more oprion and access all feature , login and get access  </p> --> */}
                    <div className="flex w-full text-gray-500 text-sm flex-col gap-3 justify-between">
                        <span className="flex-30 px-3 py-1 rounded-md border border-gray-200  font-semibold">View College Brochures </span>
                        <span className="flex-30 px-3 py-1 rounded-md border border-gray-200 font-semibold"> Check Detailed Fees</span>
                        <span className="flex-30 px-3 py-1 rounded-md border border-gray-200  font-semibold"> Ask Questions to senior Counselors</span>
                        <span className="flex-30 px-3 py-1 rounded-md border border-gray-200 font-semibold"> Never miss Important deadlines</span>
                        <span className="flex-30 px-3 py-1 rounded-md border border-gray-200 font-semibold">Shortlist and Apply to colleges</span>
                    </div> 
                </div> 
               
            </div>
        </div>
        <div className="flex-60 flex flex-col items-center justify-center">

        <div className="w-full mx-w-full sm:max-w-[400px]   m-auto p-6 bg-white dark:bg-black-100 border dark:border-gray-800 shadow-md dark:sha0dow-gray-800 rounded-md">
         <SignInForm callbackUrl={searchParams.callbackUrl}/>
         <div className="text-center ">
            <Link href="/" className={` text-2xl sm:text-xl flex items-center pl-1 sm:pl-4 pr-2 font-bold`} >  Register </Link>

            </div>
            </div>
        </div> 
      </div>
    )
  }
  
  
 