// let fruits=["Apple","Orange","Pine Apple","Grapes","Mango","Strawberry"];
// let veg=["Carrot","Tomato","Potato","Onion"];
// let juice=["Coke","Sprite","7up"]
// console.log(fruits.concat(veg,juice));
// console.log(fruits)
// console.log(fruits.flat(2));
// console.log(fruits.join(" ___ "));
// console.log(Array.isArray(fruits));

// let a="hello ";
// console.log(a.slice(2,4));

let a = ["ratan tata", ["azim priemij", ["mukesh ambani"] , "anil ambani"] ,"anand mahindra" ];
let b=["shiv nadar", "naveen jindal", "rahul bajaj", "kishore biyani"] ;

console.log(a,a);//['ratan tata', ['azim priemij', ['mukesh ambani'] , 'anil ambani'] ,'anand mahindra' ]
                // ['ratan tata', ['azim priemij', ['mukesh ambani'] , 'anil ambani'] ,'anand mahindra' ]

a[1][1].splice(0,1);//['mukesh ambani']

console.log(a[1].toString());//'azim priemji,,anil ambani'

(a[1].splice(1,0,b));//['ratan tata', ['azim priemij', ['shiv nadar', 'naveen jindal', 'rahul bajaj', 'kishore biyani'] ,['mukesh ambani'], 'anil ambani'] ,'anand mahindra' ]

console.log(a[1][1].pop());//kishore biyani

console.log(a[1].toString().length);//62

console.log(a.flat(2));//['ratan tata', 'azim priemij', 'shiv nadar', 'naveen jindal', 'rahul bajaj' ,'mukesh ambani', 'anil ambani' ,'anand mahindra' ]
console.log(a);
a[1][1].splice(1,0,b);//['ratan tata', ['azim priemij', ['shiv nadar', 'naveen jindal', 'rahul bajaj'] ,['mukesh ambani'], 'anil ambani'] ,'anand mahindra' ]
console.log(a);