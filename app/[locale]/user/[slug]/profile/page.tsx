
import ServiceCreate from "@/app/_components/admin/service/ServiceCreate";
import { getLocale, getMessages } from "next-intl/server";
import { UserForFront } from "../../_utils/UserForFront";


interface Props {
   params: {
       slug: string;
   };
 }
const ProfilePage = async ({params}:Props) => {
   const userData = await fetch(`${process.env.NEXTAUTH_URL}/api/front/users/${params.slug}`, {
      method: 'GET',
      next: { revalidate: 3600 }, 
    })
      const user:UserForFront = await userData.json();
    
   const locale = await getLocale();
   const messages = await getMessages({ locale });
   const imagePath2 = 'https://angular-material.fusetheme.com/images/avatars/male-04.jpg';
   const imgBg = 'https://angular-material.fusetheme.com/images/pages/profile/cover.jpg';
   const postImag = 'https://tixia.dexignzone.com/xhtml/images/profile/8.jpg';
   const postImag1 = 'https://tixia.dexignzone.com/xhtml/images/profile/9.jpg';
   const postHight = 'https://tixia.dexignzone.com/xhtml/images/profile/1.jpg';
   const profilePage = (messages as any).Common.profilePage;
   const bio = (messages as any).Common.bio;
   const seeBio = (messages as any).Common.seeBio;  
   const firstName = (messages as any).Common.firstName;
   const lastName = (messages as any).Common.lastName;
   const jobTitle = (messages as any).Common.jobTitle;
   const userEmail = (messages as any).Common.userEmail;
   const degree = (messages as any).Common.degree;
   const dateOfBirth = (messages as any).Common.dateOfBirth;
   const dateOfJoin = (messages as any).Common.dateOfJoin;
   const userImage = (messages as any).Common.userImage;
   const userAvatar = (messages as any).Common.userAvatar;
   const address = (messages as any).Common.address;
   const sex = (messages as any).Common.sex;
   const city = (messages as any).Common.city;
   const postalCode = (messages as any).Common.postalCode;
   const institution = (messages as any).Common.institution;
   const specialization = (messages as any).Common.specialization;
   const languages = (messages as any).Common.languages;
   const maritalStatus = (messages as any).Common.maritalStatus;
   const socialNetwork = (messages as any).Common.socialNetwork;
   const skills = (messages as any).Common.skills;    
   const generalInfo = (messages as any).Common.generalInfo;
   const mobile = (messages as any).Common.mobile;
   const contactInfo = (messages as any).Common.contactInfo;
   const country = (messages as any).Common.country;




  





  

    return (
      <div className="p-2">
        <div className="px-3 py-2 bg-white border border-gray-200 mb-2 rounded-md">
           <p className="text-gray-600  mb-0 max-sm:hidden">{profilePage}</p>
        </div>
        <div className="bg-white flex flex-col shadow" >
         
         <img src={imgBg} alt="Cover image" className="h-40 object-cover lg:h-80" />
         {locale === 'en' ? <div className=" mx-auto flex w-full flex-col pb-3 items-center px-8 sm:w-full">
            <div className="rounded-full flex max-sm:flex-col w-full items-center ">
                <img src={imagePath2} alt="User avatar" className="-mt-16  ring-bg-card h-32 w-32 rounded-full border-4 border-white" />
                  <div className="sm:mt-4  flex flex-col items-center mt-6 sm:pl-5">
                     <div className="text-base font-bold text-gray-800 leading-none">{user.user_name}</div>
                     <div className="text-md text-gray-600 mt-0.5 ">{user.employeeProfile.city}, {user.employeeProfile.country}</div>
                  </div>
                  <div className="mx-8 hidden h-8 border-l-2 lg:flex"></div>
                  {/*<div className="sm:mt-2 mt-6 text-gray-700 flex items-center space-x-6">
                     <div className="flex flex-col text-base  items-center"><span className="font-bold">200k</span><span className="text-gray-600 text-sm ">FOLLOWERS</span></div>
                     <div className="flex flex-col  text-base  items-center"><span className="font-bold">1.2k</span><span className="text-gray-600 text-sm ">FOLLOWING</span></div>
                  </div>*/}
                  <div className="mb-4 ltr:ml-auto rtl:mr-auto mt-8 flex text-md text-gray-600 items-center gap-x-5 ">
                    <a className="font-medium" href="/pages/profile"> Home </a>
                    <a className="" href="/pages/profile"> About </a>
                    <a className="" href="/pages/profile"> Followers </a>
                    <a className="" href="/pages/profile"> Gallery </a>
                  </div>
              </div>
          </div>:
            <div className=" mx-auto flex w-full flex-col pb-3 items-center px-8 sm:w-full">
            <div className="rounded-full flex max-sm:flex-col w-full items-center ">
                <img src={imagePath2} alt="User avatar" className="-mt-16  ring-bg-card h-32 w-32 rounded-full border-4 border-white" />
                  <div className="sm:mt-4  flex flex-col items-center mt-6 sm:pl-5">
                     <div className="text-base font-bold text-gray-800 leading-none">{user.user_name}</div>
                     <div className="text-md text-gray-600 mt-0.5 ">{user.employeeProfile.cityAr}, {user.employeeProfile.countryAr}</div>
                  </div>
                  <div className="mx-8 hidden h-8 border-l-2 lg:flex"></div>
                  {/*<div className="sm:mt-2 mt-6 text-gray-700 flex items-center space-x-6">
                     <div className="flex flex-col text-base  items-center"><span className="font-bold">200k</span><span className="text-gray-600 text-sm ">FOLLOWERS</span></div>
                     <div className="flex flex-col  text-base  items-center"><span className="font-bold">1.2k</span><span className="text-gray-600 text-sm ">FOLLOWING</span></div>
                  </div>*/}
                  <div className="mb-4 ltr:ml-auto rtl:mr-auto mt-8 flex text-md text-gray-600 items-center gap-x-5 ">
                    <a className="font-medium" href="/pages/profile"> Home </a>
                    <a className="" href="/pages/profile"> About </a>
                    <a className="" href="/pages/profile"> Followers </a>
                    <a className="" href="/pages/profile"> Gallery </a>
                  </div>
              </div>
          </div>
          }
              
      </div>


      <div  className="pt-4 grid  grid-cols max-sm:gap-y-3 sm:gap-x-5 sm:grid-cols-3">


      <div className="flex h-fit flex-col gap-y-6 w-full ">
           
          {locale === 'en' ? <div className="bg-white flex flex-col  p-6 border border-gray-300 shadow-md rounded-lg "> 
              <span className="text-lg  font-semibold text-gray-600">{bio}</span>
               <div className="mt-4 text-md text-gray-700 line-clamp-4"> {user.employeeProfile.bio} 
               </div>
               <hr className="my-6 w-full border-t ng-tns-c2638821912-6 ng-star-inserted" />
               <div className="flex flex-col text-gray-800 text-md">
                  <div className="flex items-center">
                     <span role="img" className="w-5 flex  notranslate ltr:mr-3 rtl:mrl-3 icon-size-5 mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="map-pin" data-mat-icon-namespace="heroicons_solid">
                        <svg className="fill-gray-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                           <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                        </svg>
                     </span>
                     <span className="ltr:prl2 rtl:pr-2">{user.employeeProfile.city}, {user.employeeProfile.country}</span>
                  </div>
                  <div className="mt-4 flex items-center">
                     <span role="img" className="flex w-5 notranslate ltr:mr-3 rtl:ml-3 icon-size-5 fill-gray-500" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="briefcase" data-mat-icon-namespace="heroicons_solid">
                        <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                           <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
                           <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
                        </svg>
                     </span>
                     <span className="">{user.employeeProfile.jobTitle}</span>
                  </div>
                  <div className="mt-4 flex items-center">
                     <span role="img" className="w-5 flex ltr:mr-3 rtl:ml-3 icon-size-5 mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="cake" data-mat-icon-namespace="heroicons_solid">
                        <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                           <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z"></path>
                        </svg>
                     </span>
                     <span className="leading-none">{user.employeeProfile.degree}</span>
                  </div>
               </div>
               <a className="mt-8 px-6 text-center py-2 rounded-3xl bg-[#4f46e5] text-white mat-primary " href="/pages/profile">
               <span className="text-md">{seeBio}</span>
               </a>
            </div>:
               <div className="bg-white flex flex-col  p-6 border border-gray-300 shadow-md rounded-lg "> 
               <span className="text-lg  font-semibold text-gray-600">{bio}</span>
                <div className="mt-4 text-md text-gray-700 line-clamp-4"> {user.employeeProfile.bioAr} 
                </div>
                <hr className="my-6 w-full border-t ng-tns-c2638821912-6 ng-star-inserted" />
                <div className="flex flex-col text-gray-800 text-md">
                   <div className="flex items-center">
                      <span role="img" className="w-5 flex  notranslate ltr:mr-3 rtl:mrl-3 icon-size-5 mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="map-pin" data-mat-icon-namespace="heroicons_solid">
                         <svg className="fill-gray-500"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path fill-rule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path>
                         </svg>
                      </span>
                      <span className="ltr:prl2 rtl:pr-2">{user.employeeProfile.cityAr}, {user.employeeProfile.countryAr}</span>
                   </div>
                   <div className="mt-4 flex items-center">
                      <span role="img" className="flex w-5 notranslate ltr:mr-3 rtl:ml-3 icon-size-5 fill-gray-500" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="briefcase" data-mat-icon-namespace="heroicons_solid">
                         <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"  height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path fill-rule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd"></path>
                            <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z"></path>
                         </svg>
                      </span>
                      <span className="">{user.employeeProfile.jobTitleAr}</span>
                   </div>
                   <div className="mt-4 flex items-center">
                      <span role="img" className="w-5 flex ltr:mr-3 rtl:ml-3 icon-size-5 mat-icon-no-color" aria-hidden="true" data-mat-icon-type="svg" data-mat-icon-name="cake" data-mat-icon-namespace="heroicons_solid">
                         <svg className="fill-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" height="100%" width="100%" preserveAspectRatio="xMidYMid meet" focusable="false">
                            <path d="M15 1.784l-.796.796a1.125 1.125 0 101.591 0L15 1.784zM12 1.784l-.796.796a1.125 1.125 0 101.591 0L12 1.784zM9 1.784l-.796.796a1.125 1.125 0 101.591 0L9 1.784zM9.75 7.547c.498-.02.998-.035 1.5-.042V6.75a.75.75 0 011.5 0v.755c.502.007 1.002.021 1.5.042V6.75a.75.75 0 011.5 0v.88l.307.022c1.55.117 2.693 1.427 2.693 2.946v1.018a62.182 62.182 0 00-13.5 0v-1.018c0-1.519 1.143-2.829 2.693-2.946l.307-.022v-.88a.75.75 0 011.5 0v.797zM12 12.75c-2.472 0-4.9.184-7.274.54-1.454.217-2.476 1.482-2.476 2.916v.384a4.104 4.104 0 012.585.364 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 013.67 0 2.605 2.605 0 002.33 0 4.104 4.104 0 012.585-.364v-.384c0-1.434-1.022-2.7-2.476-2.917A49.138 49.138 0 0012 12.75zM21.75 18.131a2.604 2.604 0 00-1.915.165 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-2.33 0 4.104 4.104 0 01-3.67 0 2.604 2.604 0 00-1.915-.165v2.494c0 1.036.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875v-2.494z"></path>
                         </svg>
                      </span>
                      <span className="leading-none">{user.employeeProfile.degreeAr}</span>
                   </div>
                </div>
                <a className="mt-8 px-6 text-center py-2 rounded-3xl bg-[#4f46e5] text-white mat-primary " href="/pages/profile">
                <span className="text-md">{seeBio}</span>
                </a>
             </div>}


            <div className="bg-white  p-6 border border-gray-300 shadow-md rounded-lg ">
               <div className="">
                  <div className="profile-blog">
                     <h4 className="text-base font-semibold text-blue-600">Today Highlights</h4>
                     <img src={postHight} alt="" className="mt-4 mb-4 w-100 rounded" />
                     <h4><a href="post-details.html" className="text-black text-base my-2 font-semibold">Creative Ticket Agency Theme</a></h4>
                     <p className="mb-0 mt-3 text-gray-600 text-md">A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                  </div>
               </div>
            </div>


        </div>

        <div className="sm:col-span-2   sm:cols-start-2 space-y-6">
         <div className="p-5 pt-2 bg-white rounded-xl border border-gray-300 shadow-md">
            <div className="px-2 py-2 mb-2  border-b border-b-gray-200">
               <span className="text-md text-gray-700 font-semibold">{generalInfo}</span>
            </div>
            <div className="py-2">
               <div className="grid sm:grid-cols-2 text-sm gap-x-4 gap-y-6">
                  <div className="flex border-b py-2 border-gray-200">
                     <span className="flex-30 text-cyan-800 font-semibold ltr:border-r rtl:border-l border-gray-300">
                        {firstName }  
                     </span>
                     <span className="flex-70 pltr:pl-4 rtl:pr-4 text-gray-800 font-semibold ">
                        {locale === 'en' ? user.employeeProfile.firstName
                        : user.employeeProfile.firstNameAr
                        }
                     </span>
                  </div>
                  <div className="flex border-b py-2 border-gray-200">
                     <span className="flex-30 text-cyan-800  font-semibold ltr:border-r rtl:border-l border-gray-300">
                        {lastName }  
                     </span>
                     <span className="flex-70 ltr:pl-4 rtl:pr-4 text-gray-800  font-semibold">
                        {locale === 'en' ? user.employeeProfile.lastName
                        : user.employeeProfile.lastNameAr
                        }
                     </span>
                  </div>
                  <div className="flex border-b py-2 border-gray-200">
                     <span className="flex-30 text-cyan-800  font-semibold ltr:border-r rtl:border-l border-gray-300">
                        {dateOfJoin }  
                     </span>
                     <span className="flex-70 pxltr:pl-4 rtl:pr-4 text-gray-800  font-semibold">
                        {locale === 'en' ? user.employeeProfile.dateOfJoining?.toString()
                        : user.employeeProfile.dateOfJoining?.toString()
                        }
                     </span>
                  </div>
                  <div className="flex border-b py-2 border-gray-200">
                     <span className="flex-30 text-cyan-800  font-semibold ltr:border-r rtl:border-l border-gray-300">
                        {jobTitle }  
                     </span>
                     <span className="flex-70 ltr:pl-4 rtl:pr-4 text-gray-800  font-semibold">
                        {locale === 'en' ? user.employeeProfile.jobTitle
                        : user.employeeProfile.jobTitleAr
                        }
                     </span>
                  </div>
                  <div className="flex border-b py-2 border-gray-200">
                     <span className="flex-30 text-cyan-800  font-semibold ltr:border-r rtl:border-l border-gray-300">
                        {degree }  
                     </span>
                     <span className="flex-70 ltr:pl-4 rtl:pr-4 text-gray-800  font-semibold">
                        {user.employeeProfile.degreeAr}
                     </span>
                  </div>
                  <div className="flex border-b py-2 border-gray-200">
                     <span className="flex-30 text-cyan-800  font-semibold ltr:border-r rtl:border-l border-gray-300">
                        {jobTitle }  
                     </span>
                     <span className="flex-70 ltr:pl-4 rtl:pr-4 text-gray-800  font-semibold">
                        {user.employeeProfile.jobTitleAr}
                     </span>
                  </div>
               </div>
            </div>
          </div>
         

         
         <div className="p-5 pt-2 bg-white rounded-xl border border-gray-300 shadow-md">
            <div className="px-2 py-2 mb-2  border-b border-b-gray-200">
               <span className="text-md text-gray-700 font-semibold">{contactInfo}</span>
            </div>
            <div className="py-2">
               <div className="flex flex-wrap text-sm gap-x-4 gap-y-6">
                  <div className="flex-48 flex border-b py-2 border-gray-200">
                     <span className="flex-30 text-cyan-800 font-semibold ltr:border-r rtl:border-l border-gray-300">
                        { country}  
                     </span>
                     <span className="flex-70 pltr:pl-4 rtl:pr-4 text-gray-800 font-semibold ">
                        {locale === 'en' ? user.employeeProfile.country
                        : user.employeeProfile.countryAr
                        }
                     </span>
                  </div>
                  <div className="flex-48 flex border-b py-2 border-gray-200">
                     <span className="flex-30 text-cyan-800  font-semibold ltr:border-r rtl:border-l border-gray-300">
                        {city }  
                     </span>
                     <span className="flex-70 ltr:pl-4 rtl:pr-4 text-gray-800  font-semibold">
                        {locale === 'en' ? user.employeeProfile.city
                        : user.employeeProfile.cityAr
                        }
                     </span>
                  </div>
                  <div className="flex-100 flex border-b py-2 border-gray-200">
                     <span className="flex-15 text-cyan-800  font-semibold ltr:border-r rtl:border-l border-gray-300">
                        {address }  
                     </span>
                     <span className="flex-85 pxltr:pl-4 rtl:pr-4 text-gray-800  font-semibold">
                        {locale === 'en' ? user.employeeProfile.address
                        : user.employeeProfile.address
                        }
                     </span>
                  </div>
                  <div className="flex-48 flex border-b py-2 border-gray-200">
                     <span className="flex-30 text-cyan-800  font-semibold ltr:border-r rtl:border-l border-gray-300">
                        {postalCode }  
                     </span>
                     <span className="flex-70 ltr:pl-4 rtl:pr-4 text-gray-800  font-semibold">
                        {locale === 'en' ? user.employeeProfile.postalCode
                        : user.employeeProfile.postalCode
                        }
                     </span>
                  </div>
                 
                 
               </div>
            </div>
          </div>
      
        </div>

        {/* <div className="sm:col-span-2   sm:cols-start-2 space-y-6">
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
        </div> */}


      </div>
   </div>   
)
};
export default ProfilePage;