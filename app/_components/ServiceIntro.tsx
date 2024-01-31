
import React from 'react';

const ServiceIntro = () => {
  return (
  <div className="w-full">
    <div className="grid grid-cols-3 border-y border-y-gray-200">
        <div className="flex item-center py-6 sm:pl-16">
            <img className='sm:-mr-8' src="https://nextbigtechnology.com/wp-content/uploads/2022/06/Mobile_Game_Development_img.png" alt="" />
        </div>
        <div className="p-2 col-span-2 sm:pt-16 bg-gray-50 sm:pl-20">
            <div className="p-2 ">
                <h2 className="text-3xl font-bold text-gray-800 sm:mb-4 capiltalize tracking-wider"><span className='border-b-4 pb-3 border-b-orange-400'> Mobile  </span>App Development Solutions</h2>
                <p className="text-sm leading-7 text-gray-800 sm:mt-8 dark:text-gray-100">App development services for iOS and Android devices assist in the creation of apps. Next Big Technology has been in the sector since 2009 and is a Mobile App Development Company that can design and develop your custom mobile application.</p>
                <p className="text-sm leading-7 text-gray-800 sm:mt-8 dark:text-gray-100">Our mobile application developers can create apps for a variety of platforms, including iOS, Android, and cross-platform solutions using Flutter, React Native, and Ionic. We have expertise in building mobile app development solutions to fulfill your company requirements as one of the top-rated mobile application development firms in the United States and India.</p>

          </div>
        </div>
    </div>
  </div>
  );
};

export default ServiceIntro;