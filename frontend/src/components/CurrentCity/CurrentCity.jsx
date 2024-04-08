import React from 'react';
import { UilLocationPoint, UilSearch } from '@iconscout/react-unicons';
import style from "./CurrentCity.module.css"

function CurrentCity() {

  return (
    <div>
        <div className={style.currentCity}>
            <UilLocationPoint style={{ gridArea: "icon"}} size="25" color="#000000" />
            <h2 style={{
                    gridArea: "currentCity",
                    textTransform: "uppercase",
                }}
                >current city
            </h2>
        
        </div>
        <div className={style.date}>
            <h3>Sunday, Aug 28th</h3>
    </div>
    </div>
  )
}

export default CurrentCity;