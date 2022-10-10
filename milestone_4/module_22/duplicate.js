const names = ['Tohin', 'Rucon', 'Habib', 'Tohin', 'Jamal', 'Salam', 'Kamal', 'Jamal', 'Rohim', 'Rohim', 'Habib', 'Tohin', 'Jamal', 'Rohim', 'Halim'];

function removeDuplicate(names){
    const uniquenames = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        if (uniquenames.includes(name) === false) {
            uniquenames.push(name);
        }
    }
    return uniquenames;
}
const unique = removeDuplicate(names);
console.log(unique);