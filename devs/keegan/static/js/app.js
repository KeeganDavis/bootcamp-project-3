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
      // select the div under the header div to update the html
      let div = d3.select('#vizRow')

      if (vizType == 'bar') {
        // if the value of the selection is bar, update the html with the correct tags and attributes for the bar graph to be displayed when the function is called
        div.html(
          `<div class="p-2 col-md-10">
                <div id="disasterTypesBar"></div>
            </div>
            <div class="col-md-2">
              Due to the limitations of this dataset, the differences in this bar chart are consistent with what we would expect. The tectonic plates mainly lie underneath the ocean
              and not under land mass, so the low counts for earthquakes and volcanic activity make sense. According to the UN, <a 
              href="https://www.un.org/esa/sustdev/natlinfo/indicators/methodology_sheets/oceans_seas_coasts/pop_coastal_areas.pdf">40% of the world's population lives within 100km of the
              coast</a>. By looking at the map of all the disasters, it is clear that the majority of storms
            </div>`
        );
        addBar(disastersMapData);
      } else if (vizType == 'map') {
        // if the value of the selection is map, update the html with the correct tags and attributes for the map to be displayed when the function is called
        div.html(
          ` <div class="p-2">
                <h2 class="text-center">Map of All Natural Disasters Filtered by Disaster Type</h2><hr>
                <div id="allDisastersMap" style="border-radius: 15px; border: 5px solid #a7b39b" margin="5px"></div>
                <footer>*Disasters only counted when one of the following criteria are met: 10 fatalities,
                100 affected people, a declaration of a state of emergency, or a call for international assistance.</footer> 
            </div> `
        );
       initLayersAndMarkers(disastersMapData); 
      } else if (vizType == 'timeLine') {
        // if the value of the selection is byRegion, update the html with the correct tags and attributes for the bokeh line graph
        div.html(
          ` <div class="d-flex justify-content-center">
              <div id="d58dbea3-8582-4fdc-9498-2ec53799e762" data-root-id="p1723" style="display: contents;"></div>
            </div>
            <p style="margin-top: -150px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.text</p>`
        )
        cl_plot1();
      } else if (vizType == 'byRegion') {
        // if the value of the selection is byRegion, update the html with the correct tags and attributes for the bokeh bar graph
        div.html(
          ` <div class="d-flex justify-content-center">
              <div id="ba98183c-6e83-4be8-ad89-25f5c2009843" data-root-id="p1870" style="display: contents;"></div>
            </div>
            <p style="margin-top: -145px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>`
        )
        cl_plot2();
      } else if (vizType == 'home') {
        div.html(
        ` <div class="p-2 home">
                <h2 class="text-center">Natural Disaster Analysis</h2><hr>
                <h4>Data Sources:</h4><br>
                <p>This is an analysis of the <a href="https://public.emdat.be/">EM-DAT International Disaster Database</a> after merging the dataset 
                with the 'CSV-Disaster Location Centroids' file from the <a href="https://sedac.ciesin.columbia.edu/data/set/pend-gdis-1960-2018/data-download">
                Socioeconomic Data and Applications Center Geocoded Disasters Dataset (GDIS), v1</a>. The EM-DAT database contained many null values for the latitude an longitude, so 
                the GDIS dataset was used to fill in the gaps. In terms of ethical considerations, both datasets are freely available for non-commercial use upon registration for a 
                complimentary account. Importantly, these datasets do not contain any personal information about individuals affected by the natural disasters, ensuring privacy 
                concerns are adequately addressed. Additionally, since the disaster data is publicly accessible, no further ethical considerations were necessary for its utilization.
                </p>
                <h4>Webpage Description:</h4><br>
                <p">This webpage analyzes 71,634 natural disasters through the use of visualizations to determine if disasters follow a predictable pattern,
                impact certain continents more than others, and if disasters affect locations with larger populations.</p><br>
                <h4>Usage:</h4><br>
                <p>To get started, use the dropdown menu in the top left of the page under the header to start exploring the visualizations.</p>
          </div> `
        )
      }

    }