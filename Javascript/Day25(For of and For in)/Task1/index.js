let arr=[35,7,91,3,57,9,13,5],
small=arr[0],
secondSmall=arr[0];
console.log(`Array : ${arr}`)
for(i=0;i<arr.length;i++){
    if(small>arr[i]){
        secondSmall=small;
        small=arr[i];
    }
    else if(secondSmall>arr[i] && small<arr[i]){
        secondSmall=arr[i];
    }
}
console.log(`Smallest Number : ${small}`)
console.log(`Second Smallest Number : ${secondSmall}`)