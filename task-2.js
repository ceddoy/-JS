/* 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. 
Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров. Товары в корзине хранятся в массиве. 
Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины. */

const computerStoreWarehouse = [
    {
        product: 'CPU', 
        price: 4500, 
        quantity: 11
    },
    {
        product: 'Видеокарта', 
        price: 9460, 
        quantity: 7
    },
    {
        product: 'Материнская плата', 
        price: 3000, 
        quantity: 19
    },
    {
        product: 'Жетский диск', 
        price: 1500, 
        quantity: 15
    },
    {
        product: 'Блок питания', 
        price: 1200, 
        quantity: 30
    },
];

function countBasketPrice(computerStoreWarehouse) {
    let totalPrice = 0;
    for (let i = 0; i < computerStoreWarehouse.length; i++) {
      totalPrice += computerStoreWarehouse[i].price * computerStoreWarehouse[i].quantity;
    }
    return totalPrice;
  }

console.log(countBasketPrice(computerStoreWarehouse));