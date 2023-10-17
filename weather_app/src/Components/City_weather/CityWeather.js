import "./CityWeather.css";

const City_weather = (props) => {
  return (
    <div className="city-weather">
      <div className="top">
        <div>
          <p className="city">Balgrade</p>
          <p className="description">Sunny</p>
        </div>

        <img
          alt="sunny"
          className="weather-icon"
          src="weather_app\src\Components\City_weather\sunny.png"
        />
      </div>

      <div className="bottom">
        <p className="temp">18°C</p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22°C</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>

          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default City_weather;
