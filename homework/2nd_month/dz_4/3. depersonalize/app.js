let userName = prompt("Введите имя");


function depersonalize(userName) {
    let first = userName[0];
    let last = userName[userName.length - 1];
    let middle = "_".repeat(userName.length - 2);

    return first + middle + last;

}

console.log(depersonalize(userName));

// console.log(depersonalize("Евгений"));
// console.log(depersonalize("Сидоров"));
// console.log(depersonalize("Иванов"));



