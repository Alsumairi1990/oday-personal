'use client'
// import React from 'react';
import React, { useState } from 'react';
interface ChildProps {
  handleClick: (newValue: boolean) => void; 
}
const TopNav = (props:ChildProps) => {
   const imagePath = '/images/navbg.webp';
   const imagePath2 = '/images/logo.png';
   const evetAct = ()=> {
}
      const [openNav, setOpenNav] = useState(true);
      const changeParentValue = () => {
       setOpenNav((prevState) => !prevState); 
       props.handleClick(!openNav); 
      };
    // document.addEventListener("click", function(event) {

        // let menus = document.getElementsByClassName('auth-menu');
        // let closest = event.target.closest('.auth-menu');
        // if(event.target.closest(".openAuthBtn")) {
        //     let prnt=  event.target.closest('.auth-outer');
        //     let cu1 = prnt.querySelector('.auth-menu');
        //     const drop = document.getElementById('dropDis');
        //       if(!cu1.classList.contains("opend-src")){
        //         for (let menu of menus) {
        //                 menu.classList.remove('opend-src');
        //             }
        //          cu1.classList.add('opend-src');
        //       }
        //       else if(cu1.classList.contains("opend-src") ){

        //             for (let menu of menus) {
        //                   menu.classList.remove('opend-src');

        //                   }
        //         }
        //     }
        // else if(event.target.closest(".auth-menu")) return ;
        // else if (!closest) {
        //         for (let menu of menus) {
        //                   menu.classList.remove('opend-src');

        //                   }
        //   }
        // })
   // }
  return (
    <div className="flex h-14 items-centre justify-center sticky top-0 z-40">
        <div id='logoMenu' style={{transition: 'width 0.9s ease-in-out' }} className=" flex h-full bg-[#020910] items-center max-sm:min-w-0 max-sm:w-0 sm:min-w-[240px] border-b border-b-gray-800">
            <div className="w-10">
                <img className="w-full" src={imagePath2} alt="" />
            </div>
            <div className="ml-2">
                <span className="text-base font-semibold text-white capitalized">
                    SAM TECHNOLOGIES
                </span>
            </div>
        </div>
        <div className="w-full  flex items-center bg-white border-b border-b-gray-200" style={{boxShadow:'0 10px 30px 0 rgb(82 63 104 / 6%)'}}>
            <div className="pl-2">
             <div className="  flex items-center h-full">
                    <span onClick={changeParentValue}  className="w-8">
                    <svg width="100%" height="100%" className="ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Menu / Menu_Alt_03">
                    <path id="Vector" d="M5 17H13M5 12H19M5 7H13" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    </svg>
                    </span>


                    <span className=" pl-3">
                        <span className="text-[#4b7b98] text-lg font-medium" >Scholarship | Adding Data</span>
                    </span>

                </div>
            </div>
            <div className="ml-auto">
            <div className="flex p-1 mr-2 items-center flex-row-reverse gap-x-3 ">
          <div className="auth-outer relative rounded-md ">
                      <button  className=" openAuthBtn max-sm:hidden border-x cursor-pointer border-y border-x-gray-200 border-y-200 flex items-center bg-[#f9f9f9] rounded-3xl px-2.5 py-1.5" type="button">
                        <span  className="mr-2 flex items-center">
                        <span className="text-sm font-semibold text-gray-700">Ahmed</span>
                        </span>
                        <span className="flex items-center">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                  width="26px" height="26px" viewBox="0 0 800 800" enable-background="new 0 0 800 800" >
                <circle fill="#FDE0D2" stroke="#F47D2A" stroke-width="14" stroke-miterlimit="10" cx="401.486" cy="403.474" r="385.666"/>
                <path fill="#F47920" d="M615.836,603.92c-0.537-6.221-2.008-12.369-4.213-18.314c-12.099-32.615-47.855-60.487-96.58-77.602
                  c-15.717-5.581-32.862-9.936-50.932-13.056l-5.847-34.064h-0.033v-0.065c11.829-11.498,22.926-27.871,35.893-51.798
                  c2.071,0.933,4.344,1.736,6.684,1.071c8.955-2.676,13.032-14.844,15.504-22.126l0.27-0.804c1.804-5.476,3.54-11.56,5.279-19.249
                  c0.4-1.534,0.87-3.204,1.337-5.078c1.671-6.286,3.608-13.505,2.807-19.718c-0.802-6.416-4.076-11.696-8.754-14.366
                  c-2.609-1.411-5.415-2.01-8.289-1.809c2.138-8.29,5.347-23.929,5.079-42.244c-0.133-12.427-1.871-24.059-5.212-34.751
                  c-6.884-22.062-19.786-18.047-19.786-18.047c-1.27-2.879-0.533-19.517-19.448-34.358c-0.065-0.131-0.136-0.197-0.268-0.197
                  c-8.221-6.553-20.185-12.564-37.63-17.048c-0.936-0.26-1.869-0.463-2.871-0.731c-6.886-1.807-15.241-3.61-23.796-4.412
                  c-0.735-0.063-1.47-0.13-2.342-0.063c-4.609-0.537-9.421-1.006-14.57-1.338c-69.375-4.681-80.403-19.452-80.403-19.452
                  s2.672,15.972,11.494,37.694c-28.939-0.869-38.565-10.026-39.634-11.089c1.002,2.337,9.959,21.252,26.133,41.773
                  c-15.306,10.829-20.651,22.257-21.99,25.665c-0.132,0.399-0.198,0.73-0.266,0.869c0.134-0.139,0.4-0.269,1.068-0.536h0.069
                  c1.402-0.666,4.343-1.403,10.627-2.207c-0.669,1.874-1.272,3.813-1.805,5.75c-0.067,0.194-0.134,0.398-0.134,0.666
                  c-2.808,9.824-4.278,20.456-4.412,31.813c-0.2,18.38,3.009,33.954,5.08,42.244c-2.873-0.268-5.612,0.397-8.22,1.809
                  c-4.745,2.669-7.953,7.883-8.755,14.3c-0.803,6.278,1.069,13.497,2.807,19.848c0.469,1.809,0.935,3.545,1.27,5.079
                  c1.805,7.623,3.475,13.707,5.347,19.183l0.267,0.869c2.405,7.218,6.55,19.386,15.438,22.062c2.34,0.665,4.681-0.139,6.751-1.071
                  c12.967,23.927,23.995,40.3,35.825,51.863v0.197l-5.813,33.867c-18.059,3.12-35.15,7.475-50.866,13.056
                  c-48.792,17.114-84.548,44.986-96.579,77.602c-2.541,6.683-4.012,13.635-4.413,20.717v0.065c-0.133,1.206-0.133,2.473-0.2,3.681
                  v42.577h429.299c0-7.825,0.066-15.111,0.066-22.063v-20.514C616.169,608.056,616.103,605.988,615.836,603.92z"/>
                </svg>
                </span>

                      </button>

                      <div className="z-10 auth-menu absolute top-12 hidden bg-white rounded-md border !border-gray-300 shadow w-full mt-2 dark:bg-gray-700" style={{boxShadow: 'rgb(0 0 0 / 3%) 0px 12.5px 10px, rgb(0 0 0 / 6%) 0px 100px 80px'}}>
                          <div className="h-48 px-2 pb-3 pt-1 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" >
                              <span>uwhfu</span>
                          </div>

                      </div>
        </div>



        <div className=" auth-outer relative rounded-md ">
        <div  className=" openAuthBtn max-sm:hidden border-x cursor-pointer border-y border-x-gray-200 border-y-200 flex items-center justify-center bg-[#f9f9f9] rounded-3xl w-9 h-9" >
                  <span className="icon dark-icon relative">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 18.865a.725.725 0 0 1-.534-.215.726.726 0 0 1-.216-.535c0-.213.072-.39.216-.534A.726.726 0 0 1 5 17.365h1.25v-7.25A5.63 5.63 0 0 1 7.5 6.534c.833-1.056 1.917-1.732 3.25-2.026v-.7c0-.353.12-.65.36-.89s.537-.36.89-.36c.352 0 .649.12.89.36.24.24.36.537.36.89v.7c1.333.294 2.417.97 3.25 2.026a5.63 5.63 0 0 1 1.25 3.581v7.25H19c.212 0 .39.072.534.216a.726.726 0 0 1 .216.535c0 .212-.072.39-.216.534a.726.726 0 0 1-.534.215H5Zm7 2.943c-.492 0-.917-.175-1.273-.525A1.73 1.73 0 0 1 10.192 20h3.616c0 .505-.175.933-.525 1.283-.35.35-.778.525-1.283.525Zm-4.25-4.443h8.5v-7.25c0-1.168-.416-2.169-1.249-3.001-.833-.833-1.834-1.249-3.003-1.249-1.17 0-2.17.416-3 1.249-.832.832-1.248 1.833-1.248 3.001v7.25Z" fill="#333"></path>
                    </svg>
                  <span className="absolute bg-orange-500 dark:bg-fuchsia-500 right-1 rounded-full h-2.5 w-2.5 top-0 z-20"></span>
                  </span>
                </div>

                <div className="z-10 auth-menu absolute top-12 hidden bg-white rounded-md border !border-gray-300 shadow w-full mt-2 dark:bg-gray-700" style={{boxShadow: 'rgb(0 0 0 / 3%) 0px 12.5px 10px, rgb(0 0 0 / 6%) 0px 100px 80px'}}>
                    <div className="h-48 px-2 pb-3 pt-1 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" >
                        <span>uwhfu</span>
                    </div>
                </div>
        </div>



        <div className=" auth-outer relative rounded-md ">
                <div  className=" openAuthBtn max-sm:hidden border-x cursor-pointer border-y border-x-gray-200 border-y-200 flex items-center justify-center bg-[#f9f9f9] rounded-3xl w-9 h-9" >
                  <span className="flex items-center pl-1.5 pt-1">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
                    <path className="fill-[#a9a7a7] opacity-" d="M16.172 5.313h-.375v3.562a3.19 3.19 0 0 1-3.187 3.188H3.798v1.687c0 1.137.925 2.062 2.062 2.062h.937V17.5a.562.562 0 0 0 .977.38l1.895-2.068h6.503a2.064 2.064 0 0 0 2.062-2.062V7.375a2.065 2.065 0 0 0-2.062-2.063Z"></path>
                    <path fill="currentColor" d="M12.61.813H1.734A1.69 1.69 0 0 0 .047 2.5v6.375c0 .93.757 1.688 1.688 1.688H12.61a1.69 1.69 0 0 0 1.688-1.688V2.5A1.691 1.691 0 0 0 12.609.812Zm.187 3.33L7.742 6.595a1.273 1.273 0 0 1-1.14 0L1.547 4.143V2.897L7.09 5.584c.053.03.112.03.165 0l5.543-2.686-.001 1.244Z"></path>
                  </svg>
                  </span>
                </div>

                <div className="z-10 auth-menu absolute top-12 hidden bg-white rounded-md border !border-gray-300 shadow w-full mt-2 dark:bg-gray-700" style={{boxShadow: 'rgb(0 0 0 / 3%) 0px 12.5px 10px, rgb(0 0 0 / 6%) 0px 100px 80px'}}>
                    <div className="h-48 px-2 pb-3 pt-1 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" >
                        <span>uwhfu</span>
                    </div>
                </div>
        </div>

        <div className=" auth-outer relative rounded-md ">
                <div  className=" openAuthBtn max-sm:hidden border-x cursor-pointer border-y border-x-gray-200 border-y-200 flex items-center justify-center bg-[#f9f9f9] rounded-3xl w-9 h-9" >
                  <span className="flex items-center ">
                  <svg className="fill-slate-500 icon flat-color" width="18px" height="18px" viewBox="0 0 24 24" id="maximize-size" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg"><path id="secondary" d="M9.71,8.29a1,1,0,0,1,0,1.42,1,1,0,0,1-1.42,0L4,5.41V8A1,1,0,0,1,2,8V4A2,2,0,0,1,4,2H8A1,1,0,0,1,8,4H5.41ZM21,15a1,1,0,0,0-1,1v2.59l-4.29-4.3a1,1,0,0,0-1.42,1.42L18.59,20H16a1,1,0,0,0,0,2h4a2,2,0,0,0,2-2V16A1,1,0,0,0,21,15Z" style={{fill: 'rgb(44, 169, 188)'}}></path><path id="primary" d="M9.71,14.29a1,1,0,0,1,0,1.42L5.41,20H8a1,1,0,0,1,0,2H4a2,2,0,0,1-2-2V16a1,1,0,0,1,2,0v2.59l4.29-4.3A1,1,0,0,1,9.71,14.29ZM20,2H16a1,1,0,0,0,0,2h2.59l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L20,5.41V8a1,1,0,0,0,2,0V4A2,2,0,0,0,20,2Z" ></path></svg>
                  </span>
                </div>

                <div className="z-10 auth-menu absolute top-12 hidden bg-white rounded-md border !border-gray-300 shadow w-full mt-2 dark:bg-gray-700" style={{boxShadow: 'rgb(0 0 0 / 3%) 0px 12.5px 10px, rgb(0 0 0 / 6%) 0px 100px 80px'}}>
                    <div className="h-48 px-2 pb-3 pt-1 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" >
                        <span>uwhfu</span>
                    </div>
                </div>
        </div>




</div>










            </div>


        </div>
    </div>
  )
};


export default TopNav;
