// let arr=["apple","banana","cherry","grapes"];
// for(let fruit of arr){
//     console.log(fruit)
// }

let details = [
    {
        name: "Raja",
        age: 28,
        course: "Web Development FullStack",
        loc: "Chennai"
    },
    {
        name: "Maya",
        age: 25,
        course: "Python FullStack",
        loc: "Mumbai"
    },
    {
        name: "Kumar",
        age: 28,
        course: "Java FullStack",
        loc: "Salem"
    },
    {
        name: "John",
        age: 23,
        course: "Web Development",
        loc: "Chennai"
    },
    {
        name: "Zara",
        age: 25,
        course: "UI/UX",
        loc: "Mumbai"
    },
    {
        name: "Susi",
        age: 28,
        course: "Digital Marketing",
        loc: "Delhi"
    },
]

// for (let a of details) {
//     if (a.loc == "Chennai") {
//         console.log(a.course);
//     }
// }

let user = {
    name: "Raja",
    age: 28,
    course: "Web Development",
    loc: "Chennai"
}
for(let d in user){
    console.log(`${d} : ${user[d]}`);
}


