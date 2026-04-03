let Lnum=prompt("Enter the last number: "),
rev="";
for(i=1;i<=Lnum;i++){
    rev=i.toString().split("").reverse().join("");
    console.log(rev)
}