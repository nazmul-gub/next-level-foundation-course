let cart = [
    { name: "Rice", price: 70, quantity: 5 },
    { name: "Egg", price: 12, quantity: 12 },
    { name: "Milk", price: 90, quantity: 2 },
    { name: "Bread", price: 50, quantity: 3 }
];

// Find the total number of products purchased.
// Find the total bill amount.
// Find the most expensive product (based on price, not total cost)

let totalProducts = 0;
let totalBill = 0;

for(const item of cart) {
    totalProducts += item.quantity;
    totalBill += item.quantity * item.price;
}

// console.log(totalBill, totalProducts);
// { name: "Rice", price: 70, quantity: 5 },
//     { name: "Egg", price: 12, quantity: 12 },
//     { name: "Milk", price: 90, quantity: 2 },
//     { name: "Bread", price: 50, quantity: 3 }
let mostExpensive = cart[0];
for(const i of cart) {
    if(i.price > mostExpensive.price) {
        mostExpensive = i;
    }
}

console.log(`Total Items: ${totalProducts}`);
console.log(`Total Bill: ${totalBill} BDT`);
console.log(`Most Expensive Product: ${mostExpensive.name}`);