'use client';
import { useEffect, useState } from "react";
import { usePageTitle } from "@/app/[locale]/admin/employees-manage/employees/_utils/PageTitleContext";
import { ServicesWWorks } from "../../utils/ServicesWWorks";
import ServiceWorksArea from "../../utils/ServicesWorksArea";
import { getCategoriesWServices } from "../../_serviceActions/ServiceActions";
import { CategoryWithService } from "../../utils/CategoryWithService";
import ServiceCategoryPanel1 from "@/app/utils/ServiceCategoryPanel";

const CategorySerivcePage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>();
  const [categoryWservices, setCategoryWservices] = useState<CategoryWithService[]>();
  const { title, setTitle } = usePageTitle();

 
const getAllCategoriesWServices = async () =>{
    try {
        setLoading(true);
        const catg = await getCategoriesWServices();
       if(catg) setCategoryWservices(catg);
       setLoading(false)
    } catch (error:any) {
        setLoading(false);
        setError(error);
    }
}

  useEffect(() => {
    setTitle({ title: 'Categories' });
    getAllCategoriesWServices();
  }, []);

  return (
    <div className="bg-white p-4 rounded-md shadow-md border border-gray-200">
      <div className="grid grid-cols-2 mb-6 sm:grid-cols-4 gap-4 ">
        {categoryWservices && 
          categoryWservices.map(element => 
            <ServiceCategoryPanel1 category={element} />
          )
        }
    </div>
     
    </div>
  );
};

export default CategorySerivcePage;
