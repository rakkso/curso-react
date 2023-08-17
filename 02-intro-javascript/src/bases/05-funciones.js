function getUsuarioActivo(nombre) {
    return {
        uid:'ABC567',
        username: nombre,
    }
}


const usuarioActivo = getUsuarioActivo('Fernando');
console.log (usuarioActivo);

//Tarea
//1. Transformar a función con flecha.
//2. Tiene que retornar un objeto implicito

const usuarioActivo2 = (nombre) => ({uid:'ABC567',username: nombre});
console.log(usuarioActivo2('Fernando'));