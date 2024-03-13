//* CHALLENGE 1

// const api_key = '872243342591832658953x113537';
// function whereIam(lat, lng) {
//   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=${api_key}`)
//     .then(res => {
//       if (!res.ok) throw new Error(`Lat and Lng are wrong! ${res.status}`);
//       res.json();
//     })
//     .then(data => {
//       const { city, country } = data;
//       console.log(`You in ${city}, ${country}`);

//       return fetch(`https://restcountries.com/v3.1/name/${country}`);
//     })
//     .then(res => {
//       if (!res.ok) throw new Error(`Country not found: ${res.status}`);
//       res.json();
//     })
//     .then(data => renderCountry(data[0]))
//     .catch(error => console.error(`Error: ${error.message}`))
//     .finally(() => {
//       countriesContainer.style.opacity = 1;
//     });
// }

// whereIam(-33.933, 18.474);
