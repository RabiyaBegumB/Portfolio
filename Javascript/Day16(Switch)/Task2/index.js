let marks=prompt("Enter the mark: ");
switch(true){
    case (marks>=90 && marks<=100) :
        console.log("A Grade");
        break;
     case (marks>=75 && marks<90):
        console.log("B Grade");
        break;
    case (marks>=50 && marks<75):
        console.log("C Grade");
        break;
    case (marks>=35 && marks<50):
        console.log("D Grade");
        break;
    case (marks>=0 && marks<35):
        console.log("Fail");
        break;
    default:
        console.log("Invalid")
}