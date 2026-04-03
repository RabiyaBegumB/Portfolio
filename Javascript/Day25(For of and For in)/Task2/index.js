let fruits=["Kiwi","Mango","JackFruit","Grapes","Orange"],
LargestLength=0,
SecondLength=0,
LargestFruitName="",
SecondLargestFruitName="";
console.log(`Fruits: ${fruits}`)

for(i=0;i<fruits.length;i++){
    if(LargestLength<fruits[i].length){
        SecondLength=LargestLength;
        LargestLength=fruits[i].length;
        SecondLargestFruitName=LargestFruitName;
        LargestFruitName=fruits[i];
    }
    else if(LargestLength==fruits[i].length){
        LargestFruitName+=","+fruits[i];
    }
    else if(SecondLength<fruits[i].length && LargestLength>fruits[i].length){
        SecondLength=fruits[i].length;
        SecondLargestFruitName=fruits[i];
    }
     else if(SecondLength==fruits[i].length){
        SecondLargestFruitName += "," + fruits[i];
    }
}
console.log(`Largest Length Fruit is ${LargestFruitName}`);
console.log(`Second Largest Length Fruit is ${SecondLargestFruitName}`);