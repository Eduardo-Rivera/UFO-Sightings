// from data.js
var tableData = data;

//select table body
var tbody = d3.select("tbody");

// console.log the ufo data from data.js
console.log(tableData);

// loop through 'data' and console.log each ufo sightings object 
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
});

// Append 'tr' for weather report
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
});

// Print Object.entries by using Console.log
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");

    Object.entries(ufoReport).forEach(function([key,value]) {
        console.log(key,value);
    })
})

// Append cell data with UFO Sighting values
tableData.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append cell for each value
        // in the ufo sighting object
        var cell = row.append("td");
        cell.text(value);
    });
}); 

// Select  filter button
var filter = d3.select("#filter-btn");

filter.on("click", function() {

    d3.event.preventDefault();

    var inputElement = d3.select("#datetime", "#city", "#state", "#country", "#shape");
    
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    // console.log(tableData);

    var filterData = tableData.filter(sighting => sighting.datetime === inputValue);
    var filterData = tableData.filter(sighting => sighting.city === inputValue);
    var filterData = tableData.filter(sighting => sighting.state === inputValue);
    var filterData = tableData.filter(sighting => sighting.country === inputValue);
    var filterData = tableData.filter(sighting => sighting.shape === inputValue);

    console.log(filteredData);

    // Clear "tbody" for new data
    var tbody = d3.select("tbody");

    tbody.html("");

    // append filtered data to table

    filteredData.forEach(function(ufoReport) {
        console.log(ufoReport);
        var row = tbody.append("tr");
        Object.entries(ufoReport).forEach(function([key, value]) {
            console.log(key, value);
            // add cell to the row for each value
            var cell = row.append("td");
            cell.text(value);
        });
    });
});