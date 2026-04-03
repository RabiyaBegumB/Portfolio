let inp=document.getElementById("inp"),
txt=document.getElementById("txt");

inp.addEventListener("input",function(){
    txt.innerText=inp.value;
})