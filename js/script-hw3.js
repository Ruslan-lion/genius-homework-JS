// Домашнє завдання № 3 до модуля 24
//---------------- 1 ----------------
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }

// function checkAge(age) {
//   return (age > 18) ? true : confirm('Батьки дозволили?');
// }

// console.log(checkAge(21)); //Перевіряю для себе

// function checkAge(age) {
//   return age > 18 || confirm('Батьки дозволили?');
// }

// console.log(checkAge(15)); //Перевіряю для себе


//---------------- 2 ----------------
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// function min(a, b) {
//   return a < b ? a : b;
// }

// console.log(min(5, 7)); //Перевіряю для себе

// console.log(min(9, 4)); //Перевіряю для себе


//---------------- 3 ----------------
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask("Ви згодні?",
//   function () { alert("Ви погодились."); },
//   function () { alert("Ви скасували виконання."); }
// );

// const ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// }
// ask("Ви згодні?",
//   () => { alert("Ви погодились."); },
//   () => { alert("Ви скасували виконання."); }
// );

