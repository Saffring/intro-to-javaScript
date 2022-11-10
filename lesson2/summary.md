# JavaScript and web development
This file contains the summary of our second JavaScript lesson from November 12th.

## Key points from the demo
 We are referencing the code in example.html and app.js. **LINK THEM** Here is a short step by step of the demo I went through in class.
### Change text based on image clicked.
As you can see from the website, we have three images displayed on the page. We want to be able to change the text that is displayed below the images based on which one is clicked. 

**ADD IMAGE**
#### 1. Create variable for each image and also for the row below
We want to create a variable for each of the images. The reason we do this so we can we access them in our JS script and add event listeners. We will query them by their HTML IDs. We also want to select the row below the images. This is where we will put the text once we know which image has been clicked. We will also query this element by its HTML ID. 
```js
let coffeeLink = document.querySelector("#coffee");
let codingLink = document.querySelector("#coding");
let rainLink = document.querySelector("#rain");

let topic = document.querySelector("#topic");
```
#### 2. Add an event listener for each image
Now we want to add an event listener which monitors the images for when they are clicked.
```js
// Adding an event listener for the three images.
coffeeLink.addEventListener('click', ()=>{
    // do something
})

codingLink.addEventListener('click', ()=>{
    // do something
})

rainLink.addEventListener('click', ()=>{
    // do something
})

```

#### 3. Create a function for adding the topic paragraph
This is an example of when using a function would be very useful. The task we're performing for each event listener will be almost identical except fo the text we will be inserting into the HTML element. 
```js
function addTopicParagraph(topicText){
    // delete anything in that area. This ensures that overwrite what was there before and not add to it.
    topic.innerHTML = "";
    
    // create new paragraph node 
    const node = document.createElement("p");
    
    // add paragraph text to node
    node.innerHTML = topicText;
    
    // insert node with topic text into the topic element
    topic.appendChild(node);
}
```
**TODO** update event listener in `app.js` to just insert the specific text

#### 4. Update event listeners to use `addTopicParagraph` function
Now we will use the function inside our event listeners. As input, we will pass whatever text we want to appear when that image is clicked
```js
coffeeLink.addEventListener('click', ()=>{
    addTopicParagraph("This is my coffee section");
})

codingLink.addEventListener('click', ()=>{
    addTopicParagraph("This is the coding section");
})

rainLink.addEventListener('click', ()=>{
    addTopicParagraph("This is my rainy day activity section");
})
```

### Adding names to our table
In this part of the demo, I will go over how we can update the dessert table based on a user's input. We will use the `dessertList` array to populate the dessert table and update this array when a user clicks the "Add me" button.

#### Create a function to generate the table rows
We want to generate the table rows based on the items in `dessertList`. In app.js, this array was defined with two items to show how we can start with two elements.
```js
function generateDessertTable(desserts){
    // do something
}
```

#### Inside our function, let's select the table body and remove existing rows
We want to remove existing rows so that we don't add anything twice. Since we are working with a short list, this is fine. We're also going to select the table by ID.
```js
function generateDessertTable(desserts){
    // select table body and remove all the current rows so that we don't add duplicates
    let tableBody = document.querySelector("#dessert-table-body");
    tableBody.innerHTML = ""

    let table = document.querySelector("#dessert-table");
}
```

#### Inside our function, we will iterate through each function

#### 1. Create a variable for the submit button
Now that we have a function to generate the table rows, we can move on to adding new items to this list. We will start by selecting the add me button
```js
let submitButton = document.querySelector("#submit-button");
```
#### 2. Add an event listener to listen for when this button is clicked
```js
submitButton.addEventListener('click', ()=>{
    // do something
})
```

#### 3. Select the values inputted by the user
We want to be able to access the name and the preferred dessert that the user inputted
```js
submitButton.addEventListener('click', ()=>{
    // get name from HTML input
    let name = document.querySelector("#name-input").value ;

    // get preferred dessert from HTML input
    let preferredDessert = document.querySelector("#dessert").value;
});
```

#### 4. Create a new dessert object and add it to `dessertList`
We want to use `dessertList` to generate 

## Different types of function definitions
In the previous lesson, we say function defined like this:
```js
function myFunction(){
    // do something
}
```
But we've also seen that functions can be inputs to other functions like in an event listener:
```js
element.addEventListener('click', function(){
    // do something
});
```

Here is another way to define functions. It is equivalent way to define functions.
```js
// regular function
const myFunction = (param1, param2) => {
    // do something
}

// function as an input
element.addEventListener('click', ()=>{
    // do something
})

// function with parameters as an input
element.addEventListener('click', (event)=>{
    // do something
})
```


```js
arr.forEach(item=>{
    // do something
});
```


## `forEach` loops
In our last lesson, we went through different types of for loops. I want to introduce another type that can be used. This is an array method where it iterates and performs a function on each item in the array.
```js
// code example where we will count the number of even numbers in the array

let nums = [32, 57, 2, 7, 8, 33, 35, 90];
let evenCount = 0;

nums.forEach(num => {
    if(num%2 === 0){ // mod of 2 will be 0 if the number is even
        evenCount ++ // add 1 to evenCount
    }
});
console.log(evenCount)
>> 4
```


## Example of different events
I want to show how you can have different event listener

### `hover`

### `keydown`

## Working with APIs
API calls are done through URLs and return JSON (JavaScript Object Notation) objects. We make a request through the URL and wait for the request to come back. 

### Requests

### Response

### Promises (extra)

### `Async` functions

```js
let url = 'https://fake-url.com'

async function myFunction(){
    const response = await fetch(ur;); // this waits until the API call is complete
}


async function getPeople(){
    let people;
    fetch("https://swapi.dev/api/people")
        .then(response=>{
        console.log(response)})
        .catch(e=>{
        console.log("error")
    })
    ;
    return people
}

```

## API demo
