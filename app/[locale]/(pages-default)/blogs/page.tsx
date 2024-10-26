
import { getLocale, getMessages } from "next-intl/server";
import { ProductForFront } from "../../admin/products/_utils/ProductForFront";
import ProductHero from "@/app/_components/products/ProductHero";
import { Post } from "@prisma/client";
import HeroSection from "@/app/_components/blog/HeroSection";

const BlogPage = async () => {
   const locale = await getLocale();
  const messages = await getMessages({ locale });
  const productPage = (messages as any).Common.productsPage; 
 const postsPage = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/latest/5`, {
   method: 'GET',
   next: { revalidate: 3600 }, // Revalidate for ISR if needed
 });
 const page = 'products'
  const hero = await fetch(`${process.env.NEXTAUTH_URL}/api/front/hero-data/${page}`, {
    method: 'GET',
    next: { revalidate: 3600 }, // Optional revalidation for ISR (30 minutes)
  });

 
 const heroPosts:Post[] = await postsPage.json();


  return (

     <div className="w-full mt-24">    
     <div className="hero-section h-0">
      </div>    
      <HeroSection posts={heroPosts} locale={locale}  messages={messages} />

     </div>
  )
};
export default BlogPage;