import React from 'react'

export default function CityCard( { city } ) {
    return (
        <div className="cityCard">
        <p>{city["city"]}</p>           
        </div>
    )
}
