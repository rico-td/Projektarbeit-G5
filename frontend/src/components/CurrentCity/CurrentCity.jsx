import React from 'react';
import { UilLocationPoint } from '@iconscout/react-unicons';
import style from "./CurrentCity.module.css"

function CurrentCity() {

  return (
    <div>
        <div className={style.currentCity}>
            <UilLocationPoint style={{ gridArea: "icon"}} size="25" color="#000000" />
            <h2 className={style.lettersCurrentCity}>
              current city
            </h2>
        
        </div>
        <div className={style.date}>
            <h3>Sunday, Aug 28th</h3>
    </div>
    </div>
  )
}

export default CurrentCity;


// replace the current city with a variable state 
// replace the date with a variable state