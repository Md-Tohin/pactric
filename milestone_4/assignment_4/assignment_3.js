
function oilPrice(diesel, petrol, octane){

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

const output = oilPrice(0, 5, 2);
console.log(output);