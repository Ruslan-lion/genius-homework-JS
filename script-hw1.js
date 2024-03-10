// Домашнє завдання №1 до модуля № 22
//---------------- 1 ----------------
// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// По черзі розкоментувати
// let value = 1;
// let value = 0;
// let value = -3;

// value > 0 ? console.log(true) : console.log(false);


//---------------- 2 ----------------

// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// По черзі розкоментувати
// let value = "test";
// let value = "qwerty";
// let value = "true";

// if (value === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }


//---------------- 3 ----------------

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.


// По черзі розкоментувати
// let value = 1;
// let value = 10;
// let value = 13;


// switch (true) {
//   case value > 10:
//     value -= 5;
//     break;
//   case value < 10:
//     value += 5;
//     break;
//   default:
//     break;
// }

// console.log(`Результат: ${value}`);



//---------------- 4 ----------------

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу


// let month = parseInt(prompt("Введіть будь-ласка номер місяця від 1 до 12"));

// console.log(typeof month); // для власної перевірки типу отриманих даних

// switch (month) {
//   case 1:
//     alert ("Січень");
//     break;
//   case 2:
//     alert("Лютий");
//   break;
//   case 3:
//     alert("Березень");
//     break;
//   case 4:
//     alert("Квітень");
//   break;
//   case 5:
//     alert("Травень");
//   break;
//   case 6:
//     alert("Червень");
//   break;
//   case 7:
//     alert("Липень");
//   break;
//   case 8:
//     alert("Серпень");
//   break;
//   case 9:
//     alert("Вересень");
//   break;
//   case 10:
//     alert("Жовтень");
//   break;
//   case 11:
//     alert("Листопад");
//   break;
//   case 12:
//     alert("Грудень");
//   break;
//   default:
//     alert("Невірне число місяця, повторіть операцію ще раз будь-ласка");
//   break
// }



//---------------- 5 ----------------

//Зробіть сервіс який отримує 
//Поверніть користувачу сумму цих чисел


// let value = parseInt(prompt("Введіть тризначне число"));


// let value1 = Math.floor(value / 100);
// let value2 = Math.floor((value % 100) / 10);
// let value3 = value % 10;

// let sum = value1 + value2 + value3;

// alert("Сума цифр числа " + value + " дорівнює " + sum);