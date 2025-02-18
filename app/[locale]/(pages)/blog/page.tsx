
import { getLocale, getMessages } from "next-intl/server";
import { Post } from "@prisma/client";
import HeroNews from "@/app/_components/blog/HeroNews";
import { PostForFront } from "../../admin/blogs/_utils/PostForfront";
import SectionPost2 from "@/app/_components/blog/SectionPost2";
import SectionSinglePost from "@/app/_components/blog/SectionSinglePost";
import WrittersSec from "@/app/_components/blog/WrittersSec";
import BloombergSection from "@/app/_components/blog/SectionLat";
import PostsArea3 from "@/app/_components/blog/PostsArea3";
import PostsSection4 from "@/app/_components/blog/PostsSection4";
import { PostCategoryFront } from "../../admin/blogs/_utils/PostCategoryFront";

const BlogPage = async () => {
   const locale = await getLocale();
  const messages = await getMessages({ locale });
 const postsPage = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/latest/5`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Revalidate for ISR if needed
 });

 const postsNews = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/category/news`, {
  method: 'GET',
  next: { revalidate: 3600 }, // Revalidate for ISR if needed
});
const postsTech = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/category/technology`, {
  method: 'GET',
  next: { revalidate: 3600 }, // Revalidate for ISR if needed
});

const postsDesign = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/category/design`, {
  method: 'GET',
  next: { revalidate: 3600 }, // Revalidate for ISR if needed
});

const postsProgramming = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/category/programming`, {
  method: 'GET',
  next: { revalidate: 3600 }, // Revalidate for ISR if needed
});
 const page = 'products'
  const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
  });

 
 const heroPosts:PostForFront[] = await postsPage.json();
 const newsPosts:PostCategoryFront = await postsNews.json();
 const techPosts:PostCategoryFront = await postsTech.json();
 const designPosts:PostCategoryFront = await postsDesign.json();
const programmingPosts:PostCategoryFront = await postsProgramming.json();





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
      <SectionSinglePost category={programmingPosts} locale={locale} messages={messages}  />
      </div>
      <div className="w-full">
      <SectionSinglePost category={techPosts} locale={locale} messages={messages}  />
      </div>
      
     </div>
     <div className="w-full my-14">
       <WrittersSec   />
      </div>
       <div className="sm:w-11.5/12 my-14 mx-auto">
       <BloombergSection  posts={heroPosts} locale={locale} messages={messages} />
      </div>
      <div className="my-8 sm:w-11.6/12 mx-auto">
        <PostsArea3 posts={designPosts.pots} locale={locale} messages={messages} />
      </div>
      <div className="bg-gray-100  w-full">
        <div className="my-10 py-6  w-11.6/12 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-4">
          <PostsSection4  posts={newsPosts.pots} locale={locale} messages={messages} title="علوم السياسة" />
          <PostsSection4  posts={techPosts.pots} locale={locale} messages={messages} title="تكنولوجيا" />
          <PostsSection4  posts={programmingPosts.pots} locale={locale} messages={messages} title="ركن البرمجة" />
          <PostsSection4  posts={heroPosts} locale={locale} messages={messages} title=" تفارير عربية" />

        </div>
      </div>
      
     </>
  )
};
export default BlogPage;