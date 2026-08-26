const student = {
    name : "Rahim",
    age : 20,
    address : "Patuakhali"
}

//old
// console.log(student.name)

//modern js
const {name, age, address} = student;
// console.log(age);

const student1 = {
    name : "fahim",
    age : 21,
    address : {
        city : "Demra", zip : 1212,
    }
}

// const {name, age, address} = student1;

//nested name and alias
const {name : stdName, address: {city, zip}} = student1;
// console.log(stdName, city)

const color = ["Red", "Green", "Blue"];

const [, second, ] = color;
// console.log(second);

const student2 = {
    name : "Nazmul",
    age : 25,
    address : {
        city : "Barisal",
        zip : 1213,
    },
    hobbies : ["Gardening", "Painting"],
}

const {name : student2Name, age: student2Age, address: {city : student2City, zip : student2Zip}, hobbies : [firstHobby , secondHobby]} = student2;

// console.log(student2City, secondHobby)

const ar2 = ["test-1", ["test-100", "test-300"]];
const [, [,test]] = ar2;
console.log(test);