let x = 10
let y = 5
let z = 6
// Cach 1
if (x > y && x > z) {
    console.log(x);
}
if (y > x && y > z) {
    console.log(y);
}
if (z > x && z > y) {
    console.log(z);
}

// Cach 2
let max = x

if (y > max) {
    max = y
}
if (z > max) {
    max = z
}

console.log(max)