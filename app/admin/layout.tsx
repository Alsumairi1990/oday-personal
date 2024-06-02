








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
                  <div id="leftAdmin" className="p-1 max-sm:min-w-0 max-sm:w-0 sm:min-w-[240px] left-admin">
                     <LeftNav />
                  </div>


                <div className="w-full  h-full">
                {children}
                </div>
            </div>


            </div>


    )
  }
