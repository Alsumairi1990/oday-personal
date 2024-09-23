import NavBar from "../../NavBar.jsx"
import Footerk from "../../_components/Footer.jsx"
// import Nav from "./Nav"


export default function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
            

            <div className="h-full">
                {/* <NavBar  /> */}
            {children}
            <div className="">
             <Footerk />
             </div>
            </div>
          
    )
  }
     