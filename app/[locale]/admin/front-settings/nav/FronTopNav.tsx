// app/admin/setting/left-nav/display/page.tsx
'use client'
import React from 'react';
import { getMenusElementse2 } from '@/app/[locale]/admin/setting/left-nav/_actions/Action';
import { MenuWithAllModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithAllModels';
import TopNav from './TopNav';

interface Props {
  menusData: Record<number, MenuWithAllModels[]>;
}
const FrontTopNav = async ({menusData}:Props) => {
  // const menusData: Record<number, MenuWithAllModels[]> = await getMenusElementse2();
return <TopNav menusData={menusData} />;
};

export default FrontTopNav;
