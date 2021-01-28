d3.json("/api_data", function (myData) { 
    console.log(myData); 
      
    var myXData = [];
    var myYData = [];
  
    myData.forEach(accidents => {
        myXData.push(accidents.year);
        myYData.push(accidents.total_accidents);
    });
  
    var data = [
        {
          x: myXData,
          y: myYData,
          marker:{
            color: myXData,
          },
          type: 'line'
        }
      ];
      
    Plotly.newPlot('my-chart', data);
  
  }); 