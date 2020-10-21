 // grafico google charts produção leite
 google.charts.load("current", {packages:['corechart']});
 google.charts.setOnLoadCallback(drawChart1);
 function drawChart1() {
   var data = google.visualization.arrayToDataTable([
     ["Dia semana", "Litros", { role: "style" } ],
     ["Segunda",1230, "aqua"],
     ["terça", 1000, "red"],
     ["Quarta", 1240, "purple"],
     ["Quinta", 2452.1, "gold"],
     ["Sexta", 3028.09, "color: #e5e4e2"],
     ["Sábado",5001.5,"color:green"]
   ]);

   var view = new google.visualization.DataView(data);
   view.setColumns([0, 1,
                    { calc: "stringify",
                      sourceColumn: 1,
                      type: "string",
                      role: "annotation" },
                    2]);

   var options = {
     title: "Produção Leite",
     width: 280,
     height: 350,
     bar: {groupWidth: "95%"},
     legend: { position: "none" },
   };
   var chart = new google.visualization.ColumnChart(document.getElementById("columnchart_values"));
   chart.draw(view, options);
}

 // Grafico de pizzas
 google.charts.load("current", {packages:["corechart"]});
 google.charts.setOnLoadCallback(drawChart2);
 function drawChart2() {
     var data = google.visualization.arrayToDataTable([
     ['Task', 'Quantidade'],
     ['Vacas',     15],
     ['Bois',      2],
     ['Galinhas',  2],
     ['Carneiros', 2],
     ['Cavalos',    4]
     ]);

     var options = {
     title: 'Animais da fazenda',
     is3D: true
     };

     var chart2 = new google.visualization.PieChart(document.getElementById('piechart_3d'));
     chart2.draw(data, options);
 }

