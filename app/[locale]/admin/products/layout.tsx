'use client';
import { useState } from 'react';
import { PageTitleProvider } from '../employees-manage/employees/_utils/PageTitleContext';
import Breadcrumb from '../employees-manage/employees/_utils/Breadcrumbs';

export default function EmployeeProfileLayout({ children }: { children: React.ReactNode}) {
  const [activePageTitle, setActivePageTitle] = useState('');

 

  return (
    <PageTitleProvider>
     <div className="w-11.5/12 mt-2 mx-auto">
      
         <Breadcrumb  />
      <main>{children}</main>
    </div>
    </PageTitleProvider>
    
  );
}
