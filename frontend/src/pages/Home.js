// tools
import { useState, useEffect } from "react";

// style
import style from "./Home.module.css";

// image
import bgImg from "../assets/img/bg.jpg";

// components
import InputFields from "../components/InputFields/InputFields.js";
import CurrentLocationAndTime from "../components/CurrentLocationAndTime/CurrentLocationAndTime.jsx";
import HourlyForecast from "../components/Forecast/HourlyForecast/HourlyForecast.jsx";
import DailyForecast from "../components/Forecast/DailyForecast/DailyForecast.jsx";

// fetching data
import { fetchCurrentDay, fetchUpcomingDays } from "../api/queries.js";

// --------------------------------------------------------------------

function Home() {
  const [city, setCity] = useState("Paris");
  const [DataHourly, setDataHourly] = useState(null);
  const [DataDaily, setDataDaily] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);

  // fetching the data for current day
  async function fetchForecastHourly() {
    setIsLoading(true);
    try {
      const jsonHourly = await fetchCurrentDay(city);
      const lat = jsonHourly.latitudeCoordinateResponse;
      const lon = jsonHourly.longitudeCoordinateResponse;
      setDataHourly(jsonHourly);

      await fetchForecastDaily(lat, lon);
    } catch (e) {
      console.log("Error", e);
    } finally {
      setIsLoading(false);
    }
  }

  // fetching data upcoming days
  async function fetchForecastDaily(lat, lon) {
    setIsLoading(true);
    try {
      const jsonDaily = await fetchUpcomingDays(lat, lon);
      setDataDaily(jsonDaily);
    } catch (e) {
      console.log("Error", e);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // Führe fetchForecastHourly nur aus, wenn city nicht leer ist
    if (city) {
      fetchForecastHourly();
    }
  }, [city]);

  const handleSearchChange = async (cityName) => {
    setCity(cityName);
  };

  // to update just the img in the component and not the whole component
  const [bg] = useState(bgImg);

  const handleUnitsChange = (newValue) => {
    setIsCelsius(newValue);
  };

  return (
    <div
      className="flex flex-col items-center px-[20px] mx-auto w-[100vw] h-[100vh]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex-col justify-start">
        <InputFields
          isCelcius={isCelsius}
          onUnitsChange={handleUnitsChange}
          onSearchChange={handleSearchChange}
        />

        {DataHourly && !isLoading && (
          <div className="">
            <CurrentLocationAndTime
              cityName={DataHourly?.cityNameResponse}
              localTime={DataHourly?.cityNameResponse}
              sunrise={DataHourly?.sunrise}
              sunset={DataHourly?.sunset}
            />
          </div>
        )}

        <HourlyForecast
          isCelsius={isCelsius}
          dataHourly={DataHourly?.forecasts}
        />

        <DailyForecast
          isCelsius={isCelsius}
          dataDaily={DataDaily?.forecasts}
          sunrise={DataDaily?.forecasts}
          sunset={DataDaily?.forecasts}
        />
      </div>
    </div>
  );
}

export default Home;
