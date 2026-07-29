const images = [
    "https://c4.wallpaperflare.com/wallpaper/492/560/20/green-rice-terraces-nepal-nepal-wallpaper-preview.jpg",

    "https://c4.wallpaperflare.com/wallpaper/909/866/420/tilt-shift-lens-photography-of-sunflower-wallpaper-preview.jpg",

    "https://c4.wallpaperflare.com/wallpaper/315/739/723/berry-grape-fruit-food-wallpaper-preview.jpg",

    "https://c4.wallpaperflare.com/wallpaper/944/353/70/freshness-food-taste-blur-wallpaper-preview.jpg"
];

const controlls = document.querySelectorAll('.controlls');
const slideImg = document.querySelector('.slide-img');

let imageIndex = 0;

function show(index) {
    imageIndex = index;
    slideImg.src = images[imageIndex];
}

controlls.forEach((el) => {
    el.addEventListener('click', (event) => {
        if (event.target.classList.contains('prev')) {
            let index = imageIndex - 1;
            if (index < 0) index = images.length - 1;
            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imageIndex + 1;
            if (index >= images.length) index = 0;
            show(index);
        }
    });
});

show(imageIndex);