import {getHeroeById } from './bases/08-import-export'


// const promesa = new Promise ( 
    
//     (resuelto,noResuelto) => {
    
//         setTimeout(() => {

//             const heroe = getHeroeById(2);
//             //console.log(heroe)
//             resuelto(heroe);    
//         }, 2000);
    
//         ;
//     }
// )
//si pongo la llamada al método resuelto, que no está definido 
//la promesa no se cumple y el método then nunca se ejecuta


// Ahora pide que dentro del setTime haga un

// const heroe = getHeroById(2);
// console.log(heroe);


// promesa.then( (p1) =>{
//     console.log('Then de la promesa', p1)
// })

const miWrapper =(parametro) =>{
   return new Promise ( 
    
    (resuelto,noResuelto) => {
    
        setTimeout(() => {

            const heroe = getHeroeById(parametro);
            console.log('Dentro', heroe)
            if (heroe)  resuelto(heroe);
            else noResuelto('No encontrado');    
        }, 2000);
    
        ;
    }
)
}

// miWrapper(2).then( p1 => console.log('Exito',p1))
// .catch(p1 => console.log('Error',p1))
//reescribe el catch así, aprovechando que solo pasamos un parámetro
// y sólo usamos uno
//  miWrapper(10).then( p1 => console.log('Exito',p1))
//  .catch(console.warn)

 //pide hacer lo mismo con el then
 miWrapper(2).then( console.log)
 .catch(console.warn)

