# Introduction To JavaScript Summary
This file contains the summary of our first JavaScript lesson from November 5th.
## Console
The console can be used to write JavaScript (JS) snippets and to log from your JS file. To clear the console.

**Clear console**:
```js
clear()
```

**Log to console**:
```js
console.log()
```

## Numbers and Operations
There is only one type of number in JS.
### Addition
```js
5+5
>> 10
```
### Subtraction
```js
100-1
>> 99
```

### Multiplication
```js
5*5
>> 25
```

### Division
```js
24/3
>> 8
```

### Modulo
In short, the modulo operation returns the remainder after dividing. In this case, 2 fits into 25 twelve times with a remainder of **1**.
```js
25%2
>> 1
```

## Variables
In the code snippet, I am essentially saying to make variable called "birthYear" and its value is 1998. I have made another variable named "year" which has the value 2022.
```js
const birthYear = 1998 ;// Cannot be changed
let year = 2022 ; // Can be changed
```
### Updating a variable
```js
let year = 2022 ;
year = year + 1 ;// no need to redefine year
console.log(year) ;
>> 2023
```

### Naming conventions
- While you can technically name your variable anything you want, it is more useful to give your variable a name that makes it easy to understand what it represents.
- Additionally, it is JS convention when having a variable name with more than two words to use camel casing. This means the first word is lowercase and all subsequent words begin with an uppercase letter
```js
let name = "Jane Doe";
let firstName = "Jane";
let lastname = "Doe";
```


## Booleans

### Boolean Operators
### AND
```js
true && true 
>> true

true && false 
>> false

false && true 
>> false

false && false 
>> false
```
### OR
```js
true || true 
>> true

true || false 
>> true

false || true
>> true

false || false
>> false
```
### NOT
```js
!true
>> false

!false
>> true
```

## Strings
Strings are used to represent text in JS. This is how we can define them:
```js
let myString = 'this is a string' ;
let anotherString = "this is also a string" ;
```
### Strings are indexed
This means that every character in the string has an index numerical position. Counting in JS starts at 0. Therefore the first character of a string is at the 0th position
```js
let name = 'Saffrin';
console.log(name[0]);
console.log(name[1]);
>> 'S'
>> 'a'
```

### Getting the length of a string
```js
let name = 'Saffrin';
console.log(name.length);
>> 7
```

### Adding strings together
```js
let firstName = 'Saffrin';
let lastName = 'Granby';
console.log(firstName+' '+lastName);
>> 'Saffrin Granby'
```

## Connecting to our HTML files
1. Create a .js file
2. Inside our HTML file inside the `<body>` tag, add a `<script>` element with a link to JS file:
```html
<body>
    ...
    <script src="app.js"></script>
</body>
```

## `if` statements
`if` statements follow the following structure:
```js
// condition must be a boolean
if (condition) {
    // do something if condition is true
}

else {
    // do something else if condition is false
}
```

### Example with `===`
This is the strictly equals comparison where the inputs must be the same value and the same type.
```js
let one = 1 ;
let oneString = '1' ;

if (oneString === one) {
  console.log("They are the same") ;
}
else {
    console.log("They are not the same") ;
}

>> "They are not the same"
```

### Example with `==`
This is the strictly equals comparison where the inputs must be the same value but not necessarily the same type
```js
let one = 1 ;
let oneString = '1' ;

if (oneString == one) {
  console.log("This is true") ;
}
else {
    console.log("Not true") ;
}

>> "This is true"
```

### Example with `!==`
```js
if (1 !== 2) {
    console.log("not equal") ;
}

>> "not equal"

```
## Arrays
Arrays in JS are an ordered list of values and can contain different types of values.

### Indexing arrays
```js
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

days[0]
>> 'Monday'

days[4]
>> 'Friday'
```

### Getting the length of an array
```js
let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
days.length
>> 7
```

### `push()`
This method adds an item to the end of an array
```js
let summerMonths = ['June', 'July'];
summerMonths.push('August');
console.log(summerMonths);
>> ['June', 'July', 'August']
```
### `pop()`
This method removes and returns the item at the end of an array
```js
let coldColors = ['green', 'blue', 'purple', 'red'];
let discardItem = coldColors.pop();
console.log(coldColors);
console.log(discardItem);

>>['green', 'blue', 'purple']
>>'red'
```
### `shift()`
This method removes and returns the first item of a array
```js
let coldColors = ['red', 'green', 'blue', 'purple'];
let discardItem = coldColors.pop();
console.log(coldColors);
console.log(discardItem);

>>['green', 'blue', 'purple']
>>'red'
```
### `unshift()`
This methods adds an item to the start of an array
```js
let summerMonths = ['July', 'August'];
summerMonths.unshift('June');
console.log(summerMonths);

>> ['June', 'July', 'August']
```
### `concat()`
This method combines two lists together
```js
let evenNums = [2,4,6];
let oddNums = [1,3,5];
let both = evenNums.concat(oddNums)
console.log(both);

>> [2,4,6,1,3,5]
```
### `includes()`
This method returns true if item is in array and false otherwise
```js
let summerMonths = ['June', 'July', 'August'];
console.log(summerMonths.includes('July'))
console.log(summerMonths.includes('January'))
console.log(summerMonths.includes('july'))

>> true
>> false
>> false
``` 

### `indexOf()`
This method returns the index of an item or -1 if it is not in array
```js
let summerMonths = ['June', 'July', 'August'];
console.log(summerMonths.indexOf('July'));
console.log(summerMonths.indexOf('August'));
console.log(summerMonths.indexOf('January'));

>> 1
>> 0
>> -1
```

### `reverse()`
This method reverse an array
```js
let numbers = [1,2,3,4,5];
console.log(numbers.reverse())

>> [5, 4, 3, 2, 1]
```

### `slice()`
This method copies a subset of an array
```js
let dogs = ['corgi', 'dachhund', 'shiba', 'poodle'];

console.log(dogs.slice());
console.log(dogs.slice(2));
console.log(dogs.slice(1,3));

>> ['corgi', 'dachhund', 'shiba', 'poodle']
>> ['shiba', 'poodle']
>> ['dachhund', 'shiba']
```

### `splice()`
This method can be used to remove, replace and add elements at a certain index in the array. It returns the part of the list that was discarded.
```js
let dogs = ['corgi', 'dachhund', 'shiba', 'poodle'];

// remove poodle
console.log(dogs.splice(3, 1));
console.log(dogs);
>> ['poodle']
>> ['corgi', 'dachhund', 'shiba']

// add another dog after corgi but don't delete anything
console.log(dogs.splice(1, 0, "pitbull"));
console.log(dogs);
>> []
>> ['corgi', 'pitbull', 'dachhund', 'shiba']

// replace dachhund with goldren retriever
console.log(dogs.splice(2, 1, "goldren retriever"));
console.log(dogs);
>> ['dachhund']
```

## Loops
Loops allow us to perform repeated actions and avoid repeating code unnecessarily. We can use loops to perform an action a given number of times, to go through every item in a array or to loop until a condition is satisfied.

### `for` loops
This loops allow us to set a starting point number and an ending point number and to loop from the start number to the end number. 
```js
// sum numbers from 1 to 5
let sum = 0;
for(let i=1; i<=5; i++){
    sum = sum+i; // take the sum so far and add the current i to it
}

console.log(sum); // 1+2+3+4+5 = 15

>> 15
```

We don't need to start from a small number and get bigger. We can also count down:
```js
let factorial = 1;
for(let i=5; i>0; i--){
    factorial = factorial*i; // take the sum so far and add the current i to it
}
console.log(factorial) // 5 * 4 * 3 * 2 * 1 = 120

>> 120
```
#### We can use `for` loops to iterate through an array
```js
let dogs = ['corgi', 'dachhund', 'shiba', 'poodle'];
for(let i=0; i<dogs.length; i++){
    console.log(dogs[i]); // index the ith item in the array dogs
}
>>'corgi'
>>'dachhund'
>>'shiba'
>>'poodle'
```

Another way to iterate through an array. This block of code as the same functionality as the previous one, just a different syntax.
```js
for (const dog of dogs) {
    console.log(dog);
}
>>'corgi'
>>'dachhund'
>>'shiba'
>>'poodle'
```

### `forEach` loops
The `forEach()` method executes a provided function once for each array element. This is helpful if we want to perform a function on every item of the list.
```js
let numbers = [1,2,3];

numbers.forEach((number => { // this number is a temporary variable in the same way that we defined const dog in the previous for loop.
    if(number % 2 === 0){
        console.log(number+" is an even number");
    }
    else{
       console.log(number+" is an odd number"); 
    }
}))

>>'1 is an odd number'
>>'2 is an even number'
>>'3 is an odd number'
```

### `while` loops
These loops continue looping until a condition is satisfied. These loops are useful when we want to perform a task repeatedly but we perhaps don't know how many times exactly we will need to perform it. With while loops, we need to be cautious that the loop will eventually stop. There is the potential that you could accidently program an infinate loop.
```js
// divide a number by 2 until it gets down to 2 or less than 2
bigNum = 498;
while(bigNum>2){
    // inside the while loop, you should update the variable inside the condition
    // to avoid an infinate loop.
    bigNum = bigNum / 2
    console.log(bigNum)
}

>>249
>>124.5
>>62.25
>>31.125
>>15.5625
>>7.78125
>>3.890625
>>1.9453125
```

## JavaScript Object
JS objects allow us to represent more complex information in one place. A single JS object varaible can contain more than one value.
```js
let student = {
    'name': 'Saffrin', // on one side of the colon, we have the name of the attribute and the other side contains the value
    'major': 'Computer Science', // in between each attribute, we add a ","
    'minor': 'Linguistics' 
}

console.log(student['name']) 
console.log(student['major']) 

>> 'Saffrin'
>> 'Computer Science'
```

## JavaScript Functions
A JavaScript function is a block of code designed to perform a particular task and is executed when it is called. Just like loops, they help us avoid repeating code if we notice we're performing a block of code over and over again.
### How to define a function
```js
// define a function using `function`
// add the name and then the opening and closing parenthsis ()
// inside the (), you can add your parameters.
function functionName(parameter1, parameter2){
    // a function can have as many parameters as you want/need
    // the reason we have parameters is so that we can generalize 
    // what we're doing instead of performing the task on a specific variable/value.
    
    // in functions, we can return a value
    return ;
}
```

#### Example function: Factorial
Suppose we want to find the facotrial of any number without having to write a for loop each time we want the value. This is a great time to write a function. 
```js
function myFactorial(n){
    let fac = 1;
    for(let i=n;i>0;i--){
        fac = fac*i;
    }
    return fac;
}

console.log(myFactorial(3));
console.log(myFactorial(5));
console.log(myFactorial(9));

>>6
>>120
>>362880
```

## DOM
The DOM represents our HTML page and allows us to interact with and update it. When an HTML page is created, so is an object called `document`. When our JS script is connected, we can call that `document`
object.

### Access an HTML element.
To access an HTML element, we can use a couple different methods:
- `document.getElementById`
- `document.getElementByTagName`
- `document.querySelector`
- `document.querySelectorAll`

#### Example of getting element by ID
Suppose we have an HTML page:
```html
<h1 id="title">This is my title</h1>
<button id="button">Button</button>
<ul>
    <li>item 1</li>
    <li>item 2</li>
</ul>
```
We can select that `h1` 
```js
let title = document.getElementById("#title");

// alternative way
title = document.querySelector("#title");
```
#### Example of getting element by tag name
Suppose we have the same HTML elements as the previous example:
```js
let h1 = document.getElementByTagName("h1");
let myList = document.querySelector("ul");
```
Note that this funcion will return the first instance of that element.
#### Selecting more than one element
There are times where we may want to select more than one element:
```js
let listItems = document.querySelectorAll("li");
```

### Changing HTML items
We are able to update HTML elements once we have selected them using JS
```js
let h1 = document.getElementByTagName("h1");
h1.innerHTML = "new title"
```
## DOM Events
Events are occur when a certain action is performed by the website user. An example of an event would be when you click on a particular HTML element. Suppose you want your website to change what it displays on the page when you click a certain item, DOM events make sure that the change only occurs when that item is clicked.

### Event Listeners
We can set event listeners to certain elements and basically say "when a certain event occurs, perform this actions". Inside the event listener, we add a function which performs the task we want.

```js
let button = document.getElementById("#button");
button.addEventListener("click", function(){
    console.log("The button was pressed");
});
```
What this code is doing: It tells the website to "listen" for when this button is pressed and when it is pressed, it logs to the console "The button was pressed". 
