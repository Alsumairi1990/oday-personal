
import { PageSection, Testimonial } from '@prisma/client';
import { getLocale, getMessages } from 'next-intl/server';
import React from 'react';
interface Props {
    testimonials : Testimonial[],
    meta : PageSection
}
const Testimonials = async ({testimonials, meta}:Props) => {
    const locale = await getLocale();
  const messages = await getMessages({ locale });
  return (
    <div className=" w-full bg-gray-100 dark:bg-[#111]">
        <div className="w-11/12 relative bg-gray-100 sm:dark:bg-[#161616] dark:bg-[#111] sm:dark:border sm:dark:border-gray-800 mx-auto py-8 grid sm:grid-cols-4 ">
            <div className="p-4  flex flex-col justify-center max-sm:bg-white max-sm:dark:bg-[#111] max-sm:border max-sm:border-gray-300 max-sm:dark:border-gray-800  max-sm:rounded">
                <span className="-top-8 absolute bg-violet-600 left-2 p-5 rounded-full">
                   <svg fill="#fff" width="28px" height="28px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    </defs><title>quotes</title>
                    <path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"/>
                    <path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"/>
                    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1 fill-none" width="32" height="32"/>
                    </svg>
                </span>
                { locale === 'en' ? ( 
                    <>
                    <h2 className="text-2xl dark:text-gray-100 font-semibold mb-4">{meta.title}</h2>
                <p className="text-sm text-gray-600 dark:text-gray-200 line-clamp-6 leading-6">{meta.desc}</p>
                </>
                )
                : (
                    <>
                  <h2 className="text-2xl font-arabic dark:text-gray-100 font-semibold mb-4">{meta.titleAr}</h2>
                  <p className="text-sm text-gray-600 font-arabic dark:text-gray-200 line-clamp-6 leading-6">{meta.descAr}</p>
                   </>
                   )
                 }
                
                <div className="text-sm  text-gray-100 mt-6 flex items-center rounded">
                    {locale == 'en' ? (
                    <>
                    <span className="border rounded px-2 bg-orange-500 dark:bg-transparent text-white border-white dark:border-gray-400 py-1 capitalize">{meta.more}</span>
                    <span className="">
                    <svg fill="#fff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
                            viewBox="0 0 511.999 511.999" >
                        <g>
                            <g>
                                <g>
                                    <path d="M508.483,249.1L320.75,112.567c-1.485-1.084-3.251-1.63-5.018-1.63c-1.323,0-2.645,0.307-3.874,0.93
                                        c-2.859,1.451-4.659,4.395-4.659,7.603v85.333h-93.867c-4.719,0-8.533,3.814-8.533,8.533v85.333c0,4.71,3.814,8.533,8.533,8.533
                                        h93.867v85.333c0,3.208,1.801,6.144,4.659,7.595c2.85,1.459,6.289,1.186,8.892-0.7l187.733-136.533
                                        c2.21-1.604,3.516-4.164,3.516-6.895C511.999,253.264,510.694,250.704,508.483,249.1z"/>
                                    <path d="M162.133,204.8c-14.114,0-25.6,11.486-25.6,25.6v51.2c0,14.114,11.486,25.6,25.6,25.6s25.6-11.486,25.6-25.6v-51.2
                                        C187.733,216.286,176.247,204.8,162.133,204.8z"/>
                                    <path d="M93.867,204.8c-14.114,0-25.6,11.486-25.6,25.6v51.2c0,14.114,11.486,25.6,25.6,25.6s25.6-11.486,25.6-25.6v-51.2
                                        C119.467,216.286,107.981,204.8,93.867,204.8z"/>
                                    <path d="M25.6,204.8C11.486,204.8,0,216.286,0,230.4v51.2c0,14.114,11.486,25.6,25.6,25.6s25.6-11.486,25.6-25.6v-51.2
                                        C51.2,216.286,39.714,204.8,25.6,204.8z"/>
                                </g>
                            </g>
                        </g>
                        </svg>
                    </span>
                    </>
                    ):(
                        <>
                         <span className="border rounded px-2 bg-orange-500 dark:bg-transparent text-white border-white dark:border-gray-400 py-1 font-arabic">{meta.moreAr}</span>
                    <span className="">
                    <svg fill="#fff" height="20px" width="20px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  
                            viewBox="0 0 511.999 511.999" >
                        <g>
                            <g>
                                <g>
                                    <path d="M508.483,249.1L320.75,112.567c-1.485-1.084-3.251-1.63-5.018-1.63c-1.323,0-2.645,0.307-3.874,0.93
                                        c-2.859,1.451-4.659,4.395-4.659,7.603v85.333h-93.867c-4.719,0-8.533,3.814-8.533,8.533v85.333c0,4.71,3.814,8.533,8.533,8.533
                                        h93.867v85.333c0,3.208,1.801,6.144,4.659,7.595c2.85,1.459,6.289,1.186,8.892-0.7l187.733-136.533
                                        c2.21-1.604,3.516-4.164,3.516-6.895C511.999,253.264,510.694,250.704,508.483,249.1z"/>
                                    <path d="M162.133,204.8c-14.114,0-25.6,11.486-25.6,25.6v51.2c0,14.114,11.486,25.6,25.6,25.6s25.6-11.486,25.6-25.6v-51.2
                                        C187.733,216.286,176.247,204.8,162.133,204.8z"/>
                                    <path d="M93.867,204.8c-14.114,0-25.6,11.486-25.6,25.6v51.2c0,14.114,11.486,25.6,25.6,25.6s25.6-11.486,25.6-25.6v-51.2
                                        C119.467,216.286,107.981,204.8,93.867,204.8z"/>
                                    <path d="M25.6,204.8C11.486,204.8,0,216.286,0,230.4v51.2c0,14.114,11.486,25.6,25.6,25.6s25.6-11.486,25.6-25.6v-51.2
                                        C51.2,216.286,39.714,204.8,25.6,204.8z"/>
                                </g>
                            </g>
                        </g>
                        </svg>
                    </span>
                        </>
                    )}
                </div>
            </div>
            <div className="sm:pl-6 max-sm:mt-4 sm:pr-2 sm:col-span-3 ">
              <div className="grid sm:grid-cols-3 gap-6">
                {testimonials && testimonials.length > 0 &&
                   testimonials.map((testi) => (

                  <div className="flex flex-col rounded-md border border-gray-300 shadow-xl dark:shadow-0 dark:border-gray-800">
                        <div className="py-4 px-2 rounded-t-md bg-white dark:bg-[#161616]">
                            <div className=""></div>
                            <div className="mb-6 relative">
                            <span className="inline-block border border-orange-500 bg-orange-500 dark:bg-transparent dark:border-violet-600 bg-violet-6080 left-2 p-1.5 mb-2 rounded-full">
                                <svg fill="#fff" width="22px" height="22px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                    </defs><title>quotes</title>
                                    <path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"/>
                                    <path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"/>
                                    <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1 fill-none" width="32" height="32"/>
                                    </svg>
                                </span>
                                {locale =='en' ?  <p className="text-sm line-clamp-[10] leading-6 dark:text-gray-200">{testi.content}</p>
                                : <p className="text-sm leading-6 font-arabic line-clamp-[10] dark:text-gray-200">{testi.contentAr}</p>
                                 }
                            </div>
                        </div>
                        <div className="h-24 relative flex flex-col rounded-md justify-end items-center bg-violet-600">
                            <div className="w-14 bg-white border border-gray-300 dark:border-transparent p-0.5 rounded-full absolute -top-6">
                                <img className='w-full rounded-full max-w-full' src={`${testi.image}`} alt="" />
                            </div>
                            {locale == 'en' ? (<div className="p-2 text-center" >
                                <h2 className="text-base  leading-4 font-semibold text-gray-100 mb-0.5">Ahmed Fuad </h2> 
                                <p className="text-[13px] font-semibold text-gray-300 my-0">{testi.title}</p>
                            </div>)
                            :
                                (<div className="p-2 text-center" >
                                    <h2 className="text-base  leading-4 font-semibold text-gray-100 mb-0.5">Ahmed Fuad </h2> 
                                    <p className="text-[13px] font-semibold text-gray-300 font-arabic my-0">{testi.titleAr}</p>
                                </div>
                            )
                            }
                        </div>
                    </div>

                   ))

                }

               

               

                {/* <div className="flex flex-col rounded-md border border-gray-800">
                    <div className="py-4 px-2 rounded-t-md  bg-black-100">
                        <div className=""></div>
                        <div className="mb-6 relative">
                           <span className="inline-block border border-violet-600 bg-violet-6080 left-2 p-1.5 mb-2 rounded-full">
                            <svg fill="#fff" width="22px" height="22px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                </defs><title>quotes</title>
                                <path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"/>
                                <path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"/>
                                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1 fill-none" width="32" height="32"/>
                                </svg>
                            </span>
                            <p className="text-sm leading-6 dark:text-gray-200">
                            Testimonials. 2,226 inspirational designs, illustrations, action designs, Information development in predefond and inspirational designs and graphic elements from the world's best designers. Want more inspiration?
                            </p>
                        </div>
                    </div>
                    <div className="h-24 relative flex flex-col justify-end items-center bg-violet-600">
                        <div className="w-14 bg-white p-0.5 rounded-full absolute -top-6">
                            <img className='w-full rounded-full max-w-full' src={`${imagePath5}`} alt="" />
                        </div>
                        <div className="p-2 text-center" >
                            <h2 className="text-base  leading-4 font-semibold text-gray-100 mb-0.5">Saleem Fahed</h2> 
                            <p className="text-[13px] font-semibold text-gray-300 my-0">Marketing Desinger at Soft Engin</p>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col rounded-md border border-gray-800">
                    <div className="py-4 px-2 rounded-t-md  bg-black-100">
                        <div className=""></div>
                        <div className="mb-6 relative">
                           <span className="inline-block border border-violet-600 bg-violet-6080 left-2 p-1.5 mb-2 rounded-full">
                            <svg fill="#fff" width="22px" height="22px" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                </defs><title>quotes</title>
                                <path d="M12,15H6.11A9,9,0,0,1,10,8.86l1.79-1.2L10.69,6,8.9,7.2A11,11,0,0,0,4,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,12,15Z"/>
                                <path d="M26,15H20.11A9,9,0,0,1,24,8.86l1.79-1.2L24.7,6,22.9,7.2A11,11,0,0,0,18,16.35V23a2,2,0,0,0,2,2h6a2,2,0,0,0,2-2V17A2,2,0,0,0,26,15Z"/>
                                <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1 fill-none" width="32" height="32"/>
                                </svg>
                            </span>
                            <p className="text-sm leading-6 dark:text-gray-200">
                            Testimonials. 2,226 inspirational designs, illustrations, action designs, Information development in predefond and inspirational designs and graphic elements from the world's best designers. Want more inspiration?
                            </p>
                        </div>
                    </div>
                    <div className="h-24 relative flex flex-col justify-end items-center bg-violet-600">
                        <div className="w-14 bg-white p-0.5 rounded-full absolute -top-6">
                            <img className='w-full rounded-full max-w-full' src={`${imagePath4}`} alt="" />
                        </div>
                        <div className="p-2 text-center" >
                            <h2 className="text-base  leading-4 font-semibold text-gray-100 mb-0.5">JAmeel Saleh</h2> 
                            <p className="text-[13px] font-semibold text-gray-300 my-0">Manager Assitant at Rani Feelmony </p>
                        </div>
                    </div>
                </div> */}


              </div>
              <div className="flex mt-4">
                <div className="p2 flex ">
                <span className="bg-gray-200 flex items-center px-2 py-1 mr-1  rounded">
                        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 9L8 12M8 12L11 15M8 12H16M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    <span className="bg-gray-200 flex items-center px-2 py-1 rounded">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 15L16 12M16 12L13 9M16 12H8M7.2 20H16.8C17.9201 20 18.4802 20 18.908 19.782C19.2843 19.5903 19.5903 19.2843 19.782 18.908C20 18.4802 20 17.9201 20 16.8V7.2C20 6.0799 20 5.51984 19.782 5.09202C19.5903 4.71569 19.2843 4.40973 18.908 4.21799C18.4802 4 17.9201 4 16.8 4H7.2C6.0799 4 5.51984 4 5.09202 4.21799C4.71569 4.40973 4.40973 4.71569 4.21799 5.09202C4 5.51984 4 6.07989 4 7.2V16.8C4 17.9201 4 18.4802 4.21799 18.908C4.40973 19.2843 4.71569 19.5903 5.09202 19.782C5.51984 20 6.07989 20 7.2 20Z" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </span>
                    
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Testimonials;