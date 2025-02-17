import { Post } from "@prisma/client";
import { AbstractIntlMessages } from "next-intl";
import Image from "next/image";

interface Props {
  posts : Post[],
  locale : string,
  messages : AbstractIntlMessages,
}

export default function BloombergSection({posts,locale,messages}:Props) {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-2xl font-bold border-b-4 border-red-600 pb-2 mb-6">
          الشرق مع <span className="text-black">Bloomberg</span>
        </h2>

        {/* Articles Grid */}
        <div className="flex max-sm:flex-wrap gap-x-3">
          <div className="sm:flex-30 rtl:pl-4">
          {posts.length > 0 && posts.slice(0,1).map((article, index) => (
            <div
              key={article.id}
              className={`bg-white  rounded-lg overflow-hidden `}
            >
             {article.image && <Image
                src={ article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />}
              <div className="p-2 mt-2">
                <h3 className="text-lg font-semibold">{article.titleAr}</h3>
              </div>
              <div className="p-1">
                <p className="text-base line-clamp-5 leading-7">{article.contentAr}</p>
              </div>
            </div>
          ))}
          </div>
          <div className="sm:flex-70  grid grid-cols-1 gap-3 sm:grid-cols-2">
          {posts.length > 0 && posts.slice(1,5).map((article, index) => (
            <div
              key={article.id}
              className={`bg-white flex gap-x-3  border-dotted border-gray-300 overflow-hidden 
                ${index === 0 || index === 1 ? 'border-b' : 'border-b-0'}
                `}
            >
             
              <div className="px-4 flex-70">
                <h3 className="text-base font-arabicBold mb-2.5 scale-y-[1.2] font-semiold">{article.titleAr}</h3>
                <p className="text-md line-clamp-3 leading-7">{article.contentAr}</p>

              </div>
              <div className="p-1 flex-30">
                {article.image && <Image
                src={ article.image}
                alt={article.title}
                width={500}
                height={300}
                className="w-full h-32 object-cover "
              />} 
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
