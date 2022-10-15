import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <div className="container headding-section wd-30">
        <h1>All Users Here</h1>          
      </div>
      <LoadUsers></LoadUsers>
    </div>
  );
}

function LoadUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
  }, []);

  return (
    <div className="person-container">
      {
        users.map(user => <User userDetails={user}></User>)
      }
    </div>
  )
}

function User(props) {
  const {name,username, email, phone, website, address, company} = props.userDetails;
  console.log(props.userDetails);
  return (
    <div className="person">
      <h2>Name: {name}</h2>
      <p>User Name: {username}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <p>Website: {website}</p>
      <p>Company: {company.name}</p>
      <p>Adderss: {address.street}, {address.city}.</p>
    </div>
  )
}

export default App;
