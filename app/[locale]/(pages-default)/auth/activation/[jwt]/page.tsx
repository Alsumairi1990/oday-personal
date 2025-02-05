import { activateUser } from "@/utils/authActions";
import Link from 'next/link'
interface Props {
    params: {
        jwt: string;
    };
}
const activationPage = async ({params} : Props ) => {
  const result = await activateUser(params.jwt);
     const image2 = '/images/col1min.png';
        const imageBg = '/images/hero.webp';


   return (

      <div className="flex fixed rtl:font-arabic top-0 left-0 h-full w-full items-center  justify-center bg-no-repeat bg-center bg-cover  z-[80]"  style={{backgroundImage:`url(${imageBg})`}}>
        <div className="absolute top-0 z-[30]  left-0 w-full  h-full bg-[#000000e0]  " ></div>    
          <div className="w-11.6/12 sm:w-5/12 rounded-lg border-r border-b-gray-200 bg-white z-40 ">
              <div className="img-loginOuter flex flex-col"  >
                    <div className="font-semibold flex-10 capitalize flex items-center text-2xl pl-2 pt-3">
                      {/* <h1 className="font-semibold text-blue-700 mr-1" >{sam}</h1> */}
                    </div>
                    <div className="flex  justify-center border-b border-b-gray-200 pb-2 mt-2">
                        <img className="w-36 max-w-full  mx-auto max-full" src={image2} alt="" />
                    </div>
                    <div className="px-4 flex-70 flex flex-col items-center mb-4 ">
                        {/*<h1 className="text-2xl font-semibold mb-2 text-pink-700">whySignIn</h1>*/}
                        <div className="flex w-full text-gray-500 text-sm flex-col gap-3 justify-between">
                            {/*<span className="flex-30 px-3 py-1 rounded-md border border-gray-200  font-semibold">{whyReason1}</span>
                            <span className="flex-30 px-3 py-1 rounded-md border border-gray-200 font-semibold">{whyReason2}</span>
                            <span className="flex-30 px-3 py-1 rounded-md border border-gray-200  font-semibold"> {whyReason3}</span>
                            <span className="flex-30 px-3 py-1 rounded-md border border-gray-200 font-semibold"> {whyReason4}</span>*/}
                        </div> 
                    </div>
                  
                </div>
                <div className="p-4 text-base font-medium text-center my-2">
                 {result === "userNotExist" ? (
                  
                    <p className="text-red-500 ">The user does not exist</p>
                  ) : result === "alreadyActivated" ? (
                    <p className="text-red-500 ">The user is already activated</p>
                  ) : result === "success" ? (
                    <p className="text-green-500 ">
                      Success! The user is now activated
                    </p>
                  ) : (
                    <p className="text-yellow-500 text-2xl">Oops! Something went wrong!</p>


                  )}
                  <Link href={`/auth/signin`} className="p1 inline-flex my-3">
                    <span
                    className="p-1.5 border border-white px-2 bg-orange-500 text-white rounded-md">got to signin page</span> 
                  </Link>
                


                  </div>
            </div>
   
  </div>
   )
 };
 export default activationPage;