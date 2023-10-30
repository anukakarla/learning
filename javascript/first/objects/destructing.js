//destructing :it makes possible to unpack values 
//from arrays/properties from objects into distict varaibles.

//1.ArrayDestructing

let arr=["Anusha","kakarla",25,"B.Tech"];
[firstName,lastName,Age,Qualification]=arr;
console.log(Qualification);
//2.object destructing
let obj={
    myName:{firstName:"anusha",lastName:"kakarla"},
    age:25,
    qualiifcation:"B.Tech"
}
const {myName,age,qualification} =obj;
console.log(myName.firstName);

// object properties
//we can use use dynamic properties

let myFullName="Anusha kakarla";
let myAge=25;
let myBio={
    [myFullName]:"My Name",
}
console.log(myBio);//{ 'Anusha kakarla': 'My Name' } because i used [] in key it will be dynamic

let myBio1={
    [`${myFullName}`]:`I am ${myAge}`, //using template literals for more
    myFullName,
    myAge
}
console.log(myBio1);// below is the output
//{
//   'Anusha kakarla': 'I am 25',
//   myFullName: 'Anusha kakarla',
//   myAge: 25
// }

//we can also write like this
let myBio2={myFullName,myAge}
console.log(myBio2);//{ myFullName: 'Anusha kakarla', myAge: 25 }

//spread operator for array

let numbers=[1,3,6,7];
let myNum=[...numbers,2,4,5,8,9,10]
console.log(myNum);

