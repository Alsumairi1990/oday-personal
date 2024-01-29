
'use client'
import React from 'react';
import {useState} from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

const ContactForm = () => {
    const imagePath = 'https://d3mds3ychln71.cloudfront.net/img/title-bg3.png';
    const imagePath1 = "https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/main/contact.jpg"
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleChange = (event:any)=> {
       alert(event)
    }
  const projectTypes = [
    {
        type: 'Logo Design',
        description: 'Create a unique and memorable logo that represents your brand.',
    },
    {
        type: 'Brand Identity',
        description: 'Develop a cohesive visual identity, including logos, color schemes, and typography.',
    },
    {
        type: 'Web Design',
        description: 'Design or redesign websites to ensure a visually appealing and user-friendly online presence.',
    },
    {
        type: 'Print Design',
        description: 'Create materials for print, such as brochures, business cards, posters, and banners.',
    },
    {
        type: 'Packaging Design',
        description: 'Design attractive and effective packaging for products.',
    },
    {
        type: 'Social Media Graphics',
        description: 'Craft graphics optimized for various social media platforms, including posts, banners, and profile images.',
    },
    {
        type: 'Illustration',
        description: 'Provide custom illustrations for various purposes, such as book covers, marketing materials, or digital assets.',
    },
    {
        type: 'UI/UX Design',
        description: 'Design user interfaces and experiences for websites, apps, or software.',
    },
    {
        type: 'Infographics',
        description: 'Create visually engaging and informative infographics to present data or information in a more digestible format.',
    },
    {
        type: 'Merchandise Design',
        description: 'Design graphics for merchandise such as T-shirts, mugs, and other promotional items.',
    },
    {
        type: 'Email Newsletter Design',
        description: 'Design visually appealing email templates for newsletters or marketing campaigns.',
    },
    {
        type: 'Event Graphics',
        description: 'Develop graphics for events, including invitations, posters, and promotional materials.',
    },
    {
        type: 'Corporate Collateral',
        description: 'Design various corporate materials like letterheads, business cards, and presentations.',
    },
    {
        type: 'E-book or Print Book Cover Design',
        description: 'Create visually striking covers for digital or print publications.',
    },
    {
        type: 'Environmental Graphics',
        description: 'Design graphics for physical spaces, such as office interiors or event spaces.',
    },
];


  return (
    <div className="shadow-lg  bg-white dark:bg-black-150 border dark:border-gray-600 rounded-xl w-11/12 mx-auto  " style={{boxShadow:' 3px 3px 40px rgb(0 0 0/15%)'}}>
     <div className="grid grid-cols-1 sm:grid-cols-3 ">
        <div className="pr-8">
            <div className="bg-[#162d42] dark:bg-black-100 dark:border-r bg-no-repeat bg-center bg-cover rounded-l-xl dark:border-r-gray-800 h-full" style={{backgroundImage:`url(${imagePath1})`}}>
                <div className="flex mb-4 justify-between pt-5 pb-1 px-4 bg-no-repeat bg-bottom " style={{backgroundImage: `url(${imagePath})`}}>
                    <div className=" flex flex-col flex-100 rounded  p-2 text-center col-6 flex-fill">
                        <div className="p-1 pb-0">
                            <span className=" flex justify-center pb-2">
                              <svg  className='w-12 h-12 fill-white' viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 15h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0 3h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm0-6h13c.277 0 .5.223.5.5s-.223.5-.5.5h-13c-.277 0-.5-.223-.5-.5s.223-.5.5-.5zm-8-1c-.822 0-1.5.678-1.5 1.5v6c0 .822.678 1.5 1.5 1.5h4c.822 0 1.5-.678 1.5-1.5v-6c0-.822-.678-1.5-1.5-1.5zm0 1h4c.286 0 .5.214.5.5v6c0 .286-.214.5-.5.5h-4c-.286 0-.5-.214-.5-.5v-6c0-.286.214-.5.5-.5zm2-10c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5S6 6.777 6 6.5v-4c0-.277.223-.5.5-.5zm17 0c.277 0 .5.223.5.5v4c0 .277-.223.5-.5.5s-.5-.223-.5-.5v-4c0-.277.223-.5.5-.5zm-22 2C.678 4 0 4.678 0 5.5v20c0 .822.678 1.5 1.5 1.5h27c.822 0 1.5-.678 1.5-1.5v-20c0-.822-.678-1.5-1.5-1.5h-3c-.66 0-.664 1 0 1h3c.286 0 .5.214.5.5v20c0 .286-.214.5-.5.5h-27c-.286 0-.5-.214-.5-.5v-20c0-.286.214-.5.5-.5h3c.67 0 .654-1 0-1zm7 0c-.63 0-.683 1 0 1h13c.66 0 .66-1 0-1z"/></svg>
                            </span>
                            <p className="text-lead-feature flex-50 text-sm text-white dark:text-gray-900 font-medium mb-0">Brief us :  samdesign@gmail.com</p>
                            <p className="text-lead-feature flex-50 text-sm text-white dark:text-gray-900 font-medium mb-0">sales@mobulous.com (Sales)</p>
                            <p className="pt-1 text-sm text-orange-400 dark:text-gray-900 font-semibold mb-0">+90547114547</p>
                        </div>
                    </div>
                </div>


                <div className="flex mb-4 justify-between pb-1 px-4 bg-no-repeat bg-bottom " style={{backgroundImage: `url(${imagePath})`}}>
                    <div className=" flex flex-col flex-100 rounded p-2 text-center col-6 flex-fill">
                        <div className="p-1 pb-0">
                            <span className="icon inline-block flex-50 w-[4.5rem] icon-lead ">
                                <img className='w-full' src="https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg" alt="" />
                            </span>
                            <p className="flex-50 text-sm text-white dark:text-gray-900 font-semibold mb-2">Mobulous Technologies Pvt Ltd, 2nd Floor, H-146/147, Sector 63, Noida, UP-India PIN:- 201301</p>
                            {/* <p className="flex-50 text-sm text-orange-400 dark:text-gray-900 font-semibold mb-0 ">+90547114547</p>                        */}
                             </div>
                       
                    </div>
                   
                </div>

                <div className="flex  justify-between pb-1 px-4">
                    <div className=" flex flex-col flex-100 border rounded border-[rgba(0,0,0,0.125)] p-2 text-center text-sm font-semibold col-6 flex-fill">
                        <div className="p-1 pb-0 pt-2">
                        <p className="text-lead-feature flex-50 text-md text-white dark:text-gray-900 font-weight-semibold mb-0">Contact US through skype</p>
                        <div className="flex justify-center pt-2 gap-x-4" >
                        <span className="icon inline-block">
                            <svg className='w-10 h-10' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" fill="none"><path className='fill-gray-100' d="m85.681 30.802-3.8 4.643a6 6 0 0 0 4.731 1.284l-.93-5.927Zm-54.88 54.88 5.928.93a6 6 0 0 0-1.284-4.73l-4.643 3.8Zm75.518 75.516 3.799-4.643a5.998 5.998 0 0 0-4.73-1.284l.931 5.927Zm54.879-54.879-5.927-.931a5.998 5.998 0 0 0 1.284 4.73l4.643-3.799Zm-71.717-80.16A44.839 44.839 0 0 0 61 16v12a32.84 32.84 0 0 1 20.882 7.445l7.599-9.287ZM61 16c-24.853 0-45 20.147-45 45h12c0-18.225 14.775-33 33-33V16ZM16 61a44.84 44.84 0 0 0 10.158 28.481l9.287-7.6A32.84 32.84 0 0 1 28 61H16Zm20 35c0-3.198.25-6.333.73-9.388l-11.855-1.861A72.497 72.497 0 0 0 24 96h12Zm60 60c-33.137 0-60-26.863-60-60H24c0 39.764 32.236 72 72 72v-12Zm9.388-.729c-3.055.479-6.19.729-9.388.729v12c3.823 0 7.581-.299 11.249-.875l-1.861-11.854Zm-2.869 10.571A44.84 44.84 0 0 0 131 176v-12a32.844 32.844 0 0 1-20.882-7.445l-7.599 9.287ZM131 176c24.853 0 45-20.147 45-45h-12c0 18.225-14.775 33-33 33v12Zm45-45a44.84 44.84 0 0 0-10.158-28.481l-9.287 7.599A32.844 32.844 0 0 1 164 131h12Zm-20-35c0 3.198-.25 6.333-.729 9.388l11.854 1.861c.576-3.668.875-7.426.875-11.249h-12ZM96 36c33.137 0 60 26.863 60 60h12c0-39.764-32.236-72-72-72v12Zm-9.388.73A60.45 60.45 0 0 1 96 36V24c-3.823 0-7.58.299-11.25.875l1.862 11.854Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="12" d="M115.091 67.778S107.455 62 96 62c-7.636 0-21 0-21 15.111C75 96 117 96 117 114.89 117 130 103.636 130 96 130c-11.454 0-19.09-5.778-19.09-5.778"/></svg>
                        </span>
                        <span className="icon inline-block ">
                        <svg className="w-10 h-10" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"><defs></defs><path className="fill-none" style={{stroke:'#fff', strokeLinecap:'round', strokeLinejoin: 'round'}} d="M24,2.5A21.52,21.52,0,0,0,5.15,34.36L2.5,45.5l11.14-2.65A21.5,21.5,0,1,0,24,2.5ZM13.25,12.27h5.86a1,1,0,0,1,1,1,10.4,10.4,0,0,0,.66,3.91,1.93,1.93,0,0,1-.66,2.44l-2.05,2a18.6,18.6,0,0,0,3.52,4.79A18.6,18.6,0,0,0,26.35,30l2-2.05c1-1,1.46-1,2.44-.66a10.4,10.4,0,0,0,3.91.66,1.05,1.05,0,0,1,1,1v5.86a1.05,1.05,0,0,1-1,1,23.68,23.68,0,0,1-15.64-6.84,23.6,23.6,0,0,1-6.84-15.64A1.07,1.07,0,0,1,13.25,12.27Z"/></svg>
                        </span>
                        </div>
                        
                        </div>
                       
                    </div>
                  
                </div>
                {/* <div className="px-4 pt-0">
                    <h2 className="text-gray-600 text-md font-semibold">Request best quality of <span className='text-orange-500'>Servics</span> based on highest staudards</h2>
                </div> */}

                
            </div>
        </div>
        <div className="col-span-2 max-sm:p-4 pr-4 ">
            <div className="flex flex-col items-center mb-2 justify-center">
                <span className="inline-block w-12 mb-1.5">
                <svg width="100%" height="100%" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M895.3 278.8L529.6 77.7c-11-6.1-24.3-6-35.2 0l-154.5 85c-13.4-9.4-29.7-15-47.3-15-45.4 0-82.3 36.9-82.3 82.3s36.9 82.3 82.3 82.3 82.3-36.9 82.3-82.3c0-1 0-2-0.1-3L512 151.4l329.1 181v359L512 872.6l-329.1-181V445.9l292.6 92.9v82.4c-27.1 13.5-45.7 41.4-45.7 73.7 0 45.4 36.9 82.3 82.3 82.3s82.3-36.9 82.3-82.3c0-32.2-18.6-60.2-45.7-73.7v-87.7l81.7-45.4c13.2 8.9 29 14.2 46.1 14.2 45.4 0 82.3-36.9 82.3-82.3s-36.9-82.3-82.3-82.3-82.3 36.9-82.3 82.3c0 1.5 0 3 0.1 4.5L508 472.4 157.4 361c-11.1-3.5-23.2-1.6-32.7 5.3-9.4 6.9-15 17.9-15 29.5v317.3c0 13.3 7.3 25.6 18.9 32l365.7 201.1c5.5 3 11.6 4.5 17.6 4.5s12.1-1.5 17.6-4.5l365.7-201.1c11.7-6.4 18.9-18.7 18.9-32V310.9c0.2-13.4-7.1-25.7-18.8-32.1z m-602.7-21.4c-15.1 0-27.4-12.3-27.4-27.4s12.3-27.4 27.4-27.4S320 214.9 320 230s-12.3 27.4-27.4 27.4z m383.8 135.2c15.1 0 27.4 12.3 27.4 27.4s-12.3 27.4-27.4 27.4S649 435.1 649 420s12.3-27.4 27.4-27.4zM512 722.3c-15.1 0-27.4-12.3-27.4-27.4s12.3-27.4 27.4-27.4 27.4 12.3 27.4 27.4-12.3 27.4-27.4 27.4z" className='fill-black dark:fill-white' /></svg>
                </span>
                <h1 className="text-black-150 dark:text-white text-center text-2xl font-semibold">Which <span className="text-orange-400">services</span> are you looking for?</h1>
            </div>
            <div className=" border-b border-b-gray-200 dark:border-gray-800 pb-5">
                <div className="grid sm:grid-cols-2 gap-6">
                <div className=" flex items-center z-0 w-full mb-5 group">
                    <span className=" border bg-gray-100 border-r-0 rounded-l-md border-gray-300 h-10 flex items-center px-2">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                    </svg>
                    </span>
                    <div className="relative flex w-full">
                    <input type="text" name="user_name" id="user_name" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md rounded-l-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " required />
                    <label htmlFor="user_name" className="ml-2  peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-focus:py-0.5 bg-white  peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">User Name</label>
                    </div>
                </div>
                <div className=" flex items-center z-0 w-full mb-5 group">
                    <span className=" border bg-gray-100 border-r-0 rounded-l-md border-gray-300 h-10 flex items-center px-2">
                        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                    </span>
                    <div className="relative flex w-full">
                    <input type="email" name="floating_email" id="floating_email" className="block pl-2 h-10 px-0 z-0 w-full text-sm text-gray-900 bg-transparent border rounded-md rounded-l-none border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-orange-500 peer" placeholder=" " required />
                    <label htmlFor="floating_email" className="ml-2  peer-focus:font-medium absolute text-sm  text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-orange-500 peer-focus:py-0.5 bg-white  peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 ">Email address</label>
                    </div>
                </div>
                <div className="flex z-10 w-full ">
                <PhoneInput 
                country={'us'}
                value={phoneNumber}
                onChange={(e) => handleChange(e)}
                />
                </div>
                <div className=" flex relative flex-col h-10 text-gray-600 l border border-gray-300 rounded-md w-full group">
                    <div className="flex items-center overflow-hidden">
                      <span className="w-12 border-r border-r-gray-300 rounded-l-lg justify-center h-10 flex items-center bg-gray-100 ">
                        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 6H20M7 12H17M9 18H15" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                       </span>
                      <button id="dropdownRadioHelperButton" data-dropdown-toggle="dropdownRadioHelper" className="text-gray-500 relative w-full  hover:bg-gray-100 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Project type 
                       <svg className="w-2.5 h-2.5 ms-3 absolute right-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                         </svg>
                       </button>
                    </div>
                    <div id="dropdownRadioHelper" className="!z-50 max-h-56 hidden overflow-y-auto absolute top-11 sm:left-10 bg-white divide-y border border-gray-200 w-full divide-gray-100 rounded-lg shadow sm:w-72 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioHelperButton">
                            {projectTypes.map((project, index) => (
                                <li key={index}>
                                    <div className="flex p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <div className="flex items-center h-5">
                                            <input
                                                id={`helper-radio-${index}`}
                                                name="helper-radio"
                                                type="radio"
                                                value={project.type}
                                                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-gray-100 dark:focus:ring-gray-100 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                                            />
                                        </div>
                                        <div className="ms-2 text-sm">
                                            <label htmlFor={`helper-radio-${index}`} className="font-medium text-gray-900 dark:text-gray-300">
                                                <div>{project.type}</div>
                                                <p id={`helper-radio-text-${index}`} className="text-xs font-normal text-gray-500 dark:text-gray-300">{project.description}</p>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>


                </div>
               
                
                </div>
            </div>
            <div className="p-2 pt-4 ">
                <div className="">
                    <h2 className="text-sm font-semibold text-gray-700">Preferred Communication Method</h2>
                    <div className="py-2 grid grid-cols-3 items-center">
                        {/* <div className="">
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
                        </div> */}

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
                                        Email
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
                                        Phone Number
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
                                        Video Call
                                        </label>
                                </div> 
                            </div>
                        </div>


                        {/* <div className="">
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
                        </div> */}
                    </div>
                </div>
            </div>

            <div className="p4">
        <div className="">

            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-600 dark:text-white">Your message</label>
            <textarea id="message" rows={2} className="block p-2.5 w-full text-sm text-gray-100 bg-gray-50 rounded-lg border border-gray-300 focus:ring-violet-600 focus:border-violet-700 dark:bg-black-150 dark:border-gray-800 dark:placeholder-gray-400 dark:text-white dark:focus:ring-violet-600 dark:focus:border-violet-700" placeholder="Write your thoughts here..."></textarea>

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

export default ContactForm;