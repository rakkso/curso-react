

import GitItem from "./GitItem";
import {useFetchGifs} from "../hooks/useFetchGifs"

export const GifGrid = ({ id,category }) => {

 const { images, isLoading } = useFetchGifs(category);

console.log (isLoading);
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
