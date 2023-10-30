var myName="anusha";
var age=25;
var study=true;
console.log(typeof(myName)); //typeof === it describe which data type it is
console.log(typeof(age));
console.log(typeof(study));

//diff b/w null and undefined

var mName=null;
console.log(mName); //null
console.log(typeof(mName)); //data type of null is object


var iAmGood;
console.log(iAmGood); //undefined
console.log((typeof(iAmGood)));  //data type of undefined is undefined

//bugs -----------------
console.log(9 - "5"); //4 it is a bug if it + it will act as a contact the values 
console.log("anu" - "kakarla"); //NAN

//NaN 
// (1.NaN is a property of global object
// 2.It is a Variable in Global Space
// 3.the intial value of NaN is NOT A NUMBER)

var myPhoneNum=7989245861
var mylife="good"
console.log(isNaN(myPhoneNum)); //false (beacause it is a number)
console.log(isNaN(mylife));// true (it ia not a number)

console.log(NaN === NaN); //false
console.log(Number.NaN === NaN); //false
console.log(isNaN(NaN)); //true
console.log(isNaN(Number.NaN)); //true
console.log(Number.isNaN(NaN)); //true

