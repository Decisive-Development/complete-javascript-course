// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const calcTempAmplitude = function (temps) {
//     let max = temps[0];
//     let min = temps[0];
  
//     for (let i = 0; i < temps.length; i++) {
//       const curTemp = temps[i];
//       if (typeof curTemp !== 'number') continue;
  
//       if (curTemp > max) max = curTemp;
//       if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
//   };
//   const amplitude = calcTempAmplitude(temperatures);
//   console.log(amplitude);
  
//   // PROBLEM 2:
//   // Function should now receive 2 arrays of temps
  
//   // 1) Understanding the problem
//   // - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays
  
//   // 2) Breaking up into sub-problems
//   // - Merge 2 arrays

//   const calcTempNew = calcTempAmplitudeNew(temperatures);
//   console.log(amplitudeNew);

//   const calcTempAmplitudeNew = function (t1, t2) {  
//     const temps = t1.concat(t2);

//     let max = temps[0];
//     let min = temps[0];
  
//     for (let i = 0; i < temps.length; i++) {
//       const curTemp = temps[i];
//       if (typeof curTemp !== 'number') continue;
  
//       if (curTemp > max) max = curTemp;
//       if (curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
//   }
//   const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

// const measureKelvin = function(){
//     const measurement = {
//         type: 'temperature',
//         unit: 'celsius',
//         value: Number(prompt('Degrees celsius'))
//     }

//     // console.table(measurement);
//     // console.log(measurement.value);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);
//     const kelvin = measurement.value + 273;
//     return kelvin;
// }
// console.log(measureKelvin());

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function(arr){
    let str = '';
    for(let i = 0; i < arr.length; i++){
        str = str + `${arr[i]}ºC`
    }
    console.log(str);
}
printForecast(data1)