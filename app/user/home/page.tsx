import Service from "@/app/_components/admin/service/ManageService";

const HomePage = () => {

    const imagePath1 = '/images/navbg.webp';

    return (
      <div className="p-2">
        <p className="text-gray-600 pt-3 mb-8">User Page</p>
        <Service  />
      </div>
)
};
export default HomePage;