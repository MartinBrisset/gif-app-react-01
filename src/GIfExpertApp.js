import React, {useState} from 'react'
import { AddCategoria } from './components/AddCategoria'
import { GifGrid } from './components/GifGrid'

export const GIfExpertApp = ({ defaultCategorias = []}) => {

    // const [categorias, setCategorias] = useState(['One Punch'])
    const [categorias, setCategorias] = useState(defaultCategorias)

    return (
        <div>
            <h2>GIfExpertApp</h2>
            <AddCategoria setCategorias={setCategorias}/>
            <hr  />

            <ol>
                {
                    categorias.map( categoria => {
                        return <GifGrid 
                            key={categoria}
                            categoria={categoria} 
                        />
                    })
                }
            </ol>

        </div>
    )
}
