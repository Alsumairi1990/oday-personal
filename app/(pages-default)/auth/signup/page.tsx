
'use client'

import SignUpForm from "@/app/_components/SignUpForm";


export default function Signup() {
   const imagePath = '/images/w01.jpg';

    return (

      <div className="w-full max-sm:fixed max-sm:top-0 h-full max-sm:left-0 mx-auto pb-16 flex flex-col justify-center items-center ">
        
        <SignUpForm />
      </div> 
    )
  }
  
 