// from data.js
var ufoData = data;
console.log(ufoData);


// Create function to iterate through each sighting, and add to table
function showUfo(ufoSighting) {

    // Select table body
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    tbody.text("");
    var trow = tbody.append("tr")

// Iterate through each sighting and grab column data
    ufoSighting.forEach((ufo) => {
        var trow = tbody.append("tr");
        trow.append("td").text(ufo.datetime);
        trow.append("td").text(ufo.city);
        trow.append("td").text(ufo.state);
        trow.append("td").text(ufo.country);
        trow.append("td").text(ufo.shape);
        trow.append("td").text(ufo.durationMinutes);
        trow.append("td").text(ufo.comments);
})
    // Can i do this instead of the above? Returns "obj obj"
    // ufoSighting.slice(0,7).forEach((ufo) => {
    //     trow.append("td").text(ufo);
    // })
};

// Display all data
showUfo(ufoData);

// Create listeners for form enter and button
d3.select("#filter-btn").on("click", handleSubmit);
d3.select("#ufo-form").on("submit", handleSubmit);

// Input handler
function handleSubmit() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Set input value and get html node, grab value of input
    var inputValue = d3.select("#datetime").node().value;

    // Filter data based on datetime input from user
    var ufoFilter = ufoData.filter((ufo) =>
    ufo.datetime === inputValue);

    console.log(inputValue);

    // Display data on filtered date/time
    showUfo(ufoFilter);

};

