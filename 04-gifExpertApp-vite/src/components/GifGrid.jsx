import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GitItem from "./GitItem";

export const GifGrid = ({ id,category }) => {


  const [images,setImages] = useState([])


  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
}

useEffect(() => {

    const newImages= getImages();
   
  
  },[])


  //getGifs();

  return (
    <>
    <h3>{category}  </h3>

    <ol> {
    
    /* images.map .. */
    images.map( imagen => (
      <GitItem key={imagen.id} {...imagen}/>
  
    )
       
    )



    }
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ol>

    
    </>
  
  )
}
