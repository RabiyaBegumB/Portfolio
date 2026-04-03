let num=prompt("Enter a number : "),
sqr=(num*num).toString(),
lastNum=sqr.slice(-num.length)
if(lastNum==num){
    console.log(`${num} : Automorphic Number`);
}
else{
    console.log(`${num} : Not a Automorphic Number`)
}
