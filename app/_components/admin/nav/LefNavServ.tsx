// app/admin/setting/left-nav/display/page.tsx

import React from 'react';
import { getMenusElementse } from '@/app/admin/setting/left-nav/_actions/Action';
import { MenuWithAllModels } from '@/app/admin/setting/left-nav/_utils/MenuWithAllModels';
import LeftNav from './LeftNav';


const LeftNavServ = async () => {
  const menusData: Record<number, MenuWithAllModels[]> = await getMenusElementse();
  return <LeftNav menusData={menusData} />;
};

export default LeftNavServ;
