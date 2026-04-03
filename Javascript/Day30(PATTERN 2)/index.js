let star="";

for(let r=1;r<=5;r++){
    for(let StC=1;StC<=5-r;StC++){
        star+=" ";
        
    }
    for(let SpC=1;SpC<=r;SpC++){
        star+=" *";
    }
    star+="\n";
}
console.log(star);