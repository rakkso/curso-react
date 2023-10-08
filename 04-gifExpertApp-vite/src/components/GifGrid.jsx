import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ id,category }) => {


  const [images,setImages] = useState([])


  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
}

useEffect(() => {

    const newImages= getImages();
    //setImages(newImages);
  
  },[])


  //getGifs();

  return (
    <>
    <h3>{category}  </h3>

    <ol> {
    
    /* images.map .. */
    images.map( imagen => (
      <li key= {imagen.id}>{imagen.title}</li>
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
