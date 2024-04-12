const { Router } = require("express");
const axios = require('axios');
const { StatusCodes, ReasonPhrases } = require("http-status-codes");
const ApiRouter = Router();

// "/currentday" takes city name as input data and returns the single day current weather and predication
// returns the latitude and longitude based on city name

ApiRouter.get("/currentday", async(req, res) => {
    const cityName = req.query.cityName;

    // Validate cityName
    if (!cityName || typeof cityName !== 'string') {
        return res.status(StatusCodes.BAD_REQUEST).json({ error: 'Invalid city name' });
    }

    const { API_KEY } = process.env;

    //determines the number of forecast entries for a day
    const cnt = 5;

    //api URL
    const apiQuery =  `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${API_KEY}&cnt=${cnt}&units=metric`;

    try{
        const response = await axios.get(apiQuery);
        //extracting the relevant information from response

        const { city, coord, sunrise, sunset } = response.data;
        const sunriseResponse = response.data.city.sunrise;
        const sunsetResponse = response.data.city.sunset;

        //convert the sunrise and sunset to human readable format
        const sunriseConvert = new Date(sunriseResponse * 1000).toLocaleTimeString();
        const sunsetConvert = new Date(sunsetResponse * 1000).toLocaleTimeString();

        const forecastsForDay = response.data.list.map( item => ( {
            date: item.dt_txt.split(' ')[0],
            time: item.dt_txt.split(' ')[1],
            temperature: item.main.temp,
            min_temperature:item.main.temp_min,
            max_temperature:item.main.temp_max,
            main_description: item.weather[0].main,
            description: item.weather[0].description,
            windSpeed: item.wind.speed,
            humidity: item.main.humidity
        }))

      
        console.log("Location:", city );
        console.log("Sunrise:", sunriseConvert);
        console.log("Sunset:", sunsetConvert);

        forecastsForDay.forEach((forecast, index ) => {
            console.log("TODAY'S FORECAST", index + 1);
            console.log("Today's date:", forecast.date);
            console.log("Today's time:", forecast.time);
            console.log("Today's temperature:", forecast.temperature);
            console.log("Today's minimum temperature:", forecast.min_temperature);
            console.log("Today's maximum temperature:", forecast.max_temperature);
            console.log("Today's main_description:", forecast.main_description);
            console.log("Today's description:", forecast.description);
            console.log("Today's wind Speed:", forecast.windSpeed);
            console.log("Today's humidity:", forecast.humidity);
        })
        res.status(StatusCodes.OK).json({city, coord, sunrise, sunset, forecast: response.data });

    }catch(e){
        console.log("error occured during fetching weather", e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Error fetching data");
    }
  });

  //  "/upcomingdays" takes the lat and lon from "/currentday" 
  //  using the retrieved info., "/upcomingdays" retrieves the weather for the next 7 days 
  ApiRouter.get("/upcomingdays", async(req, res) => {

    const { latitude, longitude } = req.query;

    const apiQuery = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min`;

    try {
        const response = await axios.get(apiQuery);
        
        const dailyData = response.data.daily;

        dailyData.time.forEach((date, index) => {
            const maxTemperature = dailyData.temperature_2m_max[index];
            const minTemperature = dailyData.temperature_2m_min[index];

            console.log("UPCOMING FORECAST", index + 1);
            console.log("Date:", date);
            console.log("Minimum Temperature:", minTemperature + "°C");
            console.log("Maximum Temperature:", maxTemperature + "°C");
        });

        res.status(StatusCodes.OK).json(response.data);
    } catch (e) {
        console.log("error occurred during fetching upcoming days weather", e);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).send("Error fetching upcoming days data");
    }

  })

module.exports = { ApiRouter };
