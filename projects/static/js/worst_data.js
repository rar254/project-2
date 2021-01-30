d3.json("/hundred_worst_accidents", function (myData) { 
    console.log(myData); 
      
    var myXData = [];
    var myYData = [];
  
   myData.forEach(hundred_worst_accidents =>{
            myXData.push(hundred_worst_accidents.fatalities);
            myyData.push(hundred_worst_accidents.date)
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