

import BlogManage from "@/app/_components/admin/blogs/BlogManage"

const BlogPage = () => {

    const imagePath1 = '/images/navbg.webp';

    return (
      <div className="p-2">
        <p className="text-gray-600 pt-3 mb-8">Blog Page</p>
        <BlogManage   />
      </div>
)
};
export default BlogPage;