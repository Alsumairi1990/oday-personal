// 'use client'
// import { useEffect, useState } from "react";
// import EditBody from "../../_components/EditBody";

// interface Props {
//     params : {
//         slug: string
//     }
// }
// const EditorPage = ({params}:Props) => {
//   const [content, setContent] = useState("");

//   useEffect(() => {
//     async function fetchContent() {
//       try {
//         const response = await fetch(`/api/front/blogs/content/${params.slug}`);
//         const data = await response.json();
//         setContent(data.content);
//       } catch (error) {
//         console.error("Error fetching content:", error);
//       }
//     }

//     fetchContent();
//   }, []);

//   return content !== "" ? <EditBody initialContent={content} /> : <p>Loading...</p>;
// };

// export default EditorPage;


'use client'
import { useEffect, useState } from "react";
import EditBody from "../../_components/EditBody";
import { PostForFront } from "@/app/[locale]/admin/blogs/_utils/PostForfront";
import Image from 'next/image'

interface Props {
    params: {
        slug: string;
    };
}
declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}


const EditBlogPage = ({ params }: Props) => {
  const [post, setPost] = useState<PostForFront | null>(null);
  useEffect(() => {
    const loadTwitterWidgets = () => {
      if (window.twttr && window.twttr.widgets) {
        window.twttr.widgets.load();
      } else {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        script.charset = "utf-8";
        script.onload = () => window.twttr?.widgets?.load();
        document.body.appendChild(script);
      }
    };
  
    loadTwitterWidgets(); 
  }, []);
  
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
          <div className="p-3 my-6">
            <p className="text-base">
                {post.contentAr}
            </p>
          </div>
        </>
      ) : (
        <p className="p-2">No data</p>
      )}
    </div>
  );
};

export default EditBlogPage;
