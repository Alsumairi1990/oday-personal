import Image from "next/image";
import { Post } from "@prisma/client";
import { AbstractIntlMessages } from "next-intl";
import { formatDate } from "@/app/utils/DateUtils";
import Link from "next/link";
import { LuArrowLeft } from "react-icons/lu";

interface Props {
  posts : Post[],
  locale : string,
  messages : AbstractIntlMessages,
}

export default function PostsArea3({posts,locale,messages}:Props) {
  const samBlogs = (messages as any).Common.samBlogs;
  const more = (messages as any).Common.more;


  return (
    <div className="w-full mx-auto px-4 py-8">
      <h2 className="text-lg sm:text-xl font-bold text-right border-b-2 border-yellow-500 pb-2 mb-6">
      {samBlogs}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-7 ">
        {posts.slice(0,5).map((story) => (
          <div key={story.id} className="max-sm:flex max-sm:flex-wrap max-sm:border border-gray-300 bg-white shadow-lg rounded-lg max-sm:p-1 overflow-hidden">
            <div className="relative max-sm:flex-35 ">
              {story.image && <Image
                src={story.image}
                alt={story.title}
                width={700}
                height={700}
                className="w-full h-24 sm:h-56 max-sm:rounded-md object-cover"
              />}
              <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="absolute top-2 right-2 sm:top-[16px] sm:right-[16px]"><g clip-path="url(#clip0_5296_7072)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 28C21.7318 28 28 21.7318 28 14C28 6.26818 21.7318 0 14 0C6.26818 0 0 6.26818 0 14C0 21.7318 6.26818 28 14 28ZM14.8947 12.2665L19.7693 13.9147L11.1873 24.1818L13.7836 15.7335L8.90909 14.0853L17.4924 3.81818L14.8947 12.2665Z" fill="url(#paint0_linear_5296_7072)"></path></g><defs><linearGradient id="paint0_linear_5296_7072" x1="14" y1="0" x2="14" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white"></stop></linearGradient><clipPath id="clip0_5296_7072"><rect width="28" height="28" fill="white"></rect></clipPath></defs></svg>
              </span>
            </div>
            {locale === 'en' ? 
              <div className="p-2 sm:p-4 text-right max-sm:flex-65 px-2">
                <h3 className="text-bxs sm:text-sm font-semibold max-sm:line-clamp-2 mb-2">{story.title}</h3>
                <p className="text-xs text-gray-500 font-semibold mt-3 sm:mt-5">{story.publishedAt && formatDate(story.publishedAt.toString())}</p>
              </div>:
              <div className="p-2 sm:p-4 text-right max-sm:flex-65 px-2">
              <h3 className="text-bxs sm:text-sm font-normal sm:font-semibold line-clamp-2 sm:line-clamp-3 mb-2">{story.titleAr}</h3>
              <p className="text-xs text-gray-500 font-semibold mt-3 sm:mt-5">{story.publishedAt && formatDate(story.publishedAt.toString())}</p>
            </div>
              }
          </div>
        ))}
      </div>
      <div className="mt-8 flex justify-center relative " >
          
              <Link
                href={"/blog"}
                className="capitalize flex gap-x-2 items-center font-arabic border z-10 
                relative after:content[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:border-y-[18px] after:border-l-[30px] after:border-r-[0px] after:border-y-transparent after:-right-[30px]  
                before:content[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:border-y-[18px] before:border-r-[30px] before:border-l-[0px] before:border-y-transparent before:-left-[30px]  border-orange-600 text-gray-50 text-md px-2.5 rounded-md py-1.5 font-semibold bg-orange-600 "
              >
                <span>{more}</span>
                <span><LuArrowLeft className="text-white text-lg " />
                </span>
              </Link>
            
          
            <span className="h-[0.1rem] w-full bg-gray-300 dark:bg-gray-800 absolute z-0 top-4">
            </span>
        </div>
    </div>
  );
}
