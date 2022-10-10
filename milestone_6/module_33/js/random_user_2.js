
const loadUsers = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then(resp => resp.json())
    .then(data => console.log(data.results[0]))
    .catch(error => {
        console.log(error);
    })
}

const loadUserAsync = async() => {
    const url = 'https://randomuser.me/api/?gender=female';
    try{
        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data.results[0]);
    }
    catch(error){
        console.log(error);
    }
    
}

loadUserAsync();
// loadUsers();