'use client';
import { useEffect, useState } from "react";
import { usePageTitle } from "@/app/[locale]/admin/employees-manage/employees/_utils/PageTitleContext";
import { getServicesWithModels, getServiceWithWorksById } from "../../../_serviceActions/ServiceActions";
import { ServiceWithModels } from "../../../utils/ServiceWithModels";
import { ServiceWithWorks } from "../../../utils/ServiceWithWorks";
import Image from 'next/image'
import { MdOutlineUpdate } from "react-icons/md";
interface Props {
    params: {
        id: string;
    };
}
const ServicesWorksPage = ({params}:Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [servicesWWorks, setServicesWWorks] = useState<ServiceWithWorks>();
  const { title, setTitle } = usePageTitle();

  const getAllServicesWithWorks = async () => {
    try {
      setIsLoading(true);
      const catg = await getServiceWithWorksById(Number(params.id));
      if(catg) setServicesWWorks(catg);
      setIsLoading(false);
    } catch (error: any) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    setTitle({ title: 'Works' });
    getAllServicesWithWorks();
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md border border-gray-200">
      <div className="grid grid-cols-2 mb-6 sm:grid-cols-4 gap-4 ">
      {servicesWWorks && servicesWWorks.works.length > 0 && 
          servicesWWorks.works.map((element:any) => (
            <div key={element.name} className="bg-white mb-8 rounded-t-lg shadow-md rounded-b-lg">
              <div className="h-36 overflow-hidden">
                {element.image && (
                  <Image
                    src={element.image}
                    height={300}
                    width={300}
                    alt={element.name}
                    className="w-full max-w-full h-full rounded-t-lg"
                  />
                )}
              </div>
              <div className="my-3 pb-4 px-3">
                <div className="py-1 mb-1 flex gap-x-2">
                  <span className="flex-15 rounded-md h-1.5 bg-indigo-500"></span>
                  <span className="flex-15 rounded-md h-1.5 bg-orange-500"></span>
                </div>
                <p className="text-md w-7/12">{element.title}</p>
                <div className="flex items-center mt-2 gap-x-2">
                  <div className="flex gap-x-1 text-gray-100 rounded-md bg-green-600 px-1 pr-2 py-[3px]">
                    <span className="">
                      <MdOutlineUpdate className="text-white text-md" />
                    </span>
                    <span className="text-xs font-medium">
                      {new Date(element.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                  </div>
                  <div className="flex gap-x-1 text-gray-600 rounded-md bg-gray-200 px-1 pr-2 py-[3px]">
                    <span className="text-xs font-medium">Price :</span>
                  </div>
                  <div className="flex ml-auto gap-x-1 w-7 h-7 justify-center items-center text-gray-600 rounded-full bg-gray-200 px-1.5 py-[3px]">
                    {element.icon && (
                      <Image
                        src={element.icon}
                        height={50}
                        width={50}
                        alt={element.name}
                        className="w-full max-w-full"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default ServicesWorksPage;
