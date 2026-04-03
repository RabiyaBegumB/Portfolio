// local la irukuradha global ah access panradhu
// let a;
// function sample(z){
//     a=z;
//     console.log(z)
// }
// sample(10);
// console.log(a)


// let a=10;
// function sample(){
//     // let a;
//     console.log(a);
// }
// sample();
// console.log(a)

// block scope
var a=10;
if(true){
    // var a;
    let a;
    a="welcome";
    console.log(a)
}
console.log(a)