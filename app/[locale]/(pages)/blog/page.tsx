
'use client'
import NavBar from '@/app/NavBar'
import Footerk from '@/app/_components/Footer';
import Link from 'next/link';

export default function Blog() {
   const imagePath = '/images/w01.jpg';
   const latestPost = 
    {
      title :'The best programming book for proframming',
      body :'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.Ralph Waldo Emerson',
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
        <NavBar />
        </div>
        


      <section className="w-11.4/12 max-w-full mx-auto mt-8 ">
                <div className="grid sm:grid-cols-2 gap-[0.3rem] sm:border sm:border-gray-300 rounded p-0.5">
                    <div className="grid">
                      <div className="col-span-full row-span-full">
                          <img className="w-full max-w-full" src={latestPost.image} alt="" />  
                      </div>
                      <div className="col-span-full row-span-full title-shadow self-end text-white pt-3 pb-4 pl-4" style={{background:'-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%)'}}> 
                          <p className="mb-0.5 text-base">
                            Markting
                          </p>
                          <p className="font-bold p pt-4 text-2xl pb-5">
                              <Link href={`/blog/${latestPost.title}`}>{latestPost.title}</Link>                           
                          </p>
                      </div>
                    </div>  
                    <div className="grid sm:grid-cols-2 max-sm:auto-rows-fr gap-[0.4rem]">
                    {mainPosts.map((post: any) => (
                     
                  
                      <div className="flex relative sm:grid sec-elm-bg max-sm:items-center max-sm:pl-1 max-sm:rounded-md max-sm:border max-sm:border-gray-300">                     
                          <div className="sm:col-span-20 sm:row-span-20 max-sm:max-h-20 flex-30">
                              <img className="w-full max-w-full max-sm:h-11.5/12 rounded-md" src={post.image || "/images/w01.png"} alt="" />
                          </div>
                          <div className="sm:col-span-20 pl-2 pr-1 pt-3 sm:absolute sm:bottom-0 title-shadow sm:row-span-20 flex-70 self-end text-white pb-3 max-sm:self-start" style={{background:'-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 30%, rgba(0, 0, 0, 0.8) 100%)'}}> 
                              <p className="mb-1 overflow-hidden whitespace-nowrap	">
                                <span className="text-sm bg-violet-600 inline-block px-1 border border-gray-500 py-0.5 rounded" >{post.category}</span>
                              </p>
                              <p className="mb-1 text-md font-semibold sm:text-white">
                                
                              <Link href={`/blog/${latestPost.title}`}>{latestPost.title}</Link> 
                              </p>
                          </div>
                      </div>
                 
                    ))}
                    
                  </div>
          </div>
      </section>  
      
      
     <section className="w-11.4/12 max-w-full mx-auto my-12">
                <div className="grid sm:grid-cols-3 gap-2">
                    <div className="sm:col-span-2">
                      <header className="flex items-center border border-gray-300 py-1 px-1.5 rounded">
                          <p className="m-0 font-bold bg-violet-500 rounded p-1 text-base text-white">Web Development </p>
                          <a className="ml-auto flex items-center cursor-pointer">
                              <span className="px-1.5 capitalize text-slate-500 font-bold hover:text-primary-btn">more</span>
                              <div className="p-0.5 bg-slate-300 rounded hover:bg-primary-btn">
                                <svg stroke="currentColor" fill="none" className="text-slate-700 hover:text-white " stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                              </div>
                              </a> 
                      </header>
                        <div className="grid sm:grid-cols-2 sm:border sm:border-gray-300 mt-1.5 rounded-[3px] gap-x-2 sm:p-2">
                              <div className="rounded-[3px] sec-elm-bg max-sm:p-1 max-sm:mb-2 max-sm:border max-sm:border-elem-border">
                                      <div className="feature-content">
                                          <div className="featured-img">
                                              <img className="w-full max-w-full rounded" src={latestPost.image || "/images/w01.png"} alt="" />  
                                          </div>
                                          <div className="article-content">
                                              <div className="article-title"> 
                                                  <p className="text-lg font-bold mt-2">
                                                  <Link href={`/blog/${latestPost.title}`}>{latestPost.title}</Link> 
                                                  </p>
                                                  <p>
                                                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',
                                                  </p>
                                              </div>
                                          </div>
                                      </div>
                              </div>
                              <div className="sm:pl-2">
                                  {/* @for ($i = 0; $i < $posts->count(); $i++) */}
                                  {posts.map((post, index) => (
                                          <div className="flex sec-elm-bg border border-elem-border p-1.5 mb-1.5 items-center rounded-md">
                                              <div className="flex-30">
                                                  <div className="thumb-content">
                                                      <img  className="w-full max-w-full rounded" src={post.image || "/images/w01.png"}  alt="" />
                                                  </div>
                                              </div>
                                              <div className="flex-70 pl-3">
                                                  <div className="thumb-content">
                                                     <h3 className="text-sm text-slate-600 font-bold">
                                                     <Link href={`/blog/${post.title}`}>{latestPost.title}</Link> 
                                                        </h3>
                                                  </div>
                                              </div>
                                          </div>
                                  ))};  
                              </div>
                          </div>
                    </div>
                    <div className="sm:pl-5">
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
                                             <h3 className="text-sm text-gray-200 pl-2 font-bold mb-0"><Link href={`/blog/${post.title}`}>{latestPost.title}</Link> </h3>
                                          </div>
                                      </div>
                                  </div>
                                  
                                  </div>
                                  ))};  
                          </div>
                    </div>
                </div>      
      </section> 

      
      <section className="w-11.4/12 my-15 mx-auto ">
            <div className="grid md:grid-cols-2 gap-5">
                <div className="p-1">
                  <header className="flex items-center sm:border-b sm:border-b-gray-300 max-sm:border max-sm:border-gray-300 py-1 max-sm:px-2 max-sm:bg-white sm:mb-3 max-sm:rounded-t-md">
                      <p className="m-0 font-bold bg-blue-500 rounded-md py-1 px-1.5 font-nav text-[14.5px] text-white"> News </p>
                      <a className="ml-auto flex items-center cursor-pointer">
                          <span className="px-1.5 capitalize text-slate-500 font-bold hover:text-primary-btn">more</span>
                          <div className="p-0.5 bg-slate-300 rounded hover:bg-primary-btn">
                              <svg stroke="currentColor" fill="none" className="text-slate-700 hover:text-white " stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </div>
                      </a> 
                  </header>
                  <div className="sm:pt-3 sm:px-3 sm:pb-20 sm:bg-gray-100  sm:border sm:border-gray-200 max-sm:border max-sm:border-gray-300 max-sm:border-t-0 max-sm:rounded-b-md">
                      <div className="flex bg-white max-sm:flex-col px-2 pb-2 sm:pt-2 sm:rounded-md max-sm:rounded-b-md max-sm:pt-[1.4rem] ">
                        <div className="flex-50 max-sm:flex-100 max-sm:order-2">
                            <h3 className="text-xl"><Link href={`/blog/${post.title}`}>{latestPost.title}</Link> </h3>   
                        </div>
                        <div className="flex-50 max-sm:flex-100 max-sm:order-1">
                          <img className="w-full max-w-full rounded-md" src={post.image || "/images/w01.png"} alt="" /> 
                        </div>
                      </div>
                        
                  </div>
                  <div className="sm:px-3 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-[1rem] sm:mt-[-3rem]">
                  {fastPosts.map((post, index) => (
      
                      <div className="post-t-shadow shadow-lg max-sm:bg-white rounded-md ">
                          <a href="" className="text-gray-600 max-sm:h-20  hover:text-primary-btn max-sm:flex">
                              <img className="max-sm:flex-30 max-sm:max-w-30 rounded-t-md max-sm:p-2 max-sm:rounded-xl max-sm:max-h-20" src={post.image || "/images/w01.png"}  />
                              <div className="flex-70 pt-3 max-sm:hidden pl-2 text-gray-600">
                                 
                                          <span >{post.category}</span>
                                        
                              </div>
                              <div className="max-sm:flex-70 max-sm:max-w-70 px-2 sm:pt-1.5 max-sm:pt-2 pb-2">
                                  <h3 className="sm:text-base text-[15px] font-semibold "><Link href={`/blog/${post.title}`}>{latestPost.title}</Link> </h3>
                              </div>
                          </a>  
                      </div>
                      ))}
                  </div>
                </div>
      
                <div className="p-1">
                  <header className="flex items-center sm:border-b sm:border-b-gray-300 max-sm:border max-sm:border-gray-300 py-1 max-sm:px-2 max-sm:bg-white sm:mb-3 max-sm:rounded-t-md">
                      <p className="m-0 font-bold bg-blue-500 rounded-md py-1 px-1.5 font-nav text-[14.5px] text-white"> Education </p>
                      <a className="ml-auto flex items-center cursor-pointer">
                          <span className="px-1.5 capitalize text-slate-500 font-bold hover:text-primary-btn">more</span>
                          <div className="p-0.5 bg-slate-300 rounded hover:bg-primary-btn">
                              <svg stroke="currentColor" fill="none" className="text-slate-700 hover:text-white " stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </div>
                      </a> 
                  </header>
                  <div className="sm:pt-3 sm:px-3 sm:pb-20 sm:bg-gray-100  sm:border sm:border-gray-200 max-sm:border max-sm:border-gray-300 max-sm:border-t-0 max-sm:rounded-b-md">
                      <div className="flex bg-white max-sm:flex-col px-2 pb-2 sm:pt-2 sm:rounded-md max-sm:rounded-b-md max-sm:pt-[1.4rem] ">
                        <div className="flex-50 max-sm:flex-100 max-sm:order-2">
                            <h3 className="text-xl"><Link href={`/blog/${latestPost.title}`}>{latestPost.title}</Link>  </h3>   
                        </div>
                        <div className="flex-50 max-sm:flex-100 max-sm:order-1">
                          <img className="w-full max-w-full rounded-md" src={latestPost.image || "/images/w01.png"} alt="" /> 
                        </div>
                      </div>
                        
                  </div>
                  <div className="sm:px-3 grid grid-cols-1 sm:grid-cols-3 gap-4 mt-[1rem] sm:mt-[-3rem]">
                  {fastPosts.map((post, index) => (
      
                      <div className="post-t-shadow shadow-lg max-sm:bg-white rounded-md ">
                          <a href="" className="text-gray-600 max-sm:h-20  hover:text-primary-btn max-sm:flex">
                              <img className="max-sm:flex-30 max-sm:max-w-30 rounded-t-md max-sm:p-2 max-sm:rounded-xl max-sm:max-h-20" src={post.image || "/images/w01.png"} />
                              <div className="flex-70 pt-3 max-sm:hidden pl-2 text-gray-600">
                                  
                                          <span >{post.category}</span>
                              </div>
                              <div className="max-sm:flex-70 max-sm:max-w-70 px-2 sm:pt-1.5 max-sm:pt-2 pb-2">
                                  <h3 className="sm:text-base text-[15px] font-semibold "><Link href={`/blog/${post.title}`}>{latestPost.title}</Link> </h3>
                              </div>
                          </a>  
                      </div>
                      ))};
                  </div>
                </div>
      
            </div> 
      </section> 



      
      <section className="w-11.4/12 my-10 mx-auto rounded-md" >
          <div className="grid sm:grid-cols-3 gap-y-3 gap-x-3">
              <div className="sm:col-start-1 sm:col-span-2">
                  <header className="flex items-center border-b border-b-gray-300 py-1 mb-3">
                      <p className="m-0 font-bold primary-btn rounded py-1 px-1.5 font-nav text-[14.5px] text-white"> sport </p>
                      <a className="ml-auto flex items-center cursor-pointer">
                          <span className="px-1.5 capitalize text-slate-500 font-bold hover:text-primary-btn">more</span>
                          <div className="p-0.5 bg-slate-300 rounded hover:bg-primary-btn">
                              <svg stroke="currentColor" fill="none" className="text-slate-700 hover:text-white " stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </div>
                      </a> 
                  </header>
                  <div className="grid sm:grid-cols-2 gap-x-3">
                      <div className="grid">
                          <div className="col-span-full row-span-full max-sm:h-[200px] rounded-md">
                              <img className="w-full max-w-full h-full rounded-md" src={post.image || "/images/w01.png"} alt="" />  
                          </div>
                          <div className="col-span-full row-span-full title-shadow self-end text-white p-1 pl-4 rounded-b-md"> 
                              <p className="mb-0.5 text-base">
                              
                              <a href="">{post.category}</a>
                             
                              </p>
                              <p className="font-bold text-2xl pb-2">
                              
                              <Link href={`/blog/${post.title}`}>{latestPost.title}</Link>                             
                              </p>
                          </div>
                      </div> 
                      <div className="p-0">
                      {newPosts.map((post, index) => (
                      
                          <div className="p-3 pb-2 bg-gray-100 rounded-lg border first:mb-2 border-gray-200">
                              <div className="flex bg-white p-2 rounded-md">
                              <div className="flex-50">
                                  <h3 className="text-xl"><Link href={`/blog/${post.title}`}>{latestPost.title}</Link> </h3>   
                              </div>
                              <div className="flex-50">
                                  <img className="w-full max-w-full rounded-md"  src={post.image || "/images/w01.png"} alt="" /> 
                              </div>
                              </div>
                          </div>
                         
                      ))};
                      </div>
                  </div>
              </div>
              <div className="felx">
                  <header className="flex items-center border-b border-b-gray-300 py-1 mb-3">
                      <p className="m-0 font-bold primary-btn rounded py-1 px-1.5 font-nav text-[14.5px] text-white"> News </p>
                      <a className="ml-auto flex items-center cursor-pointer">
                          <span className="px-1.5 capitalize text-slate-500 font-bold hover:text-primary-btn">more</span>
                          <div className="p-0.5 bg-slate-300 rounded hover:bg-primary-btn">
                              <svg stroke="currentColor" fill="none" className="text-slate-700 hover:text-white " stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                          </div>
                      </a> 
                  </header>
                  <div className="">
                  {newPosts.map((post, index) => (
                          <div className="p-3 pb-2 bg-gray-100 rounded-lg border first:mb-2 border-gray-200">
                              <div className="flex bg-white p-2 rounded-md">
                              <div className="flex-50">
                                  <h3 className="text-xl"> <Link href={`/blog/${post.title}`}>{latestPost.title}</Link> </h3>   
                              </div>
                              <div className="flex-50">
                                  <img className="w-full max-w-full rounded-md" src={post.image || "/images/w01.png"} alt="" /> 
                              </div>
                              </div>
                          </div>
                         ))};
                  </div>
      
              </div>
          </div>
      </section>
      
      
       {/* 
      <section className="w-11.4/12 my-10 mx-auto ">
              <header className="flex items-center py-1 mb-3">
                  <p className="m-0 font-bold primary-btn rounded py-1 px-1.5 font-nav text-[14.5px] text-white"> Development </p>
                  <a className="ml-auto flex items-center cursor-pointer">
                      <span className="px-1.5 capitalize text-slate-500 font-bold hover:text-primary-btn">more</span>
                      <div className="p-0.5 bg-slate-300 rounded hover:bg-primary-btn">
                          <svg stroke="currentColor" fill="none" className="text-slate-700 hover:text-white " stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="15" width="15" xmlns="http://www.w3.org/2000/svg"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                      </div>
                  </a> 
              </header>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-7">
                  @for ($i = 0; $i < 4; $i++)
                  <div className="post-t-shadow rounded-md max-sm:bg-white max-sm:border max-sm:border-gray-300">
                      <a href="" className="text-gray-600 hover:text-primary-btn">
                          <img className="w-full rounded-t-md" src="{{ asset('uploads/post/'.$latestPosts[$i]->featuredImage) }} " />
                          <div className="pt-3 pl-2 text-gray-600">
                              @if ($latestPosts[$i]->categories->count()>0)
                                  @for ($j = 0; $j < 1; $j++)
                                      @if ($j == 0)
                                      <span>{{$latestPosts[$i]->categories[$j]->name}}</span>
                                      @endif
                                  @endfor
                              @endif
                          </div>
                          <div className="px-2 pt-1.5 pb-2">
                              <h3 className="text-lg font-bold ">{{$latestPosts[$i]->title}}</h3>
                          </div>
                      </a>  
                  </div>
                  @endfor
              </div>
      </section> 
      
      */}
      <section className="w-11.4/12 my-10 mx-auto">
          <div className="grid sm:grid-cols-22/56/22 gap-x-2 max-sm:gap-y-4">
              <div className="border border-gray-300 rounded-xl max-sm:h-56">
                   <div className="grid h-full">
                      <div className="col-span-full row-span-full">
                          <img className="w-full max-w-full h-full rounded-xl object-cover" src={latestPost.image} alt="" />  
                      </div>
                      <div className="col-span-full row-span-full title-full-shadow flex flex-col justify-end h-full self-end text-white p-1 pl-4 rounded-b-xl"> 
                          <p className="text-base mb-2">
                          <a href="" className='bg-violet-600 text-white px-1.5 rounded py-1 text-sm '>{latestPost.category}</a>
                        
                          </p>
                          <p className="font-bold text-2xl pb-2 mb-2">
                          
                          <Link href={`/blog/${latestPost.title}`}>{latestPost.title}</Link> 
                              
                                                        
                          </p>
                      </div>
                  </div>
              </div>
              <div className="border border-gray-300 rounded-xl max-sm:h-56">
              <div className="grid">
                          <div className="col-span-full row-span-full">
                              <img className="w-full max-w-full h-full rounded-xl" src={post.image} alt="" />  
                          </div>
                          <div className="col-span-full row-span-full title-full-shadow flex flex-col justify-end h-full self-end text-white p-1 pl-4 rounded-b-xl"> 
                              <p className="text-base mb-2">
                             
                              <a href="" className='bg-violet-600 text-white px-1.5 rounded py-1 text-sm '>{post.category}</a>
                              
                              </p>
                              <p className="font-bold text-2xl mb-3 pb-2">
                             
                              <Link href={`/blog/${latestPost.title}`}>{post.title}</Link> 
                                                          
                              </p>
                          </div>
                      </div>
              </div>
              <div className="border border-gray-300 rounded-xl max-sm:h-56">
              <div className="grid h-full">
                          <div className="col-span-full row-span-full">
                              <img className="w-full max-w-full h-full rounded-xl object-cover" src={topPost.image} alt="" />  
                          </div>
                          <div className="col-span-full row-span-full title-full-shadow flex flex-col justify-end h-full self-end text-white p-1 pl-4 rounded-b-xl"> 
                              <p className="text-base mb-2">
                              
                              <a href="" className='bg-violet-600 text-white px-1.5 rounded py-1 text-sm '>{topPost.category}</a>
                             
                              </p>
                              <p className="font-bold text-2xl pb-2 mb-2">
                             
                                  <a href="" > {topPost.title}
                                  </a>
                                                            
                              </p>
                          </div>
                      </div>
              </div>
      
          </div>
      </section>
      
      
      
      
      
         
          
         
            
        
      
      
      
      <div className="">
         <Footerk />
         </div>
         </div>
         


    )
  }
  
 