import React, {useState} from 'react'
import { AddCategoria } from './components/AddCategoria'
import { GifGrid } from './components/GifGrid'

export const GIfExpertApp = () => {

    const [categorias, setCategorias] = useState(['One Punch'])

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
