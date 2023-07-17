mapboxgl.accessToken = 'pk.eyJ1IjoidHJpZ2VvIiwiYSI6ImNsZHZ5YW9tYjAyODAzdXM4bHlwbjhnNm4ifQ.kHTDG7XT7noaK7zzYwHYbA'; // replace this with your access token

// Map
var map = new mapboxgl.Map({
    container: 'map', // id of your map container
    style: 'mapbox://styles/mapbox/streets-v12', // your map style
    center: [-74.50, 40], // starting position
    zoom: 9 // starting zoom
});

// Search bar
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken
  }),
  'top-left' // Position the control at the top left corner
);

// Set the initial pitch and bearing of the map
map.on('load', function() {
  map.setPitch(45); // Set the pitch to 45 degrees
  map.setBearing(0); // Set the bearing to 45 degrees
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// Add geolocate control to the map.
map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true
    }
}));

// Fullscreen
map.addControl(new mapboxgl.FullscreenControl());

// 3D Terrain
map.on('style.load', () => {
    map.addSource('mapbox-dem', {
    'type': 'raster-dem',
    'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
    'tileSize': 512,
    'maxzoom': 14
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });
    });
