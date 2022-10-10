
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(resp => resp.json())
    .then(data => displayCountris(data));
}

const displayCountryDetails = country => {
    const flag = country.flags.svg;
    const countryDetailsArea = document.getElementById('country-details');
    countryDetailsArea.innerHTML = `
        <img src="${flag}" alt="" width="400">
    `;
    console.log(country);
}

const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v2/alpha/${code}`;
    fetch(url)
    .then(resp => resp.json())
    .then(data => displayCountryDetails(data))
}


const displayCountris = countries => {
    const countryContainer = document.getElementById('countries-container');
    countries.forEach(country => {
        const countryName = country.name.common;
        const newCountry = document.createElement('div');  
        newCountry.classList.add('country')      
        newCountry.innerHTML = `
            <h3>Name : ${countryName}</h3>
            <h3>Capital: ${country.capital}</h3>
            <button class="btn" onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countryContainer.appendChild(newCountry);
    });
  
}

loadCountries();