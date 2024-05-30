/**
 * 1. Возвращает x, возведенное в n-ную степень.
 * @param {number} x Возводимое в степень число
 * @param {number} n Степень, натуральное число
 * @returns {number} Результат
 */
function pow(x, n){return x**n}
//-------------------------------------------------------------------
/**
 * 2. Считаем сумму чисел до n включительно.
 * @param {number} n Число до которого считаем сумму
 * @returns {number} 
 */
function sumTo(n){
    let s = 0
    for (let i=0; i<=n; i++) s+=i
    return s
}
//-------------------------------------------------------------------
/**
 * 3. Проверяет является ли год высокостным
 * @param {number} year
 * @returns {boolean} Вывод: Да/Нет
 */
function isLeapYear(year){return year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)}
//-------------------------------------------------------------------
/**
 * 4. Считает факториал числа n
 * @param {number} n 
 * @returns {bigint} Факториал числа n в формате BigInt
 */
function factorial(n){
    if (n == 0) return BigInt(1)
    if (n == 1) return BigInt(1)
    if (n >= 2) return BigInt(n) * BigInt(factorial(n - 1));
}
//-------------------------------------------------------------------
/**
 * 5. Считает n-ное число Фибоначчи
 * @param {number} n Порядковый номер числа 
 * @returns {bigint}  n-е число Фибоначчи
 */
function fib(n){
    if (!n) return BigInt(0)
    let a = BigInt(1)
    let b = BigInt(1)
    for (let i = 3; i <= n; i++) {
      let c = a + b
      a = b
      b = c
    }
    return b
}
//-------------------------------------------------------------------
/**
 * 6. Проверяет, больше ли y, чем x
 * Если равны, возвращает null
 * @param {number} x
 * @param {number} y
 * @returns
 */
function compare(x){return function(y){return y==x ? null : y>x}}
//-------------------------------------------------------------------
/**
 * 7. Считает сумму заданных чисел
 * @param  {...number} args Набор чисел
 * @returns {number} Сумма 
 */
function sum(...args){
    let s = 0
    for(let i of args) s+=i
    return s
}
//-------------------------------------------------------------------
/**
 * 8.Добавляет свойство "blackSpot" к объекту, используя уникальный символ
 * @param {object} obj объект, к которому нужно добавить свойство
 * @return Исходный объект с добавленным свойством "blackSpot"
 */
function addBlackSpot(obj) {
  if (typeof obj !== 'object' || obj === null) {
    throw new Error('obj должен быть объектом');
  }

  if (!obj.hasOwnProperty(Symbol.for('blackSpot'))) {
    obj[Symbol.for('blackSpot')] = true;
  }

  return obj;
}