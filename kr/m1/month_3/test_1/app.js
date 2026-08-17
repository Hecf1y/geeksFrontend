//1) Напишите функцию, которая проверяет, содержит ли строка только цифры. Используйте регулярные выражения

const regExp = /^\d+$/;
const containsOnlyDigits = (str) => {
  return regExp.test(str);
};
console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));

//2) Напишите функцию, которая каждую секунду выводит в консоль сообщение "Прошла секунда". Используйте setInterval

const printEverySecond = () => {
  setInterval(() => {
    console.log("Прошла секунда");
  }, 1000);
};
printEverySecond();

//3) Вывести числа от 1 до 10 с интервалом в 1 секунду, затем остановить.

const count = () => {
  let i = 0;
  const interval = setInterval(() => {
    console.log(i);
    i++;
    if (i > 10) {
      clearInterval(interval);
    }
  }, 1000);
};
count();

//4) Создать блок 150 на 150 пикселей и получить его через дом элементы при нажатии на которую будет меняться его задний фон при повторном нажатии будет убираться цвет заднего фона - выполните эту задачу с использованием classList и его методов

//ver1
const box = document.getElementById("box");
box.addEventListener("click", () => {
  box.classList.toggle("active-bg");
});

//ver2
const box2 = document.getElementById("box2");

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

box2.addEventListener("click", () => {
  box2.style.backgroundColor = getRandomColor();
});

//55) Отправить GET запрос на такой JSON
const xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);

xhr.onload = () => {
  const data = JSON.parse(xhr.responseText);
  console.log(data);
};

xhr.send();
