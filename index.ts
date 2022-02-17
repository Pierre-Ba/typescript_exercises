import express from 'express';
import  { calculateBmi }  from './bmiCalculator';

const app = express();

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

const PORT = 3002;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});