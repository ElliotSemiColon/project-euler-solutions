// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number?

function sieve(lim){ //prime sieve generates primes to lim

  let limit = lim;
  let composites = [];
  let primes = [];

  for(let i = 0; i < limit; i++){ composites.push(false); }

  composites[0] = true; // 1 is not prime  

  for(let i = 2; i < Math.ceil(Math.sqrt(limit)); i++){
      
      for(let j = i * i; j <= limit; j+=i){
          composites[j - 1] = true;
      }
  }

  for(let k = 1; k < composites.length; k++){
      if(!composites[k]){ primes.push(k + 1); }
  }

  console.log(`gathered ${primes.length} primes below ${lim}`);

  console.log(primes[primes.length - 1]);

  return primes;
}