"use client"
// import { Button } from "@nextui-org/react";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

const SigninButton = () => {
  const { data: session } = useSession();

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
        <>
          {/*<button onClick={() => signIn()}>Sign In</button>*/}
          <Link className="text-white" href={`/auth/signin`}>
            Sign In
          </Link>
        </>
      )}
    </div>
  );
};

export default SigninButton;