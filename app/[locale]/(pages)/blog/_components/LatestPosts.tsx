import { Post } from "@prisma/client";
import { AbstractIntlMessages } from "next-intl";
import Image from 'next/image';

interface Props {
  posts : Post[],
  locale : string,
  messages : AbstractIntlMessages

}
const LatestPosts = ({posts,locale,messages}:Props) => {
    const mostPopular = (messages as any).Common.mostPopular;

    return (
        <>
        
    <div className="mb-8 mt-8 sm:mt-20 pr-5 bg-gray-50 border border-gray-200 pl-3 py-3 rounded-md">
      <h2 className="text-xl scale-y-[1.13] font-semibold mb-7 rtl:font-arabicBold  border-b-2 border-red-500 pb-4">{mostPopular}</h2>
      <div className="flex flex-col gap-y-3">
      {posts && posts.map((post,index) => (
        <div className="pb-4 flex items-center border-b border-b-gray-300">
                 
              <div className="flex-70">
                <h3 className="font-medium sm:!text-[13px] scale-y-[1.1] !leading-[1.45rem]">{post.titleAr}</h3>
                {/* <p className="text-sm text-gray-600">Short news excerpt...</p> */}
              </div>
              <div className="flex-30 h-[4.2rem] px-1 rounded-md w-full ">
                {post.image && (
                  <Image
                    src={post.image}
                    height={300}
                    width={300}
                    alt={post.title}
                    className="w-full max-w-full h-full rounded-md"
                  />
                )}
              </div> 
        </div>

      ))
      }
      </div>
     
      </div>
  
  </>
    );
};
export default LatestPosts;