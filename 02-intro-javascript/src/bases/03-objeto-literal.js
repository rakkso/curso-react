const persona ={
    Nombre: 'Pedro',
    Apellido: 'Juan',
}

const persona2 = persona;

persona.Nombre='Oscar'

console.log(persona);
console.log(persona2);

const persona3 = {...persona}

persona.Nombre='Oscar2'

console.log('Persona Original: ',  {persona});
console.log('Persona copia por referencia: ' , {persona2});
console.log('Persona copia por valor: ' , {persona3}) ;
