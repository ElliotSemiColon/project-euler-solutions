// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

let sum = 0, sumsquares = 0;

for(let i = 1; i <= 100; i++){
    sum += i;
    sumsquares += i * i;
}

console.log((sum * sum) - sumsquares);