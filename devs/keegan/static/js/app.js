// no drought or xtreme temp data
// const url = 'https://keegandavis.github.io/disaster-data-json/emdat_no_drought_or_xtremetemps.json';

// all data
const url = 'https://keegandavis.github.io/disaster-data-json/emdat_cleaned.json';

d3.json(url).then(disaster => {
    console.log(disaster[0])
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

    // create object to hold icons with key equal to disaster name from dataset, so the correct values can be loaded for each disaster type
    let icons = {
        'Drought': L.icon({iconURL: '../../Resources/Images/drought.png', iconSize: [38,38]}),
        'Earthquake': L.icon({iconURL: '../../Resources/Images/earthquake.png', iconSize: [38,38]}),
        'Extreme temperature': L.icon({iconURL: '../../Resources/Images/extreme_temps.png', iconSize: [38,38]}),
        'Flood': L.icon({iconURL: '../../Resources/Images/flood.png', iconSize: [38,38]}),
        'Mass movement (dry)': L.icon({iconURL: '../../Resources/Images/landslide.png', iconSize: [38,38]}),
        'Mass movement (wet)': L.icon({iconURL: '../../Resources/Images/mudslide.png', iconSize: [38,38]}),
        'Storm': L.icon({iconURL: '../../Resources/Images/storm.png', iconSize: [38,38]}),
        'Volcanic activity': L.icon({iconURL: '../../Resources/Images/volcano.png', iconSize: [38,38]})
    };

    // loop through each disaster and add a marker to the layer that corresponds to the type of disaster
    disasterData.forEach(disaster => {
        if (disaster.Type == 'Drought') {
            L.marker([disaster.Lat, disaster.Lng], {icon: icons[disaster.Type]}).addTo(droughtLayer)
        } else if (disaster.Type == 'Earthquake') {
            L.marker([disaster.Lat, disaster.Lng], {icon: icons[disaster.Type]}).addTo(earthquakeLayer)
        } else if (disaster.Type == 'Extreme temperature') {
            L.marker([disaster.Lat, disaster.Lng], {icon: icons[disaster.Type]}).addTo(extremeTempLayer)
        } else if (disaster.Type == 'Flood') {
            L.marker([disaster.Lat, disaster.Lng], {icon: icons[disaster.Type]}).addTo(floodLayer)
        } else if (disaster.Type == 'Mass movement (dry)') {
            L.marker([disaster.Lat, disaster.Lng], {icon: icons[disaster.Type]}).addTo(dryMassMovementLayer)
        } else if (disaster.Type == 'Mass movement (wet)') {
            L.marker([disaster.Lat, disaster.Lng], {icon: icons[disaster.Type]}).addTo(wetMassMovementLayer)
        } else if (disaster.Type == 'Storm') {
            L.marker([disaster.Lat, disaster.Lng], {icon: icons[disaster.Type]}).addTo(stormLayer)
        } else if (disaster.Type == 'Volcanic activity') {
            L.marker([disaster.Lat, disaster.Lng], {icon: icons[disaster.Type]}).addTo(volcanoLayer)
        }
    });

    console.log(droughtLayer)
    
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
        center: [0, 0],
        zoom: 1,
        layers: [street]
    });

    L.control.layers(baseMaps, overlayLayers, {
        collapsed: false
    }).addTo(allDisastersMap);
};
