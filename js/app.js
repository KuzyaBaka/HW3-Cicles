// Задание 1

const num1 = prompt(`Введите первое число диапазона`);
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
alert(`Привет`);

// Задание 3
