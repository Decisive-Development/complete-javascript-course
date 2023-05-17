'use strict';

// let hasDriverLicense = false;
// const passTest = true;

// if(passTest) hasDriverLicense = true;
// if (hasDriverLicense) console.log('I can drive');

// function logger(){
//     console.log('My name is Tom');
// }

// logger();

// function fruitProcessor(apples, oranges){
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(3, 4);
// console.log(appleOrangeJuice);

// function calcAge1(birthYear){
//     return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);




// const calcAge = birthYear => 2037 - birthYear;


// function yearsUntilRetirement(birthYear) {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     return retirement;
// }

// const yearsUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear;
//     const retirement = 65 - age;
//     if (age >= 65) {
//         return `${firstName} is retired`;
//     } else {
//         return `${firstName} retires in ${retirement} years`;
//     }
// }

// console.log(yearsUntilRetirement(1991, 'Jack'));
// console.log(yearsUntilRetirement(1980, 'Bob'));
// console.log(yearsUntilRetirement(1971, 'Bob'));

// function cutFruit(fruit){
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges){
//     const appleSlices = cutFruit(apples);
//     const orangeSlices = cutFruit(oranges);
//     const juice = `Juice with ${appleSlices} apples and ${orangeSlices} oranges.`
//     return juice;
// }

// console.log(fruitProcessor(2,3));

/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a functiston 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
 😉





GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));
// const sumArray = array => {
//     return array.reduce(function(a, b){
//         return a + b;
//     });
// }


// const calcAverage = (scoreA, scoreB, scoreC) => (scoreA + scoreB + scoreC /3);

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 492);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log('Nobody wins');
//     }
//     console.log(avgDolphins, avgKoalas);
// }

// checkWinner(scoreDolphins, scoreKoalas);

// const calcTip = function(bill){
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(bills, tips, totals);

// const jonasArray = [
//     'Jonas',
//     'Schmitmen',
//     2037 -1991,
//     'teacher',
//     ['Tom', 'Mike', 'Peter']
// ];

// const jonas = {
//     firstName: 'Tom',
//     lastName: 'Penny',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Tom', 'Mike', 'Peter']
// };

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);

// const interestedIn = prompt ('What do you want to know about Jonas? Choose between firstName, lastName, age, job, or friends');
// console.log[interestedIn];

// if (jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// } else {
//     console.log('Wrong request!');
// }

// jonas.location = 'Spain';
// jonas['twitter'] = '@jonas';
// console.log(jonas);

// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);





// const types = [];

// for(let i = 0; i < jonasArray.length ;i++){
//     console.log(jonasArray[i], typeof jonasArray[i]);

//     // types[i] = typeof jonasArray[i];
//     // types.push (typeof jonasArray[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

// const jonas = [
//     'Jonas',
//     'Schmitmen',
//     2037 -1991,
//     'teacher',
//     ['Tom', 'Mike', 'Peter'],
//     true
// ];

// for(let i = jonas.length -1; i >= 0; i--){
//     console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++){
//     console.log(`--Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++){
//         console.log(`Lifting weight repetition ${rep}`);
//     }
// }

// for (let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights rep ${rep}`);
// }

// let rep = 1;
// while (rep <= 10){
//     console.log(`Lifting weights rep ${rep}`);
//     rep++;    
// }

