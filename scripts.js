google.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['In Billions', 'Consumer spending on Games'],
        ['Accessories', 1.93],
        ['Hardware', 5.08],
        ['Content', 15.4],
    ]);

    var options = {
        title: 'Total Consumer Spending on Games 2014'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}