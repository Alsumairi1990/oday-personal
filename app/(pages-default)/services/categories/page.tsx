import ServiceHero from "@/app/_components/_services/ServiceHero";
import { ServiceInt1 } from "@/app/models/ServiceInt";
import ProcessPhase from "@/app/_components/_services/ProcessPhase";

import { PhaseInt } from "@/app/models/PhaseInt";
import ServiceOffer from "@/app/_components/_services/ServiceOffer";
import { fservices } from '@/app/utils/ServicesData';
import { clients } from '@/app/utils/Cleints';
import { serviceCategories } from '@/app/utils/ServiceCategories'
import ServiceFeature from "@/app/_components/_services/ServiceFeature";
import ServiceClient from "@/app/_components/_services/ServiceClient";
import { serviceWorks } from '@/app/utils/ServiceWorks';
import ServiceWork from "@/app/_components/_services/ServiceWork";
import ServiceCategory from "@/app/_components/_services/category/ServiceCategory";
import { ServiceCategoryInt } from "@/app/models/ServiceCategoryInt";
import CategoryHero from "@/app/_components/_services/category/CategoryHero";




const SeriviceCategories = () => {
   const imagePath = '/images/777.png';
   const imagePath1 = '/images/curve.png';
   const imagePath2 = '/images/service2.png';
   const category:ServiceCategoryInt = 
   {
      id : "1",
      name : 'Printing Services',
      desc : 'Awarded as the Best Website Development Company by GESIA category region, Awarded as the Best Website Development Company by GESIA category region, Awarded as the Best Website Development Company by GESIA category region',
      image : 'https://cdn-jamcj.nitrocdn.com/iIjSMKRvpycwUbRqMaQnuBhZxNDfMSxv/assets/images/optimized/rev-94b910e/richestsoft.com/wp-content/themes/richnew/images/homepage-images/index-hero.webp'
   }
  
   const service:ServiceInt1 = 
      {
         id : "1",
         name : 'Printing Services',
         desc : 'Awarded as the Best Website Development Company by GESIA category region, the Best Website Development Company by GESIA category region Awarded as the Best Website Development Company by GESIA category region, Awarded as the Best Website Development Company by GESIA category region',
         image : 'https://cdn-jamcj.nitrocdn.com/iIjSMKRvpycwUbRqMaQnuBhZxNDfMSxv/assets/images/optimized/rev-94b910e/richestsoft.com/wp-content/themes/richnew/images/homepage-images/index-hero.webp'
      }
    
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
         desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
         image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Add-On/Services-Icon-1.svg'
      },
      {
         id : "2",
         name : 'Mobile Dign',
         desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
         image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Add-On/Services-Icon-2.svg'
     },
     {
       id : "3",
       name : 'Packaging Services',
       desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
       image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Add-On/Services-Icon-3.svg'
     },
     {
      id : "1",
        name : 'Logo Design',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Add-On/Services-Icon-4.svg'
     },
     {
      id : "1",
        name : 'Label Design',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Add-On/Services-Icon-3.svg'
     },
     {
      id : "1",
        name : 'Resume Prepartion',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Add-On/Services-Icon-6.svg'
     },
     {
      id : "1",
        name : 'Eboox Cover',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Add-On/Services-Icon-5.svg'
     },
     {
      id : "1",
        name : 'Bag Design',
        desc : 'Our skilled logo designers have great expertise innovative tools and technologies, we create stunning monogram logo designs. Our created monogram logo designs can help you attract giant ',
        image : 'https://mobulous.s3.ap-south-1.amazonaws.com/Web/images/Services/Add-On/Services-Icon-3.svg'
     }

   ]

   

  return (
     <div className="w-full">
       <div className="w-full mb-16">    
               <CategoryHero category={category} />
         </div>
    
        <div className="py-4 px-8 pt-0 w-full">
           <div className="flex ">
            <div className="flex-35 p-2 pt-0 ">
               <div className="flex flex-wrap  justify-between">
                 <span className="text-black-100 uppercase text-sm mb-2">KNOW US BETTER</span>
               </div>
               <h2 className="text-3xl font-bold text-gray-">What Company Do?</h2>
               <div className="flex mt-4">
                  <p className="text-sm leading-7 text-gray-900">Webvolty is an Indian  IT Company for Website Development, Web Designing, Mobile App Development, Software Development, Web Hosting, Search Engine Optimization, Mobile Solutions and lot many IT and IT Enabled Services.</p>
               </div>
            </div>
            <div className="flex-20 p-2">
               <div className="bg-[#f9f9f9] px-2 py-3 text-center rounded-md">
                  <div className="flex justify-center">
                     <img src="https://www.webvolty.com/img/about/Years_Experience.png" alt="" />
                  </div>
                  <div className="p2 mt-3">
                     <p className="text-gray-800 text-2xl mb-2 font-bold pb-2">154+</p>
                     <p className="text-gray-700 text-base">Yers of Experience in Design</p>
                  </div>
               </div>
            </div>

            <div className="flex-20 p-2">
               <div className="bg-[#f9f9f9] px-2 py-3 text-center rounded-md">
                  <div className="flex justify-center">
                     <img src="https://www.webvolty.com/img/about/Years_Experience.png" alt="" />
                  </div>
                  <div className="p2 mt-3">
                     <p className="text-gray-800 text-2xl mb-2 font-bold pb-2">154+</p>
                     <p className="text-gray-700 text-base">Yers of Experience in Design</p>
                  </div>
               </div>
            </div>

            <div className="flex-20 p-2">
               <div className="bg-[#f9f9f9] px-2 py-3 text-center rounded-md">
                  <div className="flex justify-center">
                     <img src="https://www.webvolty.com/img/about/Years_Experience.png" alt="" />
                  </div>
                  <div className="p2 mt-3">
                     <p className="text-gray-800 text-2xl mb-2 font-bold pb-2">154+</p>
                     <p className="text-gray-700 text-base">Yers of Experience in Design</p>
                  </div>
               </div>
            </div>
           
           </div>
        </div>

        <div className="py-4 w-11/12  px-8 my-12 pt-0 mx-auto">
            <div className="flex flex-wrap justify-between">
               {serviceCategories.map((categoryService, index:number) => (
                  <ServiceCategory key={categoryService.id} serviceCategory={categoryService} index={index} />
               ))}
            </div>
         </div>


        <div className="w-full my-16 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">How it works</h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
            </div>
            <div className="flex flex-wrap gap-6 max-sm:p-4">
            {phases.map((phase, index:number) => (
               <ProcessPhase key={phase.id} phase={phase} index={index} />
            ))}
            </div>
           </div>
         </div>


         <div className="w-full my-16 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Our Comprehensive Range of Logo Design Services </h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">At Mobulous, we represent a well-established set of social, educational, and professional values which represent our highest ambitions for how we engage as Co-workers, Collaborators, Alumni, Associates, and Board members.</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {services.map((phase, index:number) => (
               <ServiceOffer key={phase.id} serviceOffer={phase}  />
            ))}
            </div>
           </div>
         </div>



        <div className="w-full mt-8 bg-[#f4f2ff]">
         <div className="w-11/12 mx-auto">
         <div className="p-2 grid grid-cols-2">
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


        <div className="w-full my-16 py-8  bg-gray-100 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Why Choose our Logo Design company Services? </h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">We have an incredibly talented and skilled team of logo designers who ensure quality Logo design services. Let's know some more reasons that make us the top Logo design service company to hire -</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {fservices.map((service, index:number) => (
               <ServiceFeature key={service.id} servicefeature={service}  />
            ))}
            </div>
           </div>
         </div>


         <div className="w-full my-16 py-8 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Why Choose our Logo Design company Services? </h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">We have an incredibly talented and skilled team of logo designers who ensure quality Logo design services. Let's know some more reasons that make us the top Logo design service company to hire -</p>
            </div>
            <div className="grid sm:grid-cols-6 gap-6 max-sm:p-4">
            {clients.map((client, index:number) => (
               <ServiceClient key={service.id} serviceClient={client}  />
            ))}
            </div>
           </div>
         </div>

         <div className="w-full my-16 py-8 ">
          <div className="w-11/12 mx-auto">
            <div className="flex flex-col items-center sm:mb-8">
               <h2 className="sm:text-4xl text-gray-900 capitalize font-bold tracking-wide dark:text-orange-400">Why Choose our Logo Design company Services? </h2>
               <p className="text-md leading-7 text-center mt-1.5 mb-2 text-gray-700 dark:text-gray-200">We have an incredibly talented and skilled team of logo designers who ensure quality Logo design services. Let's know some more reasons that make us the top Logo design service company to hire -</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-6 max-sm:p-4">
            {serviceWorks.map((work) => (
               <ServiceWork key={work.id} serviceWork={work}  />
            ))}
            </div>
           </div>
         </div>
     </div>
  )
};
export default SeriviceCategories;