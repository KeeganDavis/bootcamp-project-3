### Limitations

The geographic/population data used is from 2020, per the git history of the repo's that hosted them. The original source is purported to be the world bank, and cursory analysis showed that the numbers seemed to agree with that, but ultimately the auxillary data was not scraped from an official source. 

Additionally, this metric doesn't tell us exactly what we wanted. We are evaluating all disasters in a country over about a 20 year period (~2000-2018), but taking the population for those countries only at the end of said period (2020). Populations have shifted in that time frame, so a mean population perhaps would have been a better metric. Surface area is more static however, so it is doubtful there would have been significant changes needed there. 


### Analysis of Disaster Data Coordinated with Geographic National Data

The only major correlation between population, population density, and surface area of countries with their corresponding number of disasters in our data set existed between population and number of disasters. With and $R^2$ of $~0.65$. This makes sense I think - for the disasters to be included in our dataset, they needed to reach a criteria on size/affectation of people. So if you had more people you would certainly anticipate more chances for disasters.

I had anticipated population density and surface area to also correlate well with disaster count, and surprisingly that was not the case at all. Factors like proximity to warm waters, proximity to fault lines, elevation, weather patterns, and disaster reporting infrastructure are all likely major correlating factors that make population density and surface area less effective. 

In that same vein, we notice that most of the highest countries by disaster counts per capita and per area are island countries in the Pacific/Carribean, being more prone to major flooding, storms, and earthquakes, but are also over-expressed due to their much smaller populations. The countries with fewer incidents per capita had massive populations typically in comparison, but were also located away from active coasts, with large interiors and far from particularly active fault lines. 

The conclusion is that population correlates well with disaster frequency of a country, but country size and density are less capable predictors. Annual rainfall totals, max daily rainfall, and latitude/longitude are probably far better predictors of disaster frequency of a country, but that requires more analysis and research to corroborate. 
