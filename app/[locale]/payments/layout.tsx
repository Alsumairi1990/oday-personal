import Footerk from "@/app/_components/Footer"
import NavBar from "@/app/NavBar"


export default function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
            

            <div className="h-full">
                {/* <NavBar   /> */}
            {children}
            <div className="">
             <Footerk />
             </div>
            </div>
             
          
    )
  }
     