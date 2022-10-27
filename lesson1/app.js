console.log("connected");

let button = document.querySelector("button");

let coffeeLink = document.querySelector("#coffee");
let codingLink = document.querySelector("#coding");
let rainLink = document.querySelector("#rain");

let thumbnails = document.querySelectorAll(".thumbnail"); 

let topic = document.querySelector("#topic");

// Event listeners

button.addEventListener('click', function(){
    alert("You've pressed the button");
})


coffeeLink.addEventListener('click', ()=>{
    addTopicParagraph("coffee")
})

codingLink.addEventListener('click', ()=>{
    addTopicParagraph("coding")
})

rainLink.addEventListener('click', ()=>{
    addTopicParagraph("rain")
})

function addTopicParagraph(topicName){
    // delete anything in that area
    topic.innerHTML = "";

    // add different text based on which topic was clicked
    if(topicName==="coffee"){
        const node = document.createElement('p');
        node.innerHTML = "This is my coffee section";
        topic.appendChild(node);
    }
    else if(topic === "coding"){
        const node = document.createElement('p');
        node.innerHTML = "This is coding section";
        topic.appendChild(node);
    }
    else {
        const node = document.createElement('p');
        node.innerHTML = "This is my rainy day activity section";
        topic.appendChild(node);
    }
}