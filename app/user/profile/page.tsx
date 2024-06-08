
import ServiceCreate from "@/app/_components/admin/service/ServiceCreate";

const ProfilePage = () => {
   const imagePath2 = 'https://angular-material.fusetheme.com/images/avatars/male-04.jpg';
   const imgBg = 'https://angular-material.fusetheme.com/images/pages/profile/cover.jpg';
   const postImag = 'https://tixia.dexignzone.com/xhtml/images/profile/8.jpg';
   const postImag1 = 'https://tixia.dexignzone.com/xhtml/images/profile/9.jpg';
    return (
      <div className="p-2">
        <p className="text-gray-600 pt-3 mb-6 max-sm:hidden">Profile Page</p>
        <div className="bg-white flex flex-col shadow" >
         
         <img src={imgBg} alt="Cover image" className="h-40 object-cover lg:h-80" />
         <div className=" mx-auto flex w-full  flex-0 flex-col pb-3 items-center px-8 lg:h-18 sm:w-full">
            <div className="rounded-full flex max-sm:flex-col w-full items-center ">
                <img src={imagePath2} alt="User avatar" className="-mt-16  ring-bg-card h-32 w-32 rounded-full border-4 border-white" />
                  <div className="sm:mt-4  flex flex-col items-center mt-6 sm:pl-5">
                     <div className="text-base font-bold text-gray-800 leading-none">Brian Hughes</div>
                     <div className="text-md text-gray-600 mt-0.5 ">London, UK</div>
                  </div>
                  <div className="mx-8 hidden h-8 border-l-2 lg:flex"></div>
                  <div className="sm:mt-2 mt-6 text-gray-700 flex items-center space-x-6">
                     <div className="flex flex-col text-base  items-center"><span className="font-bold">200k</span><span className="text-gray-600 text-sm ">FOLLOWERS</span></div>
                     <div className="flex flex-col  text-base  items-center"><span className="font-bold">1.2k</span><span className="text-gray-600 text-sm ">FOLLOWING</span></div>
                  </div>
                  <div className="mb-4 ml-auto mt-8 flex text-md text-gray-600 items-center space-x-6 ">
                    <a className="font-medium" href="/pages/profile"> Home </a>
                    <a className="text-secondary" href="/pages/profile"> About </a>
                    <a className="text-secondary" href="/pages/profile"> Followers </a>
                    <a className="text-secondary" href="/pages/profile"> Gallery </a>
                  </div>
              </div>
          </div>
              
      </div>


      <div  className="pt-4 grid  grid-cols max-sm:gap-y-3 sm:gap-x-5 sm:grid-cols-3">


      <div className="flex h-fit bg-white flex-col  w-full p-8 border border-gray-300 shadow-md rounded-lg ">
           
          <span className="text-xl  font-semibold text-gray-600">About Me</span>
           <div className="mt-4 text-md text-gray-700"> I’m a friendly kitchen assistant who suffers from a severe phobia of buttons.<br/> 
           Brother of Elijah Jay Watkins, who has phobia of buttons and trust issues. 
           </div>
           <hr className="my-6 w-full border-t ng-tns-c2638821912-6 ng-star-inserted" />
           <div className="flex flex-col text-gray-800 text-md">
              <div className="flex items-center">
                 <span role="img" className="w-5 flex  notranslate mr-3 icon-size-5 mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="map-pin" data-mat-icon-namespace="heroicons_solid">
                    <svg className="fill-gray-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                       <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                    </svg>
                 </span>
                 <span className="leading-none">London, UK</span>
              </div>
              <div className="mt-4 flex items-center">
                 <span role="img" className="flex w-5 notranslate mr-3 icon-size-5 fill-gray-500" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="briefcase" data-mat-icon-namespace="heroicons_solid">
                    <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                       <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
                       <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
                    </svg>
                 </span>
                 <span className="leading-none">ACME Corp. Lead UX Designer</span>
              </div>
              <div className="mt-4 flex items-center">
                 <span role="img" className="w-5 flex mr-3 icon-size-5 mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="cake" data-mat-icon-namespace="heroicons_solid">
                    <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                       <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z"></path>
                    </svg>
                 </span>
                 <span className="leading-none">April, 24</span>
              </div>
           </div>
           <a className="mt-8 px-6 text-center py-2 rounded-3xl bg-[#4f46e5] text-white mat-primary " href="/pages/profile">
           
           <span className="text-md"> See complete bio </span>
          
           </a>
        </div>

        <div className="sm:col-span-2   sm:cols-start-2 space-y-6">
          <div className="p-5 bg-white rounded-xl border border-gray-300 shadow-md">
             <img src={postImag} alt="" className="img-fluid w-100 rounded" />
             <a className="" href="post-details.html">
                <h3 className="font-bold text-gray-900 text-lg my-3">Swiftly Respond to and Resolve Issues</h3>
             </a>
             <p className="text-md text-gray-600">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning
                of spare which enjoy whole heart.
             </p>
             <div className="mt-4 mb-2 space-x-6">
               <button className="px-3 py-1.5 bg-blue-600 rounded-md text-white text-md"><span className=""><i className="fa fa-heart"></i></span>Like</button>
               <button className="px-3 py-1.5 bg-red-600 rounded-md text-white text-md" data-bs-toggle="modal" data-bs-target="#replyModal"><span className=""><i className="fa fa-reply"></i></span>Reply</button>
             </div>
          </div>

            <div className="p-5 bg-white rounded-xl border border-gray-300 shadow-md">
             <img src={postImag1} alt="" className="img-fluid w-100 rounded" />
             <a className="" href="post-details.html">
                <h3 className="font-bold text-gray-900 text-lg my-3">Swiftly Respond to and Resolve Issues</h3>
             </a>
             <p className="text-md text-gray-600">A wonderful serenity has take possession of my entire soul like these sweet morning of spare which enjoy whole heart.A wonderful serenity has take possession of my entire soul like these sweet morning
                of spare which enjoy whole heart.
             </p>
             <div className="mt-4 mb-2 space-x-6">
               <button className="px-3 py-1.5 bg-blue-600 rounded-md text-white text-md"><span className=""><i className="fa fa-heart"></i></span>Like</button>
               <button className="px-3 py-1.5 bg-red-600 rounded-md text-white text-md" data-bs-toggle="modal" data-bs-target="#replyModal"><span className=""><i className="fa fa-reply"></i></span>Reply</button>
             </div>
          </div>
        </div>



      </div>
   </div>   
)
};
export default ProfilePage;