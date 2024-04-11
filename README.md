# Natural Disasters Analysis (2001-2018) 
## Overview

## Data Sources
- [EM-DAT International Disaster Database](https://public.emdat.be/)
- [Socioeconomic Data and Applications Center Geocoded Disasters Dataset (GDIS), v1](https://sedac.ciesin.columbia.edu/data/set/pend-gdis-1960-2018/data-download)
- [Country ISO and Regional Codes](https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes)
- [Country Metrics](https://github.com/samayo/country-json/)
 

## Requirements
- d3 v7
- leaflet JS 1.9.4
- bootstrap 5.3.3
- bokeh js 3.2.1
- apexcharts js 3.48
- pandas 
- pathlib
- bokeh python 3.4
- plotly v2.30.0

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

### Country Level Disaster Analysis

As raw disaster count doesn't actually tell you much about how "dangerous" a country is, we looked at controlling this metric by population and country surface area to try to identify patterns. When controlling for population, note that the less populous island countries dominate the top tail of the spectrum. This points to both the size of population being a factor for disasters per capita (obviously), but also proximity to warm waters, elevation, rainfall, proximity to fault lines, and other geographical patterns common to island countries. 

We notice on the reverse side of the spectrum that countries with relatively large populations dominate. And understandably so, per capita values always reflect population sizes to some extent. But India and China are still not even in the top 3 despite having substantially larger populations than the rest of the world. This points to other factors. Disaster reporting infrastructure could explain some of this. But clearly that can't be the primary determinant, because Sweden consistenly has lower disaster incidence than China, despite China having over 100 times the population of Sweden. China does have a much more spread out population centers, particularly along coasts to warm watered ocean, while Sweden does not have any particular disaster risks that come to mind, and due to a quarter of its citizenry residing in and around one major, fairly safe, municipality in Stockholm, this observation tracks.

When controlling for surface area, note that the smallest countries are over represented, which is understandable. But island countries, which we can hypothesize to be particularly prone to disasters due to elevation, water proximity, and rainfall (among other factors), also happen to be quite small. Thus we would expect island countries to dominate this portion of the spectrum as well. 

Unsurprisingly, Canada and Russia, being the largest two countries, have very few diasters per land area. But these countries are also relatively sparsely populated. Yet even smaller countries like Sweden, Norway, and Egypt show up in this end of the specctrum, which shine out due to lack of exposure to the same risk factors identified with the island countries that are dominating the highest ends of the spectrum. 

Population and disaster count correlated decently well - in part because the disaster criteria essentially demanded that it affect people, so it depended on population intrinsically, even if only a little bit - but less so for surface area and drastically less so for population density, even when two massive outliers - Macao and Hong Kong - were removed. Again that is somewhat expected - we were using these qualities to try to control disaster counts in a way that the variation at the top and bottom of the spectrum could reveal insights into risk factors worth investigating. 
Factors like proximity to warm waters, proximity to fault lines, elevation, weather patterns, and disaster reporting infrastructure are all likely major correlating factors that make population density and surface area less effective. 

While nothing can be conclusively stated with exact confidence, the findings do point us in some future directions, which was the aim of this visualization. The concentration of island countries at the top portions of the spectrum when controlled for population and land area, while expected, does point to some potential risk factors for disasters. Annual rainfall totals, max daily rainfall, proximity to water, elevation, proximity to fault lines, and latitude/longitude are probably far better predictors of disaster frequency of a country, but that requires more analysis and research to corroborate. 


## Limitations and Further Research
- The main limitations of the dataset are the criteria for what is considered a natural disaster by EM-DAT. Disasters were only counted when one of the following criteria are met: 
    - 10 fatalities 
    - 100 affected people
    - A declaration of a state of emergency 
    - A call for international assistance.
- This means this analysis isn't a true analysis of all natural disasters because there could be many disasters that weren't recorded because they didn't match any of the criteria.

- There were other limitations when merging this dataset with other country statistics data. Data on population, population density, and surface area is sourced from the World Bank in 2020, so it is just barely outside of our data set timeline, which came from ~2000-2018. Further, grabbing one data point for populations of countries over a roughly 20 year period loses some significance - perhaps a median or mean population during the time frame could have been chosen instead. 
- A final additional limitation is that coordinating between country statistics, ISO info to provide keys for merging, and the disaster dataset led to some data loss during merging. This certainly could be improved upon, but it was discovered late and can be seen as an area for future development. 

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

-------------------------

## Other Sources



To help with merging data for country visualizations using emdat/gdis merged data.
https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes

To grab statistics for countries for visualizations. 
https://github.com/samayo/country-json/

To understand the nature of the datasets we were playing with.
https://www.nature.com/articles/s41597-021-00846-6#code-availability

Download link for GDIS data/R files (requires account setup)
https://sedac.ciesin.columbia.edu/data/set/pend-gdis-1960-2018/data-download

Download for EMDAT data (requires account setup)
https://public.emdat.be/


---------------------------------
Misc. Sources for questions and documentation:


country-json/src/country-by-iso-numeric.json at master · samayo/country-json
https://github.com/samayo/country-json/blob/master/src/country-by-iso-numeric.json

ISO 3166-1 alpha-3 - Wikipedia
https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3

ISO 3166-1 numeric - Wikipedia
https://en.wikipedia.org/wiki/ISO_3166-1_numeric

lukes/ISO-3166-Countries-with-Regional-Codes: ISO 3166-1 country lists merged with their UN Geoscheme regional codes in ready-to-use JSON, XML, CSV data sets
https://github.com/lukes/ISO-3166-Countries-with-Regional-Codes


High Level Charts — Bokeh 0.8.2 documentation
https://docs.bokeh.org/en/0.8.2/docs/user_guide/charts.html

bokeh.plotting — Bokeh 3.4.0 Documentation
https://docs.bokeh.org/en/latest/docs/reference/plotting.html

python - How to delete rows from a pandas DataFrame based on a conditional expression - Stack Overflow
https://stackoverflow.com/questions/13851535/how-to-delete-rows-from-a-pandas-dataframe-based-on-a-conditional-expression

python - Bokeh plot regression lines on scatter plot - Stack Overflow
https://stackoverflow.com/questions/54603873/bokeh-plot-regression-lines-on-scatter-plot

python - How to rotate X-axis labels in bokeh figure? - Stack Overflow
https://stackoverflow.com/questions/42354648/how-to-rotate-x-axis-labels-in-bokeh-figure

Styling plot elements — Bokeh 3.4.0 Documentation
https://docs.bokeh.org/en/latest/docs/user_guide/styling/plots.html#ug-styling-plots



---------------
The following four were used for updating the data with Russian Federation data, because it's ISO code was missing from one of the original data stores. We discovered this when analyzing the plots of country disasters per area, where Russia should have been prominent but was not originally there. 

List of countries and dependencies by area - Wikipedia
https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_area

List of ISO 3166 country codes - Wikipedia
https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes

python - Insert a row to pandas dataframe - Stack Overflow
https://stackoverflow.com/questions/24284342/insert-a-row-to-pandas-dataframe

python - Set value for particular cell in pandas DataFrame using index - Stack Overflow
https://stackoverflow.com/questions/13842088/set-value-for-particular-cell-in-pandas-dataframe-using-index

