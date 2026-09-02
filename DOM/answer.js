// //Question 01

// function describeValue(value) {
//     if(value) {
//         return `${typeof(value)} | truthy`;
//     } else {
//         return `${typeof(value)} | falsy`;
//     }
// }

// //testCases
// console.log(describeValue(NaN));
// console.log(describeValue(""));
// console.log(describeValue(25));
// console.log(describeValue(undefined));
// describeValue("hello");


//Question 2

function getDayType(value) {
    switch (value) {
        case "Friday":
        case "friday":
        case "FRIDAY":
        case "Saturday":
        case "saturday":
        case "SATURDAY":
            return "Weekend";
            break;
        case "Sunday":
        case "SUNDAY":
        case "sunday":
        case "Monday":
        case "monday":
        case "MONDAY":
        case "Tuesday":
        case "tuesday" :
        case "TUESDAY":
        case "Wednesday":
        case "wednesday":
        case "WEDNESDAY":
        case "Thursday":
        case "THURSDAY":
        case "thursday":
            return "Working Day"; break;
        default:
            return "Invalid Day";
            break;
    }
}

//test case for question 2
console.log(getDayType("Friday"));
console.log(getDayType("friday"));
console.log(getDayType("MONDAY"));
console.log(getDayType("Bandarban"));
