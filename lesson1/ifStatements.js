// In this file, we will go over if statements.

// This creates a variable with a random value between 0 and 1
let num = Math.random() ; 

if(num < 0.5){
    console.log("This number is less than 0.5");
    console.log(num);
}
else{
    console.log("This number is greater than 0.5");
    console.log(num);
}

// What if we need to have more than two options?
let newNum = Math.random() ;
if(newNum < 0.3){
    console.log("This new number is less than 0.3");
    console.log(num);
}
else if(newNum < 0.6){
    console.log("This new number is greater than 0.3 and less than 0.6");
    console.log(num);
}
else{
    console.log("This number is greater than 0.6");
    console.log(num);
}

// Order matters. If we had reversed the order of the first two if statements then
// we couldn't say with certainty that a number would be between 0.3 and 0.6