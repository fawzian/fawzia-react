import './App.css';
import Axios from "axios"
import { useState } from 'react';
import CityCard from './CityCard';

function App() {

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
    <div className="app" onSubmit={onSubmit}>
      <h1 onClick={getCities} className="headline">USA AIR QUALITY</h1>
      <h2 className="details"></h2>
      <form className="form">
        <input type="text" className="input" placeholder="how many cities" value={query} onChange={(e) => setquery(e.target.value)}/>
        <input className="submit" type="submit" value="Get List" />

      </form>

      <div className="app_cities">
        {cities.map((city) => {
          return <CityCard city={city}/>
        })}
      </div>
    </div>
  );
}

export default App;
