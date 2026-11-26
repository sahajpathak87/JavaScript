// Q4: Find the largest among three numbers
const x = 12, y = 45, z = 30;
let largest;

if (x >= y && x >= z) {
  largest = x;
} else if (y >= x && y >= z) {
  largest = y;
} else {
  largest = z;
}

console.log(`Largest among ${x}, ${y} and ${z} is ${largest}`);
