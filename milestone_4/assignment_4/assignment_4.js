function publicBusFare(peopleNumber){

    if (typeof peopleNumber !== 'number') {
        return 'Please Enter Valied Number!';
    }

    const busRemaining = peopleNumber % 50;
    const microBusRemaining = busRemaining % 11;

    const ticketPerPrice = 250;

    const totlaPublicBusCost = microBusRemaining * ticketPerPrice;    

    return totlaPublicBusCost;
}

const output = publicBusFare(65)
console.log(output);