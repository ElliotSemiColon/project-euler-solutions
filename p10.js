// The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

// Find the sum of all the primes below two million.


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

  //console.log(primes[primes.length - 1]);

  return primes;
}

function main(){

    let primes = sieve(2000000);

    let sum = 0;

    for(let j = 0; j < primes.length; j++){
        sum += primes[j];
    }

    console.log(sum);

}

main();