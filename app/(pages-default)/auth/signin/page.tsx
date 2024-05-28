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

      <div className="flex relative items-center h-full  justify-center bg-no-repeat bg-center bg-cover z-[50]"  style={{backgroundImage:`url(${imageBg})`}}>
        <div className="absolute top-0 z-[60]  left-0 w-full  h-full bg-[#0000001f]  " ></div>
        <div className="flex items-center justify-center z-[70] bg-white rounded-xl">
        <div className="flex-100 sm:flex-40  border-r border-b-gray-200">
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
        <div className="flex-100 sm:flex-60 flex flex-col items-center justify-center">
         
        <div className="w-full mx-w-full sm:max-w-8/12   m-auto p-6 bg-white dark:bg-black-100 border dark:border-gray-800 shadow-md dark:sha0dow-gray-800 rounded-md">
          <div className="mt-2 mb-5 flex flex-col items-center text-center">
              <span className="flex mb-5 ">
                  <svg className="h-14 w-14 " viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="512" cy="512" r="512" className="fill-[#112e51]"/>
                  <path d="m458.15 617.7 18.8-107.3a56.94 56.94 0 0 1 35.2-101.9V289.4h-145.2a56.33 56.33 0 0 0-56.3 56.3v275.8a33.94 33.94 0 0 0 3.4 15c12.2 24.6 60.2 103.7 197.9 164.5V622.1a313.29 313.29 0 0 1-53.8-4.4zM656.85 289h-144.9v119.1a56.86 56.86 0 0 1 35.7 101.4l18.8 107.8A320.58 320.58 0 0 1 512 622v178.6c137.5-60.5 185.7-139.9 197.9-164.5a33.94 33.94 0 0 0 3.4-15V345.5a56 56 0 0 0-16.4-40 56.76 56.76 0 0 0-40.05-16.5z" style="fill:#fff"/>
                  </svg>
              </span>
              <h1 className="text-xl font-bold mb-1 ">Oday Platform Page </h1> 
              <p className="">Get more things done with Loggin platform.</p>
          </div>
         <SignInForm callbackUrl={searchParams.callbackUrl}/>
         <div className="text-center ">
            <Link href="/" className={` text-xl sm:text-xl flex items-center pl-1 sm:pl-4 pr-2 font-semibold`} >  Register </Link>

            </div>
            </div>
        </div> 
        </div>
      </div>
    )
  }
  
  
 