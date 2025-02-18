import { Post } from "@prisma/client";
import { AbstractIntlMessages } from "next-intl";
import Image from "next/image";


interface Props {
    posts : Post[],
    locale : string,
    messages : AbstractIntlMessages,
    title : String
  }
const PostsSection4 = ({posts,locale,messages,title}:Props) => {
  return (
      <div className="flex flex-col">
        {/* Main news article */}
        <div className="flex items-center font-semibold mb-5">
            <span className="h-6 w-1  bg-blue-700 ml-2"></span>
            <p className="text-gray-900 text-lg"> {title}</p>
        </div>
        <div className="relative">
        {posts.length > 0 && posts.slice(0,1).map((article, index) => (
           <>
         <div className="">
         {article.image && <Image
              src={article.image}
              alt=""
              width={500}
              height={300}
              className="w-full h-auto rounded-md"
            />
             }
            <span className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-xs rounded">خاص</span>
          </div>
          <div className="absolute bottom-0 w-full px-2 py-2" style={{backgroundImage: 'linear-gradient(0deg, #000, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0))'}}>
          <h3 className=" text-lg font-semibold mt-2   text-white">
            {article.titleAr}
          </h3>
          </div>
          </>
           ))}
        </div>

        {/* Sub news articles */}
        <div className="flex flex-col space-y-3">
        {posts.length > 0 && posts.slice(1,4).map((article, index) => (
            <div className="flex gap-2 bg-white mt-3 items-center border ">
            {article.image && 
             <div className="p-1 flex-35">
              <Image
                src={article.image}
                alt="رويترز تعلن عن سحب خبر مضلل"
                width={300}
                height={300}
                className="rounded-md h-20"
            />
            </div>
            }
            <div className="flex-65 pl-2">
            <h3 className="text-bxs text-gray-800 font-normal leading-7">
                {article.titleAr}
            </h3>
            </div>
            
            </div>
            ))}
        </div>
        

      </div>
  );
};

export default PostsSection4;
