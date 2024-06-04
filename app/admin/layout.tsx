




'use client'


import React, { useState , useEffect} from 'react';

import LeftNav from "../_components/admin/nav/LeftNav"
import TopNav from "../_components/admin/nav/TopNav"
import Footerk from "../_components/Footer"



export default function signupLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    const [parentValue, setParentValue] = useState(true);

    const handleChildClick = (newValue:boolean) => {
    setParentValue(newValue);
  };
  // useEffect(() => {
  //   const handleResize = () => {
  //     const isMobile = window.innerWidth <= 768; 
  //     setParentValue(!isMobile);
  //   };
  //   window.addEventListener('resize', handleResize);
  //   return () => window.removeEventListener('resize', handleResize);
  // }, []);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      setParentValue(!isMobile);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 
    return () => window.removeEventListener('resize', handleResize);
  }, []);



    return (


            <div className="h-full bg-gray-100">

                <TopNav handleClick={handleChildClick} />

                <div className="flex">
                  {parentValue && (<div id="leftAdmin" className="p-1 m  sm:min-w-[240px] left-admin">
                     <LeftNav />
                  </div> )
                }


                <div className="w-full  h-full">
                {children}
                </div>
            </div>


            </div>


    )
  }
