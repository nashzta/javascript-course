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

//* CODING CHALLENGE 2
const images = document.querySelector('.images');
let imgEl;
function wait(seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
}

function createImage(imgPath) {
  return new Promise(function (res, rej) {
    const img = document.createElement('img');
    img.src = imgPath;

    img.addEventListener('load', () => {
      images.append(img);
      res(img);
    });

    img.addEventListener('error', event => rej(event));
  });
}

// createImage('./img/img-1.jpg')
//   .then(img => {
//     imgEl = img;
//     return wait(2);
//   })
//   .then(() => {
//     imgEl.style.display = 'none';
//     return createImage('./img/img-2.jpg');
//   })
//   .then(img => {
//     imgEl = img;
//     return wait(2);
//   })
//   .then(() => {
//     imgEl.style.display = 'none';
//     return createImage('./img/img-3.jpg');
//   })
//   .catch(err => console.error(err));

//* CHALLENGE 3

const loadNPause = async function () {
  try {
    let img = await createImage('./img/img-1.jpg');
    await wait(2);

    imgEl = img;
    imgEl.style.display = 'none';

    img = await createImage('./img/img-2.jpg');
    await wait(2);

    imgEl = img;
    imgEl.style.display = 'none';

    img = await createImage('./img/img-3.jpg');
    await wait(2);
  } catch (error) {
    console.log(error);
  }
};

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async img => {
      return await createImage(img);
    });

    const imgEl = await Promise.all(imgs);
    imgEl.forEach(img => img.classList.add('parallel'));
    return imgEl;
  } catch (err) {
    console.log(err);
  }
};

loadAll(['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']);
