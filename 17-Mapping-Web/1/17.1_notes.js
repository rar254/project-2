// Leaflet requires a reference
// <!-- Leaflet CSS -->
//   <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
//     integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
//     crossorigin="" />

//   <!-- Our CSS -->
//   <link rel="stylesheet" type="text/css" href="style.css">
// </head>

// <body>
//   <!-- The div where we will inject our map -->
//   <div id="map"></div>

//   <!-- Leaflet JS -->
//   <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
//     integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
//     crossorigin=""></script>
//   <!-- API key -->
//   <script type="text/javascript" src="config.js"></script>
//   <!-- JS -->
//   <script type="text/javascript" src="logic.js"></script>
// </body>

//The JS to display the actual map
// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
  });
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  






//We start with the same boiler plate HTML file and what we're changing is the logic.js file
// Create our initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
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

  








//Adding multiple Markers on the US map
// Create a map object
var myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
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
  
  // City markers
  
  // Add code to create a marker for each city below and add it to the map
  var cities = [{
    location: [40.7128, -74.0059],
    name: "New York",
    population: "8,550,405"
  },
  {
    location: [41.8781, -87.6298],
    name: "Chicago",
    population: "2,720,546"
  },
  {
    location: [29.7604, -95.3698],
    name: "Houston",
    population: "2,296,224"
  },
  {
    location: [34.0522, -118.2437],
    name: "Los Angeles",
    population: "3,971,883"
  },
  {
    location: [41.2524, -95.9980],
    name: "Omaha",
    population: "446,599"
  }
  ];
  
  // newyork;
  // chicago;
  // houston;
  // la;
  // omaha;
  // Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
    var city = cities[i];
    L.marker(city.location)
      .bindPopup("<h1>" + city.name + "</h1> <hr> <h3>Population " + city.population + "</h3>")
      .addTo(myMap);
  }









//Adding different shapes/figures to our MAP
// Create an initial map object
// Set the longitude, latitude, and the starting zoom level
var myMap = L.map("map").setView([45.52, -122.67], 13);

// Add a tile layer (the background map image) to our map
// Use the addTo method to add objects to our map
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

// Create a new marker
L.marker([45.52, -122.67]).addTo(myMap);

// Create a circle and pass in some initial options
L.circle([45.52, -122.69], {
  color: "green",
  fillColor: "green",
  fillOpacity: 0.75,
  radius: 500
}).addTo(myMap);

// Create a Polygon and pass in some initial options = TRIANGLE
L.polygon([
  [45.54, -122.68],
  [45.55, -122.68],
  [45.55, -122.66]
], {
  color: "yellow",
  fillColor: "yellow",
  fillOpacity: 0.75
}).addTo(myMap);

// Coordinates for each point to be used in the polyline
var line = [
  [45.51, -122.68],
  [45.50, -122.60],
  [45.48, -122.70],
  [45.54, -122.75]
];

// Create a polyline using the line coordinates and pass in some initial options
L.polyline(line, {
  color: "red"
}).addTo(myMap);

// Create a rectangle and pass in some initial options
//Only need top left marker/spot and bottom right to make the shape
L.rectangle([
  [45.55, -122.64],
  [45.54, -122.61]
], {
  color: "black",
  weight: 3,
  stroke: true
}).addTo(myMap);








//Adding circle objects to our map scaled by population
// Each city object contains the city's name, location and population
var cities = [
    {
      name: "New York",
      location: [40.7128, -74.0059],
      population: 8550405
    },
    {
      name: "Chicago",
      location: [41.8781, -87.6298],
      population: 2720546
    },
    {
      name: "Houston",
      location: [29.7604, -95.3698],
      population: 2296224
    },
    {
      name: "Los Angeles",
      location: [34.0522, -118.2437],
      population: 3971883
    },
    {
      name: "Omaha",
      location: [41.2524, -95.9980],
      population: 446599
    }
  ];

// Define a markerSize function that will give each city a different radius based on its population
//Will scale our population value
function markerSize(population) {
    return population / 40;
  }

cities.forEach(function(city){
    L.circle(city.location, {
        fillOpacity: 0.75,
        color: "white",
        fillColor: "purple",
        radius: markerSize(city.population)
    }).bindPopup(
        `<h1> ${city.name}</h1><hr>` + 
        `<h3>Population: ${city.population}</h3>`
    ).addTo(myMap);
})

//Can ALSO USE THIS FOR LOOP FORMAT!!!!
// Loop through the cities array and create one marker for each city object
for (var i = 0; i < cities.length; i++) {
    L.circle(cities[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: "purple",
      // Setting our circle's radius equal to the output of our markerSize function
      // This will make our marker's size proportionate to its population
      radius: markerSize(cities[i].population)
    }).bindPopup("<h1>" + cities[i].name + "</h1> <hr> <h3>Population: " + cities[i].population + "</h3>").addTo(myMap);
  }








//Next EXAMPLE:
// Create a map object
var myMap = L.map("map", {
    center: [15.5994, -28.6731],
    zoom: 3 //this is to get the entire world
  });
  
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);
  
  // Country data
  var countries = [
    {
      name: "Brazil",
      location: [-14.2350, -51.9253],
      points: 227
    },
    {
      name: "Germany",
      location: [51.1657, 10.4515],
      points: 218
    },
    {
      name: "Italy",
      location: [41.8719, 12.5675],
      points: 156
    },
    {
      name: "Argentina",
      location: [-38.4161, -63.6167],
      points: 140
    },
    {
      name: "Spain",
      location: [40.4637, -3.7492],
      points: 99
    },
    {
      name: "England",
      location: [52.355, 1.1743],
      points: 98
    },
    {
      name: "France",
      location: [46.2276, 2.2137],
      points: 96
    },
    {
      name: "Netherlands",
      location: [52.1326, 5.2913],
      points: 93
    },
    {
      name: "Uruguay",
      location: [-32.4228, -55.7658],
      points: 72
    },
    {
      name: "Sweden",
      location: [60.1282, 18.6435],
      points: 61
    }
  ];
  
  
  // Loop through the cities array and create one marker for each city object
  for (var i = 0; i < countries.length; i++) {
  
    // Conditionals for countries points
    var color = "";
    if (countries[i].points > 200) {
      color = "yellow";
    }
    else if (countries[i].points > 100) {
      color = "blue";
    }
    else if (countries[i].points > 90) {
      color = "green";
    }
    else {
      color = "red";
    }
  
    // Add circles to map
    L.circle(countries[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: color,
      // Adjust radius
      radius: countries[i].points * 1500
    }).bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);
  }









  //How to work and toggle LAYERS:
  // An array of cities and their locations
var cities = [
    {
      name: "Paris",
      location: [48.8566, 2.3522]
    },
    {
      name: "Lyon",
      location: [45.7640, 4.8357]
    },
    {
      name: "Cannes",
      location: [43.5528, 7.0174]
    },
    {
      name: "Nantes",
      location: [47.2184, -1.5536]
    }
  ];
  
  // An array which will be used to store created cityMarkers
  //defines the layer group, create the array and a loop that goes through each city that'll add a marker
  var cityMarkers = [];
  
  for (var i = 0; i < cities.length; i++) {
    // loop through the cities array, create a new marker, push it to the cityMarkers array
    //adding marker to the array
    cityMarkers.push(
      L.marker(cities[i].location).bindPopup("<h1>" + cities[i].name + "</h1>")
    );
  }
  
  // Add all the cityMarkers to a new layer group.
  // Now we can handle them as one group instead of referencing each individually
  //we add all of our markers by adding them to the layer
  var cityLayer = L.layerGroup(cityMarkers);
  
  // Define variables for our tile layers
  var light = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  });
  
  var dark = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "dark-v10",
    accessToken: API_KEY
  });
  
  // Only one base layer can be shown at a time
  //describes our text with each one of those base layers
  var baseMaps = {
    Light: light,
    Dark: dark
  };
  
  // Overlays that may be toggled on or off
  var overlayMaps = {
    Cities: cityLayer
  };
  
  // Create map object and set default layers
  var myMap = L.map("map", {
    center: [46.2276, 2.2137],
    zoom: 6,
    layers: [light, cityLayer]
  });
  
  // Pass our map layers into our layer control
  // Add the layer control to the map
  L.control.layers(baseMaps, overlayMaps).addTo(myMap);

  






//Layer Example:
