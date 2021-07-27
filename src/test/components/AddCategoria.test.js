import React from "react"
import { shallow } from "enzyme"
import { AddCategoria } from "../../components/AddCategoria"



describe('Pruebas en componente <AddCategoria  />', () => {

    const setCategorias = jest.fn()

    let wrapper = shallow( <AddCategoria setCategorias={setCategorias} />)
    
    beforeEach( () => {
        jest.clearAllMocks()
        
        wrapper = shallow( <AddCategoria setCategorias={setCategorias} />)
    })
    
    test('debe de mostrarse correctamente', () => {
        

        expect( wrapper ).toMatchSnapshot()


    })

    test('Debe de cambiar la caja de texto', () => {
        
        const input = wrapper.find('input')
        const value = 'Hola Mundo'

        input.simulate('change', { 
            target: {
                value
            } 
        })

    })

    test('No debe de postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', {
            preventDefault(){

            } 
        })

        expect( setCategorias ).not.toHaveBeenCalled()

    })

    test('debe de llamar el setCategorias y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo'
        wrapper.find('input').simulate('change', {
            target: {
                value
            }
        })

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategorias ).toHaveBeenCalled()
        expect( setCategorias ).toHaveBeenCalledWith(expect.any(Function))

        expect( wrapper.find('input').prop('value')).toBe('')


    })
    
    
    
    

})
