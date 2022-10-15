import logo from './logo.svg';
import './App.css';

const name = 'MD. Tohin'
const person = [
  { name: 'Kamal', job: 'Web Designer', address: { country: 'Bangladesh', division: 'Dhaka', district: 'Jamalpur' }, age: 25 },
  { name: 'Happy', job: 'Web Developer', address: { country: 'India', division: 'Delli', district: 'Kachpur' }, age: 35 },
  { name: 'Mina', job: 'Garphic Design', address: { country: 'Napal', division: 'New paepol', district: 'Sreepur' }, age: 20 },
  { name: 'Hamidul', job: 'App Developer', address: { country: 'Bangladesh', division: 'Barishal', district: 'Shukhipur' }, age: 45 },
  { name: 'Rubel', job: 'Degital Marketer', address: { country: 'Canada', division: 'Barham', district: 'Solimpur' }, age: 28 },
  { name: 'Mahbub', job: 'SEO Expart', address: { country: 'Australia', division: 'Hammam', district: 'Rupayan' }, age: 25 },
];

const friends = [
  { name: 'Kamal', job: 'Web Designer', address: { country: 'Bangladesh', division: 'Dhaka', district: 'Jamalpur' }, age: 25 },
  { name: 'Happy', job: 'Web Developer', address: { country: 'India', division: 'Delli', district: 'Kachpur' }, age: 35 },
  { name: 'Mina', job: 'Garphic Design', address: { country: 'Napal', division: 'New paepol', district: 'Sreepur' }, age: 20 },
  { name: 'Hamidul', job: 'App Developer', address: { country: 'Bangladesh', division: 'Barishal', district: 'Shukhipur' }, age: 45 },
  { name: 'Rubel', job: 'Degital Marketer', address: { country: 'Canada', division: 'Barham', district: 'Solimpur' }, age: 28 },
  { name: 'Mahbub', job: 'SEO Expart', address: { country: 'Australia', division: 'Hammam', district: 'Rupayan' }, age: 25 },
];

// {
//   for(let i = 0; i < friends.length; i++){
//     const friend = friends[i];
//     console.log(friend);
//   }
// }


const commonStyle = {
  color: 'black',
  background: 'aqua',
  borderRadius: '10px',
  fontSize: '16px',
  padding: '10px 20px'
}

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="container">
          <h1>This is React App </h1>
          <p style={commonStyle}>Created by:- {name}</p>
          <p style={commonStyle}>Designation:- {person.job}</p>
          <p style={{ color: 'white', background: 'tomato', fontSize: '16px', padding: '10px 20px', borderRadius: '10px', }}>Address:- {person?.address?.district}, {person?.address?.division}, {person?.address?.country}.</p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      {/* Team Section  */}

      <SectionTitle Title="Team Section" Subtitle="This is our Team members"></SectionTitle>
      <div className="person-container">
        <Person name={person[0].name} age={person[0].age} job={person[0].job} address={person[0].address}></Person>
        <Person name={person[1].name} age={person[1].age} job={person[1].job} address={person[1].address}></Person>
        <Person name={person[2].name} age={person[2].age} job={person[2].job} address={person[2].address}></Person>
        <Person name={person[3].name} age={person[3].age} job={person[3].job} address={person[3].address}></Person>
        <Person name={person[4].name} age={person[4].age} job={person[4].job} address={person[4].address}></Person>
        <Person name={person[5].name} age={person[5].age} job={person[5].job} address={person[5].address}></Person>
      </div>

      {/* Friend Section  */}
      <SectionTitle Title="Service Section" Subtitle="This is our service categories"></SectionTitle>
      <div className="person-container">
        {friends.map(friend => <Service friend={friend}></Service>)}
      </div>

    </div>
  );
}

function SectionTitle(props) {
  const { Title, Subtitle } = props;
  return (
    <div className="headding-section">
      <h1 className="title">{Title}</h1>
      <p className="sub-title">{Subtitle}</p>
    </div>
  )
}

function Person(props) {
  const { name, age, job, address } = props;
  // console.log(props);
  return (
    <div className="person">
      <h2>Name: {name}</h2>
      <p>Age: {age} Years</p>
      <p>Job: {job}</p>
      <p>Adderss: {address.district}, {address.division}, {address.country}</p>
    </div>
  )
}

function Service(props) {
  const { name, age, job, address } = props.friend;
  return (
    <div className="person">
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Job: {job}</p>
      <p>Adderss: {address.district}, {address.division}, {address.country}</p>
    </div>
  )
}

export default App;
