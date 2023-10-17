import './App.css';
import Search from './Components/Search/search';
import CityWeather from './Components/City_weather/CityWeather';

function App() {

  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange} />
      <CityWeather />
    </div>
  );
}

export default App;
