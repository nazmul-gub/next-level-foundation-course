//rest

//function

function add(...numbers) {
    let total = 0;
    for (const n of numbers) {
        total += n;
    }
    return total;
}

// console.log(add(1,2,3,4,5))

//object

const obj = {
    name : "Rakib",
    age : 90,
    address : "Dhaka",
    occupation : "Developer",
}

const {name, ...remaining} = obj; //exclude name;
// console.log(name, remaining);

//array

const arr = [1,2,3,100,200];

const [ , , , ...rest] = arr;
// console.log(rest)

function something(one, ...remaining) {
    console.log(one, remaining);
}

something("first", 1,2,3,4)