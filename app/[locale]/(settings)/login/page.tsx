'use client'

const Login = () => {
   const imagePath = '/images/w01.jpg';

  return (
   // <div className="bg-gray-800 h-full">
          <div className="relative h-full flex px-4 w-full bg-no-repeat bg-center bg-cover -z-0" style={{backgroundImage: `url(${imagePath})`}}>
   <div className="absolute top-0 z-[-1]  left-0 w-full h-full bg-[#2f2f2fba]  " style={{backgroundImage: 'linear-gradient(to top, rgb(15 23 42 / 68%),rgb(0 0 0 / 55%), rgb(255 255 255 / 0%))'}}></div>
   <div className ="max-w-[400px] w-full  m-auto p-6 bg-white dark:bg-black-100 border border-gray-800 shadow-md dark:sha0dow-gray-800 rounded-md">
   <div className="flex justify-center text-sm">
      <a href="" className="">
         <img src="https://shreethemes.in/giglink/landing/assets/images/logo-light.png" alt="" />
      </a>
   </div>
   
   
   <h5 className="my-6 text-base text-gray-100 font-semibold">Login Page</h5>
   <form action="signup-success.html" className="text-start z-40">
      <div className="grid grid-cols-1">
       
         <div className="mb-4">
            <label className="font-semibold text-md text-gray-200" htmlFor="LoginEmail">Email Address:</label>
            <input id="LoginEmail" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-black-150 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="name@example.com" />
         </div>
         <div className="mb-4">
            <label className="font-semibold text-md text-gray-200" htmlFor="LoginPassword">Password:</label>
            <input id="LoginPassword" type="password" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-black-150 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="Password:" />
         </div>
         <div className="flex justify-between mb-4">
            <div className="inline-flex items-center mb-0">
               <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="RememberMe" />
               <label className="form-checkbox-label text-slate-400" htmlFor="RememberMe">Remember me</label>
            </div>
            <p className="text-slate-400 mb-0"><a href="reset-password.html" className="text-slate-400">Forgot password ?</a></p>
         </div>
         <div className="mb-4">
            <input type="submit" className="btn py-2.5 bg-violet-600  hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full w-full" value="Register" />
         </div>
         <div className="text-center">
            <span className="text-slate-400 me-2">Already have an account ? </span> <a href="login.html" className="text-black dark:text-white font-bold">Sign in</a>
         </div>
      </div>
   </form>
</div>
</div> 
  )
};
export default Login;