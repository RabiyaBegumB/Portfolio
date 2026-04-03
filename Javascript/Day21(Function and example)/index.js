// let a=prompt("Enter the word: ");
// document.getElementById("txt").innerText=a;
let a=prompt("Enter A value: ")-0;
let b=prompt("Enter B value: ")-0;
document.getElementById("aValue").innerText=a;
document.getElementById("bValue").innerText=b;
let answer=document.getElementById("ans");
function total(data){
    switch(data){
        case "add":
            answer.innerText=a+b;
            break;
        case "sub":
            answer.innerText=a-b;
            break;
        case "mul":
            answer.innerText=a*b;
            break;
        default:
            answer.innerText=a/b;
    }
}
