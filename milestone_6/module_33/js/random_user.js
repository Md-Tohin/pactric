
const loadUser = () => {
    fetch('https://randomuser.me/api/?results=15')
    .then(resp => resp.json())
    .then(data => displayUser(data))
} 

const displayUser = users => {
    const usersArea = document.getElementById('user-container');
    for(const user of users.results){
        const newUser = document.createElement('div');
        newUser.classList.add('user')
        const fullName = `${user.name.title} ${user.name.first} ${user.name.last}` ;
        newUser.innerHTML = `
            <h3>User Name : ${fullName}</h3>
            <p>User Email : ${user.email}</p>
            <p>User Info : </p>
        `;  
        usersArea.appendChild(newUser);
        // console.log(fullName);
    }
    // console.log(users.results);
}