
const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(resp => resp.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countriesHTML = countries.map(country => getCountryHTML(country));
    const countriesContainer = document.getElementById('countries-container');
    countriesContainer.innerHTML = countriesHTML.join(' ');
}

//  option 02. 
const getCountryHTML = ({name, flags, capital}) => {
    return `
    <div class="country">        
        <img src="${flags.png}" alt="">
        <h3>${name.common}</h3>
        <h5>${capital ? capital[0] : 'not found'}</h5>
    </div>
    `
}

//  Option 01.  
// const getCountryHTML = country => {
//     const {name, flags, capital} = country;
//     return `
//     <div class="country">        
//         <img src="${flags.png}" alt="">
//         <h3>${name.common}</h3>
//         <h5>${capital ? capital[0] : 'not found'}</h5>
//     </div>
//     `
// }

//  default object option 
// const getCountryHTML = country => {
//     return `
//     <div class="country">        
//         <img src="${country.flags.png}" alt="">
//         <h3>${country.name.common}</h3>
//         <h5>${country.capital ? country.capital[0] : 'not found'}</h5>
//     </div>
//     `
// }

loadCountries()