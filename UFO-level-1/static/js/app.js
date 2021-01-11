// from data.js
var ufoData = data;
console.log(ufoData);

//**NOTES */
// 2) get date to display all dates in first column
// 3) add the rest of the columns after date working
// 1) for date match: if input date = date in dateTime => return
// all rows with that date.


// Create a function to show only date
// function dateTime(day) {
//     return day.datetime;
// }

// var dateOnly = ufoData.map(dateTime);
// console.log(dateOnly)

// Append new data to table body row
// var trow = tbody.append("tr").text(dateOnly[0])




// Create function to iterate through each sighting
function showUfo(ufoSighting) {

    // Select table body
    var table = d3.select("#ufo-table");
    var tbody = table.select("tbody");
    tbody.text("");

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
};

// Display all data
showUfo(ufoData);






