// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 4
});

// Add a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
var marker = L.marker([45.52, -122.67], {
  draggable: true,
  title: "My First Marker"
}).addTo(myMap);

// Binding a pop-up to our marker
marker.bindPopup("Hello There!");


// d3.csv("aviation_and_coordinates.csv").forEach((tvData)=> {
//   var state = tvData.map( data => data.State);
//   console.log("State: " + state);
  
//   data.Latitude = +data.Latitude;
//   data.Longitude = +data.Longitude;
//   console.log("Latitude: " + data.Latitude);
//   console.log("Longitude" + data.Longitude);
//   L.marker([data.Latitude, data.Longitude]).addTo(myMap);
// });


// d3.csv("aviation_and_coordinates.csv").then(function(tvData){
//   var state = tvData.map( data => data.State);
//   console.log("State: " + state);
//   tvData.forEach(function(data) {
//     data.Latitude = +data.Latitude;
//     data.Longitude = +data.Longitude;
//     console.log("Latitude: " + data.Latitude);
//     console.log("Longitude" + data.Longitude);
//     L.marker([data.Latitude, data.Longitude])
//       .bindPopup("<h1>" + state[i] + "</h1> <hr> <h3>Population " + city.population + "</h3>")
//       .addTo(myMap);
//   })
// });





// for (var i = 0; i < students.length; i++) {
//   printName(students[i]);
// }
var statesList = []
var latitudeList= []
var longitudeList= []

var states = d3.csv("aviation_and_coordinates.csv").then(function(tvData){
  for (var i = 0; i < tvData.length; i++) {
    var state = tvData.map( data => data.State);
    console.log(state[i]);
    statesList.push(state[i]);
  }
});

console.log(statesList);

var latitudes = d3.csv("aviation_and_coordinates.csv").then(function(tvData){
  for (var i = 0; i < tvData.length; i++) {
    var latitude = tvData.map( data => data.latitude);
    console.log(latitude[i]);
    latitudeList.push(latitude[i]);
  }
});

// var Longitude = d3.csv("aviation_and_coordinates.csv").then(function(tvData){
//   for (var i = 0; i < tvData.length; i++) {
//     var Longitude = tvData.map( data => data.Longitude);
//     console.log("Longitude: " + Longitude);
//   }
// });

// Create a new marker
// Pass in some initial options, and then add it to the map using the addTo method
// var marker = L.marker([45.52, -122.67], {
//   draggable: true,
//   title: "My First Marker"
// }).addTo(myMap);

// // Binding a pop-up to our marker
// marker.bindPopup("Hello There!");