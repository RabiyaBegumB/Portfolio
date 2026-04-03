let stone=document.getElementById("stone"),
paper=document.getElementById("paper"),
scissor=document.getElementById("scissor"),
me=document.getElementById("me"),
comp=document.getElementById("comp"),
res=document.getElementById("res");

function play(opt){
    // me
    if(opt=="stone"){
        me.innerText=stone.innerText;
    }
    else if(opt=="paper"){
        me.innerText=paper.innerText;
    }
    else{
        me.innerText=scissor.innerText;
    }
// computer
    randNo=Math.floor(Math.random()*3)-0;
    if(randNo==0){
        comp.innerText="✊";
    }
    else if(randNo==1){
        comp.innerText="🖐";
    }
    else{
        comp.innerText="✌";
    }

    // result
    if((opt=="stone" && randNo==0) || (opt=="paper" && randNo==1) || (opt=="scissor" && randNo==2)){
        res.innerText="Draw!!!";
        res.style.background="steelblue";
    }
    else if((opt=="stone" && randNo==2) || (opt=="paper" && randNo==0) || (opt=="scissor" && randNo==1)){
        res.innerText="Won!!!";
        res.style="background-color:#068f06;border:none";
    }
    else{
        res.innerText="Lose!!!";
        res.style="background-color:#dd0303;border:none";
    }
}