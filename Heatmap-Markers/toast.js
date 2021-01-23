var container = document.getElementById('chart-area');
var data = {
    category: ["Red", "Blue", "Green"], series: [8, 9, 3]
};
var options = {
    chart: {width: 700, height: 400}
};


chart.barChart(container, data, options);


var rawData = {
    categories: ['cate1', 'cate2', 'cate3'],
    series: [
        {
            name: 'Legend1',
            data: [20, 30, 50]
        },
        {
            name: 'Legend2',
            data: [40, 40, 60]
        },
        {
            name: 'Legend3',
            data: [60, 50, 10]
        },
        {
            name: 'Legend4',
            data: [80, 10, 70]
        }
    ]
};



var rawData = {
    categories: ['cate1', 'cate2', 'cate3'],
    series: [
        {
            name: 'Legend1',
            data: [[10, 20], [20, 30], [40, 60]]
        },
        //...
    ]
};




// bar chart
tui.chart.barChart(container, data);

// column chart
// tui.chart.columnChart(container, data);