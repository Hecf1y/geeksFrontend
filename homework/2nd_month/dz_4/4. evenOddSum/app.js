let nums = [50, 60, 60, 45, 71];

function evenOddSum(nums) {
    let even = 0; //чёт
    let odd = 0; //нечёт

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            // console.log(nums[i])
            even = even + nums[i];
        } else {
            // console.log(nums[i])
            odd = odd + nums[i];
        }
    }

    return [even, odd];
}

let result = evenOddSum(nums);

// console.log(evenOddSum(nums));
console.log("Сумма чётных: " + result[0]);
console.log("Сумма нечётных: " + result[1]);