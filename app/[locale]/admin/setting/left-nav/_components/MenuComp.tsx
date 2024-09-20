// components/MenusDisplay.tsx
'use client'
import React from 'react';
import { ElementWithSubElements, MenuWithAllModels } from '../_utils/MenuWithAllModels';

interface MenusDisplayProps {
  menusData: Record<number, MenuWithAllModels[]>;
}

const MenusDisplay: React.FC<MenusDisplayProps> = ({ menusData }) => {
  return (
    <div className='relative'>
      {Object.entries(menusData).map(([parentId, menus]) => {
        // Find the parent menu for the current parentId
        const parentMenu = menus.length > 0 ? menus[0].menuParent : null;

        return (
          <div key={parentId}>
            <h2 className='text-sm font-semibold text-gray-800'>{parentMenu?.title || 'Unknown Parent'}</h2>
            <ul className='pl-3'>
              {menus.map(menu => (
                <li key={menu.id}>
                  <div>
                    <span className='text-gray-800 text-sm'>{menu.title}</span>
                    <ul className='pl-4'>
                      {menu.elements.map(element => (
                        <li key={element.id}>
                          <div>
                            <span className='text-gray-800 text-sm'>{element.title}</span>
                            <ul className='pl-4'>
                              {element.subElements &&
                                element.subElements.map(subElement => (
                                  <li key={subElement.id}>
                                    <div>
                                      <span className='text-gray-800 text-sm'>{subElement.title}</span>
                                    </div>
                                  </li>
                                ))}
                            </ul>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default MenusDisplay;
