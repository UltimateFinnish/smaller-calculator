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

[...document.getElementsByClassName("allButtons")].forEach(function(item) {
    item.addEventListener('click', function() {
        obj[this.id]();
    })
})

let obj = {
    btn0: function() {
        console.log("0");
    },
    btn1: function() {
        console.log("1");
    },
    btn2: function() {
        console.log("2");
    },
    btn3: function() {
        console.log("3");
    },
    btn4: function() {
        console.log("4");
    },
    btn5: function() {
        console.log("5");
    },
    btn6: function() {
        console.log("6");
    },
    btn7: function() {
        console.log("7");
    },
    btn8: function() {
        console.log("8");
    },
    btn9: function() {
        console.log("9");
    }
}