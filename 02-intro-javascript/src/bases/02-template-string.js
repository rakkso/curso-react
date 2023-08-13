const nombre ='Fernando';
const apellido = 'Herrera';

//Esto es un StringTemplate
const nombreCompleto = `${nombre} ${apellido} ${1+1}`


console.log(nombreCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre; //Esto no es un StringTemplate
}


console.log(`Este es un texto: ${getSaludo(nombre)}`);