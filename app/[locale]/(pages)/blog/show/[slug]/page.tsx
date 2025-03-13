
// import { useEffect, useState } from "react";
import EditBody from "../../_components/EditBody";
import { PostForFront } from "@/app/[locale]/admin/blogs/_utils/PostForfront";
import Image from 'next/image'
import BlogPost from "../../_components/BlogPost";
import { getLocale, getMessages } from "next-intl/server";

interface Props {
    params: {
        slug: string;
    };
}

const ShowBlogPage = async ({ params }: Props) => {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  const homePage = (messages as any).Common.homePage;
  const createdAt = (messages as any).Common.createdAt;
  const readingTime = (messages as any).Common.readingTime;


 
  const postData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/blogs/post/${params.slug}`, {
    method: 'GET',
    next: { revalidate: 1600 }, 
  });

  const post:PostForFront = await postData.json();
  
  // const [post, setPost] = useState<PostForFront | null>(null);

  // useEffect(() => {
  //   async function fetchContent() {
  //     try {
  //       const response = await fetch(`/api/front/blogs/post/${params.slug}`);
        
  //       if (!response.ok) {
  //         throw new Error("Failed to fetch post");
  //       }
  //       const data: PostForFront = await response.json();
  //       setPost(data);
  //     } catch (error) {
  //       console.error("Error fetching content:", error);
  //     }
  //   }

  //   fetchContent();
  // }, [params.slug]); 

  return (
    <div className="p-2 w-11.9/12 sm:w-11/12 grid grid-cols-1 sm:grid-cols-70/30 mx-auto">
      <div className="pl-4 ">
        <div className="flex items-center font-semibold my-4">
        <span className="text-gray-800 text-[13px] ">{homePage} </span>
        <span className="text-sm w-[2px] h-4 inline-flex bg-gray-500 mx-2"></span>
        {post.categories && post.categories.length > 0 && post.categories.map((category,index) => (
          <>
           {locale === 'en' ? <span className="text-sm text-gray-800">{category.name}</span>
           : <span className="text-[13px] text-gray-800">{category.nameAr}</span>
           }
          {index !== post.categories.length - 1 && <span className="text-sm w-[2px] h-4 inline-flex bg-gray-500 mx-2"></span>}

           
           </>
        ))
        }
        </div>
      {post ? (
        <>
             <div className="mt-8 mb-10"><span className="text-xl sm:leading-[3rem] scale-y-[1.2] sm:text-3xl sm:scale-y-[1.9] font-arabicBold font-semibold text-gray-800">
                {post.titleAr}
                </span>
              </div>
              <div className="px-1.5 flex gap-x-3 items-center">
                <div className="px-1 flex items-center">
                  <span className="w-0.5 inline-flex h-4 bg-orange-600 rounded rtl:ml-2"></span>
                  <span className="text-sm">{createdAt} : </span>
                  <span className="text-sm text-gray-700">
               {post.publishedAt && new Date(post.publishedAt).toLocaleDateString('en-GB')}
                  </span>
                </div>

                <div className="px-1">
                  <span className="text-sm">{readingTime} : </span>
                  <span className="text-sm text-gray-700">{post.publishedAt && post.readingTime}</span>
                </div>
                
              </div>
              <div className="rounded-md w-full mx-auto my-4">
                {post.image && (
                  <Image
                    src={post.image}
                    height={1000}
                    width={1000}
                    alt={post.title}
                    className="w-full max-w-full rounded-xl"
                  />
                )}
              </div>
              <div className="p-2 w-full mx-auto">
            {/* {post && <EditPost   post = {post} /> } */}
            {post && post.contentAr && <BlogPost   content = {post.contentAr} /> }

              </div>
            </>
          ) : (
            <p className="p-2">No data</p>
          )}
      </div>
     
    </div>
  );
};

export default ShowBlogPage;
