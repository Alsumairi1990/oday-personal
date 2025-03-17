import { Post } from "@prisma/client";
import { AbstractIntlMessages } from "next-intl";
import Image from 'next/image';

interface Props {
  posts : Post[],
  locale : string,
  messages : AbstractIntlMessages

}
const ReleatedPosts = ({posts,locale,messages}:Props) => {
    const mostPopular = (messages as any).Common.mostPopular;

    return (
        <>
        
    <div className="mb-8 mt-8 sm:mt-20 pr-5 bg-gray-50 border border-gray-200 pl-3 py-3 rounded-md">
      <h2 className="text-xl scale-y-[1.13] font-semibold mb-7 rtl:font-arabicBold  border-b-2 border-red-500 pb-4">{mostPopular}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-5 gap-x-4">
      {posts.length > 0 && posts.map((post,index) => (
        <div className="pb-4 flex flex-col items-center gap-y-3 border-b border-b-gray-300">
               <div className=" h-[8rem] px-1 rounded-md w-full ">
                {post.image && (
                  <Image
                    src={post.image}
                    height={400}
                    width={400}
                    alt={post.title}
                    className="w-full max-w-full h-full rounded-md"
                  />
                )}
              </div>     
              <div className="">
                <h3 className="font-medium sm:!text-[13px] scale-y-[1.1] !leading-[1.45rem]">{post.titleAr}</h3>
                {/* <p className="text-sm text-gray-600">Short news excerpt...</p> */}
              </div>
             
        </div>

      ))
      }
      </div>
     
      </div>
  
  </>
    );
};
export default ReleatedPosts;