// function sample(a,b){
//     let c;
//     c=a+b;
//     return c;
//     console.log("welcome")
// }
// let d=sample(10,20);
// console.log(d);


// function sample(){
//     return 10;
// };
// let d=sample();
// console.log(d);

// function sample(){
//     return 10;
// };
// let d=sample();
// console.log(d+sample());

// function demo(z){
//     return document.getElementById(z);
// }
// let a=demo("txt1"),
// b=demo("txt2");

// a.style="color:red";
// a.innerText="Bye";

// b.style="color:blue";
// b.innerText="Thank you"

function demo(){
    console.log("Hello");
    return 30;
}
let k=demo();
function test(z){
    return z;
}
console.log(test(46));
console.log(k+demo());
console.log(demo()+test(8));