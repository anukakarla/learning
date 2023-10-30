// //js date object represents a single moment in time in a platform-independent format 
// //.Date objects contain a numer that represents milliseconds .since 1 Jan 1970 UTC.

// //4 ways of create a new date Object:
// //1. new Date()
// //2.new Date(year,month,day,hours,minutes,seconds,milliseconds)
// //3.new Date(milliseconds)
// //4.new Date(date string)

let currDate=new Date();
console.log(currDate);
console.log(currDate.toLocaleString());//date with time 7/5/2023, 4:21:20 PM
console.log(currDate.toString());//complete day Wed Jul 05 2023 16:21:20 GMT+0530 (India Standard Time)
console.log(currDate.toLocaleDateString()); //only date will come 7/5/2023
console.log(currDate.toLocaleTimeString());//only time will come 4:23:04 PM
console.log(currDate.toTimeString()); //16:23:52 GMT+0530 (India Standard Time)

//Date.now() //it will count from 1 jan 1970
console.log(Date.now()); // 1688554679121(it will count from millsiseconds)

let newVal=new Date(2023,4,7,16,34,2,0)
console.log(newVal.toLocaleString());
let currDate1=new Date(2029)//if u put date in method it will take as 1970 so,we  need to take month
console.log(currDate1.toLocaleString());//1/1/1970, 5:30:02 AM
 let curDate=new Date(2023,2);
 console.log(curDate.toLocaleString());//3/1/2023, 12:00:00 AM

 //new Date(date String)
 //it creates a new date object from a date string
 let dateString=new Date("April 15, 1998")
 console.log(dateString.toLocaleString());//4/15/1998, 12:00:00 AM
new Date(milliseconds)
 let d=new Date(1688560748702);
 console.log(d.toLocaleString());

 //
 let cuDate=new Date();
 console.log(cuDate.toLocaleString());
 console.log(cuDate.getFullYear());
 console.log(cuDate.getMonth());
 console.log(cuDate.getDay()," day");
 console.log(cuDate.getHours());
 console.log(cuDate.setDate(6));

// (function(){
//     setInterval(()=>{
//         var d=new Date().toLocaleTimeString();
//     },1000)
// })();