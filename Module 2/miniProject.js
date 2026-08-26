//mini project
let students = [
    { id: 101, name: "Rahim", age: 20, department: "CSE" },
    { id: 102, name: "Karim", age: 22, department: "EEE" },
];

function addStudent(name, age, dept) {
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;
    let newStudent = {
        id : newId,
        name : name,
        age : age,
        department : dept,
    }

    students.push(newStudent);
    console.log("Student added successfully!");
}

addStudent("Jahan", 21, "AI");

function getAll() {
    for(const student of students) {
        console.log(student);
    }
}

function findStudent(id) {
    let foundStdnt = null;

    for(const i of students) {
        if(i.id == id) {
            foundStdnt = i; break;
        }
    }

    if(foundStdnt != null) {
        console.log("Student found successfully!");
    } else {
        console.log("Student not exists")
    }
}

findStudent(102);

function deleteStudent(id) {
    let targetStudent = -1;
    for(let i=0; i<students.length; i++) {
        if(students[i].id == id) {
            targetStudent = i; break;
        }
    }

    if(targetStudent != -1) {
        let deletedStudent = students.splice(targetStudent, 1);
        console.log(`Deleted student ${deletedStudent[0].name} Id: ${targetStudent} deleted!`)
    } else {
        console.log("404 not found!");
    }
}

deleteStudent(102);
getAll();