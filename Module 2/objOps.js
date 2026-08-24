let student = {
    name: "Rahim",
    id: 102,
    marks: {
        bangla: 75,
        english: 82,
        math: 90,
    },
};

//find students avg and state a coclusion
let totalMarks = 0;
let totalSubs = 0;

for (const i in student.marks) {
    totalMarks += student.marks[i];
    totalSubs++;
}

// console.log(totalMarks, totalSubs);
// let avg = (totalMarks / totalSubs).toFixed(2);

// if(avg >= 80) {
//     console.log(`Got a good result with ${avg}% marks!`);
// } else {
//     console.log(`Focus on study!`);
// }

// task: koto gulo item kinechen and koto tk bill hoyeche shese BDT te dekhate hobe print kore

let cart = [
    { name: "Shirt", price: 1200, quantity: 2 },
    { name: "Pants", price: 1800, quantity: 1 },
    { name: "Socks", price: 150, quantity: 3 },
];

let itemsQuantity = 0;
let bills = 0;
for (const items of cart) {
    itemsQuantity += items.quantity;
    bills += items.price * items.quantity;
}

console.log(`Total items: ${itemsQuantity}`);
console.log(`Total bill: ${bills} BDT`);