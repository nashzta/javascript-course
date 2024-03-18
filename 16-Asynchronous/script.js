'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.stye.opacity = 1;
};

const renderCountry = function (data, className = '') {
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
  // countriesContainer.style.opacity = 1;
};

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

/*
getContryAndNeighbour('Peru');
 */

//* Promises and Fetch Api

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// request.send();

// const request = fetch(`https://restcountries.com/v3.1/name/${country}`);

//* Consuming  promises

// const request = fetch(`https://restcountries.com/v3.1/name/portugal`);
// console.log(request);

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} ${response.status}`);
    return response.json();
  });
};

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json())
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) return;
//       //* Chaining promises
//       // Country 2
//       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data[0], 'neighbour'))
//     //* handling rejected promises
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];

//       if (!neighbour) throw new Error('No neighbour found!');

//       //* Chaining promises
//       // Country 2
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         'Country not found'
//       );
//     })
//     .then(data => renderCountry(data[0], 'neighbour'))
//     //* handling rejected promises
//     .catch(err => {
//       console.error(`${err} 💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
//     })
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// };

// btn.addEventListener('click', function () {
//   getCountryData('portugal');
// });

//* EVENT LOOP IN PRACTICE
//1
// console.log('Test start');

// //4
// setTimeout(() => {
//   console.log('0 sec timer');
// }, 0);

// //3
// Promise.resolve('Resolved promise 1').then(res => console.log(res));

// Promise.resolve('Resolved promise 2').then(res => {
//   // for (let i = 0; i < 1; i++) {}
//   console.log(res);
// });

// //2
// console.log('Test end');

//* Building a simple promise
// const lotteryPromise = new Promise(function (resolve, reject) {
//   if (Math.random() >= 0.5) {
//     resolve('You WIN 💰');
//   } else {
//     reject(new Error('You lost your money 💩'));
//   }
// });

// lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Function with return promise - promisifying
// function wait(seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// }

// wait(1)
//   .then(() => {
//     console.log('I waited for 1 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 2 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 3 seconds');
//     return wait(1);
//   })
//   .then(() => {
//     console.log('I waited for 4 seconds');
//   });

// setTimeout(() => {
//   console.log('1 second passed');
//   setTimeout(() => {
//     console.log('2 second passed');
//     setTimeout(() => {
//       console.log('3 second passed');
//       setTimeout(() => {
//         console.log('4 second passed');
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Instant reject or resolve
// Promise.resolve('abc').then(x => console.log(x));
// Promise.reject(new Error('Problem!')).catch(x => console.error(x));

//* Promisifying the geolocation

const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

// getPosition().then(pos => console.log(pos));

const api_key = '872243342591832658953x113537';
function whereIam() {
  getPosition()
    .then(pos => {
      const { latitude: lat, longitude: lng } = pos.coords;
      return fetch(
        `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${api_key}`
      );
    })
    .then(res => {
      if (!res.ok) throw new Error(`Lat and Lng are wrong! ${res.status}`);
      return res.json();
    })
    .then(data => {
      const { city, country } = data;
      console.log(`You in ${city}, ${country}`);

      return fetch(`https://restcountries.com/v3.1/name/${country}`);
    })
    .then(res => {
      if (!res.ok) throw new Error(`Country not found: ${res.status}`);
      return res.json();
    })
    .then(data => renderCountry(data[0]))
    .catch(error => console.error(`Error: ${error.message}`))
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
}

btn.addEventListener('click', whereIam);

//* CONSUMING PROMISES WITH ASYNC/AWAIT

const whereIam2 = async function () {
  //* Error handling with try...catch
  try {
    const {
      coords: { latitude: lat, longitude: lng },
    } = await getPosition();

    const geoRes = await fetch(
      `https://geocode.xyz/${lat},${lng}?geoit=json&auth=${api_key}`
    );
    if (!geoRes.ok) throw new Error('Problem getting location data');

    const { country, city } = await geoRes.json();

    const countryRes = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );

    if (!countryRes.ok) throw new Error('Problem getting country');

    const countryData = await countryRes.json();

    renderCountry(countryData[0]);
    countriesContainer.style.opacity = 1;
    console.log('Finished');
    //* Returning values from async functions
    return `You are in ${city}, ${country}`;
  } catch (err) {
    console.error(err);
    renderError(`Something wrong: ${err} 💥`);
    throw new Error(err.message);
  }
};

// console.log('1: Will get location');
// whereIam2()
//   .then(city => console.log(city))
//   .catch(err => console.error(err.message));
// console.log('2: Finished getting location');

countriesContainer.style.opacity = 1;

// (async function () {
//   try {
//     const city = await whereIam2();
//     console.log(city);
//   } catch (err) {
//     console.error(err);
//   }
// })();

// const get3Countries = async function (c1, c2, c3) {
//   try {
//     //* Running promises in parallel
//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`),
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`),
//     ]);

//     console.log(data.map(d => d[0].capital));
//   } catch (err) {
//     console.error(err);
//   }
// };

// get3Countries('peru', 'argentina', 'brasil');

//* Other promise combinators: race, allsettled and any

// Promise.race -> return the result winner
(async function () {
  const res = await Promise.race([
    getJSON(`https://restcountries.com/v3.1/name/italy`),
    getJSON(`https://restcountries.com/v3.1/name/peru`),
    getJSON(`https://restcountries.com/v3.1/name/france`),
  ]);

  console.log(res[0]);
})();

const timeout = function (s) {
  return new Promise(function (res, rej) {
    setTimeout(() => {
      rej(new Error('request took too long'));
    }, s * 1000);
  });
};

Promise.race([
  getJSON(`https://restcountries.com/v3.1/name/tanzania`),
  timeout(0.1),
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));

// Promise.allSettled -> returns all results regardless of rejection
Promise.allSettled([
  Promise.resolve('Success 1'),
  Promise.reject('Error'),
  Promise.resolve('Success 2'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));

// Promise.any -> returns the result ignoring the rejected ones
Promise.allSettled([
  Promise.resolve('Success 1'),
  Promise.reject('Error'),
  Promise.resolve('Success 2'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));
