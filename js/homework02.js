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
//      const calculateEngravingPrice = (message = "", pricePerWord = 0) => pricePerWord * message.split(" ").length;

//      console.log(calculateEngravingPrice('Proin sociis natoque et magnis parturient montes mus', 10)); // 80

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

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'

// console.log(findLongestWord("Google do a roll"));
// 'Google'

// console.log(findLongestWord("May the force be with you"));
// 'force'

// =================  ЗАДАЧА 2-4 =================================================
// ===============================================================================

// Форматирование строки в зависимости от длинны строки
// Напиши функцию formatString(string, maxLength = 40) которая принимает строку и форматирует
// ее если необходимо.

// Если длина строки не превышает maxLength, функция возвращает ее в исходном виде.
// Если длина больше maxLength, то функция обрезает строку до размера maxLength символов и
// добавляет в конец строки троеточие ..., после чего возвращает укороченную версию.
