import React from 'react';
import './CityCard.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';




export default function CityCard( { city } ) {



    const [cityId, setCityId] = useState('')



    async function getCityId(){
        let locationNum = await city.locationId
        setCityId(locationNum)
        console.log(locationNum)
    }

    let urlLocation = `location/${cityId}`

    useEffect(() => {
        getCityId();
        return () => {
          setCityId({}); // This worked for me
        };
    }, []);

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
        {/* <h1 onClick={getCityId}>hey</h1> */}

        <Link onClick={getCityId} to={urlLocation}>More Information</Link>
        </div>
    )
}
