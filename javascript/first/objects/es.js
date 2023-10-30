// es7/2016

//1.array includes
// Array.prototype.includes
let myNum=[1,2,3,4,5,6]
// let num=myNum.includes(7);//false
let num=myNum.includes(5);//true
console.log(num); //includes defines whether the data present or not

//2.exponential operator(**)

console.log(2**2);

// es8/2017

//string padding
//object.entries()
//object.values()

let name1="anusha kakarla";
console.log(name1.length);
console.log(name1.padStart(2));
console.log(name1.padEnd(10));

const people={myFood:"chicken",cost:250};
console.log(Object.values(people));
// console.log(Object.entries(people));//object to array
let obToArr=Object.entries(people);
let backToObjects=Object.fromEntries(obToArr);//back to objects
console.log(obToArr);
console.log(backToObjects);


//spread opeartor for objects

let myDetails={
    myName:"Anusha",
    age:26,
    hobbies:["sleeping","eating"]
}
 let sDetails={...myDetails};
 console.log(myDetails);
 console.log(Object.entries(myDetails));

//flat
 const zone=[["Zone-1","Zone-2"],
["Zone-3","Zone-4"],
["Zone-5","Zone-6",["Zone-7","Zone-8"]]];

// let flatArr=zone.reduce((accumulator,curr)=> accumulator.concat(curr));
// console.log(flatArr);
console.log(zone.flat(Infinity));//it wil flat all zones


//trimstart()
//trimend()

let myName="Anusha Kakarla          "
console.log(myName.trimStart());

//BigInt
let oldNum=Number.MAX_SAFE_INTEGER;
console.log(oldNum);

let newNum=9007199254740991n + 2n;
console.log(newNum);
console.log(typeof newNum);