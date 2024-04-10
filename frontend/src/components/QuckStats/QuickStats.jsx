import React from 'react'
import { UilSun, UilRainy } from '@iconscout/react-unicons';
import style from "./QuickStats.module.css"

function QuickStats() {
  return (

    // temperatur
    // Uint
    // icon for current weather (sun, clund, rain, snow....)

    <div className={style.quickStats}>
    
      <h2 className={style.currentTemp}>
        28°
      </h2>

      <div>
        <div className={style.wrapperCurrentWeatherIcon}>
          <UilSun style={{ gridArea: "icon"}} size="40" color="#000000" />
          <h3>sunny</h3>
        </div>
    
        <div className={style.wrapperHumidityAndWind}>
          <div className={style.wrapperHumidity}>
            <UilSun style={{ gridArea: "icon"}} size="20" color="#000000" />
            <h4>62%</h4>
          </div>
          <div className={style.wrapperWind}>
            <UilSun style={{ gridArea: "icon"}} size="20" color="#000000" />
            <h4>high</h4>
          </div>
        </div>

      </div>
    </div>
  )
}

export default QuickStats