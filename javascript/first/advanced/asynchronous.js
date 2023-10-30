let fun1=()=>{
    console.log(("hello aynchronous"));
   
    setTimeout(() => {
        console.log(("function 1 is called "));
        
    }, 2000);
     fun2();
}

let fun2=()=>{
    setTimeout(()=>{
        console.log("function 2 is called");
    },1000)
}
fun1();