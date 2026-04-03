let cardNo=document.getElementById("cardNo"),
fromDate=document.getElementById("fromDate"),
endDate=document.getElementById("endDate"),
holderName=document.getElementById("name"),
cvvNo=document.getElementById("cvvNo"),
inpNo=document.getElementById("inpNo"),
inpFrom=document.getElementById("inpFrom"),
inpTo=document.getElementById("inpTo"),
inpName=document.getElementById("inpName"),
inpCvv=document.getElementById("inpCvv"),
card=document.getElementById("card");

function show(data){
    switch(data){
        case "Num":
            cardNo.innerText=inpNo.value;
            break;
        case "From":
            fromDate.innerText=inpFrom.value;
            break;
        case "To":
            endDate.innerText=inpTo.value;
            break;
        case "Name":
            holderName.innerText=inpName.value;
            break;
        case "Cvv":
            if(inpCvv.value===""){
                cvvNo.innerText="XXX";
            }else{
 cvvNo.innerText=inpCvv.value;
            }
            break;
        default:
            console.log("Invalid");
    }
}

let flipped = false;

function flip(){
    if(!flipped){
        card.style.transform = "rotateY(180deg)";
        flipped = true;
    } else {
        
        card.style.transform = "rotateY(0deg)";
        flipped = false;
    }
}