let num=prompt("Enter the number: ");
let sum=0;
let add=0;
for(let i=0;i<num.length;i++){
    sum+=num.at(i)**num.length;
    add+=num.at(i);
}
if(sum==add){
    console.log("Armstrong number")
}
else{
    console.log("Not an armstrong number");
}