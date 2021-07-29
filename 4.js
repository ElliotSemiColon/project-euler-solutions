//Largest palindrome product

function palindromic(x){ //tests whether x is palindromic

    let digits = `${x}`, reverse = "";

    for(let i = 0; i < digits.length; i++){ //reverses 'digits' string
        reverse += digits[digits.length - i - 1];
    }

    //console.log(reverse);

    if(digits == reverse){ return true; }
    return false;

}

function main(){

    let a = 100, b = 100, product, highest = 0;

    for(let i = 0; i <= 899; i++){
        for(let j = i; j <= 899; j++){ //j can start at i to reduce time complexity; combinations are symetrical (product)
            product = (a + i) * (b + j);
            if(palindromic(product) && product > highest) { highest = product; }
        }
    }

    console.log(highest);
}

main();