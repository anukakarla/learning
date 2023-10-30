//functions : a function is a block of code designed to perform a particular task.
// #a function can take input, process it and return output as per the requirement.
function sum(){                  
    var a=10,b=20; // definning the functionalities upto clodsed curely braces
    total=a+b;
    console.log(total);
}
sum(); // invoking or calling  the function

function sub(a,b) {
    total=b-a;
    console.log(total);
    
}
sub(20,30);

//fun expression (we call a variable we assign function name in that then that expression is called function expression)
// A fun expression creates an anonymous (unnamed) function that returns its result when called.
// function add(a,b){
//     total=a+b;
//     console.log("sum of two numbers "+total);

// }
// var adder=add(1,2);
// adder;

function add(a,b){
  return  total=a+b;

}
var adder=add(2,2);
console.log("sum of two number " +adder);

//anoynmious function
var myFunc=function(a,b){
return mul=a*b
}
console.log("multiplication of two numbers " + myFunc(5,6));
// myFunc(5,6);

//arrow function 
// : arrow functions are shortened versions of regular JavaScript functions with lexical this binding. They also have
let arrow=(x)=> x**4;
console.log('square root ' ,arrow
(2))
const addition=()=>{
    let a =3,b=4;
    return `sum of a and b is ${a+b}`
}
console.log(addition());
