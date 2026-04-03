let alpha = prompt("Enter a letter : ").toUpperCase(),
    pattern = "",
    n = 5,
    alf=document.getElementById("alf");

if (alpha == "A") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((r === 3) || ((c == 1 || c == n) && r > 3) || (r < 3 && (c == n - r - 1)) || (r == 2 && c == r * 2)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "B") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c == 1) || (r % 2 != 0 && c < n) || (r % 2 == 0 && c == n)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "C") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if (((r == 1 || r == n) && c > 1) || (c == 1 && r != 1 && r != n)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "D") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c == 1) || ((r == 1 || r == n) && c < n) || (c == n && (r != 1 && r != n))) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "E") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c == 1) || (r % 2 != 0)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "F") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c == 1) || (r == 1) || (r == 3 && c < n)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "G") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c == 1 && r != 1 && r != n) || ((r == 1 || r == n) && c > 1) || (c == n && r != 2) || (r == 3 && c > 2)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "H") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c == 1) || (c == n) || (r == 3)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "I") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((r == 1 || r == n || c == 3)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "J") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if (r == 1 || (c == 3 && r < n) || (c==2 && r==n ) || (c==1 && r==4)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "K") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c==1) || (c==2 && r==3) || (c<n && (c==n-r)) || (c<n && (c==n+r-n-1))) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "L") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c==1) || (r==n)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "M") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c==1) || (c==n) || (c==r && c<=3) || (c>3 && c==n-r+1)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "N") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c==1) || (c==n) || (c==r)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "O") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c==1 && r!=1 && r!=n) || (c==n && r!=1 && r!=n) || (r==1 && c!=1 && c!=n) || (r==n && c!=1  && c!=n)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "P") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c==1) || (r%2!=0 && c!=n && r<n) || (r==2 && c==n)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "Q") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if (((c==1 || c==n) && r<n-1 && r>1) || ((r==1 || r==n-1) && (c>1 && c<n)) || (r>=3 && c==r)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "R") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((c==1) || (r%2!=0 && c!=n && r<n && c!=n-1) || (r==2 && c==n-1) || (r>3 && c==n+r-n-2)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "S") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if ((r==1 && c!=1) || (r==3 && c!=1 && c!=n) || (r==n && c!=n) ||  (r==2 && c==1) || (r==n-1 && c==n)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "T") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if (r==1 || c==3) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "U") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if (((c==1  || c==n)&& r<n) || ((c%2==0 || c==3) && r==n)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "V") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if (r==1 && (c==1 || c==n) || (r==3 && c%2==0) || (r==5 && c==3)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "W") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if (c==1 || c==n || (r>2 && (c==n-r+1 ||  c==r))) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "X") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if (c==r || c==n-r+1) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "Y") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if (((c==r || c==n-r+1) && r<=3) || (r>3 && c==3)) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else if (alpha == "Z") {
    for (let r = 1; r <= n; r++) {
        for (let c = 1; c <= n; c++) {
            if (r==1 || r==n || c==n-r+1) {
                pattern += "* "
            }
            else {
                pattern += "  "
            }
        }
        pattern += "\n";
    }
    alf.innerText=pattern;
}
else{
    alf.innerText="Invalid";
}