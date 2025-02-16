import Footerk from "@/app/_components/Footer"
import { MenuWithAllModels } from "../admin/setting/left-nav/_utils/MenuWithAllModels";
import NavBar from "@/app/NavBar";
import { getMenusElementse2 } from "../admin/setting/left-nav/_actions/Action";
import NavBarBlog from "@/app/NavBarBlog";
import { getLocale, getMessages } from "next-intl/server";



export default async function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    let menusData:Record<number, MenuWithAllModels[]> ;
    const locale = await getLocale();
    const messages = await getMessages({ locale });
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
              {menusData && <NavBarBlog menusData={menusData} locale={locale} messages={messages} />}
              </div>
            {children}
            <div className="">
             {/* <Footerk /> */}
             </div>
             
            </div>
             
          
    )
  }
     