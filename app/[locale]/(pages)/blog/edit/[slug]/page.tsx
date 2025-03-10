
'use client'
import { useEffect, useState } from "react";
import EditBody from "../../_components/EditBody";
import { PostForFront } from "@/app/[locale]/admin/blogs/_utils/PostForfront";
import Image from 'next/image'
import EditPost from "../../_components/EditPost";
import BlogPost from "../../_components/BlogPost";

interface Props {
    params: {
        slug: string;
    };
}

const EditBlogPage = ({ params }: Props) => {
  const [post, setPost] = useState<PostForFront>();

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
    <div className="p-2 w-10/12 mx-auto">
         {post && <EditPost   post = {post} /> }
         {/* {post && post.contentAr && <BlogPost   content = {post.contentAr} /> } */}

    </div>
  );
};

export default EditBlogPage;
