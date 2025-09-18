let arr=[1,3,5,6,7,"hello"]
arr.forEach(function print(val)
{
    console.log(val)
});

//using arrow function 
let arr2=["ctg","dhaka","khulna"]
arr2.forEach((val2)=>{
    console.log(val2)

});

//for each contains 3 parameter
//value,index,array
arr2.forEach((val2,index,arr2)=>
{
    console.log(val2,index,arr2)
})

//square of each value
let arr4=[1,3,5,6,7,"hello"]
arr.forEach(function print(val4)
{
    console.log("square of ",val4,"is ",val4*val4) //sqaure=> val4**2
});