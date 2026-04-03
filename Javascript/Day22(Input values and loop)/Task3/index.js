let modal=document.getElementById("modal"),
clickbtn=document.getElementById("clickbtn");
function slide(){
    modal.style="transform:translateY(0)"
    clickbtn.style="animation: none;"
    clickbtn.offsetHeight;
    clickbtn.style="animation: clicking 0.5s;"
}
function closeBox(){
    modal.style="transform: translateY(-175%)"
}