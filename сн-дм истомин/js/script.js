// Перевод величин в сантиметры
const inches1 = 17;
const inches2 = 19;
const inches3 = 25;

const centimeters1 = inches1 * 2.54;
const centimeters2 = inches2 * 2.54;
const centimeters3 = inches3 * 2.54;

console.log(`${inches1} дюймов = ${centimeters1} см`);
console.log(`${inches2} дюймов = ${centimeters2} см`);
console.log(`${inches3} дюймов = ${centimeters3} см`);

// Проверка делимост числа 123456789 на 3
const number = 123456789;
const remainder = number % 3;

console.log(`Остаток от деления числа ${number} на 3 = ${remainder}`);

// Вычисление среднего арифметического
const sum2 = 500 + 600 + 700;
const count = 3;
const average = sum2 / count;

console.log(`Среднее арифметическое: ${average}`);

// Условие для дейсвий пешехода при различных сигналах светофора
const trafficSignal = 'красный';

if (trafficSignal === 'красный') {
  console.log('Стоять');
} else if (trafficSignal === 'желтый') {
  console.log('Приготовиться');
} else {
  console.log('Можно идти');
}

// Отображание большего из двух целых чисел
const num1 = 10;
const num2 = 20;

if (num1 > num2) {
  console.log(`Больше ${num1}`);
} else if (num2 > num1) {
  console.log(`Больше ${num2}`);
} else {
  console.log('Числа равны');
}

// Проверка равенства значений переменных test1 и test2
const test1 = 10;
const test2 = 20;

if (test1 === test2) {
  console.log('Значения равны');
} else {
  console.log('Значения не равны');
}