// ATM Task

// let card_no=prompt("Enter your card number: ");
// let balance=5000;
// if(card_no==1234567){
//     let pin_no=prompt("Enter pin number: ");
//     if(pin_no=="1003"){
//         let amount=prompt("Enter amount: ");
//         if(amount>balance){
//             console.log("Insufficient balance");
//         }
//         else{
//             console.log("Withdraw successfully!!!");
//         }
//     }
//     else{
//         console.log("Invalid pin number");
//     }
// }
// else{
//     console.log("Invalid card number");
// }




// Famous Task
// let place=prompt("Enter the place: ");
// switch(place){
//     case "Ariyalur":
//         console.log("Cement Industry");
//         break;
//     case "Chengalpattu":
//         console.log("Mahabalipuram");
//         break;
//     case "Chennai":
//         console.log("Marina Beach");
//         break;
//     case "Coimbatore":
//         console.log("Textiles");
//         break;
//     case "Cuddalore":
//         console.log("Port");
//         break;
//     case "Dharmapuri":
//         console.log("Hogenakkal Falls");
//         break;
//     case "Dindigul":
//         console.log("Locks");
//         break;
//     case "Erode":
//         console.log("Turmeric");
//         break;
//     case "Kallakurichi":
//         console.log("Agriculture");
//         break;
//     case "Kancheepuram":
//         console.log("Silk saree");
//         break;
//     case "Kanyakumari":
//         console.log("Sunrise Point");
//         break;
//     case "Karur":
//         console.log("Home Textiles");
//         break;
//     case "Krishnagiri":
//         console.log("Mango");
//         break;
//     case "Madurai":
//         console.log("Jasmine");
//         break;
//     case "Mayiladuthurai":
//         console.log("Temple");
//         break;
//     case  "Nagapattinam":
//         console.log("Velankanni Church");
//         break;
//     case "Namakkal":
//         console.log("Egg");
//         break;
//     case "Nilgiiris":
//         console.log("Tea");
//         break;
//     case "Perambalur":
//         console.log("Maize");
//         break;
//     case "Pudukkottai":
//         console.log("Sittanavasal Cave paintings");
//         break;
//     case "Ramanathapuram":
//         console.log("Pamban Bridge");
//         break;
//     case "Ranipet":
//         console.log("Leather industries");
//         break;
//     case "Salem":
//         console.log("Mango");
//         break;
//     case "Sivagangai":
//         console.log("Chettinad Chicken");
//         break;
//     case "Tenkasi":
//         console.log("Coutrallam Falls");
//         break;
//     case "Thanjavur":
//         console.log("Thanjavur Temple");
//         break;
//     case "Theni":
//         console.log("Hills");
//         break;
//     case "Thiruvannamali":
//         console.log("Arunachalesvara Temple");
//         break;
//     case "Thoothukudi":
//         console.log("Pearl");
//         break;
//     case "Tiruchirapalli":
//         console.log("Rockfort");
//         break;
//     case "Tirunelvi":
//         console.log("Halwa");
//         break;
//     case "Tirupathur":
//         console.log("Rose");
//         break;
//     case "Tiruppur":
//         console.log("Knitwear");
//         break;
//     case "Tiruvallur":
//         console.log("Industrial belt");
//         break;
//     case "Tiruvarur":
//         console.log("Carnatic music");
//         break;
//     case "Vellore":
//         console.log("CMC Hospital");
//         break;
//     case "Viluppuram":
//         console.log("Gingee Fort");
//         break;
//     case "Virudhunagar":
//         console.log("Firewroks");
//         break;
//     default:
//         console.log("Invalid place");
// }



//Palindrome
let str=prompt("Enter the word: ");
let rev=str.split("").reverse().join("");
if(str==rev){
    console.log("Palindrome");
}
else{
    console.log("Not a palindrome");
}
