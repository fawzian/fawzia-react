import './App.css';
import Axios from "axios"
import { useState } from 'react';
import CityCard from './CityCard';

function App() {

  const [query, setquery] = useState("");
  const [cities, setcities] = useState([]);


  var url = `https://docs.openaq.org/v2/cities?limit=${query}&page=1&offset=0&sort=asc&country_id=CA&order_by=city`
  
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
      <h1 onClick={getCities}>USA AIR QUALITY</h1>
      <form className="form">
        <input type="text" className="input" placeholder="how many cities" value={query} onChange={(e) => setquery(e.target.value)}/>
        <input className="submit" type="submit" value="Get List" />
      </form>

      <div>
        {cities.map((city) => {
          return <CityCard city={city}/>
        })}
      </div>
    </div>
  );
}

export default App;
