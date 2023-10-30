let myFamily=["anusha","koteswar Reddy","sugaveni","aiswarya","MKR","sayamma"];
console.log("Anusha loves " + myFamily[1]);
console.log(myFamily.length);
console.log((myFamily[myFamily.length - 1]));
for(i=0; i<=myFamily.length-1;i++){
    // console.log(`${i} + ${myFamily}`);
    console.log(myFamily[i]);
}
for(let elements in myFamily){ //index values will show
    console.log(elements);
}
for(let elements of myFamily){ //data will show
    console.log(elements);
}
myFamily.forEach(function(elements,index,array) {
console.log(elements + " index : " + index +" "+ array);
})

myFamily.forEach((elements,index,array) =>{
console.log(elements + " index : " + index +" "+ array);
})
myFamily.push("jana");

console.log(myFamily);

myFamily.pop();
console.log(myFamily);

myFamily.unshift("xyz");
console.log(myFamily);

myFamily.shift();
console.log(myFamily);

const days=["mon","tues","wed","thrus"];
console.log(days.splice(4,0,"fri"));
days.splice(1,1,"Tuesday")
console.log(days);

//indexOf() 
var str="hello world";
console.log(str.indexOf('l'));
console.log(str.lastIndexOf('o'));

