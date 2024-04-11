// Function to fetch JSON data from the server
function fetchData() {
    fetch('devs/rafael/static/js/disaster_cost.json') // Update the path to your JSON file
        .then(response => response.json())
        .then(data => {
            // Process the data and create the Plotly visualization
            createPlot(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

// Function to create the Plotly visualization
function createPlot(data) {
    // Extract necessary data from the JSON
    const xValues = data.map(entry => entry['Region'] + ': ' + entry['Disaster Type']);
    const yValues = data.map(entry => entry['Total Cost']);

    // Create the Plotly trace
    const trace = {
        x: xValues,
        y: yValues,
        type: 'bar'
    };

    // Define layout options
    const layout = {
        title: 'Total Cost by Region and Disaster Type',
        xaxis: { title: 'Region and Disaster Type' },
        yaxis: { title: 'Total Cost (\'000 US$)' }
    };

    // Plot the data in the 'plotDiv'
    Plotly.newPlot('plotDiv', [trace], layout);
}

// Call the fetchData function when the page loads
document.addEventListener('DOMContentLoaded', fetchData);
