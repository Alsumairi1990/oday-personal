import Service from "@/app/_components/admin/service/ManageService";
import HomeSection from "../_components/HomeSection";
import { getLocale, getMessages } from "next-intl/server";
import BlogSection from "../_components/BlogSection";

const HomePage = async () => {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const imagePath1 = '/images/navbg.webp';
  const mainPage = (messages as any).Common.mainPage;  

    return (
      <div className="p-2 sm:px-4">
        <div className="px-3 py-2 bg-white border border-gray-200 mb-2 rounded-md">
           <p className="text-gray-600 text-sm mb-0 max-sm:hidden">{mainPage}</p>
        </div>        <HomeSection slug="ff" locale={locale} messages={messages} />
        <div className="grid sm:grid-cols-3">
          <div className=""></div>
          <div className="sm:col-span-2 px-4 sm:cols-start-2 space-y-6">
             <BlogSection slug="ff" locale={locale} messages={messages} />
          </div>
         
        </div>
      </div>
)
};
export default HomePage;