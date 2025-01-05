import React from 'react';
import CreateFeature from '../../_components/CreateFeature';


interface Props {
  params: {
      id: string;
  };
}
const CreatePage = ({params}:Props) => {
    return (
      <div className="">
        <CreateFeature toolId={params.id}  />
      </div>
)
};
export default CreatePage;