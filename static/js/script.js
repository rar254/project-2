let labels1 = ["YES", "YES BUT IN GREEN"];
let data1 = [69, 31];
let colors1 = ['rgba(0, 0, 0, 0.1)'];

var randomColorGenerator = function () { 
    return '#' + (Math.random().toString(16) + '0000000').slice(2, 8); 
};




d3.json("/api_data", function (theData) { 
    console.log(theData); 

    var labelData = [];
    var dataData = [];
    var colors = [];
  
    theData.forEach(infos => {
            labelData.push(infos.year);
            dataData.push(infos.total_accidents);
            colors.push(randomColorGenerator())
        });



    let myChart1 = document.getElementById("myChart").getContext('2d');

    //Where chart is rendered
    let chart1 = new Chart(myChart1, {
        type: 'bar',
        data: {
            labels: labelData,
            datasets: [{
                label: 'Number of Accidents',
                data: dataData,
                backgroundColor: colors,
                borderWidth: 2
            }]
        },
        options: {
            title: {
                text: "Aviation Accidents",
                display: true
            }
        }
    });

});