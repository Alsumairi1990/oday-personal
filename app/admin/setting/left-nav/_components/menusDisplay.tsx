'use client'
import React, { useEffect, useState } from 'react';
import { ElementWithSubElements, MenuWithAllModels } from '../_utils/MenuWithAllModels';
import { getMenusElements, getMenusElementse } from '../_actions/Action';


const MenusDisplay = () => {
  const [menusData, setMenusData] = useState<Record<number, MenuWithAllModels[]> | undefined>(undefined);
    const getMenuElements = async ()=> {
        try {
            const result = await getMenusElementse();
            if(result) setMenusData(result);
        } catch (error) {
            
        }
    }
    useEffect(()=> {
        getMenuElements();
    },[])
 
    return (
      <div>
  {menusData ? (
    Object.entries(menusData).map(([parentId, menus]) => {
      // Find the parent menu for the current parentId
      const parentMenu = menus.length > 0 ? menus[0].menuParent : null;

      return (
        <div key={parentId}>
          <h2 className='text-sm font-semibold'>{parentMenu?.title || 'Unknown Parent'}</h2>
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
                            {element.subElements && element.subElements.map(subElement => (
                              <li key={subElement.id}>
                                <div>
                                  <span className='text-gray-800 text-sm'>{subElement.title}</span>
                                  {/* You can add more details if needed */}
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
    })
  ) : (
    <p>Loading...</p>
  )}
</div>

    )
    
    };
    
    type MenuProps = {
      menuData: MenuWithAllModels;
    };
    
    const MenuDisplay: React.FC<MenuProps> = ({ menuData }) => {
      return (
        <div>
          {/* Display the Parent Menu */}
          <h1>{menuData.menuParent?.title}</h1>
          <p>{menuData.menuParent?.description}</p>
    
          {/* Display Admin Menu Elements */}
          <div className='pl-3'>
            <h2>{menuData.title}</h2>
            <p>{menuData.description}</p>
    
            <ul className='pl-3'>
              {menuData.elements.map((element) => (
                <ElementDisplay key={element.id} element={element} />
              ))}
            </ul>
          </div>
        </div>
      );
    };
    
    // Recursive component to display nested elements
    type ElementProps = {
      element: ElementWithSubElements;
    };
    
    const ElementDisplay: React.FC<ElementProps> = ({ element }) => {
      return (
        <li>
          <h3>{element.title}</h3>
          <p>{element.description}</p>
    
          {element.subElements && element.subElements.length > 0 && (
            <ul className='pl-3'>
              {element.subElements.map((subElement) => (
                <ElementDisplay key={subElement.id} element={subElement} />
              ))}
            </ul>
          )}
        </li>
      );
    };
    
    export default MenusDisplay;