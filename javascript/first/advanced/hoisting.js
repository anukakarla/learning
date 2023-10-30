// hoisting:It is a js mechanisam where varaiables,functions and declarations are moved into move into top of the scope
//before the code

//ex:

console.log(myName);//undefined
var myName; //if i use let instead of var it will not excute
myName="anusha";

//how it excutes 

var myName;
console.log(myName);
myName="anusha";

// scope chain:
//1.the scope chain is used to resolve the value of varaiable names in js
//2.scope chain in js is lexically defined,which means that we can see what the scope
//chain will be looking at the code.


let a="Hi ,"
let first=()=>{
    let  b=" how are u ?";
    let second=()=>{
        let c=" i am fine."
        console.log(`${a+b+c}`);
    }
    second();
};first()

//closures
let outerFun=(a)=>{
    let e=6;

    let inner=()=>{
        sum=a+e;
        console.log(`sum of a and e is ${sum}`);
    }
    return inner
}
// outerFun(6)//if i write like this it show empty

let closureM=outerFun(6);
closureM();//we need to call the above linea