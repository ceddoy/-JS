/* *С помощью рекурсии организовать функцию возведения числа в степень. 
Формат: function power(val, pow), где val – заданное число, pow – степень. */

function power(val, pow) {
    return (pow == 1) ? val : (val * power(val, pow - 1));
}

let val = +prompt("Введите желаемое число: ")
let pow = +prompt("В какую степень вы хотите его возвести: ")

alert(power(val, pow));