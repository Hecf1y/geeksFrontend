const btn = document.getElementById('btn');
const body = document.querySelector('body');
const num = document.getElementById("count")

let count = 0;

btn.addEventListener('click', function () {
    body.classList.toggle('dark-theme');
    count = count + 1;
    num.innerHTML = count;
})



