
import React from 'react';

const ServiceApp = () => {
    const imagePath = '/images/service-logo.svg';
  return (
    <div className="shadow-lg  bg-white dark:bg-[#161616]  border dark:border-gray-600 rounded-md w-11.6/12 sm:w-11/12 mx-auto  " style={{boxShadow:' 3px 3px 40px rgb(0 0 0/15%)'}}>
     <div className="grid sm:grid-cols-3 ">
        <div className="sm:pr-8">
            <div className="bg-[#f8f8f8] dark:bg-[#161616] rounded-l dark:bg-black-100 dark:border-r dark:border-r-gray-800 h-full">
                <div className="flex mb-4 justify-between py-6 px-4">
                    <div className=" flex flex-col flex-48 bg-white dark:bg-[#111] dark:border dark:border-gray-700 border rounded border-[rgba(0,0,0,0.125)] p-2 text-center col-6 flex-fill">
                        <div className="p-1 pb-0">
                            <span className="icon inline-block flex-50 w-[4.5rem] icon-lead ">
                                <img className='w-full' src="https://dcstatic.com/images/icons/design-categories/design-categories-vector-design-f83cdf5668.svg" alt="" />
                            </span>
                            <p className="text-lead-feature flex-50 text-[13px] dark:text-gray-50 font-weight-semi mb-0 ">Brochure Details</p>
                        </div>
                       
                    </div>
                    <div className=" flex flex-col flex-48 bg-white dark:bg-[#111] dark:border dark:border-gray-700 border rounded border-[rgba(0,0,0,0.125)]  p-2 text-center col-6 flex-fill">
                        <div className="p-1 pb-0">
                            <span className="icon inline-block flex-50 w-[4.5rem] icon-lead ">
                            <img src="https://dcstatic.com/images/icons/design-categories/design-categories-advertisement-design-3bf09fad61.svg" alt="" />
                            </span>
                            <p className="text-lead-feature flex-50 text-[13px] dark:text-gray-50  font-weight-semi mb-0">Check Detailed</p>
                        </div>
                    </div>
                </div>


                <div className="flex mb-4 justify-between pb-6 px-4">
                    <div className=" flex flex-col flex-48 bg-white dark:bg-[#111] dark:border dark:border-gray-700 border rounded border-[rgba(0,0,0,0.125)] p-2 text-center col-6 flex-fill">
                        <div className="p-1 pb-0">
                            <span className="icon inline-block flex-50 w-[4.5rem] icon-lead ">
                                <img className='w-full' src="https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg" alt="" />
                            </span>
                            <p className="text-lead-feature flex-50 text-[13px] dark:text-gray-50  font-weight-semi mb-0">Brochure Details</p>
                        </div>
                       
                    </div>
                    <div className=" flex flex-col flex-48 bg-white dark:bg-[#111] dark:border dark:border-gray-700 border rounded border-[rgba(0,0,0,0.125)]  p-2 text-center col-6 flex-fill">
                        <div className="p-1 pb-0">
                            <span className="icon inline-block flex-50 w-[4.5rem] icon-lead ">
                            <img src="https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg" alt="" />
                            </span>
                            <p className="text-lead-feature flex-50 text-[13px] dark:text-gray-50  font-weight-semi mb-0">Check Detailed</p>
                        </div>
                    </div>
                </div>

                <div className="flex  justify-between pb-4 px-4">
                    <div className=" flex flex-col flex-48 bg-white border dark:bg-[#111] dark:border dark:border-gray-700 rounded border-[rgba(0,0,0,0.125)] p-2 text-center col-6 flex-fill">
                        <div className="p-1 pb-0">
                            <span className="icon inline-block flex-50 w-[4.5rem] icon-lead ">
                                <img className='w-full' src="https://dcstatic.com/images/icons/design-categories/design-categories-app-design-27fb7b89e6.svg" alt="" />
                            </span>
                            <p className="text-lead-feature flex-50 text-[13px] dark:text-gray-50  font-weight-semi mb-0">Brochure Details</p>
                        </div>
                       
                    </div>
                    <div className=" flex flex-col flex-48 bg-white border dark:bg-[#111] dark:border dark:border-gray-700 rounded border-[rgba(0,0,0,0.125)]  p-2 text-center col-6 flex-fill">
                        <div className="p-1 pb-0">
                            <span className="icon inline-block flex-50 w-[4.5rem] icon-lead ">
                            <img src="https://dcstatic.com/images/icons/design-categories/design-categories-label-design-275e614d8d.svg" alt="" />
                            </span>
                            <p className="text-lead-feature flex-50 text-[13px] dark:text-gray-50  font-weight-semi mb-0">Check Detailed</p>
                        </div>
                    </div>
                </div>
                {/* <div className="px-4 pt-0">
                    <h2 className="text-gray-600 text-md font-semibold">Request best quality of <span className='text-orange-500'>Servics</span> based on highest staudards</h2>
                </div> */}

                
            </div>
        </div>
        <div className="sm:col-span-2 pr-4 ">
            <div className="flex flex-col items-center mb-2 justify-center">
                <span className="inline-block w-12 mb-1.5">
                <svg width="100%" height="100%" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M895.3 278.8L529.6 77.7c-11-6.1-24.3-6-35.2 0l-154.5 85c-13.4-9.4-29.7-15-47.3-15-45.4 0-82.3 36.9-82.3 82.3s36.9 82.3 82.3 82.3 82.3-36.9 82.3-82.3c0-1 0-2-0.1-3L512 151.4l329.1 181v359L512 872.6l-329.1-181V445.9l292.6 92.9v82.4c-27.1 13.5-45.7 41.4-45.7 73.7 0 45.4 36.9 82.3 82.3 82.3s82.3-36.9 82.3-82.3c0-32.2-18.6-60.2-45.7-73.7v-87.7l81.7-45.4c13.2 8.9 29 14.2 46.1 14.2 45.4 0 82.3-36.9 82.3-82.3s-36.9-82.3-82.3-82.3-82.3 36.9-82.3 82.3c0 1.5 0 3 0.1 4.5L508 472.4 157.4 361c-11.1-3.5-23.2-1.6-32.7 5.3-9.4 6.9-15 17.9-15 29.5v317.3c0 13.3 7.3 25.6 18.9 32l365.7 201.1c5.5 3 11.6 4.5 17.6 4.5s12.1-1.5 17.6-4.5l365.7-201.1c11.7-6.4 18.9-18.7 18.9-32V310.9c0.2-13.4-7.1-25.7-18.8-32.1z m-602.7-21.4c-15.1 0-27.4-12.3-27.4-27.4s12.3-27.4 27.4-27.4S320 214.9 320 230s-12.3 27.4-27.4 27.4z m383.8 135.2c15.1 0 27.4 12.3 27.4 27.4s-12.3 27.4-27.4 27.4S649 435.1 649 420s12.3-27.4 27.4-27.4zM512 722.3c-15.1 0-27.4-12.3-27.4-27.4s12.3-27.4 27.4-27.4 27.4 12.3 27.4 27.4-12.3 27.4-27.4 27.4z" className='fill-black dark:fill-white' /></svg>
                </span>
                <h1 className="text-black-150 dark:text-white text-center text-2xl font-semibold">Which <span className="text-orange-400">services</span> are you looking for?</h1>
            </div>
            <div className=" border-b border-b-gray-200 dark:border-gray-800 pb-5">
                <div className="grid grid-cols-2 sm:grid-cols-3 max-sm:px-2">
                    <div className="p-1 ">
                    <input id="LoginEmail" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-black-100 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-orange-500 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="client user" />                      
                    </div>
                    <div className="p-1 ">
                    <input id="LoginEmail" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-black-100 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-orange-500 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="name@example.com" />                      
                    </div>
                    <div className="p-1 self-stretch col-span-2 sm:col-span-1">
                    <input id="LoginEmail" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-black-100 dark:text-slate-200 rounded-xl outline-none border border-gray-200 focus:border-orange-500 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="phone" />                      
                    </div>
                
                </div>
            </div>
            <div className="p-2 pt-4 ">
                <div className="">
                    <h2 className="text-black-150 dark:text-white textmd font-semibold mb-1.5">How soon do you want to start the project?*</h2>
                    <div className="py-2 grid grid-cols-2 sm:grid-cols-3 items-center">
                        <div className="">
                            <div className="flex items-center ">
                            <div className="inline-flex items-center">
                                    <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                        <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check" />
                                        <span
                                        className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                            stroke="currentColor" stroke-width="1">
                                            <path fill-rule="evenodd"
                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                            clip-rule="evenodd"></path>
                                        </svg>
                                        </span>
                                    </label>
                                    <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check">
                                    Social Media Marketing
                                    </label>
                                </div> 
                            </div>
                        </div>

                        <div className="">
                            <div className="flex items-center ">
                                <div className="inline-flex items-center">
                                        <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                            <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check-1" />
                                            <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                stroke="currentColor" stroke-width="1">
                                                <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </label>
                                        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check-1">
                                        SEO Sevices
                                        </label>
                                </div> 
                            </div>
                        </div>

                        <div className="">
                            <div className="flex items-center">
                                <div className="inline-flex items-center">
                                            <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                                <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check-2" />
                                                <span
                                                className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                    stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd"
                                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                    clip-rule="evenodd"></path>
                                                </svg>
                                                </span>
                                            </label>
                                            <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check-2">
                                            Email MArketing
                                            </label>
                                    </div> 
                            </div>
                        </div>


                        <div className="">
                            <div className="flex items-center">
                            <div className="inline-flex items-center">
                                        <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                            <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check-4" />
                                            <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                stroke="currentColor" stroke-width="1">
                                                <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </label>
                                        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check-4">
                                        Mobile Prototyping
                                        </label>
                                </div> 
                            </div>
                        </div>


                        <div className="">
                            <div className="flex items-center">
                            <div className="inline-flex items-center">
                                        <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                            <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check-5" />
                                            <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                stroke="currentColor" stroke-width="1">
                                                <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </label>
                                        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check-5">
                                        Printing Marketing
                                        </label>
                                </div> 
                            </div>
                        </div>


                        <div className="">
                            <div className="flex items-center">
                            <div className="inline-flex items-center">
                                        <label className="relative flex items-center px-2 py-3 rounded-full cursor-pointer" htmlFor="check">
                                            <input type="checkbox"
                                        className="before:content[''] peer relative h-[18px] w-[18px] cursor-pointer appearance-none bg-gray-200 dark:bg-transparent rounded-md border dark:border-gray-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-violet-600 checked:bg-violet-600 checked:before:bg-violet-700 hover:before:opacity-10"
                                        id="check-6" />
                                            <span
                                            className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                                stroke="currentColor" stroke-width="1">
                                                <path fill-rule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clip-rule="evenodd"></path>
                                            </svg>
                                            </span>
                                        </label>
                                        <label className=" text-sm font-medium text-gray-900 dark:text-gray-300" htmlFor="check-6">
                                        Others
                                        </label>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p4">
        <div className="max-sm:px-3">

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Your message</label>
            <textarea id="message" rows={2} className="block p-2.5 w-full text-sm text-gray-100 bg-gray-50 dark:bg-[#181818] rounded-lg border border-gray-300 focus:ring-violet-600 focus:border-violet-700 dark:bg-black-150 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-600 dark:focus:border-violet-700" placeholder="Write your thoughts here..."></textarea>

        </div>
     </div>
     <div className="my-2 p-2 text-center">
     <a href="" className="bg-orange-500 dark:bg-violet-600 rounded-md px-6 py-1.5 text-white inline-block">Submite</a>
     </div>

        </div>

     </div>
    
     
     

    
    </div>
    
   
  );
};

export default ServiceApp;