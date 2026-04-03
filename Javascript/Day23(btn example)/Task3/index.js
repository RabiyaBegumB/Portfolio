let inp=document.getElementById("inp"),
floor=document.getElementById("floor"),
eng=document.getElementById("eng"),
tamil=document.getElementById("tamil")

function show(data){
     if(data === "data"){
        data = inp.value;
    }
    switch(data){
        case "Furniture":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 3";
            tamil.innerText="தளம் 3";
            break;
        case "Mobiles":
            
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 2";
            tamil.innerText="தளம் 2";
            break;
        case "Bakery":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 4";
            tamil.innerText="தளம் 4";
            break;
        case "Gaming":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 4";
            tamil.innerText="தளம் 4";
            break;
        case "Womens Wear":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 1";
            tamil.innerText="தளம் 1";
            break;
        case "Toys":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 3";
            tamil.innerText="தளம் 3";
            break;
        case "Groceries":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 0";
            tamil.innerText="தளம் 0";
            break;
        case "Footwear":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 1";
            tamil.innerText="தளம் 1";
            break;
        case "Home Decor":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 3";
            tamil.innerText="தளம் 3";
            break;
        case "Fruits":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 0";
            tamil.innerText="தளம் 0";
            break;
        case "Vegetables":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 0";
            tamil.innerText="தளம் 0";
            break;
        case "Food":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 4";
            tamil.innerText="தளம் 4";
            break;
        case "Dairy":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 0";
            tamil.innerText="தளம் 0";
            break;
        case "Mens Wear":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 1";
            tamil.innerText="தளம் 1";
            break;
        case "Home Appliances":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 2";
            tamil.innerText="தளம் 2";
            break;
        case "Kids Wear":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 1";
            tamil.innerText="தளம் 1";
            break;
        case "Jewelry":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 1";
            tamil.innerText="தளம் 1";
            break;
        case "Makeup":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 1";
            tamil.innerText="தளம் 1";
            break;
        case "Laptop":
            floor.style="top:35%;z-index:1";
            eng.innerText="Floor 2";
            tamil.innerText="தளம் 2";
            break;
        default:
            floor.style="top:35%;z-index:1";
            eng.innerText="Invalid";
            tamil.innerText="தவறான உள்ளீடு";
    }
}

function hide(){
    floor.style="top:-50%;z-index:1";
}