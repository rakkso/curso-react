import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ id,category }) => {


  const [images,setImages] = useState([])


  useEffect(() => {

    //const newImages= getGifs({category});
    
  
    getGifs(category  )
        .then( newImages => setImages(newImages));
    
    //console.log("imagenes",newImages); --> Si lo activo no funciona no lo entiendo.
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
