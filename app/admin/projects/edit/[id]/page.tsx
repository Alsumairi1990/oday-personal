import React from 'react';
import EditProject from '../../_components/EditProject';
interface Props {
  params: {
      id: string;
  };
}
const CreatePage = ({params}:Props) => {
    return (
      <div className="">
        <EditProject id={params.id} />
      </div>
)
};
export default CreatePage;