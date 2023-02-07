
let b = +prompt("5+5")

while (isNaN(b)) {
    b = +prompt("5+5... enter with number")
}
console.log("your answer is " + b + " but the correct answer is 10");