//using for of loop
let price=[250,645,300,900,50]
let index=0;

for(let p of price){
    let offer = p/10;
    console.log(`before offer ${price[index]}`)
    price[index]=price[index]-offer
    console.log(`After offer ${price[index]}`)
    index++;
}

//using for loop
price2=[250,645,300,900,50]
let sum=0;
for(let i=0;i<price2.length;i++)
{
let offer2=price2[i]/10
price2[i]=price2[i]-offer2
console.log(price2[i])
}
