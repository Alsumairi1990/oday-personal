import React from 'react';
import EditMarket from '../../_components/EditMarket';
interface Props {
    params: {
        id : number
    }
}
const DisplayPage = ({params}:Props) => {
    
    return (
      <div className="">
        <EditMarket id={params.id}  />
      </div>
)
};
export default DisplayPage;