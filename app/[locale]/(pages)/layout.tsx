import Footerk from "@/app/_components/Footer"
import { MenuWithAllModels } from "../admin/setting/left-nav/_utils/MenuWithAllModels";
import NavBar from "@/app/NavBar";
import { getMenusElementse2 } from "../admin/setting/left-nav/_actions/Action";
import NavBarBlog from "@/app/NavBarBlog";



export default async function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    let menusData:Record<number, MenuWithAllModels[]> ;
    try {
      menusData = await getMenusElementse2();
    } catch (error) {
      console.error("Failed to fetch service meta:", error);
      // Return or render an error message when an error occurs
      return (
        <div className="error-message">
          <h2>Failed to load services</h2>
          <p>There was an issue loading the services. Please try again later.</p>
        </div>
      );
    }
    return (
            

            <div className="h-full dark:bg-[#111]" >
              <div className="w-11.7">
              {menusData && <NavBarBlog menusData={menusData} />}
              </div>
            {children}
            <div className="">
             {/* <Footerk /> */}
             </div>
             
            </div>
             
          
    )
  }
     