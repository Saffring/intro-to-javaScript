// This file will help us learn about arrays.

// defining an array of strings.
let names = ['Vincent', 'Bambi', 'Lucy', 'Richard'];

// defining an array of numbers
let yearsOfUndergrad = [2016, 2017, 2018, 2019, 2020, 2021];

// defining an empty array
let emptyArray = [];

// How would I access the third item in names?
console.log(names[2]); // Lucy

// How do we update arrays?

// Add a new name
names.push('Bambi II');
console.log(names); // ['Vincent', 'Bambi', 'Lucy', 'Richard', 'Bambi II']

// Remove the first name
names.shift(); // Vincent

let myFavoriteDesserts = ['Ice cream', 'White chocolate cookie', 'Lemon cake', 'Creme Brulee', 'Apple Pie', 'Bubble Tea', 'Brownie'];
// What if I only want one subset of this dessert list?
// the slice function can help us. We can decide when to start and end this subset
// slice(start, end)

// if there is no index, then the entire list is return
// if one index, then everything including and after index is return
// if two indexes are returned, then everything including and after index 1 and 
// up to the item before the index is returned.

myFavoriteDesserts.slice(1);  // ['White chocolate cookie', 'Lemon cake', 'Creme brulee', 'Apple Pie', 'Bubble Tea', 'Brownie']
myFavoriteDesserts.slice(1, 3); // ['White chocolate cookie', 'Lemon cake']

// What if we want to replace a specific element in the list?
// then we would use splice
// splice(start, deleteCount, item)
// it will return the part of the list that was taken out

// suppose we want to get rid of Creme brulee and we don't want to add anything in its place
myFavoriteDesserts.splice(3, 1);

// suposse now we want to add Pumpkin scone in the exact place of creme brulee without taking
// anything else out
myFavoriteDesserts(3, 0, "Pumpkin scone");

// I change my mind, my 4th favorite dessert is creme brulee and I want to get rid of the scone
myFavoriteDesserts.splice(3, 1), "Creme brulee";