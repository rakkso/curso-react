import { useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ id,category }) => {

  useEffect(() => {getGifs(category)},[])

  //getGifs();

  return (
    <>
    <h3>{category}  </h3>

    
    </>
  
  )
}
