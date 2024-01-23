

const Serivice = () => {
   const imagePath = '/images/777.png';
   const imagePath1 = '/images/curve.png';
   const imagePath2 = '/images/service2.png';

  return (
     <div className="w-full">
      <div className=" min-h-lvh pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath})`}}>
         <div className="flex w-11/12 mx-auto">
            <div className="flex-60">
               <span className="text-sm text-white mb-6 inline-block">Home / mobile development </span>
               <h2 className="text-4xl text-white font-bold mb-4">App Maintenance Company</h2>
               <p className="text-sm text-gray-100 leading-7">Let our team of Experts take care of your business app with application maintenance and support services that can help you ensure that your application is secure, up-to-date, and running at peak performance.</p>
               <div className="flex  mt-6 items-center ">
                  <div className="pl-2 pr-4 flex items-center
                   py-2 rounded-md bg-white">
                     <span className="w-6  mr-1 inline-block">
                     <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#1C274C"/>
                        </svg>                     </span>
                     <span className=" inline-block text-blue-500 text-base font-semibold  ">Contact US </span>
                  </div>
                  

               </div>
            </div>
            <div className="flex-40">
            <img className="w-full z-20" src={imagePath2} alt="" />
            <span className="absolute top-[25%] w-12 left-[60%] z-10"><img src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/mobile/Header/Mobile-Common-Icon-4.png" alt="" /></span>

            <span className="absolute top-[30%] w-10 right-8 z-10"><img src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/mobile/Header/Mobile-Common-Icon-5.png" alt="" /></span>
            <span className="absolute bottom-[30%] w-16 left-[50%] z-10"><img src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/mobile/Header/Mobile-Common-Icon-3.png" alt="" /></span>

            </div>
         </div>

        <div className="absolute left-0 bottom-0">
         <img className="w-full" src={imagePath1} alt="" />
        </div>
        </div>

     </div>
  )
};
export default Serivice;