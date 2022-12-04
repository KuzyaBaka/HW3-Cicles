// Задание 1

/* const num1 = prompt(`Введите первое число диапазона`);
const num2 = prompt(`Введите второе число диапазона`);

if (+num2 - +num1 >= 5 || +num1 - +num2 >= 5) {
  if (+num1 < +num2) {
    for (let i = +num1; i <= +num2; i++) {
      console.log(i);
    }
  } else if (+num1 > +num2) {
    for (let i = +num1; i >= num2; i--) {
      console.log(i);
    }
  }
} else {
  alert(`Диапазон должен превышать 5 чисел`);
}

// Задание 2

const userPassword = `12345`;
const entPassword = prompt(`Введите пароль`);

for (; userPassword !== entPassword; ) {
  if (userPassword == entPassword) break;
  alert(`У вас осталась 2 попытки`);
  for (; userPassword !== entPassword; ) {}
}
alert(`Привет`); */

// Задание 3

const numberD1 = +prompt(`Введите первое число диапазона`);
const numberD2 = +prompt(`Введите второе число диапазона`);

for (let i = numberD1; i <= numberD2; i++) {
  function ex3() {
    let res1 = i > 100 ? `больше ста ` : `меньше ста `;
    let res2 = i % 2 === 0 ? `чётное ` : `нечётное `;
    let res3 = i % 1 === 0 ? `недробное ` : `дробное `;
    let res4 = i > 0 ? `больше нуля ` : `меньше нуля `;
    return res1 + res2 + res3 + res4;
  }
  console.log(`Ваше число ${i} ` + ex3());
}

// Задание 4

const numEx4 = +prompt(`Введите первое число диапазона`);
const numEx5 = +prompt(`Введите второе число диапазона`);
if (+numEx4 < +numEx5) {
  let count = 0;

  for (let i = +numEx4; i <= ( + 7) ; i++) {
    console.log(i);
  }
} else if (+numEx4 > +numEx5) {
  for (let i = +numEx4; i >= ( - 7); i--) {
    console.log(i);
  }
}
