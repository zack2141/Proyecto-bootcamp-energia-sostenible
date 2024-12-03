function redirect_tabla(){
    window.location="Tabla/Tabla.html";
}

function redirect_torta(){
    window.location="Grafico_torta/Grafico_torta.html";
}

function redirect_linea(){
    window.location="Grafico_linea/Grafico_linea.html";
}

function redirect_barra(){
    window.location="Grafico_barra/Grafico_barra.html";
}

function redirect_area(){
    window.location="Grafico_area/Grafico_area.html";
}

// visualizacion de graficos

function graficotorta(){
    google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['',     11],
          ['', 2],
          ['',    7]
        ]);

        var options = {
          title: ''
        };

        var chart = new google.visualization.PieChart(document.getElementById('grafico-torta'));

        chart.draw(data, options);
    }

}

graficotorta()

function graficolinea(){

    google.charts.load('current', {'packages':['line']});
    google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('number', '');
    data.addColumn('number', '');
    data.addColumn('number', '');
    data.addColumn('number', '');

    data.addRows([
      [1,  37.8, 80.8, 41.8],
      [2,  30.9, 69.5, 32.4],
      [3,  25.4,   57, 25.7],
      [4,  11.7, 18.8, 10.5],
      [5,  11.9, 17.6, 10.4],
      [6,   8.8, 13.6,  7.7],
      [7,   7.6, 12.3,  9.6],
      [8,  12.3, 29.2, 10.6],
      [9,  16.9, 42.9, 14.8],
      [10, 12.8, 30.9, 11.6],
      [11,  5.3,  7.9,  4.7],
      [12,  6.6,  8.4,  5.2],
      [13,  4.8,  6.3,  3.6],
      [14,  4.2,  6.2,  3.4]
    ]);

    var options = {
      chart: {
        title: '',
        subtitle: ''
      },
      width: '100%',
      height: '',
      axes: {
        x: {
          0: {side: 'top'}
        }
      }
    };

    var chart = new google.charts.Line(document.getElementById('graficolinea'));

    chart.draw(data, google.charts.Line.convertOptions(options));
  }

}

graficolinea()

function graficobarra(){
    google.charts.load('current', {'packages':['bar']});
    google.charts.setOnLoadCallback(drawStuff);

    function drawStuff() {
      var data = new google.visualization.arrayToDataTable([
        ['Move', 'Percentage'],
        ["", 44],
        ["", 31],
        ["", 33],
        ["", 10],
        ['', 50]
      ]);

      var options = {
        width: '100%',
        legend: { position: 'none' },
        chart: {
          title: '',
          subtitle: '' },
        axes: {
          x: {
            0: { side: '', label: ''} // Top x-axis.
          }
        },
        bar: { groupWidth: "90%" }
      };

      var chart = new google.charts.Bar(document.getElementById('graficobarra'));
      // Convert the Classic options to Material options.
      chart.draw(data, google.charts.Bar.convertOptions(options));
    };
}
graficobarra()

function graficoarea(){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Year', 'Sales', 'Expenses'],
        ['2013',  1000,      400],
        ['2014',  1170,      460],
        ['2015',  660,       1120],
        ['2016',  1030,      540]
      ]);

      var options = {
        title: '',
        hAxis: {title: '',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0}
      };

      var chart = new google.visualization.AreaChart(document.getElementById('grafico-area'));
      chart.draw(data, options);
    }
}

graficoarea()