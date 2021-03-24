document.getElementById("countrySubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("countryInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "https://covid-api.mmediagroup.fr/v1/cases?country=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";

      results += '<div class=leftSide>'
      results += '<div class=casesIn>'
      results += '<h2><strong> COVID cases in ' + json.All.country + '</strong></h2>'
      results += '</div>'

      // results += '<div class=population>'
      // results += '<h3>Population:</h3>'
      // results += json.All.population;
      // results += json.All.confirmed;

      results += '<div class=confirmed>'
      results += '<h3>Confirmed Cases:</h3>'
      results += json.All.confirmed;
      results += '</div>'

      results += '<div class="recover">'
      results += '<h3>Recovered:</h3>'
      results += json.All.recovered;
      results += '</div>'
      results += '</div>'

      document.getElementById("countryResults").innerHTML = results;
    });
});



document.getElementById("countrySubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("countryInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "https://covid-api.mmediagroup.fr/v1/history?country=" + value + "&status=recovered";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";

      results += '<div class=halfWidth>'
      results += '<div class=population>'
      results += '<h3>Population:</h3>'
      results += json.All.population;
      results += '</div>'
      results += '</div>'

      results += '<div class=halfWidth>'
      results += '<div class=expectancy>'
      results += '<h3>Life Expectancy:</h3>'
      results += json.All.life_expectancy;
      results += '</div>'
      results += '</div>'
      results += '<br>'
      results += '<br>'
      results += '<br>'
      results += '<br>'
      results += '<br>'
      results += '<br>'
      results += '<br>'


      document.getElementById("historyRecovered").innerHTML = results;
    });
});


document.getElementById("countrySubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("countryInput").value;
  if (value === "")
    return;
  console.log(value);

  const url = "https://covid-api.mmediagroup.fr/v1/vaccines?country=" + value;
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";

      results += '<div class=rightSide>'
      results += '<h2 class=vaccineHeading><strong>Vaccine Statistics</strong></h2>'

      results += '<div class=administered>'
      results += '<h3>Administered Doses of the Vaccine:</h3>'
      results += json.All.administered;
      results += '</div>'

      results += '<div class="fullyVaccinated">'
      results += '<h3>Number of People Who are Fully Vaccinated:</h3>'
      results += json.All.people_vaccinated;
      results += '</div>'

      results += '<div class="partiallyVaccinated">'
      results += '<h3>Number of People Who are Partially Vaccinated:</h3>'
      results += json.All.people_partially_vaccinated;
      results += '</div>'
      results += '</div>'


      document.getElementById("vaccineResults").innerHTML = results;
    });
});
