//expressions : combination of operands and operations are called expressions

// 5 + 6 ;
// 5 and 6 are called operands
// + is an operator
// operands can be number ,strings

// 6 types of operators are present in JSON
// 1.Assignment operators
// 2.Arthimetic operators
// 3.Comparison operators
// 4.logical operators
// 5.string operators
// 6.conditional (ternary) operators

// 1.Assignment Operator(=)
//     a.An Assignment opeartor assigns a value to its left operand based on the value of its right operand
var x=5;
var y=5;
console.log("x and y are equal or not" + x === y); //false (because of + symbol)
console.log(`is both the x and y are equal : ${x == y}`); //true from es6
console.log(x==y);
    

//increment
// 1.if used postfix, with operator after operand(for ex : x++)
// the increment operator increments and returns the value before incrementing.
var n=5;
console.log(n++); //5(after this n=6 so when u preincremnt it will take from this n=6 so next will be n=7)
console.log(++n); //7 
var i=5;
console.log(i--); //5 (after console n=4)
console.log(--i); //3

console.log(10** -1); //1/10
console.log( 10 ** 2); //100

//swap 
 var a=5;
 var b=10;
 a=a+b;
 b=a-b;
 a=a-b;
 console.log("value of a " + a);
console.log("value of b " + b);