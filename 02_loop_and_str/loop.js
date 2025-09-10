//for loop
 
for(let i=0;i<5;i++)
{
    console.log("loop & srtings");
}

//while loop
let i=1;
while(i<5)
{
    console.log("while loop running");
    i++; 
}

//do while
let j=1;
do {
    console.log("do while loop");
    j++;

} while(j<5);


//for-of loop
//It is used for string and arrays
//syntax of for-of for(let val of string)
//val=initialization ,string= variable name
//for-of loop is auto initialized and increase automatically
let string ="loops";
let cnt= 1;
for(let val of string)
{
    console.log(" val of ",cnt,"st string is =",val);
    cnt++;
}


//for-in loop
//used for objects and arrays

let student ={
    name: "Farzana",
    age: 22,
    uni_id: 49,
    isPass: true, 

}

for(let key in student)
{
    console.log("key :",key,"value=",student[key]);
}