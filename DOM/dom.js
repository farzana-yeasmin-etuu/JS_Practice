//const { createElement } = require("react")

//we can append string in append() 
const body= document.body
body.append("hello world")


//string cannot be append in appendChild()
//body.appendChild("hello2")<=wrong 

const div = document.createElement("div")
div.innerText = "hello everyone"
const div2 = document.createElement("div")
//innerText doesn't shows hidden text when display:hidden
div2.innerText="this div is created by JS dom"
//textContent shows hidden text when display:hidden
div2.textContent="this is a text content"
body.append(div)
body.append(div2)


const div3=document.createElement("p")
div3.innerText="this is a para"
body.append(div3)

//diff between innertext and textContent
const div4 = document.querySelector("div")
//doesn't show hidden text
console.log(div4.innerText)
console.log(div4.textContent)

//innerHTML is use to add html tag with content
const div5=document.createElement("div")
div5.innerHTML="<strong>this is inner Html</strong>"
body.append(div5)


