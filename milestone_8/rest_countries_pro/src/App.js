import "./App.css";
import React, { useEffect, useState } from "react";
import Country from "./components/Country/Country";

function App() {
	return (
		<div className="App">
			<div className="main-container">
				<Country></Country>
				{/* <SectionTitle></SectionTitle> */}
				<LoadCountries></LoadCountries>
			</div>
		</div>
	);
}

// function SectionTitle() {
//   return <h1 className="section-title">All Countries Here....</h1>;
// }

function LoadCountries() {
	const [countries, setCountries] = useState([]);
	useEffect(() => {
		fetch("https://restcountries.com/v3.1/all")
			.then((resp) => resp.json())
			.then((data) => setCountries(data));
	}, []);

	return (
		<div className="countries-container">			
			{countries.map((country) => (
				<DisplayCountries key={country.cca3} country_details={country}></DisplayCountries>
			))}
		</div>
	);
}

function DisplayCountries(props) {
	console.log(props.country_details);
	const { name, flags, capital } = props.country_details;
	return (
		<div className="country">
			<img src={flags.png} alt="Flag" />
			<h1>Name: {name.common}</h1>
			<p>Capital: {capital}</p>
		</div>
	);
}

export default App;
