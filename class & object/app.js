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