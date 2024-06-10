
import React from 'react';
 
interface Project {
   id : number
   name: string;
   image: string; 
   achived : string;

}
 interface Props {
      project : Project
 }

const Project = ({project}:Props) => {
        const imagePath1 = '/images/logo.png';

  return (
     <div className="">
             <div className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-4 border-b">
                   <div className="flex items-center">
                      <div className="flex items-center">
                         <div className="mr-4">
                            <img src={project.image} alt="Avatar" className="rounded-full bg-red-100 border border-red-200 w-10 h-10" />
                         </div>
                         <div className="mr-2">
                            <h5 className="mb-0"><a href="javascript:;" className="stretched-link text-gray-900">Social Banners</a></h5>
                            <div className="text-gray-700"><span className="font-medium">Client: </span><span>Christian Jimenez</span></div>
                         </div>
                      </div>
                      <div className="ml-auto hidden">
                         <div className="relative">
                            <button type="button" className="p-2" data-bs-toggle="dropdown" aria-expanded="false"><i className="ri-more-2-line text-gray-500"></i></button>
                            <ul className="dropdown-menu dropdown-menu-end absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
                               <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="javascript:void(0);">Rename project</a></li>
                               <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="javascript:void(0);">View details</a></li>
                               <li><a className="block px-4 py-2 text-gray-700 hover:bg-gray-100" href="javascript:void(0);">Add to favorites</a></li>
                               <li>
                                  <hr className="my-2 border-t border-gray-200" />
                               </li>
                               <li><a className="block px-4 py-2 text-red-600 hover:bg-gray-100" href="javascript:void(0);">Leave Project</a></li>
                            </ul>
                         </div>
                      </div>
                   </div>
                </div>
                <div className="p-4">
                   <div className="flex items-center flex-wrap">
                      <div className="bg-gray-100 px-3 py-2 rounded-lg mr-auto mb-4">
                         <p className="mb-1"><span className="font-medium text-gray-900">$24.8k</span> <span>/ $18.2k</span></p>
                         <span className="text-gray-700">Total Budget</span>
                      </div>
                      <div className="text-left mb-4">
                         <p className="mb-1"><span className="font-medium text-gray-900">Start Date: </span> <span>14/2/21</span></p>
                         <p className="mb-1"><span className="font-medium text-gray-900">Deadline: </span> <span>28/2/22</span></p>
                      </div>
                   </div>
                   <p className="mb-0 text-gray-700">We are Consulting, Software Development and Web Development Services.</p>
                </div>
                <div className="p-4 border-t">
                   <div className="flex items-center mb-4">
                      <p className="mb-1"><span className="font-medium text-gray-900">All Hours: </span> <span>380/244</span></p>
                      <span className="bg-red-100 text-red-800 text-xs font-semibold ml-auto px-2.5 py-0.5 rounded">Developer</span>
                   </div>
                   <div className="flex justify-between items-center mb-2">
                      <small className="text-gray-700">Task: 290/344</small>
                      <small className="text-gray-700">75% Completed</small>
                   </div>
                   <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div className="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
                   </div>
                   <div className="flex items-center">
                      <div className="flex items-center">
                         
                      </div>
                      <div className="ml-auto">
                         <a href="javascript:void(0);" className="text-gray-500 flex items-center"><i className="ri-wechat-line ri-24px mr-1"></i>15</a>
                      </div>
                   </div>
                </div>
             </div>
          </div>
  );
};

export default Project;