// all data
const url = 'https://keegandavis.github.io/disaster-data-json/emdat_cleaned.json';

d3.json(url).then(disaster => {
    // store array of disasters
    let disastersMapData = disaster;
    // function call with array to add layers and markers
    initLayersAndMarkers(disastersMapData);
    // function call to create bar chart of disaster types
    addBar(disastersMapData);
    // function call to create bar chart of disaster types per continent
    stackedBarChart(disastersMapData);
    
    // newSelection();
});

// function newSelection() {
//       let dropDownMenu = d3.select('#selectViz');
//       let visualization = dropDownMenu.property('value');

//       if (visualization == 'bar') {addBar(disastersMapData)}
//     }