let btnStatus=false;
function toggle(){
    btnStatus=!btnStatus;
    if(btnStatus==true){
        document.getElementById("btn").innerText="OFF";
        document.getElementById("img1").style="display:none";
        document.getElementById("img2").style="display:unset";
        document.getElementById("bg-clr").style="background:radial-gradient(circle closest-side at 45% 50%,#d97e13,black)"
    }
    else{
        document.getElementById("btn").innerText="ON";
        document.getElementById("img1").style="display:unset";
        document.getElementById("img2").style="display:none";
        document.getElementById("bg-clr").style="background:black";
    }
}