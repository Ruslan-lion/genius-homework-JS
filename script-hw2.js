// Домашнє завдання№ 2 до модуля 23
//---------------- 1 ----------------
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruits = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];

// let fruitsName = fruits.map((item) => item.name);

// console.log(fruitsName);


//---------------- 2 ----------------
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let i = 2; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


//---------------- 3 ----------------
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//     console.log( `цифра ${i}!` );
//   }

// let i = 0;
// while (i < 5) {
//   console.log(`цифра ${i}!`);
//   i++;
//   }

//---------------- 4 ----------------
// Напишіть цикл, який пропонує prompt ввести число більше за 100.
// Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
// Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let value;

// do {
//   value = prompt("Введіть число більше за 100");
//   console.log(typeof (value)); // це для свого розуміння.

// } while (value !== null && (isNaN(value) || Number(value) < 100));

// if (value !== null) {
//   alert(`Ви ввели число більше за 100: ${value}, дякуємо!`);
// } else {
//   alert("Ви скасували ввід, до побачення!");
// }


//---------------- 5 ----------------
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: "Оля" },
//   { age: 29, name: "Аня" },
//   { age: 10, name: "Юля" },
//   { age: 20, name: "Катя" },
// ];

// let ageGirl = girls.map((item) => item.age);
// console.log(ageGirl); //  для себе, щоб бачити що масив виводиться

// const sum = ageGirl.reduce((sum, item) => sum + item);
// const averageAge = sum / ageGirl.length;

// console.log("Середній вік дівчат:", averageAge);


// // або так можна рішити після того як прочитав тут  https://uk.javascript.info/array-methods

// let result = girls.reduce((sum, current) => sum + current.age, 0);
// let resultAge = result / girls.length;

// console.log("Середній вік дівчат:", resultAge);
