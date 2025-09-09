console.log("Challenge 1: Odd Numbers");
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}


console.log("\nChallenge 2: Decreasing Multiples of 3");
for (let i = 100; i >= 0; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}


console.log("\nChallenge 3: Print the Sequence");
for (let i = 4; i >= -3.5; i -= 1.5) {
  console.log(i);
}

console.log("\nChallenge 4: Sigma (Sum of 1 to 100)");
let sum = 0;
for (let i = 1; i <= 100; i++) {
  sum += i;
}
console.log("The sum is: " + sum);


console.log("\nChallenge 5: Factorial (Product of 1 to 12)");
let product = 1;
for (let i = 1; i <= 12; i++) {
  product *= i;
}
console.log("The product is: " + product);