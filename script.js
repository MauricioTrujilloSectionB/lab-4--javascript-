// Part 1
function greet (name = "Mauricio") { // Default :) 
    return `Hello, ${name}!`;
}

console.log(greet());
console.log(greet( `Trujillo`));

// Part 2
function addNumbers(num1 = 4, num2 = 6) {
    let sum = (num1 + num2)
    return `${num1} + ${num2} = ${sum}`;
}

console.log(addNumbers());

// Part 3
let x = 5;

function changeValue() {
    x = -5;
    return x;
}

console.log(changeValue());

// Part 4
function outerFunction() {
    let count = 0;

    return function() {
        count++;
        return count;
    }
}

console.log(outerFunction()()); // (you need to put 2 sets of brackets because of the inner function!)