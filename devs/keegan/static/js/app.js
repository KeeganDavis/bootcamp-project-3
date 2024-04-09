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
            <div class="col-md-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>`
        );
        addBar(disastersMapData);
      } else if (vizType == 'map') {
        // if the value of the selection is map, update the html with the correct tags and attributes for the map to be displayed when the function is called
        div.html(
          ` <div class="p-2">
                <h2 class="text-center">Map of All Natural Disasters Filtered by Disaster Type</h2><hr>
                <div id="allDisastersMap" style="border-radius: 15px; border: 3px solid red" margin="5px"></div>
                <footer>*Disasters only counted when one of the following criteria are met: 10 fatalities,
                100 affected people, a declaration of a state of emergency, or a call for international assistance.</footer> 
            </div> `
        );
       initLayersAndMarkers(disastersMapData); 
      } else if (vizType == 'timeLine') {
        // if the value of the selection is stackedBar, update the html with the correct tags and attributes for the stacked bar graph to be displayed when the function is called
        div.html(
          ` <div class="d-flex justify-content-center">
              <div id="d4f31d05-c7ac-4b36-87c3-c78fa2cb5cb9" data-root-id="p1127" style="display: contents;"></div>
            </div>
            <p style="margin-top: -125px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.text</p>`
        )
        cl_plot1();
      } else if (vizType == 'byRegion') {
        div.html(
          ` <div class="d-flex justify-content-center">
              <div id="e17c7ed2-0692-4c9e-b205-c2d57b1ac742" data-root-id="p1274" style="display: contents;"></div>
            </div>
            <p style="margin-top: -125px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`
        )
        cl_plot2();
      }

    }