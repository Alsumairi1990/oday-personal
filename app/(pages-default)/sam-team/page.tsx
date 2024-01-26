import ServicesFull from "@/app/_components/ServicesFull";


const CompanyTeam = () => {
    const imagePath = 'https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/d3mds3ychln71.cloudfront.net/img/banners/38609a28efe1da66fb338fe868fc4428.our-team-banner.jpg';
    const imagePath1 = '/images/curve.png';
    const imagePath2 = '/images/service2.png';
 
   return (
      <div className="w-full">
       <div className=" m-h-lvh sm:min-h-[28rem] sm:h-[28rem] pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath})`}}>
          <div className="flex flex-wrap w-11/12 mx-auto">
             <div className="flex-100 sm:flex-60">
             <span className="text-md text-white mb-6 inline-block">Home / mobile development </span>
                 <h2 className="text-4xl text-white font-extrabold mb-4">API Integration Services</h2>
                 <h2 className="text-4xl text-white font-bold mb-4">Best API Integration Company</h2>
                 <p className="text-mdnav text-gray-100 leading-7">Let our team of Experts take care of your business app with application maintenance and support services that can help you ensure that your application is secure, up-to-date, and running at peak performance.</p>
                 <div className="flex  mt-6 items-center  ">
                    <div className="pl-2 pr-4 flex items-center py-2 rounded-md bg-[#f85508] ">
                       <span className="w-6  mr-1 bainline-block">
                       <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#fff"/>
                          </svg>                     </span>
                       <span className=" inline-block text-white text-base font-semibold ">Talk to  Consultant </span>
                    </div>
                    <div className=" pl-2 pr-4 flex items-center py-2 rounded-md ml-4 bg-white" style={{boxShadow:'rgb(87 156 217) 0px 0px 10px 1px'}}>
                    <span className=" inline-block text-blue-500 text-base font-semibold  ">Contact  </span>
                    </div>
                    
  
                 </div>
             </div>
             
             <div className=" hidden sm:flex flex-100 sm:flex-40">
             <img className="w-full z-20" src={imagePath2} alt="" />
             </div>
          </div>
         </div>
         

         
 
 
         <div className="w-full mt-8 bg-[#f4f2ff]">
          <div className="w-11/12 mx-auto">
          <div className="p-2 grid grid-cols-1  sm:grid-cols-2">
             <div className="p-2">
                <img className="w-full " src="https://www.controlf5.in/wp-content/uploads/2024/01/Herosectionrightimage.webp" alt="" />
             </div>
             <div className="p-4 pl-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">We Are ControlF5</h2>
                <p className="text-xl font-bold text-gray-700 mb-6 ">Creating advanced and competitive digital solutions for both SMEs and Fortune companies.</p>
               <p className="text-base text-gray-500 font-semibold leading-7">We are a professional website and mobile app company with considerable experience in a variety of high-tech verticals such as eCommerce, finance, banking, healthcare, hospitality, and food and beverage. At its core, we assist our clients in innovating and implementing technological transformations.</p>
               <span className="inline-block text-white text-base font-semibold px-3 py-1.5 bg-violet-600 rounded mt-6">Get More </span>
             </div>
 
          </div>
          </div>
         
         </div>
 
      </div>
   )
 };
 export default CompanyTeam;