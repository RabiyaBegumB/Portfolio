let Lnum=prompt("Enter the last number: "),
count ;
for (i = 2; i <= Lnum; i++) {
    count=0;
    for (j = 2; j <= i; j++) {
        if (i % j == 0) {
            count++;
        }
    }
    if (count == 1) {
        console.log(i);
    }
}
