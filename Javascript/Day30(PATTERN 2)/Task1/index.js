let num = [[0, 1, 2], [0, 0, 3], [1, 0, 3], [0, 5, 0, 7], [8, 0, 0]],
    count = 0;
    console.log(num);
for (let i = 0; i < num.length; i++) {
    for (let j = 0; j < num[i].length; j++) {
        if (num[i][j] == "0") {
            count++;
        }
    }

}
console.log(`Count of 0 is ${count}`)
