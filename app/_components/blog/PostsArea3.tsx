import Image from "next/image";
import { Post } from "@prisma/client";
import { AbstractIntlMessages } from "next-intl";
import { formatDate } from "@/app/utils/DateUtils";

interface Props {
  posts : Post[],
  locale : string,
  messages : AbstractIntlMessages,
}

export default function PostsArea3({posts,locale,messages}:Props) {
  return (
    <div className="w-full mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-right border-b-2 border-yellow-500 pb-2 mb-6">
        قصص إرم نيوز
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-7">
        {posts.slice(0,5).map((story) => (
          <div key={story.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="relative">
              {story.image && <Image
                src={story.image}
                alt={story.title}
                width={700}
                height={700}
                className="w-full h-56 object-cover"
              />}
              <span className="">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none" className="absolute top-[16px] right-[16px]"><g clip-path="url(#clip0_5296_7072)"><path fill-rule="evenodd" clip-rule="evenodd" d="M14 28C21.7318 28 28 21.7318 28 14C28 6.26818 21.7318 0 14 0C6.26818 0 0 6.26818 0 14C0 21.7318 6.26818 28 14 28ZM14.8947 12.2665L19.7693 13.9147L11.1873 24.1818L13.7836 15.7335L8.90909 14.0853L17.4924 3.81818L14.8947 12.2665Z" fill="url(#paint0_linear_5296_7072)"></path></g><defs><linearGradient id="paint0_linear_5296_7072" x1="14" y1="0" x2="14" y2="28" gradientUnits="userSpaceOnUse"><stop stop-color="white"></stop><stop offset="1" stop-color="white"></stop></linearGradient><clipPath id="clip0_5296_7072"><rect width="28" height="28" fill="white"></rect></clipPath></defs></svg>
              </span>
            </div>
            <div className="p-4 text-right">
              <h3 className="text-sm font-semibold mb-2">{story.titleAr}</h3>
              <p className="text-xs text-gray-500 font-semibold mt-5">{story.publishedAt && formatDate(story.publishedAt.toString())}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
