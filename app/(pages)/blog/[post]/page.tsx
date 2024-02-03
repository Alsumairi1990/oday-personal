
'use client'
import NavBar from '@/app/NavBar'
import Footerk from '@/app/_components/Footer';
import { MdEmail } from "react-icons/md";

import { BsTwitterX } from "react-icons/bs";



export default function Post() {
   const imagePath = '/images/w01.jpg';
   const latestPost = 
    {
      title :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate',
      body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have to be honorable, to be compassionate, to have it make some difference that you have to be honorable, to be compassionate, to have it make some difference that you have  lived and lived well.Ralph Waldo Emerson',
      image : '/images/w003.jpg',
      category :'Business'
    };
    const post = 
    {
      title :'How to define block of css image',
      body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
      image : '/images/w004.jpg',
      category :'Business'
    };

    const topPost = 
    {
      title :'How to define block of css image',
      body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
      image : '/images/w005.jpg',
      category :'Web tech'
    };

    const fastPosts = [
        {
          id:1,  
          title :'The best programming book for proframming',
          body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
          image : '/images/w01.jpg',
          category :'Business'
        },
        {
          id:2,  
          title :'The best programming book for proframming',
          body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
          image : '/images/w05.jpg',
          category :'Brand'
        },
        {
          id : 3,  
          title :'The best programming book for proframming',
          body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
          image : '/images/w03.jpg',
          category :'Products'
        }
       ]

    const mainPosts = [
        {
          id:1,  
          title :'The best programming book for proframming',
          body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
          image : '/images/w001.jpg',
          category :'Business'
        },
        {
          id:2,  
          title :'The best programming book for proframming',
          body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
          image : '/images/w002.jpg',
          category :'Brand'
        },
        {
          id : 3,  
          title :'The best programming book for proframming',
          body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
          image : '/images/w004.jpg',
          category :'Products'
        },
        {
          id : 4,
          title :'The best programming book for proframming',
          body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
          image : '/images/w005.jpg',
          category :'Printting'
        },
      
       ]


   const posts = [
    {
      id:1,  
      title :'The best programming book for proframming',
      body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
      image : 'https://jannah.tielabs.com/pets/wp-content/uploads/sites/13/2016/11/jnh-pets-13-780x470.jpg',
      category :'Business'
    },
    {
      id:2,  
      title :'The best programming book for proframming',
      body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
      image : '/images/w05.jpg',
      category :'Brand'
    },
    {
      id : 3,  
      title :'The best programming book for proframming',
      body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
      image : '/images/w03.jpg',
      category :'Products'
    },
    {
      id : 4,
      title :'The best programming book for proframming',
      body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
      image : '/images/w02.jpg',
      category :'Printting'
    },
    {
        id : 5,
        title :'The best programming book for proframming',
        body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
        image : '/images/w04.jpg',
        category :'Printting'
      }
   ]

   const newPosts = [
    {
      id:2,  
      title :'The best programming book for proframming',
      body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
      image : '/images/w05.jpg',
      category :'Brand'
    },
    {
      id : 3,  
      title :'The best programming book for proframming',
      body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
      image : '/images/w03.jpg',
      category :'Products'
    }
   ]

//    function truncateTitle(title:String, length = 50) {
//     return title.length > length ? title.substring(0, length) + '...' : title;
//   }

    return (
       
        
        
        
      <div >
        <div className=" shadow-sm border-b border-b-gray-200 h-20 ">
        <NavBar textColor="gray-700" />
        </div>
        


      <section className="w-11/12 max-w-full mx-auto mt-8 ">
                <div className="grid sm:grid-cols-4 gap-[0.3rem] rounded p-0.5">
                    <div className=" sm:col-span-3 sm:pr-12">
                      <div className=" ">
                          <img className="w-full max-w-full" src={latestPost.image} alt="" />  
                      </div>
                      <div className=" self-end text-gray-700 daek:text-gray-200 pt-3 pb-4 pl-4" > 
                          <p className="mb-0.5 text-base">
                            Business
                          </p>
                          <p className="font-bold p pt-4 text-2xl pb-5">
                              <a href="">{latestPost.title}</a>                           
                          </p>
                          <div className=" flex items-center">
                            <div className="mr-2">
                            <a href="https://jannah.tielabs.com/pets/author/admin/" className='flex  w-12'>
                                <img alt="" src="https://themes.tielabs.com/data/avatar-1.jpg" className="rounded-full" height="140" width="140" /></a>

                            </div>
                            <div className="">
                            <span className="flex ">
                                    <span className="flex items-center">
                                   
                                    <span className="meta-author"><a href="https://jannah.tielabs.com/pets/author/admin/" className="text-sm font-semibold text-gray-800" title="Tony Stark">Tony Stark</a></span>
                                    <a href="https://twitter.com/tielabs" className="px-1" target="_blank" rel="nofollow noopener" title="Follow on Twitter">
                                     <BsTwitterX className="text-xs"/>
                                    </a>
                                    <a href="mailto:fouad@mo3aser.com" className="px-1" target="_blank" rel="nofollow noopener" title="Send an email">
                                    <MdEmail />
                                    </a>
                                    </span>
                                    </span>

                                    <span className="ml-4 text-[13px] font-medium">Nov 8, 2016</span>
                               </div>
                               <div className="ml-auto">
                               <div className="tie-alignright"><span className="meta-comment tie-icon meta-item fa-before">0</span><span className="text-sm font-semibold text-red-600"><span className="tie-icon-fire" aria-hidden="true"></span> 2,976</span></div>
                                    </div>
                               </div>
                                   
                                    
                                    

                          <p className="font-medium leading-8 pr-6 pt-4 pl-10 text-md mb-5">
                              {latestPost.body}                           
                          </p>
                          <p className="font-medium leading-8 pr-6 pt-4 text-md mb-5">
                              {latestPost.body}                           
                          </p>
                          <p className="font-medium leading-8 pr-6 pt-4 text-md mb-5">
                              {latestPost.body}                           
                          </p>
                          <p className="font-medium leading-8 pr-6 pt-4 text-md mb-5">
                              {latestPost.body}                           
                          </p>
                      </div>
                    </div>  

                    <div className="">
                          <div className="bg-[#1c1d1d] rounded-md">
                              <header className="p-2 py-3 border-b border-b-black">
                                  <h3 className="text-base text-gray-200 pl-2 font-bold mb-0">Most Popular Articles</h3>
                              </header>
                              {posts.map((post, index) => (
                                <div key={post.id}> 
                             
                             
                                  <div className="flex px-2 py-[.60rem] border-t border-t-[#4a4a4a] border-b border-b-black max-sm:bg-[#282828] max-sm:my-2">
                                      <div className="flex-30 p-1">
                                           <img className="w-full max-w-full rounded" src={post.image || "/images/w01.png"}  alt="" />
                                      </div>
                                      <div className="flex-70">
                                          <div >
                                             <h3 className="text-sm text-gray-200 pl-2 font-bold mb-0"><a href="">{post.title}</a></h3>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  </div>
                                  ))};  
                          </div>
                    </div>
                    {/* <div className="grid sm:grid-cols-1  h-fit gap-[0.4rem]">
                    {mainPosts.map((post: any) => (
                     
                  
                      <div className="flex relative h-fit sec-elm-bg max-sm:items-center max-sm:pl-1 max-sm:rounded-md max-sm:border max-sm:border-gray-300">                     
                          <div className=" flex-30 ">
                              <img className="w-full max-w-full rounded-md" src={post.image || "/images/w01.png"} alt="" />
                          </div>
                          <div className="sm:flex-70 pl-2 pr-1  sm:row-span-20   text-gray-700 pb-3 " > 
                              
                              <p className="mb-1 text-md font-semibold sm:text-gray-700 daek:text-gray-200">
                               <a href="" className="">{post.title}</a> 
                              </p>
                          </div>
                      </div>
                 
                    ))}
                    
                  </div> */}
          </div>
      </section>  
      
      
   
      
         
          
         
            
        
      
      
      
      <div className="">
         <Footerk />
         </div>
         </div>
         


    )
  }
  
 