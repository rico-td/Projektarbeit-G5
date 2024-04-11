import React from 'react'
import { UilSun, UilCloud } from '@iconscout/react-unicons';
import style from "./QuickStats.module.css"
import { useState, useEffect } from 'react';

function QuickStats() {

  return (

    <div className={style.quickStats}>
    
      <h2 className={style.containerCurrentTemp}>
        28° 
        {/* replace with a useState */}
      </h2>

      <div>
        <div className={style.containerIcon}>
          <UilSun style={{ gridArea: "icon"}} size="40" color="#000000" />
          <h3>sunny</h3>
          {/* replace with a useState */}
        </div>
    
        <div className={style.containerHumidityAndWind}>
          <div className={style.containerHumidity}>
            <UilSun style={{ gridArea: "icon"}} size="20" color="#000000" />
            <h4>62<span>%</span></h4>
            {/* replace with a useState */}
          </div>
          <div className={style.containerWind}>
            <UilSun style={{ gridArea: "icon"}} size="20" color="#000000" />
            <h4>high</h4>
            {/* replace with a useState */}
          </div>
        </div>

      </div>
    </div>
  )
}

export default QuickStats