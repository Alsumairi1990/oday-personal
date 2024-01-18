
import React from 'react';

const About = () => {
    const imagePath = '/images/sect.png'
  return (
    <div className="bg-[#111] mt-16">
        <div className="grid grid-cols-3 mx-auto w-10/12 bg-[#161616] p-8">
            <div className="">
                <img className='w-full' src={`${imagePath}`} alt="" />
            </div>
            <div className="col-span-2 flex flex-col justify-center items-start pl-14 ">
                <p className="text-base text-gray-300 mb-4">ABOUT US</p>
                <h2 className="text-3xl text-gray-100 font-bold leading-10">Trunning <span className="text-orange-500">Creativity Thinking</span> into Information </h2>
            </div>
        </div>

    </div>
  );
};

export default About;