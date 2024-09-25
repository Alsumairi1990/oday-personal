"use client";

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import { useLocale } from 'next-intl'; // If using next-intl
import { useEffect, useState } from 'react';
import { GrLanguage } from 'react-icons/gr';
import { IoCloseSharp } from 'react-icons/io5';
import Image from 'next/image'

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale(); // Get the current locale
  const [isMounted, setIsMounted] = useState(false);
  const [menuShow, setMenuShow] = useState(false);
  const arabicFlag = '/images/svg/sflag2.svg';
  const englishFlag = '/images/svg/enFlag.svg';

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const changeLocale = (newLocale: string) => {
    if (!isMounted) return; // Ensure this only runs after hydration
    // Construct the new URL by replacing the locale segment
    const segments = pathname.split('/');
    if (segments.length > 1) {
      segments[1] = newLocale; // Replace the current locale with the new one
    }
    const newPathname = segments.join('/');
    router.push(newPathname);
  };

  if (!isMounted) return null; 

  return (
    <>
    <button type='button' 
      onClick={()=> {setMenuShow(true)}}
    className="flex gap-x-1 items-center" >
      <span className="text-md text-gray-100 capitalize ">{locale}</span>
        <span className="p-1">
          <GrLanguage className='text-gray-50' />
        </span>
    </button>
  
    {menuShow && <div className='fixed h-full w-full left-0 top-0 z-50 flex items-center justify-center bg-[#00000073]'>
      <div className="w-4/12 flex flex-col bg-white rounded-md p-5 pt-3">
        <button type='button' className='flex'
        onClick={()=> setMenuShow(false)}
        >
          <span className="p-1 ">
          <IoCloseSharp className="text-gray-600 text-2xl font-semibold" />
          </span>
        </button>
        <div className="p-2 flex justify-center border-t pt-3 mt-2">
          <span className="text-gray-600 text-md font-semibold" >
            Choose Language
          </span>
        </div>
        <nav className='flex justify-center gap-x-5 p-4 px-6'>
          <button className={`flex-40 flex items-center py-1.5 inlineP-start-8 border rounded-3xl ${locale == 'ar'? 'border-orange-500 bg-orange-50 text-orange-600' : 'border-gray-300 bg-white text-gray-600'}  font-medium`} onClick={() => changeLocale('ar')}>
            <span className="flex items-center  bg-white border border-gray-300 p-0.5 rounded-full">
              <Image
              src={arabicFlag}
              width="30"
              height="30"
              alt='arabic flag'
              className=''
               >
              </Image>
            </span>
            <span className="p-1 inlineP-start-8">Arabic</span>
            </button>
         <button className={`flex-40 flex items-center py-1.5 inlineP-start-8 border rounded-3xl ${locale == 'en'? 'border-orange-500 bg-orange-50 text-orange-600' : 'border-gray-300 bg-white text-gray-600'} text-gray-600 font-medium`} onClick={() => changeLocale('en')}>
            <span className="fflex items-center  bg-white border border-gray-300 p-0.5 rounded-full">
              <Image
              src={englishFlag}
              width="30"
              height="30"
              alt='arabic flag'
               >
              </Image>
            </span>
            <span className="p-1 inlineP-start-8">English</span>
            </button>
        </nav>
       </div>
    </div>
    }
   
    </>
  );
}
