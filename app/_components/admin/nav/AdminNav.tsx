'use client'
import React, { useEffect, useState } from 'react'
import { MenuWithAllModels } from '@/app/admin/setting/left-nav/_utils/MenuWithAllModels';
import LeftNav from './LeftNav';
import { useNavAdmin } from '../common/NavAdminContext';
interface MenusDisplayProps {
    menusData: Record<number, MenuWithAllModels[]>;
  }
  const AdminNav:React.FC<MenusDisplayProps> = ({ menusData }) => {
  
    const { parentValue, setParentValue } = useNavAdmin();
  return (
    <>
      <div className=" bg-gray-100">
        

              (<div id="leftAdmin" className="p-1 m  sm:min-w-[240px] left-admin">
                    <LeftNav menusData={menusData} />
                  </div> )
                
      </div>          
    </>
  )
}

export default AdminNav