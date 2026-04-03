let details = [
    {
        name: "Raja",
        age: 28,
        course: "Web Development",
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
        course: "Python FullStack",
        loc: "Mumbai"
    },
    {
        name: "Susi",
        age: 28,
        course: "Python FullStack",
        loc: "Delhi"
    },
],
    courses = [];


for (d of details) {
    courses.push(d.course);
}
console.log(`Courses: ${courses}`)

for (let i = 0; i < courses.length; i++) {
    let count = 0;
    for (let j = i; j < courses.length; j++) {
        if (courses[i] == courses[j]) {
            count++;
        }
    }
    console.log(`${courses[i]} : ${count}`)
}

