/**
 * 1.Этот код возводит в степень n число x
 * @param {number} x основание
 * @param {number} n степень
 * @returns x^n
 */
let x = prompt("Введите х (число возводимое в степень)",1);
let n = prompt("Введите n (степень)",1);
alert(x + "^" + n + " = "+pow(x, n));
function pow(x,n) {
    if (n === 0) {
      return 1;
    }
  
    if (n < 0) {
      x = 1 / x;
      n = -n;
    }
  
    let result = 1;
    while (n > 0) {
      result *= x;
      n--;
    }
    return result;  
  }
//-------------------------------------------------------------------
/**
 * 2.Вычисляет сумму всех целых чисел от 1 до n.
 * @param {number} n целое положительное число.
 * @returns {number} Сумма всех целых чисел от 1 до n
 */
function sumTo(n) {
  if (typeof n === 'number' && Number.isInteger(n) && n > 0) {
      let sum = 0;
      for (let i = 1; i <= n; i++) {
          sum += i;
      }
      return sum;
  } else {
      throw new Error("n должно быть целым положительным числом.");
  }
}
//-------------------------------------------------------------------
/** 
 * 3.Проверяет, является ли год високосным
 * @param {number} year год, который нужно проверить.
 * @returns true, если год високосный, иначе false
*/
function isLeapYear(year) {
  if (typeof year === 'number' && Number.isInteger(year)) {
      return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
  } else {
      throw new Error("year должно быть целым числом.");
  }
}
//-------------------------------------------------------------------
/**
 * 4.Этот код возвращает факториал числа n!, используя рекурсивный вызов.
 * @param {number} n число
 * @returns факториал числа n!
 */
function factorial(n) {
  if (n) 
    return (n * factorial(n-1));
  else 
    return 1; 
}
//-------------------------------------------------------------------
/**
 * 5.Этот код возвращает n-е число Фибоначчи.
 * Возвращаемое значение должно иметь тип BigInt.
 * @param {number} n число
 * @returns n-е число Фибоначчи
 */
function fib(n) {
  let a = 1n;
  let b = 1n;
  let c;
  if (n==0) return 0;
  if (n==1) return 1;
  if (n==2) return 1;
  for (let i = 3; i <= n; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  if (b==1n)
    b = 0;
  return b; 
}
//-------------------------------------------------------------------
/**
 * 6. принимает целочисленное значение x и возвращает анонимную функцию
 * @param {number} x
 * @return функцию сравнения
 */
function compare(x){
	let result = function(y){
    if (y > x) return true;
    else if (y < x) return false;
    else return null;
  }
  return result;
}
//-------------------------------------------------------------------
/**
 * 7. вычисляет сумму всех переданных чисел
 * @param {} numbers - Числа для суммирования
 * @return сумма всех чисел
 */
function sum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
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