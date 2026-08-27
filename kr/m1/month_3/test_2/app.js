// 1) Напишите функцию для извлечения чисел - это функция которая принимает строку и возвращает массив всех чисел в строке
function extractNumbers(str) {
  const result = [];
  for (const char of str) {
    if (char >= "0" && char <= "9") {
      result.push(Number(char));
    }
  }
  return result;
}
console.log(extractNumbers("a1fg5hj6"));

// 2) Напишите функцию рекурсию которая будет выводить в консоль числа фибоначчи

let f = 144;
console.log(f);

function fibonacci(a = 1, b = 1) {
  if (a > f) {
    return;
  }
  console.log(a);
  setTimeout(() => {
    fibonacci(b, a + b);
  }, 1000);
}
fibonacci();

// 3) Сделать запрос на API используя async await и try catch
async function fetchProductTitles() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");

    const data = await response.json();
    data.forEach((product) => {
      console.log(product.title);
    });
  } catch {
    error;
  }
  {
    console.error("Ошибка данных");
  }
}

fetchProductTitles();

// 4) Создайте 5 кнопок внутри которого будут названия цветов на английском
const btn = document.querySelector("div");

btn.addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
    const color = event.target.textContent;
    document.body.style.backgroundColor = color;
  }
});

// 5) Создайте кнопку которая будет отображать блок либо скрывать его
const block = document.getElementById("myBlock");
const toggleBtn = document.getElementById("toggleBtn");

toggleBtn.addEventListener("click", function () {
  if (block.classList.contains("hidden")) {
    block.classList.remove("hidden");
    toggleBtn.textContent = "Скрыть блок";
  } else {
    block.classList.add("hidden");
    toggleBtn.textContent = "Показать блок";
  }
});

// 6) Отобразите на странице цифру ноль
let count = 0;

const counterElement = document.getElementById("counter");
const maxCount = 100;

const intervalId = setInterval(() => {
  count++;
  counterElement.textContent = count;
  if (count === maxCount) {
    clearInterval(intervalId);
    counterElement.classList.add("finished");
    console.log("Счетчик достиг 100!");
  }
}, 1);

// 7)Создайте кнопку при нажатии на которую будет отправляться GET запрос
const fetchBtn = document.getElementById("fetchBtn");
const statusDiv = document.getElementById("status");

async function fetchData() {
  try {
    const response = await fetch("data.json");
    const data = await response.json();
    console.log("Список :");
    data.products.forEach((product, index) => {
      console.log(
        `${index + 1}. ${product.name} - $${product.price} (${product.category})`,
      );
    });
  } catch (error) {
    console.error("Ошибка при получении данных:", error);
  }
}

fetchBtn.addEventListener("click", fetchData);
