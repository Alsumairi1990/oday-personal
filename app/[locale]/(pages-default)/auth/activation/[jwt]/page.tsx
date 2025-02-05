import { activateUser } from "@/utils/authActions";
import Link from 'next/link'
import { getLocale, getMessages } from "next-intl/server";
import { MdErrorOutline } from "react-icons/md";
import { MdDone } from "react-icons/md";

interface Props {
    params: {
        jwt: string;
    };
}
const activationPage = async ({params} : Props ) => {
  const result = await activateUser(params.jwt);
  const image2 = '/images/col1min.png';
  const imageBg = '/images/hero.webp';
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const userNotExist = (messages as any).Common.userNotExist;
  const userActivated = (messages as any).Common.userActivated;
  const activationPage = (messages as any).Common.activationPage;  
  const alreadyActivated = (messages as any).Common.alreadyActivated;
  const signinPage = (messages as any).Common.signInPage;
  const homePage = (messages as any).Common.homePage;



   return (

      <div className="flex fixed rtl:font-arabic top-0  left-0 h-full w-full items-center  justify-center bg-no-repeat bg-center bg-cover  z-[80]"  style={{backgroundImage:`url(${imageBg})`}}>
        <div className="absolute top-0 z-[30]  left-0 w-full  h-full bg-[#000000e0]  " ></div>    
          <div className="w-11.6/12 sm:w-3/12 p-0.5 rounded-lg bg-white z-40 ">
              <div className="img-loginOuter flex rounded-t-md flex-col bg-[#04c760]"  >
                    <div className="font-semibold flex-10 capitalize flex items-center text-2xl pl-2 pt-3">
                      {/* <h1 className="font-semibold text-blue-700 mr-1" >{sam}</h1> */}
                    </div>
                    <div className="flex rounded-t-md justify-center pb-2 mt-2">
                        <img className="w-24 max-w-full  mx-auto max-full" src={image2} alt="" />
                    </div>
                    <div className="px-4 flex flex-col items-center mb-2 ">
                        <h1 className="text-xl font-semibold mb-2 text-white">{activationPage}</h1>
                    </div>
                  
                </div>
                <div className="p-4 text-base font-medium text-center my-2">
                 <div className="mb-5" >
                 {result === "userNotExist" ? (
                   <div className="text-red-500 flex gap-x-2 items-center">
                        <MdErrorOutline className="text-gray-500 text-xl " />
                        <span className="" > {userNotExist} </span>
                    </div>
                  ) : result === "alreadyActivated" ? (
                    <div className="text-red-500 flex gap-x-2 items-center">
                        <MdErrorOutline className="text-gray-500 text-xl " />
                        <span className="" > {alreadyActivated} </span>
                    </div>
                  ) : result === "success" ? (
                    <div className="text-gray-500 flex gap-x-2 items-center">
                        <MdDone className="text-gray-500 text-xl " />
                        <span className="" > {userActivated} </span>
                    </div>
                   
                  ) : (
                    <p className="text-yellow-500 text-2xl">Oops! Something went wrong!</p>
                    
                  )}
                  </div>
                 
                  <div className="flex items-center gap-x-3 font-medium text-sm justify-center">
                    <Link href={`/auth/signin`} className="p1 inline-flex ">
                      <span
                      className="p-1 shadow border border-white px-2 bg-orange-500 text-white rounded-md">{signinPage}</span> 
                    </Link>
                    <Link href={`/${locale}`} className="p1 inline-flex my-1">
                      <span
                      className="p-1  border border-gray-300 text-orange-500 px-2 rounded-md">{homePage}</span> 
                    </Link>
                  </div>  
                


                  </div>
            </div>
   
  </div>
   )
 };
 export default activationPage;