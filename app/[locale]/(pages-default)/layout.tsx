import Footerk from "@/app/_components/Footer"
import { MenuWithAllModels } from "../admin/setting/left-nav/_utils/MenuWithAllModels";
import NavBar from "@/app/NavBar";
import { getMenusElementse2 } from "../admin/setting/left-nav/_actions/Action";
import WhatsAppLive from "@/app/_components/WhatsAppLive";
import { getLocale, getMessages } from "next-intl/server";
import { Category, CompanyMenu, Explore, Service } from "@prisma/client";



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

       const exploresData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/explores`, {
        method: 'GET',
        next: { revalidate: 3600 }, 
      })

       const companyMenuData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/company-menu`, {
        method: 'GET',
        next: { revalidate: 3600 }, // Revalidate for ISR 
      });

      const servicesR:Service[] = await res.json();
      const categoriesResult:Category[] = await Categories.json();
      const explores:Explore[] = await exploresData.json();
      const companyMenu:CompanyMenu[] = await companyMenuData.json();


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
               {menusData && <NavBar menusData={menusData} explores={explores} companyMenu={companyMenu} locale={locale} messages={messages} />}

            {children}
            <div className='w-full bg-[#111]' dir={locale === 'ar' ? 'rtl' : 'ltr'}>
          <Footerk services={servicesR} categories={categoriesResult} locale={locale} messages={messages} />
          </div>
             
            </div>
             
          
    )
  }
     