//spread operator
//let newArr = [...oldArr]
//let newObj = {...oldObj}

let cart = ["Fruits" , "Rice"];
let cart2 = [...cart, "Egg"];

// console.log(cart);
// console.log(cart2);

const personalInfo = {
    name : "Jahan",
    age : 20,
}

const contactInfo = {
    email : "jahan@gmail.com",
    zip : 1211,
}

const fullProfile = {
    ...personalInfo, ...contactInfo
}

// const adminProfile = {
//     ...fullProfile, "IsAdmin"
// }

console.log(fullProfile);