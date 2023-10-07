import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ id,category }) => {



  getGifs();

  return (
    <>
    <h3>{category}  </h3>

    
    </>
  
  )
}
