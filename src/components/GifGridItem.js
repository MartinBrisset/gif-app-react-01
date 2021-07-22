import React from 'react'

export const GifGridItem = ({id,title,url}) => {


    return (
        <div className='card animate__animated animate__fadeIn animate__delay-0.8s'>
            <img src={url} alt={title} />
            <p> {title} </p>
        </div>
    )
}
