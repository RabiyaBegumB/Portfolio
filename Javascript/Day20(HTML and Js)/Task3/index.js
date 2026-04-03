let Img_Status =false;
function img_Change(){
    Img_Status=!Img_Status;
    if(Img_Status==true){
        document.getElementById("image").src="https://i.pinimg.com/736x/8b/00/52/8b005202d8be40823f5d522a31f95157.jpg";
    }
    else{
        document.getElementById("image").src="https://i.pinimg.com/1200x/41/97/f0/4197f0a6016776034bc61c071915d57a.jpg";
    }
}