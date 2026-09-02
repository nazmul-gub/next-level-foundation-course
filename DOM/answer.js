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

// function getDayType(value) {
//     switch (value) {
//         case "Friday":
//         case "friday":
//         case "FRIDAY":
//         case "Saturday":
//         case "saturday":
//         case "SATURDAY":
//             return "Weekend";
//             break;
//         case "Sunday":
//         case "SUNDAY":
//         case "sunday":
//         case "Monday":
//         case "monday":
//         case "MONDAY":
//         case "Tuesday":
//         case "tuesday" :
//         case "TUESDAY":
//         case "Wednesday":
//         case "wednesday":
//         case "WEDNESDAY":
//         case "Thursday":
//         case "THURSDAY":
//         case "thursday":
//             return "Working Day"; break;
//         default:
//             return "Invalid Day";
//             break;
//     }
// }

// //test case for question 2
// console.log(getDayType("Friday"));
// console.log(getDayType("friday"));
// console.log(getDayType("MONDAY"));
// console.log(getDayType("Bandarban"));


//question 3

// function validateUsername(userName) {
//     if(userName.toLowerCase().length < 4) {
//         return "Too Short";
//     } else if(userName.toLowerCase().includes(" ")) {
//         return "No Space Allowed";
//     } else if(userName.toLowerCase().includes("admin")) {
//         return "Reserved Word";
//     } else {
//         return "Available";
//     }
// }

// //test cases for question 3
// console.log(validateUsername("rahim123"));
// console.log(validateUsername("ab"));
// console.log(validateUsername("a b"));
// console.log(validateUsername("abcd"));
// console.log(validateUsername("rahim islam"));
// console.log(validateUsername("superadmin99"));
// console.log(validateUsername("Admin_Rahim"));


