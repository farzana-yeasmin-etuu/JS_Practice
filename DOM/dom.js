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

//html tags also can be added this way
const italic=document.createElement("i")
italic.innerHTML="this is an italic sentence"
body.append(italic)


//remove any element through id
const rem=document.querySelector("#rem")
rem.remove()
div.append(rem)

//remove through removeChild()
div.removeChild(rem)
div.append(rem)

//getAttribute
const div6=document.querySelector("div")
const pget=document.querySelector("#get")
console.log(pget.getAttribute("id"))
//alternate of get attribute when available as a method
console.log(pget.id)
console.log(pget.title)

const set=document.querySelector(".set")
console.log(set.getAttribute("title"))
console.log(set.getAttribute("class"))
console.log(set.title)
//set attribute
console.log(set.setAttribute("title","no-title"))
console.log(set.setAttribute("class","changed-class"))
set.removeAttribute('class')

//dataset
console.log(pget.dataset)
console.log(pget.dataset.test)
console.log(pget.dataset.longerNameChange)
pget.dataset.newName="new data set"
console.log(pget.dataset.newName)

//class list
pget.classList.add("new-class")
pget.classList.remove("cl2")
//toggle remove the attribute if it exist and add if doesn't exist

pget.classList.toggle("cl4") //add cl4 as it doesn't exist
pget.classList.toggle("cl1") //remove cl1 as it exists
//automatically add or remove if a bool value is passed
pget.classList.toggle("cl5",true) //add
pget.classList.toggle("cl6",true) //add
pget.classList.toggle("new-class",false) //remove existing class name

//style=> use css property
pget.style.backgroundColor ="red"
div.style.backgroundColor="blue"
set.style.backgroundColor="green"
italic.style.backgroundColor="orange"
italic.style.fontSize= "50px"






