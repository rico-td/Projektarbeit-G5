import React, { useState } from "react";
import { Link } from "react-router-dom";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { TbMenu2 } from "react-icons/tb";
import { MdOutlineLogin } from "react-icons/md";

const InputFields = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearchChange(inputValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchClick();
    }
  };

  return (
    <div className="flex justify-between p-3 w-[100%] border-b-2 border-white border-opacity-50 py-4">
      <TbMenu2
        size={35}
        className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"
      />

      <div className="flex justify-center items-center">
        <input
          className="text-l font-light p-1.5 shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-3xl text-center align-middle"
          type="search"
          placeholder="search for city..."
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <div className="flex size-25">
          <UilSearch
            size={25}
            className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"
            onClick={handleSearchClick}
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
      <Link to="/Login">
        <MdOutlineLogin
          size={35}
          className="text-white cursor-pointer transition ease-out hover:scale-125 mx-1"
        />
      </Link>
    </div>
  );
};

export default InputFields;
