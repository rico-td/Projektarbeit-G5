// export default function convertTimeToLocaleTime(timeString, timezoneId) {

//     // Erstelle ein Moment-Objekt mit der Zeit in der ursprünglichen Zeitzone
//   const timeInOriginalTimezone = moment.tz(timeString, timezoneId);

//   // Konvertiere die Zeit in die lokale Zeitzone
//   const timeInLocalTimezone = timeInOriginalTimezone.clone().local();

//   // Gib die umgerechnete Zeit zurück
//   return timeInLocalTimezone;
// }

// // Verwende die Funktion, um die Zeit für Sonnenaufgang und Sonnenuntergang in der lokalen Zeitzone zu erhalten
// const localSunriseTime = convertTimeToLocaleTime(sunrise, timezone);
// const localSunsetTime = convertTimeToLocaleTime(sunset, timezone);

// // Verwende die umgerechneten Zeiten für die Anzeige
// const localSunriseTimeString = localSunriseTime.format("HH:mm");
// const localSunsetTimeString = localSunsetTime.format("HH:mm");
