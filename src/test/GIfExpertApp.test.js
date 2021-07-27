import React from "react"
import { shallow } from "enzyme"
import { GIfExpertApp } from "../GIfExpertApp"


describe('Pruebas en componente GIfExpertApp', () => {
    
    test('Debe mostrar correctamente', () => {
        
        const wrapper = shallow(<GIfExpertApp  />)
        expect( wrapper ).toMatchSnapshot()

    })

    test('debe de mostrar una lista de categorias ', () => {
        
        const categorias = ['Goku', 'Vegeta']
        const wrapper = shallow(<GIfExpertApp defaultCategorias={ categorias}  />)

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('GifGrid').length ).toBe( categorias.length )

    })
    
    

})
