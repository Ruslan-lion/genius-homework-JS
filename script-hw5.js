// Домашнє завдання № 5 до модуля 26
//---------------- 1 ----------------

// Створити телефонну книгу
// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні


// -- В залежності від того яким чином ми отримуємо дані, можна написати два варіанти отримання інформації і відповідно рішити задачу.---

// ---- ***  Спосіб 1  *** ---

// class Abonent {
//   constructor({name, phoneNumber}) {
//     this.name = name;
//     this.phoneNumber = phoneNumber;
//   }

//   set userName(name) {
//     this.name = name;
//   }

//   set userPhoneNumber(phoneNumber) {
//     this.phoneNumber = phoneNumber;
//   }

//   get Info() {
//     return `Name subscriber: ${this.name}, phone number: ${this.phoneNumber}`;
//   }
// }

// const abonent1 = new Abonent({name:'Oliver', phoneNumber: '066-525-73-59'});
// const abonent2 = new Abonent({name:'Olivia', phoneNumber: '067-239-53-84'});
// const abonent3 = new Abonent({name:'Oscar', phoneNumber: '068-267-16-41'});

// console.log(abonent1);
// console.log(abonent2);
// console.log(abonent3);



// ---- ***  Спосіб 2  *** ---

// class Abonent {
//   constructor(name, phoneNumber) {
//     this.name = name;
//     this.phoneNumber = phoneNumber;
//   }

//   set userName(name) {
//     this.name = name;
//   }

//   set userPhoneNumber(phoneNumber) {
//     this.phoneNumber = phoneNumber;
//   }

//   get Info() {
//     return `Name subscriber: ${this.name}, phone number: ${this.phoneNumber}`;
//   }
// }

// const abonent1 = new Abonent('Oliver', '066-525-73-59');
// const abonent2 = new Abonent('Olivia', '067-239-53-84');
// const abonent3 = new Abonent('Oscar', '068-267-16-41');

// console.log(abonent1);
// console.log(abonent2);
// console.log(abonent3);