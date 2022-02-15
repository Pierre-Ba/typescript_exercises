interface weeklyReport {
    periodLength: number;
    trainingDays: number;
    success: boolean;
    rating: number | undefined;
    ratingDescription: string | undefined;
    target: number;
    average: number;
}

interface targetAndDailyHours {
    dailyTarget: number;
    dailyHours: number[];
}

const checkArguments = (args: Array<string>): targetAndDailyHours => {
  const dailyTarget = Number(args[2]);
  let stringyDailyHours = args.slice(3);
  const dailyHours = stringyDailyHours.map(hour => Number(hour));
  if (dailyHours.every(hour => typeof hour === 'number'&& Number.isNaN(hour) !== true) && !isNaN(Number(dailyTarget))) {
      return {
          dailyTarget: dailyTarget,
          dailyHours: dailyHours
      }
  } else {
      throw new Error("Provided values were not all numbers");
  }
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

const calculateExercises = (dailyTarget: number, dailyHours: number[]): weeklyReport => {
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

try {
    const { dailyTarget, dailyHours } = checkArguments(process.argv);
    console.log(calculateExercises(dailyTarget, dailyHours));
  } catch (error: unknown) {
    let errorMessage = "Something bad happened";
    if (error instanceof Error) {
      errorMessage += "Error : " + error.message;
    }
    console.log(errorMessage);
  }


//console.log(calculateExercises(2, [3, 0, 2, 4.5, 0, 3, 1]));

