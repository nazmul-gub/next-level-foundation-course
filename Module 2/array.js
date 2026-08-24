let names = ["Shafayat", "Mir", "Imun", "Ravi", "Mezba"];

names.push("Nazmul");
// console.log(names);
names.pop()

names.unshift("hasan");
// console.log(names);
names.shift();
// console.log(names);

// let numbers = [10, 20, , 30]
// numbers[10] = 100;
// console.log(numbers.length);

// ["Shafayat", "Mir", "Imun", "Ravi", "Mezba"];
names.splice(1,2,"Jahan");
// console.log(names)

//for of for in loop

// let techStack = ["JS", "TS", "node", "react", "psql"];
// for(const tech of techStack) {
//     console.log(`Learning: ${tech}`);
// }

// let obj = {
//   name: "Mr.X",
//   age: 100,
//   address: "Dhaka",
// };

// for(const i in obj) {
//     console.log(obj[i]);
// }

let user = {
  name: "Shafayat",
  age: 25,
  address: {
    city: "Rajshahi",
    area: "Upashahar",
    zipcode: 6000,
  },
};

let entry = Object.entries(user);
console.log(entry[2][1].city);