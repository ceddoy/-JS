function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return arg1 + arg2
        case '-':
            return arg1 - arg2
        case '*':
            return arg1 * arg2
        case '/':
            return arg1 / arg2
    }
}

let arg1 = +prompt('Введите 1-ое число для арифметической операции: ')
let arg2 = +prompt('Введите 2-ое число для арифметической операции: ')

let operation = prompt("Какую арфметическую операцию вы хотите произвести (пример, +, -, *, /): ")

alert(mathOperation(arg1, arg2, operation))