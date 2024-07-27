import Link from "next/link";
import WorkManage from "./_components/WorkManage";

const Serivce = () => {

    const imagePath1 = '/images/navbg.webp';

    return (
      <div className="p-2">
          <div className="text-gray-600 py-2 flex items-center mx-auto text-md w-11.8/12 bg-white border rounded-md border-gray-200 px-2 mb-4">
           <Link href="/admin/service">
           Our Works
           </Link>
           <span className="text-gtay-700 mx-2 inline-flex h-3 bg-gray-600 w-[1px]"></span>
           Manage
        </div>
        <WorkManage  />
      </div>
)
};
export default Serivce;