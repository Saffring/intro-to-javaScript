# JavaScript For Web Development Summary
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
#### 2.
