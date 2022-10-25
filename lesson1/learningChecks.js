// The goal of this file is to access the concepts from the lesson.

// function used to get random integer in a range
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}

// Variables and numbers

// 1. Create a mutable variable named "year" and assign it to the current year.

// 2. Create a constant variable named "birthYear" and assign it the value of your birth year

// 3. Create a mutable variable named "age" and assign it to your age using "year" and "birthYear" 
// (for the sake of simplicity; we will assume that your age is perfectly inline with the year; sorry to anyone born in later months.)

// Use the following variable for the next questions
let x = 8;
// 4. Using JavaScript, show how you could multiply x by 7.

// 5. Show how we could find x to the power of 3

// 6. Show how we could determine if x was even or odd using JS

// Use the following variables for the next question
let x = getRandomInt(0, 30);
let y = getRandomInt(0, 30);
console.log(x,y)

// Booleans and if statements

// 7. Write an if statement which logs "x is greater than or equal to y" if x is greater than or equal to y. 


// 8. Write an if statement that console logs "both bigger" if both x and y are greater than 15; if both aren't bigger then console log "only one is bigger" if only one of x or y is strictly greater
// then console log "neither are greater than 15" if neither are greater than 15
x = getRandomInt(0, 30);
y = getRandomInt(0, 30);
console.log(x,y)


// Strings, arrays and loops

// Use the following variables for the next question
let desserts = ['carrot cake', 'kitkat', 'ice cream', 'apple pie'];
let hello = 'hello'
let world = 'world'

// 9. Show how you can access the first, the third and the last character of the hello variable. Bonus if you can find the last character without using the actual index value

// 10. Using hello and world, combine them together with an empty space between them

// 11. Using array methods, create a new variable newDesserts which is a copy of dessert except without 'apple pie'

// 12. Add your favorite dessert to newDesserts (add to the end of the array)

// 13. Get the index of 'ice cream' from newDessert

// 14 Update newDesserts by replacing 'ice cream' with another dessert of your choosing.

let vowels = ['a', 'e', 'i'. 'o', 'u'];
// 15. Using a for loop, count the number of vowels in hello. The variable of vowels has been provided and can be used.


// JSON Objects
let books = [
    {
        'title': 'Our Missing Hearts',
        'author': 'Celeste Ng',
        'rating': 8.5
    },
    {
        'title': 'The Couple Next Door',
        'author': 'Shari Lapena',
        'rating': 3
    },
    {
        'title': 'Seveneves',
        'author': 'Neal Stephenson',
        'rating': 7.5
    },
    {
        'title': "I'm Glad My Mom Died",
        'author': 'Jenette McCurdy',
        'rating': 8
    },
    
];

// 16. Add another book rating to the end of books

// 17. Iterate through books using a loop of your choosing and get the average book rating. (The average is the sum of all ratings divided by the number of ratings)

// 18. Design an object representing a restaurant. This is an open-ended question meant to get you thinking about how to represent real world things
let restaurant = {
    // add attributes you think could be helpful
}

