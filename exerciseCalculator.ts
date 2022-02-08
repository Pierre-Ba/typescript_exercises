interface weeklyReport {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
    target: number;
    average: number;
}

const calculateAverage = (arr: number[]): number => {
    const sum = arr.reduce((a, b) => a + b, 0);
    let result = sum / arr.length
    return result; 
    
}

const calculateTrainingDays = (arr: number[]): number => {
    let arrWithoutOffDays = arr.filter(item => item !== 0);
    return arrWithoutOffDays.length;
}

const calculateExercises = (dailyHours: number[], dailyTarget: number): weeklyReport => {
const periodLength = dailyHours.length;
const target = dailyTarget;
console.log('periodLength: ', periodLength);
console.log('target: ', target);

const average = calculateAverage(dailyHours);
console.log('average: ', average);

const trainingDays = calculateTrainingDays(dailyHours);
console.log('training days: ', trainingDays);

let success;
if (dailyTarget < average) {
     success = false
} else {
     success = true;
}
console.log('success: ', success);
let index = average - target;

let rating;
let ratingDescription;

if(index > 0) {
    rating = 3;
    ratingDescription = "Great job my boy";
} else if (index < 0 && index > -1) {
    rating = 2;
    ratingDescription = "Not too bad but could be better";
} else if (index < -1) {
    rating = 1;
    ratingDescription = "You sucked this week, I'm sorry but that's the truth"
}

return {
    periodLength: periodLength,
    trainingDays: trainingDays,
    success: success,
    rating: rating,
    ratingDescription: ratingDescription,
    target: target,
    average: average,
}
}

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));

