import { queryData } from '@/utils/getQueryOutput';

export default async function Profile() {
    // const profile = await queryData();
    // console.log(JSON.stringify(profile,null,2));
    return (
      <div>tgt</div>
        // <div className='w-11/12 mx-auto'>
        // <h1 className="text-xl font-bold">Profile Page</h1>
        // <div className="flex px-4 py-2 items-center justify-between w-full border-y border-y-gray-300 border-x border-x-gray-300" >
        //   <div className="text-gray-900 text-center">
        //     <span className="text-base">User Name </span>
        //   </div>
        //   <div className="text-gray-900 text-center">
        //     <span className="text-base">Email</span>
        //   </div>
        //   <div className="text-gray-900 text-center">
        //     <span className="text-base">Added Time</span>
        //   </div>
        // </div>
        // {profile.length > 0 ? (
        //   <div className='grid gris-cols border-x border-x-gray-300 items-center '>
            
        //     {profile.map((user: User) => (
        //       <div className='border-b flex items-center justify-between w-full border-b-gray-300 px-4 py-2' key={user.id}>
        //         <div className="py-2 text-center">
        //            <h2 className='text-gray-900 text-base font-semibold '>{user.name}</h2>
        //         </div>
        //         <div className="py-2 text-center">
        //           <p className='text-base text-gray-800'>{user.email}</p>
        //         </div>
        //         <div className="py-2 text-center">
        //           <p className='text-base text-gray-800'>{user.createdAt.toLocaleDateString()}</p>
        //         </div>
                
                
        //       </div>
              
        //     ))}
        //   </div>
        // ) : (
        //   <p>No users found.</p>
        // )}
      // </div>
      
    )
  }