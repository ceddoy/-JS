function getSum(a, b) {
    return a + b;
}

function getSubstraction(a, b) {
    return a - b;
}

function getMultiplication(a, b) {
    return a * b;
}

function getDivision(a, b) {
    return a / b;
}

let a = +prompt('Введите 1-ое число для арифметической операции: ')
let b = +prompt('Введите 2-ое число для арифметической операции: ')

let operator = prompt("Какую арфметическую операцию вы хотите произвести (пример, +, -, *, /): ")

if (operator == '+')
    alert(getSum(a, b));
else if (operator == '-')
    alert(getSubstraction(a, b));
else if (operator == '*')
    alert(getMultiplication(a, b));
else if (operator == '/')
    if (b != 0)
        alert(getDivision(a, b));
    else
        alert("На ноль делить нельзя.")
else
    alert('Такая арифметическая операция не реализована.')