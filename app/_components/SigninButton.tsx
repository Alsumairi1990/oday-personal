"use client"
// import { Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import { AbstractIntlMessages } from "next-intl";
import Link from "next/link";


interface Props{
    locale? : String,
    messages? : AbstractIntlMessages,
}
const SigninButton = ({locale,messages}:Props) => {
  const { data: session } = useSession();
     const signIn = (messages as any).Common.signIn;
     const register = (messages as any).Common.register;



  return (
    <div className="flex items-center gap-2">
      {session && session.user ? (
        <>
          <Link href={"/profile"}>||  {`${session.user.role}`} ||</Link>
          <Link
            className="tex-sky-500 hover:text-sky-600 transition-colors"
            href={"/api/auth/signout"}
          >
            Sign Out
          </Link>
        </>
      ) : (
        <div className="flex text-bxs">

          <Link className="text-white ltr:border-r rtl:border-l border-gray-300 rtl:pl-2 ltr:pr-2" href={`/auth/signin`}>  
            {signIn}
          </Link>
          <Link className="text-white px-2" href={`/auth/signup`}> 
            {register}
          </Link>
                    {/*<button onClick={() => signIn()}>Sign In</button>*/}

        </div>
      )}
    </div>
  );
};

export default SigninButton;