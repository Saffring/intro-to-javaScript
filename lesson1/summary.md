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
