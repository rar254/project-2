d3.json("/json-data", function (myData) { 
    console.log(myData); 
      
    var myXData = [];
    var myYData = [];
  
    myData.forEach(worst_geo => {
        myXData.push(worst_geo.country);
        myYData.push(worst_geo.accidents);
    });
  
    var data = [
        {
          x: myXData,
          y: myYData,
          marker:{
            color: myXData,
          },
          type: 'bar'
        }
      ];
      
    Plotly.newPlot('my-chart', data);
  
  }); 