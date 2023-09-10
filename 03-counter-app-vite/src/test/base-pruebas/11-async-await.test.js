import { getImagen } from "../../base-pruebas/11-async-await"

describe('Pruebas e 11-asyn-await',()=>{

test('getImagen debe retornar una url', async ()=>{

    const url = await  getImagen();
    console.log(url);
    expect (typeof url).toBe ('string');
})

})