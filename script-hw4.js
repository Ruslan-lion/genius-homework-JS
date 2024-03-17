// Домашнє завдання № 4 до модуля 25
//---------------- 1 ----------------

// 1) написати об*єкт студента який буде виводити ім*я, спеціальність, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити значення за допомогою call apply bind

const student = {
  name: name,
  specialty: "programmer",
  averageScore: 5,
  missedClasses: 3,
  studentInfo: function () {
    console.group(`${name} info:`);
    console.log(`Name is: ${this.name}`);
    console.log(`Specialty: ${this.specialty}`);
    console.log(`average score: ${this.averageScore}`);
    console.log(`number of missed classes: ${this.missedClasses}`);
    console.groupEnd();
  }
}

const student1 = {
  name: "Brendan Eich",
  specialty: "JavaScript developer",
  averageScore: 4.7,
  missedClasses: 1,
};

const student2 = {
  name: " Linus Torvalds",
  specialty: "software engineer",
  averageScore: 3.8,
  missedClasses: 3,
};

const student3 = {
  name: "James Gosling",
  specialty: "Java developer",
  averageScore: 4.2,
  missedClasses: 2,
};

student.studentInfo.bind(student1)();

student.studentInfo.call(student2);

student.studentInfo.apply(student3);


//---------------- 2 ----------------

// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке


document.querySelector("#htmlButton").addEventListener("click", () => {
  let htmlHint = document.querySelector("#htmlHint");
  htmlHint.style.display = htmlHint.style.display === "inline" ? "none" : "inline";
});

document.querySelector("#cssButton").addEventListener("click", () => {
  let cssHint = document.querySelector("#cssHint");
  cssHint.style.display = cssHint.style.display === "inline" ? "none" : "inline";
});



//---------------- 3 ----------------

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4


const productNameInput = document.getElementById('productName');
const priceUnitInput = document.getElementById('priceUnit');
const quantityInput = document.getElementById('quantity');
const result = document.getElementById('result');

function shop() {


  const productName = productNameInput.value;
  const priceUnit = parseFloat(priceUnitInput.value);
  const quantity = parseFloat(quantityInput.value);

  if (typeof productName !== 'string' || productName === '') {
    return alert("Будь-ласка введіть коректну назву товару.");
  }

  if (typeof priceUnit !== 'number' || isNaN(priceUnit) || priceUnit <= 0) {
    return alert('Будь-ласка введіть коректну ціну товару');
  }

  if (typeof quantity !== 'number' || isNaN(quantity) || quantity <= 0) {
    return alert('Будь-ласка введіть коректну кількість товару');
  }

  let totalPrice = priceUnit * quantity;

  return alert(`Загальна вартість ${productName} становить: ${totalPrice.toFixed(2)} грн.`);
}
form.addEventListener('submit', shop);

