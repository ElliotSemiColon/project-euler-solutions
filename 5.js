// console.log("init");

// let register = []; //counts how many factors from {2, 3, .., 19, 20} each number from 1 to 10000 has
// let limit = 1000000, highestFact = 20;

// for(let i = 0; i < limit; i++){
//     register.push(0); //starts each counter at 0
// }

// for(let j = 2; j <= highestFact; j++){
//     for(let k = 1; k <= register.length; k++){
//         if(k % j == 0){ register[k - 1]++; } //add a factor to each multiple of k
//     }
// }

// //console.groupCollapsed("factors");

// let highest = 0;

// for(let l = 19; l < register.length; l += 20){ //increments so as to only look at each multiple of 20 (starts on index 19 - represents the number 20)
//     //console.log(`${l+1} has ${register[l]} of the given factors`);
//     if(register[l] > highest){ highest = register[l]; }

//     if(register[l] == highestFact - 1){
//         console.groupEnd();
//         console.log(`${l + 1} is evenly divisible by the numbers 1 - ${highestFact}`);
//     }
// }

// //console.groupEnd();
// console.log(`exit with no number found, most factors any number had was ${highest}`);

console.log("init");

for(let i = 20; i < Math.pow(10, 9); i += 20){
    if(i % 11 == 0
        && i % 12 == 0
        && i % 13 == 0
        && i % 14 == 0
        && i % 15 == 0
        && i % 16 == 0
        && i % 17 == 0
        && i % 18 == 0 
        && i % 19 == 0){
        console.log(i);
    }
}

