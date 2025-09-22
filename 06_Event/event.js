let btn1=document.querySelector('#btn1')
// btn1.onclick = (btn_obj)=>{
//     // console.log("btn1 was clicked")
//     // let a=26
//     // a++
//     // console.log(a);

//     //event object
//     console.log(btn_obj)
//     console.log(btn_obj.type)
//     console.log(btn_obj.target)
//     console.log(btn_obj.clientX,btn_obj.clientY)
//     console.log(btn_obj)

// };

let div=document.querySelector("div")
div.onmouseover =()=> {
    console.log("inside div")
};

//event listeners
//node.addEventListeners(event,callback)
btn1.addEventListener("click",(btn_event_obj)=>{
    console.log("handling by event listeners")
    console.log(btn_event_obj)
    console.log(btn_event_obj.type)
    console.log(btn_event_obj.target)
    console.log(btn_event_obj.clientX,btn_event_obj.clientY)
});

btn1.addEventListener("click",()=>{
    console.log("handling by event listeners-2")
});

//node.removeEventListeners(event,callback)


btn1.addEventListener("click",()=>{
    console.log("handling by event listeners-4")
});
btn1.addEventListener("click",()=>{
    console.log("handling by event listeners-5")
});

//removing handler 3
//assign function in handle3
let handler3 = ()=>{
    console.log("handling by event listeners-3")
}
//pass function in event for callback
btn1.addEventListener("click",handler3);
btn1.removeEventListener("click",handler3);


