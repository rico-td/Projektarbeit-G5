import React from 'react'
import { UilSun, UilRainy } from '@iconscout/react-unicons';
import style from "./QuickStats.module.css"

function QuickStats() {
  return (

    // temperatur
    // Uint
    // icon for current weather (sun, clund, rain, snow....)

    <div className={style.quickStats}>
    
      <h1 style={{fontSize: "120px", fontWeight: "100"}} >
        28°C
      </h1>

      <div className="wrapper">
        <div className={style.wrapperCurrentWeatherIcon}>
          <UilSun style={{ gridArea: "icon"}} size="45" color="#000000" />
          <h3>sunny</h3>
        </div>
    
        <div className={style.wrapperHumidityAndWind}>
          <UilSun style={{ gridArea: "icon"}} size="20" color="#000000" />
          <h4>62%</h4>
          <UilSun style={{ gridArea: "icon"}} size="20" color="#000000" />
          <h4>High%</h4>
        </div>

      </div>
    </div>
  )
}

export default QuickStats