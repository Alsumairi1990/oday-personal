

const Portfolio = () => {
    const imagePath = 'https://dcstatic.com/images/background/background-about-us-c188d84f24.svg';
    const imagePath1 = '/images/curve.png';
    const imagePath2 = '/images/service2.png';
    
   return (
      <div className="w-full" >
         <div className="w-full bg-white mt-8" style={{backgroundImage: `linear-gradient(180deg,rgba(255,255,255,0) 0%,rgb(248 248 248) 100%)`}}>
          <div className="w-12/12 mx-auto">
          <div className="p-2 grid grid-cols-2">
             
             <div className="p-4 pl-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3">We Are ControlF5</h2>
                <p className="text-xl font-bold text-gray-700 mb-6 ">Creating advanced and competitive digital solutions for both SMEs and Fortune companies.</p>
               <p className="text-base text-gray-500 font-semibold leading-7">We are a professional website and mobile app company with considerable experience in a variety of high-tech verticals such as eCommerce, finance, banking, healthcare, hospitality, and food and beverage. At its core, we assist our clients in innovating and implementing technological transformations.</p>
               <span className="inline-block text-white text-base font-semibold px-3 py-1.5 bg-violet-600 rounded mt-6">Get More </span>
             </div>
             <div className="p-2">
                <img className="w-full " src="https://dcstatic.com/images/hero/about-us-5b9c2f1b66.png" alt="" />
             </div>
          </div>
          </div>
         </div>
 
        <div className="my-12 grid grid-cols-2 gap-x-4 gap-y-4 mx-auto w-10/12 p-6">
            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">1- main page </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/ ]</span>
            </div>

         

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">2- Services (services page ) </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/services]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">3- Service ( Single page ) </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/services/( serviceName ) ]</span>
            </div>



            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">4- Service Categories </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/service-categories]</span>
            </div>


            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">5- Service Category (single page) </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/service-categories/(categoryName)]</span>
            </div>
           



            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">6- works (works page ) </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/works ]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">7- work ( Single page ) </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/works/( workName  ) ]</span>
            </div>



            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">8- works Categories </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/work-categories]</span>
            </div>


            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">9- work Category (single page) </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/work-categories/(categoryName)]</span>
            </div>
           

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">10- blogs  (blogs page) </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/blogs]</span>
            </div>


            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">11- blog  (single page) </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/blogs/[blogTitle]]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">12- blog categories </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/blog-categories]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">13- blog categories(single) </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/blog-categories/(category)]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">14- portfolio </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/portfolio]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">15- testimonials </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/testimonials]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">16- service application pafe </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/service/app]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">17- contact us </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/contact]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">18- how it works </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/how-it-work]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">19- Login page</span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/login]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">20- sign up </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/signup]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">21- reset password </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/reset-password]</span>
            </div>

            <div className="flex items-center py-1 text-gray-700 font-semibold">
                <span className="mr-3 capitalize">22- Our Team page </span>
                <span className="w-5 inline-block">
                    <svg width="100%" height="100%" viewBox="0 0 117 117" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <title/><desc/><defs/>
                        <g fill="none" fill-rule="evenodd" id="Page-1" stroke="none" stroke-width="1">
                        <g fill-rule="nonzero" id="correct">
                        <path d="M34.5,55.1 C32.9,53.5 30.3,53.5 28.7,55.1 C27.1,56.7 27.1,59.3 28.7,60.9 L47.6,79.8 C48.4,80.6 49.4,81 50.5,81 C50.6,81 50.6,81 50.7,81 C51.8,80.9 52.9,80.4 53.7,79.5 L101,22.8 C102.4,21.1 102.2,18.5 100.5,17 C98.8,15.6 96.2,15.8 94.7,17.5 L50.2,70.8 L34.5,55.1 Z" fill="#17AB13" id="Shape"/>
                        <path d="M89.1,9.3 C66.1,-5.1 36.6,-1.7 17.4,17.5 C-5.2,40.1 -5.2,77 17.4,99.6 C28.7,110.9 43.6,116.6 58.4,116.6 C73.2,116.6 88.1,110.9 99.4,99.6 C118.7,80.3 122,50.7 107.5,27.7 C106.3,25.8 103.8,25.2 101.9,26.4 C100,27.6 99.4,30.1 100.6,32 C113.1,51.8 110.2,77.2 93.6,93.8 C74.2,113.2 42.5,113.2 23.1,93.8 C3.7,74.4 3.7,42.7 23.1,23.3 C39.7,6.8 65,3.9 84.8,16.2 C86.7,17.4 89.2,16.8 90.4,14.9 C91.6,13 91,10.5 89.1,9.3 Z" fill="#4A4A4A" id="Shape"/>
                        </g></g>
                        </svg>
                </span>
                <span className="text-gray-600 font-semibold text-md ml-4 border-l border-l-gray-400 pl-4">[ oday-app/sam-team]</span>
            </div>
           
           
           
           
           
            
            
        </div>
      </div>
   )
 };
 export default Portfolio;