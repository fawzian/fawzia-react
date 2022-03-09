import React from 'react';
import './CityCard.css';


export default function CityCard( { city } ) {
    return (
        <div className="cityCard">
        <h2>{city["city"]}</h2> 
        <p><span className="subheading"> Location: </span> {city["location"]}</p>
        <p><span className="subheading">Location ID: </span> {city["locationId"]}</p>
        <br/>

        <hr/>
        <br/>
        <p><span className="subheading">Entity: </span>{city["entity"]}</p>
        <p><span className="subheading">Parameter: </span>{city["parameter"]}</p>
        <p><span className="subheading">Sensor Type: </span>{city["sensorType"]}</p>
        <p><span className="subheading">Unit: </span>{city["unit"]}</p>
        <p><span className="subheading">Value: </span>{city["value"]}</p>
                  
        </div>
    )
}
