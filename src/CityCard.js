import React from 'react';
import './CityCard.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';




export default function CityCard( { city } ) {

    // var url2 = `https://docs.openaq.org/v2/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2022-03-07T23%3A45%3A00%2B00%3A00&limit=${query}&page=1&offset=0&sort=desc&radius=1000&country_id=CA&order_by=city
    // `
    
    // async function getCityId(){
    //   var result = await Axios.get(url2);
    //   setcities(result.data.results.locationId);
    //   console.log(result.data.results)
    // }

    const [cityId, setCityId] = useState('')

    async function getCityId(){
        let locationNum = await city.locationId
        setCityId(locationNum)
        console.log(locationNum)
    }

    let urlLocation = `location/${cityId}`

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

        <Link onClick={getCityId} to={urlLocation}>hey</Link>
        </div>
    )
}
