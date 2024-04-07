function addBar(disasterData) {

    let disasterBarCounts ={
        Drought: 0,
        Earthquake: 0,
        'Extreme temperature': 0,
        Flood: 0,
        'Mass movement (dry)': 0,
        'Mass movement (wet)': 0,
        Storm: 0,
        'Volcanic activity': 0,
        Total: 0
    };

    disasterData.forEach(disaster => {
        disasterBarCounts[disaster.Type] += 1;
        disasterBarCounts.Total += 1;
    });
    
    let allDisastersSingleBarOptions = {
          series: [{
          name: 'Count',
          data: Object.values(disasterBarCounts).slice(0, -1)
        }],
          chart: {
          type: 'bar',
          height: '800px',
        },
        title: {
            text: 'Disaster Types',
            align: 'middle',
            style: {
                fontSize: '32px'
            }
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            columnWidth: '10%',
            dataLabels: {
                position: 'top'
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: Object.keys(disasterBarCounts).slice(0, -1),
          max: 30000
        },
        colors: ['#ffee65', '#fdcce5', '#fd7f6f', '#7eb0d5', '#bd7ebe', '#8bd3c7', '#b2e061', '#ffb55a'],
        states: {
            hover: {
                filter: {
                    type: 'none',
                }
            }
        }
        };
    
    let allDisastersBarChart = new ApexCharts(document.querySelector('#disasterTypesBar'), allDisastersSingleBarOptions);
    allDisastersBarChart.render();
    
};