// A Js string is zero or more characters written inside quotes.
// JS strings are used for storing and manipulating Text.
// you cna use double or single quotes 
// strings can be created as primitives.
// from string literals,or as ObjectConstructor,usin the strng() constructor.

let myName="Anusha Kakarla"; //first way of declare string
console.log(myName);
let myFullName=new String("Anusha"); // 2nd way of declare string
console.log(myFullName);
console.log(myName.length);

//escape characters
// 1. ""  \"
// 2.''  \'
// 3.\    \\

let mydada="Kakarla \"Koteswar\" Reddy"
console.log(mydada);

// //Finding a String in a String (indexOf():it will count from first to last)
const myAddress="nethaji Nagar near";
console.log(myAddress.indexOf("nethaji"));
console.log(myAddress.indexOf("n"));//first n will show
console.log(myAddress.indexOf("n",13));
// // 2.lastindexof()
// // :it will show from last to first
console.log(myAddress.lastIndexOf("n"));

const myCollege="Aditya College of Engineering and Technology";
const myBtech=myCollege.search("of"); // it will show the index number
console.log(myBtech);


// // extracting string parts

// // there are 3 methods for extracting a part of a String.
// // slice(start,end),:extracts a part of the string and return the extract part in a new string
// // this method has 2 parameters the start and end position ,end will not included
// // substring(start, end): it works same like slice but if start index ,cannot accept negative indexs,
// // if u give index valuse as negatives then it will count from 0
// // substr(start,length)

let fruits="Apple,Banana,Grapes,JackFruit"
let fruit=fruits.slice(0,-2); // -2 means it will go upto last value and it will not include last 2 elements
let oFruit=fruits.slice(0,-1); // t will cut down
let fruity=fruits.slice(3,9) // 9th index will not include
let oneL=fruits.slice(-2)//it will count values from back
let one=fruits.slice(6)//it will count from frirst
// console.log(fruit);
// console.log(oFruit);
// console.log(fruity);
console.log(oneL);

let myTweets="Anusha is a name of multiple origins meaning \"dawn\" or \"auspicious morning\" in Sanskrit, and \"immortal\" or \"ambrosial\" in Persian (انوشه).[1][2] Anusha may also be etymologically traced to the Tamil astronomical term anusham.[3] Notable people with the name include"
let req1=myTweets.slice(15,-2);
console.log(req1,"slice");
console.log(myTweets.length);

let req=myTweets.substring(8,-1);//it will not take negatives and it will count from 0 to 8
console.log(req," : substring");



let myFamily="KKR,KSR,KMKR,KAR,GAR,KSR";
// let family=myFamily.substr(1,-9); //it will return empty if we give negatives values
let family=myFamily.substr(-2);// it will count from back
console.log(family);

// //Replace() method

// //string.prototype.replace(searchFor ,replaceWith)
// //The replace() method replaces a specified value
// //with another value in a string

let myLife="Kakarla Anusha JayaChandra Reddy"
let myNewLife=myLife.replace("JayaChandra","Koteswar");
console.log(`my New LIfe ${myNewLife}`);

// //points to remember 
// // 1. the replace() method doesnot change 
// //the string it is called on .it returns new string
// //2.By default this method replaces only first value
// //3.By default this method is a case sensitive;
// //4.any value in main string having a smaller value while replacing search for using capital it will remains same

let anu="kakarla anusha";
let newAnu=anu.replace("Kakarla","B");
console.log(newAnu);//kakarla anusha
console.log(anu);//kakarla anusha

// //charAt()
// //It returns the character at a specified index(position) at a string.
let str="Hello World!"
let indexvalue=str.charAt(1);
console.log(indexvalue);

// //charCodeAt()
// //this method returns the unicode of the character at a specified index in the string
// //the method returns a UTF-16 code
// //integer b/w 0 to 65535
let charCode=str.charCodeAt(9)
console.log(charCode," :charcode");

// //return last charcter of the unicode
 let que="Hello World"
 console.log(que.length);
 console.log(que.charCodeAt(10),que.charAt(10));

 //property access 
 //ecmascript 5(2009) allows property access [] on strings

 let string="hello World";
//  console.log(string[0]);

 //other methods 
 //touppercase() and tolowercase()

 console.log(string.toUpperCase());
 console.log(string.toLowerCase());

 //contact() method
  let fName="Anusha";
  let lName="kakarla";
  console.log(fName.concat(" ",lName));
  console.log(`${fName} ${lName}`);


//trim
// trim() method removes the whitespaces from both sides of a string.

let hello="               Hello World!"
console.log(hello.trim());

//converting string into array
//split() method splits a string into an array based upon provided separator or delimiter,

var text="anusha|Kakarla"
console.log(text.split("|"));





