"use strict";
function showAge() {

  let age = prompt("Сколько вам лет?");
  let gender = prompt("Какой у вас пол? (мужской/женский)");
  age = parseInt(age);

  if (age >= 0 && age <= 17) {
    alert("Вам работать ещё рано — учитесь");
  } else if ((gender === "мужской" && age >= 18 && age <= 59) || (gender === "женский" && age >= 18 && age <= 54)) {
    alert("Вам ещё работать и работать");
  } else if ((gender === "мужской" && age >= 60 && age <= 64) || (gender === "женский" && age >= 55 && age <= 59)) {
    alert("Скоро пенсия!");
  } else if ((gender === "мужской" && age > 65) || (gender === "женский" && age > 60)) {
    alert("Вам пора на пенсию");
  } else {
    alert("Да кто ты такой?");
  }
}

function showCrows() {
    let num = prompt('На ветке сидит num ворон?');
    if ((num%100>=5 && num%100 <=20)||(num%100==0))
        {
            alert(`На ветке сидит ${num} ворон`);
        }
        else if ((num%10>=2 && num%10<=4)&&!(num%100>=10 && num%100 <=20))
        {
            alert(`На ветке сидит ${num} вороны`);
        }
        else {
            alert(`На ветке сидит ${num} ворона`);
        }
}

function showNum() {
    let num;

    do {
        num = prompt("Введите число больше 100?", 0);
    } while (num <= 100 && num);
}

function prstNum() {
    let n = prompt("Введите число n:");
    n = parseInt(n);
  
    for (let i = 2; i <= n; i++) {
      let isPrime = true;
  
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          isPrime = false;
          break;
        }
      }
  
      if (isPrime) {
        console.log(i);
      }
    }
  }

function generateTable() {
    const animals = ['dog', 'dog', 'dog', 'cat', 'cat'];
    const rows = prompt('Введите количество строк таблицы:');
    const table = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < 6; j++) {
        const randomIndex = Math.floor(Math.random() * animals.length);
        row.push(animals[randomIndex]);
      }

      table.push(row);
    }

    console.table(table);
  }