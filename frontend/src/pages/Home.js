// tools
import { useState, useEffect } from "react";

// components
import InputFields from "../components/InputFields/InputFields.js";
import CurrentLocationAndTime from "../components/CurrentLocationAndTime/CurrentLocationAndTime.jsx";
import HourlyForecast from "../components/Forecast/HourlyForecast/HourlyForecast.jsx";
import DailyForecast from "../components/Forecast/DailyForecast/DailyForecast.jsx";

// fetching data
import { fetchCurrentDay, fetchUpcomingDays } from "../api/queries.js";

// --------------------------------------------------------------------

const Home = () => {
  // states
  const [city, setCity] = useState("Paris");
  const [DataHourly, setDataHourly] = useState(null);
  const [DataDaily, setDataDaily] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCelsius, setIsCelsius] = useState(true);
  const [lat, setLat] = useState("48.8534");
  const [lon, setLon] = useState("2.3488");

  // fetching data
  useEffect(() => {
    async function fetchForecastHourly() {
      try {
        const jsonHourly = await fetchCurrentDay(city);
        const latitude = jsonHourly.latitudeCoordinateResponse;
        const longitude = jsonHourly.longitudeCoordinateResponse;
        setLat(latitude);
        setLon(longitude);
        setDataHourly(jsonHourly);

        await fetchForecastDaily(lat, lon);
      } catch (e) {
        console.log("Error");
      } finally {
        setIsLoading(false);
      }
    }

    async function fetchForecastDaily(lat, lon) {
      try {
        const jsonDaily = await fetchUpcomingDays(lat, lon);
        setDataDaily(jsonDaily);
      } catch (e) {
        console.log("fetching Error in Home.js:");
      } finally {
        setIsLoading(false);
      }
    }

    if (city) {
      fetchForecastHourly();
      fetchForecastDaily();
    }
  }, [city]);

  // handlers
  const handleSearchChange = async (cityName) => {
    setCity(cityName);
  };

  const handleUnitsChange = (newValue) => {
    setIsCelsius(newValue);
  };

  // rendering
  return (
    <div className="flex flex-col items-center px-[20px] mx-auto w-[100vw] h-[100vh]">
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
};

export default Home;
