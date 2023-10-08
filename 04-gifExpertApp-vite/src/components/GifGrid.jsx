

import GifItem from "./GifItem";
import {useFetchGifs} from "../hooks/useFetchGifs"

export const GifGrid = ({ id,category }) => {

 const { images, isLoading } = useFetchGifs(category);

console.log (isLoading);
  //getGifs();

  return (
    <>
    <h3>{category}  </h3>
    {
    isLoading && ( <h2>Cargando...</h2>)
    }
    
    <div className="card-grid">
      {
      /* images.map .. */
      images.map( imagen => (
        <GifItem key={imagen.id} {...imagen}/>
      ))
      }
    </div>
   



  
    

    
    </>
  
  )
}
