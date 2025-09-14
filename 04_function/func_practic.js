//print vowels in a string

function vowels(s)
{  let count=0;
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=='a' || s[i]=='e'|| s[i]=='i'|| s[i]=='o'|| s[i]=='u')
        {
            console.log(s[i]);
            count++;
        }
    }
    console.log("number of vowels are ",count)
}

let string = vowels("Helao Worludi")


//print vowels using arrow functions

const arr_vow=(s)=>
{   
    let count=0;
    console.log(" printing vowels using arrow function ")
    for(let i=0;i<s.length;i++)
    {
        if(s[i]=='a' || s[i]=='e'|| s[i]=='i'|| s[i]=='o'|| s[i]=='u')
        {
            console.log(s[i]);
            count++;
        }
    }
    console.log("number of vowels are ",count)
}
arr_vow("farzanayeasminetu")



