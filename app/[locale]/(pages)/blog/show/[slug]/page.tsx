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
    <div className="p-2 w-8/12 mx-auto">
      {post ? (
        <>
          <div className="my-4 mb-8"><span className="text-xl font-semibold text-gray-800">
          {post.titleAr}
            </span></div>
          <div className="rounded-md w-10/12 mx-auto my-4">
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
          <div className="p-2 w-10/12 mx-auto">
         {/* {post && <EditPost   post = {post} /> } */}
         {post && post.contentAr && <BlogPost   content = {post.contentAr} /> }

          </div>
        </>
      ) : (
        <p className="p-2">No data</p>
      )}
    </div>
  );
};

export default ShowBlogPage;
