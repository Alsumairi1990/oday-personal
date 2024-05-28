import SignInForm from "@/app/_components/SigninFrom";

import Link from 'next/link'

interface Props{
  searchParams:{
    callbackUrl? : String
  }
}
export default function SigninPage({searchParams}: Props) {
  console.log("serach param"+searchParams)
   const imagePath = '/images/w01.jpg';

    return (

      <div className="w-11.8/12 mx-auto mt-4 flex flex-col justify-center items-center ">
        
         <SignInForm callbackUrl={searchParams.callbackUrl}/>
         <div className="text-center">
            <Link href="/" className={` text-2xl sm:text-xl flex items-center pl-1 sm:pl-4 pr-2 font-bold`} >  Register </Link>

            </div>
      </div> 
    )
  }
  
  
 