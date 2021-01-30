d3.json("/bubble-data", function(response) {

  console.log(response);

  var labels = [];
  var parents = [];
  var values = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i];

    if (location) {
      labels.push(location.operator);
      parents.push(location.accidents);
      values.push(location.fatalities)
    }
    
  }

  console.log(labels);
  console.log(parents);
  console.log(values);
  
  var trace1 = {
    x: labels,
    y: values,
    mode: 'markers',
    marker: {
      size: values / 100
    }
  };
  
  var data = [trace1];
  
  var layout = {
    title: 'Hundred Worst Accidents by Operator',
    showlegend: false,
    height: 500,
    width: 1500
  };
  
  Plotly.newPlot('myDiv', data, layout);
  
});