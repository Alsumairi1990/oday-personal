'use client'
import React, { useEffect, useState } from 'react';
import { ElementWithSubElements, MenuWithAllModels } from '../_utils/MenuWithAllModels';
import { getMenusElements } from '../_actions/Action';


const MenusDisplay = () => {
    const[menusData , setMenusData] = useState<MenuWithAllModels[]>();
    const getMenuElements = async ()=> {
        try {
            const result = await getMenusElements();
            if(result) setMenusData(result);
        } catch (error) {
            
        }
    }
    useEffect(()=> {
        getMenuElements();
    },[])
  return (
  
        <div className='w-11/12 mx-auto'>
          {menusData && menusData.map((menuData) => (
            
            <MenuDisplay key={menuData.id} menuData={menuData} />
          ))}
        </div>
      );
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