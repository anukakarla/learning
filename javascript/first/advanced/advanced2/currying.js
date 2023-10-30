// currying:technique of evaulating function 
// with multiple arguments,into sequence of function with single argument.

function sum(num1){
    return function (num2) {
        return function(num3){
            console.log(num1+num2+num3);
        }  
    }
}
sum(2)(3)(4);

const sum1=(num1)=>{(num2)=>(num3)=>{console.log(num1+num2+num3)}}
sum1(5,3,4);


