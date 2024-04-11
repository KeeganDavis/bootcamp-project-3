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
          `<div class="p-2 col-md-12" style="margin-top: -50px;">
                <div id="disasterTypesBar"></div>
            </div>
            `
        );
        addBar(disastersMapData);
      } else if (vizType == 'map') {
        // if the value of the selection is map, update the html with the correct tags and attributes for the map to be displayed when the function is called
        div.html(
          ` <div style="margin-top: -55px;">
                <h2 class="text-center">Map of All Geolocations Affected by Natural Disasters</h2>
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
              <div id="e1758858-1708-4e8f-b375-62eaf71ce488" data-root-id="p1001" style="display: contents;"></div>
            </div>
            <p style="margin-top: -150px">Chart showing the count of each disaster type for each year that the disaster occurred in this dataset. The figure shown does not reflect individual, geographic 
            locations. This figure represents the count of individual disaster events. The events may have each impacted more than one geographic location.</p>`
        )
        cl_plot1();
      } else if (vizType == 'byRegion') {
        // if the value of the selection is byRegion, update the html with the correct tags and attributes for the bokeh bar graph
        div.html(
          ` <div class="d-flex justify-content-center">
              <div id="ef6734e7-9e39-48ce-9c29-f953e4dac237" data-root-id="p1148" style="display: contents;"></div>
            </div>
            <p style="margin-top: -145px;">Chart showing the count of each disaster type by region. Each bar group is a region with each bar representing an individual disaster type. </p>`
        )
        cl_plot2();
      } else if (vizType == 'home') {
         // if value of selection is home, display home page
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
      } else if (vizType == 'cost') {
        // if the value of the selection is cost, update the html with the disaster costs plotly bar graph
        div.html(
          `<div class="d-flex justify-content-center">
              <div id="plotDiv"></div>
            </div>`
        )
        fetchData();
      } else if (vizType == 'perCapita') {
        // if the value of the selection is perCapita, update the html with the correct tags and attributes for the 4 bokeh bar graphs of per capita data
        div.html(
          `<div class="d-flex justify-content-center">
              <div id="ec6d87a9-cd1c-456c-b3f1-e3ab0d4e7924" data-root-id="p1001" style="display: contents;"></div>
           </div>
           <div class="d-flex justify-content-center">
              <div id="cd497bf3-94e8-4c61-8303-e9da507667fd" data-root-id="p1036" style="display: contents;"></div>
           </div>
           <div class="d-flex justify-content-center">
              <div id="ddfb3fb9-391c-4340-870e-9673c4cbee8d" data-root-id="p1071" style="display: contents;"></div>
           </div>
           <div class="d-flex justify-content-center">
              <div id="d26b6bc2-60b2-4fff-82b0-8a99dc0ea58a" data-root-id="p1106" style="display: contents;"></div>
           </div>
           `
        )
        rt_plot1();
        rt_plot2();
        rt_plot3();
        rt_plot4();
      } else if (vizType == 'perSA') {
        // if the value of the selection is perSA, update the html with the correct tags and attributes for the bokeh bar graphs of per surface area data
        div.html(
          `<div class="d-flex justify-content-center">
              <div id="f408ef23-4c5e-489d-9471-e779c742f239" data-root-id="p1141" style="display: contents;"></div>
           </div>
           <div class="d-flex justify-content-center">
              <div id="af4f7296-89ca-4940-bcb1-6c53aa77c8e7" data-root-id="p1176" style="display: contents;"></div>
           </div>
           <div class="d-flex justify-content-center">
              <div id="cdce65d4-e7b9-4ea3-96da-bd6f8b11c6d3" data-root-id="p1211" style="display: contents;"></div>
           </div>
           <div class="d-flex justify-content-center">
              <div id="b752a848-c88b-4c60-be82-d99810de2db2" data-root-id="p1246" style="display: contents;"></div>
           </div>
           `
        )
        rt_plot5();
        rt_plot6();
        rt_plot7();
        rt_plot8();
      } else if (vizType == 'disasterCorr') {
        // if the value of the selection is byRegion, update the html with the correct tags and attributes for the bokeh correlations of disasters
        div.html(
          `<div class="d-flex justify-content-center">
              <div id="eab10094-f0ac-4793-afbd-0352f24036f0" data-root-id="p1281" style="display: contents;"></div>
           </div>
           <div class="d-flex justify-content-center">
              <div id="c5a3d27b-c0df-4b61-bb94-1f8dc80bfe7e" data-root-id="p1345" style="display: contents;"></div>
           </div>
           <div class="d-flex justify-content-center">
              <div id="d5bbe785-0d38-407c-a2a2-7c7402d77798" data-root-id="p1409" style="display: contents;"></div>
           </div>
           <div class="d-flex justify-content-center">
              <div id="c0d55ae4-53a0-4609-a3c3-a613d28f9583" data-root-id="p1473" style="display: contents;"></div>
           </div>
           `
        )
        rt_plot9();
        rt_plot10();
        rt_plot11();
        rt_plot12();
      }

    }
