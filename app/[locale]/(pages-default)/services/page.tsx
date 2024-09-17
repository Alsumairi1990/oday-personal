import ServiceIntro from "@/app/_components/ServiceIntro";
import ProcessPhase from "@/app/_components/_services/ProcessPhase";
import Service from "@/app/_components/_services/Service";
import ServiceCategories from "@/app/_components/_services/ServiceCategory"
import { PhaseInt } from "@/app/models/PhaseInt";
import { ServiceCategoryInt } from '@/app/models/ServiceCategoryInt';
import { MdBrowserUpdated } from "react-icons/md";

import { MdAppRegistration } from "react-icons/md";



const Serivices = () => {
    const imagePath = 'https://nextbigtechnology.com/wp-content/uploads/2019/08/ecommerce.png';
    const imagePath1 = '/images/curve.png';
    const imagePath2 = 'https://nextbigtechnology.com/wp-content/themes/nbt/imagesmay2022/clients_projectbg.jpg';
    const imagePath5 = "https://nextbigtechnology.com/wp-content/uploads/2019/09/education-1651259_640.jpg";
    


    const serviceCategories:ServiceCategoryInt[] = [
      {
        id: "1",
        name: "White-Label Branding Services",
        desc: "Awarded as the Best Website Development Company by GESIA category region",
        image: "https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1532614408_clipkard.jpg",
        services: [  // Added a property name "subCategories" for clarity
          {
            id: "1",
            name: "Printing Services",
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg",
          },
          {
            id: "2",
            name: "Mobile Design",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg",
          },
          {
            id: "2",
            name: "Business & Collateral Design",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-bag-and-tote-design-c1bec00d33.svg",
          },
          {
            id: "2",
            name: "Packaging & Label ",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-label-design-275e614d8d.svg",
          },
          {
            id: "2",
            name: "Business Card Design ",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-app-design-27fb7b89e6.svg",
          }
        ],
      },

      {
         id: "2",
         name: "White-Label Marketing Services",
         desc: "Awarded as the Best Website Development Company by GESIA category region",
         image: "https://dcstatic.com/images/icons/design-categories/design-categories-magazine-design-f15d13134d.svg",
         services: [  
           {
             id: "1",
             name: "White Label SEO Services ",
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg",
           },
           {
             id: "2",
             name: "UI / UX Design",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-advertisement-design-3bf09fad61.svg",
           },
           
           {
             id: "2",
             name: "Content Marketing",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-ebook-cover-design-32401d2b4f.svg",
           },
           
           {
             id: "2",
             name: "Social Media Management",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg",
           },
           {
            id: "2",
            name: "Video Marketing",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-t-shirt-design-0337015c20.svg",
          }
         ],
       },

       {
         id: "3",
         name: "White-Label Website Services",
         desc: "Awarded as the Best Website Development Company by GESIA category region",
         image: "https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1684836367_mijo-logo.png",
         services: [  
           {
             id: "1",
             name: "White Label SEO Services ",
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg",
           },
           {
             id: "2",
             name: "UI / UX Design",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-advertisement-design-3bf09fad61.svg",
           },
           
           {
             id: "2",
             name: "Content Marketing",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-ebook-cover-design-32401d2b4f.svg",
           },
           
           {
             id: "2",
             name: "Social Media Management",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg",
           },
           {
            id: "2",
            name: "Video Marketing",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-t-shirt-design-0337015c20.svg",
          }
         ],
       },

       
    ];




   //  Process Phases Data
   const phases:PhaseInt[] = [
      {
        id: "1",
        name: "Brand",
        desc: "Awarded as the Best Website Development Company by GESIA category region",
        image: "https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1532614408_clipkard.jpg",
        steps: [  // Added a property name "subCategories" for clarity
          {
            id: "1",
            name: "Brand Discovery",
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg",
          },
          {
            id: "2",
            name: "Brand Research",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg",
          },
          {
            id: "2",
            name: "Guiding Idea",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-bag-and-tote-design-c1bec00d33.svg",
          },
          {
            id: "2",
            name: "Brand DNA ",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-label-design-275e614d8d.svg",
          },
          {
            id: "2",
            name: "Brand Core",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-app-design-27fb7b89e6.svg",
          }
        ],
      },

      {
         id: "2",
         name: "Content",
         desc: "Awarded as the Best Website Development Company by GESIA category region",
         image: "https://dcstatic.com/images/icons/design-categories/design-categories-magazine-design-f15d13134d.svg",
         steps: [  
           {
             id: "1",
             name: "Discover",
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg",
           },
           {
             id: "2",
             name: "UI / UX Design",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-advertisement-design-3bf09fad61.svg",
           },
           
           {
             id: "2",
             name: "Content Marketing",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-ebook-cover-design-32401d2b4f.svg",
           },
           
           {
             id: "2",
             name: "Social Media Management",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg",
           },
           {
            id: "2",
            name: "Video Marketing",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-t-shirt-design-0337015c20.svg",
          }
         ],
       },

       {
         id: "3",
         name: "Build",
         desc: "Awarded as the Best Website Development Company by GESIA category region",
         image: "https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1684836367_mijo-logo.png",
         steps: [  
           {
             id: "1",
             name: "Perpare",
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg",
           },
           {
             id: "2",
             name: "UI / UX Design",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-advertisement-design-3bf09fad61.svg",
           },
           
           {
             id: "2",
             name: "Content Marketing",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-ebook-cover-design-32401d2b4f.svg",
           },
           
           {
             id: "2",
             name: "Social Media Management",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg",
           },
           {
            id: "2",
            name: "Video Marketing",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-t-shirt-design-0337015c20.svg",
          }
         ],
       },
       {
         id: "4",
         name: "Strategy",
         desc: "Awarded as the Best Website Development Company by GESIA category region",
         image: "https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1481721237_fog_app_icon.png",
         steps: [  
           {
             id: "1",
             name: "White Label SEO Services ",
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg",
           },
           {
             id: "2",
             name: "UI / UX Design",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-advertisement-design-3bf09fad61.svg",
           },
           
           {
             id: "2",
             name: "Content Marketing",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-ebook-cover-design-32401d2b4f.svg",
           },
           
           {
             id: "2",
             name: "Social Media Management",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg",
           },
           {
            id: "2",
            name: "Video Marketing",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-t-shirt-design-0337015c20.svg",
          }
         ],
       },
       {
         id: "5",
         name: "Grow",
         desc: "Awarded as the Best Website Development Company by GESIA category region",
         image: "https://d3q8mqotzsvo6s.cloudfront.net/k_portfolio/logo/1704443071_itdp-logo.jpg",
         steps: [  
           {
             id: "1",
             name: "White Label SEO Services ",
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg",
           },
           {
             id: "2",
             name: "UI / UX Design",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-advertisement-design-3bf09fad61.svg",
           },
           
           {
             id: "2",
             name: "Content Marketing",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-ebook-cover-design-32401d2b4f.svg",
           },
           
           {
             id: "2",
             name: "Social Media Management",  // Corrected typo "Dign" to "Design"
             desc: "Awarded as the Best Website Development Company by GESIA category region",
             image: "https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg",
           },
           {
            id: "2",
            name: "Video Marketing",  // Corrected typo "Dign" to "Design"
            desc: "Awarded as the Best Website Development Company by GESIA category region",
            image: "https://dcstatic.com/images/icons/design-categories/design-categories-t-shirt-design-0337015c20.svg",
          }
         ],
       },

       
    ];
    
    
    



    const services = [
                     {
                        id : "1",
                        name : 'Printing Services',
                        desc : 'Awarded as the Best Website Development Company by GESIA category region',
                        image : 'https://dcstatic.com/images/icons/design-categories/design-categories-billboard-design-e07f14f1a9.svg'
                     },
                     {
                        id : "2",
                        name : 'Mobile Dign',
                        desc : 'Awarded as the Best Website Development Company by GESIA category region',
                        image : 'https://dcstatic.com/images/icons/design-categories/design-categories-merchandise-design-93020934ee.svg'
                    },
                    {
                      id : "3",
                      name : 'Packaging Services',
                      desc : 'Awarded as the Best Website Development Company by GESIA category region',
                      image : 'https://dcstatic.com/images/icons/design-categories/design-categories-magazine-design-f15d13134d.svg'
                    },
                    {
                     id : "1",
                       name : 'Logo Design',
                       desc : 'Awarded as the Best Website Development Company by GESIA category region',
                       image : 'https://dcstatic.com/images/icons/design-categories/design-categories-vector-design-f83cdf5668.svg'
                    },
                    {
                     id : "1",
                       name : 'Label Design',
                       desc : 'how to strategically distribute it across various platforms. We have',
                       image : 'https://dcstatic.com/images/icons/design-categories/design-categories-label-design-275e614d8d.svg'
                    },
                    {
                     id : "1",
                       name : 'Resume Prepartion',
                       desc : 'Awarded as the Best Website Development Company by GESIA category region',
                       image : 'https://dcstatic.com/images/icons/design-categories/design-categories-resume-design-b1aa5b01e6.svg'
                    },
                    {
                     id : "1",
                       name : 'Eboox Cover',
                       desc : 'Awarded as the Best Website Development Company by GESIA category region',
                       image : 'https://dcstatic.com/images/icons/design-categories/design-categories-ebook-cover-design-32401d2b4f.svg'
                    },
                    {
                     id : "1",
                       name : 'Bag Design',
                       desc : 'Awarded as the Best Website Development Company by GESIA category region',
                       image : 'https://dcstatic.com/images/icons/design-categories/design-categories-bag-and-tote-design-c1bec00d33.svg'
                    }

                  ]
 
   return (
      <div className="w-full">
       <div className=" max-sm:min-h-lvh pt-[100px] sm:pb-8 flex px-4 relative w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath})`}}>
          <div className="flex w-11/12 mx-auto">
             <div className="flex-60">
                <span className="text-sm text-white mb-6 inline-block">Home / mobile development </span>
                <h2 className="text-4xl text-white font-extrabold mb-4">API Integration Services</h2>
                <h2 className="text-4xl text-white font-bold mb-4">Best API Integration Company</h2>
                <p className="text-sm text-gray-100 font-medium leading-7">Let our team of Experts business app with application maintenance and support services that can help you ensure that your application is secure, up-to-date, and running at peak performance. take care of your business app with application maintenance and support services that can help you ensure that your application is secure, up-to-date, and running at peak performance.</p>
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
             {/* <div className="flex-40">
             <img className="w-full z-20" src={imagePath2} alt="" />
             <span className="absolute top-[25%] w-12 left-[60%] z-10"><img src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/mobile/Header/Mobile-Common-Icon-4.png" alt="" /></span>

             <span className="absolute top-[30%] w-10 right-8 z-10"><img src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/mobile/Header/Mobile-Common-Icon-5.png" alt="" /></span>
             <span className="absolute bottom-[30%] w-16 left-[50%] z-10"><img src="https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/mobile/Header/Mobile-Common-Icon-3.png" alt="" /></span>
             </div> */}
          </div>
         </div>


         <div className="py-4 px-8 pt-0 mt-10 w-full ">
            <div className="flex w-10/12 mb-6 mx-auto">
                <h2 className="text-3xl text-gray-700 font-semibold leading-10 text-center">We are creating robust, topnotch <span className="text-orange-500">Web Applications</span> With trending Technologies</h2>
            </div>
        </div>  
 
 
         <div className="py-4 w-11/12  px-8 pt-0 mx-auto">
            <div className="grid sm:grid-cols-3 gap-6 ">
               {serviceCategories.map((categoryService) => (
                  <ServiceCategories key={categoryService.id} serviceCategory={categoryService} />
               ))}
            </div>
         </div>


         <div className="w-full mt-16">
            <div className="w-full py-6 bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(${imagePath2})`}}>
               <div className="p2 grid  w-10/12 mx-auto sm:grid-cols-4 gap-8">
                    <div className="flex flex-col items-center">
                        <span className="font-bold mb-2 inline-block text-gray-50 dark:text-orange-500 text-3xl">1.2M</span>
                        <p className="uppercase text-sm text-gray-200 dark:text-gray-200 ">Graphic Designers</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="font-bold mb-2 inline-block text-gray-50 dark:text-orange-500 text-3xl">1.2M</span>
                        <p className="uppercase text-sm text-gray-200 dark:text-gray-200 ">Graphic Designers</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="font-bold mb-2 inline-block text-gray-50 dark:text-orange-500 text-3xl">1.2M</span>
                        <p className="uppercase text-sm text-gray-200 dark:text-gray-200 ">Graphic Designers</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <span className="font-bold mb-2 inline-block text-gray-50 dark:text-orange-500 text-3xl">1.2M</span>
                        <p className="uppercase text-sm text-gray-200 dark:text-gray-200 ">Graphic Designers</p>
                     </div>
                   
               </div>

            </div>
            
             <ServiceIntro  />
           
            
         </div>
 
         <div className="w-full mt-16 ">
            <div className="flex justify-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:mt-4 sm:mb-8 capiltalize tracking-wider"><span className=' pb-3 '> Mobile  </span>App Development Solutions</h2>

            </div>

          <div className="w-full mx-auto  bg-[#f8f8f8]">
            <div className="w-11.5/12 mx-auto flex flex-wrap">
                
                <div className="flex-100 sm:flex-40 pl-2 py-3  relative" >
                    <div className="h-full bg-white rounded-md border border-gray-200 ">
                      <img className="w-full sm:absolute top-1.5 -right-16 " src="https://cdn.cmarix.com/images/home/enterprise-software-development.webp" alt="" />

                    </div>
                </div>
                <div className="py-3 px-2 flex-100  sm:flex-60 pl-14">
                  <div className="p-2 pl-4 rounded-md bg-white border border-gray-200">
                  <h2 className="text-2xl font-bold text-[#439bc2] mb-3">Printing Services</h2>
                    <p className="text-xl font-bold text-gray-700 mb-6 ">Creating advanced and competitive digital solutions </p>
                     <p className="text-sm text-gray-700 font-medium leading-8">When you want to bring new records on ground, working with any off-the-shelf software will not make your game go further. With our custom enterprise software development services, we map all the challenges you have and deliver groundbreaking software. We complete your digital ecosystem with power-pack fully functional, featured custom software..</p>
                     <span className="inline-block text-white text-base font-semibold px-3 py-1.5 bg-violet-600 rounded mt-6">Get More </span>
                  </div>
                </div>
            </div>

            <div className="w-11.5/12 mx-auto flex flex-wrap">
                
               
                <div className="py-3 px-2 flex-100  sm:flex-60 pr-14">
                  <div className="p-2 pl-4 rounded-md bg-white border border-gray-200">
                  <h2 className="text-2xl font-bold text-[#439bc2] mb-3">Printing Services</h2>
                    <p className="text-xl font-bold text-gray-700 mb-6 ">Creating advanced and competitive digital solutions </p>
                     <p className="text-sm text-gray-700 font-medium leading-8">When you want to bring new records on ground, working with any off-the-shelf software will not make your game go further. With our custom enterprise software development services, we map all the challenges you have and deliver groundbreaking software. We complete your digital ecosystem with power-pack fully functional, featured custom software..</p>
                     <span className="inline-block text-white text-base font-semibold px-3 py-1.5 bg-violet-600 rounded mt-6">Get More </span>
                  </div>
                </div>

                <div className="flex-100 sm:flex-40 py-3 pr-2  relative" >
                    <div className="h-full bg-white rounded-md border border-gray-200 ">
                      <img className="w-full sm:absolute top-1.5 -left-16 " src="https://cdn.cmarix.com/images/home/enterprise-software-development.webp" alt="" />

                    </div>
                </div>
            </div>
           </div>
         </div>

         <div className="w-full my-16">
          <div className="w-10/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-3xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Our Top Services</h2>
               <p className="text-sm leading-7 text-center mt-1.5 text-gray-700">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
            </div>
            <div className=" grid sm:grid-cols-4 gap-8">
            {services.map((service) => (
               <Service key={service.id} service={service} />
            ))}
            </div>
           </div>
         </div>

         <div className="w-full my-16">
          <div className=" mx-auto">
            {/* <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-3xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Our Top Services</h2>
               <p className="text-sm leading-7 text-center mt-1.5 text-gray-700">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
            </div> */}
            <div className=" grid sm:grid-cols-2 ">
               <div className="bg-no-repeat bg-cover bg-center" style={{backgroundImage:`url(${imagePath5})`}}>
               </div>
               <div className="p-8 bg-[#0d3d65]">
                  <div className="p-1">
                     <h2 className="sm:text-3xl text-white sm:font-extrabold uppercase tracking-wide mb-8 " style={{textShadow:'2px 1px 3px #000'}}><span className="border-b-2 border-b-white pb-4">BRAND</span>  STRATEGY</h2>
                     <p className="text-sm leading-8 text-gray-400">Good brands are more than just a name. They have a culture, a lifestyle, and a story. A properly defined and designed brand identity will not only evoke emotion but produce conversions from customers and potential clients.</p>
                  </div>
                  <div className="flex flex-wrap gap-y-4 p-4 mt-2 text-white">
                     <div className="flex-48 flex items-center">
                        <span className="flex items-center w-6 mr-1.5">
                          <svg className="w-full h-full fill-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M32,3A29,29,0,1,0,61,32,29,29,0,0,0,32,3ZM58.91,34.08a38.24,38.24,0,0,0-19.57-1.36,75.27,75.27,0,0,0-3.47-7.93A62.24,62.24,0,0,0,52.3,14.23,26.88,26.88,0,0,1,59,32C59,32.7,59,33.39,58.91,34.08Zm-8-21.31A60.23,60.23,0,0,1,35,23,76.12,76.12,0,0,0,23,6.56a26.94,26.94,0,0,1,28,6.22ZM21,7.36A74.17,74.17,0,0,1,33.1,23.78a59.81,59.81,0,0,1-27.76,4A27.08,27.08,0,0,1,21,7.36ZM5,32c0-.77,0-1.54.1-2.3,2,.19,4,.31,5.94.31a61.79,61.79,0,0,0,23-4.45,73.28,73.28,0,0,1,3.34,7.59A38.51,38.51,0,0,0,13.14,51.3,26.91,26.91,0,0,1,5,32Zm9.66,20.67A36.5,36.5,0,0,1,38,35a74,74,0,0,1,3.94,22,26.92,26.92,0,0,1-27.31-4.42Zm29.28,3.54A76,76,0,0,0,40,34.62a36.23,36.23,0,0,1,18.69,1.49A27.07,27.07,0,0,1,43.93,56.21Z"/></svg>
                        </span>
                        <h2 className="tex-md  capitalize">
                           Logo Development
                        </h2>
                     </div>

                     <div className="flex-48 flex items-center">
                        <span className="flex items-center w-6 mr-1.5">
                        <svg className="w-full h-full fill-white" version="1.1" id="CHECK" xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 1800 1800" enable-background="new 0 0 1800 1800" >
                           <g>
                              <g>
                                 <path fill="#fff" d="M872.831,1326.446c-1.999,0.113-3.853-0.183-5.733-0.53c-6.064-1.076-11.863-3.945-16.53-8.611
                                    l-514.859-514.86c-5.852-5.855-9.138-13.792-9.138-22.068c0-8.275,3.287-16.212,9.142-22.067L455.5,638.535
                                    c12.189-12.185,31.954-12.185,44.126,0l373.109,373.1l727.884-727.89c12.189-12.185,31.949-12.185,44.131,0l119.788,119.784
                                    c5.855,5.851,9.142,13.792,9.142,22.067s-3.286,16.212-9.137,22.063l-869.649,869.645
                                    C889.043,1323.155,881.106,1326.446,872.831,1326.446z M401.905,780.377l470.825,470.83l825.614-825.61l-75.657-75.653
                                    l-727.885,727.889c-12.19,12.186-31.95,12.186-44.13,0L477.563,704.729L401.905,780.377z"/>
                              </g>
                              <g>
                                 <g>
                                    <path fill="#fff" d="M1692.376,662.67c22.568,75.209,34.758,154.872,34.758,237.334c0,456.08-371.054,827.129-827.138,827.129
                                       c-456.08,0-827.129-371.05-827.129-827.129c0-456.084,371.049-827.138,827.129-827.138c213.186,0,407.787,81.086,554.605,214.022
                                       l44.161-44.165C1340.604,98.513,1130.391,10.456,899.996,10.456c-490.494,0-889.54,399.051-889.54,889.548
                                       s399.046,889.54,889.54,889.54c490.498,0,889.548-399.042,889.548-889.54c0-100.372-16.734-196.909-47.517-286.985
                                       L1692.376,662.67z"/>
                                 </g>
                              </g>
                           </g>
                           </svg>
                        </span>
                        <h2 className="tex-md  capitalize">
                        Business Listing Management
                        </h2>
                     </div>

                     <div className="flex-48 flex items-center">
                        <span className="flex items-center w-6 mr-1.5">
                          <svg className="w-full  h-full fill-white" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
                              viewBox="0 0 16 16" >
                           <path d="M16,7c0,1.7-1.3,3-3,3c-0.3,0-0.5-0.2-0.5-0.5S12.7,9,13,9c1.1,0,2-0.9,2-2s-0.9-2-2-2c-0.1,0-0.3,0-0.4,0.1c0,0,0,0,0,0
                              C11.7,5.3,11,6,11,7c0,0.3-0.2,0.5-0.5,0.5S10,7.3,10,7c0-1.3,0.8-2.3,1.9-2.8C11.5,2.4,9.9,1,8,1C5.8,1,4,2.8,4,5v0.8
                              C4,6,3.9,6.1,3.7,6.2c-0.2,0.1-0.3,0.1-0.5,0C3,6.1,2.8,6,2.5,6C1.7,6,1,6.7,1,7.5S1.7,9,2.5,9h1C3.8,9,4,9.2,4,9.5S3.8,10,3.5,10
                              h-1C1.1,10,0,8.9,0,7.5S1.1,5,2.5,5C2.7,5,2.8,5,3,5.1V5c0-2.8,2.2-5,5-5c2.4,0,4.4,1.7,4.9,4c0,0,0,0,0.1,0c0,0,0,0,0.1,0
                              c0,0,0,0,0.1,0C14.7,4,16,5.4,16,7z M12,10.5C12,10.5,12,10.5,12,10.5l0,3c0,0,0,0,0,0c0,0,0,0.1,0,0.1c0,0,0,0.1,0,0.1
                              c0,0,0,0.1-0.1,0.1c0,0,0,0.1-0.1,0.1c0,0,0,0,0,0l-3,2c0,0,0,0,0,0c0,0,0,0,0,0C8.6,16,8.6,16,8.5,16s-0.1,0-0.2-0.1c0,0,0,0,0,0
                              c0,0,0,0,0,0l-3-2c0,0,0,0,0,0c0,0-0.1,0-0.1-0.1c0,0,0,0-0.1-0.1c0,0,0-0.1,0-0.1c0,0,0-0.1,0-0.1c0,0,0,0,0,0v-3c0,0,0,0,0,0
                              c0,0,0,0,0-0.1c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0-0.1,0.1-0.1c0,0,0,0,0,0l3-2c0,0,0,0,0,0
                              c0,0,0.1,0,0.1,0c0.1,0,0.1,0,0.2,0c0,0,0,0,0.1,0c0.1,0,0.1,0,0.2,0.1c0,0,0,0,0,0l3,2c0,0,0,0,0,0c0,0,0.1,0,0.1,0.1c0,0,0,0,0,0
                              c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0.1,0,0.1C12,10.4,12,10.4,12,10.5C12,10.4,12,10.4,12,10.5z M6.4,10.5l2.1,1.4l2.1-1.4L8.5,9.1
                              L6.4,10.5z M6,13.2l2,1.3v-1.8l-2-1.3V13.2z M9,14.6l2-1.3v-1.8l-2,1.3V14.6z"/>
                           </svg>
                        </span>
                        <h2 className="tex-md  capitalize">
                        E-Mail Campaigns
                        </h2>
                     </div>

                     <div className="flex-48 flex items-center">
                        <span className="flex items-center w-6 mr-1.5">
                        <svg className="w-full  h-full fill-white" viewBox="0 0 16 16" id="badge-16px" xmlns="http://www.w3.org/2000/svg">
                           <path id="Path_192" data-name="Path 192" d="M-21.5,3H-26V.5a.5.5,0,0,0-.5-.5h-5a.5.5,0,0,0-.5.5V3h-4.5a.5.5,0,0,0-.5.5v12a.5.5,0,0,0,.5.5h15a.5.5,0,0,0,.5-.5V3.5A.5.5,0,0,0-21.5,3ZM-31,3V1h4V3a2,2,0,0,1-2,2A2,2,0,0,1-31,3Zm9,12H-36V4h4.184A3,3,0,0,0-29,6a3,3,0,0,0,2.816-2H-22Zm-7.5-7a2,2,0,0,0-2-2,2,2,0,0,0-2,2,2,2,0,0,0,2,2A2,2,0,0,0-29.5,8Zm-2,1a1,1,0,0,1-1-1,1,1,0,0,1,1-1,1,1,0,0,1,1,1A1,1,0,0,1-31.5,9Zm1,1h-2A2.5,2.5,0,0,0-35,12.5,1.5,1.5,0,0,0-33.5,14h4A1.5,1.5,0,0,0-28,12.5,2.5,2.5,0,0,0-30.5,10Zm1,3h-4a.5.5,0,0,1-.5-.5A1.5,1.5,0,0,1-32.5,11h2A1.5,1.5,0,0,1-29,12.5.5.5,0,0,1-29.5,13Zm6-6a.5.5,0,0,1,.5.5.5.5,0,0,1-.5.5h-4a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5Zm.5,3.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h3A.5.5,0,0,1-23,10.5Zm0,3a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5.5.5,0,0,1,.5-.5h3A.5.5,0,0,1-23,13.5Z" transform="translate(37)"/>
                           </svg>
                        </span>
                        <h2 className="tex-md  capitalize">
                        Digital Strategy
                        </h2>
                     </div>

                     <div className="flex-48 flex items-center">
                        <span className="flex items-center w-6 mr-1.5">
                          <svg className="w-full  h-full fill-white"  viewBox="0 -1 16 16" id="briefcase-16px" xmlns="http://www.w3.org/2000/svg">
                           <path id="Path_162" data-name="Path 162" d="M38.5,4H35V2.5A1.5,1.5,0,0,0,33.5,1h-3A1.5,1.5,0,0,0,29,2.5V4H25.5A1.5,1.5,0,0,0,24,5.5v8A1.5,1.5,0,0,0,25.5,15h13A1.5,1.5,0,0,0,40,13.5v-8A1.5,1.5,0,0,0,38.5,4ZM30,2.5a.5.5,0,0,1,.5-.5h3a.5.5,0,0,1,.5.5V4H30ZM25.5,5h13a.5.5,0,0,1,.5.5V8H25V5.5A.5.5,0,0,1,25.5,5ZM30,9h4v1.5a.5.5,0,0,1-.5.5h-3a.5.5,0,0,1-.5-.5Zm8.5,5h-13a.5.5,0,0,1-.5-.5V9h4v1.5A1.5,1.5,0,0,0,30.5,12h3A1.5,1.5,0,0,0,35,10.5V9h4v4.5A.5.5,0,0,1,38.5,14Z" transform="translate(-24 -1)"/>
                           </svg>
                        </span>
                        <h2 className="tex-md  capitalize">
                           Social Marketing
                        </h2>
                     </div>

                     <div className="flex-48 flex items-center">
                        <span className="flex items-center w-6 mr-1.5">
                          <svg className="w-full h-full fill-white" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><title/><path d="M32,3A29,29,0,1,0,61,32,29,29,0,0,0,32,3ZM58.91,34.08a38.24,38.24,0,0,0-19.57-1.36,75.27,75.27,0,0,0-3.47-7.93A62.24,62.24,0,0,0,52.3,14.23,26.88,26.88,0,0,1,59,32C59,32.7,59,33.39,58.91,34.08Zm-8-21.31A60.23,60.23,0,0,1,35,23,76.12,76.12,0,0,0,23,6.56a26.94,26.94,0,0,1,28,6.22ZM21,7.36A74.17,74.17,0,0,1,33.1,23.78a59.81,59.81,0,0,1-27.76,4A27.08,27.08,0,0,1,21,7.36ZM5,32c0-.77,0-1.54.1-2.3,2,.19,4,.31,5.94.31a61.79,61.79,0,0,0,23-4.45,73.28,73.28,0,0,1,3.34,7.59A38.51,38.51,0,0,0,13.14,51.3,26.91,26.91,0,0,1,5,32Zm9.66,20.67A36.5,36.5,0,0,1,38,35a74,74,0,0,1,3.94,22,26.92,26.92,0,0,1-27.31-4.42Zm29.28,3.54A76,76,0,0,0,40,34.62a36.23,36.23,0,0,1,18.69,1.49A27.07,27.07,0,0,1,43.93,56.21Z"/></svg>
                        </span>
                        <h2 className="tex-md  capitalize">
                           Printing design
                        </h2>
                     </div>

                     <div className="flex-48 flex items-center">
                        <span className="flex items-center w-6 mr-1.5">
                           < MdBrowserUpdated className="text-2xl text-gray-200" />
                       </span>
                        <h2 className="tex-md  capitalize">
                        Social Media Management
                        </h2>
                     </div>

                     <div className="flex-48 flex items-center">
                        <span className="flex items-center w-6 mr-1.5">
                           <MdAppRegistration className="text-2xl text-gray-200" />
                        </span>
                        <h2 className="tex-md  capitalize">
                        Content Marketing
                        </h2>
                     </div>
                  </div>
                  <div className="flex justify-center mt-2">
                     <span className="text-white text-sm flex bg-orange-500 border px-2.5 py-1.5 border-orange-500 rounded-2xl capitalize">explore details</span>
                  </div>
               </div>
            
            </div>
           </div>
         </div>



         <div className="w-full my-16 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-3xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">How it works</h2>
               <p className="text-sm leading-7 text-center mt-1.5 text-gray-700 dark:text-gray-200">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
            </div>
            <div className="flex flex-wrap gap-6 max-sm:p-4">
            {phases.map((phase, index:number) => (
               <ProcessPhase key={phase.id} phase={phase} index={index} />
            ))}
            </div>
           </div>
         </div>
 
      </div>
   )
 };
 export default Serivices;