# Natural Disasters Analysis (2001-2018) 
## Overview

## Data Sources
- [EM-DAT International Disaster Database](https://public.emdat.be/)
- [Socioeconomic Data and Applications Center Geocoded Disasters Dataset (GDIS), v1](https://sedac.ciesin.columbia.edu/data/set/pend-gdis-1960-2018/data-download)
## Requirements
- d3 v7
- leaflet JS 1.9.4
- bootstrap 5.3.3
- bokeh js 3.2.1
- apexcharts js 3.48
- pandas 
- pathlib
- bokeh python 3.4

## Directory Structure
- /resources/data_sources - contains raw data
- /resources/disaster_data - contains processed data
- /static/js - contains all js files for index.html
- /static/js - contains css for index.html
- /notebooks - contains notebooks for cleaning data, importing to mongoDB and creating bokeh plots
## Installation
- `git clone git@github.com:KeeganDavis/bootcamp-project-3.git`
## Usage
- To analyze the disaster data, open the index.html file and navigate through the visualizations using the dropdown selection in the top left of the page underneath the header.
## Workflow
- The EM-DAT database was merged with the GDIS dataset on 'disasterno' to provide the appropriate latitude and longitude values for the geolocations affected by the natural disasters. This process is documented in /notebooks/merge_disaster_data.ipynb
- The merged data was then converted to json and hosted on GitHub pages [here](https://github.com/KeeganDavis/disaster-data-json).
- The json data was used to make visualizations using leaflet, bokeh, and apexcharts
## Results

## Limitations and Further Research
- The main limitations of the dataset are the criteria for what is considered a natural disaster by EM-DAT. Disasters were only counted when one of the following criteria are met: 
    - 10 fatalities 
    - 100 affected people
    - A declaration of a state of emergency 
    - A call for international assistance.
- This means this analysis isn't a true analysis of all natural disasters because there could be many disasters that weren't recorded because they didn't match any of the criteria.
## Contributors
- [Keegan Davis](https://github.com/KeeganDavis)
- [Connor Lorden](https://github.com/clorden1)
- [Riley Taylor](https://github.com/TaylorMater)
- [Rafael Realyvazquez](https://github.com/realyvazquez7)
## Code Sources
- [loop through objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
- [Select box styling](https://codepen.io/raubaca/pen/bGWmZje)
- [Tectonic plates coordinates](https://github.com/fraxen/tectonicplates)
- [sort object by values](https://stackoverflow.com/questions/1069666/sorting-object-property-by-values)