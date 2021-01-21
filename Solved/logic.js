// Create a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4
});

// Add a tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each city's name, location, and population
var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: "8,550,405"}
];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
    .addTo(myMap);
}

d3.csv("aviation_and_coordinates.csv").then(function(tvData){
  var state = tvData.map( data => data.State);
  console.log("State: " + state);
  tvData.forEach(function(data) {
    data.Latitude = +data.Latitude;
    data.Longitude = +data.Longitude;
    console.log("Latitude: " + data.Latitude);
    console.log("Longitude" + data.Longitude);
    L.marker([data.Latitude, data.Longitude])
      .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
      .addTo(myMap);
  })
});