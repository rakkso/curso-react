
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
}


console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

const { nombre, edad, clave} = persona;
console.log(nombre);
console.log(edad);
console.log(clave);

//y si queremos renombrar algún campos

const { nombre:nombre2, edad:edad2, clave:clave2} = persona;
console.log(nombre2);
console.log(edad2);
console.log(clave2);


const urseContext = ({clave, edad}) => {
    return {
        nombreClave:clave,
        anios: edad,
        latlng: {
            lat: 13.4,
            lng: -12
        }
    }

}


const avenger = urseContext (persona);
const {nombreClave, anios} = avenger;
console.log(avenger);
console.log(nombreClave,anios)

const {nombreClave:minombre, anios:misAnios, latlng: {lat,lng}} = avenger;
console.log(minombre, misAnios);
console.log (lat,lng);

