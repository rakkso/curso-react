import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas";

describe('Test sobre 09-promesas',()=>{
    test('getHeroeByIdAsyncdebe retornar un heroe por i',(CuandoHecho)=>{

        const id = 1;
        getHeroeByIdAsync(id).then( heroe => {
            console.log('hola:', heroe);
            //expect(true).toBe(false);
            expect(heroe).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            })
            CuandoHecho();
        }
        
        );
        console.log('adios')
        //console.log (heroe);
      /*   expect(heroe.length).toBe(3);
        expect(heroe).toEqual(      [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
 */
        //expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
       
    })

    test('getHeroeByIdAsyncdebe retornar un error si el id no existe',(CuandoHecho)=>{

        const id = 100;
        getHeroeByIdAsync(id).then(heroe =>{
            expect(heroe).toBeFalsy();
            CuandoHecho();
        }).catch( heroe => {
            console.log('hola:', heroe);
            expect(heroe).toBe('No se pudo encontrar el héroe');
            CuandoHecho();
        }
        
        );
        console.log('adios')
        //console.log (heroe);
      /*   expect(heroe.length).toBe(3);
        expect(heroe).toEqual(      [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
          ]);
 */
        //expect(heroe).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
       
    })
})