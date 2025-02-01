
console.log(" task '1' ")
var person ={
    name : "Adem" ,
    age : 25 ,
    gender : "male"
};
console.log(Object.keys(person))
//
console.log(" task '2' ")
console.log(Object.values(person))
//
console.log(" task '3' ")
console.log(Object.entries(person))
//
console.log(" task '4' ")
var person1 ={
    name : "Adem" ,
    age : 25 ,
};
var person2 = {
    gender : "male"
}
console.log(Object.assign(person1 , person2))
//  

console.log(" task '5' ")
let personFrez ={
    name : "Adem" ,
    age : 25 ,
};
Object.freeze(personFrez)
personFrez.name = "Bob"; 
personFrez.gender = "female"; 
delete personFrez.age;

console.log(personFrez)

//
console.log(" task '6' ")
var personSea ={
    name : "Adem" ,
    age : 25 ,
};
Object.seal(personSea);
delete personSea.age;
console.log(personSea)