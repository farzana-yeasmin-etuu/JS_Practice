let btn1=document.querySelector("#btn")
let body=document.querySelector("body")
let p=document.querySelector("p")
let mode="light"
btn1.addEventListener("click",()=>{
    if(mode=== "light")
    {
        mode="dark"
        //done with js addeventlistener
        // body.style.backgroundColor="black"
        // p.style.color="white"

         //done with CSS and JS classList
        body.classList.add("dark")
        body.classList.remove("light")
        
    }
    else{
        mode="light"
        // body.style.backgroundColor="white"
        //  p.style.color="black"
        body.classList.add("light")
        body.classList.remove("dark")
    }
    console.log(mode)
});