'use client'
import { AbstractIntlMessages } from 'next-intl'
import Link from 'next/link'
import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
interface Props {
    locale : string,
  messages : AbstractIntlMessages,
    closePanle : (value :boolean) => void

}
function MobilCall({locale,messages,closePanle}:Props) {
    const [phoneNumber, setPhoneNumber] = useState('');
    const handleChange = (e:any)=>{

    }
  return (
    // <div className='w-full h-full bg-black fixed z-9999999999999999 left-0 top-0 flex items-center justify-center'>
    <div className="fixed inset-0 z-[999999] bg-black bg-opacity-50 flex items-center justify-center">

      <div className="p-2 w-11/12 sm:w-5/12 bg-whited rounded-md " style={{background: 'radial-gradient(circle, rgb(30 113 175) 0%, rgb(4 78 195) 100%)'}}>
       <div className="flex py-1 justify-between border-b border-b-gray-500 mb-2">
            <div className="pl-1 w-full text-center">
                <span className="w-16 inline-flex">
                    <svg className='w-full' version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> </style> <g> <path className="st0" d="M123.671,288.694c1.743,0.582,3.542,0.877,5.347,0.877h0.002c3.898,0,7.694-1.405,10.685-3.944 c6.502-5.52,9.577-14.868,4.827-44.394c-4.204-26.18-10.716-39.891-21.77-45.838c-2.42-1.304-4.983-2.174-7.638-2.593 c0.084-48.796,16.805-93.889,45.986-123.881c24.926-25.629,57.736-39.169,94.888-39.169c37.152,0,69.965,13.54,94.891,39.169 c29.181,29.992,45.902,75.077,45.986,123.881c-2.655,0.419-5.218,1.289-7.638,2.593c-11.054,5.947-17.564,19.658-21.77,45.838 c-1.797,11.18-2.535,19.829-2.25,26.39c-8.6,4.604-23.986,10.31-49.569,12.523c-4.031-6.716-11.219-10.846-18.998-10.846h-14.759 c-12.273,0-22.257,9.984-22.257,22.259c0,12.275,9.984,22.259,22.257,22.259h14.759c8.682,0,16.485-4.992,20.144-12.803 c23.268-1.933,42.473-6.716,57.11-14.239c2.735,1.832,5.854,2.795,9.076,2.795c1.819,0,3.62-0.295,5.351-0.877 c11.772-3.921,36.599-30.753,38.2-88.688c1.642-59.324-18.154-114.658-54.314-151.831C341.563,16.661,301.375,0,255.999,0 c-45.374,0-85.562,16.661-116.218,48.175c-36.158,37.174-55.955,92.507-54.313,151.831 C87.07,257.941,111.897,284.773,123.671,288.694z"></path> <path className="st0" d="M452.727,457.031c-3.758-20.644-17.384-38.198-36.512-46.995l-80.048-32.71 c-12.762-5.862-21.009-18.726-21.009-32.772v-6.452l-2.11,0.73c-5.375,1.864-10.891,2.803-16.398,2.803h-14.759 c-27.612,0-50.077-22.461-50.077-50.077c0-27.608,22.465-50.07,50.077-50.07h14.759c10.305,0,20.204,3.129,28.628,9.053 l0.532,0.373l0.64-0.109c17.624-2.904,25.745-7.516,28.82-9.759l5.264-7.694c5.153-16.561,7.766-32.112,7.766-46.219 c0-74.697-47.23-128.912-112.302-128.912c-65.071,0-112.299,54.216-112.299,128.912c0,61.808,50.2,129.51,50.475,129.751 c1.768,5.132,2.665,10.481,2.665,15.885v11.786c0,14.045-8.248,26.902-20.947,32.741l-80.17,32.771 c-19.076,8.766-32.704,26.328-36.471,47.127L55.003,512h401.995L452.727,457.031z"></path> </g> </g></svg>
                </span>
                <h2 className="text-md font-semibold pt-1 capitalize text-gray-50  pb-2 ">
                        contact Us for Enquey 
                </h2>
            </div>
            
            <span className="p-1 " onClick={()=> closePanle(false)}>
          <IoCloseSharp className="text-gray-50 text-2xl font-semibold" />
            </span>
       </div>
        
        <div className="p-2">
            <div className="flex flex-wrap gap-x-2 gap-y-3 justify-between">
                <div className="p-1 flex-45 sm:flex-30 flex items-center border border-gray-300 rounded-md bg-white">
                    <span className="inline-flex w-9">
                        <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle cx="32" cy="32" r="30" fill="#699635"> </circle> <g fill="#ffffff"> <path d="M31.7 26.7c-.1-.9.4-1.8 1.3-1.6c.7.1 1.5.8 1.1 1.5c-.6 1.1-2.2 1.1-3.2 1.7c.1.6 3-.1 3.5-.1s1 .2.7.8c-.3.6-1.3.6-1.9.7c-.6.1-1.6.1-1.9.6c-.6.8.6.9 1 1.1c1 .5-.6 1-1 .9c-1.5-.3-1.8-1.1-2.7-2.1c-.9 1.2-3.7 3.9-4.3 1.1c-1 .4-2 .9-3.1 1c.5-.7 1.5-1 2.3-1.4c1-.5 1-1.4 1.6-2.2c.2.3 0 .7.1 1.1c.8-.4 1.8-1.2 1.4-2.2c0-.1-1.2-2.5-.2-2.1c.9.4.6 1.3.8 2c.3 1.3-.3 2-1.3 2.8c-.4.3-1.5 1.5-.2 1.5c.9 0 1.7-1 2.2-1.6c.6-.8.4-1.6 0-2.5c-.3-.7-1-2.2-.1-2.7c.7 1.1 1 2.4 1.3 3.7c.2 1.1.4 2.2 1.6 2.5c-.1-.8.4-1.4 1.1-1.7c-.5-.4-3.3.1-2.2-1.4c.1-.7 2.1-1 2.1-1.4"> </path> <path d="M16.4 30.4c.5 1.4 2.2.9 3.2.5c1.6-.8 1.6-2 1.6-3.6c-.6.3-.5 1.4-.7 1.9c-.4.8-1.7 1.5-2.6 1.4c-1.3-.2-1.9-2.4-.9-3.2c.2.7-.3 2.2.9 2.3c.9.1 2.7-1 2.4-2c-1.2.4-1.9 0-1.5-1.3c.3-1.2 1.5-.3 2 .3c1.9-1.1-1.5-5.3.5-6.4c.4.7 1 1.6.5 2.3c-.6.8 0 2.5.1 3.4c1-.9.2.7 1 .8c.5.1.7-1.2 1-1.2c.1.3.1 1.2.6 1.1c.6-.2-.1-1 .5-1.2c.2.5.1 2-.6 1.9c-.6-.1-.5-.5-1.2-.1c-.6.3-.8 0-1.2-.3c-.1 1.2.3 2.5-.4 3.6c-.6.9-1.8 1.4-2.8 1.6c-2.6.5-3.3-2.1-2.4-4.2c.2.6-.2 1.7 0 2.4"> </path> <path d="M40.8 30.9c.5 1.3 1.5-1.4 1.8-1.8c.8-1.2 2 1.9 2.5-.1c.3-1.3-.1-2.6-.2-3.9c-.1-.9-.4-1.7-1-2.4c-.6-.8-1.2-1.5-.9-2.5c1 .4 1 1.2 1.5 2c.1-.6-.3-1.4.1-1.9c.5-.7.9 1.2.9 1.4c.1.5-.4.7-.1 1.5c.2.6.6 1.2 1 1.7c-.1-.6-1-4.7 0-4.7c.3 0 .6 1.2.6 1.4c.2.6-.2 1.1-.2 1.8c-.1 1.2.1 2.6.9 3.5c.4.5 1.9 2.3 1.1 2.9c-.6-.7-1-1.5-1.5-2.2c0 .8.2 1.7-.2 2.3c-.4-.2-.2-1.5-.2-1.8c0-1.1-.7-2-1.3-2.9c-.2 1.5 1 4.3-.4 5.4c-.9.8-2.1-1-2.4-.3c-.3.5-1 2.3-1.8 2.1c-1-.2-1.7-3-.6-3.3c.1.5.1 1.2.4 1.8"> </path> <path d="M19.4 24.1c.7.1 0-2.3 0-2.7c.1-.4.4-.6.6-.2c.3.6.3 1.3.4 1.9c0 .5.1 1.1-.3 1.5c-.6.6-1.4.3-1.7-.5c-1.4 1.2.4 3.3-.8 4.5c-.2-1.1 0-2.3-.4-3.3c-.2-.5-1.1-.3-1.2-1.2c0-.4.3-1.5-.1-1.8c-.2.4-.4 3.5-1.4 2.6c-.8-.6-.6-2.6-.3-3.4c.6.3-.1 2.5.7 2.6c.4.1.5-1.6.6-1.9c.3-.5 1.3-1.9 1.1-.5c-.1.6-.6 2.5.6 2.4c-.1-1-.2-2-.4-3c-.1-.5.2-1.5.6-.6c.3.6.1.9 0 1.5c-.1.7.2 1.4.3 2c.6-.5-.2-2.4.3-3.2c1.2.7-.1 3.1 1.4 3.3"> </path> <path d="M32.3 24.3c-.5.7-1.4.1-1.8-.4c-.5.6-1.5 1.6-2.3.8c-.6-.6.1-1.7-.4-2.2c-.3.5-.8 2.9-1.7 1.8c-.5-.6-1.2-2.7-.1-3.2c-.1.8-.3 1.7.2 2.4s1-1.1 1.2-1.5c.3-.7 1.3-1.9 1.1-.4c-.1.6-.3 2 .3 2.4c.4.3.9-.2 1.1-.5c.4-.5.2-1.3.1-1.9c-.1-.5-.3-1.1 0-1.6c.4-.6.7.8.7 1.1c0 .3.4 3.4 1.1 2.4c.7-.9-1.2-2.9.1-3.4c.5-.2 1.4 1.8.4 1.2c.3.9.7 2.2 0 3"> </path> <path d="M36.1 25.5c.1 1.3 1.2 4.9-.3 5.7c-.2-.4 0-1 .1-1.5c.1-.9-.1-1.8-.2-2.6c-.2-1.9-.4-3.3-1.7-4.8c-.3-.4-.8-.7-.9-1.3c0-.2-.1-1.1.3-.9c.3.1 2 1.6 1.1 1.6c.1.2.5 1 .7 1c0-.5-.6-2 0-2.3c.5-.3 1.1 1.6.9 2c-.2.5-.2.8 0 1.5c.2.8.7 1.5 1.1 2.2c.6 1 1.8 2.4 1.5 3.7c-.6-.3-1-1.7-1.3-2.3c-.2-.5-.4-1-.7-1.4c-.1-.1-.7-.9-.6-.4v-.2"> </path> <path d="M50 27.4c.1 2.1-.6 4.8-3.2 4.8c0-.6 1.3-1.2 1.7-1.5c1-.8.9-2.3.8-3.4c-.1-1.5-.2-3-.5-4.5c-.1-.9-.6-2.2.2-2.8c.5.4 1.2 1.5.9 1.9c-.5.6 0 5.1.1 5.5"> </path> <path d="M37.2 31.9c2.6-1.5 1.8-4.7 1.6-7.2c-.1-.7-.1-1.4-.2-2.1c0-.5-.4-1.2-.2-1.7c.5-1.3.9-.1 1 .7c.1.5-.3.6-.2 1c.1.8.1 1.6.2 2.4c.1 1.3.3 2.6.2 3.8c-.2 1.9-1.2 4-3.5 3.6c.1-.2.8-.3 1.1-.5"> </path> <path d="M41.4 26.9c.1 1 .5 2.8 0 3.7c-.4.6-.4-.4-.5-.5c-.1-.8-.1-1.6-.1-2.5c-.2-2.2-.9-4.4-.9-6.5c0-2.7 2.3 1.5 1 1.3c.1 1.5.3 3 .5 4.5"> </path> <path d="M25.1 21.8c.2.5-2.3 1.8-2.6 1.8c-.1-.5 1.1-1.2 1.4-1.4c.3-.3.5-.3.4-.7c-.2-.4-.1-1.1.4-1.3c1-.3.3 1.2.4 1.6"> </path> <path d="M14.8 30.7c0 .8.3.4.7.2c.2.4-.3 1.5-.8 1c-.7-.7-.1-2.3.2-3c.2.5-.2 1.3-.1 1.8"> </path> <path d="M43 24.5c.1-.4-.2-.8.1-1.2c.4-.5.8.1.6.3c-.2.2-.5-.2-.5.4c0 .3.2.9-.1 1.2c-.2-.1-1.1-1.4-1-1.6c.4-.4.8.8.9.9"> </path> <path d="M16.9 26.2c-.2.4-2.5 1.7-2.6 1.4c0-.3 2.9-2 2.6-1.4"> </path> <path d="M33.9 31.3c-.3.9 1 .1 1.3 0c-.4.7-1.8 1.3-1.6 0c-.1 0-.3.1-.4.1c-.2-.2 1-1 .7-.1"> </path> <path d="M44.8 31c.3 0 .8.9.5 1.1c-.2.2-1.1.3-.6-.1c.6-.6.1-1 .1-1"> </path> <path d="M30.7 25.9c.1-.2.1-.5.2-.7c1 .8-1.6 2.1-1.1.2c.2.2.2.5.4.6c0-.2.1-.5.1-.7c.2.2.2.5.4.6"> </path> <path d="M42.4 27.2c-.3-.4 1.5-1.5 1.8-1.7c.2.3-1.2 1.4-1.8 1.7"> </path> <path d="M48 23.2c-.2-.6-.8-1.8-.2-2.3c.4.3.6 1.8.2 2.3"> </path> <path d="M37.1 21.2c-.1-.2-.4-.4-.4-.7c.1-.4.3-.3.5-.1c.3.4.5 1.5 0 1.8c0-.3.1-.7-.1-1"> </path> <path d="M24.9 23.9c0 .6-1 1.2-1.1.4c-.1-.3.4-1.4.6-1.1c-.4.9-.4 1.2.5.7"> </path> <path d="M37.4 22.8c.4 1 .2.1.6-.1c.7 1.3-1.5 1-1 .2c.1.1.2.3.2.4c.1-.1.1-.3.2-.5"> </path> <path d="M43.8 27.4c-.5-.4.1-.9.4-.4c.2.3.2 1.1-.2 1.3c0-.3.1-.7-.2-.9"> </path> <path d="M23.3 29.6c0-.2-.1-1.7.2-1.5c.4.2.3 1.3-.2 1.5"> </path> <path d="M19.1 20.2c.1.3.2.7.4.2c.8.9-2 .6-1-.3c0 .1.2.7.6.1"> </path> <path d="M29.3 22.4c0-.4-.6-2.1-.1-2.1c.6.1.5 1.6.1 2.1"> </path> <path d="M15.3 21.5c-.3-.1.2-.6 0-1c-.2.1-.4-.2-.2-.4c.8-.6.5 1.4.2 1.4"> </path> <path d="M41.2 41.8l-.4-1.2l-.4 1.2H18.5s.2 1.8 2.4 1.8h19.4V45h5.3v-3.2h-4.4m3.4 2.4H41v-1h3.6v1"> </path> </g> </g></svg>
                    </span>
                    <span className="text-md pl-1">+9012345423</span>
                </div>
                <div className="p-1 flex flex-45 sm:flex-30 items-center  border border-gray-300 rounded-md bg-white">
                    <span className="inline-flex w-9">
                      <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M32 2C18.9 2 7.8 10.4 3.7 22h56.6C56.2 10.4 45.1 2 32 2z" fill="#c94747"></path><path d="M32 62c13.1 0 24.2-8.3 28.3-20H3.7C7.8 53.7 18.9 62 32 62z" fill="#3e4347"></path><path d="M3.7 22C2.6 25.1 2 28.5 2 32s.6 6.9 1.7 10h56.6c1.1-3.1 1.7-6.5 1.7-10s-.6-6.9-1.7-10H3.7z" fill="#f9f9f9"></path></g></svg>                    </span>
                    <span className="text-md pl-1">+96777123496</span>
                </div>
                <div className="p-1 flex flex-100 sm:flex-30 items-center  border border-gray-300 rounded-md bg-white">
                    <span className="inline-flex w-9">
                    <svg viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--emojione" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M56 14H32v6h27.5c-.9-2.1-2.1-4.2-3.5-6" fill="#ed4c5c"> </path> <path d="M61.4 38c.4-1.9.6-3.9.6-6H2c0 2.1.2 4.1.6 6h58.8" fill="#f9f9f9"> </path> <path d="M32 2v6h18c-5-3.8-11.2-6-18-6" fill="#ed4c5c"> </path> <g fill="#f9f9f9"> <path d="M32 14h24c-1.7-2.3-3.7-4.3-6-6H32v6"> </path> <path d="M59.5 20H32v6h29.4c-.4-2.1-1.1-4.1-1.9-6"> </path> </g> <g fill="#ed4c5c"> <path d="M32 26v6h30c0-2.1-.2-4.1-.6-6H32"> </path> <path d="M4.5 44h55c.8-1.9 1.5-3.9 1.9-6H2.6c.4 2.1 1.1 4.1 1.9 6"> </path> </g> <path d="M8 50h48c1.4-1.8 2.6-3.9 3.5-6h-55c.9 2.1 2.1 4.2 3.5 6" fill="#f9f9f9"> </path> <path d="M8 50c1.7 2.3 3.7 4.3 6 6h36c2.3-1.7 4.3-3.7 6-6H8z" fill="#ed4c5c"> </path> <path d="M14 56c5 3.8 11.2 6 18 6s13-2.2 18-6H14" fill="#f9f9f9"> </path> <path d="M32 2C15.4 2 2 15.4 2 32h30V2z" fill="#2a5f9e"> </path> <g fill="#ffe62e"> <path d="M19.9 25.6c-3 0-5.5-2.5-5.5-5.6c0-3.1 2.5-5.6 5.5-5.6c1.2 0 2.2.4 3.1 1c-1.3-1.5-3.1-2.4-5.2-2.4c-3.8 0-6.8 3.1-6.8 7s3.1 7 6.8 7c2.1 0 3.9-.9 5.2-2.4c-.9.6-2 1-3.1 1"> </path> <path d="M26 18.8l.7-1.8l-.2 1.9l1.4-1.3l-1 1.7l1.8-.6l-1.6 1l1.9.3l-1.9.3l1.6 1l-1.8-.6l1 1.7l-1.4-1.3l.2 1.9l-.7-1.8l-.7 1.8l.2-1.9l-1.4 1.3l1-1.7l-1.8.6l1.6-1L23 20l1.9-.3l-1.6-1l1.8.6l-1-1.7l1.4 1.3l-.2-1.9z"> </path> </g> </g></svg>                    </span>
                    <span className="text-md pl-1">+96634947419</span>
                </div>
            </div>
            <div className="flex my-2 justify-center">
                <span className="text-white">OR</span>
            </div>
            <div className="flex flex-wrap">
                <div className="p-1 justify-center  flex-100">
                    <span className="text-gray-50 text-md capitalize font-semibold"> get Call Back 
                    </span>
                </div>
                <div className="flex-100">
                <PhoneInput 
                
                country={'us'}
                value={phoneNumber}
                onChange={(e) => handleChange(e)}
                containerClass="w-full !bg-white rounded-md"
                inputClass="!w-full !bg-white"

                />
                </div>
                <div className="flex-100">
                    <textarea name="" id="" className='bg-white p-2 rounded-md border w-full mt-6 border-gray-300' placeholder='message' cols={3} rows={3}></textarea>
                </div>
               
                <div className="py-1 mt-3 flex-100">
                    <button className='w-full rounded-md bg-orange-600 border border-gray-100 shadow-md text-white text-center py-2 '>submit</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default MobilCall