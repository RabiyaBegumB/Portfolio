let player=prompt("Choose stone,paper or scissor:Player ");
let computer=prompt("Choose stone,paper or scissor:Computer ");
switch(true){
    case player===computer:
        console.log("Draw");
        break;
    case (player==="stone" && computer==="scissor") || 
    (player==="paper" && computer==="stone") ||
    (player==="scissor" && computer==="paper"):
        console.log("Player wins!!!");
        break;
    default:
        console.log("Player lost!!!");
}