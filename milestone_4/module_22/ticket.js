

function ticketPrice(quantity){
    let price = 0;
    if (quantity <= 100) {
        price = quantity * 100;
    }
    else if ( quantity > 100 && quantity <= 200) {
        const discuntQuantity = quantity - 100;
        price = (100 * 100) + (discuntQuantity * 90);    
    }
    else{
        const discuntQuantity = quantity - 200;
        price = (100 * 100) + (100 * 90) + (discuntQuantity * 70);  
    }
    return price;
}

const number = 300;
const totalPrice = ticketPrice(number);
console.log(totalPrice);