import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
// Create the map and set initial view
const map = L.map('map').setView([51.505, -0.09], 13);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors',
}).addTo(map);

// Add a marker
L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup('Hello')
  .openPopup();