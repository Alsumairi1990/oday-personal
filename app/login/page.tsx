'use client'

const Login = () => {
  return (
   <div className="bg-gray-800">
   <div className ="max-w-[400px] w-full  m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
   {/* <a href="">
   <img src="assets/images/logo-dark.png" className="mx-auto h-7 block dark:hidden" alt="">
   <img src="assets/images/logo-light.png" className="mx-auto h-7 dark:block hidden" alt="">
   </a> */}
   <h5 className="my-6 text-xl font-semibold">Signup</h5>
   <form action="signup-success.html" className="text-start">
      <div className="grid grid-cols-1">
         <div className="mb-4">
            <label className="font-semibold text-md text-gray-200" htmlFor="RegisterName">Your Name:</label>
            <input id="RegisterName" type="text" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="Harry" />
         </div>
         <div className="mb-4">
            <label className="font-semibold text-md text-gray-200" htmlFor="LoginEmail">Email Address:</label>
            <input id="LoginEmail" type="email" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="name@example.com" />
         </div>
         <div className="mb-4">
            <label className="font-semibold text-md text-gray-200" htmlFor="LoginPassword">Password:</label>
            <input id="LoginPassword" type="password" className="form-input w-full text-[15px] py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-full outline-none border border-gray-200 focus:border-violet-600 dark:border-gray-800 dark:focus:border-violet-600 focus:ring-0 mt-3" placeholder="Password:" />
         </div>
         <div className="flex items-center mb-4">
            <input className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-violet-600 focus:border-violet-600/30 focus:ring focus:ring-offset-0 focus:ring-violet-600/20 focus:ring-opacity-50 me-2" type="checkbox" value="" id="accept" />
            <label className="form-checkbox-label text-slate-400" htmlFor="accept">I Accept <a href="" className="text-violet-600">Terms And Condition</a></label>
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