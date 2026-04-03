let sum=0;
while(true){
    let num=prompt("Enter the number : ")-0;
    if(num<0){
        break;
    }
    else{
        sum+=num;
    }
}
console.log(sum)