// function sample(a,b,c){
//     if(c=="add"){
//         console.log("Add: "+a+b);
//     }
//     else if(c=="sub"){
//         console.log("Sub: "+(a-b));
//     }
//     else if(c=="multi"){
//         console.log("Multiply: "+a*b);
//     }
//     else if(c=="div"){
//         console.log("Divide: "+a/b);
//     }
//     else{
//         console.log("invalid operator");
//     }
// }
// sample(1,2,"add");
// sample(1,2,"sub");
// sample(1,2,"multi");
// sample(1,2,"div");
// sample(1,2,"mod");








// Loan Approval Task
// let age=prompt("Enter your age: ");
// let salary=prompt("Enter your salary: ");
// let credit=prompt("Enter your credit score: ");
// if(age>20 && age<=60){
//     if(salary>25000){
//         if(credit>700){
//             console.log("Loan Approved");
//         }
//         else{
//             console.log("Low credit score");
//         }
//     }
//     else{
//         console.log("Salary too low");
//     }
// }
// else{
//     console.log("Age not eligible");
// }










// Mobile PIN Validator
// let pin=prompt("Enter your mobile PIN: ");
// function seq4(pin){
//     if(pin.at(1)-pin.at(0)==1 || pin.at(2)-pin.at(1)==1 || pin.at(3)-pin.at(2)==1){
//         console.log("Invalid(Sequential)");
//     }
//     else{
//         if(pin.at(0)==pin.at(1) || pin.at(1)==pin.at(2) || pin.at(2)==pin.at(3)){
//             console.log("Invalid(Same digit)");
//         }
//         else{
//             console.log("Valid PIN");
//         }
//     }
// }
// function seq6(pin){
//     if(pin.at(1)-pin.at(0)==1 || pin.at(2)-pin.at(1)==1 || pin.at(3)-pin.at(2)==1 || pin.at(4)-pin.at(3)==1 || pin.at(5)-pin.at(4)==1){
//         console.log("Invalid(Sequential)");
//     }
//     else{
//         if(pin.at(0)==pin.at(1) || pin.at(1)==pin.at(2) || pin.at(2)==pin.at(3) || pin.at(3)==pin.at(4) || pin.at(4)==pin.at(5)){
//             console.log("Invalid(Same digit)");
//         }
//         else{
//             console.log("Valid PIN");
//         }
//     }
// }
// if(pin.length==4){
//     seq4(pin);
// }
// else if(pin.length==6){
//     seq6(pin)
// }
// else{
//     console.log("Invalid(length)");
// }



// Parking Fee system
let hour=prompt("Enter the parking hour: ");
let fee=20;
let remain_hour;
if(hour<=2){
    console.log("Fee: "+fee*hour);
}
else if(hour>=3 && hour<=5){
    remain_hour=15;
    fee=fee*2+(hour-2)*remain_hour;
    console.log("Fee: "+fee);
}
else{
    remain_hour=10;
    fee=fee*2+3*15+(hour-5)*remain_hour
    if(fee>200){
        console.log("Fee: 200");
    }else{
    console.log("Fee: "+fee);
    }
}
