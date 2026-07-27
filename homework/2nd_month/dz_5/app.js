const blockLeft = document.getElementById("block_left");
const blockRight = document.getElementById("block_right");

// document.getElementById("purp-btn").addEventListener("click", () => {
//      blockLeft.style.backgroundColor = "purple"
// });

const colors = {
    "purp-btn": "#8b5cf6",
    "red-btn": "#ef4444",
    "ornj-btn": "#f97316",
    "yellow-btn": "#eab308",
    "green-btn": "#22c55e",
    "blue-btn": "#3b82f6",
};

document.querySelectorAll(".left_buttons button").forEach((btn) => {
    btn.addEventListener("click", () => {
        blockLeft.style.backgroundColor = colors[btn.id];
    });
});

document.querySelectorAll(".right_buttons button").forEach((btn) => {
    btn.addEventListener("click", () => {
        blockRight.style.backgroundColor = colors[btn.id];
    });
});

const colorValues = Object.values(colors);
let step = 0;
let spinInterval = 0;

spinBtn.addEventListener("click", () => {
    clearInterval(spinInterval);

    spinInterval = setInterval(() => {
        blockLeft.style.backgroundColor = colorValues[step % colorValues.length];
        blockRight.style.backgroundColor = colorValues[(step + 3) % colorValues.length];
        step++;
    }, 100);

    setTimeout(() => {
        clearInterval(spinInterval);
    }, 2000);
});