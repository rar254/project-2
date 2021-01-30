d3.json("/json-data-continents", function (myData) { 
    console.log(myData); 
      
    var myXData = [];
    var myYData = [];
  
    for (var i = 0; i < myData.length; i++){
      var xData = myData[i][continent];
      var yData = myData[i].fatalities;
      console.log(xData);
      myXData.push(xData);
      myYData.push(yData);
    };
  
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
  