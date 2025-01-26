

const Testimonials = () => {
    const imagePath = 'https://dcstatic.com/images/background/background-about-us-c188d84f24.svg';
    const imagePath1 = '/images/hero.webp';
    const imagePath2 = '/images/service2.png';
    const testimonials = [
      {
         name : 'Samee Sufian ',
         job : "Busneess Manager",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/UX-Team-1.png'
      },
       {
         name : 'Ali Hameed ',
         job : "Project Analyzer",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/UX-Team-2.png'
      },
      {
         name : 'Saleem Alnajeed Mohammed',
         job : "Project Manager",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/UX-Team-3.png'
      },
      {
         name : 'Nadeer Jameel ',
         job : "Busneess Manager",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/UX-Team-4.png'
      },
       {
         name : 'Ali Hameed ',
         job : "Project Analyzer",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/Team-6.png'
      },
      {
         name : 'Alnajeed fadel',
         job : "Project Manager",
         body  : 'Konstant Infosolutions team was timely and committed throughout the engagement. The team led a punctual, communicative, and responsive to ensure a solid project management',
         image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/team/Team-8.png'
      }
      
    ]
    
   return (
      <div className="w-full" >
         <div className=" m-h-lvh sm:min-h-[28rem] sm:h-[28rem] pb-4 sm:pb-0 pt-[100px] flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath1})`}}>
         <div className="absolute sm:top-[75px] h-[calc(100%-64px)] sm:h-[calc(100%-75px)] top-16 bottom-0 border-t border-t-gray-800  w-full left-0" style={{backgroundImage: 'linear-gradient(to top, rgb(8 8 8),rgb(0 0 0 / 55%), rgb(8 8 8))'}}></div>
         <div className="flex flex-wrap w-11/12 mx-auto z-20">
            
             <div className="w-10/12 mx-auto flex flex-col justify-center  items-center">
                 <span className="w-[4.5rem] h-[4.5rem] mb-2 inline-block">
                 <svg className="w-full h-full fill-white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                                 viewBox="0 0 511.999 511.999" >
                              <g>
                                 <g>
                                    <path d="M438.927,145.082c-6.995-7.467-16.875-11.748-27.105-11.748H387.02c-10.23,0-20.11,4.282-27.104,11.748
                                       c-6.994,7.466-10.623,17.603-9.957,27.811l1.1,16.901l2.573,39.471c1.026,15.716,9.877,29.629,23.675,37.219
                                       c6.924,3.808,14.517,5.712,22.113,5.712c7.593,0,15.191-1.904,22.113-5.712c13.799-7.589,22.65-21.503,23.674-37.219l2.941-45.103
                                       l0.735-11.269C449.551,162.685,445.922,152.548,438.927,145.082z M370.312,171.566c-0.305-4.669,1.29-9.122,4.49-12.537
                                       s7.539-5.295,12.218-5.295h17.877l-3.352,8.941c-1.537,2.213-9.309,11.774-30.82,15.215L370.312,171.566z M424.851,227.938
                                       c-0.568,8.729-5.483,16.458-13.149,20.674c-7.691,4.23-16.873,4.23-24.564,0c-7.666-4.215-12.582-11.944-13.152-20.674
                                       l-1.933-29.637c18.068-2.562,29.817-8.754,37.131-14.527c1.376,0.98,2.906,1.907,4.589,2.776c3.097,1.6,7.542,3.184,13.464,4.796
                                       L424.851,227.938z M423.138,168.427c-0.669-0.346-1.193-0.655-1.619-0.929l2.976-7.936c2.65,3.069,4.082,6.885,4.07,10.926
                                       C425.411,169.495,423.836,168.788,423.138,168.427z"/>
                                 </g>
                              </g>
                              <g>
                                 <g>
                                    <path d="M511.836,358.861l-4.107-22.673c-5.063-27.95-27.206-50.258-55.099-55.51c-4.21-0.794-8.517-1.195-12.801-1.195h-12.371
                                       c-2.705,0-5.298,1.075-7.212,2.987l-20.825,20.825l-20.826-20.826c-1.913-1.912-4.507-2.987-7.212-2.987h-12.37
                                       c-4.284,0-8.591,0.402-12.801,1.195c-9.069,1.707-17.54,5.17-25.225,10.256c-3.598-0.44-7.223-0.683-10.839-0.683h-22.533
                                       c-2.711,0-5.31,1.079-7.224,2.999l-24.636,24.719l-25.248-24.796c-1.907-1.873-4.473-2.922-7.147-2.922h-21.845
                                       c-3.514,0-7.038,0.234-10.54,0.649c-7.684-5.074-16.151-8.52-25.191-10.222c-4.21-0.794-8.517-1.195-12.801-1.195h-12.37
                                       c-2.705,0-5.299,1.075-7.212,2.987l-20.825,20.826l-20.825-20.826c-1.912-1.912-4.507-2.987-7.212-2.987H72.171
                                       c-4.284,0-8.591,0.402-12.801,1.195c-27.894,5.252-50.036,27.559-55.099,55.509l-4.107,22.673
                                       c-0.539,2.975,0.269,6.035,2.208,8.356c1.938,2.32,4.805,3.662,7.828,3.662H112.38l-4.2,23.189
                                       c-0.539,2.975,0.27,6.035,2.208,8.355s4.805,3.661,7.828,3.661h275.237c3.023,0,5.89-1.341,7.829-3.661
                                       c1.937-2.32,2.746-5.381,2.207-8.355l-4.201-23.188H501.8c3.023,0,5.89-1.341,7.829-3.661
                                       C511.566,364.897,512.374,361.836,511.836,358.861z M219.19,310.65l29.496,28.967c3.998,3.926,10.414,3.891,14.371-0.077
                                       l28.794-28.89h9.713l-45.732,45.732L210.1,310.65H219.19z M117.138,350.481H22.412l1.93-10.657
                                       c3.567-19.689,19.16-35.401,38.803-39.1c2.969-0.559,6.005-0.842,9.025-0.842h8.145l25.05,25.05
                                       c3.983,3.982,10.441,3.982,14.425,0l25.05-25.05h8.146c2.421,0,4.852,0.191,7.252,0.552
                                       C140.226,310.96,124.617,328.885,117.138,350.481z M130.427,385.686l3.344-18.461c4.739-26.155,24.461-47.356,49.847-54.211
                                       l65.004,65.004c3.984,3.984,10.441,3.983,14.425,0l65.004-65.004c25.385,6.856,45.107,28.057,49.846,54.211l3.344,18.461H130.427z
                                       M394.528,350.48c-7.469-21.567-23.046-39.474-43.019-50.006c2.482-0.387,4.999-0.593,7.505-0.593h8.144l25.051,25.05
                                       c1.913,1.912,4.507,2.987,7.212,2.987s5.298-1.075,7.212-2.987l25.05-25.05h8.145c3.02,0,6.056,0.284,9.026,0.842
                                       c19.643,3.698,35.236,19.412,38.803,39.1l1.931,10.656H394.528z"/>
                                 </g>
                              </g>
                              <g>
                                 <g>
                                    <path d="M152.082,145.082c-6.995-7.466-16.874-11.748-27.104-11.748h-24.801c-10.23,0-20.109,4.282-27.103,11.747
                                       c-6.995,7.466-10.625,17.603-9.96,27.812l1.103,16.902l2.573,39.47c1.025,15.716,9.876,29.629,23.674,37.219
                                       c6.923,3.807,14.518,5.712,22.113,5.712c7.595,0,15.19-1.904,22.113-5.712c13.799-7.59,22.65-21.504,23.674-37.219l2.941-45.103
                                       l0.735-11.269C162.707,162.685,159.077,152.548,152.082,145.082z M83.469,171.567c-0.305-4.67,1.29-9.123,4.49-12.538
                                       c3.2-3.416,7.539-5.295,12.218-5.295h17.876l-3.377,9.006c-1.289,1.833-9.144,11.638-30.794,15.141L83.469,171.567z
                                       M138.01,227.936c-0.568,8.731-5.484,16.459-13.15,20.675c-7.691,4.23-16.874,4.23-24.565,0
                                       c-7.665-4.215-12.581-11.944-13.15-20.674L85.212,198.3c18.068-2.562,29.817-8.754,37.131-14.527
                                       c1.375,0.98,2.906,1.906,4.589,2.776c3.098,1.6,7.543,3.184,13.464,4.796L138.01,227.936z M136.295,168.427
                                       c-0.669-0.346-1.193-0.656-1.619-0.929l2.976-7.936c2.65,3.069,4.082,6.886,4.071,10.926
                                       C138.569,169.495,136.994,168.788,136.295,168.427z"/>
                                 </g>
                              </g>
                              <g>
                                 <g>
                                    <path d="M306.374,120.599c-8.741-9.329-21.087-14.681-33.872-14.681h-33.339c-12.785,0-25.131,5.352-33.872,14.681
                                       c-8.741,9.329-13.277,21.998-12.445,34.755l1.481,22.72l3.461,53.056c1.299,19.922,12.519,37.561,30.012,47.182
                                       c8.777,4.827,18.402,7.24,28.032,7.24c9.626,0,19.257-2.414,28.032-7.24c17.494-9.622,28.713-27.26,30.012-47.182l3.954-60.627
                                       v-0.001l0.987-15.148C319.65,142.597,315.115,129.929,306.374,120.599z M214.003,166.314l-0.801-12.287
                                       c-0.474-7.258,2.004-14.176,6.975-19.482c4.972-5.307,11.714-8.229,18.986-8.229h29.095l-6.433,17.154
                                       C259.928,146.386,248.316,161.915,214.003,166.314z M293.522,229.802c-0.843,12.936-8.129,24.388-19.488,30.635
                                       c-11.398,6.268-25.006,6.268-36.403,0c-11.359-6.247-18.644-17.7-19.488-30.636l-2.812-43.113
                                       c27.158-3.285,43.841-12.875,53.452-21.046c2.219,1.857,4.872,3.586,7.954,5.178c4.418,2.283,11.069,4.561,20.18,6.913
                                       L293.522,229.802z M298.464,154.026l-0.192,2.952c-7.119-1.991-10.573-3.455-12.17-4.28c-2.626-1.357-4.036-2.467-4.763-3.167
                                       l6.759-18.025c1.2,0.905,2.338,1.915,3.39,3.039C296.459,139.851,298.937,146.769,298.464,154.026z"/>
                                 </g>
                              </g>
                              <g>
                                 <g>
                                    <path d="M180.525,357.838h-26.518c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h26.518
                                       c5.633,0,10.199-4.566,10.199-10.199C190.724,362.404,186.158,357.838,180.525,357.838z"/>
                                 </g>
                              </g>
                              <g>
                                 <g>
                                    <path d="M211.123,357.838h-2.04c-5.633,0-10.199,4.566-10.199,10.199c0,5.633,4.566,10.199,10.199,10.199h2.04
                                       c5.633,0,10.199-4.566,10.199-10.199C221.322,362.404,216.756,357.838,211.123,357.838z"/>
                                 </g>
                              </g>
                              </svg>
                 </span>
                 <h2 className="text-4xl tracking-wide text-white font-bold mb-2">Whatever we are, we owe it to our clients</h2>
                 <p className="text-mdnav text-gray-100 tracking-wide text-center uppercase leading-7">Experts take care of your business app with application maintenance and support services that can help you ensure that  and running at peak performance.</p>
                 <div className="flex  mt-6 items-center  ">
                    <div className="pl-2 pr-4 flex items-center py-2 rounded-md border border-[#f85508] ">
                       <span className=" inline-block  text-white text-base font-semibold ">Our Clients </span>
                    </div>
                    <div className=" pl-2 pr-4 flex items-center py-2 rounded-md ml-4 bg-[#f85508] border border-[#f85508]" >
                       <span className=" inline-block text-white text-base font-semibold  ">Cilents Reviews  </span>
                       <span className="ml-2">
                        <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                                 viewBox="0 0 512 512" >
                              <path fill="#FFFFFF" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
                              <path fill="#8AD5DD" d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                                 M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"/>
                              <polygon fill="#2D2D2D" points="214.656,95.936 378.016,256 214.656,416.064 165.856,366.096 278.208,256 165.856,145.904 
                                 "/>
                              </svg>
                        </span>
                    </div>
                    
  
                 </div>
             </div>

          </div>
         </div>
         
 
         <div className="w-11/12 mx-auto my-10 " style={{backgroundImage: `url(${imagePath})`}}>
            <div className="p-4 text-center mb-4" >
               <h2 className="text-gray-800 font-bold text-2xl mb-2">Company overview</h2>
               <p className="text-gray-600 text-md">Perfect for custom graphic, logo, web and print design. DesignCrowd is an online creative marketplace that helps start-ups, businesses and entrepreneurs connect with a global network of designers. Perfect for custom graphic, logo, web and print design. DesignCrowd also owns and manages BrandCrowd, an online logo maker.</p>
            
            <div className="flex items-center gap-x-8 my-8 justify-center text-[#5d6d81]">
                     <div className="column  small-12 medium-4 large-2">
                        <span className="font-bold mb-2 inline-block text-3xl">1.2M</span>
                        <p className="uppercase text-sm">Graphic Designers</p>
                     </div>
                     <div className="column  small-12 medium-4 large-2">
                        <span className="font-bold mb-2 inline-block text-3xl">$71.7M+</span>
                        <p className="uppercase text-sm">Designs &amp; Contests</p>
                     </div>
                     <div className="column  small-12 medium-4 large-2">
                        <span className="font-bold mb-2 inline-block text-3xl">11.3M</span>
                        <p className="uppercase text-sm">Designs Uploaded</p>
                     </div>
                    
                     
                  </div>
            
            </div>
         
         </div>

         <div className="w-10/12 mx-auto mt-4 mb-10 " >
           <div className="p-4 text-center mb-4" >
              <h2 className="text-gray-800 font-bold tracking-wider text-3xl mb-2 dark:text-gray-50">If you need us, we’re really the right people to help.</h2>
              <p className="text-gray-600 leading-7 tracking-wide  font-medium text-md dark:text-gray-200">READ THE REAL SUCCESS STORIES IN OUR CLIENT’S WORDS.</p>
           </div>
           <div className="grid sm:grid-cols-3 gap-8">

               {testimonials.map((review : any) =>(
                     <div className="flex flex-col items-center justify-center border border-gray-200 shadow-xl rounded-md px-4 pt-5">
                     <div className="px-2 w-24 py-2 my-2 rounded-md  flex justify-center" style={{boxShadow:'0 0 5px #ccc'}}>
                        <img src={review.image} alt='' />
                     </div>
                     <div className="p-2 flex flex-col items-center mt-1">
                        <h2 className="text-2xl font-bold text-center text-gray-700 dark:text-gray-50">{review.name}</h2>
                        <h2 className="text-sm font-semibold uppercase text-gray-500 dark:text-gray-300">{review.job}</h2>
                        <div className="flex w-full justify-center pt-2 items-center">
                           <span className="w-8 flex bg-orange-400 rounded-full h-1">
                           
                           </span>
                           
                        </div>
                        
                     </div>
                     <div className=" flex h-36 overflow-y-auto justify-center">
                        <p className="text-center leading-7">{review.body}</p>
                     </div>
                     <div className="p-2 my-5  flex items-center border border-gray-200 rounded-lg">
                        <a href="" className="text-md text-orange-500 font-medium uppercase">Read full review</a>
                        <span className="ml-2">
                           <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                                 viewBox="0 0 512 512" >
                              <path fill="#FFFFFF" d="M256,504C119.248,504,8,392.752,8,256S119.248,8,256,8s248,111.248,248,248S392.752,504,256,504z"/>
                              <path fill="#8AD5DD" d="M256,16c132.336,0,240,107.664,240,240S388.336,496,256,496S16,388.336,16,256S123.664,16,256,16
                                 M256,0C114.608,0,0,114.608,0,256c0,141.376,114.608,256,256,256s256-114.624,256-256C512,114.608,397.392,0,256,0L256,0z"/>
                              <polygon fill="#2D2D2D" points="214.656,95.936 378.016,256 214.656,416.064 165.856,366.096 278.208,256 165.856,145.904 
                                 "/>
                              </svg>
                        </span>
                     </div>
                  </div>
               ))}
            
           </div>
      
        </div>


      </div>
   )
 };
 export default Testimonials;