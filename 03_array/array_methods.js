//remove first element
//arr.shift()
let arr =["bloom","micro","uber","goolge","ibm","flix"]
console.log(arr)
arr.shift()
console.log(`shifting element ${arr}`)
arr.splice(1,1,"ola")
console.log(`splicing element ${arr}`)
arr.push("amazon")
console.log(`pushing an element at the end ${arr}`)