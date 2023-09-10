import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser(); 


        expect(user).toEqual(testUser);

    });

    test('getUsuarioActivo debe de retornar un objeto', () => {

            const testUser = {
                uid: 'ABC567',
                username: 'juan'
            };

            const userActivo = getUsuarioActivo('juan');

            expect(userActivo).toEqual(testUser);
    })

})