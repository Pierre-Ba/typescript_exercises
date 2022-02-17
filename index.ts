import express from 'express';
import  { calculateBmi }  from './bmiCalculator';
import {calculateExercises } from './exerciseCalculator';

interface requestBody {
    daily_exercises: number[],
    target: number
}

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack!');
});


app.get('/bmi', (_req, res) => {
   const queryParams = _req.query;
    console.log(queryParams);
    if(queryParams.height === undefined || queryParams.weight === undefined) {
        throw new Error('malformatted params');
    }
    if(queryParams.height === '') {
        throw new Error('malformatted params: you forgot to assign a value to height');
    } else if (queryParams.weight === '') {
        throw new Error('malformatted params: you forgot to assign a value to weight');
    }
    const height = Number(queryParams.height);
    const weight = Number(queryParams.weight);

    res.json({
        height: height,
        weight: weight,
        bmi: calculateBmi(height, weight)
    });
});


app.post('/exercises', (_req, res) => {
    console.log(_req.body);
   const { daily_exercises, target } =   _req.body as requestBody;
   
   if(daily_exercises === undefined || target === undefined) {
       throw new Error('missing parameters');
   }

   if (Array.isArray(daily_exercises) !== true) {
       throw new Error('malformated parameters: daily exercises must be an array');
   }
   daily_exercises.forEach(el => {
    if(typeof(el) !== 'number') {
        throw new Error('malformated parameters: all elements of the daily array must be numbers');
    }
});
   if(typeof(target) !== 'number') {
       throw new Error('malformated parameters: your target must be a number');
   }
 


   const result = calculateExercises(target, daily_exercises);
   console.log(result);
   res.json(result);

});

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});