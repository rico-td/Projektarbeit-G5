// tools
import { useState, useEffect } from "react";

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
} from "../api/weatherQueries.js";

// --------------------------------------------------------------------

const Home = () => {
  // states
  const [city, setCity] = useState("München");
  const [DataHourly, setDataHourly] = useState(null);
  const [DataDaily, setDataDaily] = useState(null);
  const [DataTime, setDataTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [lat, setLat] = useState("48.1374");
  const [lon, setLon] = useState("11.5755");

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
      console.log("getting data from: 1. API call", DataHourly);
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
      console.log("getting data from: 2. API call", DataDaily);
    }
  }

  async function GetLocalTime(lat, lon) {
    try {
      const jsonTime = await fetchLocalTime(lat, lon);
      setDataTime(jsonTime);
      // console.log(DataTime);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
      console.log("getting data from: 3. API call", DataTime);
    }
  }

  // fetching data
  useEffect(() => {
    setIsLoading(true);
    GetHourlyForecast(city);
  }, [city]);

  useEffect(() => {
    setIsLoading(true);
    GetDailyyForecast(lat, lon);
    GetLocalTime(lat, lon);
  }, [lat, lon]);

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
    setCity(city);
    console.log(lat);
    console.log(lon);
  };

  // rendering
  return (
    <div className="flex flex-col items-center justify-center px-[20px] w-[100vw] h-[100vh]">
      <div className="flex flex-col justify-center items-center">
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

        <div className="flex justify-center items-center">
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
