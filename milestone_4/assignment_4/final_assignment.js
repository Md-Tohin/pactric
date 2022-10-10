//  Assignment No:- 01
function radianToDegree(radian){

    // Validation 
    if (typeof radian !== 'number') {
        return 'Please Enter Valied Number!';
    }

    const pi = Math.PI;
    const degree = (180 / pi) * radian;
    return parseFloat(degree.toFixed(2));
}

radianToDegree(10);

//  Assignment No:- 02
function isJavaScriptFile(str){

    // Validation 
    if (typeof str !== 'string') {
        return 'Please Enter Valied File Name!';
    }
    
    const checkfileExtension = str.endsWith('.js');
    return checkfileExtension;
} 

isJavaScriptFile('app.js');

//  Assignment No:- 03
function oilPrice(diesel, petrol, octane){

    // Validation 
    if ( (typeof diesel !== 'number') || (typeof petrol !== 'number') || (typeof octane !== 'number') ) {
        return 'Please Enter Valied Number!';
    }

    const dieselPerPrice = 114;
    const petrolPerPrice = 130;
    const octanePerPrice = 135;

    const dieselCost = dieselPerPrice * diesel;
    const petrolCost = petrolPerPrice * petrol;
    const octaneCost = octanePerPrice * octane;

    const totalCost = dieselCost + petrolCost + octaneCost;
    return totalCost;
}

oilPrice(0, 5, 2);

//  Assignment No:- 04
function publicBusFare(peopleNumber){

    // Validation 
    if (typeof peopleNumber !== 'number') {
        return 'Please Enter Valied Number!';
    }

    const busRemaining = peopleNumber % 50;
    const microBusRemaining = busRemaining % 11;

    const ticketPerPrice = 250;

    const totlaPublicBusCost = microBusRemaining * ticketPerPrice;    

    return totlaPublicBusCost;
}

publicBusFare(65);

//  Assignment No:- 05
function isBestFriend(friend1, friend2){
    
    // Validation 
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

isBestFriend(friend1, friend2);



