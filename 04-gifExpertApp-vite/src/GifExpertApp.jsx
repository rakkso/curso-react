import { useState } from "react";

import { AddCategory, GifGrid } from "./components";
/*import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";*/

export const GifExperApp = () => {

    const [categories, setCategories] = useState([ 'categoria1','categoria2'] );
    
    const onAddCategory = ( newCategory ) => {
        //setCategories([ 'categoria1','categoria2','categoria3'] ); --> esto hace un bucle
        //y no funciona, y esto también setCategories(ategories.push("categoria3") )
        // tampoco funciona 
        // categories.push("categoria3");
        // setCategories(categories);
        // por que a react no le gusta que le toques la variable de estado. El push lo que hace es añadir
        // un valor alos existentes, pare evitar eso hay que hacer una nueva copia, modificar la copia,
        // y asignarla con el set, así le creas un nuevo estado.
        // por seo la solución es setCategories([ ...categories, 'Nuevo valor']); el comando hace una copia, y añade
        // un nuevo valor. 

        /* 
        ...categories, saca los valores, y [,] añadem por tanto para añadirla nueva al principio hacemos
        setCategories(['NuevoValor, ...categories])
        */
 
        console.log("GifExpertApp",newCategory);
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);



    }


    return (
        <>
        { /* titulo */}
        <h1>GifExpertApp</h1>

        { /* Input */}
        <AddCategory 
        //functionAddCategory={setCategories}
        onNewCategory={ (valor) => onAddCategory(valor)}
        />

        {
                categories.map( (category)  => (
                    <GifGrid 
                    key={category} 
                    category={category}/>
                ))
         
        }
        </>
    )
}