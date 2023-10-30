//es6 => 1.let and const
// 2.destructings
// 3.template strings
// 4.object properties
// 5.default arguments
// 6.arrow functions
// 7.rest operators
//8.spread operators

//var is a function scope 
//let and const are block scope

function bioData(){
    var myFirstName="Anusha";
    console.log("inner "+myFirstName);
    if (true) {
        var myLastName="Kakarla";
        console.log("inner " +myLastName);
        console.log("  global inner " +myFirstName); 
    }
    console.log("innerOuter " + myLastName);
}
bioData();

//for var it can call anywhere even the innerOuter is outside of the if condtion
//for let and const it will show error beacause it is block scope

//template literals
const myName = 'Anusha';
console.log(`Hello ${myName}`); // Hello Anusha

for(i=0;i<=10;i++){
    var a=20;
    console.log(`${a} * ${i} = ${a * i}`);
}
//default parameters
function addNumbers(numOne, numTwo=5){
    return numOne+numTwo;
}
console.log(addNumbers(5));

