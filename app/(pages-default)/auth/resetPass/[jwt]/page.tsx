
import { verifyJwt } from "@/utils/jwt";
import { activateUser } from "@/utils/authActions";
import ResetPasswordForm from "@/app/_components/ResetPasswordForm";


interface Props {
    params: {
        jwt: string;
    };
}
const ResetPasswordPage = async ({params} : Props ) => {
    const imagePath = '/images/w01.jpg';
    const payload = verifyJwt(params.jwt);
  const result = await activateUser(params.jwt);
   if (!payload)
    return (
      <div className="flex items-center justify-center h-screen text-red-500 text-2xl">
        The URL is not valid!
      </div>
    );
  return (
      <div className="flex fixed top-0 left-0 h-full w-full items-center  justify-center bg-no-repeat bg-center bg-cover  z-[50]"  style={{backgroundImage:`url(${imagePath})`}}>
      <div className="absolute top-0 z-[60]  left-0 w-full  h-full bg-[#0000009f]  " ></div>
      <div className="flex  flex-wrap justify-center z-[70] bg-white rounded-xl">
     
      <div className="flex-100 flex flex-col items-center ">
       
      <div className="w-full max-w-full  sm:max-w-full  m-auto p-6  pt-0 bg-white dark:bg-black-100  rounded-md">
            <div className="mt-2 mb-5 flex flex-col items-center text-center">
                <div className="flex justify-center mb-5 ">
                    {/*<img className="w-44" src={forget} alt="" />*/}
                </div>
                <h1 className="text-xl font-bold mb-1 ">Oday Platform Page </h1> 
                <p className="">Forgot Password Recover Page.</p>
            </div>
            <ResetPasswordForm jwtUserId={params.jwt} />
    </div>
      </div> 
      </div>
    </div>
  );
 };
 export default ResetPasswordPage;