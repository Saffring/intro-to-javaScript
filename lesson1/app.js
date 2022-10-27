console.log("connected");

dessertList = [{
    'name': 'Saffrin',
    'dessert': 'Carrot Cake'
},
{
    'name': 'Malli',
    'dessert': 'Ice Cream'
}

];

let button = document.querySelector("button");

let coffeeLink = document.querySelector("#coffee");
let codingLink = document.querySelector("#coding");
let rainLink = document.querySelector("#rain");

let submitButton = document.querySelector("#submit-button");

let topic = document.querySelector("#topic");

let textInput = document.querySelector("#example-text-input");

// Event listeners

// Give an alert if the "Press me" button is clicked
button.addEventListener('click', function(){
    alert("You've pressed the button");
})


// Adding an event listener for the three images.
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
    console.log("add?")
    generateDessertTable(dessertList);

})

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

// run table generation when page is started
generateDessertTable(dessertList);