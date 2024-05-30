/**
 * Конструктор для создания объектов книг.
 */
class Book {
    constructor(title, pubYear, price) {
      this._title = title;
      this._pubYear = pubYear;
      this._price = price;
    }
  
    /**
     * Выводит в консоль название и цену книги.
     */
    show() {
      console.log(`Название: ${this._title}, Цена: ${this._price}`);
    }
    get title() {
      return this._title;
    }
    set title(value) {
      if (value.trim() === '') {
        throw new Error('Название книги не может быть пустой строкой.');
      }
      this._title = value;
    }
    get pubYear() {
      return this._pubYear;
    }
    set pubYear(value) {
      if (value <= 0) {
        throw new Error('Год издания книги должен быть положительным числом.');
      }
      this._pubYear = value;
    }
    get price() {
      return this._price;
    }
    set price(value) {
      if (value <= 0) {
        throw new Error('Цена книги должна быть положительным числом.');
      }
      this._price = value;
    }
    static compare(book1, book2) {
      if (book1.pubYear < book2.pubYear) {
        return -1;
      } else if (book1.pubYear > book2.pubYear) {
        return 1;
      } else {
        return 0;
      }
    }
  }
  const isEmpty = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  };
  
  /**
   * Объект с классом.
   */
  let obj = {
    className: 'open menu',
  };
  
  /**
   * Добавляет класс в список классов объекта.
   */
  obj.addClass = function(cls) {
    if (!this.className.includes(cls)) {
      this.className += ` ${cls}`;
    }
    return this;
  };
  
  /**
   * Удаляет класс из списка классов объекта.
   */
  obj.removeClass = function(cls) {
    this.className = this.className.replace(` ${cls}`, '');
    return this;
  };
  
  /**
   * Возвращает число секунд, прошедших с начала текущего дня.
   */
  const getSecondsToday = () => {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  };
  
  /**
   * Форматирует дату в строку формата "дд.мм.гг".
   */
  const formatDate = (date) => {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };
  
  // Тестовый код
  const book1 = new Book('Война и мир', 1869, 1000);
  book1.show();
  
  try {
    book1.title = '';
  } catch (error) {
    console.error(error.message);
  }
  
  try {
    book1.pubYear = -1869;
  } catch (error) {
    console.error(error.message);
  }
  
  const book2 = new Book('Анна Каренина', 1877, 800);
  const book3 = new Book('Преступление и наказание', 1866, 700);
  
  const books = [book1, book2, book3];
  books.sort(Book.compare);
  console.log(books);
  
  console.log(isEmpty({[Symbol()]:true}));
  console.log(obj.className);
obj.addClass('active');
console.log(obj.className);
obj.removeClass('menu');
console.log(obj.className);

const jsonString = JSON.stringify(obj, null, 2);
console.log(jsonString);

const obj2 = JSON.parse(jsonString);
console.log(obj === obj2);

console.log(getSecondsToday());
console.log(formatDate(new Date()));
