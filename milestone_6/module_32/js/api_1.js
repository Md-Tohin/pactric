// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


const url = 'https://jsonplaceholder.typicode.com/todos/1';
// fetch(url)
// .then((response) => {
//     return response.json();
// })
// .then((json) => {
//     console.log(json); 
// })

function loadData(){
    fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))
}

function loadMore(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(data => displayData(data))
}

function displayData(data){
    const ol = document.getElementById('allUsers');
    for(const user of data){        
        const newLi = document.createElement('li');
        newLi.innerText = user['name'];
        ol.appendChild(newLi);
    }   
}
