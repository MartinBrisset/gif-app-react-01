import { getGifs } from "../../helpers/getGifs"


describe('Pruebas con getGifs Fecha', () => {
    
    test('debe de traer 10 elementos', async() => {
        
        const gifs = await getGifs('One Punch')

        expect( gifs.length ).toBe(10)

    })

    test('debe de traer 0 elementos si no mandamos un parametro', async() => {
        
        const gifs = await getGifs('')

        expect( gifs.length ).toBe(0)

    })
    

})
