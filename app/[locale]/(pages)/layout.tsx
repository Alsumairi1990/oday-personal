import Footerk from "@/app/_components/Footer"
import { MenuWithAllModels } from "../admin/setting/left-nav/_utils/MenuWithAllModels";
import { getMenusElementse2 } from "../admin/setting/left-nav/_actions/Action";
import NavBarBlog from "@/app/NavBarBlog";
import { getLocale, getMessages } from "next-intl/server";
import { Category, Service } from "@prisma/client";



export default async function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    let menusData:Record<number, MenuWithAllModels[]> ;
    const locale = await getLocale();
    const messages = await getMessages({ locale });
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service`, {
      method: 'GET',
      next: { revalidate: 1800 },
    });
    
    const Categories = await fetch(`${process.env.NEXTAUTH_URL}/api/front/service/categories/home`, {
      method: 'GET',
      next: { revalidate: 1800 }, 
    });


    const elements = await fetch(`${process.env.NEXTAUTH_URL}/api/front/menu`, {
      method: 'GET',
      next: { revalidate: 3600 }, // 
    });

    const menuElements:Record<number, MenuWithAllModels[]> = await elements.json();
     const servicesR:Service[] = await res.json();
          const categoriesResult:Category[] = await Categories.json();
    
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
            <div className='w-full bg-[#111]' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
              <Footerk services={servicesR} categories={categoriesResult} locale={locale} messages={messages} />
            </div>
             
            </div>
             
          
    )
  }
     