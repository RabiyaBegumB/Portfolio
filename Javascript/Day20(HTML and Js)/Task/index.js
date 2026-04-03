// Bg-clr change Task

Status=false;
function bg_Change(){
    Status=!Status;
    if(Status==true){
        document.getElementById("bg-clr").style="background-color:lightblue";
    }
    else{
       document.getElementById("bg-clr").style="background-color:burlywood";
    }
}


