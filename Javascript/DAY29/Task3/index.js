let num=prompt("Enter a number : "),
sum=0,
product=1;
for(let i=0;i<num.length;i++){
    sum+=Number(num[i]);
    product*=Number(num[i]);
}
if(sum==product){
    console.log(`${num} is spy number`);
}
else{
    console.log(`${num} is not a spy number`);
}