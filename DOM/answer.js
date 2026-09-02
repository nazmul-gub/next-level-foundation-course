// //Question 01

function describeValue(value) {
    if(value) {
        return `${typeof(value)} | truthy`;
    } else {
        return `${typeof(value)} | falsy`;
    }
}

//testCases
console.log(describeValue(NaN));
console.log(describeValue(""));
console.log(describeValue(25));
console.log(describeValue(undefined));
describeValue("hello");


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


//question 3

function validateUsername(userName) {
    if(userName.toLowerCase().length < 4) {
        return "Too Short";
    } else if(userName.toLowerCase().includes(" ")) {
        return "No Space Allowed";
    } else if(userName.toLowerCase().includes("admin")) {
        return "Reserved Word";
    } else {
        return "Available";
    }
}

//test cases for question 3
console.log(validateUsername("rahim123"));
console.log(validateUsername("ab"));
console.log(validateUsername("a b"));
console.log(validateUsername("abcd"));
console.log(validateUsername("rahim islam"));
console.log(validateUsername("superadmin99"));
console.log(validateUsername("Admin_Rahim"));


//question 4

function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let amount = 50;

    if (distance > 2) {
        amount += (distance - 2) * 15;
    }
    amount += waitingMinutes*2;

    if(isNight) {
        amount *= 1.20;
    }

    return amount;
}

console.log(getCngFare(5));
console.log(getCngFare(1));
console.log(getCngFare(5, false, 10));
console.log(getCngFare(5, true, 10));
console.log(getCngFare(5, true));


// question 5

const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if(runsNeeded <= 0) {
        return "Won";
    }

    if(ballsLeft <= 0) {
        return "Lost";
    }

    const requiredRate = (runsNeeded / ballsLeft) * 6;

    let verdict;
    if(requiredRate <= 6) {
        verdict = "Comfortable";
    } else if(requiredRate >6 && requiredRate <= 12) {
        verdict = "Tough";
    } else if(requiredRate > 12) {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
}

console.log(getChaseVerdict(200, 200, 12));
console.log(getChaseVerdict(200, 190, 0));
console.log(getChaseVerdict(100, 90, 12));
console.log(getChaseVerdict(100, 80, 12));
console.log(getChaseVerdict(100, 70, 12));
console.log(getChaseVerdict(150, 149, 1));