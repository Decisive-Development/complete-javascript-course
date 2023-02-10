
// let country = "England";
// let continent = "Europe";
// let population = "50000";

// console.log(country, continent, population);

// const markMass = 78;
// const johnMass = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

// const bmiMark = markMass / (markHeight * markHeight);
// const bmiJohn = johnMass / (johnHeight * johnHeight);
// console.log(bmiMark);
// console.log(bmiJohn);

// markHigherBMI = bmiMark > bmiJohn;
// console.log(markHigherBMI);

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const bmiMark = markMass / markHeight ** 2;
// const bmiJohn = johnMass / johnHeight ** 2;


// markHigherBMI = bmiMark > bmiJohn;
// console.log(bmiMark, bmiJohn, markHigherBMI);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

/*
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);*/

// Strings and Template Literals
// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string'in' test`)

// const age = 19;
// const isOldEnough = age >= 18;

// if(isOldEnough){
//     console.log('Sarah can start 🐱‍👓');
// }

// const age = 15

// if(age >= 18){
//     console.log('Sarah can start 🐱‍👓');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young, wait ${yearsLeft} years. `);
// }

// const birthYear = 2012  ;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);



// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;


// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / (heightJohn * heightJohn);


// if (BMIMark > BMIJohn) {
//     console.log(`Mark's (${BMIMark}) BMI is higher than John's (${BMIJohn})!`);
// } else {    
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// }

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);

// console.log(String(23), 23);

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));

// const money = 0;

// if (money) {
//     console.log("Don't spend it all");
// } else {
//     console.log('You should get a job!');
// }

// let height = 1;

// if (height) {
//     console.log("YAY! height is defined");
// } else {
//     console.log('Height is undefined');
// }

// const age = 19;
// if(age === 18) console.log('you just became and adult');

// prompt("What's your favourite number?")

const hasDriversLicense = true;
const hasGoodVision = true;

console.log(hasDriversLicense && hasGoodVision );
console.log(hasDriversLicense || hasGoodVision );
console.log(!hasDriversLicense);



// if(shouldDrive){
//     console.log('You can drive!');
// } else {
//     console.log('You canea do it');
// }

const isTired = true;
const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if(shouldDrive){
    console.log('You can drive!');
} else {
    console.log('You canea do it');
}

/*
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

GOOD LUCK 😀
*/

let dolphinsScore = (97 + 112 + 101)/3;
let koalasScore = (97 + 112 + 101)/3;
const minimumScore = 100;
console.log(dolphinsScore, koalasScore);


if (dolphinsScore > koalasScore && dolphinsScore >= minimumScore){
    console.log('Dolphins win!');
} else if (koalasScore > dolphinsScore && koalasScore >= minimumScore){
    console.log('Koalas win!');
} else if (koalasScore == dolphinsScore && koalasScore, dolphinsScore >= minimumScore){
    console.log("It's a draw!");
} else {
    console.log('Nobody wins LOL');
}

if (dolphinsScore > koalasScore && dolphinsScore >= minimumScore){
    console.log('Dolphins win!');
} else if (koalasScore > dolphinsScore && koalasScore >= minimumScore){
    console.log('Koalas win!');
} else if (koalasScore == dolphinsScore && koalasScore >= minimumScore && dolphinsScore >= minimumScore){ 
    // fixed comparison operator and parameters of console.log statement 
    console.log("It's a draw!"); 
} else {
    console.log('Nobody wins LOL');
}

