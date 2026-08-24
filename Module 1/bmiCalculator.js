let weight = 70;
let height = 1.8288;

let bmi = weight / (height*height);

if (bmi >= 40) console.log("Obese Class-3");
else if (bmi >= 35) console.log("Obese Class-2");
else if (bmi >= 30) console.log("Obese Class-1");
else if (bmi >= 25) console.log("Overweight");
else if (bmi >= 18.5) console.log("Healthy weight");
else console.log("Underweight!");

console.log("BMI =", bmi.toFixed(2));