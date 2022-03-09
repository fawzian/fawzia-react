import React from 'react'
import Axios from "axios"
import { useState } from 'react';
import CityCard from './CityCard';
import { Link } from "react-router-dom";
import Locations from './Locations';


export default function Home() {

    const [query, setquery] = useState("");
    const [cities, setcities] = useState([]);
  
  
    var url = `https://docs.openaq.org/v2/measurements?date_from=2000-01-01T00%3A00%3A00%2B00%3A00&date_to=2022-03-07T23%3A45%3A00%2B00%3A00&limit=${query}&page=1&offset=0&sort=desc&radius=1000&country_id=CA&order_by=city
    `
    
    async function getCities(){
      var result = await Axios.get(url);
      setcities(result.data.results);
      console.log(result.data.results)
    }
  
    const onSubmit = (e) => {
      e.preventDefault();
      getCities();
    }

    return (
        <div className="home" onSubmit={onSubmit}>


        <h1 onClick={getCities} className="headline">Air Quality in Canada</h1><br/>
        <h2 className="details">Data is strictly from between the dates of January 1st 2000 and March 3rd 2022. <br/>The information is provided in descending order.</h2>
        <form className="form">
          <input type="text" className="input" placeholder="numbers only ex. 8" value={query} onChange={(e) => setquery(e.target.value)}/>
          <input className="submit" type="submit" value="Get List" />
  
        </form>
  
        <div className="app_cities">
          {cities.map((city) => {
            return <CityCard city={city}/>
          })}
        </div>
      </div>
    )
}
