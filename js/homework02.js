// =================  ЗАДАЧА 2-1 ================================================
// ==============================================================================

// Использование for
// Напиши функцию getItemsString(array), которая получает массив и возвращает строку, полученную из
// объединения(конкатенации) строк в формате ${ номер элемента } - ${ значение элемента } \n,
// где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1. К примеру для первого элемента массива['Mango', 'Poly', 'Ajax']
// с индексом 0 будет выведено '1 - Mango', а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления(конкатенации) строк внутри цикла for

//     const getItemsString = function (array) {
//       "use strict";
//       // Write code under this line
//       let result = "";

//       for (let i = 0; i <= array.length - 1; i += 1) {
//         result = result + `${i + 1} - ${array[i]}\n`;
//        // return result; остановит выполнение ф-ции после 1й итерации
//       }
//       console.log(result);

//       return result;
//     };

//     getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

/* Пример
'1 - Mango
2 - Poly
3 - Ajax
4 - Lux
5 - Jay
6 - Kong
'
*/

// =================  ЗАДАЧА 2-2 =================================================
// ===============================================================================
// Подсчет стоимости гравировки украшений
// Напиши скрипт подсчета стоимости гравировки украшений.Для этого создай функцию
// calculateEngravingPrice(message = "", pricePerWord = 0) принимающую строку(в строке будут только
// слова и пробелы) и цену гравировки одного слова, и возвращающую цену гравировки всех слов в строке.

// Для решения этой задачи не используйте циклы.Т.е.никаких for, while, do while, for of,
// for in, forEach или функциональных методов.

// -----------------    Решение   --------------------------------------------------
//const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord * message.split(" ").length;

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

//console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 20)); // 160

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40)); // 240

//console.log(calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20)); // 120

//console.log(calculateEngravingPrice('Uno', 100)); // 100

// =================  ЗАДАЧА 2-3 =================================================
// ===============================================================================

// Поиск самого длинного слово в строке с пробелами
// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку
// (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

// -----------------    Решение   --------------------------------------------------

// function findLongestWord(string = "") {
//   // Write code under this line
//   let words = string.split(" ");
//   let longestWord = "";

//   for (const word of words) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'
// console.log(findLongestWord("Google do a roll"));  // 'Google'
// console.log(findLongestWord("May the force be with you"));  // 'force'
//

// =================  ЗАДАЧА 2-4 =================================================
// ===============================================================================

// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует
// ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и
// добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.

// -----------------    Решение   --------------------------------------------------

// function formatString(string, maxLength = 40) {
//   // Write code under this line
//   let checkString = string.length;
//   console.log(checkString);
//   if (string.length > maxLength) {
//     console.log("Ok");
//     string = string.slice(0, maxLength) + "...";
//   }
//   return string;
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 30));
// 'Vestibulum facilisis, purus ne...'
//

// =================  ЗАДАЧА 2-5 =================================================
// ===============================================================================

// Функция предикат
// Функция предикат возвращает true или false

// Напиши функцию checkForSpam(message), принимающую 1 параметр message - строку.Функция проверяет ее на
// содержание слов spam и sale.Если нашли запрещенное слово то функция возвращает true, если
// запрещенных слов нет функция возвращает false.Слова в строке могут быть в произвольном регистре.

// -----------------    Решение   --------------------------------------------------
//

// function checkForSpam(str) {
//   "use strict";
//   // Write code under this line
//   let checkString = str.toLowerCase();
//   console.log(checkString);
//   let resultCheck = false;

//   if (checkString.includes("spam") || checkString.includes("sale")) {
//     console.log("Advertise");
//     resultCheck = true;
//   }

//   return resultCheck;
// }

// console.log(checkForSpam("Latest technology news")); // false
// console.log(checkForSpam("JavaScript weekly newsletter")); // false
// console.log(checkForSpam("Get best sale offers now!")); // true
// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
//
//

// =================  ЗАДАЧА 2-6 =================================================
// ===============================================================================

// Создание нового массива на основе преобразования данных из старого массива
// Напиши функцию mapArray(array), принимающую 1 параметр array - массив чисел.
// Функция создает новый массив numbers размером в длину массива array и заполняет его числами
// из массива array умноженными на 10. Для перебора массива и добавления новых значений используй цикл for.
// По завершению перебора массива array возвращается массив numbers.
//

// -----------------    Решение   --------------------------------------------------
//
// function mapArray(array) {
//   "use strict";
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2])); // [-20, 0, 20]
// console.log(mapArray([-2.5, 0, 2.5])); // [-25, 0, 25]
//
//

// =================  ЗАДАЧА 2-7 =================================================
// ===============================================================================
//
// Создание нового массива на основе отбора из исходного массива
// Напиши функцию filterArray(array), принимающую 1 параметр array - массив.
// Функция проверяет каждое значение массива - является ли значение конечным числом(Number.isFinite).
// Для проверки используй цикл for.Числа добавляются в новый массив numbers с помощью метода push,
//   а не числа - игнорируются.
// По завершению проверки массива array возвращается массив numbers.
//

// -----------------    Решение   --------------------------------------------------
//

// function filterArray(array) {
//   "use strict";
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

//console.log(filterArray([-2, 0, 2]));   // [-2, 0, 2]
//console.log(filterArray([1, NaN, Infinity]));  // [1]
// console.log(filterArray([0, -0, 100, "100"]));  // [0, 0, 100]
//console.log(filterArray([undefined, false, null, [], 1]));   // [1]
//console.log(filterArray([{}, () => {}, 2]));   // [2]
//

// =================  ЗАДАЧА 2-8 =================================================
// ===============================================================================
//
// Вычисление суммы массива
// Напиши функцию reduceArray(array), которая принимает числовой массив array.Если массив array не пустой,
// необходимо посчитать сумму всех элементов массива, используя цикл for.
// Для подсчета суммы используй переменную total.
// Функция должна возвращать 0 если массив пустой и значение total в противном случае.
//

// -----------------    Решение   --------------------------------------------------
//
// function reduceArray(array) {
//   "use strict";
//   let total = 0;

// Write code under this line
// for (let i = 0; i < array.length; i += 1) {
//   if (array[i] !== 0) {
//     total = total + array[i];
//   }
// }

// 2й вариант
// for (const number of array) {
//   total += number;
// }

// return total;
// }
//

// console.log(reduceArray([1, 2, 3])); // 6
// console.log(reduceArray([-2, 0, 2])); // 0
// console.log(reduceArray([1, 2, 2.5])); // 5.5
// console.log(reduceArray([0, 0, 0]));
//
//

// =================  ЗАДАЧА 2-9 =================================================
// ===============================================================================
//
// Есть массив logins с логинами пользователей.Напиши скрипт добавления логина в массив logins.
// Добавляемый логин должен:

// проходить проверку на длину от 4 до 16 - ти символов включительно
// быть уникален, то есть отсутствовать в массиве logins
// Разбей задачу на подзадачи с помощью функций.
// Проверку на отсутствие аргументов или на правильный тип аргументов делать не нужно.

// +++++     Напиши функцию isLoginValid(login), в которой проверь количество символов параметра login и
// верни true или false в зависимости от того, попадает ли длина параметра в заданный диапазон
// от 4 - х до 16 - ти символов включительно.

// +++++     Напиши функцию isLoginUnique(allLogins, login), которая принимает список всех логинов и добавляемый логин
// как параметры и проверяет наличие login в массиве allLogins, возвращая true если такого логина еще нет
// и false если логин уже используется.

// Напиши функцию addLogin(allLogins, login) которая:

// Принимает новый логин и массив всех логинов как параметры
// Проверяет валидность логина используя вспомогательную функцию isLoginValid
//      Если логин не валиден, прекратить исполнение функции addLogin и вернуть строку
//     'Ошибка! Логин должен быть от 4 до 16 символов'

// Если логин валиден, функция addLogin проверяет уникальность логина с помощью функции isLoginUnique
// Если isLoginUnique вернет false, тогда addLogin не добавляет логин в массив и возвращает строку
// 'Такой логин уже используется!'
// Если isLoginUnique вернет true, addLogin добавляет новый логин в logins и возвращает строку
// 'Логин успешно добавлен!'
//

// -----------------    Решение   --------------------------------------------------
//

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   let isLoginValid = false;
//   if (login.length >= min && login.length <= max) {
//     isLoginValid = true;
//   }
//   return isLoginValid;
// }

// // console.log(isLoginValid("123456789"));

// // const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// function isLoginUnique(allLogins, login) {
//   "use strict";
//   // Write code under this line
//   let isLoginUnique = true;

//   for (const number of allLogins) {
//     if (login === number) {
//       isLoginUnique = false;
//     }
//   }

//   return isLoginUnique;
// }

// // console.log(isLoginUnique(logins, "qwerty123"));

// function isLoginValid(login, min = 4, max = 16) {
//   // Write code under this line
//   let isLoginValid = false;
//   if (login.length >= min && login.length <= max) {
//     isLoginValid = true;
//   }
//   return isLoginValid;
// }

// function isLoginUnique(allLogins, login) {
//   "use strict";
//   // Write code under this line
//   let isLoginUnique = true;

//   for (const number of allLogins) {
//     if (login === number) {
//       isLoginUnique = false;
//     }
//   }

//   return isLoginUnique;
// }

// function addLogin(allLogins, login) {
//   "use strict";
//   const SUCCESS = "Логин успешно добавлен!";
//   const REFUSAL = "Такой логин уже используется!";
//   const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
//   let message;
//   // Write code under this line
//   if (isLoginValid(login)) {
//   } else {
//     message = ERROR;
//     //console.log(message);
//     return message;
//   }

//   if (isLoginUnique(allLogins, login)) {
//     allLogins.push(login);
//     message = SUCCESS;
//     //console.log(message);
//     return message;
//   } else {
//     message = REFUSAL;
//     //console.log(message);
//   }

//   return message;
// }

// const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

//console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

//console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

//console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// const logins = ["1234", "12345"];
// console.log(addLogin(logins, "789"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// ================Более короткое РЕШЕНИЕ Задачи 2-9========================================
// =========================================================================================

function isLoginValid(login, min = 4, max = 16) {
  return login.length >= min && login.length <= max;
}
function isLoginUnique(allLogins, login) {
  // Write code under this line
  return !allLogins.includes(login);
}
function addLogin(allLogins, login) {
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line
  if (!isLoginValid(login)) {
    message = ERROR;
    return message;
  } else if (!isLoginUnique(allLogins, login)) {
    message = REFUSAL;
    return message;
  } else {
    allLogins.push(login);
    message = SUCCESS;
    return message;
  }
}
