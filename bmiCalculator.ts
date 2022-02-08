const calculateBmi = (height: number, mass: number): string => {
 const heightInMeter = height / 100;
 const bmi = mass / Math.pow(heightInMeter, 2);
 console.log(bmi);
 if(bmi < 18.5) {
     return "Not normal(underweight)";
 } else if(bmi >= 18.5 && bmi <= 24.9) {
     return "Normal(normal weight)";
 } else if(bmi >= 25 && bmi <= 29.9) {
     return "Not normal(overweight)";
 } else if(bmi >= 30 && bmi <= 34.9) {
     return "Not normal(obesity class 1)";
 } else if(bmi >= 35 && bmi <= 39.9) {
     return "Not normal(obesity class 2)";
 } else if(bmi >= 40) {
     return "Not normal(obesity class 3)"
 }

}

console.log(calculateBmi(180, 74));