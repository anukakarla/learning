// hiherOrderFunction:function which takes another function as an arguments called HOF
// callback:
// a callback is a higher order function that accepts other functions and executes them at some point in the future
// callbacks are functions that can be passed to other functions and executed when the result of those functions is needed.
// a normal function that will be executed after the higher order functions is done executing.
// It can also take some parameters if needed, but it's optional and not always necessary to have a
// callback in your code.
// Here are examples of how you could use each type of Higher Order Function (HOF
//     ):
    // Example 1 - Filter
    // const numbers = [234567890, 'hello', null,undefined];
    // // filter() returns new array with elements for which condition(element) evaluates true
    // let filteredNumbers = [];
    // console.log('Original Array:',numbers);
    // filteredNumbers=numbers.filter((number)=>typeof number === "string");
    // console.log("Filtered Numbers:",filteredNumbers);// Output:["hello"]

    let sum=(a,b)=>{
        return a+b;
    }
//    console.log(sum(2,3)); 
let sub=(a,b)=>{
    return Math.abs(a-b);
}
console.log(sub(9,100));

let mul=(a,b)=>{
    return a*b;
}

let calculator=(num1,num2,operator)=>{
    return operator(num1,num2)
}
console.log(calculator(2,3,mul));//calling one function in another function is called callback