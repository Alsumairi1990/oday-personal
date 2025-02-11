import Service from "@/app/_components/admin/service/ManageService";

const UserPage = () => {

    const imagePath1 = '/images/navbg.webp';

    return (
      <div className="p-2">
        <div className="px-3 py-2 bg-white border border-gray-200 mb-2 rounded-md">
           <p className="text-gray-600  mb-0 max-sm:hidden">Profile Page</p>
        </div>        <Service  />
      </div>
)
};
export default UserPage;