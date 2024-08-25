'use client';
import { useEffect, useState } from "react";
import { usePageTitle } from "@/app/admin/employees-manage/employees/_utils/PageTitleContext";
import { ServicesWWorks } from "../../utils/ServicesWWorks";
import { getAllServicesWWorks } from "../../_serviceActions/ServiceActions";
import ServiceWorksArea from "../../utils/ServicesWorksArea";

const ServicesWorksPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [servicesWWorks, setServicesWWorks] = useState<ServicesWWorks[]>();
  const { title, setTitle } = usePageTitle();

  const getAllServicesWithWorks = async () => {
    try {
      setIsLoading(true);
      const catg = await getAllServicesWWorks();
      setServicesWWorks(catg);
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
        {servicesWWorks && 
          servicesWWorks.map((element) => (
            <ServiceWorksArea key={element.id} service={element} />
          ))
        }
      </div>
    </div>
  );
};

export default ServicesWorksPage;
