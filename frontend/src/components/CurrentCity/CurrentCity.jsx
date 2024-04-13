import React from 'react';
import { UilLocationPoint } from '@iconscout/react-unicons';
import { useEffect, useState } from 'react';
import style from "./CurrentCity.module.css"


function CurrentCity() {
  const [currentCity, setCurrentCity] = useState('');
  
  useEffect(() => {

    // Hier müsstest du deine API-Aufrufe machen, um die aktuellen Wetterdaten zu erhalten und daraus die aktuelle Stadt zu extrahieren
    // Angenommen, du hast eine Funktion fetchData, die die Wetterdaten abruft und die Stadt aktualisiert, wenn die Daten empfangen werden
    fetchData().then(city => setCurrentCity(city));
  }, []); // Leeres Array als zweites Argument sorgt dafür, dass der Effekt nur einmal nach dem Rendern ausgeführt wird
    
  return (
    <div>
        <div className={style.currentCity}>
            <UilLocationPoint style={{ gridArea: "icon"}} size="25" color="#000000" />
            <h2 className={style.lettersCurrentCity}>
              {currentCity ? currentCity : 'Loading...'}
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