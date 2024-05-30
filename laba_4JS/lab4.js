/**
 * Конструктор для создания объектов книг.
 */
class Book {
    /**
     * @param {string} title Название книги.
     * @param {number} pubYear Год издания книги.
     * @param {number} price Цена книги.
     */
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
  
    /**
     * Возвращает название книги.
     * @returns {string} Название книги.
     */
    get title() {
      return this._title;
    }
  
    /**
     * Устанавливает название книги.
     * @param {string} value Новое название книги.
     */
    set title(value) {
      if (value.trim() === '') {
        throw new Error('Название книги не может быть пустой строкой.');
      }
      this._title = value;
    }
  
    /**
     * Возвращает год издания книги.
     * @returns {number} Год издания книги.
     */
    get pubYear() {
      return this._pubYear;
    }
  
    /**
     * Устанавливает год издания книги.
     * @param {number} value Новый год издания книги.
     */
    set pubYear(value) {
      if (value <= 0) {
        throw new Error('Год издания книги должен быть положительным числом.');
      }
      this._pubYear = value;
    }
  
    /**
     * Возвращает цену книги.
     * @returns {number} Цена книги.
     */
    get price() {
      return this._price;
    }
  
    /**
     * Устанавливает цену книги.
     * @param {number} value Новая цена книги.
     */
    set price(value) {
      if (value <= 0) {
        throw new Error('Цена книги должна быть положительным числом.');
      }
      this._price = value;
    }
  
    /**
     * Сравнивает две книги по году издания.
     * @param {Book} otherBook Книга для сравнения.
     * @returns {number} -1, если текущая книга старше, 1, если младше, 0, если одинаковые.
     */
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
  
  /**
   * Проверяет, пустой ли объект.
   * @param {object} obj Объект для проверки.
   * @returns {boolean} true, если объект пустой, иначе false.
   */
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
   * @param {string} cls Класс для добавления.
   * @returns {object} Изменённый объект.
   */
  obj.addClass = function(cls) {
    if (!this.className.includes(cls)) {
      this.className += ` ${cls}`;
    }
    return this;
  };
  
  /**
   * Удаляет класс из списка классов объекта.
   * @param {string} cls Класс для удаления.
   * @returns {object} Изменённый объект.
   */
  obj.removeClass = function(cls) {
    this.className = this.className.replace(` ${cls}`, '');
    return this;
  };
  
  /**
   * Возвращает число секунд, прошедших с начала текущего дня.
   * @returns {number} Число секунд.
   */
  const getSecondsToday = () => {
    const now = new Date();
    return now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  };
  
  /**
   * Форматирует дату в строку формата "дд.мм.гг".
   * @param {Date} date Дата для форматирования.
   * @returns {string} Форматированная дата.
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
