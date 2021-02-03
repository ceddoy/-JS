// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

function primeNumbers(number) {
    if (number < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


const numMax = 100
let num = 0

while (num <= 100) {
    if (primeNumbers(num)) {
        console.log(num)
    }
    num++;
}