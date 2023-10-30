var tomorrow="raining";
if (tomorrow=="raining") {
    console.log("take rain coat");
} else {
    console.log("no raincoat");
}
 //leap year
 var year=2016;
 if ((year % 4 === 0 && year % 400 === 0) || year % 100 !== 0) {
    console.log( year + " is leap year");
    
 } else {
    console.log(year + " not a leap year");
    
 }
 //ternary operator

//  varaibleName =(condition)?value1:value2;
//  value1=true
//  value2=false
//  variable name = true? 'yes' : 'No';
var age=15;
age=(age>22)?(console.log("eglible for marriage")):(console.log("not eligible for marriage"));

//switch case

var area="rectangle"
var r=5,l=4,b=2 ,PI=3.14;
switch (area) {
    case "circle":
        console.log("area of circle is : " + PI* r**2);
        break;
        case "rectangle":
            console.log("area of rectangle is : " + (l * b) /2);
            break;
            case "triangle":
                 console.log("area of triangle is : " +(l * b));
                 break;
    default:
        console.log("give a valid data");
}


//while loop

var num=0;
//block scope [{}= the data or condition which is present in between these curely braces  are called block scope]
while (num<=10) {
    console.log(num++);
    
}

// do-while

var n=0;
do {
    console.log("n value is " + n);
    n++;
    
} while (n <= 10);

//for loop
for(i=0;i<=10;i++){
    console.log("i value is :" + i);
}

//print table

// for(var i=0; i<=10 ; i++){
//     var e=8;
//     console.log("table " + (e + " * " + i + "= "+(e*i)));
// }

for(var i=0; i<=10 ; i++){
    var e=10;
    switch (e) {
        case 8:
            console.log("table " + (e + " * " + i + "= "+(e*i)));
            break;
            case 10:
            console.log("table " + (e + " * " + i + "= "+(e*i)));
            break;
            case 1:
            console.log("table " + (e + " * " + i + "= "+(e*i)));
            break;
    
        default:
            console.log("give valid data");
            break;
    }
    
}


