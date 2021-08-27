console.log("Hello World".toUpperCase());
console.log(Math.floor(Math.random()*10));

// console.log("       |       |\n       |       |\n       |       |\n- - - - - - - - - - -\n".repeat(2));
// console.log("       |       |\n       |       |\n       |       |");

x = "       |       |       "
y = "- - - - - - - - - - - -"

for(let i = 0; i < 11; i++) {
    if (i == 3) {console.log(y);}
    else if (i == 7) {console.log(y);}
    else {console.log(x);}
}