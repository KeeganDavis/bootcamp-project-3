// all data
const url = 'https://keegandavis.github.io/disaster-data-json/emdat_cleaned.json';

d3.json(url).then(disaster => {
    // store array of disasters
    let disastersMapData = disaster;
    
    // select the div where the visualizations will go and add an event listener for when the selection changes
    document.getElementById('selectViz').addEventListener('change', function() {
      // call the function with the value of the selection and pass in the disaster data to be used by the visualization code
        newSelection(this.value, disastersMapData);
    });

    // call new selection to load the map on startup
    newSelection(document.getElementById('selectViz').value, disastersMapData);
});

function newSelection(vizType, disastersMapData) {
      // select the div to update the html
      let div = d3.select('#vizRow')

      if (vizType == 'bar') {
        // if the value of the selection is bar, update the html with the correct tags and attributes for the bar graph to be displayed when the function is called
        div.html(
          `<div class="p-2 col-md-10">
                <div id="disasterTypesBar"></div>
            </div>
            <div class="col-md-2">text</div>`
        );
        addBar(disastersMapData);
      } else if (vizType == 'map') {
        // if the value of the selection is map, update the html with the correct tags and attributes for the map to be displayed when the function is called
        div.html(
          ` <div class="p-2" id="visual1-col">
                <h2 class="text-center">Map of All Natural Disasters Filtered by Disaster Type</h2><hr>
                <div id="allDisastersMap" style="border-radius: 15px; border: 3px solid red" margin="5px"></div>
                <footer>*Disasters only counted when one of the following criteria are met: 10 fatalities,
                100 affected people, a declaration of a state of emergency, or a call for international assistance.</footer> 
            </div> `
        );
       initLayersAndMarkers(disastersMapData); 
      } else if (vizType == 'stackedBar') {
        // if the value of the selection is stackedBar, update the html with the correct tags and attributes for the stacked bar graph to be displayed when the function is called
        div.html(
          `<div class="col-lg-10">
                <div id="disastersByContinent" class="visuals"></div>
            </div>
            <div class="col-lg-2">text</div>`
        );
        stackedBarChart(disastersMapData);
      }

    }