google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Purchase by gender'],
        ['Men',     59],
        ['Woman', 41],
    ]);

    var options = {
        title: 'Most Frequent Game Purchasers',
        pieHole: 0.6,
        backgroundColor: '#749EC3',
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart2'));

    chart.draw(data, options);
}