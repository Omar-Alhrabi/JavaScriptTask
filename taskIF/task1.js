console.log(" task '1' ")
let age = 25;
if (age > 18){
    console.log("You are an adult")
}
//
console.log(" task '2' ")
let num = 4 
if (num % 2 == 0){
    console.log("The number is even")
}

//
console.log(" task '3' ")
let char = "a"
if (char === "a"){
    console.log("It's a letter")
}
//
console.log(" task '4' ")
let list = [1, 2, 3]; 

if (Array.isArray(list)) {
console.log("It's an array");
}

//
console.log(" task '5' ")
let x = 5; 

if (x > 0) {
    console.log("x is a positive number")
}

//
console.log(" task '9' ")
let  z = 9;
if (z % 3 == 0){
    console.log("z is a multiple of 3")
}
//
console.log(" task '10' ")
let password = "mypassword123"
if ( password.length > 8 ){

  console.log("Your password is strong")  
}

//
console.log(" task '11' ")
let age1 = 30 ;
if (age1 > 18 && age1 < 65){
    console.log("You are of working age")
}

//
console.log(" task '12' ")
let color = "red";

(color === "red" || color === "green" || color=== "blue") 
&& console.log(`The color: "${color}" is a primary color`);
//


console.log(" task '13' ")
function isValidNumber(input) {
    return !isNaN(input) && input !== "" ? 
        `${input} is a valid number` : 
        `${input} is not a number`;
}
console.log(isValidNumber(11));     
console.log(isValidNumber("19"));    
console.log(isValidNumber("xyz"));   
console.log(isValidNumber("17.5"));   
console.log(isValidNumber("21F"));   