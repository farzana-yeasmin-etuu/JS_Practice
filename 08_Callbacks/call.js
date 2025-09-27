console.log(1)
console.log(2)
console.log(2)
setTimeout(()=>{
    console.log(1)},6000)

console.log(1)

//function callbacks

function sum(a,b){
    console.log("sum ", a+b)
}
function calculator(a,b,Callbacks)
{
    Callbacks(a,b);
}
calculator(1,3,sum)


//nesting 
//callback nesting=>callback hell
function getData(dataId,getNextData){
    setTimeout(()=>{
        console.log("data",dataId);
        if(getNextData){
            getNextData();
        }
    },2000)
}

//callback hell=>pyramid of dom
getData(1,()=>{
    getData(2,()=>{
        getData(3,()=>{
            getData(4);
        });
    });
});

//callbacks are solved by promises
//promise is for "eventual completeion of task
//promis(resolve,reject)=>{....}
//promise states are
//pending
//fulfilled
//rejected

let promise = new Promise((resolve,reject)=>
{
    console.log("I am a promise");
    resolve(123);
});

//promise=> .then() & .catch()
//promise.then((res)=>{...})
//promise.catch((err)=>{...})
