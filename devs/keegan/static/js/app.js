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

    addMap(overlayLayers);
};

function addMap(overlayLayers) {
    let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }); 

    let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
    });

    let baseMaps = {
        Street: street,
        Topography: topo
    };

    let allDisastersMap = L.map('map', {
        center: [10, 0],
        zoom: 3,
        layers: [street]
    });

    L.control.layers(baseMaps, overlayLayers, {
        collapsed: false
    }).addTo(allDisastersMap);
};
