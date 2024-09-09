
'use client'
import React, { useEffect } from 'react'
import TopNav from './TopNav'
import { useNavAdmin } from '../common/NavAdminContext';
function TopNavAdmin() {
    const handleResize = () => {
        const isMobile = window.innerWidth <= 768;
        setParentValue({ parentValue: !isMobile});
      };
      const { parentValue, setParentValue } = useNavAdmin();
      const handleChildClick = (newValue:boolean) => {
      setParentValue({ parentValue: newValue});
    };
    useEffect(() => {
      handleResize();
    }, []);
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      handleResize(); 
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  return (
    <TopNav handleClick={handleChildClick} />
  )
}

export default TopNavAdmin