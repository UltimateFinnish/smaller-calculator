function add(num1, num2) {
    return resultAdd = num1 + num2;
};

function subtract(num1, num2) {
    return resultSubtract = num1 - num2;
};

function divide(num1, num2) {
    return resultDivide = num1 / num2;
};

function multiply(num1, num2) {
    return resultMultiply = num1 * num2;
}

let display1 = document.querySelector('[data-num1]');
let num1 = 0;

function click0() {
    num1 = 0;
    display1.textContent += num1;
}