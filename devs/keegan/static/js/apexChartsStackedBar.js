function stackedBarChart(disasterData) {
    // array used to split the disaster data region Americas into North America and South America
    const northAmericanCountries = [
        "Antigua and Barbuda", "Bahamas", "Barbados", "Belize", "Canada", "Costa Rica", "Cuba", "Dominica", 
        "Dominican Republic", "El Salvador", "Grenada", "Guatemala", "Haiti", "Honduras", "Jamaica", "Mexico", 
        "Nicaragua", "Panama", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", 
        "Trinidad and Tobago", "United States of America"
    ];

    // array of objects containing the counts for each disaster type and the continent on which it occurred
    let newDisasterBarCounts =[
        {
            Continent: 'Africa',
            Drought: 0,
            Earthquake: 0,
            'Extreme temperature': 0,
            Flood: 0,
            'Mass movement (dry)': 0,
            'Mass movement (wet)': 0,
            Storm: 0,
            'Volcanic activity': 0,
            Total: 0
        },
        {
            Continent: 'Asia',
            Drought: 0,
            Earthquake: 0,
            'Extreme temperature': 0,
            Flood: 0,
            'Mass movement (dry)': 0,
            'Mass movement (wet)': 0,
            Storm: 0,
            'Volcanic activity': 0,
            Total: 0
        },
        {
            Continent: 'Europe',
            Drought: 0,
            Earthquake: 0,
            'Extreme temperature': 0,
            Flood: 0,
            'Mass movement (dry)': 0,
            'Mass movement (wet)': 0,
            Storm: 0,
            'Volcanic activity': 0,
            Total: 0
            },
        {
            Continent: 'North America',
            Drought: 0,
            Earthquake: 0,
            'Extreme temperature': 0,
            Flood: 0,
            'Mass movement (dry)': 0,
            'Mass movement (wet)': 0,
            Storm: 0,
            'Volcanic activity': 0,
            Total: 0
        },
        {
            Continent: 'Oceania',
            Drought: 0,
            Earthquake: 0,
            'Extreme temperature': 0,
            Flood: 0,
            'Mass movement (dry)': 0,
            'Mass movement (wet)': 0,
            Storm: 0,
            'Volcanic activity': 0,
            Total: 0
            },
        {
            Continent: 'South America',
            Drought: 0,
            Earthquake: 0,
            'Extreme temperature': 0,
            Flood: 0,
            'Mass movement (dry)': 0,
            'Mass movement (wet)': 0,
            Storm: 0,
            'Volcanic activity': 0,
            Total: 0
        }      
];
    // double loop to go through each disaster in the JSON and add the disaster type to the correct continent's count
    disasterData.forEach(disaster => {
        newDisasterBarCounts.forEach(continent => {
            // check to see if the country is in North America
            if (northAmericanCountries.includes(disaster.Country)) {
                // add to North America object counts
                if (continent.Continent == 'North America') {
                    continent[disaster.Type] += 1
                    continent.Total += 1
                }
                // check if country is in Americas region and doesn't exist in North American countries array
            } else if (disaster.Region == 'Americas') {
                // add to South America object counts
                if (continent.Continent == 'South America') {
                    continent[disaster.Type] += 1
                    continent.Total += 1
                }
            } else {
                // the rest of the data has the correct region to correspond to the continent
                if (continent.Continent == disaster.Region) {
                    // add 1 to the corresponding disaster type in the corresponding continent object
                    continent[disaster.Type] += 1
                    continent.Total += 1
                }
            }
        })
    })

    // create arrays for bar graph data by slicing to get rid of continent and total values
    let droughtCounts = [];
    let earthquakeCounts = [];
    let extremeTempCounts = [];
    let floodCounts = [];
    let dryMassCounts = [];
    let wetMassCounts = [];
    let stormCounts = [];
    let volcanoCounts = [];
    
    // get all continents and all counts per disaster into the corresponding array to be used for labels in the stacked bar graph
    let continents = [];
    newDisasterBarCounts.forEach(obj => {
        continents.push(obj.Continent);
        droughtCounts.push(obj.Drought);
        earthquakeCounts.push(obj.Earthquake);
        extremeTempCounts.push(obj['Extreme temperature']);
        floodCounts.push(obj.Flood);
        dryMassCounts.push(obj['Mass movement (dry)']);
        wetMassCounts.push(obj['Mass movement (wet)']);
        stormCounts.push(obj.Storm);
        volcanoCounts.push(obj['Volcanic activity']);
    });
    // get names of disasters in alphabetical order into an array
    let disastersArr = Object.keys(newDisasterBarCounts[0]).slice(1, 9);

    // setting apex charts options for stacked bar chart
    let stackedBarOptions = {
          series: [{
          name: disastersArr[0],
          data: droughtCounts
        }, {
          name: disastersArr[1],
          data: earthquakeCounts
        }, {
          name: disastersArr[2],
          data: extremeTempCounts
        }, {
          name: disastersArr[3],
          data: floodCounts
        }, {
          name: disastersArr[4],
          data: dryMassCounts
        }, {
          name: disastersArr[5],
          data: wetMassCounts
        }, {
          name: disastersArr[6],
          data: stormCounts
        }, {
          name: disastersArr[7],
          data: volcanoCounts
        }],
          chart: {
          type: 'bar',
          height: '600px',
          stacked: true,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: '100%',
            barHeight: '80%',
          },
        },
        title: {
          text: 'Disaster Types by Continent',
          align: 'middle',
          style: {
              fontSize: '24px'
          }
        },
        xaxis: {
          categories: continents,
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val
            }
          }
        },
        fill: {
          opacity: 1
        },
        colors: ['#ffee65', '#fdcce5', '#fd7f6f', '#7eb0d5', '#bd7ebe', '#8bd3c7', '#b2e061', '#ffb55a']
        };

        // rendering stacked bar chart in html
        let stackedBarChartHTML = new ApexCharts(document.querySelector("#disastersByContinent"), stackedBarOptions);
        stackedBarChartHTML.render();
};