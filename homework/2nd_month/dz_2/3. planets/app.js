let planet = prompt("Введите номер планеты (1 - 9)")
let info = (planet + "ая планета солнечной системы - ")

if (planet == 1) {
    console.log(info + "Меркурий");
} else if (planet == 2) {
    console.log(info + "Венера");
} else if (planet == 3) {
    console.log(info + "Земля");
} else if (planet == 4) {
    console.log(info + "Марс");
} else if (planet == 5) {
    console.log(info + "Юпитер");
} else if (planet == 6) {
    console.log(info + "Сатурн");
} else if (planet == 7) {
    console.log(info + "Уран");
} else if (planet == 8) {
    console.log(info + "Нептун");
} else if (planet == 9) {
    console.log(info + "Плутон (Карликовая планета)");
} 
