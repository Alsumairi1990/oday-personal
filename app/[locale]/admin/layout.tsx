
import React, { useState , useEffect} from 'react';
import NextTopLoader from 'nextjs-toploader';
import { MenuWithAllModels } from './setting/left-nav/_utils/MenuWithAllModels';
import TopNavAdmin from '@/app/_components/admin/nav/TopNavAdmin';
import AdminNav from '@/app/_components/admin/nav/AdminNav';
import { getMenusElementse } from './setting/left-nav/_actions/Action';

export default async function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const menusData: Record<number, MenuWithAllModels[]> = await getMenusElementse();



    return (


            <div className=" bg-gray-100" dir='ltr'>
               <TopNavAdmin  />
               <div className='flex'>
               <AdminNav menusData={menusData} />

                <div className="w-full  h-full">
                <NextTopLoader />
                {children}
                </div>
                </div>
            </div>


           


    )
  }
