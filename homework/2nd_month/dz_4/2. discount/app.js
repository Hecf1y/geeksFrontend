// function getPrice(price, discount) {
//   return price - (price * discount) / 100;
// }

// console.log(getPrice(1000, 50)); 



let priceInput = document.getElementById('price');
let discountInput = document.getElementById('discount');
let result = document.getElementById('result');


function getPrice(price, discount) {
    return price - (price * discount) / 100;
}

function update() {
    let price = Number(priceInput.value) ||  0;
    let discount = Number(discountInput.value) || 0;
    result.textContent = 'Итого: ' + getPrice(price, discount) + ' сом';
}



priceInput.addEventListener('input', update);
discountInput.addEventListener('input', update);

//если равна Э-Э или больше 100? 