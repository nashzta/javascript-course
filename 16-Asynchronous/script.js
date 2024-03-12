'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// API: https://countries-api-836d.onrender.com/countries/

//* First call AJAX:XMLHttpRequest

/* const getContryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `<article class="country">
  <img class="country__img" src="${data.flags.png}" alt="${data.flags.alt}" />
  <div class="country__data">
    <h3 class="country__name">${data.name.common}</h3>
    <h4 class="country__region">${data.capital[0]}</h4>
    <p class="country__row"><span>👫</span>${(
      +data.population / 1000000
    ).toFixed(1)}m people</p>
    <p class="country__row"><span>🗣️</span>${data.languages.spa}</p>
    <p class="country__row"><span>💰</span>${data.capital[0]}</p>
  </div>
</article>`;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};

getContryData('peru');
getContryData('argentina'); */

//* How the web works: requests and responses

//* Welcome to callback hell

/* const renderCountry = function (data, className = '') {
  const html = `<article class="country ${className}">
    <img class="country__img" src="${data.flags.png}" alt="${data.flags.alt}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.common}</h3>
      <h4 class="country__region">${data.capital[0]}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)}m people</p>
      <p class="country__row"><span>🗣️</span>${data.languages.spa}</p>
      <p class="country__row"><span>💰</span>${data.capital[0]}</p>
    </div>
  </article>`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getContryAndNeighbour = function (country) {
  // AJAX call
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    //Render contry (1)
    renderCountry(data);

    // Get neighbour contry (2)

    const [neighbour] = data.borders;
    if (!neighbour) return;

    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);

      renderCountry(data2, 'neighbour');
    });
  });
};

getContryAndNeighbour('Peru');
 */

//* Promises and Fetch Api

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

fetch(`https://restcountries.com/v3.1/name/${country}`);
