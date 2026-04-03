// function sample(){
//     alert("Welcome")
// }
// sample();



// console.log(document.getElementById("txt"));
// console.log(document.getElementById("txt").innerText);



let txtStatus=false;
function sample(){
    txtStatus=!txtStatus;
    if(txtStatus==true){
        document.getElementById("txt").style="color:navy";
        document.getElementById("txt").innerText="Welcome Developers";
    }
    else{
        document.getElementById("txt").style="color:black";
        document.getElementById("txt").innerText="Hello Developers";
    }
}