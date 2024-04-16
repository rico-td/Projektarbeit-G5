import React from "react";
import { useQuery } from "@tanstack/react-query";
import axiosClient from "./api.js";

function DataCurrentCity() {}

export default DataCurrentCity;

//   return useQuery(["weather", cityName, units], async () => {
//     const response = await axiosClient.get(`?q=${cityName}&units=${units}`);
//     return response.data;
//   });
//
