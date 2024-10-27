
import { getLocale, getMessages } from "next-intl/server";
import { Post } from "@prisma/client";
import HeroNews from "@/app/_components/blog/HeroNews";
import { PostForFront } from "../../admin/blogs/_utils/PostForfront";

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

     <div className="w-full my-6">    
      <HeroNews posts={heroPosts} locale={locale}  messages={messages} />

     </div>
  )
};
export default BlogPage;