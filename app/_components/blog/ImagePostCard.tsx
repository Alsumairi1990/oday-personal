'use client'
import ImagePost from './ImagePost';
interface ServiceProps {
    image: string,
    name : string
  }
const ImagePostCard = ({image,name}: ServiceProps) => {
  
  return (
   <ImagePost image={image} name = {name}  />
  )
};

export default ImagePostCard;