import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe('Test sobre 08-imp-exp',()=>{
    test('getHeroeById debe retornar un heroe por id',()=>{

        const id = 1;
        const heroe = getHeroeById(1);

        expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        
    })
})

//Tarea debe retornar un arreglo con los heroes  de DC usando toEqual
// Length === 3
//Debe retornar los heroes de Marvel
// Length === 2
describe('Test sobre 08-imp-exp 2',()=>{
    test('getHeroesByOwner debe retornar heroes de DC',()=>{

        const id = 1;
        const heroe = getHeroesByOwner('DC');
        //console.log (heroe);
        expect(heroe.length).toBe(3);
        expect(heroe).toEqual(      [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);

        //expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
        
    })

    test('getHeroesByOwner debe retornar heroes de Marvel',()=>{

        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        //console.log (heroe);
         expect(heroe.length).toBe(2);
        expect(heroe).toEqual(            [
        { id: 2, name: 'Spiderman', owner: 'Marvel' },
        { id: 5, name: 'Wolverine', owner: 'Marvel' }
      ]);

      expect (heroe).toEqual(heroes.filter((heroe) => heroe.owner === owner));
           
        
        
    })
})