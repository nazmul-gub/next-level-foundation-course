//foreach, map

//foreach -> can't return

let fruits = ["Apple", "Banana", "Mango", "jackfruit"];
// let newFruits = fruits.forEach((f, idx) => {
//     console.log(`${idx+1} : ${f}`);
// });

// console.log(newFruits);

let newFruits2 = fruits.map((f) => f.toLowerCase());
// console.log(newFruits2);

let customFruits = fruits.filter((f) => f.length > 5);
// console.log(customFruits);


//find

let students = [
  { name: "Rahim", marks: 85 },
  { name: "Karim", marks: 85 },
  { name: "Fahim", marks: 90 },
];

let Fruits = ["Apple", "Banana", "Mango", "jackfruit"];

let cFruits = Fruits.find((f) => f.length > 5);
// console.log(cFruits);


let findMango = Fruits.includes("Mango");
// console.log(findMango);

//some

// let studentCheck = students.some((s) => s.marks > 80);
// console.log(studentCheck);

let studentCheck = students.every((s) => s.marks > 80);
console.log(studentCheck);