import Footerk from "@/app/_components/Footer"
import NavBar from "@/app/NavBar.jsx"



export default function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
            

            <div className="h-full">
                <NavBar  textColor="white"  />
            {children}
            <div className="">
             <Footerk />
             </div>
            </div>
             
          
    )
  }
     