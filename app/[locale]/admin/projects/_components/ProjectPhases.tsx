import React from 'react'
import ProjectPhase from './ProjectPhase'

function ProjectPhases() {
  return (
    <div className='py-1 grid grid-cols-3'>
      <div className='col-span-3 bg-white border border-gray-300 rounded p-3 px-5'>
        <div className=" gap-x-4 flex text-sm font-medium mb-3 border-b border-b-gray-200">
          <div className="py-2.5 border-b border-b-indigo-600">
            <span className="text-gray-800 ">Project1</span>
          </div>
          <div className="py-2.5 ">
            <span className="text-gray-800">Project2</span>
          </div>
        </div>
      <ProjectPhase />
      </div>
        
    </div>
  )
}

export default ProjectPhases