
function isBestFriend(friend1, friend2){
    
    if ( (typeof friend1.name !== 'string') || (typeof friend1.friend !== 'string') || (typeof friend2.name !== 'string') || (typeof friend2.friend !== 'string') ) {
        return 'Please Enter Valied Name !';
    }

    if ((friend1.name === friend2.friend) && (friend2.name === friend1.friend)) {
        return true
    } else {
        return false;
    }
}

friend1 = { name: 'abul', friend: 'babul'};
friend2 = { name: 'babul', friend: 'babul'};

const output = isBestFriend(friend1, friend2);
console.log(output);