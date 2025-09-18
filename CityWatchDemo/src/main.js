import L from 'leaflet';
import 'leaflet/dist/leaflet.css';



const map = L.map('map').setView([51.505, -0.09], 13);

//ENV FILE KEYS
const CITY_NAME_APY_KEY = import.meta.env.VITE_CITY_NAME_APY_KEY;

// DOM ELEMENTS 
const Submit = document.getElementById("main-button");


async function getCityCoordinates(cityName) {
  const data = await fetch(`https://us1.locationiq.com/v1/search.php?key=${CITY_NAME_APY_KEY}&q=${cityName}&format=json`);
  const response = await data.json()
  return response
}

Submit.addEventListener("click", async (event) => {
  event.preventDefault()
  const CityName = document.getElementById("cityname").value
  const [CityCoordinates] = await getCityCoordinates(CityName)
  console.log(CityCoordinates)
  L.marker([ CityCoordinates.lat , CityCoordinates.lon])
    .addTo(map)
    .bindPopup('Hello')
    .openPopup();
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);



L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup('Hello')
  .openPopup();