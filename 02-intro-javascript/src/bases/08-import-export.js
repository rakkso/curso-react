

import heroes,{owners as ownersa} from '../data/heroes'

//pero para que funcione en heroes.js tenemos que poner un export

//Proponer hacer un ejercicio para que hacer que el siguiente código funcione,
//consultado el enlace : https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
const getHeroeById = (id) => {
    return heroes.find((elemento) => {
        //console.log('id:', id);
        //console.log('elemento:', elemento);
        return id===elemento.id});
}
console.log(ownersa);
console.log( getHeroeById(2))

//mejorado 

const getHeroeById2 = (id) => heroes.find((elemento) => id===elemento.id);


console.log( getHeroeById2(2))

//Ahora propone hacer funcionar el siguiente código, el caso es que el
// find no nos sirve porque ahora retornaremos más de un valor 
// dice que miremos la documentación para usar el Filter


const getHeroeByOwner = (owner) => heroes.filter((elemento) => owner===elemento.owner);

console.log( getHeroeByOwner('DC'));

export {getHeroeById};