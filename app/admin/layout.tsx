
import React, { useState , useEffect} from 'react';
import LeftNav from "../_components/admin/nav/LeftNav"
import TopNav from "../_components/admin/nav/TopNav"
import NextTopLoader from 'nextjs-toploader';
import { getMenusElementse } from './setting/left-nav/_actions/Action';
import { MenuWithAllModels } from './setting/left-nav/_utils/MenuWithAllModels';
import LeftNavServ from '../_components/admin/nav/LefNavServ';
import AdminNav from '../_components/admin/nav/AdminNav';
import TopNavAdmin from '../_components/admin/nav/TopNavAdmin';

export default async function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const menusData: Record<number, MenuWithAllModels[]> = await getMenusElementse();



    return (


            <div className=" bg-gray-100">
               <TopNavAdmin  />
               <div className='flex'>
               <AdminNav menusData={menusData} />;

                <div className="w-full  h-full">
                <NextTopLoader />
                {children}
                </div>
                </div>
            </div>


           


    )
  }
