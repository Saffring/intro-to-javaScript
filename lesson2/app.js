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

let apiInput = document.querySelector("#api-input");
let apiButton = document.querySelector("#api-button");
let apiResult = document.querySelector("#api-result")

// Event listeners

// Give an alert if the "Press me" button is clicked
button.addEventListener('click', function(){
    alert("You've pressed the button");
})


// Adding an event listener for the three images.
coffeeLink.addEventListener('click', ()=>{
    addTopicParagraph("This is my coffee section");
})

codingLink.addEventListener('click', ()=>{
    addTopicParagraph("This is the coding section");
})

rainLink.addEventListener('click', ()=>{
    addTopicParagraph("This is my rainy day activity section");
})

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


const apiURL = 'https://swapi.dev/api/people/';

// add event listener for api button
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

function addCharacterName(character){
    apiResult.innerHTML = '';
    apiResult.innerHTML = character['name']
}

function addErrorBar(){
    apiResult.innerHTML = '';
    apiResult.innerHTML = '<div class="alert alert-warning" role="alert">This ID was not found</div>';
}