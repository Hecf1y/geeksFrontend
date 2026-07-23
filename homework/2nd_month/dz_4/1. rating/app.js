// let rating = 5;

// function getRatingStars(rating) {
//     if (rating >= 1 && rating <= 5) {
//         return ("★".repeat(rating))
//     } else {
//         return ("Оценка от 1 - 5")
//     }

// }
// console.log(getRatingStars());


const input = document.getElementById("ratingInput");
const output = document.getElementById("starsOutput");

function getRatingStars(rating) {
    if (rating >= 1 && rating <= 5) {
        return "★".repeat(rating);
    } else {
        return "Оценка от 1 - 5";
    }
}

input.addEventListener("input", function () {
    const rating = Number(input.value);
    output.textContent = getRatingStars(rating);
});