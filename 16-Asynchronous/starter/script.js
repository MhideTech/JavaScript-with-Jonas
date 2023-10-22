'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getCountryData = function(country){
    const request = new XMLHttpRequest();
    console.log(request);
    request.open('GET', `https://restcountries.com/v2/name/${country}`);
    request.send();
    
    request.addEventListener('load', function(){
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
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
              </div>
            </article>
        `;
    
        countriesContainer.insertAdjacentHTML('beforeend', html);
        countriesContainer.style.opacity = 1;
    })
}
getCountryData('nigeria')
getCountryData('usa')
getCountryData('canada')
getCountryData('nigeria')
getCountryData('uk')
getCountryData('india')
getCountryData('china')
getCountryData('malta')
getCountryData('turkey')