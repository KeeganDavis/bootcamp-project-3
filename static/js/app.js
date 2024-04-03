const url = 'https://keegandavis.github.io/disaster-data-json/emdat_no_drought_or_xtremetemps.json'

d3.json(url).then(data => console.log(data))