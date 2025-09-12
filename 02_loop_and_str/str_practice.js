//uppercase ,lowercase

let str1= "Hello World" ;
console.log("to upper case ",str1.toUpperCase(str1));
console.log("to lower case ",str1.toLowerCase(str1));

//trim=> removes all white space
let str2= "  Bangla  desh  ";
console.log("remove all whitespace",str2.trim(str2));


//slice return a selected part of the string 
//end is exclusive
//syntax=> str.slice(start,end)
let str3=" Learning string methond in JS"
console.log(str3.slice(0,10));

console.log(str1.concat(str2))

//replace => str.replace(searchVal,newVal)
//replace => str.replaceAll(searchVal,newVal)

let str4= "hellololo"
console.log("replace ",str4.replace("lo","p"));
console.log("replace all",str4.replaceAll("lo","p"));


