let inputNum = prompt('Enter the number to be tested for prime number', '2, 3, 5, 11');
let primeNumbersArr = [];
alert(checkPrimeNumberLoop(parseInt(inputNum)) ? 'The number is a Prime Number': 'The number is not a Prime Number');

// alert(checkPrimeNumberSqrt(parseInt(inputNum)) ? 'The number is a Prime Number': 'The number is not a Prime Number');

// printPrimeNumbers(parseInt(inputNum));

// uses loop to determine prime numbers
function checkPrimeNumberLoop(num) {
    if (num <= 1 ) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for(var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
console.log('prime Numbers :- ',primeNumbersArr);
// uses sqrt to determine prime numbers
function checkPrimeNumberSqrt(num) {
    if (num <= 1 ) {
        return false;
    }
    if (num === 2) {
        return true;
    }
    for (var i = 2; i < Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// function to display all prime numbers till the number entered also the number is included here as prime number.
function printPrimeNumbers(num) {
    for (var i = 2; i <= num; i++) {
        checkPrimeNumberLoop(i) ? primeNumbersArr.push(i) : 'nothing to do';
    }
    console.log(primeNumbersArr);
}

