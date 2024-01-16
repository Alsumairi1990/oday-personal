import Link from 'next/link'
import React from 'react'


const NavBar = () => {
  const imagePath = '/images/logo.png';
  return (
    <nav className='flex relative p-2 z-50 items-center justify-between border-b border-b-[#484848]'>
        <div className="p-2">
            <Link href="/" className="text-lg sm:text-xl flex items-center pl-1 sm:pl-4 pr-2 text-gray-100 font-bold" > 
            <span className='w-[2.7rem] mr-1.5 inline-block'>
              <img src={`${imagePath}`}  alt="" />
            </span>
             My Design Web</Link>
            
        </div>
        <button className='sm:hidden'>
          <span className="w-6 inline-block fill-white">
            <img src="" alt="" />
          </span>
        </button>
        <div className="px-2 text-sm hidden sm:flex sm:items-center sm:text-base text-gray-100"> 
            <Link href="/" className="px-3 " >Home</Link>
            <Link href="/" className=" px-3  ">Design Services</Link>
            <Link href="/" className="px-3 " >Blogs</Link>
            <Link href="/" className="px-3 " >Totutiols</Link>
            <Link href="/login" className="pl-3 pr-2" >
            <div className="flex items-center border border-gray-600 px-1.5 py-1.5 bg-[#00000059] rounded-full pointer relative">
              <span className="icon dark-icon relative">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 18.865a.725.725 0 0 1-.534-.215.726.726 0 0 1-.216-.535c0-.213.072-.39.216-.534A.726.726 0 0 1 5 17.365h1.25v-7.25A5.63 5.63 0 0 1 7.5 6.534c.833-1.056 1.917-1.732 3.25-2.026v-.7c0-.353.12-.65.36-.89s.537-.36.89-.36c.352 0 .649.12.89.36.24.24.36.537.36.89v.7c1.333.294 2.417.97 3.25 2.026a5.63 5.63 0 0 1 1.25 3.581v7.25H19c.212 0 .39.072.534.216a.726.726 0 0 1 .216.535c0 .212-.072.39-.216.534a.726.726 0 0 1-.534.215H5Zm7 2.943c-.492 0-.917-.175-1.273-.525A1.73 1.73 0 0 1 10.192 20h3.616c0 .505-.175.933-.525 1.283-.35.35-.778.525-1.283.525Zm-4.25-4.443h8.5v-7.25c0-1.168-.416-2.169-1.249-3.001-.833-.833-1.834-1.249-3.003-1.249-1.17 0-2.17.416-3 1.249-.832.832-1.248 1.833-1.248 3.001v7.25Z" fill="#fff"></path>
                  </svg>
                  <span className="absolute bg-orange-500 right-1 rounded-full h-2.5 w-2.5 top-0 z-20"></span>
              </span>
            </div>
            </Link>
            <Link href="/signup" className=" py-1 rounded-md px-2 text-white" >
            <div  className="avatar flex items-center  border border-gray-600 bg-[#00000059] px-1.5 py-1.5 rounded-3xl relative">
                    <span className="icon mr-2 dark-icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 17.625a.728.728 0 0 1-.75-.75c0-.2.071-.375.213-.525A.706.706 0 0 1 4 16.125h16a.71.71 0 0 1 .538.225c.141.15.212.325.212.525 0 .217-.07.396-.212.538a.731.731 0 0 1-.538.212H4Zm0-4.875a.726.726 0 0 1-.75-.75.728.728 0 0 1 .75-.75h16c.217 0 .396.07.538.212a.731.731 0 0 1 .212.538.728.728 0 0 1-.75.75H4Zm0-4.875a.706.706 0 0 1-.537-.225.74.74 0 0 1-.213-.525.726.726 0 0 1 .75-.75h16a.728.728 0 0 1 .75.75c0 .2-.07.375-.212.525a.71.71 0 0 1-.538.225H4Z" fill="#fff"></path>
                        </svg>
                    </span>
                    <span className=" icon">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="12" cy="12" r="11.5" fill="#FFE8D2" stroke="#FF7900"></circle>
                          <path fill-rule="evenodd" clip-rule="evenodd" d="m12.221 4.5-.084 2.118-.084.105c-.308-.356-1.08-1.087-1.08-1.087l.328 1.067-.132-.088.036.244c-.78-.536-1.879-.296-1.879-.296-.448-.536-.851-.724-.851-.724.203.268.443.864.443.864-.82.424-1.275 1.195-1.275 1.195.116-.064 1.107-.172 1.107-.172-.14.064-.731.76-.731.76a1.81 1.81 0 0 0-.94.272l.68-.04c-.584.332-.728 1.003-.728 1.003-.156 1.056.32 1.444.32 1.444l.116-.636.144.348v1.407c.107 1.195.294 1.693.4 1.888a1.7 1.7 0 0 0-.024.278c-.352-.085-.466.116-.466.116-.212.38-.008.764-.008.764.104.18.763.727.763.727.04.812.944 1.68.944 1.68.096.08.472.355.472.355.066.092.141.178.222.26v.001h.001c.038.038.077.075.117.111h-.002l.004.002.002.001c.022.039.274.453 1.036.657.224.103.379.155.379.155h-.004c.092.028.232.004.232.004v-.009l.002.001.004.004s.851-.04 2.634-1.743c0 0 .712-.64.832-1.375 0 0 .407.052.535-.088 0 0 .508-.208.48-.827l-.1-.612s-.084-.271-.545-.32c.21-.457.36-.942.44-1.439l.002.001.067-.15.005.005.599-1.367.52-1.175-.005-.002.013-.03 2.34-1.207-7.28-4.45Z" fill="#FF7900"></path>
                        </svg>
                    </span>
                  </div>
            </Link>
        </div>
    </nav>
  )
}

export default NavBar