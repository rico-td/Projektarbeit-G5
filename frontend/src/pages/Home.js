// tools
import { useState, useEffect } from "react";
import axios from "axios";

// components
import InputFields from "../components/InputFields/InputFields.js";
import CurrentLocationAndTime from "../components/CurrentLocationAndTime/CurrentLocationAndTime.jsx";
import HourlyForecast from "../components/Forecast/HourlyForecast/HourlyForecast.jsx";
import DailyForecast from "../components/Forecast/DailyForecast/DailyForecast.jsx";

// fetching data
import {
  fetchCurrentDay,
  fetchUpcomingDays,
  fetchLocalTime,
  currentWeatherByLatAndLon,
} from "../api/queries.js";

// --------------------------------------------------------------------

const Home = () => {
  // states
  const [city, setCity] = useState("Paris");
  const [DataHourly, setDataHourly] = useState(null);
  const [DataDaily, setDataDaily] = useState(null);
  const [DataTime, setDataTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [lat, setLat] = useState("48.8534");
  const [lon, setLon] = useState("2.3488");

  // fetching data
  useEffect(() => {
    // if (city.trim() !== "") {
    setIsLoading(true);
    async function GetHourlyForecast(city) {
      try {
        const jsonHourly = await fetchCurrentDay(city);

        setLat(jsonHourly.latitudeCoordinateResponse);
        setLon(jsonHourly.longitudeCoordinateResponse);

        setDataHourly(jsonHourly);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    async function GetDailyyForecast(lat, lon) {
      try {
        const jsonDaily = await fetchUpcomingDays(lat, lon);
        setDataDaily(jsonDaily);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }
    async function GetLocalTime(lat, lon) {
      try {
        const jsonTime = await fetchLocalTime(lat, lon);
        setDataTime(jsonTime);
        console.log("Local time:", DataTime);
      } catch (e) {
        console.log(e);
      } finally {
        setIsLoading(false);
      }
    }

    GetHourlyForecast(city);
    GetDailyyForecast(lat, lon);
    GetLocalTime(lat, lon);
  }, [city, lat, lon]);

  // handlers
  const handleSearchChange = async (cityName) => {
    setCity(cityName);
  };

  const handleUnitsChange = (newValue) => {
    setIsCelsius(newValue);
  };

  const handlePosition = (newLat, newLon) => {
    setLat(newLat);
    setLon(newLon);
  };

  // rendering
  return (
    <div className="flex flex-col items-center justify-center px-[20px] w-[100vw] h-[100vh]">
      <div className="flex flex-col justify-center items-center mt-8 md:mt-16 pt-4 md:pt-8">
        <InputFields
          isCelcius={isCelsius}
          onUnitsChange={handleUnitsChange}
          onSearchChange={handleSearchChange}
          handlePosition={handlePosition}
          setLat={setLat}
          setLon={setLon}
        />

        {DataHourly && !isLoading && (
          <CurrentLocationAndTime
            cityName={DataHourly?.cityNameResponse}
            localTime={DataHourly?.cityNameResponse}
            sunrise={DataHourly?.sunrise}
            sunset={DataHourly?.sunset}
            localDateAndTime={DataTime}
          />
        )}

        <div className="flex justify-center items-center">
          <HourlyForecast
            isCelsius={isCelsius}
            dataHourly={DataHourly?.forecasts}
          />
        </div>

        <div className="flex justify-center items-center ">
          <DailyForecast
            isCelsius={isCelsius}
            dataDaily={DataDaily?.forecasts}
            sunrise={DataDaily?.forecasts}
            sunset={DataDaily?.forecasts}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
