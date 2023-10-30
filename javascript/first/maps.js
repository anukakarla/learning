// array.prototype.map()
// let newArray=arr.map(callback(currentValue[,index[,array]]{
//     return element for newArray ,after excuting something
// }[,thisArg]));

// returns a element for newArray containing the results of calling a function an every element in this array.

const arr=[1,4,9,16,25]
const newArr=arr.map((currElement,index,array)=>
{return currElement> 9})
console.log(arr);
console.log(newArr); //maps will not effect the original data

let newArr1=arr.map((curr,indx,array)=>{
    return`index no =${indx}  and the  value is ${curr} belongs to ${array} `
})
console.log(newArr1);
//forEach
let newArrfor=arr.forEach((curr,indx,array)=>{
    return`index no =${indx}  and the  value is ${curr} belongs to ${array} `
})
console.log(newArrfor);

//diff between forEach and maps 

// 1.returning value 
// a)foreach returns undefined and maps returns newArray with the transformed elements
// b)even if they do the same job values remains different

// 2.ability to chain other methods
// a)forEach returns undefined we cannot do the chaining like reduce(),filter(),sort()..... methods
// b)maps returns newArrays so it  can chain methods....


//find the square root of each element in an array
let arrSquare=[25,36,49,64,81]

let newArrSquare=arrSquare.map((currElement)=>{
    return Math.sqrt(currElement)
})
console.log(newArrSquare);

//multiply each element by 2 and return only these element which are greater than 10

let arrayM=[2,3,4,6,8]
 let newArrayM=arrayM.map((currElement)=>{
    return `${currElement *2}`

 }).filter((curr)=>{return curr>10})
 console.log(newArrayM);

 //usage of map,filter,reduce method
 let arr2=arrayM.map((current)=> current * 2).filter((curren)=> curren >10).reduce((accumulator,currElement)=>accumulator+=currElement);
 console.log(arr2);


 //reduce method
//  1.flatten an array means to convert the 3d or 2d array into a single dimensional array.
// reduce() excutes the reducer function (that u provide) 
// on each element of an array,resulting an single output value,
// reduce() has 4  aruguments:
// any
// accumulator,
// current Value,
// current Index,
// source Array

let arrReduce=[1,2,3,4,5];
let newarrReduce=arrReduce.reduce((accumulator,currElement,index,arr)=>{
    return accumulator+=currElement;
})
console.log(newarrReduce);

//when u want to add new element in an array try this 
// arrReduce.unshift(8)
let newarrEReduce=arrReduce.reduce((accumulator,currElement,index,arr)=>{
    return accumulator+=currElement;
},6)
console.log(newarrEReduce); //adding elements in an array (only one element will take over there)

//how to flatten an array 3d to 2d

const zone=[["Zone-1","Zone-2"],
["Zone-3","Zone-4"],
["Zone-5","Zone-6"]];

let flatArr=zone.reduce((accumulator,curr)=> accumulator.concat(curr));
console.log(flatArr);
