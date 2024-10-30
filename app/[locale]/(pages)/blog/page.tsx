
import { getLocale, getMessages } from "next-intl/server";
import { Post } from "@prisma/client";
import HeroNews from "@/app/_components/blog/HeroNews";
import { PostForFront } from "../../admin/blogs/_utils/PostForfront";
import SectionPost2 from "@/app/_components/blog/SectionPost2";
import SectionSinglePost from "@/app/_components/blog/SectionSinglePost";

const BlogPage = async () => {
   const locale = await getLocale();
  const messages = await getMessages({ locale });
 const postsPage = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/latest/5`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Revalidate for ISR if needed
 });
 const page = 'products'
  const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
  });

 
 const heroPosts:PostForFront[] = await postsPage.json();


  return (
    <>
     <div className="w-full my-6">    
      <HeroNews posts={heroPosts} locale={locale}  messages={messages} />
     </div>
     <div className="my-">
       <SectionPost2 posts={heroPosts} locale={locale} messages={messages}  />
     </div>
     <div className="py-14 w-11.4/12 mx-auto gap-6 grid sm:grid-cols-2">
      <div className="">
      <SectionSinglePost posts={heroPosts} locale={locale} messages={messages}  />
      </div>
      <div className="">
      <SectionSinglePost posts={heroPosts} locale={locale} messages={messages}  />
      </div>

     </div>
     </>
  )
};
export default BlogPage;