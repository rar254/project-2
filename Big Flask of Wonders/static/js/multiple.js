d3.json("/json-data", function(response) {

    console.log(response);
  
    var labels = [];
    var parents = [];
    var values = [];
  
    for (var i = 0; i < response.length; i++) {
      var location = response[i];
  
      if (location) {
        labels.push(location.country);
        parents.push(location.accidents);
        values.push(location.fatalities)
      }
      
    }
  
    console.log(labels);
    console.log(parents);
    console.log(values);
    
    var accidents = {
        x: labels,
        y: values,
        type: 'scatter'
    };
    
    var fatalities = {
        x: labels,
        y: parents,
        type: 'bar'
    };
    
    var data = [accidents, fatalities];
    
    Plotly.newPlot('myDiv', data);
});