var myMap = L.map("map", {
  center: [39.8283, -98.5795],
  zoom: 4
});

L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);

var url = "https://data.sfgov.org/resource/cuks-n6tp.json?$limit=10000";

d3.json("/json-data", function(response) {

  console.log(response);

  var heatArray = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i];

    if (location) {
      heatArray.push([location.Latitude, location.Longitude]);
    }
  
    L.circle(heatArray[i], {
      fillOpacity: 0.50,
      color: "black",
      fillColor: "red",
      // Adjust radius
      radius: location.accidents * 1500
    }).bindPopup("<h1>" + location.country+ " #" + location.number + "</h1> <hr> <h3>Accidents: " + location.accidents + "</h3>" + "<hr> <h3>Fatalities: " + location.fatalities + "</h3>").addTo(myMap);
    
  }

  console.log(heatArray);
  console.log(location.accidents);

  // var heat = L.heatLayer(heatArray, {
  //   radius: 50,
  //   blur: 350
  // }).addTo(myMap);

});
