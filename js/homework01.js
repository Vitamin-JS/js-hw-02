// =================  ЗАДАЧА 1-1 =============================
// ============================================================

// const name = "«Генератор защитного поля»"; // Write code in this line

// let price = 1000; // Write code in this line
// const firstMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code in this line

// price = 2000;
// const secondMessage = `Выбран ${name}, цена за штуку ${price} кредитов`; // Write code in this line

// console.log(firstMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'

// console.log(secondMessage);
// // 'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'

//  =================  ЗАДАЧА 1 - 2 ===========================
//  ===========================================================

// const invoice = 50;
// const stock = 100;

// // Write code under this line
// const message =
//   invoice <= stock
//     ? "Заказ оформлен, с вами свяжется менеджер"
//     : "На складе недостаточно товаров!";

// console.log(message);

//  =================  ЗАДАЧА 1 - 3 ===========================
//  ===========================================================

//      УСЛОВИЕ      Использование if else
//      Напиши скрипт имитирующий авторизацию администратора в панели управления.

//      Есть переменная message в которую надо будет записать одно из трех сообщений о результате:

//      const CANCELED_BY_USER = 'Отменено пользователем!'
//      const ACCESS_IS_ALLOWED = 'Добро пожаловать!'
//      const ACCESS_DENIED = 'Доступ запрещен, неверный пароль!
//      Выбор одного из трех значений зависит от того, какое значение будет у переменной userPassword(данные, которые может передать пользователь).Возможны такие варианты:

//      const ADMIN_PASSWORD = 'jqueryismyjam'.При таком значении userPassword переменной message следует присвоить ACCESS_IS_ALLOWED.
//      null.При таком значении userPassword переменной message следует присвоить CANCELED_BY_USER.
//      Любая строка, кроме ADMIN_PASSWORD.При таком значении userPassword переменной message следует присвоить ACCESS_DENIED.
//      Используйте if else if else для написания скрипта.

// const ADMIN_PASSWORD = "jqueryismyjam";

// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_IS_ALLOWED = "Добро пожаловать!";
// const ACCESS_DENIED = "Доступ запрещен, неверный пароль!";
// let message;

// // Write code under this line
// if (userPassword === ADMIN_PASSWORD) {
//   message = ACCESS_IS_ALLOWED;
// } else if (userPassword === null) {
//   message = CANCELED_BY_USER;
// } else {
//   message = ACCESS_DENIED;
// }

// console.log(message);

//  =================  ЗАДАЧА 1 - 4 ===========================
//  ===========================================================

//      УСЛОВИЕ
//      Использование if else и арифметических операторов
//      Напиши скрипт имитирующий вывод сообщений о списании средств на покупку товара.

//       Переменная credits хранит количество средств - 23580 кредитов.

//      Единица товара(дроида) стоит 3000 кредитов за штуку и это значение хранится в переменной pricePerDroid.

//       Переменная orderPieces принимает значения null(отказ от покупок) и целое положительное число(количество единиц товара).

//       Переменная message будет выводить сообщение.В эту переменную надо будет записать одно из трех сообщений о результате:

//      const CANCELED_BY_USER = 'Отменено пользователем!'
//      Вы купили ${ } дроидов, на счету осталось ${ } кредитов
//      const ACCESS_DENIED = 'Недостаточно средств на счету!'
//      Используйте вспомогательную переменную totalPrice, которая принимает рассчитанную общую цену заказа.
//      Используйте вспомогательную переменную balanceCredit, которая принимает разницу между credits и totalPrice.
//      А также используйте if else для выбора значений переменной message.

// const orderPieces = 10;

// const credits = 23580;
// const pricePerDroid = 3000;
// const CANCELED_BY_USER = "Отменено пользователем!";
// const ACCESS_DENIED = "Недостаточно средств на счету!";

// let totalPrice; // Write code on this line
// let balanceCredit; // Write code on this line
// let message;

// totalPrice = orderPieces * pricePerDroid;
// balanceCredit = credits - totalPrice;

// // Write code under this line
// if (orderPieces == null) {
//   message = "Отменено пользователем!";
// } else if (totalPrice <= credits) {
//   message = `Вы купили ${orderPieces} дроидов, на карточке осталось ${balanceCredit} гривен`;
// } else {
//   message = "Недостаточно средств на счету!";
// }

// console.log(message);

//  =================  ЗАДАЧА 1 - 5 ===========================
//  ===========================================================

//      УСЛОВИЕ     Использование switch, if и методов slice, toUpperCase, toLowerCase
//      Напиши скрипт имитирующий оформление заказа в избранную страну.

//      Пользователь может оформить доставку товара к себе в страну, указав ее в переменной countryName.
//      Учти, пользователь может ввести имя страны не только буквами нижнего регистра, а к примеру 'кИтАЙ'.
//      Поэтому надо перезаписать текст переменной countryName так, чтобы первая буква(свойство[0]) была
//      заглавной(метод toUpperCase), а остальные буквы(метод slice) были в нижнем регистре(метод toLowerCase).

//      Переменная message будет выводить сообщение.В эту переменную надо будет записать
//      одно из трех сообщений о результате:

//      const CANCELED_BY_USER = 'Отменено пользователем!'
//      Доставка в ${ } будет стоить ${ } кредитов
//      const NO_DELIVERY = 'В выбранную страну доставка не доступна'.
//      Для определения стоимости(переменная price) или записи сообщения о невозможности доставки
//      используй switch.

//      В случае, если доставка возможна(цена больше 0), сформируй сообщение о стоимости доставки в
//      указанную страну с помощью if.

//      Ниже приведен список стран и стоимость доставки.

//      Китай - 100 кредитов
//      Австралия - 170 кредитов
//      Индия - 80 кредитов
//      Ямайка - 120 кредитов

//      если countryName = "КитаЙ"  => message = 'Доставка в Китай будет стоить 100 кредитов'
//      если countryName =  null    => message = 'Отменено пользователем!'
//      если countryName = "Чили"   => message = 'В выбранную страну доставка недоступна.'

const countryName = "индия";

const CANCELED_BY_USER = "Отменено пользователем!";
const NO_DELIVERY = "В выбранную страну доставка недоступна.";
const CHINA = "Китай";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAICA = "Ямайка";
let message;
let price = 0;
let country;
if (countryName === null) {
  message = CANCELED_BY_USER;
} else {
  country = countryName[0].toUpperCase() + countryName.slice(1).toLowerCase(); // Write code on this line  Сделать 1ю букву большой, а остальные маленькими
  switch (country) {
    // Write code under this line   Сделать SWITCH страна-цена доставки
    case "Китай":
      price = 100;
      break;

    case "Австралия":
      price = 170;
      break;

    case "Индия":
      price = 80;
      break;

    case "Ямайка":
      price = 120;
      break;

    default:
      message = NO_DELIVERY;
  }
}

// console.log(country);

if (price > 0) {
  message = `Доставка в ${country} будет стоить ${price} кредитов`;
}

console.log(message);
