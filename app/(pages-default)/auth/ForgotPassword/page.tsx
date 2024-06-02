import ForgetPassword from "@/app/_components/ForgotPassword";
import { DiVim } from "react-icons/di";




const ForgotPassword = ()=> {
   const forget = './images/password-forgot.svg'
   const imageBg = 'https://www.yudaah.com/demo/login-form-design/assets/images/bg.jpg';
   const imagePath = '/images/w01.jpg';
   return (
      <div className="flex fixed top-0 left-0 h-full w-full items-center  justify-center bg-no-repeat bg-center bg-cover  z-[50]"  style={{backgroundImage:`url(${imagePath})`}}>
      <div className="absolute top-0 z-[60]  left-0 w-full  h-full bg-[#0000009f]  " ></div>
      <div className="flex  flex-wrap justify-center z-[70] bg-white rounded-xl">
     
      <div className="flex-100 flex flex-col items-center ">
       
      <div className="w-full max-w-full  sm:max-w-full  m-auto p-6  pt-0 bg-white dark:bg-black-100  rounded-md">
            <div className="mt-2 mb-5 flex flex-col items-center text-center">
                <div className="flex justify-center mb-5 ">
                    <img className="w-44" src={forget} alt="" />
                </div>
                <h1 className="text-xl font-bold mb-1 ">Oday Platform Page </h1> 
                <p className="">Forgot Password Recover Page.</p>
            </div>
           <ForgetPassword />
          
      </div>
      </div> 
      </div>
    </div>
      
   )
 };
 export default ForgotPassword;