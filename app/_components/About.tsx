
import { AboutUsSection } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
import React from 'react';

interface Props {
  aboutUS : AboutUsSection
}
const About = async ({aboutUS}:Props) => {
    const imagePath = '/images/sect.png'
    const locale = await getLocale();
  const messages = await getMessages({ locale });
  return (
    <div className="bg-[#111] p-4 mt-16  ">
        <div className="grid grid-cols sm:grid-cols-3 mx-auto w-11/12 rounded-md bg-[#161616] border border-[#522b58] p-8">
            <div className="">
                {aboutUS && aboutUS.image && <img className='w-full rounded-md' src={`${aboutUS.image}`} alt="" />}
            </div>
            <div className="sm:col-span-2 flex flex-col justify-center items-start sm:pl-14 sm:rtl:pl-3 sm:rtl:pr-14 ">
                <div className="flex items-center text-base text-gray-300 mb-4">
                     { locale == 'en' ? <span className="text-sm font-arabic uppercase">{aboutUS.topTitle}</span> 
                     : <span className="text-sm uppercase font-arabic">{aboutUS.topTitlAr}</span>
                     }
                     <span className="ml-2">
                     <svg  width="22px" height="22px" viewBox="0 0 24 24" id="right-arrow" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" className="icon flat-color fill-orange-500"><path id="primary" d="M21.71,11.29l-3-3a1,1,0,0,0-1.42,1.42L18.59,11H3a1,1,0,0,0,0,2H18.59l-1.3,1.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l3-3A1,1,0,0,0,21.71,11.29Z" className='fill-fuchsia-500'></path></svg>
                     </span>
                </div>
                {locale == 'en' ?
                (<>
                <h2 className="text-3xl text-gray-100 font-bold leading-10">{aboutUS.title}</h2>
                <p className="text-sm text-gray-400 mt-6 sm:mb-10 leading-7"> {aboutUS.desc}</p>
                </>):
                (
                  <>
                  <h2 className="text-3xl text-gray-100 font-bold font-arabic leading-10">{aboutUS.titleAr}</h2>
                  <p className="text-sm text-gray-400 mt-6 sm:mb-10 font-arabic font-semibold leading-7">{aboutUS.descAr} </p>
                  </>
                )}
                
                <div className="mt-4 flex items-center bg-[#00ba35] rounded-md px-1.5 py-1">
                    { locale == 'en' ? <span className="text-white text-md">{aboutUS.more}</span>
                    : <span className="text-white text-md  font-arabic">{aboutUS.moreAr}</span>
                    }
                    <span className="ml-2">
                    <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 512 512" >
                      <path fill="#FFFFFF" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
                      <path fill="#8AD5DD" d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                        M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"/>
                      <polygon fill="#2D2D2D" points="214.656,95.936 378.016,256 214.656,416.064 165.856,366.096 278.208,256 165.856,145.904 
                        "/>
                      </svg>
                    </span>
                </div>

            </div>
        </div>

    </div>
  );
};

export default About;