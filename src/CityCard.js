import React from 'react';
import './CityCard.css';

export default function CityCard( { city } ) {
    return (
        <div className="cityCard">
        <h2>{city["city"]}</h2> 
        <h2><span className="subheading">Location ID: </span> {city["locationId"]}</h2> <br/>
        <p><span className="subheading"> location: </span> {city["location"]}</p>
        <p><span className="subheading">entity: </span>{city["entity"]}</p>
        <p><span className="subheading">parameter: </span>{city["parameter"]}</p>
        <p><span className="subheading">sensor type: </span>{city["sensorType"]}</p>
        <p><span className="subheading">unit: </span>{city["unit"]}</p>
        <p><span className="subheading">value: </span>{city["value"]}</p>
                  
        </div>
    )
}
