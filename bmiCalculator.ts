/*
interface heightAndMass {
  height: number;
  mass: number;
}

const parseArguments = (args: Array<string>): heightAndMass => {
  if (args.length < 4) throw new Error("Not enough arguments");
  if (args.length > 4) throw new Error("Too many arguments");

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      height: Number(args[2]),
      mass: Number(args[3]),
    };
  } else {
    throw new Error("Provided values were not numbers!");
  }
};
*/

 export const calculateBmi = (height: number, mass: number): string => {
  const heightInMeter = height / 100;
  const bmi = mass / Math.pow(heightInMeter, 2);
  console.log(bmi);
  
  if (bmi < 18.5) {
  return "Not normal(underweight)";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal(normal weight)";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Not normal(overweight)";
  } else if (bmi >= 30 && bmi <= 34.9) {
    return "Not normal(obesity class 1)";
  } else if (bmi >= 35 && bmi <= 39.9) {
    return "Not normal(obesity class 2)";
  } else if (bmi >= 40) {
    return "Not normal(obesity class 3)"
  } else {
    return "Check the values you provided. It doesn't seem like they fall in any category";
  }
};


/*
try {
  const { height, mass } = parseArguments(process.argv);
  console.log(calculateBmi(height, mass));
} catch (error: unknown) {
  let errorMessage = "Something bad happened";
  if (error instanceof Error) {
    errorMessage += " Error : " + error.message;
  }
  console.log(errorMessage);
}
*/



//console.log(calculateBmi(180, 74));
