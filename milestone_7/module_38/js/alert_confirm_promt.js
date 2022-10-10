const getMessage = () => {
    alert('Hey, Good Morning !!');
    helpMe();
}

const helpMe = () => {
    const isTrue = confirm('Please, can you help me ?');
    if (isTrue) {
        getUserAnswar();
    }
}

const getUserAnswar = () => {
    const name = prompt('Say your name please.');
    if (!! name) {
        alert(`Thank you ${name}, No more to day. Next time i will text you tommorow. Goodbye.`);        
    }
}