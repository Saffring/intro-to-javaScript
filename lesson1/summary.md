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
2. Inside our HTML file inside the `<body>` tag, add a script element with a link to JS file:
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
console.log(dogs.splice(3, 1))
console.log(dogs)
>> ['poodle']
>> ['corgi', 'dachhund', 'shiba']

// add another dog after corgi but don't delete anything
console.log(dogs.splice(1, 0, "pitbull"))
console.log(dogs)
>> []
>> ['corgi', 'pitbull', 'dachhund', 'shiba']

// replace dachhund with goldren retriever
console.log(dogs.splice(2, 1, "goldren retriever"))
console.log(dogs)
>> ['dachhund']
```

## Loops