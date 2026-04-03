Status=false;
function txt_change(){
    Status=!Status;
    if(Status==true){
        document.getElementById("btn").innerText="Change";
    }
    else{
        document.getElementById("btn").innerText="Click";
    }
}