
import { getLocale, getMessages } from "next-intl/server";
import { Post } from "@prisma/client";
import { PostForFront } from "@/app/[locale]/admin/blogs/_utils/PostForfront";
import BlogManage from "../_components/BlogManage";

const BlogPage = async () => {
   const locale = await getLocale();
  const messages = await getMessages({ locale });
 const postsPage = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/latest/40`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Revalidate for ISR if needed
 });

 const postsNews = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/category/news`, {
  method: 'GET',
  next: { revalidate: 3600 }, // Revalidate for ISR if needed
});




 
 const heroPosts:PostForFront[] = await postsPage.json();

  return (
    <>
     <BlogManage   posts={heroPosts}   />
     </>
  )
};
export default BlogPage;