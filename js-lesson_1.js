/** 1. Задать температуру в градусах по Цельсию. Вывести в alert соответствующую температуру в градусах по Фаренгейту. 
 * Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию
**/

function transformationFahrenheit(cls) {
    let fahrenheit = (9 / 5) * cls + 32 // формула расчета градусов по Фаренгейту
    alert(`Температура в градусах по Фаренгейту составляет: ${fahrenheit}`)
}

let celsius = +prompt("Введите температуру в градусах по Цельсию: ")
transformationFahrenheit(celsius)
