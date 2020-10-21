 // Tabela salário funcionários
 google.charts.load('current', {'packages':['table']});
 google.charts.setOnLoadCallback(drawTable);

 function drawTable() {
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Nome');
     data.addColumn('number', 'Salário');
     data.addColumn('boolean', 'Tempo integral');
     data.addRows([
     ['Mike',  {v: 10000, f: 'R$5,000'}, true],
     ['Jim',   {v:8000,   f: 'R$1,000'},  false],
     ['Alice', {v: 12500, f: 'R$2,500'}, true],
     ['Bob',   {v: 7000,  f: 'R$2,500'},  true]
     ]);

     var table = new google.visualization.Table(document.getElementById('table_div'));

     table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
 }

  // Estoque table
  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawTable2);

  function drawTable2() {
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Nome');
      data.addColumn('number', 'Preço unit/kg');
      data.addColumn('string', 'Qtd');
      data.addRows([
      ['Foice',  {v: 10000, f: 'R$35,00'}, '100 un'],
      ['Enchada',   {v:8000,   f: 'R$32,00'},  '200 un'],
      ['Adulbo', {v: 12500, f: 'R$60,00'}, '54.000 kg'],
      ['Milho',   {v: 7000,  f: 'R$1,20'},  '1000.00 kg']
      ]);

      var table = new google.visualization.Table(document.getElementById('table_estoque'));

      table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
  }