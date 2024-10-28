// app/admin/setting/left-nav/display/page.tsx
'use client'
import React from 'react';
import { MenuWithAllModels } from '@/app/[locale]/admin/setting/left-nav/_utils/MenuWithAllModels';
import TopNav from './TopNav';

interface Props {
  menusData: Record<number, MenuWithAllModels[]>;
}
const FrontTopNav =  ({menusData}:Props) => {
return <TopNav menusData={menusData} />;
};

export default FrontTopNav;
