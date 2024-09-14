import NavBar from "../NavBar.jsx"
import Footerk from "../_components/Footer"



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
     