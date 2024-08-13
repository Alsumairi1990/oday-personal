'use client';
import { useState } from 'react';
import ProfileHeader from '../../_components/ProfileHeader';
import ProfileNav from '../../_utils/ProfileNav';
import React from 'react';
import Breadcrumb from '../../_utils/Breadcrumbs';
import { PageTitleProvider } from '../../_utils/PageTitleContext';


export default function EmployeeProfileLayout({ children, params }: { children: React.ReactNode, params: { id: string } }) {
  const [activePageTitle, setActivePageTitle] = useState('');

 

  return (
    <PageTitleProvider>
     <div className="w-11.7/12 mx-auto">
      
         <Breadcrumb id={params.id}  />
         
      <ProfileHeader id={params.id} /> 
      <ProfileNav id={params.id} />
      <main>{children}</main>
    </div>
    </PageTitleProvider>
    
  );
}
