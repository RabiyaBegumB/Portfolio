let inp1=document.getElementById("inp1"),
inp2=document.getElementById("inp2"),
ans=document.getElementById("ans");

function show(data){
    if(data=="add"){
       ans.innerText=(inp1.value-0)+(inp2.value-0);
    }
    else if(data=="sub"){
       ans.innerText=inp1.value-inp2.value;
    }
    else if(data=="mul"){
       ans.innerText=inp1.value*inp2.value;
    }
    else{
        ans.innerText=inp1.value/inp2.value;
    }
}
