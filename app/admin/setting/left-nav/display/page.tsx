// app/admin/setting/left-nav/display/page.tsx

import React from 'react';
import { getMenusElementse } from '@/app/admin/setting/left-nav/_actions/Action';
import { MenuWithAllModels } from '@/app/admin/setting/left-nav/_utils/MenuWithAllModels';
import MenusDisplay from '../_components/MenuComp';

const MenuPage = async () => {
  const menusData: Record<number, MenuWithAllModels[]> = await getMenusElementse();
  return <MenusDisplay menusData={menusData} />;
};

export default MenuPage;
