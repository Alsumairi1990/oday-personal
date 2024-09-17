import PanelSearch from "@/app/_components/SearchPanel";


const Process = () => {
    const imagePath = 'https://dcstatic.com/images/background/background-about-us-c188d84f24.svg';
    const imagePath1 = '/images/w003.jpg';
    const imagePath2 = 'https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/d3mds3ychln71.cloudfront.net/img/heading-sapreter.png';
    const imagePath3 = "https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/d3mds3ychln71.cloudfront.net/img/heading-sapreter-right.png"
    const imagePath4 = "https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/www.konstantinfo.com/img/ux-ui-design-img.png"
    const imagePath5 = "https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/www.konstantinfo.com/img/development-execution-img.png"
    const imagePath6 = "https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/www.konstantinfo.com/img/quality-assurance-img.png"
    const imagePath7 = "https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/www.konstantinfo.com/img/launch-img.png"

    return (
      <div className="w-full" >
        <div className=" m-h-lvh sm:min-h-[28rem] sm:h-[28rem] pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath1})`}}>
            <div className="w-full h-full absolute left-0 top-0 bg-black z-10 opacity-70"></div>
            <div className="flex flex-wrap w-11/12 mx-auto z-20">
            <div className="flex w-full flex-col items-center justify-center ">
                {/* <img className="w-14 mb-2" src="https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/d3mds3ychln71.cloudfront.net/img/white-heart-img.png" alt="" /> */}
                <h2 className="text-4xl text-white tracking-wider font-bold mb-1">The Highest Standards. The Happiest Clients.</h2>

                <div className="py-4 w-full">
                    <PanelSearch />
                </div>
                <p className="text-md  text-gray-100 uppercase tracking-wide leading-7">WE LOVE OUR CLIENTS AND THEY LOVE US BACK. HEAR WHAT THEY’RE SAYING…</p>
                <div className="flex flex-col items-center  ">
                    <p className="text-md  text-orange-500">*Ratings base a claim on observations by various global IT research firms.*</p>
                </div>
            </div>
            </div>
        </div>
        

        <div className="p-2 w-10/12 py-16 mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="text-3xl text-balck-150 tracking-wider font-bold mb-2">The Highest Standards</h2>
                <p className="text-md  text-gray-700 uppercase tracking-wide leading-7">WE LOVE OUR CLIENTS AND THEY LOVE US BACK. HEAR WHAT THEY’RE SAYING…</p>
            </div>
            <div className="mt-12">
                <div className="relative pl-6 border-l-2 border-dashed border-b-2 border-b-gray-300 pb-7 rounded-bl-[3rem]  border-l-gray-300">
                    <div className="absolute -left-7 -top-6 flex justify-center items-center bg-[#1ac0ff] w-14 h-14 rounded-full">
                        <span className="text-white font-medium text-sm">01</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-5">
                        <div className="col-span-2">
                            <div className="flex flex-wrap sm:pl-10 ">
                                <div className="flex-100 max-sm:flex justify-center sm:flex-10">
                                    <img className="w-16  sm-full" src={imagePath4} alt=""  />
                                </div>
                                <div className="flex-100 sm:flex-90 sm:pl-8">
                                    <div className="bg-no-repeat bg-left-bottom pb-5 " style={{backgroundImage: `url(${imagePath2})`}}>
                                    <h2 className="text-lg max-sm:pt-2 max-sm:text-center sm:text-3xl text-blue-500 font-medium capitalize">Sketching Your Idea</h2>
                                    </div>
                                    <div className="p-2 sm:pl-4 sm:pr-8">
                                        <p className="text-md text-gray-700 tracking-wide  leading-8">As clients express an interest in doing business with us, our expert strategists begin the work process. Once everyone begin the work process in the team has an agreement on an idea, all of us immerse ourselves in the project.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="pt-3 sm:pl-6 sm:text-lg">
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">First Contact</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">Conceptualizing the Idea</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">In-depth Research and Planning</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">Requirement & Estimation</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <h2 className="border border-dashed border-orange-500 rounded px-4 py-1.5">Project Agreement</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative pr-6 border-r-2 pt-12  -mt-1 border-dashed border-yt-2 border-t-gray-300 border-b-2 border-b-gray-300  pb-10 rounded-r-[3rem]  border-r-gray-300">
                    <div className="absolute -right-5 -top-6 flex justify-center items-center bg-[#1ac0ff] w-14 h-14 rounded-full">
                        <span className="text-white font-medium text-sm">02</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-5">
                     
                        <div className="pt-3 sm:pl-6 max-sm:order-last text-base sm:text-lg ">
                            <div className="flex items-center flex-row-reverse mb-4 marker:selection:font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 flex-row-reverse  border-2 pt-1 border-orange-500 ml-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">First Contact</h2>
                            </div>
                            <div className="flex items-center mb-4 flex-row-reverse font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 flex-row-reverse  border-2 pt-1 border-orange-500 ml-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">Conceptualizing the Idea</h2>
                            </div>
                            <div className="flex items-center flex-row-reverse  mb-4 marker:font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 ml-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">In-depth Research and Planning</h2>
                            </div>
                            <div className="flex items-center flex-row-reverse  mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 ml-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">Requirement & Estimation</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <h2 className="border border-dashed border-orange-500 rounded px-4 py-1.5">Project Agreement</h2>
                            </div>
                        </div>

                        <div className="col-span-2 max-sm:order-first">
                            <div className="flex flex-wrap max-sm:flex-col-reverse sm:pl-10 rtl">
                                
                                <div className="flex-100 sm:flex-90 sm:pr-8">
                                    <div className="bg-no-repeat rot bg-right-bottom pb-5  " style={{backgroundImage: `url(${imagePath3})`}}>
                                       <h2 className="text-lg sm:text-3xl text-center text-blue-500 sm:text-right font-medium capitalize">Sketching Your Idea</h2>
                                    </div>
                                    <div className="p-2 pl-4 pr-8">
                                        <p className="text-md text-gray-700 tracking-wide  leading-8">As clients express an interest in doing business with us, our expert strategists begin the work process. Once everyone begin the work process in the team has an agreement on an idea, all of us immerse ourselves in the project.</p>
                                    </div>
                                    
                                </div>
                                <div className="flex-100 sm:flex-10 max-sm:flex max-sm:justify-center max-sm:mb-2">
                                    <img className="w-20 sm:w-full" src={imagePath5} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="relative pl-6 border-l-2 pt-12 border-dashed border-b-2 border-b-gray-300 pb-7 rounded-bl-[3rem]  border-l-gray-300">
                    <div className="absolute -left-7 -top-6 flex justify-center items-center bg-[#1ac0ff] w-14 h-14 rounded-full">
                        <span className="text-white font-medium text-sm">03</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-5">
                        <div className="col-span-2">
                            <div className="flex flex-wrap sm:pl-10 ">
                                <div className="flex-100 max-sm:flex justify-center sm:flex-10">
                                    <img className="w-16  sm-full" src={imagePath6} alt=""  />
                                </div>
                                <div className="flex-100 sm:flex-90 sm:pl-8">
                                    <div className="bg-no-repeat bg-left-bottom pb-5 " style={{backgroundImage: `url(${imagePath2})`}}>
                                    <h2 className="text-lg max-sm:pt-2 max-sm:text-center sm:text-3xl text-blue-500 font-medium capitalize">Sketching Your Idea</h2>
                                    </div>
                                    <div className="p-2 sm:pl-4 sm:pr-8">
                                        <p className="text-md text-gray-700 tracking-wide  leading-8">As clients express an interest in doing business with us, our expert strategists begin the work process. Once everyone begin the work process in the team has an agreement on an idea, all of us immerse ourselves in the project.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="pt-3 sm:pl-6 sm:text-lg">
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">First Contact</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">Conceptualizing the Idea</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">In-depth Research and Planning</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">Requirement & Estimation</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <h2 className="border border-dashed border-orange-500 rounded px-4 py-1.5">Project Agreement</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative pr-6 border-r-2 pt-12  -mt-1 border-dashed border-yt-2 border-t-gray-300 border-b-2 border-b-gray-300  pb-10 rounded-r-[3rem]  border-r-gray-300">
                    <div className="absolute -right-5 -top-6 flex justify-center items-center bg-[#1ac0ff] w-14 h-14 rounded-full">
                        <span className="text-white font-medium text-sm">04</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-5">
                     
                        <div className="pt-3 sm:pl-6 max-sm:order-last text-base sm:text-lg ">
                            <div className="flex items-center flex-row-reverse mb-4 marker:selection:font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 flex-row-reverse  border-2 pt-1 border-orange-500 ml-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">First Contact</h2>
                            </div>
                            <div className="flex items-center mb-4 flex-row-reverse font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 flex-row-reverse  border-2 pt-1 border-orange-500 ml-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">Conceptualizing the Idea</h2>
                            </div>
                            <div className="flex items-center flex-row-reverse  mb-4 marker:font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 ml-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">In-depth Research and Planning</h2>
                            </div>
                            <div className="flex items-center flex-row-reverse  mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 ml-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">Requirement & Estimation</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <h2 className="border border-dashed border-orange-500 rounded px-4 py-1.5">Project Agreement</h2>
                            </div>
                        </div>

                        <div className="col-span-2 max-sm:order-first">
                            <div className="flex flex-wrap max-sm:flex-col-reverse sm:pl-10 rtl">
                                
                                <div className="flex-100 sm:flex-90 sm:pr-8">
                                    <div className="bg-no-repeat rot bg-right-bottom pb-5  " style={{backgroundImage: `url(${imagePath3})`}}>
                                       <h2 className="text-lg sm:text-3xl text-center text-blue-500 sm:text-right font-medium capitalize">Sketching Your Idea</h2>
                                    </div>
                                    <div className="p-2 pl-4 pr-8">
                                        <p className="text-md text-gray-700 tracking-wide  leading-8">As clients express an interest in doing business with us, our expert strategists begin the work process. Once everyone begin the work process in the team has an agreement on an idea, all of us immerse ourselves in the project.</p>
                                    </div>
                                    
                                </div>
                                <div className="flex-100 sm:flex-10 max-sm:flex max-sm:justify-center max-sm:mb-2">
                                    <img className="w-20 sm:w-full" src={imagePath7} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="relative pl-6 border-l-2 pt-12 border-dashed border-b-2 border-b-gray-300 pb-7 rounded-bl-[3rem]  border-l-gray-300">
                    <div className="absolute -left-7 -top-6 flex justify-center items-center bg-[#1ac0ff] w-14 h-14 rounded-full">
                        <span className="text-white font-medium text-sm">05</span>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-5">
                        <div className="col-span-2">
                            <div className="flex flex-wrap sm:pl-10 ">
                                <div className="flex-100 max-sm:flex justify-center sm:flex-10">
                                    <img className="w-16  sm-full" src="https://cdn-kpbff.nitrocdn.com/BIqbPXrNizxHMrZEuWjiIDigcWJtuMrr/assets/images/optimized/rev-3d7ee36/www.konstantinfo.com/img/mobile-network.png" alt=""  />
                                </div>
                                <div className="flex-100 sm:flex-90 sm:pl-8">
                                    <div className="bg-no-repeat bg-left-bottom pb-5 " style={{backgroundImage: `url(${imagePath2})`}}>
                                    <h2 className="text-lg max-sm:pt-2 max-sm:text-center sm:text-3xl text-blue-500 font-medium capitalize">Sketching Your Idea</h2>
                                    </div>
                                    <div className="p-2 sm:pl-4 sm:pr-8">
                                        <p className="text-md text-gray-700 tracking-wide  leading-8">As clients express an interest in doing business with us, our expert strategists begin the work process. Once everyone begin the work process in the team has an agreement on an idea, all of us immerse ourselves in the project.</p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="pt-3 sm:pl-6 sm:text-lg">
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">First Contact</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">Conceptualizing the Idea</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">In-depth Research and Planning</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <span className="flex w-3 h-3 border-2 pt-1 border-orange-500 mr-4 bg4-orange-500 rounded-md"></span>
                                <h2 className="">Requirement & Estimation</h2>
                            </div>
                            <div className="flex items-center mb-4 font-medium capitalize text-gray-600">
                                <h2 className="border border-dashed border-orange-500 rounded px-4 py-1.5">Project Agreement</h2>
                            </div>
                        </div>
                    </div>
                </div>


           
            </div>

        </div>
      </div>
   )
 };
 export default Process;
