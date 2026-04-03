function bgChange(){
    let r=Math.floor(Math.random()*255)-0;
    let g=Math.floor(Math.random()*255)-0;
    let b=Math.floor(Math.random()*255)-0;
    document.getElementById("clr1").innerText=r;
    document.getElementById("clr2").innerText=g;
    document.getElementById("clr3").innerText=b;
    let bgClr=`rgb(${r},${g},${b})`;
    document.getElementById("bg-clr").style.background=bgClr;
}