'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
interface ServiceProps {
    image: string,
    name : string
  }
const ImagePost = ({image,name}: ServiceProps) => {
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <Image 
    src={image}
    height={isMobile ? 90 : 400}
    width={isMobile ? 90 : 400}
    alt={name}
    className='w-full h-full mx-auto  rtl:rounded-r-md'
    />
  );
};

export default ImagePost;