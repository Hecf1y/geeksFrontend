const btn = document.getElementById("button");

function generatePassword() {
    for (let i = 0; i < 6; i++) {
        let num = Math.round(Math.random() * 9);
        document.getElementById("num-" + i).textContent = num;
        // console.log("Пароль:", num);
    }
}

btn.addEventListener("click", generatePassword);
generatePassword();