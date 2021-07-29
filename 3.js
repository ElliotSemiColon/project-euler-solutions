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

    return primes;
}

function getLarger(a, b){
    if(a > b){ return a; }
    return b;
}

function main(){

    let value = 600851475143;
    let flag = false;
    let largest = 0;
    let primes = sieve(100000);

    while(!flag){

        for(let i = 0; i < primes.length; i++){
            if(value % primes[i] == 0){
                console.log(`${value} / ${primes[i]} = ${value/primes[i]}`);
                value /= primes[i];
                
                largest = getLarger(primes[i], largest);
                i = primes.length;
            }
        }

        for(let j = 0; j < primes.length; j++){
            if(value == primes[j]){ //if the value is ever prime
                largest = getLarger(primes[j], largest);
                flag = true;
            }
        }
    }

    console.log(`largest prime factor: ${largest}`);
}

main();

//console.table(sieve());
