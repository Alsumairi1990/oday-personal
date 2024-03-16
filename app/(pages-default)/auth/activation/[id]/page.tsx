interface Props {
    params: {
        id: string;
    };
}
const activationPage = ({params} : Props ) => {
   
   return (
      <div className="w-full" >
        <h3>activation page {params.id}</h3>

      </div>
   )
 };
 export default activationPage;