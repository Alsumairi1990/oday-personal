'use client'
import React, { useState } from 'react';
import { CgDribbble } from "react-icons/cg";
import { CgTikcode } from "react-icons/cg";
import { CgTwilio } from "react-icons/cg";
import { MdOutlineManageSearch } from "react-icons/md";
import {useEffect} from 'react'
import { Category, Service } from '@prisma/client';
import { AbstractIntlMessages, useTranslations } from 'next-intl';
import Link from 'next/link';

interface Props {
    services : Service[],
    categories : Category[],
    locale : String,
    messages : AbstractIntlMessages,
 }
const PanelSearch = ({services,categories,locale,messages}:Props) => {
    const t = useTranslations('SearchPanel'); 
    const [categoriesData, setCategoriesData] = useState<Category[]>([]); 
    const [serviceType, setServiceType] = useState<string>(''); 
    const [serviceTypeSlug, setServiceTypeSlug] = useState<string>(''); 
    const [selectedCategory, setSelectedCategory] = useState<string>(''); 
    const [selectedCategorySlug, setSelectedCategorySlug] = useState<string>(''); 
    const [selectedService, setSelectedService] = useState<string>(''); 
    const [servicesData, setServicesData] = useState<{name:string,nameAr:string}[]>([]); 
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const servicePlacholder = (messages as any).SearchPanel.servicePlacholder;

    useEffect(() => {
        // if (typeof document === 'undefined') return;
        const handleClickOutsidr = (event:any) => {
         const menus = document.getElementsByClassName('log-menu1');
         if (event.target.closest('.log-menu1') !== null) return;
          if (event.target.closest('.menu-btn ') !== null) {
            const prnt = event.target.closest('.menu-pr');
            const menu = prnt.querySelector('.log-menu1');
            if(menu !== null && menu.classList.contains('hidden')){
              for (let i = 0; i < menus.length; i++) {
                menus[i].classList.add('hidden');
              }
              menu.classList.remove('hidden');
            }
            else if(menu && !menu.classList.contains('hidden')){
              menu.classList.add('hidden');
            }
        }
        else if (event.target.closest('.login-menu ') !== null) return;
        else {
        for (let i = 0; i < menus.length; i++) {
                menus[i].classList.add('hidden');
                }
        }
        };
        {document && document.addEventListener('click', handleClickOutsidr);}
        return () => {
          {document && document.removeEventListener('click', handleClickOutsidr);}
        };
      });

      

      const setType = (type:string,slug:string) => {
        setServiceType(type);
        setServiceTypeSlug(slug);
        fetchCategoryData(slug);
        
      }
    const fetchCategoryData = async (slug:string) => {
            setLoading(true);
            try {
              const response = await fetch(`/api/front/categories/search/main-panel/${slug}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              if (!response.ok) {
                throw new Error('Failed to fetch category data');
              }
              const data = await response.json(); 
              const categoryD:Category[] = data; 
              setCategoriesData(categoryD);
              setLoading(false);
            } catch (err) {
            }
          };

        const fetchServiceData = async (slug:string) => {
            setLoading(true);
            try {
              const response = await fetch(`/api/front/service/categories/${slug}`, {
                method: 'GET',
                headers: {
                  'Content-Type': 'application/json',
                },
              });
              if (!response.ok) {
                throw new Error('Failed to fetch category data');
              }
              const data = await response.json(); 
              const services:{name:string,nameAr:string}[] = data; 
              setServicesData(services);
              setLoading(false);
            } catch (err) {
            }
          };
       useEffect(() => {
            setCategoriesData(categories);
             }, []);

      const searchInvoke = (slug:string,name:Category) => {
            
            {locale ==='en' ? setSelectedCategory(name.name) : setSelectedCategory(name.nameAr!)};
            setSelectedCategorySlug(slug)
            fetchServiceData(slug);
           
          }
      const findService = (slug:string,name:string) => {
        alert(slug);
        {locale === 'en' ? setSelectedService(slug) : setSelectedService(name)}
        setSearchTerm(name);
      }
      const sendSearch = ()=> {
        alert("service"+selectedService);
      alert("service"+selectedCategory);

      }
  return (
    <div className="w-full sm:bg-white rounded-xl ">
   <div  className="search-top p-0">
      <div  className="grid sm:grid-cols-25/25/40/10 max-sm:gap-4 search-row items-center rounded">
         <div  className="p-1">
            <div  className="menu-pr ran-c flex relative py-[3px] bg-white rounded-lg search-otp-rnk">
               <div  className="ltr:pl-2.5 rtl:pr-2.5 ltr:pr-1 rtl:pl-1 self-end">
                 <span className="flex w-5 items-center h-5">
                  <CgDribbble className='text-sky-800 text-lg' />
                 </span>
               </div>
               <div  className="menu-btn rnk-opt-btn  pl-[5px] flex flex-col py-1 h-[50px] sm:ltr:border-r sm:ltr:border-r-gray-300 sm:rtl:border-l sm:rtl:border-l-gray-300 w-full">
                  <div  className="flex-22">
                     <div className="">
                     <span className="font-bold text-gray-700 text-xs rtl:font-arabic uppercase">
                          {t('searchType')}
                        </span>
                   

                      </div>
                 </div>
                  <div  className="btn-trk flex items-end flex-70 pb-[6px]">
                     <div  className="actv-slc flex flex-nowrap items-center cursor-pointer">
                     {!serviceType ? (
                       <span  className="text-sm text-gray-400 rtl:font-arabic ">{t('typePlaceholder')} ...</span>

                      ) : (
                        <span  className="text-sm text-gray-400 rtl:font-arabic ">
                        {locale === 'en' ? (
                            <>{serviceType}</>
                          ) : (
                            <>{serviceType}</>
                          )}
                        </span>
                      )}                    
                        </div>


                     <span  className="ml-auto mr-[15px] text-xs text-gray-500"><i  className="fas fa-chevron-down"></i></span>
                  </div>
               </div>
              <div id="dropdownRadioHelper" className="drop-menu log-menu1 hidden !z-50 max-h-56  overflow-y-auto absolute  top-16 sm:left-0 bg-white divide-y border border-gray-200 w-full divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioHelperButton">
                                {locale == "en" ? 
                                <>
                                <li >
                                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id=""
                                                onClick={()=> {setType('product','product')}}
                                                name="helper-radio"
                                                type="radio"
                                                value={t('typeProduct')} 
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                            <label htmlFor={t('typeProduct')}  className="font-medium  text-gray-900 dark:text-gray-300">
                                                <div>{t('typeProduct')} </div>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li >
                                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id=""
                                                onClick={()=> {setType('service','service')}}
                                                name="helper-radio"
                                                type="radio"
                                                value={t('typeService')} 
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                            <label htmlFor={t('typeService')}  className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{t('typeService')} </div>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                </>
                                :
                                <>
                                <li >
                                 <div className="flex p-2 rounded hover:bg-gray-100 border-b  font-arabic dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="product"
                                                onClick={()=> {setType('منتجات','product')}}
                                                name="product"
                                                type="radio"
                                                value={t('typeProduct')} 
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                            <label htmlFor={t('typeProduct')}  className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{t('typeProduct')} </div>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                                <li >
                                 <div className="flex p-2 rounded hover:bg-gray-100 font-arabic dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="service"
                                                onClick={()=> {setType('خدمات','service')}}
                                                name="product"
                                                type="radio"
                                                
                                                value={t('typeServiceAr')} 
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                            <label htmlFor={t('typeServiceAr')}  className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{t('typeService')} </div>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            </>
                          }
                            
                        </ul>
                    </div>
               </div>
            {/* </div> */}
         </div>
         <div  className="flex-100 relative max-w-full p-1">
            <div  className="menu-pr flex py-[3px] bg-white rounded-lg search-otp-rnk">
               <div  className="ltr:pl-2.5 rtl:pr-2.5 ltr:pr-1 rtl:pl-1 self-end">
                 <span className="flex w-5 items-center h-5">
                  <CgTikcode className='text-sky-800 text-lg' />
                 </span>
               </div>
               <div  className="menu-btn rnk-opt-btn pl-[5px] flex flex-col py-1 h-[50px] w-full sm:ltr:border-r sm:ltr:border-r-gray-300 sm:rtl:border-l sm:rtl:border-l-gray-300">
                  <div  className="flex-22">
                     <div  className="ext-left"><span  className="font-bold text-gray-700 text-xs uppercase rtl:font-arabic">{t('category')} </span></div>
                  </div>
                  <div  id="" className="btn-rk78 flex items-end flex-70 pb-[7px]">
                     <div  className="actv-slc flex flex-nowrap items-center  cursor-pointer">
                     {!selectedCategory ? (
                       <span  className="text-sm text-gray-400 rtl:font-arabic ">{t('categoryPlaceholder')} ...</span>

                      ) : (
                        <span  className="text-sm text-gray-400 rtl:font-arabic ">
                        {locale === 'en' ? (
                            <>{selectedCategory}</>
                          ) : (
                            <>{selectedCategory}</>
                          )}
                        </span>
                      )}
                     </div>
                     <span  className="ml-auto mr-[15px] text-xs text-gray-500"><i  className="fas fa-chevron-down"></i></span>
                  </div>
               </div>                 
               <div id="dropdownRadioHelper" className="drop-menu hidden log-menu1 !z-50 max-h-56  overflow-y-auto absolute  top-[4.2rem] sm:left-0 bg-white divide-y border border-gray-200 w-full divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioHelperButton">
                            {categoriesData && categoriesData.map((category, index) => (
                                <li key={index}>
                                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id={`helper-radio-${index}`}
                                                onClick={()=> {searchInvoke(category.slug,category)}}
                                                name="helper-radio"
                                                type="radio"
                                                value={category.name}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                           {locale == 'en' ? (
                                            <>
                                             <label htmlFor={`helper-radio-${index}`} className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{category.name}</div>
                                                <p id={`helper-radio-text-${index}`} className="text-xs font-normal text-gray-500 dark:text-gray-300 line-clamp-3">{category.description}</p>
                                            </label>
                                            </>):
                                            (
                                                <>
                                                 <label htmlFor={`helper-radio-${index}`} className="font-medium text-gray-900 font-arabic dark:text-gray-300 ">
                                                <div className='font-semibold text-gray-700'>{category.nameAr}</div>
                                                <p id={`helper-radio-text-${index}`} className="text-xs font-normal text-gray-500 dark:text-gray-300 line-clamp-3">{category.descriptionAr}</p>
                                            </label>
                                                </>
                                            )
                                            }
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
               {/* </div> */}
            </div>
         </div>
         <div  className="p-1 relative">
            <div  className="menu-pr flex py-[3px] bg-white rounded-lg search-otp-rnk">
               <div  className="ltr:pl-2.5 rtl:pr-2.5 ltr:pr-1 rtl:pl-1 self-end">
                 <span className="flex w-5 items-center h-5">
                  <CgTwilio className='text-sky-800 text-lg' />
                 </span>
               </div>
               <div  className="menu-btn rnk-opt-btn pl-[5px] flex flex-col py-1 h-[50px] w-full">
                  <div  className="flex-22">
                     <div  className=""><span  className="font-bold text-gray-700 text-xs uppercase rtl:font-arabic">{t('service')}</span></div>
                  </div>
                  <div  className="btn-uni flex items-end flex-70 pb-[6px]">
                     <div  className="actv-slc flex flex-nowrap items-center overflow-x-auto">
                        <div  className="text-md text-gray-400 font-nav rtl:font-arabic">
                          {/* <input  type="text" placeholder={servicePlacholder} 
                          className="bg-transparent outline-none text-gray-500 placeholder:text-gray-400"  />*/}
                          <input
                            type="text"
                            placeholder={servicePlacholder} 
                            value={searchTerm}
                            className="bg-transparent outline-none text-gray-500 placeholder:text-gray-400" 
                             onChange={(e) => setSearchTerm(e.target.value)}
                          />
                          </div>
                     </div>
                     <span  className="ml-auto mr-[5px] text-xs text-gray-500"><i  className="fas fa-chevron-down"></i></span>
                  </div>
               </div>
               <div id="dropdownRadioHelper" className="drop-menu hidden log-menu1 !z-50 max-h-56 min-h-28 overflow-y-auto absolute  top-[4.2rem] sm:left-0 bg-white divide-y border border-gray-200 w-full divide-gray-100 rounded-lg shadow  dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200 " aria-labelledby="dropdownRadioHelperButton">
                            {servicesData && servicesData.filter((element) =>
                                  element.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                  element.nameAr.toLowerCase().includes(searchTerm.toLowerCase())
                                )
                                .map((service, index) => (
                                <li key={index}>
                                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id={`helper-radio-${index}`}
                                                name="helper-radio"
                                                type="radio"
                                                 onClick={()=> {findService(service.name,service.nameAr)}}
                                                value={selectedService}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 outline-none border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                            {locale ==='en' ? <label htmlFor={`helper-radio-${index}`} className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{service.name}</div>
                                            </label>:
                                             <label htmlFor={`helper-radio-${index}`} className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{service.nameAr}</div>
                                             </label>
                                            }
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
            </div>
         </div>
          <div  className="search-btn max-sm:px-1 text-center sm:ltr:border-l sm:ltr:border-l-gray-300 sm:rtl:border-r sm:rtl:border-r-gray-300 ">
            <div className="inline-block max-sm:bg-white  rounded-xl max-sm:w-full sm:pl-[15px]">
               {selectedCategory && searchTerm ? 
                <Link href={`search/services/category=${selectedCategorySlug}&service=${searchTerm}`} aria-label="search" onClick={() => sendSearch()} className="searchBtn py-[5px] px-[10px] bg-primary-btn border-1 border-white">
                     <MdOutlineManageSearch className='text-2xl' />
                </Link>:
                <Link href={`search/services/${searchTerm}`} aria-label="search" onClick={() => sendSearch()} className="searchBtn py-[5px] px-[10px] bg-primary-btn border-1 border-white">
                    <MdOutlineManageSearch className='text-2xl' />
                 </Link>
                }
            </div>
          </div>
      </div>
   </div>
</div>
  );
};

export default PanelSearch;