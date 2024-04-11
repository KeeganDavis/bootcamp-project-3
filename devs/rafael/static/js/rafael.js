d3.json("path/to/emdat_cleaned.json").then(function(data) {
  // Step 3: Filter out major cities and calculate population and disaster counts
  let citiesData = {};

  data.forEach(function(entry) {
      // Filter out major cities based on your criteria
      // For example, consider only cities with populations above a certain threshold
      // You can adjust this condition based on your specific requirements
      if (entry.Population > 1000000) {
          let cityKey = entry.City;

          // Initialize city data if not already present
          if (!citiesData[cityKey]) {
              citiesData[cityKey] = {
                  population: 0,
                  disasterCount: 0
              };
          }

          // Accumulate population and disaster count for each city
          citiesData[cityKey].population += entry.Population;
          citiesData[cityKey].disasterCount++;
      }
  });

  // Step 4: Prepare data for bubble chart
  let bubbleData = Object.keys(citiesData).map(function(city) {
      return {
          city: city,
          population: citiesData[city].population,
          disasterCount: citiesData[city].disasterCount
      };
  });

  // Step 5: Create bubble chart using Plotly.js
  let trace = {
      x: bubbleData.map(function(d) { return d.population; }),
      y: bubbleData.map(function(d) { return d.disasterCount; }),
      mode: 'markers',
      marker: {
          size: bubbleData.map(function(d) { return Math.sqrt(d.population); }), // Adjust marker size based on population
          color: 'rgba(255, 100, 102, .7)', // Adjust marker color if needed
          opacity: 0.5
      },
      type: 'scatter',
      text: bubbleData.map(function(d) { return d.city; })
  };

  let layout = {
      title: 'Major Cities Population vs Natural Disasters',
      xaxis: {
          title: 'Population'
      },
      yaxis: {
          title: 'Number of Natural Disasters'
      }
  };

  Plotly.newPlot('bubble-chart', [trace], layout);
}).catch(function(error) {
  console.error('Error loading JSON data:', error);
});