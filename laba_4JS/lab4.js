//задания 1,2,3
class Book {
    constructor(title, pubYear, price) {
        this._title = title;
        this._pubYear = pubYear;
        this._price = price;
    }
    get title() {
        return this._title;
    }
    set title(text) {
        if (typeof text === 'string' && text.trim() !== '')
            this._title = text.trim();
        else
            console.error('Title непустая строка.');
    }
    get pubYear() {
        return this._pubYear;
    }
    set pubYear(newPubYear) {
        if (typeof newPubYear === 'number' && newPubYear > 0)
            this._pubYear = newPubYear;
        else
            console.error('pubYear положительное число.');
    }
    get price() {
        return this._price;
    }
    set price(newPrice) {
        if (typeof newPrice === 'number' && newPrice > 0)
            this._price = newPrice;
        else
            console.error('Price положительное число.');
    }
    show() {
        console.log(`Название: ${this._title},\nГод публикации: ${this._pubYear},\nЦена: ${this._price}`);
    }
    static compare(book1, book2) {
        return book1.pubYear - book2.pubYear;
    }
}
let book1 = new Book('Убить пересмешника', 1960, 400);
book1.show();
book1.price = 400;
book1.show();

console.log(book1._price);

let book2 = new Book('Jane Eyre', 1847, 590);
book2.show()

let book3 = new Book('Little Women', 1868, 490);
book3.show()

let books = [book1, book2, book3];
// console.log(books);
books.sort(Book.compare);
console.log("Книги после сортировки по году издания:");
for (let i = 0; i < books.length; ++i)
    books[i].show();
//-----------------------------------------------------------------
// Задание 4
function isEmpty(_object) {

    for (let key in _object)
        return false;

    if (Object.getOwnPropertySymbols(_object).length > 0)
        return false;

    return true;
}
let obj1 = { [Symbol()]: true };
let obj2 = {};
console.log("Объект 1", isEmpty(obj1));
console.log("Объект 2", isEmpty(obj2));
//-----------------------------------------------------------------
// Задание 5
let classObject = {

    className: "open menu",

    addClass(cls) {
        let classes = this.className.split(' ');
        if (!classes.includes(cls))
            this.className += " " + cls;

        return this;
    },

    removeClass(cls) {
        let classes = this.className.split(' ');
        let index = classes.indexOf(cls);

        if (index !== -1) {
            classes.splice(index, 1);
            this.className = classes.join(' ');
        }
    }
}

classObject.addClass('close');
console.log(classObject.className);

classObject.addClass('open');
console.log(classObject.className);

classObject.removeClass('menu');
console.log(classObject.className);
//-----------------------------------------------------------------
// Задание 6
let jsonString = JSON.stringify(classObject, null, 2);
console.log(jsonString);

let object2 = JSON.parse(jsonString);
console.log('Сравнение объектов из JSON:', JSON.stringify(object2) === JSON.stringify(classObject));