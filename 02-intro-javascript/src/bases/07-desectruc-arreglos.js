
const personajes =['Goku','Vegeta','Trunks']

const [  ,personaje2,personaje3 ]=personajes;

console.log(personaje2, personaje3);


const retornaArreglo = () => {
    return ['ABC',123];
}

const arr = retornaArreglo();
const [letras, numeros] = retornaArreglo();
console.log(letras,numeros)

//Tarea
//1. el primer valor de arreglo se llamará nombre
//2. el segundo se llamara setnombre
const usreState = (valor) => {
    return [valor, ()=>{console.log('Hola Mundo')}]
}

const [nombre,setNombre] = usreState('Goku');
console.log (nombre);
setNombre();

