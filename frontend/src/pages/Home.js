// tools
import { useState, useEffect } from "react";

// style
import style from "./Home.module.css";

// image
import bgImg from "../assets/img/bg.jpg";

// components
import InputFields from "../components/InputFields/InputFields.js";
import CurrentLocationAndTime from "../components/CurrentLocationAndTime/CurrentLocationAndTime.jsx";
import DailyForecast from "../components/Forecast/DailyForecast/DailyForecast.jsx";

// fetching data
import { fetchCurrentDay } from "../api/queries.js";

// --------------------------------------------------------------------

function Home() {
  const [city, setCity] = useState("Berlin");
  const [forecastData, setForecastData] = useState(null);
  const [latitude, setLatitude] = useState("52.5244");
  const [longitude, setLongitude] = useState("13.4105");
  const [isLoading, setIsLoading] = useState(false);

  // fetching the data for current day
  async function fetchForecastHourly() {
    setIsLoading(true);
    try {
      const jsonResponse = await fetchCurrentDay(city);

      setForecastData(jsonResponse);
      setLatitude(jsonResponse.latitudeCoordinateResponse);
      setLongitude(jsonResponse.longitudeCoordinateResponse);
    } catch (e) {
      console.log("Error", e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // Führe fetchCityAndTime nur aus, wenn city nicht leer ist
    if (city) {
      fetchForecastHourly(city);
    }
  }, [city]);

  useEffect(() => {
    // Überprüfe, ob die Daten geladen sind, bevor sie ausgegeben werden
    if (!isLoading) {
      console.log("DATA CURRENT DAY FROM Home.js:", forecastData);
      console.log("LATITUDE FROM Home.js:", latitude);
      console.log("LONGITUDE FROM Home.js:", longitude);
    }
  }, [isLoading, forecastData, latitude, longitude]);

  const handleSearchChange = async (cityName) => {
    setCity(cityName);
  };

  // to update just the img in the component and not the whole component, more efficient
  const [bg] = useState(bgImg);

  return (
    <div
      className="flex flex-col items-center px-[20px] mx-auto w-[100vw] h-[100vh]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <InputFields onSearchChange={handleSearchChange} />
      {forecastData && !isLoading && (
        <CurrentLocationAndTime
          cityName={forecastData?.cityNameResponse}
          localTime={forecastData?.cityNameResponse}
        />
      )}
      <DailyForecast
        data={forecastData?.forecasts}
        sunrise={forecastData?.sunrise}
        sunset={forecastData?.sunset}
      />
    </div>
  );
}

export default Home;
