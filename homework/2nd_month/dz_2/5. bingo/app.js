let input1 = prompt("Сколько ты зарабатываешь?")

let a = ("фуу, нищеброд")
let b = ("базовый минимум")
let c = ("нууу, норм, пойдет")
let d = ("роскошный максимум")


if (input1 < 100_000) {
    console.log(a);

} else if (input1 >= 100_000 && input1 < 200_000) {
    console.log(b);

} else if (input1 >= 200_000 && input1 < 500_000) {
    console.log(c);

} else {
    console.log(d);
}