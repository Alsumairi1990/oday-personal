import { PageSection, Post } from "@prisma/client";
import { getLocale, getMessages } from "next-intl/server";
import Link from "next/link";
import React from "react";

interface Props {
  meta: PageSection;
  posts: Post[];
}
const BlogList = async ({ meta, posts }: Props) => {
  const locale = await getLocale();
  const messages = await getMessages({ locale });
  return (
    <div className="flex w-11.6/12 sm:w-[90%] mx-auto  items-center flex-col my-8">
      +
      <div className="p-2">
        {locale == "en" ? (
          <h2 className="text-base sm:text-3xl font-bold text-blue-600 dark:text-white mt-3 text-center">
            {meta.title}
          </h2>
        ) : (
          <h2 className="text-base sm:text-3xl font-bold font-arabic text-blue-600 dark:text-white mt-3 text-center">
            {meta.titleAr}
          </h2>
        )}
        <div className="grid sm:grid-cols-2 gap-3 mt-8">
          {posts &&
            posts.map((post) => (
              <div className="grid grid-cols-3 sm:grid-cols-2">
                <div className="relative">
                  {post.image && (
                    <img
                      className="w-full h-full mx-auto"
                      src={post.image}
                      alt=""
                    />
                  )}
                  <div className="absolute flex px-2 py-1 sm:px-3 sm:py-1.5 flex-col justify-center items-center bg-fuchsia-600 text-white top-0 left-0">
                    <span className="text-base sm:text-lg font-semibold">05</span>
                    <span className="text-sm">MAR</span>
                  </div>
                </div>
                <div className="p-1 bg-[#1c1c1c] flex flex-col max-sm:col-span-2 max-sm:col-start-2">
                  <div className="p-1 sm:p-4">
                    {locale == "en" ? (
                      <>
                        <h2 className="text-gray-100 sm:mb-2 text-md sm:text-base font-semibold">
                          {post.title}
                        </h2>
                        <p className="text-[13px] max-sm:hidden font-normal text-gray-200 line-clamp-4">
                          {post.content}
                        </p>
                      </>
                    ) : (
                      <>
                        <h2 className="text-gray-100 font-arabic sm:mb-2 text-md max-sm:leading-[26px] sm:text-base  font-semibold">
                          {post.titleAr}
                        </h2>
                        <p className="text-[13px] max-sm:hidden font-arabic font-normal text-gray-200 leading-6 line-clamp-4">
                          {post.contentAr}
                        </p>
                      </>
                    )}
                  </div>
                  <div className="px-4 py-2 mb-2 max-sm:hidden">
                    {locale == "en" ? (
                      <Link
                        href={"/services"}
                        className="text-gray-200 capitalize text-[13px] px-2 py-1.5 border  border-gray-400 "
                      >
                        {meta.more}{" "}
                      </Link>
                    ) : (
                      <Link
                        href={"/services"}
                        className="text-gray-200 font-arabic font-semibold capitalize text-[12px] px-2 py-0.5 border  border-gray-400 "
                      >
                        {" "}
                        {meta.moreAr.split(" ")[0]} ...{" "}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
        <div className="mt-8 flex justify-center relative " >
          {
            locale == "en" ? (
              <Link
                href={"/blog"}
                className="capitalize text-gray-700 z-10 px-2.5 rounded py-1.5 font-semibold bg-gray-100 "
              >
                {meta.more}{" "}
              </Link>
            ) : (
              <Link
                href={"/blog"}
                className="capitalize font-arabic border z-10 relative 
                after:content[''] after:absolute after:top-1/2 after:transform after:-translate-y-1/2 after:border-y-[18px] after:border-l-[30px] after:border-r-[0px] after:border-y-transparent after:-right-[30px]  
                before:content[''] before:absolute before:top-1/2 before:transform before:-translate-y-1/2 before:border-y-[18px] before:border-r-[30px] before:border-l-[0px] before:border-y-transparent before:-left-[30px]  border-orange-600 text-gray-50 text-md px-2.5 rounded-md py-1.5 font-semibold bg-orange-600 "
              >
                {meta.moreAr}{" "}
              </Link>
            )
          }
            <span className="h-[0.1rem] w-full bg-gray-300 dark:bg-gray-800 absolute z-0 top-4">
            </span>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
