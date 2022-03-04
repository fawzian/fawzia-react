import './App.css';
import Axios from "axios"

function App() {
  var url = `https://docs.openaq.org/v2/cities?limit=100&page=1&offset=0&sort=asc&country_id=US&order_by=city`
  
  async function getCities(){
    var result = await Axios.get(url);
    console.log(result.data)
  }

  return (
    <div className="App">
<h1 onClick={getCities}>hello world</h1>
    </div>
  );
}

export default App;
