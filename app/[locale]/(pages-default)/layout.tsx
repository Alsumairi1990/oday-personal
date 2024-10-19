import Footerk from "@/app/_components/Footer"
import { MenuWithAllModels } from "../admin/setting/left-nav/_utils/MenuWithAllModels";
import NavBar from "@/app/NavBar";
import { getMenusElementse2 } from "../admin/setting/left-nav/_actions/Action";
import WhatsAppLive from "@/app/_components/WhatsAppLive";
// import NavBar from "@/app/NavBar.jsx"



export default async function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    let menusData:Record<number, MenuWithAllModels[]> ;
    try {
      // services = await getServices();
      // serviceCatMeta = await getServiceCatMeta();
      // categories = await getServiceCategory();
      // heroData = await getHeroData();
      menusData = await getMenusElementse2();
      // blogsMeta = await getBlogMeta();
      // blogs = await getForntBlogs();
      // phases = await getPhaseElements();
      // phaseMeta = await gethaseMeta();
      // workMeta = await getWorkMeta();
      // works = await getWorksMainPage();
      // aboutUS =  await getAboutUsData();
      // testimonials = await getTesimonialsFront();
      // testimonialMeta = await getTesimonialsMeta();
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
               {menusData && <NavBar menusData={menusData} />}
            {children}
            <div className="">
             {/* <Footerk /> */}
             </div>
             
            </div>
             
          
    )
  }
     