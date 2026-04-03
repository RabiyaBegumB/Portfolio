let inp1=document.getElementById("inp1"),
inp2=document.getElementById("inp2"),
meth=document.getElementById("meth"),
ans=document.getElementById("ans");

function show(){
    if(meth.value=="add"){
        ans.innerText=(inp1.value-0)+(inp2.value-0);
    }
    else if(meth.value=="sub"){
        ans.innerText=(inp1.value-0)-(inp2.value-0);
    }
    else if(meth.value=="mul"){
        ans.innerText=(inp1.value-0)*(inp2.value-0);
    }
    else{
        ans.innerText=(inp1.value-0)/(inp2.value-0);
    }
}