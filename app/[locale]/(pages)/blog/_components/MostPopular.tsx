import { Post } from '@prisma/client';
import { AbstractIntlMessages } from 'next-intl';
import React from 'react';

interface Props {
  posts : Post[],
  locale : string,
  messages : AbstractIntlMessages

}

const mostPopular = ({posts,locale,messages}:Props) => {
  return (
    <div className="container  mx-auto px-4 py-8">
      <div className="flex justify-between border border-gray-300 items-center py-2 px-2 bg-[#f7f7f9]">
        <h2 className="text-sm font-semibold text-gray-600">تم اختيار مواضيع "العربية" الأكثر قراءة بناءً على إجمالي عدد المشاهدات اليومية. اقرأ المواضيع الأكثر شعبية كل يوم من هنا.</h2>
        <div className="flex gap-x-3 text-sm ">
          <button className="text-gray-500">الأسبوع</button>
          <button className="font-semibold text-gray-800">اليوم</button>
        </div>
      </div>
      <div className="grid grid-cols-1 border border-gray-200 py-4 border-t-0 sm:grid-cols-2  gap-x-6">
        {posts.map((post,index) => (
          <div key={post.id} className="relative flex py-4 px-2 border-b border-b-gray-300 overflow-hidden">
            <div className="flex-10 flex items-center justify-center rounded bg-gray-100 text-red-600 px-3 py-1 text-xl font-semibold">
                {index+1}
            </div>
            <div className="relative px-2 flex-30">
              {post.image && <img src={post.image} alt={post.titleAr} className="w-full h-20 sm:h-24 rounded-md object-cover" />}
             
            </div>
            <div className="px-4 py-2 flex flex-col gap-y-4 flex-60">
              <h3 className="text-sm font-semibold ">{post.titleAr}</h3>
              <div className="max-sm:hidden flex items-center w-full justify-between ">
                 <span className="text-sm font-semibold text-blue-600 ">سياسية </span>
                 <span className="text-sm text-gray-600  bg-[#f7f7f9] px-1.5 py-0.5 ">998887 مشاهدة </span>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default mostPopular;