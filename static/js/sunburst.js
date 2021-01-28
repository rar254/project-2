// Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/coffee-flavors.csv', function(err, rows){
//   function unpack(rows, key) {
//   return rows.map(function(row) { return row[key]; });
// }

// var data = [
//     {
//       type: "sunburst",
//       maxdepth: 3,
//       ids: unpack(rows, 'ids'),
//       labels: unpack(rows, 'labels'),
//       parents:unpack(rows, 'parents')
//     }
//   ];

// var layout = {
//   margin: {l: 0, r: 0, b: 0, t:0},
//   sunburstcolorway:[
//     "#636efa","#EF553B","#00cc96","#ab63fa","#19d3f3",
//     "#e763fa", "#FECB52","#FFA15A","#FF6692","#B6E880"
//   ],
//   extendsunburstcolorway: true
// };


// Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true});
// })


d3.json("/json-data", function(response) {

  console.log(response);

  var labels = [];
  var parents = [];
  var values = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i];

    if (location) {
      labels.push(location.country);
      parents.push(location.number);
      values.push(location.fatalities)
    }
    
  }

  console.log(labels);
  console.log(parents);
  console.log(values);

  var data = [
  {
    "type": "sunburst",
    "labels": labels,
    "parents": parents,
    "values":  values,
    "leaf": {"opacity": 0.4},
    "marker": {"line": {"width": 2}},
    "branchvalues": 'total'
  }];
  
  var layout = {
    "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
  };
  
  
  Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true})
  
  myPlot = document.getElementById("myDiv");

});

// var data = [{
//   type: "sunburst",
//   ids: labels,
//   labels: parents,
//   parents: values,
//   outsidetextfont: {size: 20, color: "#377eb8"},
//   // leaf: {opacity: 0.4},
//   marker: {line: {width: 2}},
// }];

// var layout = {
//   margin: {l: 0, r: 0, b: 0, t:0},
//   sunburstcolorway:["#636efa","#ef553b","#00cc96"],
// };


// Plotly.newPlot('myDiv', data, layout);



// var data = [{
//   type: "sunburst",
//   ids: labels,
//   labels: parents,
//   parents: values,
//   outsidetextfont: {size: 20, color: "#377eb8"},
//   // leaf: {opacity: 0.4},
//   marker: {line: {width: 2}},
// }];

// var layout = {
//   margin: {l: 0, r: 0, b: 0, t:0},
//   sunburstcolorway:["#636efa","#ef553b","#00cc96"],
// };


// Plotly.newPlot('myDiv', data, layout);




// var data = [
//   {
//     "type": "sunburst",
//     "labels": ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
//     "parents": ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
//     "values":  [65, 14, 12, 10, 2, 6, 6, 4, 4],
//     "leaf": {"opacity": 0.4},
//     "marker": {"line": {"width": 2}},
//     "branchvalues": 'total'
//   }];
  
//   var layout = {
//     "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
//   };
  
  
//   Plotly.newPlot('myDiv', data, layout, {showSendToCloud: true})
  
//   myPlot = document.getElementById("myDiv");