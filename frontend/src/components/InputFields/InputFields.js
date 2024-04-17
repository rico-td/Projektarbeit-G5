import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";

function InputFull() {
  const [city, setCity] = useState("");

  return (
    <div className="flex justify-center items-center">
      <input
        className="text-xl font-light p-1.5 shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-3xl text-center align-middle"
        type="search"
        placeholder="search for city..."
      />
      <div className="flex size-25">
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"
        />

        <button
          name="metric"
          className="text-white cursor-pointer mx-1 text-l hover:scale-125"
        >
          °C
        </button>
        <p className="text-white cursor-default"> |</p>
        <button
          name="imperial"
          className="text-white cursor-pointer mx-1 text-l hover:scale-125"
        >
          °F
        </button>
      </div>
    </div>
  );
}

export default InputFull;
