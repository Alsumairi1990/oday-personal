



import Project from "@/app/_components/user/Project";

const ProjectsPage = () => {
  const projects = [
      {
        id : 1,
        name : 'Project 1',
        image : '/images/logo.png',
        achived : '20%'
      },
      {
        id : 2,
        name : 'Project 2',
        image : '/images/manager.png',
        achived : '60%'
      },
      {
        id : 3,
        name : 'Project 3',
        image : '/images/manager3.png',
        achived : '90%'
      },
        {
        id : 4,
        name : 'Project 1',
        image : '/images/logo.png',
        achived : '20%'
      },
      {
        id : 5,
        name : 'Project 2',
        image : '/images/manager.png',
        achived : '60%'
      },
      {
        id : 6,
        name : 'Project 3',
        image : '/images/manager3.png',
        achived : '90%'
      }
  ]

    const imagePath1 = '/images/logo.png';

    return (
      <div className="w-11.7/12 mx-auto">
        <div className="px-3 py-2 mt-3 bg-white border border-gray-200 mb-2 rounded-md">
             <p className="text-gray-600  mb-0 max-sm:hidden">Projects  Page</p>
          </div>
        <div className=" grid sm:grid-cols-3 gap-6  mt-4">
           
          {projects.map((project) => (
           
            <Project project={project} ></Project>
          ))

          }

        </div>
      </div>    
)
};
export default ProjectsPage;