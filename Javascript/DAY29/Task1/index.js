let num=prompt("Enter a number: "),
rev="";
rev+=num[num.length-1];
for(let i=num.length-2;i>=1;i--){
    rev+=num[i];
}
rev+=num[0]
console.log(`Entered Number : ${num}`)
console.log(`Reversed Number : ${rev}`)
