import React from "react"
import '@testing-library/jest-dom'
import { shallow } from "enzyme"
import { GifGrid } from "../../components/GifGrid"
import { useFetchGifs } from "../../hooks/useFetchGifs"
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid  />', () => {

    const categoria = 'Goku'
    
    test('Debe de mostrar el componente correctamente ', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })
        
        const wrapper = shallow( <GifGrid categoria={categoria} />)
        expect( wrapper ).toMatchSnapshot()
        
    })
    
    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquiercosa/cosa.jpg',
            title: 'Hola que tal'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow( <GifGrid categoria={categoria} />)

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('p').exists() ).toBe(false)
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )


    })
    

})