'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
      <article class="country ${className}">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
          <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
      </article>
  `;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(errorMsg);
    return response.json();
  });
};

///////////////////////////////////////
/*
const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  console.log(request);
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log(this);
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const html = `
      <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
          <h3 class="country__name">${data.name}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)}</p>
          <p class="country__row"><span>🗣️</span>${
            data.languages[0].name
          }</p>
          <p class="country__row"><span>💰</span>${
            data.currencies[0].name
          }</p>
        </div>
      </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('nigeria');
getCountryData('usa');
getCountryData('canada');
getCountryData('nigeria');
getCountryData('uk');
getCountryData('india');
getCountryData('china');
getCountryData('malta');
getCountryData('turkey');
*/

// Get country and neighbour using XMLHttpRequest method
/*
const getCountryAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  console.log(request);
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    console.log(this);
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    console.log(data);

    renderCountry(data);

    // Get neighbour country
    const neighbour = data.borders?.[0];
    console.log(neighbour);
    if (!data.borders) return;
    const request2 = new XMLHttpRequest();
    console.log(request2);
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();

    request2.addEventListener('load', function () {
      console.log(this);
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
    });
  });
};

// getCountryAndNeighbour('canada');

*/

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`).then(function (
//     response
//   ) {
//     console.log(response);
//     return response.json();
//   }).then(function([data]){
//     console.log(data);
//     renderCountry(data)
//   })
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(
//       response => {
//         console.log(response);

//         if (!response.ok)
//           throw new Error(`${response.status}, Country not found`);
//         return response.json();
//       }
//       // err => alert(err)
//     )
//     .then(([data]) => {
//       renderCountry(data[0]);
//       const neighbour = data[0].borders?.[0];
//       return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
//     })
//     .then(
//       response => response.json()
//       // err => alert(err)
//     )
//     .then(data => renderCountry(data, 'neighbour'))
//     .catch(err => {
//       console.error(err);
//       renderError(`Something went wrong ${err.message}. Try again`);
//     })
//     .finally(() => (countriesContainer.style.opacity = 1));
// };

// Throwing errors manually
/*
const getCountryData = function (country) {
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then((data) => {
      renderCountry(data[0]);
      const neighbour = data[0].borders?.[0];
      return getJSON(`https://restcountries.com/v2/alpha/${neighbour}`, 'Country not found')
    })
    .then(data => renderCountry(data, 'neighbour'))
    .catch(err => {
      console.error(err);
      console.error(err.message);
      renderError(`Something went wrong ${err.message}. Try again`);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', function () {
  getCountryData('nigeria');
});
*/

// coding challenge #1
/*
const whereAmI = function (lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`).then(res => {
    if (!res.ok) throw new Error(`Problem with geocoding (${res.status})`)
    // console.log(res);
    return res.json();
  }).then(data => {
    // console.log(data);
    console.log(`You are in ${data.city}, ${data.country}`);
    getJSON(
      `https://restcountries.com/v2/name/${data.country}`,
      'Country not found'
    ).then(data => {
      // console.log(data)
      renderCountry(data[0]);
    });
  }).catch(err => {
    // console.error(err)
    console.log(err.message)
  }).finally(() => countriesContainer.style.opacity = 1)
};

whereAmI(52.508, 13.381);
whereAmI(19.037, 72.873);
whereAmI(-33.933, 18.474);
*/


// The event loop in practice
/*
console.log('Test start');
setTimeout(() => console.log('0 sec timer'), 0);
Promise.resolve('Resolved promise 1').then(res => console.log(res))
// promise to further delay setTimeout callback
Promise.resolve('Resolved promise 2').then(res => {
  for(let i = 0; i < 1000; i++){}
  console.log(res);
});
console.log('Test end');
*/


// Building a simple promise
/*
const lotteryPromise = new Promise(function(resolve, reject){
  console.log('Lottery draw is happening');
  setTimeout(() => {
    if(Math.random() >= 0.5){
      resolve('You WIN 💰');
    } else{
      reject(new Error('You lost your money 💩'));
    }
  }, 2000);
});
// consuming a promise
lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisifying setTimeout
const wait = function(seconds){
  return new Promise(function(resolve){
    setTimeout(resolve, seconds * 1000);
  })
}

wait(2).then(() => {
  console.log('I waited for 2 seconds');
  return wait(1);
}).then(() => console.log('I waited for 1 second'))

*/

// Promisifying the Geolocation API
/*
const getPosition = function(){
  return new Promise(function(resolve, reject){
    // navigator.geolocation.getCurrentPosition(position => resolve(position), err => reject(err))
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}

getPosition().then(res => console.log(res)).catch(err => console.error(err))

const whereAmI = function () {
  getPosition().then(pos => {
    const {latitude: lat, longitude: lng} = pos.coords;
    return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
  })
    .then(res => {
      if (!res.ok) throw new Error(`Problem with geocoding (${res.status})`);
      // console.log(res);
      return res.json();
    })
    .then(data => {
      // console.log(data);
      console.log(`You are in ${data.city}, ${data.country}`);
      getJSON(
        `https://restcountries.com/v2/name/${data.country}`,
        'Country not found'
      ).then(data => {
        // console.log(data)
        renderCountry(data[0]);
      });
    })
    .catch(err => {
      // console.error(err)
      console.log(err.message);
    })
    .finally(() => (countriesContainer.style.opacity = 1));
};

btn.addEventListener('click', whereAmI);
*/


// Coding Challenge #2
/*
const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector('.images');

const createImage = function(imgPath){
  return new Promise(function(resolve, reject){
    let image = document.createElement('img');
    image.setAttribute('src', imgPath);

    image.addEventListener('load', function(){
      imgContainer.appendChild(image);
      resolve(image);
    });

    image.addEventListener('error', function () {
      reject(new Error('Image not found'));
    });
  })
}

let currentImg;

createImage('img/img-1.jpg')
  .then(img => {
    currentImg = img;
    console.log('image 1 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  })
  .then(img => {
    currentImg = img;
    console.log('image 2 loaded');
    return wait(2);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
*/


// Consuming promises with AsyncAwait
const getPosition = function () {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

const whereAmI = async function () {
  try {
    // Geolocation
    const position = await getPosition();
    const { latitude: lat, longitude: lng } = position.coords;

    // Reverse geocoding
    const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
    if (!resGeo.ok) throw new Error('Problem getting location data');

    const dataGeo = await resGeo.json();
    console.log(dataGeo);

    // Country data
    const res = await fetch(
      `https://restcountries.eu/rest/v2/name/${dataGeo.country}`
    );

    // FIX:
    if (!res.ok) throw new Error('Problem getting country');

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);
  } catch (err) {
    console.error(`${err} 💥`);
    renderError(`💥 ${err.message}`);
  }
};

whereAmI();