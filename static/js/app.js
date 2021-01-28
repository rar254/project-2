d3.json("/api_data", function (myData) { 
    console.log(myData); 
      
    var mynameData = [];
    var myseriesData = [];

    myData.forEach(infos => {
      mynameData.push(infos.year);
      myseriesData.push(infos.total_accidents);
  });

//The chart

const data = {
  categories: ['Aviation Accidents'],
  series: [
    {
      name: mynameData,
      data: myseriesData,
    },
  ]
}

const options = {
  series: {
    clockwise: false
  }
};


