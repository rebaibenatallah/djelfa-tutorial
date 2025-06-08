
    
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['Task', 'Favorite Type of Movie'],
    ['Scifi',     4],
    ['Drama',      1],
    ['Romance',  6],
    ['Action', 5],
    ['Cpmedy',    4],
  ]);

  var options = {
    title: 'Favorite Type of Movie'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}

// line chrt
google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart_line);

    function drawChart_line() {

      var data = new google.visualization.DataTable();
data.addColumn('string', 'Month'); // Implicit domain label col.
data.addColumn('number', 'Affordable Segment'); // Implicit series 1 data col.
data.addColumn('number', 'Luxury Segment'); // Implicit series 1 data col.
data.addColumn('number', 'Super Luxury Segment'); // Implicit series 1 data col.
data.addRows([
  // ['April',1000],
  // ['May',  1170],
  // ['June',  660],
  // ['July', 1030]
  ['Jan',173,189,185],
  ['Feb',153,189,185],
  ['Mar',195,105,126],
  ['Apr',147,112,134],
  ['May',120,173,196],
  ['Jun',144,109,153],
  ['Jul',148,151,112],
  ['Aug',109,197,133],
  ['Sep',174,174,200],
  ['Oct',130,145,145],
  ['Nov',172,177,167],
  ['Dec',131,161,110],
]);

      var options = {
        chart: {
          title: 'Stacked Line Chart',
          // subtitle: 'in millions of dollars (USD)'
        },
        // width: 900,
        height: 500
      };

      var line_chart = new google.charts.Line(document.getElementById('linechart_material'));

      line_chart.draw(data, google.charts.Line.convertOptions(options));
    }

    // column Chart
    google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart_bar);

      function drawChart_bar() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses', 'Profit'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ]);

        var options = {
          chart: {
            title: 'Company Performance',
            subtitle: 'Sales, Expenses, and Profit: 2014-2017',
          }
        };

        var bar_chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        bar_chart.draw(data, google.charts.Bar.convertOptions(options));
      }