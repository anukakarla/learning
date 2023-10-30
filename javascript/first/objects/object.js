// let object={
//     myName:"Anusha Kakarla",
//     myAge:25,
//     qualification:"B.tech",
//     getData:function () {
//         console.log(`My Name is ${object.myName} and age is ${this.myAge}`);
        
//     }
// }
// console.log(object.myAge);
// object.getData();

// //2nd way of writing functions in objects
// let objectF={
//     myName:"Anusha Kakarla",
//     myAge:25,
//     qualification:"B.tech",
//     getData(){
//         console.log(`My Name is ${object.myName} and age is ${this.myAge}`);
//     } 
// }
// objectF.getData();

// //3rd object inside objects
// let objectInsideObjects={
//     myName:{
//         firstName:"Anusha",
//         lastName:"Kakarla"
//     },
//     myAge:25,
//     qualification:"B.tech",
//     getData(){
//         console.log(`My Name is ${object.myName} and age is ${this.myAge}`);
//     } 
// }
// console.log(objectInsideObjects.myName.firstName);
// objectInsideObjects.getData();


// //this
// console.log(this,"this"); //{}
// //2
// function myData() {
//     console.log(this);
    
// }
// myData();
// //3
// var myNames="anusha";
// function myName1() {
//     console.log(this.myNames);
    
// }
// myName1();
// //4
// let obj={
//     name:"anu",
//     age:25,
//     myName(){
//         console.log(this);
//     }
// }
// obj.myName();

//5 arrow function is not work 
const obj1={
    name:"anu",
    age:25,
    myName:()=>{
        console.log(this);
    }

}
obj1.myName();//{}