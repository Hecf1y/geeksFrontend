let weather = prompt("Температура по ощущениям");
let info = ("Ощущается как ");

if (weather <= 0) {
    console.log(info + "морозно");
}
else if (weather <= 15) {
    console.log(info + "Прохладно");

} else if (weather <= 30) {
    console.log(info + "Жарко");
}