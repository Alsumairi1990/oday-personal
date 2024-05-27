








import LeftNav from "../_components/admin/nav/LeftNav"
import TopNav from "../_components/admin/nav/TopNav"
import Footerk from "../_components/Footer"    



export default function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
            

            <div className="h-full bg-gray-100">
                
                <TopNav />
                
                <div className="flex">
                  <div className="p-1 min-w-[240px]">
                     <LeftNav />
                  </div>
                   
                
                <div className="w-full  h-full">
                {children}
                </div>
            </div>
            
            
            </div>
             
          
    )
  }
     