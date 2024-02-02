
import React from 'react';
import { PhaseInt } from '@/app/models/PhaseInt'
import { RiArrowRightFill } from "react-icons/ri";


interface PhaseIntProps {
    phase: PhaseInt;
    index: number;
  }
const ProcessPhase = ({ phase,index } : PhaseIntProps ) => {
  const phaseKeys = Object.keys(phase);
  const isLastIndex = index === phaseKeys.length - 1;
  
  return (
   
        <div className="rounded-md flex flex-col max-sm:mb-8 shadow-md  items-center relative sm:flex-18 border border-gray-300 dark:border-gray-600 dark:bg-black-150">
          {!isLastIndex && (
            <span className="flex absolute -bottom-6 sm:top-4 sm:-right-6 "><RiArrowRightFill className='text-xl max-sm:rotate-90 text-blue-500' /></span>
          )}
            <div className="p-1.5  w-14 h-14 bg-gray-50 flex flex-col items-center shadow-md absolute -top-6 rounded-full border border-gray-400">
              <img className='  rounded-full' src={phase.image} alt="" />
           </div>
         
          <div className="flex mt-12 mb-2 items-center justify-center">
            <span className="text-red-500 font-semibold tex-xl mr-1.5 ">{index+1}</span><span className="text-xs text-red-500 mr-1.5">|</span>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-orange-400">{phase.name}</h2>
          </div>
          <div className="flex border-b border-b-gray-200 dark:border-b-gray-600 flex-col items-center p-1 pl-2.5 pb-2">
            <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">{phase.desc}</p>
          </div>
          <div className="mt-3 p-2">
                  {
                    phase.steps && phase.steps.map((step, index) => (
                      <div className='flex items-center' key={step.id}>
                        
                        {phase.steps && index === phase.steps.length - 1 ? (
                          <li className='flex w-full items-center py-2.5' key={step.id}>
                          <span className="flex h-2 w-2 rounded-full bg-red-400 dark:bg-violet-500 mr-2.5"></span>
                          <h3 className='text-sm text-gray-700 dark:text-gray-300 font-semibold'>{step.name}</h3>
                          </li>
                          ) : (
                              <li className='flex w-full items-center py-2.5 border-b border-gray-200 dark:border-b-gray-700' key={step.id}>
                                <span className="flex h-2 w-2 rounded-full bg-red-400 dark:bg-violet-500 mr-2.5"></span>
                                <h3 className='text-sm text-gray-700 dark:text-gray-300 font-semibold'>{step.name}</h3>
                            </li>
                        )}
                      </div>
                    ))
                  }
          </div>
    </div>
  );
};

export default ProcessPhase;