
// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'pie',
//     data: {
//         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//         datasets: [{
//             label: '# of Votes',
//             data: [12, 19, 3, 5, 2, 3],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }
// });

var ctx = document.getElementById("graf1");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {    	
    	 datasets: [{
    	 
            data: [12, 13, 32, 15],
            backgroundColor: [
                '#e57373',
                '#64b5f6',
                '#81c784',
                '#FFB74D'                
            ],
            borderColor: [
                '#ffffff',
                '#ffffff',
                '#ffffff',
                '#ffffff'               
            ],
            borderWidth: 4	
    	 }]
    },
    options: {

    	// responsive: false
       
    }
});

var ctx = document.getElementById("graf3");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {     
         datasets: [{
         
            data: [17, 3, 11, 7],
            backgroundColor: [
                '#e57373',
                '#64b5f6',
                '#81c784',
                '#FFB74D'               
                
            ],
            borderColor: [
                '#ffffff',
                '#ffffff',
                '#ffffff',
                '#ffffff'               
            ],
            borderWidth: 4  
         }]
    },
    options: {

        // scales: {
        //  yAxes: [{
        //      ticks: {
        //          beginAtZero:true
        //      }
        //  }]
        // }
    }
});

var ctx = document.getElementById("graf4");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    data: {     
         datasets: [{
         
            data: [12, 21, 3, 8],
            backgroundColor: [
                '#e57373',
                '#64b5f6',
                '#81c784',
                '#FFB74D'               
            ],
            borderColor: [
                '#ffffff',
                '#ffffff',
                '#ffffff',
                '#ffffff'               
            ],
            borderWidth: 4  
         }]
    },
    options: {
     
        // scales: {
        //  yAxes: [{
        //      ticks: {
        //          beginAtZero:true
        //      }
        //  }]
        // }
    }
});



var data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [{
    label: "Dataset #1",
    backgroundColor: "rgba(255,99,132,0.2)",
    borderColor: "rgba(255,99,132,1)",
    borderWidth: 2,
    hoverBackgroundColor: "rgba(255,99,132,0.4)",
    hoverBorderColor: "rgba(255,99,132,1)",
    data: [65, 59, 20, 81, 56, 55, 40],
  }]
};

var option = {
  responsive: false,
  scales: {
    yAxes: [{
      stacked: true,
      gridLines: {
        display: true,
        color: "rgba(255,99,132,0.2)"
      }
    }],
    xAxes: [{
      gridLines: {
        display: false
      }
    }]
  }
};

Chart.Bar('chart_0', {
  options: option,
  data: data
});


