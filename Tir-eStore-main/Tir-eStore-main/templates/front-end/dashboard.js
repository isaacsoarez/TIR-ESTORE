// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
  if(!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if(sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
}



// ---------- CHARTS ----------

// BAR CHART
var barChartOptions = {
  series: [{
    data: [45, 63, 58, 16]
  }],
  chart: {
    type: 'bar',
    height: 350,
    toolbar: {
      show: false
    },
  },
  colors: [
    "#246dec",
    "#f5b74f",
    "#367952",
    "#cc3c43",
    
  ],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    }
  },
  dataLabels: {
    enabled: false
  },
  legend: {
    show: false
  },
  xaxis: {
    categories: ["Produtos", "Pedidos", "Vendas", "Alerta"],
  },
  yaxis: {
    title: {
      text: "Produtos"
    }
  }
};


var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();


// AREA CHART
var areaChartOptions = {
  series: [{
    name: 'Pedidos',
    data: [71, 90, 128, 151, 242, 309, 63]
  }, {
    name: 'Vendas',
    data: [110, 132, 245, 272, 294, 252, 58]
  }],
  chart: {
    height: 350,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth'
  },
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0
  },
  yaxis: [
    {
      title: {
        text: '',
      },
    },
    {
      opposite: true,
      title: {
        text: '',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  }
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();



const Orders = [
  {
      name: 'Rhavi Holanda', 
      idade: '18',
      telefone: '1195077-6124',
      cpf: '663.182.378-59',
      status: 'Solteiro'
  },
  {
    name: 'Ícaro Lermen',
    idade: '21',
    telefone: '1199474-4194',
    cpf: '483.612.578-19',
    status: 'Casado'
  },
  {
    name: ' Estevão Bento',
    idade: '18',
    telefone: '1199676-1121',
    cpf: '512.187.178-79',
    status: 'Solteiro'
  },
  {
    name: 'Jayme Madrid',
    idade: '28',
    telefone: '1199417-2129',
    cpf: '253.222.874-69',
    status: 'Casado'
  },
  {
    name: 'Aline Quebec',
    idade: '32',
    telefone: '1195899-1123',
    cpf: '253.585.376-53',
    status: 'Casado'
  },
]

Orders.forEach(order =>{
  const tr = document.createElement('tr')
  const trContent = `
  <td>${order.name}</td>
  <td>${order.idade}</td>
  <td>${order.telefone}</td>
  <td>${order.cpf}</td>
  <td class="${order.status === 'Solteiro' ? 'danger' : order.status === 'Casado' ? 'success' : 'primary'}">${order.status}</td>
  <td class="primary">Details</td>
  `;
  tr.innerHTML = trContent;
  document.querySelector('table tbody').appendChild(tr);
});

const darkMode = document.querySelector('.dark-mode');


darkMode.addEventListener('click', () =>{
    document.body.classList.toggle('dark-mode-variables');
    darkMode.querySelector('span:nth-child(1)').classList.toggle('active');
    darkMode.querySelector('span:nth-child(2)').classList.toggle('active');
});