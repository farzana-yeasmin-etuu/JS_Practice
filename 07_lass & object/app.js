//create a object
const student = {
    fullName:"Farzana",
    marks: 25,
    printmarks: function ()
    {
        console.log(this.marks); //marks ca be access through 'this' keyword
    },

};

//__proto__
const student2 = {
    id:2232334
}
student2.__proto__ = student

//inheritance

class parent{
    hello()
    {
        console.log("welcome")
    }
}
class Child extends parent{}
let obj=new Child()

//practice
//create a class user with 2 properties
//class also have  method called viewData() that allows user to view

let data ="info"
class user {
   constructor(name,email,contact)
   {
     this.name = name
     this.email= email
     this.contact= contact
   }
   viewData()
   {
    console.log("data ",data)
   }
}

stu1= new user("Farzana","abc@gmail",123456)
stu2= new user("Yeasmin","abcd@gmail",12345678)

class admin extends user {
    constructor(name,email,contact)
    {
        super(name,email,contact)
    }
    edit()
    {
        data="new info"
    }
}