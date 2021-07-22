import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem'

export const GifGrid = ({categoria}) => {

    const { loading, data:imgs } = useFetchGifs(categoria)

    return (
        <>
            <h3 className='animate__animated animate__fadeIn animate__delay-0.8s'> {categoria} </h3>

            {loading && <p className='animate__animated animate__flash'>Cargando...</p>}

            <div className='card-grid'>
                
                    { imgs.map( img => {
                        return <GifGridItem
                        key={img.id}
                        {...img} 
                        />
                    })}

            </div>
        
        </>

    )
}
