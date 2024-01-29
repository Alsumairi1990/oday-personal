
import ContactForm from "@/app/_components/ContactForm";
const ContactUS = () => {
    const imagePath = 'https://dcstatic.com/images/background/background-about-us-c188d84f24.svg';
    const imagePath1 = 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/main/contact.jpg';
    const imagePath2 = '/images/service2.png';
    const imagePath3 = "https://nextbigtechnology.com/wp-content/uploads/2021/07/contact-bottom.png"
    
   return (
      <div className="w-full p-0" >
         <div className=" m-h-lvh sm:hfull pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath1})`}}>
         {/* <div className="w-full h-full absolute left-0 top-0 bg-black z-10 opacity-70"></div> */}
          <div className="flex flex-wrap w-11/12 mx-auto z-20">
            
             <div className="flex-100 sm:flex-60">
             <span className="text-md text-white mb-6 inline-block">Home / mobile development </span>
                 <h2 className="text-4xl text-white font-extrabold mb-4">API Integration Services</h2>
                 <h2 className="text-4xl text-white font-bold mb-4">Best API Integration Company</h2>
                 <p className="text-mdnav text-gray-100 leading-7">Let our team of Experts take care of your business app with application maintenance and support services that can help you ensure that your application is secure, up-to-date, and running at peak performance.</p>
                 <div className="flex  mt-6 items-center  ">
                    {/* <div className="pl-2 pr-4 flex items-center py-2 rounded-md bg-[#f85508] ">
                       <span className="w-6  mr-1 bainline-block">
                       <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M15 4V5C15 6.88562 15 7.82843 15.5858 8.41421C16.1716 9 17.1144 9 19 9H20.5M20.5 9L18 7M20.5 9L18 11" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                          <path d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" fill="#fff"/>
                          </svg>                     </span>
                       <span className=" inline-block text-white text-base font-semibold ">Talk to  Consultant </span>
                    </div>
                    <div className=" pl-2 pr-4 flex items-center py-2 rounded-md ml-4 bg-white" style={{boxShadow:'rgb(87 156 217) 0px 0px 10px 1px'}}>
                    <span className=" inline-block text-blue-500 text-base font-semibold  ">Contact  </span>
                    </div> */}
                    
  
                 </div>
             </div>
             
             <div className=" hidden sm:flex flex-100 sm:flex-40">
             <img className="w-full z-20" src={imagePath2} alt="" />
             </div>
          </div>
         </div>
         
         <div className="w-11/12 mx-auto z-20 relative -mt-10">
            <ContactForm />
         </div>
         
 
         <div className="w-full px-14 mx-auto mt-10 sm:pb-16 bg-gray-100" style={{backgroundImage: `url(${imagePath})`}}>
            <div className="p-4 text-center " >
               <h2 className="text-gray-800 font-bold text-2xl mb-2">Company overview</h2>
               <p className="text-gray-600 text-md">Perfect for custom graphic, logo, web and print design. DesignCrowd is an online creative marketplace that helps start-ups, businesses and entrepreneurs connect with a global network of designers. Perfect for custom graphic, logo, web and print design. DesignCrowd also owns and manages BrandCrowd, an online logo maker.</p>
            
            <div className="grid sm:grid-cols-3 gap-8 my-8 justify-center text-[#5d6d81]">
               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-500 fill-orange-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        </span>
                     </div>
                     <div className="flex-80 medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">Email</span>
                        <p className="uppercase text-sm">sam_designs@gmail.com</p>
                     </div>
               </div>

               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <svg className="w-6 h-6" viewBox="-0.5 0 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                              <defs>

                           </defs>
                              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                 <g id="Dribbble-Light-Preview" transform="translate(-302.000000, -7321.000000)" className="fill-orange-500">
                                       <g id="icons" transform="translate(56.000000, 160.000000)">
                                          <path d="M260.000175,7163 L260.000175,7161 L258.000175,7161 L258.000175,7163 L256.000175,7163 L256.000175,7165 L258.000175,7165 L258.000175,7167 L260.000175,7167 L260.000175,7165 L262.000175,7165 L262.000175,7163 L260.000175,7163 Z M260.117175,7173.578 C259.422175,7173.204 258.719175,7172.778 257.992175,7172.481 C256.587175,7171.908 256.682175,7173.602 255.679175,7174.151 C255.027175,7174.508 254.107175,7173.861 253.538175,7173.503 C252.544175,7172.877 251.663175,7172.053 250.931175,7171.1 C250.556175,7170.613 249.728175,7169.697 249.830175,7169.014 C249.992175,7167.93 251.274175,7167.876 250.907175,7166.55 C250.711175,7165.84 250.360175,7165.141 250.097175,7164.457 C249.745175,7163.54 249.600175,7162.953 248.573175,7163.003 C247.831175,7163.039 247.339175,7163.356 246.883175,7163.951 C245.649175,7165.558 245.835175,7167.725 246.664175,7169.488 C247.838175,7171.983 249.850175,7174.335 251.999175,7175.855 C253.461175,7176.889 255.387175,7177.828 257.157175,7177.987 C258.453175,7178.104 260.266175,7177.403 260.730175,7175.996 C260.698175,7176.094 260.667175,7176.189 260.652175,7176.234 C260.663175,7176.199 260.687175,7176.128 260.730175,7175.996 C260.749175,7175.94 260.761175,7175.902 260.773175,7175.866 C260.760175,7175.905 260.746175,7175.948 260.731175,7175.993 C261.139175,7174.753 261.189175,7174.155 260.117175,7173.578 L260.117175,7173.578 Z M260.773175,7175.866 C260.789175,7175.817 260.803175,7175.774 260.811175,7175.751 C260.805175,7175.77 260.791175,7175.811 260.773175,7175.866 L260.773175,7175.866 Z" id="call-[#187]">

                           </path>
                                       </g>
                                 </g>
                              </g>
                           </svg>
                        </span>
                     </div>
                     <div className="flex-80 medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">Phone number</span>
                        <p className="uppercase text-sm tracking-widest">+9021512478</p>
                     </div>
               </div>

               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                          <svg className="w-6 h-6" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                              <title>Skype-color</title>
                              <desc>Created with Sketch.</desc>
                              <defs>

                           </defs>
                              <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                 <g id="Color-" transform="translate(-400.000000, -660.000000)" className="fill-orange-500">
                                       <path d="M446.619944,689.095462 C446.967074,687.531907 447.147695,685.912711 447.147695,684.249 C447.147695,671.785081 436.900282,661.677621 424.253998,661.677621 C422.921919,661.677621 421.61524,661.791688 420.339605,662.008694 C418.293509,660.737263 415.87206,660 413.278457,660 C405.943556,660 400,665.859155 400,673.09268 C400,675.507564 400.66604,677.766649 401.823142,679.714137 C401.521167,681.177534 401.360301,682.696575 401.360301,684.249 C401.360301,696.718484 411.610536,706.823161 424.253998,706.823161 C425.687676,706.823161 427.087488,706.692401 428.447789,706.444792 C430.318909,707.435229 432.452493,708 434.724365,708 C442.056444,708 448,702.138063 448,694.910103 C448,692.820727 447.503293,690.8482 446.619944,689.095462 Z M435.997178,695.03808 C434.938852,696.518171 433.375353,697.686663 431.343368,698.515736 C429.336783,699.339245 426.932267,699.759346 424.19191,699.759346 C420.904045,699.759346 418.146754,699.189011 415.993415,698.06225 C414.455315,697.244305 413.188147,696.13702 412.225776,694.76265 C411.252117,693.382716 410.761054,692.011128 410.761054,690.684055 C410.761054,689.860546 411.082785,689.142758 411.714958,688.555729 C412.341486,687.971483 413.145814,687.67936 414.105362,687.67936 C414.889934,687.67936 415.570085,687.910276 416.120414,688.369327 C416.648166,688.811685 417.099718,689.465484 417.463782,690.302904 C417.870179,691.221005 418.310442,691.994436 418.776105,692.598157 C419.227658,693.187967 419.873942,693.680403 420.698024,694.067119 C421.527752,694.451052 422.648166,694.651365 424.022578,694.651365 C425.916275,694.651365 427.468485,694.250739 428.634055,693.46618 C429.777046,692.701095 430.330198,691.77743 430.330198,690.647887 C430.330198,689.760389 430.039511,689.059294 429.446849,688.508433 C428.82032,687.935316 427.999059,687.490176 427.002822,687.178578 C425.96143,686.861415 424.550329,686.51365 422.803387,686.151974 C420.424271,685.651191 418.406397,685.058599 416.803387,684.382542 C415.160865,683.695357 413.837253,682.741089 412.869238,681.547557 C411.887112,680.331768 411.387582,678.809946 411.387582,677.02104 C411.387582,675.318379 411.90969,673.779864 412.942615,672.455573 C413.964252,671.139628 415.460019,670.110242 417.387582,669.411928 C419.286924,668.719179 421.544685,668.368632 424.104421,668.368632 C426.147695,668.368632 427.945437,668.60233 429.446849,669.064163 C430.956726,669.525995 432.226717,670.149191 433.225776,670.91984 C434.233302,671.698835 434.984008,672.525126 435.452493,673.387585 C435.926623,674.25839 436.169332,675.123631 436.169332,675.96105 C436.169332,676.767866 435.853246,677.502347 435.229539,678.139454 C434.60301,678.784907 433.809972,679.110416 432.878645,679.110416 C432.031985,679.110416 431.365945,678.904538 430.908749,678.503912 C430.479774,678.128326 430.033866,677.544079 429.539981,676.709442 C428.969897,675.641106 428.278457,674.798122 427.485419,674.202747 C426.714958,673.624065 425.430856,673.334724 423.661336,673.334724 C422.024459,673.334724 420.686736,673.657451 419.696143,674.300122 C418.742239,674.914971 418.276576,675.624413 418.276576,676.464615 C418.276576,676.976526 418.426152,677.407755 418.736595,677.774996 C419.058325,678.170057 419.518344,678.509477 420.099718,678.798818 C420.700847,679.096505 421.321731,679.335768 421.942615,679.502695 C422.577611,679.677969 423.644403,679.936707 425.109125,680.270562 C426.963311,680.660059 428.665099,681.102417 430.169332,681.57816 C431.696143,682.056686 433.011289,682.646496 434.08937,683.339245 C435.184384,684.043123 436.0508,684.944531 436.668862,686.023996 C437.286924,687.111807 437.600188,688.447227 437.600188,690.002434 C437.600188,691.860894 437.058325,693.555208 435.997178,695.03808 Z" id="Skype">

                           </path>
                                 </g>
                              </g>
                           </svg>
                        </span>
                     </div>
                     <div className="flex-80medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">Skype</span>
                        <p className="uppercase text-sm">sam_designs1920.skype</p>
                     </div>
               </div>

               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                           <svg className="w-6 h-6 fill-orange-500" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                             <title>linkedin</title>
                           <path d="M28.778 1.004h-25.56c-0.008-0-0.017-0-0.027-0-1.199 0-2.172 0.964-2.186 2.159v25.672c0.014 1.196 0.987 2.161 2.186 2.161 0.010 0 0.019-0 0.029-0h25.555c0.008 0 0.018 0 0.028 0 1.2 0 2.175-0.963 2.194-2.159l0-0.002v-25.67c-0.019-1.197-0.994-2.161-2.195-2.161-0.010 0-0.019 0-0.029 0h0.001zM9.9 26.562h-4.454v-14.311h4.454zM7.674 10.293c-1.425 0-2.579-1.155-2.579-2.579s1.155-2.579 2.579-2.579c1.424 0 2.579 1.154 2.579 2.578v0c0 0.001 0 0.002 0 0.004 0 1.423-1.154 2.577-2.577 2.577-0.001 0-0.002 0-0.003 0h0zM26.556 26.562h-4.441v-6.959c0-1.66-0.034-3.795-2.314-3.795-2.316 0-2.669 1.806-2.669 3.673v7.082h-4.441v-14.311h4.266v1.951h0.058c0.828-1.395 2.326-2.315 4.039-2.315 0.061 0 0.121 0.001 0.181 0.003l-0.009-0c4.5 0 5.332 2.962 5.332 6.817v7.855z"></path>
                           </svg>
                        </span>
                     </div>
                     <div className="flex-80medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">LinkedIn</span>
                        <p className="uppercase  text-sm">www.linked.com/samagency</p>
                     </div>
               </div>

               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                           <svg className="w-6 h-6" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                                 <title>whatsapp [#128]</title>
                                 <desc>Created with Sketch.</desc>
                                 <defs>

                              </defs>
                                 <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Dribbble-Light-Preview" transform="translate(-300.000000, -7599.000000)" className="fill-orange-500" >
                                          <g id="icons" transform="translate(56.000000, 160.000000)">
                                             <path d="M259.821,7453.12124 C259.58,7453.80344 258.622,7454.36761 257.858,7454.53266 C257.335,7454.64369 256.653,7454.73172 254.355,7453.77943 C251.774,7452.71011 248.19,7448.90097 248.19,7446.36621 C248.19,7445.07582 248.934,7443.57337 250.235,7443.57337 C250.861,7443.57337 250.999,7443.58538 251.205,7444.07952 C251.446,7444.6617 252.034,7446.09613 252.104,7446.24317 C252.393,7446.84635 251.81,7447.19946 251.387,7447.72462 C251.252,7447.88266 251.099,7448.05372 251.27,7448.3478 C251.44,7448.63589 252.028,7449.59418 252.892,7450.36341 C254.008,7451.35771 254.913,7451.6748 255.237,7451.80984 C255.478,7451.90987 255.766,7451.88687 255.942,7451.69881 C256.165,7451.45774 256.442,7451.05762 256.724,7450.6635 C256.923,7450.38141 257.176,7450.3464 257.441,7450.44643 C257.62,7450.50845 259.895,7451.56477 259.991,7451.73382 C260.062,7451.85686 260.062,7452.43903 259.821,7453.12124 M254.002,7439 L253.997,7439 L253.997,7439 C248.484,7439 244,7443.48535 244,7449 C244,7451.18666 244.705,7453.21526 245.904,7454.86076 L244.658,7458.57687 L248.501,7457.3485 C250.082,7458.39482 251.969,7459 254.002,7459 C259.515,7459 264,7454.51465 264,7449 C264,7443.48535 259.515,7439 254.002,7439" id="whatsapp-[#128]">

                              </path>
                                          </g>
                                    </g>
                                 </g>
                              </svg>
                        </span>
                     </div>
                     <div className="flex-80 medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">WattaApp</span>
                        <p className="uppercase text-sm tracking-widest">+9021547854</p>
                     </div>
               </div>

               <div className="flex rounded-md border border-gray-100 shadow-md px-4 py-4 bg-white">
                     <div className="flex-20">
                        <span className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center">
                        <svg className="w-6 h-6 text-gray-500 fill-orange-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16">
                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                        </svg>
                        </span>
                     </div>
                     <div className="flex-80medium-4 pl-3">
                        <span className="font-bold mb-2 inline-block text-xl">Email</span>
                        <p className="uppercase text-sm">sam_designs@gmail.com</p>
                     </div>
               </div>
                     
 
            </div>
            </div>
         </div>


         <div className="p-4 w-8/12 mx-auto sm:-mt-16 sm:mb-10 bg-[#ecf1fd] border border-gray-200 rounded-md">
            <div className="grid grid-cols-2">
               <div className="p-4">
                  <h2 className="text-2xl text-gray-700 capitalize font-bold mb-6">Have you question ?</h2>
                  <div className="flex mb-4">
                     <span className="text-md flex-45 flex font-semibold pr-4 text-gray-500">Get Free Consultation </span>
                     <span className="text-md flex-55 flex pr-4 text-orange-500 font-semibold" >: samedu-inq@gmail.com</span>
                  </div>
                  <div className="flex mb-4">
                     <span className="text-md flex flex-45 font-semibold pr-4 text-gray-500">For job enquey    </span>
                     <span className="text-md flex flex-55 pr-4 text-orange-500 font-semibold" >: samedu-job@gmail.com</span>
                  </div>

                  <div className="flex mt-4">
                     <a href="#" className="text-md text-white rounded-md flex flex-55 px-4 py-2.5 mt-4 bg-orange-500 font-semibold" >Let Us talk on wastsapp</a>
                  </div>
                  
               </div>
               <div className="p-4">
                  <img src={imagePath3} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
 };
 export default ContactUS;