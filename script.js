// The goal of this function is to print out all numbers from 1 to 100 but with three exceptions:
// For every number that is divisible by 3 and 5, console log "FizzBuzz".
// For every number that is divisible by only 3 and not 5, console log "Fizz".
// For every number that is divisible by only 5 and not 3, console.log "Buzz".

//GOAL:
// 1
// 2
// Fizz
// 4
// Buzz
// ...
// 14
// FizzBuzz


function fizzBuzz() {
    for (var i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz!");
        } else if (i % 3 === 0) {
            console.log("Fizz!");
        } else if (i % 5 === 0) {
            console.log("Buzz!");
        } else {
            console.log(i);
        }
    }
};

// fizzBuzz();

// --------- PASSING PARAMETERS INTO A FUNCTION --------- //
function fizzBuzz2(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz!");
    } else if (num % 3 === 0) {
        console.log("Fizz!");
    } else if (num % 5 === 0) {
        console.log("Buzz!");
    } else {
        console.log(num);
    }
};

// fizzBuzz2(3);
// fizzBuzz2(5);
// fizzBuzz2(7);
// fizzBuzz2(30);
// fizzBuzz2(33);
// fizzBuzz2(65);

fizzBuzz2(Math.floor(Math.random() * 100));

var randomNumber = Math.floor(Math.random() * 100);
fizzBuzz2(randomNumber);


// --------- RETURNING A VALUE FROM A FUNCTION --------- //
function fizzBuzz3(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz!";
    } else if (num % 3 === 0) {
        return "Fizz!";
    } else if (num % 5 === 0) {
        return "Buzz!";
    } else {
        return num;
    }
};

// var answer = fizzBuzz3(60);
// console.log(answer);