import Service from "@/app/_components/admin/service/ManageService";
import HomeSection from "../_components/HomeSection";
import { getLocale, getMessages } from "next-intl/server";
import BlogSection from "../_components/BlogSection";

const HomePage = async () => {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
    const imagePath1 = '/images/navbg.webp';

    return (
      <div className="p-2">
        <p className="text-gray-600 pt-3 mb-8">User Page</p>
        <HomeSection slug="ff" locale={locale} messages={messages} />
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