const phones =[
    { name: 'Sumsung', ram:'4Gb', storage: '64GB', price: 20000, color: 'Sliver' },
    { name: 'Nokia', ram:'6Gb', storage: '128GB', price: 50000, color: 'White' },
    { name: 'Oppo', ram:'4Gb', storage: '128GB', price: 10000, color: 'Blue' },
    { name: 'Xoami', ram:'4Gb', storage: '32GB', price: 40000, color: 'Sliver' },
    { name: 'Realmi', ram:'6Gb', storage: '128GB', price: 60000, color: 'Red' },
    { name: 'Walton', ram:'4Gb', storage: '64GB', price: 15000, color: 'Black' },
]

function smallestPrice(phones){
    let smallestPrice = phones[0];
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        if (smallestPrice.price > phone.price) {
            smallestPrice = phone.price;
        }
    }
    return smallestPrice;
}

function totalCost(phones){
    let total = 0;
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        total = total + phone.price;
    }
    return total;
}

const totalPrice = totalCost(phones);
console.log(totalPrice);
