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
    
    // insert node with topic text into the topic element\
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

## Example of different events
I want to show how you can have different event listener
