'use client'
import { useEffect, useState } from "react";
import EditBody from "../../_components/EditBody";
import { PostForFront } from "@/app/[locale]/admin/blogs/_utils/PostForfront";
import Image from 'next/image'
import BlogPost from "../../_components/BlogPost";

interface Props {
    params: {
        slug: string;
    };
}

const ShowBlogPage = ({ params }: Props) => {
  const [post, setPost] = useState<PostForFront | null>(null);

  useEffect(() => {
    async function fetchContent() {
      try {
        const response = await fetch(`/api/front/blogs/post/${params.slug}`);
        
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data: PostForFront = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    }

    fetchContent();
  }, [params.slug]); // Added dependency

  return (
    <div className="p-2 w-11.9/12 sm:w-11/12 grid grid-cols-1 sm:grid-cols-70/30 mx-auto">
      <div className="pl-4 ">
      {post ? (
        <>
          <div className="mt-8 mb-10"><span className="text-xl scale-y-[1.19] sm:text-3xl sm:scale-y-[1.6] font-arabicBold font-semibold text-gray-800">
              {post.titleAr}
                </span></div>
              <div className="rounded-md w-full mx-auto my-4">
                {post.image && (
                  <Image
                    src={post.image}
                    height={1000}
                    width={1000}
                    alt={post.title}
                    className="w-full max-w-full rounded"
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
