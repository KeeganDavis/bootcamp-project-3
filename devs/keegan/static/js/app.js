// all data
const url = 'https://keegandavis.github.io/disaster-data-json/emdat_cleaned.json';

d3.json(url).then(disaster => {
    // store array of disasters
    let disastersMapData = disaster;
    // function call with array to add layers and markers
    initLayersAndMarkers(disastersMapData);
    addBar(disastersMapData);
});

function initLayersAndMarkers(disasterData) {
    /*
    create layer groups for each disaster type, loop through the disaster data and add the circle marker to the correct layer group with the color corresponding to the disaster.
    Create a legend and pass both the legend and the layer groups to the addMap() function
    */
    // initiate layer groups for each disaster type
    let droughtMapLayer = L.layerGroup();
    let earthquakeMapLayer = L.layerGroup();
    let extremeTempMapLayer = L.layerGroup();
    let floodMapLayer = L.layerGroup();
    let dryMassMovementMapLayer = L.layerGroup();
    let wetMassMovementMapLayer = L.layerGroup();
    let stormMapLayer = L.layerGroup();
    let volcanoMapLayer = L.layerGroup();

    // colors object to be referenced when adding colors to circle markers
    let mapColors = {
        'Drought': '#ffee65',
        'Earthquake': '#fdcce5',
        'Extreme temperature': '#fd7f6f',
        'Flood': '#7eb0d5',
        'Mass movement (dry)': '#bd7ebe',
        'Mass movement (wet)': '#8bd3c7',
        'Storm': '#b2e061',
        'Volcanic activity': '#ffb55a'
    }

    // loop through each disaster and add a marker to the layer that corresponds to the type of disaster
    disasterData.forEach(disaster => {
        if (disaster.Type == 'Drought') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: mapColors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(droughtMapLayer)
        } else if (disaster.Type == 'Earthquake') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: mapColors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(earthquakeMapLayer)
        } else if (disaster.Type == 'Extreme temperature') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: mapColors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(extremeTempMapLayer)
        } else if (disaster.Type == 'Flood') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: mapColors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(floodMapLayer)
        } else if (disaster.Type == 'Mass movement (dry)') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: mapColors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(dryMassMovementMapLayer)
        } else if (disaster.Type == 'Mass movement (wet)') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: mapColors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(wetMassMovementMapLayer)
        } else if (disaster.Type == 'Storm') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: mapColors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(stormMapLayer)
        } else if (disaster.Type == 'Volcanic activity') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: mapColors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(volcanoMapLayer)
        }
    });
    
    // create overlay object containing all layers
    let allDisastersOverlayMapLayers = {
        Drought: droughtMapLayer,
        Earthquake: earthquakeMapLayer,
        'Extreme Temperature': extremeTempMapLayer,
        Flood: floodMapLayer,
        'Mass Movement (Dry)': dryMassMovementMapLayer,
        'Mass Movement (Wet)': wetMassMovementMapLayer,
        Storm: stormMapLayer,
        'Volcanic Activity': volcanoMapLayer
    };

    // initiate legend
    const disastersMapLegend = L.control({position:'bottomright'});

    // add a div with class legend then add html to the div with a heading, icons with the color corresponding to the color markers, and the corresponding disaster type
    disastersMapLegend.onAdd = function() {
      let disastersMapDiv = L.DomUtil.create('div', 'legend');
      disastersMapDiv.innerHTML = `<h4>Disaster Types</h4>`;
      
      for (let type in mapColors) {
        disastersMapDiv.innerHTML += `<i style="background: ${mapColors[type]};"></i><span class="legend-span">${type}</span><br>`
      }
      return disastersMapDiv;
    };

    addMap(allDisastersOverlayMapLayers, disastersMapLegend);
};

function addMap(overlayLayers, legend) {
    /*
    add the tile layers w/ the maps. create a layer object for the maps and a layer object for the disaster layer groups. initialize the map and add the layers and the 
    legend to the map
    */

    // create street map layers
    let streetDarkLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
    });
    let streetLightLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
    });

    // create object for map tile layers
    let disasterMapsTileLayers = {
        'Dark Map': streetDarkLayer,
        Map: streetLightLayer
    };

    // create map
    let allDisastersMap = L.map('allDisastersMap', {
        center: [10, 0],
        zoom: 3,
        layers: [streetDarkLayer]
    });

    // add legend to map
    legend.addTo(allDisastersMap)

    // create layer control w/ world maps and disaster layers
    L.control.layers(disasterMapsTileLayers, overlayLayers, {
        collapsed: false,
        sortLayers: true
    }).addTo(allDisastersMap);
};

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
    
    let barOptions = {
          series: [{
          data: Object.values(disasterBarCounts).slice(0, -1)
        }],
          chart: {
          type: 'bar',
          height: 'auto'
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: true,
            columnWidth: '70%'
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: Object.keys(disasterBarCounts).slice(0, -1),
          max: 27500
        },
        colors: ['#ffee65', '#fdcce5', '#fd7f6f', '#7eb0d5', '#bd7ebe', '#8bd3c7', '#b2e061', '#ffb55a'],
        // chart: {
        //     // background: ''
        // }
        };
    
    let allDisastersBarChart = new ApexCharts(document.querySelector('#visual2'), barOptions);
    allDisastersBarChart.render();
    
};
