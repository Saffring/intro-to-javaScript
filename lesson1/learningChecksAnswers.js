// Answers for learningChecks lesson 1

// function used to get random integer in a range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


// Variables and numbers

// 1. Create a mutable variable named "year" and assign it to the current year.
let year = 2022;

// 2. Create a constant variable named "birthYear" and assign it the value of your birth year
const birthYear = 1998; // replace with your own age

// 3. Create a mutable variable named "age" and assign it to your age using "year" and "birthYear" 
// (for the sake of simplicity; we will assume that your age is perfectly inline with the year; sorry to anyone born in later months.)

let age = year - birthYear; // 24 for me; will be different depending on your birthyear 

// Use the following variable for the next questions
let x = 8;
// 4. Using JavaScript, show how you could multiply x by 7.
x*7;

// 5. Show how we could find x to the power of 3
x**3;

// 6. Show how we could determine if x was even or odd using JS
x%2 == 0;


// Use the following variables for the next question
let x = getRandomInt(0, 30);
let y = getRandomInt(0, 30);
// Booleans and if statements

// 7. Write an if statement which logs "x is greater than or equal to y" if x is greater than or equal to y.
console.log(x,y)
if (x>=y){
    console.log("x is greater than y")
}

// 8. Write an if statement that console logs "both are greater than 15" if both x and y are greater than 15; if both aren't bigger then console log "only one is greater than 15" 
// if only one of x or y is strictly greater then console log "neither are greater than 15" if neither are greater than 15
x = getRandomInt(0, 30);
y = getRandomInt(0, 30);

console.log(x,y)
if(x>15 && y>15){
    console.log("both are greater than 15");
}
else if(x>15 || y>15){
    console.log("only one is greater than 15");
}
else{
    console.log("neither are greater than 15");
}


// Strings, arrays and loops

// Use the following variables for the next question
let desserts = desserts = ['carrot cake', 'kitkat', 'ice cream', 'apple pie'];
let hello = 'hello'
let world = 'world'

