//function

function myFunction(msg){
    console.log(msg);
    // return a+b;
}
myFunction("Implementations of function in JS");

//using function syntax
function sum(a,b){
    return a+b;
}
let val = sum(10,3)
console.log("sum using function ",val);

//using arraow function syntax
const arraow_sum=(a,b)=>{
    s=a+b;
    return s;

}
let val2 = sum(3,10);
console.log("sum using arrow function ",val2)

//multiplication using arrow function
const mul=(c,d)=>{
    m=c*d;
    console.log("multiplication using arrow function",m)

}
mul(5,4)