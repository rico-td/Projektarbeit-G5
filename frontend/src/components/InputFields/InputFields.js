import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

const InputFields = (onSearchChange) => {
  const [city, setCity] = useState("");

  const handleCitySearch = (cityName) => {
    setCity(cityName);
    onSearchChange();
  };
  return (
    <div className="flex justify-center items-center">
      <input
        className="text-l font-light p-1.5 shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-3xl text-center align-middle"
        type="search"
        placeholder="search for city..."
        // value={city}
        // onChange={handleCitySearch}
      />
      <div className="flex size-25">
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"
          // onClick={handleCitySearch}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"
        />

        <button
          name="metric"
          className="text-white cursor-pointer mx-1 text-l hover:scale-125 font-semibold"
        >
          °C
        </button>
        <p className="text-white cursor-default"> |</p>
        <button
          name="imperial"
          className="text-white cursor-pointer mx-1 text-l hover:scale-125 font-semibold"
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default InputFields;

// return fetch(
//   `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
//   geoAPIoptions
// )
//   .then((response) => response.json())

//   .then((response) => {
//     return {
//       options: response.data.map((city) => {
//         return {
//           value: `${city.latitude} ${city.longitude}`,
//           label: `${city.name} ${city.countryCode}`,
//         };
//       }),
//     };
//   })
//   .catch((err) => console.error(err));
// };
