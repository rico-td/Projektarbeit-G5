// tools
import { useState, useEffect } from "react";

// style
import style from "./Home.module.css";

// image
import bgImage from "../assets/img/bg2.jpg";

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
  const [isLoading, setIsLoading] = useState(false);

  // fetching the data for current day
  async function fetchCityAndTime() {
    setIsLoading(true);
    try {
      const jsonResponse = await fetchCurrentDay(city);
      console.log("RECEIVED FROM Home.js:", jsonResponse);

      setForecastData(jsonResponse);
    } catch (e) {
      console.log("Error", e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // Führe fetchCityAndTime nur aus, wenn city nicht leer ist
    if (city) {
      fetchCityAndTime(city);
    }
  }, [city]);

  useEffect(() => {
    // Überprüfe, ob die Daten geladen sind, bevor sie ausgegeben werden
    if (!isLoading) {
      console.log("ForecastData:", forecastData);
    }
  }, [isLoading, forecastData]);

  const handleSearchChange = async (cityName) => {
    setCity(cityName);
  };

  // to update just the img in the component and not the whole component, more efficient
  const [bg] = useState(bgImage);

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
      <DailyForecast data={forecastData?.forecasts} />
    </div>
  );
}

export default Home;
