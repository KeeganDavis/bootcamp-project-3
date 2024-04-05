// no drought or xtreme temp data
// const url = 'https://keegandavis.github.io/disaster-data-json/emdat_no_drought_or_xtremetemps.json';

// all data
const url = 'https://keegandavis.github.io/disaster-data-json/emdat_cleaned.json';

d3.json(url).then(disaster => {
    // store array of disasters
    let disasters = disaster
    // function call with array to add layers and markers
    initLayersAndMarkers(disasters)
});

function initLayersAndMarkers(disasterData) {
    // initiate layer groups for each disaster type
    let droughtLayer = L.layerGroup();
    let earthquakeLayer = L.layerGroup();
    let extremeTempLayer = L.layerGroup();
    let floodLayer = L.layerGroup();
    let dryMassMovementLayer = L.layerGroup();
    let wetMassMovementLayer = L.layerGroup();
    let stormLayer = L.layerGroup();
    let volcanoLayer = L.layerGroup();

    // colors object to be referenced when adding colors to circle markers
    let colors = {
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
                color: colors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(droughtLayer)
        } else if (disaster.Type == 'Earthquake') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: colors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(earthquakeLayer)
        } else if (disaster.Type == 'Extreme temperature') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: colors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(extremeTempLayer)
        } else if (disaster.Type == 'Flood') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: colors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(floodLayer)
        } else if (disaster.Type == 'Mass movement (dry)') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: colors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(dryMassMovementLayer)
        } else if (disaster.Type == 'Mass movement (wet)') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: colors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(wetMassMovementLayer)
        } else if (disaster.Type == 'Storm') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: colors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(stormLayer)
        } else if (disaster.Type == 'Volcanic activity') {
            L.circleMarker([disaster.Lat, disaster.Lng], {
                color: colors[disaster.Type],
                weight: 1,
                fillOpacity: 0.1,
                radius: 7
            }).addTo(volcanoLayer)
        }
    });
    
    // create overlay object containing all layers
    let overlayLayers = {
        Drought: droughtLayer,
        Earthquake: earthquakeLayer,
        'Extreme Temperature': extremeTempLayer,
        Flood: floodLayer,
        'Mass Movement (Dry)': dryMassMovementLayer,
        'Mass Movement (Wet)': wetMassMovementLayer,
        Storm: stormLayer,
        'Volcanic Activity': volcanoLayer
    };

    const legend = L.control({position:'bottomright'});

    legend.onAdd = function() {
      let div = L.DomUtil.create('div', 'legend');
      div.innerHTML = `<h4>Disaster Types</h4>`;
      
      for (let type in colors) {
        div.innerHTML += `<i style="background: ${colors[type]};"></i><span class="legend-span">${type}</span><br>`
      }
      return div;
    };

    addMap(overlayLayers, legend);
};

function addMap(overlayLayers, legend) {
    // let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    // }); 

    let streetDark = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
    });

    let street = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: 'Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL.'
    });

    // let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    //     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    // });

    let baseMaps = {
        'Dark Map': streetDark,
        Map: street
    };

    let allDisastersMap = L.map('allDisastersMap', {
        center: [10, 0],
        zoom: 3,
        layers: [streetDark]
    });

    legend.addTo(allDisastersMap)

    L.control.layers(baseMaps, overlayLayers, {
        collapsed: false,
        sortLayers: true
    }).addTo(allDisastersMap);
};
