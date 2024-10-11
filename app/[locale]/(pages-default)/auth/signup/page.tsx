
'use client'

import SignUpForm from "@/app/_components/SignUpForm";

import Link from 'next/link'
export default function Signup() {
   // const imagePath = '/images/w01.jpg';
   const imageBg = 'https://www.yudaah.com/demo/login-form-design/assets/images/bg.jpg';
   const image2 = 'https://www.yudaah.com/demo/login-form-design/assets/images/help.png';

    return (

    
      <div className="flex fixed top-0 left-0 h-full w-full items-center  justify-center bg-no-repeat bg-center bg-cover  z-[50]"  style={{backgroundImage:`url(${imageBg})`}}>
        <div className="absolute top-0 z-[60]  left-0 w-full  h-full bg-[#0000001f]  " ></div>
        <div className="flex items-cfenter h-full w-full sm:h-[calc(100%_-_4rem)]  sm:w-9/12 flex-wrap justify-center z-[70] sm-bg-white ">
        <div className="flex-100 sm:flex-40 max-sm:hidden border-r border-b-gray-200">
           <div className="img-loginOuter flex flex-col"  >
                <div className="font-semibold flex-10 capitalize flex items-center text-2xl pl-2 pt-3">
                   <h1 className="font-semibold text-blue-700 mr-1" >Arab </h1><h1 className="text-pink-700">Gate</h1>
                </div>
                <div className="flex  justify-center mt-2">
                    <img className="w-72 max-w-full  mx-auto max-full" src={image2} alt="" />
                </div>
                <div className="px-4 flex-70 flex flex-col items-center mb-4 ">
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
        <div className="flex-100 sm:flex-60 flex flex-col h-full items-center  justify-center ">
         
        <div className="w-full max-w-full sm:max-w-full h-full sm:h-[calc(100%_-_2rem)] overflow-y-auto  m-auto p-3  sm:pt-5 max-sm:bg-gray-200 dark:bg-black-100  dark:border-gray-800  sm:rounded-md">
              <div className=" mb-1 flex flex-col w-full  items-center text-center max-sm:bg-white max-sm:border max-sm:border-gray-300 max-sm:rounded-md">
                  <span className="flex mb-3 ">
                      <svg className="h-14 w-14 " viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="512" cy="512" r="512" className="fill-[#112e51]"/>
                      <path d="m458.15 617.7 18.8-107.3a56.94 56.94 0 0 1 35.2-101.9V289.4h-145.2a56.33 56.33 0 0 0-56.3 56.3v275.8a33.94 33.94 0 0 0 3.4 15c12.2 24.6 60.2 103.7 197.9 164.5V622.1a313.29 313.29 0 0 1-53.8-4.4zM656.85 289h-144.9v119.1a56.86 56.86 0 0 1 35.7 101.4l18.8 107.8A320.58 320.58 0 0 1 512 622v178.6c137.5-60.5 185.7-139.9 197.9-164.5a33.94 33.94 0 0 0 3.4-15V345.5a56 56 0 0 0-16.4-40 56.76 56.76 0 0 0-40.05-16.5z" className="fill-white"/>
                      </svg>
                  </span>
                  <h1 className="text-xl font-bold mb-1 pb-2.5 border-b border-b-gray-300">Oday Platform Page </h1> 
                  {/*<p className="">Get more things done with Loggin platform.</p>*/}
              </div>
             <SignUpForm />
             <div className="text-center ">
                <Link href="/" className={` text-xl sm:text-xl flex items-center pl-1 sm:pl-4 pr-2 font-semibold`} >  Register </Link>

              </div>
        </div>
        </div> 
        </div>
      </div>
        
      
    )
  }
  
 