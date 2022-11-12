# JavaScript and web development
This file contains the summary of our second JavaScript lesson from November 12th.

## Key points from the demo
 We are referencing the code in example.html and app.js. Here is a short step by step of the demo I went through in class.
### Change text based on image clicked.
As you can see from the website, we have three images displayed on the page. We want to be able to change the text that is displayed below the images based on which one is clicked. 

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

#### Inside our function, we will iterate through each dessery item
We want to ensure that each element in the array ends up in the table
```js
function generateDessertTable(desserts){
    // select table body and remove all the current rows so that we don't add duplicates
    let tableBody = document.querySelector("#dessert-table-body");
    tableBody.innerHTML = ""

    let table = document.querySelector("#dessert-table");

    // for each dessert, add a row with the name and the preferred dessert
    desserts.forEach(dessert => {
        // do something
    });
}
```
#### Add row for each dessert
We will create a variable `tr` to represent the new table row. We will then add two cells and set the name and preferred dessert using our `dessert` parameter. We will then append the row to the table

```js
function generateDessertTable(desserts){
    // select table body and remove all the current rows so that we don't add duplicates
    let tableBody = document.querySelector("#dessert-table-body");
    tableBody.innerHTML = ""

    let table = document.querySelector("#dessert-table");

    // for each dessert, add a row with the name and the preferred dessert
    desserts.forEach(dessert => {
        // create tr element
        const tr = table.insertRow(0);

        // create td for name and for preferred dessert
        let name = tr.insertCell(0);
        let preferredDessert = tr.insertCell(1);

        // set them to the value of the current dessert object in array
        name.innerHTML = dessert['name'];
        preferredDessert.innerHTML = dessert['dessert'];

        // append the new row to the table body
        tableBody.appendChild(tr);
    });
}
```

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
Now that we have the inputs, we will now create a dessery object and add it to dessert list
```js
// upon submitting the form, we want to collect the information from each input
submitButton.addEventListener('click', ()=>{
    // get name from HTML input
    let name = document.querySelector("#name-input").value ;

    // get preferred dessert from HTML input
    let preferredDessert = document.querySelector("#dessert").value;

    // add to our dessert list
    dessertList.push({
        'name': name,
        'dessert': preferredDessert
    });
})
```

#### Finally, we will call `generateDessertList` to update the table on the page
```js
// upon submitting the form, we want to collect the information from each input
submitButton.addEventListener('click', ()=>{
    // get name from HTML input
    let name = document.querySelector("#name-input").value ;

    // get preferred dessert from HTML input
    let preferredDessert = document.querySelector("#dessert").value;

    // add to our dessert list
    dessertList.push({
        'name': name,
        'dessert': preferredDessert
    });

    // re-generate table with updated list
    generateDessertTable(dessertList);

})
```

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
};

// function as an input
element.addEventListener('click', ()=>{
    // do something
});

// function with parameters as an input
element.addEventListener('click', (event)=>{
    // do something
});
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
        evenCount ++ ;// add 1 to evenCount
    }
});
console.log(evenCount);
>> 4
```

## Example of a different event
I want to show how you can have different event listener
### `keydown`
You can add an event that listens to if a certain key was pressed.
```js
addEventListener('keydown', (event) => {
    if(event.key === 'a'){
        alert("a was pressed");
    }
});
```

## Working with APIs
API calls are done through URLs and return JSON (JavaScript Object Notation) objects. We make a request through the URL and wait for the request to come back. 

Common types of requests:
- GET (retrieve data)
- POST (upload data)
- POST (update data)
- DELETE (delete data)

### Requests
We can use `fetch` to make API calls to urls
```js
fetch("https://swapi.dev/api/people/1");
>> Promise {<pending>}
```

### Response and promises
Retrieving data can take time and we need to have a way of communicating that. Often, APIs will return promises. This is a representation of the eventual object that will be returned. A promise comes in three states:

- `Promise {<pending>}`
- `Promise {<fulfilled>}`
- `Promise {<rejected>}`

### Looking at a response
We have called the API but now we want to actually make use of the response. We will use the function `.then()` after `fetch` which waits until the API has completed successfully to go. We also add the `catch` function at the end of `then` in case the Promise is rejected.
```js

// success
fetch("https://swapi.dev/api/people/1")
    .then(response=>{
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    });

>> Response {type: 'cors', url: 'https://swapi.dev/api/people/1', redirected: false, status: 200, ok: true, …}

// error
fetch("https://swapi.dev/api/people/-0")
    .then(response=>{
        console.log(response);
    })
    .catch(error=>{
        console.log(error);
    });
>> Response {type: 'cors', url: 'https://swapi.dev/api/people/-0', redirected: false, status: 404, ok: false, …}
```

### Codes
If you look at the status part of a response, they have certain codes which communicate if the call was successful and if there is an error, we can know exactly what went wrong. For our purposes, it is sufficient to know that all 200 level codes mean success and all 400 level codes mean error. 
- For those curious: 404 means page was not found.

### Using our responses
In order to actually use our response, we will not be able to just use that `response` object. We will usually have to use the `json` function to make it easier to use. This function also make take time so we follow it up with a `then`
```js
let responseData;
fetch("https://swapi.dev/api/people/1")
    .then(response=>{
        response.json().then(data=>{
            console.log(data);
            responseData = data;
        })
    })
    .catch(error=>{
        console.log(error);
    });
>> {name: 'Luke Skywalker', height: '172', mass: '77', hair_color: 'blond', skin_color: 'fair', …}
```

### `Async` functions
Unless we have some way to indicate that we want our functions to wait for certain things to complete, our code may continue to execute while the API is running which is not what we want. This is why we use async functions

```js
let url = 'https://fake-url.com'

async function myFunction(){
    const response = await fetch(url); // this waits until the API call is complete
}
```

## API demo
In this demo, we will update our page based on what is returned from an API call. We will have the user input a character ID and then display the name of that character if they exist in the SWAPI.

### Define HTML element that we will use as variables and define our URL
```js
let apiInput = document.querySelector("#api-input");
let apiButton = document.querySelector("#api-button");
let apiResult = document.querySelector("#api-result")

const apiURL = 'https://swapi.dev/api/people/';
```
### Create an event listener for the `apiButton`
```js
apiButton.addEventListener('click', async ()=>{
    // do something
});
```

### Retrieve the charID from the `apiInput`
We want to get this value because it will be used when making the API call. We also want to only call our API if there is an input so we will also create an `if` statement which double checks if the user inputted a value
```js
apiButton.addEventListener('click', async ()=>{
    // get user input
    let charID = apiInput.value

    // ensure that input exists
    if(charID === ''){
        return
    }
});
```

### Make API request
Notice here how we use the keyword `await` here. This is so we stop moving through the function until our API has returned.
```js
apiButton.addEventListener('click', async ()=>{
    // get user input
    let charID = apiInput.value

    // ensure that input exists
    if(charID === ''){
        return
    }

    // make API GET request
    const res = await fetch("https://swapi.dev/api/people/"+charID);
});
```

### Check status of API response
There may be a chance that our user inputs an incorrect value such as a letter or an ID that doesn't exist. We want to communicate that to the user.
```js
// add event listener for api button
apiButton.addEventListener('click', async ()=>{
    // get user input
    let charID = apiInput.value

    // ensure that input exists
    if(charID === ''){
        return
    }

    // make API GET request with charID
    const res = await fetch("https://swapi.dev/api/people/"+charID);

    // check to make sure it was successful
    console.log(res)
    if(!res.ok){
        // do something for error
    }
    else{
        // do something for succes
    }
});
```

### Create `addErrorBar` function
This function will clear out the HTML inside the `apiResult` element and add an error bar instead
```js
function addErrorBar(){
    apiResult.innerHTML = '';
    apiResult.innerHTML = '<div class="alert alert-warning" role="alert">This ID was not found</div>';
}
```

### Create `addCharacterName` function
This function will clear out the HTML inside the `apiResult` element and add the character's name
```js
function addCharacterName(character){
    apiResult.innerHTML = '';
    apiResult.innerHTML = character['name']
}
```

### Get success data and fill in missing values in `if` statement
First we will get the character object by calling `.json()` to our `res` variable. This also requires an `await` keyword. WWe will then add the two new functions we created in the correct place. 
```js
apiButton.addEventListener('click', async ()=>{
    // get user input
    let charID = apiInput.value

    // ensure that input exists
    if(charID === ''){
        return
    }

    // make API GET request
    const res = await fetch("https://swapi.dev/api/people/"+charID);

    // check to make sure it was successful
    console.log(res)
    if(!res.ok){
        addErrorBar()
        return;
    }

    // otherwise get character and display it
    let character = await res.json();
    addCharacterName(character)
});
```
